package ru.rctrophy.rctg.services;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import ru.rctrophy.rctg.entities.StagesName;
import ru.rctrophy.rctg.repositories.StagesNameRepository;

import java.util.List;

@Service
@RequiredArgsConstructor
public class StagesNameService {
    private final StagesNameRepository stagesNameRepository;

    public List<StagesName> getAllStagesName() {
        return stagesNameRepository.findAll();
    }

}
