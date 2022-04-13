package ru.rctrophy.rctg.entities;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "stages_name")
public class StagesName {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

}
