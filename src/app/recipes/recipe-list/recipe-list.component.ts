import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[]=[
    new Recipe('Test Recipe 1','This is a dummy description for the test recipe 1.',
    'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg'),
    new Recipe('Test Recipe 2 ','This is a dummy description for the test recipe 2.',
    'https://i.guim.co.uk/img/media/91d098d57084a3988b5c6c6008837a32d85f8237/104_0_2557_1831/master/2557.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=1c9a405468d1ede9c19ddcf16dbd4901'),
    new Recipe('Test Recipe 3','This is a dummy description for the test recipe 3.',
    'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg'),
    new Recipe('Test Recipe 4 ','This is a dummy description for the test recipe 4.',
    'https://i.guim.co.uk/img/media/91d098d57084a3988b5c6c6008837a32d85f8237/104_0_2557_1831/master/2557.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=1c9a405468d1ede9c19ddcf16dbd4901')

  ];
  
  constructor() {
    // const  recipeName =  (this.recipes[0].name);
    // const recipeDesc = this.recipes[0].description;
    // const recipeImagePath = this.recipes[0].imagePath;
   }

  ngOnInit(): void {
  }

}
