package ru.rctrophy.rctg.controllers;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import ru.rctrophy.rctg.entities.StagesConfig;
import ru.rctrophy.rctg.services.StagesConfigService;

import java.util.List;

@RestController
@AllArgsConstructor
public class StagesConfigController {
    private final StagesConfigService stagesConfigService;

    @GetMapping(value = "/stage_config/{stage_name_id}", produces = "application/json")
    public List<StagesConfig> getStageConfig(@PathVariable("stage_name_id") Long stage_name_id){
        return stagesConfigService.getStageConfig(stage_name_id);
    }
}
