package ru.rctrophy.rctg.controllers;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import ru.rctrophy.rctg.dto.StagesDto;
import ru.rctrophy.rctg.services.StagesService;

import java.util.List;

@CrossOrigin
@RestController
@AllArgsConstructor
public class StagesController {
    private final StagesService stagesService;

    @GetMapping(value = "/stages/{stage_name_id}", produces = "application/json")
    public List<StagesDto> getStages(@PathVariable("stage_name_id") Long stage_name_id){
        return stagesService.getStages(stage_name_id);
    }

}
