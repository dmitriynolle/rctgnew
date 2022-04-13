package ru.rctrophy.rctg.entities;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "stages")
public class Stages {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @JoinColumn (name = "user_id")
    private Users users;

    @OneToOne
    @JoinColumn (name = "stage_id")
    private StagesName stagesName;

    private int su1;

    private int su2;

    private int su3;

    private int su4;

    private int su5;

    @Column(name = "timesu1")
    private int timeSu1;

    @Column(name = "timesu2")
    private int timeSu2;

    @Column(name = "timesu3")
    private int timeSu3;

    @Column(name = "timesu4")
    private int timeSu4;

    @Column(name = "timesu5")
    private int timeSu5;

    private int time;

    private int summa;
}
