package ru.rctrophy.rctg.services;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import ru.rctrophy.rctg.dto.UsersDto;
import ru.rctrophy.rctg.entities.Users;
import ru.rctrophy.rctg.exceptions.UserNotFoundException;
import ru.rctrophy.rctg.repositories.UsersRepository;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class UsersService {
    private final UsersRepository usersRepository;

    public List<UsersDto> getAllUsers() {
        List<Users>users = usersRepository.findAll(Sort.by("name"));
        return users.stream().map(UsersDto::new).collect(Collectors.toList());
    }

    public Users getUserById(Long user_id) {
        return usersRepository.findById(user_id).orElseThrow(() -> new UserNotFoundException("User not found!"));
    }
}