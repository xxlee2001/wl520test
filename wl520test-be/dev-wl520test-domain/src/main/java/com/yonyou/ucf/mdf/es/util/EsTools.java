package com.yonyou.ucf.mdf.es.util;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.yonyou.cloud.auth.sdk.client.utils.http.HttpClient4Utils;
import com.yonyou.cloud.search.ResponseUtils;
import org.apache.commons.codec.binary.Base64;
import org.apache.commons.lang3.StringUtils;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.message.BasicHeader;
import org.apache.http.util.EntityUtils;
import org.elasticsearch.action.search.SearchResponse;

import java.util.ArrayList;
import java.util.List;

/**
 * TODO description
 *
 * @author sunshine
 * @date 2019-02-21
 * @since UCF1.0
 */
public class EsTools {

    private static final String TOKEN_HEADER_KEY = "X-DP-TOKEN";
    private static final String INDEX_PATTER = "yyyy.MM.dd";

//    /**
//     * @param token
//     * @param reqUrl
//     * @param list
//     */
//    public static <T> void createIndexData(String token, String reqUrl, List<T> list) {
//        CloseableHttpClient client = HttpClient4Utils.getHttpClient();
//        HttpPost post = new HttpPost(reqUrl);
//        post.addHeader(new BasicHeader(TOKEN_HEADER_KEY, token));
//        post.setHeader("Content-type", "application/json");
//        CloseableHttpResponse response = null;
//        try {
//            post.setEntity(new StringEntity(JSONObject.toJSONString(list), "UTF-8"));
//            response = client.execute(post);
//            // TODO 判断返回状态码
//            response.getEntity();
//        } catch (Throwable throwable) {
//            throw new BusinessException(ExcpCodeConstant.LOG_QUERY_ES_ERROR, throwable);
//        } finally {
//            HttpClient4Utils.closeHttpComponent(post, response, null == response ? null : response.getEntity());
//        }
//    }

    /**
     * 查询es数据
     *
     * @param token
     * @param reqUrl
     * @param sql
     * @param clazz
     * @param <T>
     * @return
     */
    public static <T> List<T> searchLogTrace(String token, String reqUrl, String sql, Class<T> clazz) {
        SearchResponse searchResponse = getSearchResponse(token, reqUrl, sql);
        List<T> results = new ArrayList<>();
        if (searchResponse != null) {
            searchResponse.getHits().forEach(hit -> {
                if (hit != null) {
                    if (StringUtils.isNotBlank(hit.getSourceAsString())) {
                        T logServiceIndexVO = JSONObject.parseObject(hit.getSourceAsString(), clazz);
                        results.add(logServiceIndexVO);
                    }
                }
            });
        }
        return results;
    }

//    /**
//     * 根据索引名称，时间以及冗余量计算数据覆盖的索引
//     *
//     * @param indexPreffix 索引前缀
//     * @param dateTime     日志发生日期
//     * @param interval     时间荣誉量
//     * @return
//     */
//    public static List<String> creatLogIndexName(String indexPreffix, String dateTime, Integer interval) {
//        List<String> indexStrList = new ArrayList<>();
//        Date logDateFmt = DateTools.parse(dateTime, DateTools.DATE_TIME_T_Z);
//        indexStrList.add(indexPreffix + "-" + DateTools.format(logDateFmt, INDEX_PATTER));
//        String beforeDateTime = DateTools.dateAfterBySecond(dateTime, -interval, DateTools.DATE_TIME_T_Z);
//        String afterDateTime = DateTools.dateAfterBySecond(dateTime, interval, DateTools.DATE_TIME_T_Z);
//        String beforeDate = DateTools.format(beforeDateTime, DateTools.YMD_HYPHEN_PATTERN);
//        String afterDate = DateTools.format(afterDateTime, DateTools.YMD_HYPHEN_PATTERN);
//        String curDate = DateTools.format(dateTime, DateTools.YMD_HYPHEN_PATTERN);
//        if (!beforeDate.equals(curDate)) {
//            indexStrList.add(indexPreffix + "-" + DateTools.formatPattern(beforeDateTime, INDEX_PATTER));
//        } else if (!afterDate.equals(curDate)) {
//            indexStrList.add(indexPreffix + "-" + DateTools.formatPattern(afterDateTime, INDEX_PATTER));
//        }
//        return indexStrList;
//    }
//
//    public static String creatSimpleLogIndexName(String indexPreffix, String dateTime) {
//        Date logDateFmt = DateTools.parse(dateTime, DateTools.DATE_TIME_MS);
//        return indexPreffix + "-" + DateTools.format(logDateFmt, INDEX_PATTER);
//    }

    public static long searchTotalHits(String token, String reqUrl, String sql) {
        SearchResponse searchResponse = getSearchResponse(token, reqUrl, sql);
        if (searchResponse != null) {
            return searchResponse.getHits().getTotalHits().value;
        }
        return 0;
    }

    public static JSONObject searchAggregations(String token, String reqUrl, String sql) {
        SearchResponse searchResponse = getSearchResponse(token, reqUrl, sql);
        if (null != searchResponse) {
            return JSONObject.parseObject(searchResponse.toString()).getJSONObject("aggregations");
        }
        return null;
    }

    // 调试代码不要提交 --yanx于20/7/30注释
//    public static void main(String[] args) {
//        SearchResponse searchResponse = getSearchResponse("y5LCfItHzoWtTfyKFxoElrVZPk4=",
//                "https://intellis.diwork.com/opensearch/search/log/json?modelAliasPattern=logtracebrief3-yyyy.MM.dd",
//                "SELECT count(distinct userId) as involvedUserNum FROM logtracebrief3-2020.03.28 where 1=1 and (errorCode like '4%' or errorCode like '5%') group by busiCode order by involvedUserNum desc limit 10");
//        JSONArray buckets = JSONObject.parseObject(searchResponse.toString()).getJSONObject("aggregations")
//                .getJSONObject("busiCode").getJSONArray("buckets");
//        System.out.println(buckets);
//    }

    private static SearchResponse getSearchResponse(String token, String reqUrl, String sql) {
        CloseableHttpClient client = HttpClient4Utils.getHttpClient();
        HttpPost post = new HttpPost(reqUrl);
        post.addHeader(new BasicHeader(TOKEN_HEADER_KEY, token));
        StringEntity body = new StringEntity(new Base64().encodeAsString(sql.getBytes()), "utf-8");
        String bodys = body.toString();
        System.out.println("bodys: " +bodys);
        post.setEntity(new StringEntity(new Base64().encodeAsString(sql.getBytes()), "utf-8"));
        SearchResponse searchResponse = null;
        CloseableHttpResponse response = null;
        try {
            response = client.execute(post);
            // TODO 判断返回状态码
            String result = EntityUtils.toString(response.getEntity());
            JSONObject detaiMsg = JSON.parseObject(result).getJSONObject("detailMsg");
            searchResponse = ResponseUtils.toResponse(detaiMsg.getString("data"));
        } catch (Throwable throwable) {
//            throw new BusinessException(ExcpCodeConstant.LOG_QUERY_ES_ERROR, throwable);
        } finally {
            HttpClient4Utils.closeHttpComponent(post, response, null == response ? null : response.getEntity());
        }
        return searchResponse;
    }

}
