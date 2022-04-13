package ru.rctrophy.rctg.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.rctrophy.rctg.entities.Penalty;

@Repository
public interface PenaltyRepository extends JpaRepository<Penalty, Long> {
}
