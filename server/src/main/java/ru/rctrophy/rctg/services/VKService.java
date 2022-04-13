package ru.rctrophy.rctg.services;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

@Service
@AllArgsConstructor
public class VKService {

    private final WebClient vkWebClient;

    public Mono<Object> getAll() {
//        return vkWebClient.get().uri("photos.get?v=5.52&owner_id=-107400019&album_id=wall&rev=1&count=1&access_token=ab779434ab779434ab779434a3ab072bacaab77ab779434f5f0a74efc39a1d44e954bef")
//                .retrieve().bodyToMono(Any::class.java)

        return vkWebClient.get().uri("wall.get?v=5.84&owner_id=-107400019&offset=0&count=50&filter=owner&access_token=ab779434ab779434ab779434a3ab072bacaab77ab779434f5f0a74efc39a1d44e954bef")
                .retrieve().bodyToMono(Object.class);
    }
}
