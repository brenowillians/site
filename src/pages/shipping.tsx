import ShortCart from "@/components/short-cart";
import styles from "../styles/shipping.module.css";
import ShortPersonalData from "@/components/short-personal-data";
import ShortAddress from "@/components/short-address";
export default function shipping() {

    return (      
    <section className={styles.items}>
        <h1>Aguenta aí</h1>
        <div className={styles.row}>

            <div  className={styles.col2}>
                <div className={styles.items2}>        
                    <ShortPersonalData/>
                </div>
            </div>
            <div  className={styles.col2}>
                <div className={styles.items2}>        
                    <div className={styles.card}>
                        <ShortAddress/>
                    </div>
                </div>
            </div>
            <div  className={styles.col2}>
                <div className={styles.items2}>

                        <ShortCart/>
  
                    <div className={styles.buttonCheckout} style={{position:"relative"}}> <a href="payment">Ir para pagamento</a>   </div>
                </div>
                
            </div>
            
        </div>
        
        
    </section>
    
    )
}