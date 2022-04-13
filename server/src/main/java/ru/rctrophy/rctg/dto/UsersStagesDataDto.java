package ru.rctrophy.rctg.dto;

import lombok.Data;
import lombok.NoArgsConstructor;
import ru.rctrophy.rctg.entities.Penalty;
import ru.rctrophy.rctg.entities.StagesName;
import ru.rctrophy.rctg.entities.UsersStagesData;

@Data
@NoArgsConstructor
public class UsersStagesDataDto {

    private int id;
    private StagesName stages;
    private UsersDto users;
    private int su;
    private Penalty penalty;
    private int sum;


    public UsersStagesDataDto(UsersStagesData usersStagesData) {
        this.id = usersStagesData.getId();
        this.stages = usersStagesData.getStages();
        this.users = new UsersDto(usersStagesData.getUsers());
        this.su = usersStagesData.getSu();
        this.penalty = usersStagesData.getPenalty();
        this.sum = usersStagesData.getSum();
    }
}
