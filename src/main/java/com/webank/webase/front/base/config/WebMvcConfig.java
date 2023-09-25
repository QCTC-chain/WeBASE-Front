package com.webank.webase.front.base.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * @author zhangyang
 * @version 1.0
 * @project WeBASE-Sign
 * @description
 * @date 2023/9/21 18:05:04
 */

@Configuration
public class WebMvcConfig implements WebMvcConfigurer {
    @Bean
    public NodeReqInterceptor nodeReqInterceptor() {
        return new NodeReqInterceptor();
    }

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(nodeReqInterceptor()).addPathPatterns("/**");
    }
}
