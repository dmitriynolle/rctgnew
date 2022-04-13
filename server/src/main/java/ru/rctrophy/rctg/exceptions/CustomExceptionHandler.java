package ru.rctrophy.rctg.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import ru.rctrophy.rctg.responsies.ErrorResponse;

@ControllerAdvice
public class CustomExceptionHandler {

    @ExceptionHandler(UserNotFoundException.class)
    public ResponseEntity handleException(UserNotFoundException e) {
        return new ResponseEntity(new ErrorResponse(500, e.getMessage()), HttpStatus.INTERNAL_SERVER_ERROR);
    }
}