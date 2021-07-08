package com.yonyou.ucf.mdf.security.xss;

import com.google.common.collect.Lists;
import org.apache.commons.io.IOUtils;
import org.apache.commons.lang3.StringUtils;
import org.owasp.esapi.ESAPI;
import org.owasp.esapi.Encoder;
import org.owasp.esapi.reference.DefaultEncoder;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.core.io.support.PropertiesLoaderUtils;

import javax.servlet.ReadListener;
import javax.servlet.ServletInputStream;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletRequestWrapper;
import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.StringWriter;
import java.nio.charset.StandardCharsets;
import java.text.Normalizer;
import java.util.List;
import java.util.Properties;
import java.util.regex.Pattern;

public class HttpServletRequestParamWrapper extends HttpServletRequestWrapper {

    private static final Encoder ENCODER;

    static {
        Resource fileResource = new ClassPathResource("ESAPI.properties");
        try {
            Properties properties = PropertiesLoaderUtils.loadProperties(fileResource);
            String property = properties.getProperty("Encoder.DefaultCodecList");
            if (StringUtils.isBlank(property)) {
                ENCODER = ESAPI.encoder();
            }else {
                List<String> encoderNames = Lists.newArrayList(property.split(","));
                ENCODER = new DefaultEncoder(encoderNames);
            }
        } catch (IOException e) {
            throw new RuntimeException("启动加载ESAPI错误");
        }
    }

    private static final Pattern SCRIPT_PATTERN = Pattern.compile("<script>(.*?)</script>");

    private static final Pattern SRC_PATTERN = Pattern.compile("src[\r\n]*=[\r\n]*\\\'(.*?)\\\'", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE | Pattern.DOTALL);

    private static final Pattern SRC1_PATTERN = Pattern.compile("src[\r\n]*=[\r\n]*\\\"(.*?)\\\'", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE | Pattern.DOTALL);

    private static final Pattern SCRIPT_END_PATTERN = Pattern.compile("</script>", Pattern.CASE_INSENSITIVE);

    private static final Pattern SCRIPT_START_PATTERN = Pattern.compile("<script(.*?)>", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE | Pattern.DOTALL);

    private static final Pattern EVAL_PATTERN = Pattern.compile("eval\\((.*?)\\)", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE | Pattern.DOTALL);

    private static final Pattern EXPRESSION_PATTERN = Pattern.compile("expression\\((.*?)\\)", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE | Pattern.DOTALL);

    private static final Pattern JAVASCRIPT_PATTERN = Pattern.compile("javascript:", Pattern.CASE_INSENSITIVE);

    private static final Pattern VBSCRIPT_PATTERN = Pattern.compile("vbscript:", Pattern.CASE_INSENSITIVE);

    private static final Pattern ONLOAD_PATTERN = Pattern.compile("onload(.*?)=", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE | Pattern.DOTALL);

    private static final Pattern ON_PATTERN = Pattern.compile("on(.*?)=['|\\\"](.*?)['|\\\"]", Pattern.CASE_INSENSITIVE | Pattern.MULTILINE | Pattern.DOTALL);

    private static final List<String> ERROR_CHAR_LIST = Lists.newArrayList("%0D", "%0d", "%0a", "%0A", "\r", "\n");


    HttpServletRequestParamWrapper(HttpServletRequest request) {
        super(request);
    }

    @Override
    public String getHeader(String name) {
        String value = super.getHeader(name);
        if (value == null) {
            return null;
        }
        return cleanSqlXssLog(value);
    }

    @Override
    public String[] getParameterValues(String parameter) {
        String[] values = super.getParameterValues(parameter);
        if (values == null) {
            return null;
        }
        int count = values.length;
        String[] encodedValues = new String[count];
        for (int i = 0; i < count; i++) {
            encodedValues[i] = cleanSqlXssLog((values[i]));
        }
        return encodedValues;

    }

    @Override
    public String getParameter(String parameter) {
        String value = super.getParameter(parameter);
        if (value == null) {
            return null;
        }
        return cleanSqlXssLog(value);
    }

    @Override
    public ServletInputStream getInputStream() throws IOException {
        InputStream stream = super.getInputStream();
        StringWriter stringWriter = new StringWriter();
        IOUtils.copy(stream, stringWriter, StandardCharsets.UTF_8);
        String body = cleanSqlXssLog(stringWriter.toString());
        if (StringUtils.isBlank(body)) {
            return null;
        }
        return new WrapperInputStream(new ByteArrayInputStream(body.getBytes()));
    }

    private String cleanXSS(String value) {
        if (value != null) {
            // 推荐使用ESAPI库来避免脚本攻击
            value = ENCODER.canonicalize(value);
            // 避免script标签
            value = SCRIPT_PATTERN.matcher(value).replaceAll("");
            // 避免src形式的表达式
            value = SRC_PATTERN.matcher(value).replaceAll("");
            value = SRC1_PATTERN.matcher(value).replaceAll("");
            // 删除单个的 </script> 标签
            value = SCRIPT_END_PATTERN.matcher(value).replaceAll("");
            // 删除单个的<script ...> 标签
            value = SCRIPT_START_PATTERN.matcher(value).replaceAll("");
            // 避免 eval(...) 形式表达式
            value = EVAL_PATTERN.matcher(value).replaceAll("");
            // 避免 e­xpression(...) 表达式
            value = EXPRESSION_PATTERN.matcher(value).replaceAll("");
            // 避免 javascript: 表达式
            value = JAVASCRIPT_PATTERN.matcher(value).replaceAll("");
            // 避免 vbscript: 表达式
            value = VBSCRIPT_PATTERN.matcher(value).replaceAll("");
            // 避免 onload= 表达式
            value = ONLOAD_PATTERN.matcher(value).replaceAll("");
            // 避免 onXX= 表达式
            value = ON_PATTERN.matcher(value).replaceAll("");
        }
        return value;
    }

    private String cleanLogForging(String value) {
        if (value == null) {
            return null;
        }
        if (StringUtils.isBlank(value)) {
            return "";
        }
        String encode = Normalizer.normalize(value, Normalizer.Form.NFKC);
        for(String toReplaceStr : ERROR_CHAR_LIST){
            if (encode.contains(toReplaceStr)) {
                encode = encode.replace(toReplaceStr, "");
            }
        }
        return encode;
    }

    private String cleanSqlInject(String value) {
        return (null == value) ? null : value.replaceAll("(?:')|(?:--)|(/\\*(?:.|[\\n\\r])*?\\*/)|"
                + "(\\b(select|update|and|or|delete|insert|truncate|char|into|substr|ascii|declare|exec|count|master|drop|execute)\\b)", "");
    }

    private class WrapperInputStream extends ServletInputStream{

        private InputStream inputStream;

        WrapperInputStream(InputStream stream) {
            super();
            this.inputStream = stream;
        }

        @Override
        public int read() throws IOException {
            return inputStream.read();
        }

        @Override
        public boolean isFinished() {
            return true;
        }

        @Override
        public boolean isReady() {
            return true;
        }

        @Override
        public void setReadListener(ReadListener readListener) {
        }
    }

    private String cleanSqlXssLog(String value) {
        value = cleanXSS(value);
        value = cleanLogForging(value);
//        value = cleanSqlInject(value); // 暂不启用sql替换
        return value;
    }

}
