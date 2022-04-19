package ru.rctrophy.rctg.dto;

import lombok.Data;
import lombok.NoArgsConstructor;
import ru.rctrophy.rctg.entities.Users;

@Data
@NoArgsConstructor
public class UsersDto {

    private Long id;
    private String username;
    private String firstName;
    private String lastName;

    public UsersDto(Users users){
        this.id = users.getId();
        this.username = users.getUsername();
        this.firstName = users.getFirstName();
        this.lastName = users.getLastName();
    }
}
