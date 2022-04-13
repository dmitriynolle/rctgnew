package ru.rctrophy.rctg.controllers;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.rctrophy.rctg.entities.StagesName;
import ru.rctrophy.rctg.services.StagesNameService;

import java.util.List;


@CrossOrigin
@RestController
@AllArgsConstructor
public class StagesNameController {
    private final StagesNameService stagesNameService;

    @GetMapping(value = "/stages_name", produces = "application/json")
    public List<StagesName> getAllStagesName(){
        return stagesNameService.getAllStagesName();
    }

}
