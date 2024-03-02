import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CategoryService } from '../../../services/category.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent implements OnInit {

  category={
    title:'',
    description:''
  };

  constructor(private _category: CategoryService, private _snack: MatSnackBar) {}

  ngOnInit(): void {
  }

  formSubmit() {
    if(this.category.title.trim()=='' || this.category.title==null){
      this._snack.open("Title required ", '',{duration:3000});
      return;
    }

    this._category.addCategory(this.category).subscribe(
      (data: any) => {
        this.category.title='';
        this.category.description='';
        console.log('Category added successfully:', data);
        this._snack.open('Category added successfully', '', { duration: 30 });
        // You may want to reset the form or take other actions after successful addition
      },
      (error: any) => {
        console.error('Error adding category:', error);
        this._snack.open('Error adding category', '', { duration: 3000 });
      }
    );
  }
}