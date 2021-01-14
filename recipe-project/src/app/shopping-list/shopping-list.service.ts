import { EventEmitter } from "@angular/core";
import { Subject } from "rxjs";

import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
    ingredientsChanged = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>();
    private ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10),
      ];

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }


    addIngredients(ingredient: Ingredient[]) {
        //this.ingredients.push(...ingredients); //error? this is what the video showed tho 
        this.ingredients.push(...ingredient); // sort of works this way for now
        this.ingredientsChanged.next(this.ingredients.slice());
    }
} 