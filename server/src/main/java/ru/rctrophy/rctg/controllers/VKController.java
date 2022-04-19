package ru.rctrophy.rctg.controllers;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;
import ru.rctrophy.rctg.services.VKService;

@CrossOrigin
@RestController
@AllArgsConstructor
public class VKController {
    private final VKService vkService;

    @GetMapping(value = "/all/VK", produces = "application/json")
    public Mono<Object> getAll(){
        return vkService.getAll();
    }

}
