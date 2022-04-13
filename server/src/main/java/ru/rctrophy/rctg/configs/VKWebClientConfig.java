package ru.rctrophy.rctg.configs;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.reactive.function.client.WebClient;

@Configuration
public class VKWebClientConfig {

    public static final String VK_WEB_CLIENT = "vk_web_client";

    @Value("${vk}")
    private String url;

    @Bean(VK_WEB_CLIENT)
    public WebClient vkWebClient() {
        return WebClient.builder()
                .baseUrl(url)
                .build();
    }
}
