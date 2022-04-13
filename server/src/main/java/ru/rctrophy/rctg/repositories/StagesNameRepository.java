package ru.rctrophy.rctg.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.rctrophy.rctg.entities.StagesName;

@Repository
public interface StagesNameRepository extends JpaRepository<StagesName, Long> {
}

