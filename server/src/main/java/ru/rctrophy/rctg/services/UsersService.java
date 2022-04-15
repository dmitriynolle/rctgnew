package ru.rctrophy.rctg.services;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Sort;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import ru.rctrophy.rctg.dto.UsersDto;
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

    public Users getUserById(Long user_id) {
        return usersRepository.findById(user_id).orElseThrow(() -> new UserNotFoundException("User not found!"));
    }

    public UserDetails loadUserByUsername(String login) throws UsernameNotFoundException {
        Users users = usersRepository.findUserByLogin(login).orElseThrow(() -> new UserNotFoundException("User not found!"));

        return new org.springframework.security.core.userdetails.User(
                users.getName(),
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
}