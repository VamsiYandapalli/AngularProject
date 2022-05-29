import { Component, OnInit,EventEmitter, Output, ElementRef, ViewChild} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
@ViewChild('nameInput',{static:true}) nameInputRef:ElementRef;
@ViewChild('amountInput',{static:true}) amountInputRef:ElementRef;

@Output() ingredientsAdded=new EventEmitter<Ingredient>();


  constructor() { }

  ngOnInit(): void {
  }
  onAddIngredient(){
    if(this.nameInputRef.nativeElement.value==='' || this.amountInputRef.nativeElement.value===''){
      return false;
    }
    else{
    const ingName=this.nameInputRef.nativeElement.value;
    const ingAmount=this.amountInputRef.nativeElement.value;
    const newIngredient= new Ingredient(ingName,ingAmount);
    this.ingredientsAdded.emit(newIngredient)
    }
    
  }
  onDeleteIngredient(){

  }
  onClearIngredient(igntName:HTMLInputElement,igntAmount:HTMLInputElement){
   igntName.value='';
   igntAmount.value='';

  }

  //This is a null Statement 1
  //This is null statement 2

}
