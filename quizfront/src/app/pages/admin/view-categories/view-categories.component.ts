import { Component } from '@angular/core';
import { CategoryService } from '../../../services/category.service';
import Swal from 'sweetalert';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrl: './view-categories.component.css'
})
export class ViewCategoriesComponent {
  category:any =[];
  snack: any;

  constructor(public _category:CategoryService, private _snack: MatSnackBar) {}

  ngOnInit():void{
    this._category.categories().subscribe((data:any)=>
    {
      this.category=data;
      console.log(this.category);
    },
    (error: any)=>{
      console.log(error);
      this._snack.open("Error, Error in loading", "Dismiss", {
        duration: 3000
      });
    }
    );
  }
}