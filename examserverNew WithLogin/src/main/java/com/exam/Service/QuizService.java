package com.exam.Service;

import com.exam.model.exam.Quiz;
import java.util.*;

public interface QuizService {
    public Quiz addQuiz(Quiz quiz);

    public Quiz updateQuiz(Quiz quiz);

    public Set<Quiz> getQuizzes();

    public Quiz getQuiz(Long quizId);
    public void deleteQuiz(Long quizId);


}
