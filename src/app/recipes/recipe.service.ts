import { Recipe } from "./recipe.model";
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";


@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'A Test Recipe', 
            'This is simply a test', 
            'https://res.cloudinary.com/hellofresh/image/upload/f_auto,fl_lossy,h_436,q_80/v1/hellofresh_s3/image/one-pot-peruvian-chili-f83ff35e.jpg',
            [
                new Ingredient("Meat", 1),
                new Ingredient('French Fries', 20)
            ]
            ),
        new Recipe(
            'Another Test Recipe', 
            'This is simply a test', 
            'https://res.cloudinary.com/hellofresh/image/upload/f_auto,fl_lossy,h_436,q_80/v1/hellofresh_s3/image/one-pot-peruvian-chili-f83ff35e.jpg',
            [
                new Ingredient('Buns', 1),
                new Ingredient('Meat', 1)
            ]
            )
    
      ];

    constructor(private slService: ShoppingListService){}

    getRecipes(){
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]){
        this.slService.addIngredients(ingredients)
    }
}