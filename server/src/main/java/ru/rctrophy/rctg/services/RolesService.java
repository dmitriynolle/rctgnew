package ru.rctrophy.rctg.services;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import ru.rctrophy.rctg.entities.Roles;
import ru.rctrophy.rctg.repositories.RoleRepository;

@Service
@RequiredArgsConstructor
public class RolesService {
    private final RoleRepository roleRepository;

    public Roles getRoleByName(String name) {
            Roles roles = roleRepository.findByName(name);
            return roles;
    }
}
