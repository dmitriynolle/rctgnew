package ru.rctrophy.rctg.controllers;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import ru.rctrophy.rctg.dto.UsersDto;
import ru.rctrophy.rctg.entities.Users;
import ru.rctrophy.rctg.services.UsersService;

import java.util.List;

@RestController
@AllArgsConstructor
public class UsersController {
    private final UsersService usersService;

    @GetMapping(value = "/users", produces = "application/json")
    public List<UsersDto> getAll(){
        return usersService.getAllUsers();
    }

    @GetMapping(value = "/user/{user_id}", produces = "application/json")
    public Users getUserById(@PathVariable("user_id") Long user_id){
        return usersService.getUserById(user_id);
    }
}
