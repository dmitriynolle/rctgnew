package ru.rctrophy.rctg.services;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Sort;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import ru.rctrophy.rctg.dto.UsersDto;
import ru.rctrophy.rctg.dto.UsersProfileDto;
import ru.rctrophy.rctg.entities.Roles;
import ru.rctrophy.rctg.entities.Users;
import ru.rctrophy.rctg.exceptions.UserNotFoundException;
import ru.rctrophy.rctg.repositories.UsersRepository;

import java.util.Collection;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class UsersService implements UserDetailsService {
    private final UsersRepository usersRepository;

    public List<UsersDto> getAllUsers() {
        List<Users>users = usersRepository.findAll(Sort.by("name"));
        return users.stream().map(UsersDto::new).collect(Collectors.toList());
    }

    public Users getUserByUsername(String username) {
        return usersRepository.findByUsername(username).orElseThrow(() -> new UserNotFoundException("Пользователь не найден!"));
    }

    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Users users = usersRepository.findUserByUsername(username).orElseThrow(() -> new UserNotFoundException("Пользователь не найден!"));

        return new org.springframework.security.core.userdetails.User(
                users.getUsername(),
                users.getPassword(),
                true,
                true,
                true,
                true,
                mapRolesToAuthorities(users.getRoles()));
    }

    private Collection<? extends GrantedAuthority> mapRolesToAuthorities(Collection<Roles> roles) {
        return roles.stream().map(role -> new SimpleGrantedAuthority(role.getName())).collect(Collectors.toList());
    }

    public boolean isUserByLoginExists(String username) {
        return usersRepository.findUserByUsername(username).isPresent();
    }

    @Transactional
    public UsersDto save(Users users) {
        UsersDto usersDto = new UsersDto(usersRepository.save(users));
        return usersDto;
    }
}