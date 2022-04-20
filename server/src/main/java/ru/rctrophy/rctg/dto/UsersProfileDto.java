package ru.rctrophy.rctg.dto;

import lombok.Data;
import lombok.NoArgsConstructor;
import ru.rctrophy.rctg.entities.Roles;
import ru.rctrophy.rctg.entities.Users;

import java.util.Collection;

@Data
@NoArgsConstructor
public class UsersProfileDto {

    private Long id;
    private String username;
    private String firstName;
    private String lastName;
    private Collection<Roles> roles;

    public UsersProfileDto(Users users){
        this.id = users.getId();
        this.username = users.getUsername();
        this.firstName = users.getFirstName();
        this.lastName = users.getLastName();
        this.roles = users.getRoles();
    }
}
