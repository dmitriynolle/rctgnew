package ru.rctrophy.rctg.repositories;

import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ru.rctrophy.rctg.entities.UsersStagesData;

import java.util.List;

@Repository
public interface UsersStagesDataRepository extends JpaRepository<UsersStagesData, Long> {

    List<UsersStagesData> findAllByStagesIdAndUsersId(Sort by, Long stage_id, Long user_id);
}
