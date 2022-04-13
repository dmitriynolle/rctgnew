package ru.rctrophy.rctg.dto;

import lombok.Data;
import lombok.NoArgsConstructor;
import ru.rctrophy.rctg.entities.Users;

@Data
@NoArgsConstructor
public class UsersDto {

    private Long id;
    private int number;
    private String name;

    public UsersDto(Users users){
        this.id = users.getId();
        this.number = users.getNumber();
        this.name = users.getName();
    }
}
