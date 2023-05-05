import styles from './recipecard.module.css';
const RecipeCard =(props)=>{
    console.log(props);
    return(
         <div className={styles.recipeCard}>;
    <img className={styles.recipeImg} src={props.recipe.image}/>
    <h2 className={styles.recipeTitle}>{props.recipe.title}</h2>
    <p className={styles.burgRec}>{props.recipe.description}</p>
    </div>
    )
};
export default RecipeCard;