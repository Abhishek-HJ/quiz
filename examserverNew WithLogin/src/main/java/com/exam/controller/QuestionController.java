package com.exam.controller;

import com.exam.Service.QuestionService;
import com.exam.Service.QuizService;
import com.exam.model.exam.Question;
import com.exam.model.exam.Quiz;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@RestController
@CrossOrigin("*")
@RequestMapping("/question")
public class QuestionController {

    @Autowired
    private QuestionService service;

    @Autowired
    private QuizService quizService;


    // add

    @PostMapping("/")
    public ResponseEntity<Question> add(@RequestBody Question question){
        return ResponseEntity.ok(this.service.addQuestion(question));

    }
    //update
    @PutMapping("/")
    public ResponseEntity<Question> update(@RequestBody Question question){
        return ResponseEntity.ok(this.service.updateQuestion(question));
    }

    //get all q of any quiz

    @GetMapping("/quiz/{qid}")
    public ResponseEntity<?> getQuestionsOfQuiz(@PathVariable("qid") Long qid)
    {
       Quiz quiz=new Quiz();
        quiz.setQid(qid);
        Set<Question> questionsOfQuiz=this.service.getQuestionsOfQuiz(quiz);
        return ResponseEntity.ok(questionsOfQuiz);



    }

    //getone question
    @GetMapping("/{qid}")
    public Question get(@PathVariable("quesId") Long quesId){
        return this.service.getQuestion(quesId);
    }

    //delete questions
    @DeleteMapping("/{quesId}")
    public void delete(@PathVariable("quesId") Long quesId)
    {
    this.service.deleteQuestion(quesId);
    }



}
