package com.ajay.edulearn.Quiz;

import org.springframework.stereotype.Service;

import java.util.Optional;

public interface QuestionBankService {

    QuestionBank saveQuestionBank(QuestionBank questionBank);

    Optional<QuestionBank> findQuestionBankByUserid(Long id);
}
