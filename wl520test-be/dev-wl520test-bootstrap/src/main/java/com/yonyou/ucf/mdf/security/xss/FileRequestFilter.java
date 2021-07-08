package com.yonyou.ucf.mdf.security.xss;

import com.yonyou.ucf.mdd.ext.exceptions.BusinessException;
import org.apache.commons.collections4.MapUtils;
import org.apache.tomcat.util.http.fileupload.servlet.ServletFileUpload;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.util.unit.DataSize;
import org.springframework.util.unit.DataUnit;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.multipart.MultipartResolver;
import org.springframework.web.multipart.support.StandardServletMultipartResolver;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;
import java.util.*;
import java.util.regex.Pattern;

public class FileRequestFilter implements Filter {

    private static final Pattern FILE_PATTERN = Pattern.compile("[a-z0-9A-Z\u4e00-\u9fa5]+");

    private static final Logger logger = LoggerFactory.getLogger(FileRequestFilter.class);

    private static final DataSize FILE_MAX_SIZE = DataSize.of(10, DataUnit.MEGABYTES);

    @Override
    public void init(FilterConfig filterConfig) {
    }

    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain filterChain) throws IOException, ServletException {
        if (ServletFileUpload.isMultipartContent((HttpServletRequest) servletRequest)) {
            MultipartResolver resolver = new StandardServletMultipartResolver();
            MultipartHttpServletRequest multipartRequest = resolver.resolveMultipart((HttpServletRequest) servletRequest);

            Map<String, DataSize> overSizeFiles = filterFileSize(multipartRequest.getFileMap());
            if (MapUtils.isNotEmpty(overSizeFiles)) {
                throw new BusinessException("上传文件大小异常,只允许上传10M数据包");
            }
        }
        filterChain.doFilter(servletRequest, servletResponse);
    }

    /**
     * 获取不符合要求文件名称和类型规范的文件
     * @param request
     * @return
     */
    private List<String> filterUnAuthorizedFile(MultipartHttpServletRequest request) {
        if (request == null) {
            return new ArrayList<>();
        }
        List<String> unauthorizedFileNames = new ArrayList<>();
        Map<String, MultipartFile> fileMap = request.getFileMap();
        fileMap.forEach((fileParam, file) -> {
            if (!FILE_PATTERN.matcher(Objects.requireNonNull(file.getOriginalFilename())).matches()) {
                unauthorizedFileNames.add(file.getOriginalFilename());
            }
        });
        return unauthorizedFileNames;
    }

    /**
     * 获取超出文件大小超出限制的文件
     * @param uploadFileMap
     * @return
     */
    private Map<String, DataSize> filterFileSize(Map<String, MultipartFile> uploadFileMap) {
        Map<String, DataSize> overSizeFiles = new HashMap<>(0);
        for (MultipartFile file : uploadFileMap.values()) {
            if (file.getSize() > FILE_MAX_SIZE.toBytes()) {
                overSizeFiles.put(file.getName(), DataSize.ofMegabytes(file.getSize()));
            }
        }
        return overSizeFiles;
    }

    @Override
    public void destroy() {
    }
}
