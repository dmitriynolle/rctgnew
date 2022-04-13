package ru.rctrophy.rctg.dto;

import lombok.Data;
import lombok.NoArgsConstructor;
import ru.rctrophy.rctg.entities.Stages;
import ru.rctrophy.rctg.entities.StagesName;
import ru.rctrophy.rctg.entities.Users;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Data
@NoArgsConstructor
public class StagesDto {

    private Long id;
    private UsersDto users;
    private StagesName stagesName;
    private List<Integer> su = new ArrayList<>();
    private int summa;
    private List<Integer> timeSu = new ArrayList<>();
    private int time;

    public StagesDto(Stages stages){
        this.id = stages.getId();
        this.users = (new UsersDto(stages.getUsers()));
        this.stagesName = stages.getStagesName();

        if(stages.getSu1() != -1) this.su.add(stages.getSu1());
        if(stages.getSu2() != -1) this.su.add(stages.getSu2());
        if(stages.getSu3() != -1) this.su.add(stages.getSu3());
        if(stages.getSu4() != -1) this.su.add(stages.getSu4());
        if(stages.getSu5() != -1) this.su.add(stages.getSu5());

        if(stages.getTimeSu1() != 0) this.timeSu.add(stages.getTimeSu1());
        if(stages.getTimeSu2() != 0) this.timeSu.add(stages.getTimeSu2());
        if(stages.getTimeSu3() != 0) this.timeSu.add(stages.getTimeSu3());
        if(stages.getTimeSu4() != 0) this.timeSu.add(stages.getTimeSu4());
        if(stages.getTimeSu5() != 0) this.timeSu.add(stages.getTimeSu5());

        this.time = stages.getTime();
        this.summa = stages.getSumma();
    }
}
