package ru.rctrophy.rctg.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.rctrophy.rctg.entities.StagesConfig;

import java.util.List;

@Repository
public interface StagesConfigRepository extends JpaRepository<StagesConfig, Long> {

    List<StagesConfig> findAllByStagesNameId(Long stageNameId);
}
