package ru.rctrophy.rctg.controllers;

import lombok.AllArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import ru.rctrophy.rctg.dto.UsersDto;
import ru.rctrophy.rctg.dto.UsersProfileDto;
import ru.rctrophy.rctg.entities.Users;
import ru.rctrophy.rctg.services.UsersService;

import java.util.List;

@CrossOrigin
@RestController
@AllArgsConstructor
public class
UsersController {
    private final UsersService usersService;
    private final PasswordEncoder passwordEncoder;


    @GetMapping(value = "/users", produces = "application/json")
    public List<UsersDto> getAll(){
        return usersService.getAllUsers();
    }

    @GetMapping(value = "auth/user/{username}", produces = "application/json")
    public UsersProfileDto getUserProfileByUsername(@PathVariable("username") String username){
        return new UsersProfileDto(usersService.getUserByUsername(username));
    }

    @PostMapping(value = "/auth/save_profile")
    public UsersDto UsersRegister(@RequestBody Users users){
        if (users.getPassword() != null){
            users.setPassword(passwordEncoder.encode(users.getPassword()));
        } else {
            users.setPassword(usersService.getUserByUsername(users.getUsername()).getPassword());
        }
        return usersService.save(users);
    }

}
