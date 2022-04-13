package ru.rctrophy.rctg.entities;

import lombok.*;
import javax.persistence.*;
import java.util.Collection;

@Data
@Entity
@Table(name = "users")
public class Users {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "number")
    private int number;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "users_roles",
            joinColumns = @JoinColumn(name = "users_id"),
            inverseJoinColumns = @JoinColumn(name = "roles_id"))
    private Collection<Roles> roles;

    @Column(name = "name")
    private String name;

    @Column(name = "password")
    private String password;
}
