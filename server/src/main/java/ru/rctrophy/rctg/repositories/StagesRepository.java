package ru.rctrophy.rctg.repositories;

import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.rctrophy.rctg.entities.Stages;

import java.util.List;

@Repository
public interface StagesRepository extends JpaRepository<Stages, Long> {

    List<Stages> findAllByStagesNameId(Sort by, Long stages_name_id);
}
