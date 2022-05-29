import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
//This is null comment
//This is second null comment
  @Input() recipe:Recipe;
  @Output() recipeSelected=new EventEmitter<void>();

  onSelected(){
    this.recipeSelected.emit()
  }

  constructor() { }

  ngOnInit(): void {
  }

}
