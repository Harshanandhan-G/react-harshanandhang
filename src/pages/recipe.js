import styles from "@/styles/recipe.module.css";
import Input from "@/components/input";
import RecipeCard from "@/components/RecipeCard";
import { useState } from "react";
const recipes =[
    {
        title:"Burger",
        image:"/images/burger.jpg",
        description: "Your Melty Pleasure. The Spicy One. Lets Get This Bacon. The Ultimate One"
    },
    {
        title:"Pizza",
        image:"/images/pizza.jpg",
        description:"Pizza is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients, which is then baked at a high temperature, traditionally in a wood-fired oven."
    },
    {
        title:"Pudding",
        image:"/images/pudding.jpg",
        description:"The modern usage of the word pudding to mean a dessert has evolved from the almost exclusive use of the term to describe a savoury dish"
    },
];
const Recipe = ()=>{
    const [recipe,setRecipe]=useState(recipes);
    const [value,setValue]= useState("");
    const onHandleChange = (e)=>{
        setValue(e.target.value);
        const searchedRecipe = recipe.filter(recipeee=>recipeee.title== value);
        setRecipe(searchedRecipe);
    };
    return <div className={styles.recipeContainer}>
        <h1>Find your Delicious Recipe</h1>
        <Input onHandleChange={onHandleChange}/>
        <div className={styles.recipeCardContainer}>
            {
                recipe.map(recipeee =>(
                    <RecipeCard recipe={recipeee}/>
                ))}
        </div>
    </div>;
};
export default Recipe;