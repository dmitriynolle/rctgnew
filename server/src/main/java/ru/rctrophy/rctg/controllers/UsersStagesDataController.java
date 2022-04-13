package ru.rctrophy.rctg.controllers;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import ru.rctrophy.rctg.dto.UsersStagesDataDto;
import ru.rctrophy.rctg.services.UsersStagesDataService;

import java.util.List;

@CrossOrigin
@RestController
@AllArgsConstructor
public class UsersStagesDataController {
    private final UsersStagesDataService usersStagesDataService;

    @GetMapping(value = "/users_stages_data", produces = "application/json")
    public List<UsersStagesDataDto> getAll(@RequestParam (name = "stage_id") Long stageId,
                                           @RequestParam (name = "user_id") Long userId){
        return usersStagesDataService.getAllData(stageId, userId);
    }

}
