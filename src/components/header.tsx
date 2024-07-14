import { DataBrand } from "@/types/data-brand"
import { DataCategory } from "@/types/data-category"
import { DataProduct } from "@/types/data-product"
import { DataSize } from "@/types/data-size"
import http from "@/utils/http"
import React from "react"
import { useEffect } from "react"


export default function HeaderComponent() {
  const [categories, setCategories] =React.useState<DataCategory[]>([])
  const [brands, setBrands] =React.useState<DataBrand[]>([])
  const [products, setProducts] =React.useState<DataProduct[]>([])
  const [sizes, setSizes] =React.useState<DataSize[]>([])

    useEffect(()=>{
      const loadData = async () =>{
        try{
            console.log('load')
            const response = await http.get('service-product/category/active/')
            if(response.data){
                if(Array.isArray(response.data)){
                    setCategories(response.data)
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
        const response = await http.get('service-product/product/active/')
        if(response.data){
            if(Array.isArray(response.data)){
                setProducts(response.data)
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
    },[])

    return (
      <header id="home">
      <nav>
        <ul>
          <li className="primary-nav">
            <img src="Images/img-DS.png" alt="logo" />
            <a href="#home">DOWNY SHOES</a>
          </li>

                   
          {categories && categories.map((category, index) => (
            <li key={index} className="secondary-nav">
              <a href={`/category/${category.idCategory}`}>{category.name}</a>
            </li>))}

            <li className="secondary-nav">
              <a href="/cart">
                <i className="fas fa-shopping-cart"></i> Meu Carrinho
              </a>
           </li>
           
           <li className="secondary-nav">
              <a href="/register">
                <i className="fas fa-user-circle fa-lg"></i> Meu Cadastro
              </a>
           </li>

          {/*brands && brands.map((brand, index) => (
            <li key={index} className="secondary-nav">
              <a href={`brand/${brand.idBrand}`}>{brand.name}</a>
            </li>))*/}
           
           {/*products && products.map((product, index) => (
            <li key={index} className="secondary-nav">
              <a href={`product/${product.idProduct}`}>{product.name}</a>
            </li>))*/}

          {/*sizes && sizes.map((size, index) => (
            <li key={index} className="secondary-nav">
              <a href={`size/${size.idSize}`}>{size.name}</a>
            </li>
          ))*/}          

        </ul>
      </nav>
    </header>
    )
}