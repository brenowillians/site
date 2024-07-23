import ShortCart from "@/components/short-cart";
import styles from "../styles/shipping.module.css";
export default function shipping() {

    return (      
    <section className={styles.items}>
        <h1>Aguenta aí</h1>
        <div className={styles.row}>

            <div  className={styles.col2}>
                <div className={styles.items2}>        
                    <div className={styles.card}>
                        <img src="../Images/img-Nike1.jpg" alt="Shoe" style={{width:"100%"}} data-src></img>
                        <h3>nome</h3>
                        <p className={styles.price}>dsf</p>
                        <p>fads</p>
                    </div>
                </div>
            </div>
            <div  className={styles.col2}>
                <div className={styles.items2}>        
                    <div className={styles.card}>
                        <img src="../Images/img-Nike1.jpg" alt="Shoe" style={{width:"100%"}} data-src></img>
                        <h3>nome</h3>
                        <p className={styles.price}>dsf</p>
                        <p>fads</p>
                    </div>
                </div>
            </div>
            <div  className={styles.col2}>
                <div className={styles.items2}>        
                    <ShortCart/>
                </div>
            </div>
        </div>
    </section>
    )
}