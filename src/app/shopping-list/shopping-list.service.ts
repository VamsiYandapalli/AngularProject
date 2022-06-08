// import { Injectable } from "@angular/core";
import { Ingredient} from "../shared/ingredient.model"

// @Injectable()

export class ShoppingListService{

    ingredients: Ingredient[] =[
        new Ingredient('Apples',10),
        new Ingredient('Oranges',15),
        new Ingredient('Tomatoes',10)
      ];

      
}