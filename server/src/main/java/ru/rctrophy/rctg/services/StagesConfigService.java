package ru.rctrophy.rctg.services;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import ru.rctrophy.rctg.entities.StagesConfig;
import ru.rctrophy.rctg.repositories.StagesConfigRepository;

import java.util.List;

@Service
@RequiredArgsConstructor
public class StagesConfigService {
    private final StagesConfigRepository stagesConfigRepository;

    public List<StagesConfig> getStageConfig(Long stage_name_id) {
        return stagesConfigRepository.findAllByStagesNameId(stage_name_id);
    }
}
