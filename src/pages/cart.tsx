import { DataProduct } from "@/types/data-product";
import React, { Fragment } from "react";
import styles from "../styles/cart.module.css";
import { useContextUser } from "@/hooks/useContextUser";


export default function Cart() {

  const context = useContextUser()


    return ( 

<section>
      <h1>Cart</h1>
      <div className={styles.row}>
        <div className={styles.column}>
          <h1>Seu pedido</h1>
          <h5>Por favor, selecine a quantidade abaixo</h5>

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

                   
          <hr />
        </div>
        <div className={styles.column2}>
          <h3>Total do carrinho</h3>
          <div className={styles.row1}>
            <div className={styles.col1}>
              <h5>Subtotal</h5>
              <h5>Frete</h5>
            </div>
            <div className={styles.col1}>
              <h5>${context.totalCart}</h5>
              <div className={styles.wrapper}>
              {context.ship &&
              context.ship.map((ship, index) => (                
                <span key={index}>
                  <input type="radio" name="shipping" id={`${ship.idShip}`} onClick={()=> context.setSelectedShip(ship)} />
                  {ship.name} {ship.value? `$${ship.value}`:''}
                </span>
                ))}
              </div>
            </div>
          </div>
          <h3>Total &nbsp; &nbsp; $ {
            context.totalCart && context.selectedShip?.value?
              context.totalCart + context.selectedShip?.value :
              context.totalCart? context.totalCart : 0
          } </h3>
          <div className="buttons">
            <a className="buttonCheckout" href={context.isLogged()? '/shipping': "/signin"}>Confirmar Compra</a>
            <a className="cancel" href="../HTML/men.html">Continue comprando</a>
            <a className="clearCart" href="#" onClick={()=> context.clearCart()}>Limpar Carrinho</a>
          </div>
        </div>
      </div>
    </section>
    )
}