package ru.rctrophy.rctg.controllers;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import ru.rctrophy.rctg.entities.Penalty;
import ru.rctrophy.rctg.services.PenaltyService;

import java.util.List;

@RestController
@AllArgsConstructor
public class PenaltyController {
    private final PenaltyService penaltyService;

    @GetMapping(value = "/penalty", produces = "application/json")
    public List<Penalty> getAll(){
        return penaltyService.getAllPenalty();
    }

}
