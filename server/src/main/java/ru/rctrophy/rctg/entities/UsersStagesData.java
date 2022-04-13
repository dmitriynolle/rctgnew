package ru.rctrophy.rctg.entities;

import lombok.Data;
import ru.rctrophy.rctg.dto.UsersDto;

import javax.persistence.*;

@Data
@Entity
@Table(name = "users_stages_data")
public class UsersStagesData {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @OneToOne
    @JoinColumn(name = "stages_id")
    private StagesName stages;

    @OneToOne
    @JoinColumn(name = "user_id")
    private Users users;

    private int su;

    @OneToOne
    @JoinColumn(name = "penalty_id")
    private Penalty penalty;

    private int sum;
}
