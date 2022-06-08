// import { Injectable } from "@angular/core";
import { EventEmitter } from "@angular/core";
import { Recipe } from "./recipe.model";

// @Injectable()

export class RecipeService{

    recipeSelected= new EventEmitter<Recipe>();

   private recipes: Recipe[]=[
        new Recipe('Barbeque Chicken','This is a dummy description for the test recipe 1.',
        'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg'),
        new Recipe('Onion Pakoda ','This is a dummy description for the test recipe 2.',
        'https://i.guim.co.uk/img/media/91d098d57084a3988b5c6c6008837a32d85f8237/104_0_2557_1831/master/2557.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=1c9a405468d1ede9c19ddcf16dbd4901'),
        new Recipe('Butter Chicken','This is a dummy description for the test recipe 3.',
        'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg'),
        new Recipe('Onion Pakoda ','This is a dummy description for the test recipe 4.',
        'https://i.guim.co.uk/img/media/91d098d57084a3988b5c6c6008837a32d85f8237/104_0_2557_1831/master/2557.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=1c9a405468d1ede9c19ddcf16dbd4901')
      ];
      
      getRecipes(){
         return this.recipes.slice();       //Returns ecact copy of recipes array since slice is used without any arguments.
      }

}