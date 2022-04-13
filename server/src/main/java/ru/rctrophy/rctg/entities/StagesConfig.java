package ru.rctrophy.rctg.entities;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "stages_config")
public class StagesConfig {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @JoinColumn(name = "stage_name_id")
    private StagesName stagesName;

    @OneToOne
    @JoinColumn(name = "penalty_id")
    private Penalty penaltyId;

    @Column(name = "time")
    private Long time;

}
