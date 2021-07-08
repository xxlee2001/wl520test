package com.yonyou.ucf.mdf.conf;

import com.yonyou.ucf.mdd.ext.cache.RedisManagerFactory;
import org.imeta.spring.support.cache.RedisConfig;
import org.imeta.spring.support.cache.RedisManager;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.redis.connection.RedisSentinelConfiguration;
import org.springframework.data.redis.connection.jedis.JedisConnectionFactory;
import org.springframework.data.redis.core.StringRedisTemplate;
import redis.clients.jedis.JedisPoolConfig;

import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

/**
 * 缓存相关
 *
 */
@Configuration
public class CacheConfig {

    @Bean(name = "poolConfig")
    public JedisPoolConfig poolConfig() {
        JedisPoolConfig poolConfig = new JedisPoolConfig();
        poolConfig.setTestOnBorrow(true);
        poolConfig.setMaxIdle(30);

        return poolConfig;
    }

    @Bean(name = "connectionFactory")
    public JedisConnectionFactory connectionFactory(JedisPoolConfig poolConfig) {
        JedisConnectionFactory connectionFactory;
        if ("true".equals(redisSentinel)) {
            Set<String> sentinelHostAndPorts = new HashSet<>(Arrays.asList(redisServer.split(",")));
            RedisSentinelConfiguration sentinelConfiguration = new RedisSentinelConfiguration(redisSentinelMaster, sentinelHostAndPorts);
            sentinelConfiguration.setPassword(redisPsw);
            connectionFactory = new JedisConnectionFactory(sentinelConfiguration, poolConfig);
        } else {
            connectionFactory = new JedisConnectionFactory();
            connectionFactory.setHostName(redisServer);
            connectionFactory.setPort(redisPort);
            connectionFactory.setPassword(redisPsw);
            connectionFactory.setDatabase(0);
            connectionFactory.setPoolConfig(poolConfig);
        }

        return connectionFactory;
    }

    @Bean(name = "redisTemplate")
    public StringRedisTemplate redisTemplate(JedisConnectionFactory connectionFactory) {
        StringRedisTemplate redisTemplate = new StringRedisTemplate();
        redisTemplate.setConnectionFactory(connectionFactory);

        return redisTemplate;
    }

    @Bean(name = "redisConfig")
    public RedisConfig redisConfig() {
        RedisConfig redisConfig = new RedisConfig();
        redisConfig.setServer(redisServer);
        redisConfig.setPort(redisPort);
        redisConfig.setPassword(redisPsw);
        redisConfig.setTimeout(redisTimeOut);
        redisConfig.setMaxTotal(redisMaxTotal);
        redisConfig.setMaxIdle(redisMaxIdle);
        redisConfig.setSsl(false);
        redisConfig.setTest(false);
        if ("true".equals(redisSentinel)) {
            redisConfig.setSentinel(true);
            redisConfig.setMasterName(redisSentinelMaster);
        }

        return redisConfig;
    }

    @Bean(name = "redisPubConfig")
    public RedisConfig redisPubConfig() {
        RedisConfig redisConfig = new RedisConfig();
        redisConfig.setServer(pubRedisServer);
        redisConfig.setPort(pubRedisPort);
        redisConfig.setPassword(pubRedisPsw);
        redisConfig.setTimeout(redisTimeOut);
        redisConfig.setMaxTotal(redisMaxTotal);
        redisConfig.setMaxIdle(redisMaxIdle);
        redisConfig.setSsl(false);
        redisConfig.setTest(false);
        if ("true".equals(redisSentinel)) {
            redisConfig.setSentinel(true);
            redisConfig.setMasterName(redisSentinelMaster);
        }

        return redisConfig;
    }

    @Bean(name = "redisManager")
    public RedisManager redisManager(RedisConfig redisConfig) {
        RedisManager redisManager = new RedisManager();
        redisManager.setRedisConfig(redisConfig);
        redisManager.setDefaultDuration(14400);

        return redisManager;
    }

    @Bean(name = "redisPubManager")
    public RedisManager redisPubManager(RedisConfig redisPubConfig) {
        RedisManager redisManager = new RedisManager();
        redisManager.setRedisConfig(redisPubConfig);
        redisManager.setDefaultDuration(14400);

        return redisManager;
    }

    @Bean
    public RedisManagerFactory redisManagerFactory() {
        RedisManagerFactory redisManagerFactory = new RedisManagerFactory();
        return redisManagerFactory;
    }


    @Value("${mdd.redis.ip:}")
    private String redisServer;
    @Value("${mdd.redis.port:6379}")
    private Integer redisPort;
    @Value("${mdd.redis.passWord:}")
    private String redisPsw;
    @Value("${redis.pub.server:}")
    private String pubRedisServer;
    @Value("${redis.pub.port:6379}")
    private Integer pubRedisPort;
    @Value("${redis.pub.password:}")
    private String pubRedisPsw;
    @Value("${redis.current.sentinel:false}")
    private String redisSentinel;
    @Value("${mdd.redis.sentinel.master:}")
    private String redisSentinelMaster;
    @Value("${mdd.redis.timeout:3000}")
    private Integer redisTimeOut;
    @Value("${mdd.jedis.pool.maxActive:100}")
    private Integer redisMaxTotal;
    @Value("${mdd.jedis.pool.maxIdle:30}")
    private Integer redisMaxIdle;


}
