package com.exam.controller;

import com.exam.Service.CategoryService;
import com.exam.model.exam.Category;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/category")
@CrossOrigin("*")
public class CategoryController {

    @Autowired
    private CategoryService categoryService;


    @PostMapping("/")
    public ResponseEntity<?> addCategory(@RequestBody Category category)
    {
        Category category1=this.categoryService.addCategory(category);
        return ResponseEntity.ok(category1);
    }


    //get category

    @GetMapping("/{categoryId}")
    public Category getCategory(@PathVariable("categoryId") Long categoryId)
    {
        return this.categoryService.getCategory(categoryId);
    }

    //getall
    @GetMapping("/")
    public ResponseEntity<?> getCategories(){
        return ResponseEntity.ok(this.categoryService.getCategories());
    }

    @PutMapping("/")
    public Category updatecategory(@RequestBody Category category){
        return  this.categoryService.updateCategory(category);
    }

    //delete

    @DeleteMapping
    public void deleteCategory(@PathVariable("categoryId") Long categoryId){
        this.categoryService.deleteCategory(categoryId);
    }

}
