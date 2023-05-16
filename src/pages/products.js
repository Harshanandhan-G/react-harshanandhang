import styles from "@/styles/products.module.css"
import productCard from "@/components/productCard"
const Product = () =>{
    return (
        <>
        <h1 className={styles.heading}>Product</h1>
        <productCard/>
        </>
   )
}
export default Product