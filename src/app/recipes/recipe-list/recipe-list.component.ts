import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://res.cloudinary.com/hellofresh/image/upload/f_auto,fl_lossy,h_436,q_80/v1/hellofresh_s3/image/one-pot-peruvian-chili-f83ff35e.jpg'),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://res.cloudinary.com/hellofresh/image/upload/f_auto,fl_lossy,h_436,q_80/v1/hellofresh_s3/image/one-pot-peruvian-chili-f83ff35e.jpg')

  ];


  constructor() { }

  ngOnInit() {
  }

}
