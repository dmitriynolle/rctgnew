package ru.rctrophy.rctg.services;

import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import ru.rctrophy.rctg.dto.StagesDto;
import ru.rctrophy.rctg.entities.Stages;
import ru.rctrophy.rctg.repositories.StagesRepository;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class StagesService {
    private final StagesRepository stagesRepository;

    public List<StagesDto> getStages(Long stage_name_id) {
        List<Stages> sDto = stagesRepository.findAllByStagesNameId(Sort.by("stagesName", "summa"), stage_name_id);
        return sDto.stream().map(StagesDto::new).collect(Collectors.toList());
    }
}
