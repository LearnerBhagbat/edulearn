package com.ajay.edulearn.Quiz;

import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;

@Component
public interface McqServices {
     McqQues save(McqQues mcqQues);
     Optional<McqQues> findMcqQuesByQuestionid(Long id);

//     Object saveAllMcq(List<McqQues> studentList);
     public List<McqQues> saveAllMcq(List<McqQues> studentList);
}
