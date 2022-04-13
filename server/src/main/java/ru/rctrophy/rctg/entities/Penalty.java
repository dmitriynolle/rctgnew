package ru.rctrophy.rctg.entities;

import lombok.Data;
import javax.persistence.*;

@Data
@Entity
@Table(name = "penalty")
public class Penalty {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private Long point;

    private Long factor;
}
