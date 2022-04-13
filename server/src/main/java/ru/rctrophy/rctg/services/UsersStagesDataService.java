package ru.rctrophy.rctg.services;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import ru.rctrophy.rctg.dto.UsersStagesDataDto;
import ru.rctrophy.rctg.entities.UsersStagesData;
import ru.rctrophy.rctg.repositories.UsersStagesDataRepository;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class UsersStagesDataService {
    private final UsersStagesDataRepository usersStagesDataRepository;

    public List<UsersStagesDataDto> getAllData(Long stage_id, Long user_id){
        List<UsersStagesData> uSDDto = usersStagesDataRepository.findAllByStagesIdAndUsersId(Sort.by("su", "penalty_id"), stage_id, user_id);
        return uSDDto.stream().map(UsersStagesDataDto::new).collect(Collectors.toList());
    }
}
