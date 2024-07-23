import { useContextUser } from "@/hooks/useContextUser";
import styles from "../styles/cart.module.css";
import { Fragment } from "react";
export default function ShortCart() {

    const context = useContextUser()

    return ( 
        <div>
        {context.cart &&
            context.cart.map((product, index) => (
                <Fragment>
                  <div className={styles.cartItem} id="item">
                    <img src="../Images/img-Nike1.jpg" alt="" />
                    <p>{product && product.name}</p>
                    <p>${product && product.fullPrice*product.quantity}</p>
                    <div>
                      <button id="remove" className={styles.remove} onClick={()=> context.removeProduct(product)}>
                        <i className="fas fa-minus"></i>
                      </button>
                      <input disabled={true}
                        type="number"
                        name="quantity"
                        id="no-of-items"
                        value={product && product.quantity}
                      />
                      <button id="remove" className={styles.remove} onClick={()=> context.addProduct(product)}>
                        <i className="fas fa-plus fa-1x"></i>
                      </button>
                    </div>
                    &nbsp;
                    <button id="remove" className={styles.remove}onClick={()=> context.removeAllProduct(product)}>
                      <i className="fas fa-trash fa-2x"></i>
                    </button>
                  </div>
                </Fragment>
              ))}
            </div>
    )
}