
import { DataBrand } from "@/types/data-brand";
import styles from "../../styles/product.module.css";
import http from "@/utils/http";
import React, { Fragment } from "react"
import { useEffect } from "react"
import { DataSize } from "@/types/data-size";
import { useRouter } from 'next/router'
import { DataProduct } from "@/types/data-product";
import { DataCategory } from "@/types/data-category";
import { useContextUser } from "@/hooks/useContextUser";
                     

export default function Product() {
    const router = useRouter();
    const {id} = router.query;

    const [product, setProduct] =React.useState<DataProduct>()
    const [category, setCategory] =React.useState<DataCategory>()
    const context = useContextUser()

    useEffect(()=>{
      const loadData = async () =>{
    
          try{

              console.log('load')

              const responseProduct = await http.get('service-product/product/' + id)
              console.log(responseProduct.data)
              if(responseProduct.data){
                  setProduct(responseProduct.data)
                  console.log(responseProduct.data)
              }
              else{
                  //setSnackMessage("Nenhum registro foi encontrado.")
              }
  
            }
            catch(error){
                console.log(error)
                //setSnackMessage("Não foi possível processar a solicitação.")
            }
          
    
        }
        loadData()
        },[id])

    const addCart = async(product: DataProduct) =>{
      try{
        await context.addProduct(product)
        router.push('/cart')
      }
      catch(error){
          console.log(error)
      }
    }

    return (
        
    <section className={styles.items}>
      <div className={styles.row}>
        <div className={styles.col1}>
          <img src="../Images/nike-6.jpg" alt=""  />
        </div>
        <div className={styles.col2}>
          <h1 className={styles.h1} >{product && product.name}</h1>
          <p>
          {product && product.description}
          </p>
          <h2>${product && product.fullPrice}</h2>
          <span>
            <h3>Size</h3>
            <select className={styles.select} name="" id="">
              <option value="" selected disabled
                >Please select an option</option>

                {product?.productSizes &&
                product?.productSizes.map((productSize, index) => (
                  <Fragment>
                    <option key={index} value={productSize.idSize2.idSize}>{productSize.idSize2.name}</option>
                  </Fragment>
                ))}
            </select>
          </span>
          <br />
          <br />
          <a className={styles.buttonCart} onClick={() => addCart(product as DataProduct)} href="#">Add to cart</a> &nbsp;
          &nbsp;
          <a className={styles.wishlist} href="">Add to wishlist</a>
        </div>
      </div>
    </section>
    
        
    
)
}