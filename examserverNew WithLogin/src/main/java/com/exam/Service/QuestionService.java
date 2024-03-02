package com.exam.Service;

import com.exam.model.exam.Question;
import com.exam.model.exam.Quiz;

import java.util.*;

public interface QuestionService {

    public Question addQuestion(Question question);

    public Question updateQuestion(Question question);

    public Set<Question> getQuestions();

    public Question getQuestion(Long questionId);

    public Set<Question> getQuestionsOfQuiz(Quiz quiz);



    public void deleteQuestion(Long quesId);
}
