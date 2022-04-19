package ru.rctrophy.rctg.controllers;

import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import ru.rctrophy.rctg.configs.JWTTokenUtils;
import ru.rctrophy.rctg.dto.JwtRequest;
import ru.rctrophy.rctg.dto.JwtResponse;
import ru.rctrophy.rctg.entities.Users;
import ru.rctrophy.rctg.exceptions.UserAlreadyExistsException;
import ru.rctrophy.rctg.responsies.ErrorResponse;
import ru.rctrophy.rctg.services.RolesService;
import ru.rctrophy.rctg.services.UsersService;

import java.util.Collections;

@CrossOrigin
@AllArgsConstructor
@RestController
public class AuthController {
    private final UsersService usersService;
    private final JWTTokenUtils jwtTokenUtil;
    private final AuthenticationManager authenticationManager;
    private BCryptPasswordEncoder passwordEncoder;
    private RolesService rolesService;


    @PostMapping("/all/auth")
    public ResponseEntity<?> createAuthToken(@RequestBody JwtRequest authRequest) {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword()));
        } catch (BadCredentialsException ex) {
            return new ResponseEntity<>(new ErrorResponse(HttpStatus.UNAUTHORIZED.value(), "Неверный пароль!"), HttpStatus.UNAUTHORIZED);
        }
        UserDetails userDetails = usersService.loadUserByUsername(authRequest.getUsername());
        String token = jwtTokenUtil.generateToken(userDetails);
        return ResponseEntity.ok(new JwtResponse(token));
    }

    @PostMapping(value = "/all/register")
    public Users UsersRegister(@RequestBody Users users){
        if (usersService.isUserByLoginExists(users.getUsername())) {
            throw new UserAlreadyExistsException("Пользователь с таким логином уже существует");
        }
        users.setPassword(passwordEncoder.encode(users.getPassword()));
        users.setRoles(Collections.singletonList(rolesService.getRoleByName("USER")));
        return usersService.save(users);
    }
}
