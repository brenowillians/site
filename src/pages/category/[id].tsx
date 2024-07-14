
import { DataBrand } from "@/types/data-brand";
import styles from "../../styles/category.module.css";
import http from "@/utils/http";
import React, { Fragment } from "react"
import { useEffect } from "react"
import { DataSize } from "@/types/data-size";
import { useRouter } from 'next/router'
import { DataProduct } from "@/types/data-product";
import { DataCategory } from "@/types/data-category";
                     

export default function Category() {
    const router = useRouter();
    const {id} = router.query;

    const [brands, setBrands] =React.useState<DataBrand[]>([])
    const [sizes, setSizes] =React.useState<DataSize[]>([])
    const [products, setProducts] =React.useState<DataProduct[]>([])
    const [category, setCategory] =React.useState<DataCategory>()
    

    useEffect(()=>{
        const loadData = async () =>{
      
            try{

                console.log('load')

                const responseCategory = await http.get('service-product/category/' + id)
                console.log(responseCategory.data)
                if(responseCategory.data){
                    setCategory(responseCategory.data)
                }
                else{
                    //setSnackMessage("Nenhum registro foi encontrado.")
                }
                
                const param ={
                    idCategory: id,
                    items: 1000,
                    page: 1,
                    order: {fullPrice: "ASC"}
                }

                const responseProduct = await http.post('service-product/product/list-by-category/', param)
                console.log(responseProduct.data)
                if(responseProduct.data.data.result){
                    if(Array.isArray(responseProduct.data.data.result)){
                        setProducts(responseProduct.data.data.result)
                    }
                    else{
                        //setSnackMessage("Nenhum registro foi encontrado.")
                    }
                }
                else{
                    //setSnackMessage("Nenhum registro foi encontrado.") 
                }


                const response = await http.get('service-product/brand/active/')
                if(response.data){
                    if(Array.isArray(response.data)){
                        setBrands(response.data)
                    }
                    else{
                        //setSnackMessage("Nenhum registro foi encontrado.")
                    }
                }
                else{
                    //setSnackMessage("Nenhum registro foi encontrado.") 
                }
    
            }
            catch(error){
                console.log(error)
                //setSnackMessage("Não foi possível processar a solicitação.")
            }

            try{
                console.log('load')
                const response = await http.get('service-product/size/active/')
                if(response.data){
                    if(Array.isArray(response.data)){
                        setSizes(response.data)
                    }
                    else{
                        //setSnackMessage("Nenhum registro foi encontrado.")
                    }
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
    


    return (
        
    <section className={styles.items}>
      <h1>{category && category.name}</h1>
      <div className={styles.row}>
        <div className={styles.col}>
            <h2>FILTRAR POR:</h2>
          <h3>PREÇO</h3>
          <hr />
          <input type="radio" name="price" id="" /> Abaixo de $60 <br />
          <input type="radio" name="price" id="" /> Acima de $60 <br />
          <h3>TAMANHO</h3>
          <hr />
          {sizes && sizes.map((size, index) => (
            <Fragment>
                <input key={index} type="radio" name="size" id={`size${size.idSize}`} /> {size.name} <br/>
            </Fragment>
          ))}
          
          <h3>MARCAS</h3>
          <hr />
          {brands && brands.map((brand, index) => (
            <Fragment>
                <input key={index} type="radio" name="brand" id={`size${brand.idBrand}`} /> {brand.name} <br/>
            </Fragment>
          ))}
        </div>
        <div  className={styles.col2}>
          
        <div className={styles.items2}>
        
          {products && products.map((product, index) => (
            <div className={styles.card}>
                <img src="../Images/img-Nike1.jpg" alt="Shoe" style={{width:"100%"}} data-src></img>
                <h3>{product.name}</h3>
                <p className={styles.price}>${product.fullPrice}</p>
                <p><a href={`../product/${product.idProduct}`}>Detalhes</a></p>
            </div>
          ))}
     
        </div>
        </div>
      </div>
      </section>
    
)
}