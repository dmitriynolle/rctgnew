package ru.rctrophy.rctg.services;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import ru.rctrophy.rctg.entities.Penalty;
import ru.rctrophy.rctg.repositories.PenaltyRepository;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PenaltyService {
    private final PenaltyRepository penaltyRepository;

    public List<Penalty> getAllPenalty(){
        return penaltyRepository.findAll();
    }
}
