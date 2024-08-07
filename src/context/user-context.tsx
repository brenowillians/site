import { ReactNode, createContext, useEffect, useState } from "react";
import { CallbackType, UserValuesType } from "./types-context";
import { DataUser, LoginParams } from "@/types/data-user";
import { DataCart } from "@/types/data-cart";
import { DataShip } from "@/types/data-ship";
import { DataProduct } from "@/types/data-product";
import http from "@/utils/http";

const defaultProvider: UserValuesType = {
    user: null,
    setUser: () => null,

    hidden: true,
    setHidden: () => null,
  
    errorMessage: null,
    setErrorMessage: () => null,
  
    sucessMessage: null,
    setSucessMessage: () => null,
  
    login: () => Promise.resolve(),
    logout: () => Promise.resolve(),

    cart: null,
    setCart: () => null,

    ship: [
        {   idShip: 1,
            name: "Frete Expresso",
            active: true,
            value: 19.90,
            createdId: 1,
            updatedId: null
        },
        {   idShip: 2,
            name: "Frete Gratis",
            active: true,
            value: 0,
            createdId: 1,
            updatedId: null
        },
        {   idShip: 1,
            name: "Retirar",
            active: true,
            value: 0,
            createdId: 1,
            updatedId: null
        }
    ],
    setShip: () => null,

    selectedShip: null,
    setSelectedShip: () => null,

    addProduct: () => Promise.resolve(),

    removeProduct: () => Promise.resolve(),
    
    removeAllProduct: () => Promise.resolve(),
    
    clearCart:() => Promise.resolve(),

    totalCart: null,
    setTotalCart: () => null,
  }

  const UserContext = createContext(defaultProvider)

type Props = {
    children: ReactNode
}

const UserProvider = ({ children }: Props) => {

    const [user, setUser] = useState<DataUser | null >(defaultProvider.user)
    const [errorMessage, setErrorMessage] = useState<string | null>(defaultProvider.errorMessage)
    const [sucessMessage, setSucessMessage] = useState<string | null>(defaultProvider.sucessMessage)
    const [cart, setCart] = useState<DataCart[] | null >(defaultProvider.cart)
    const [totalCart, setTotalCart] = useState<number | null >(defaultProvider.totalCart)
    const [ship, setShip] = useState<DataShip[] | null >(defaultProvider.ship)
    const [selectedShip, setSelectedShip] = useState<DataShip | null >(defaultProvider.selectedShip)
    const [hidden, setHidden] = useState<boolean >(defaultProvider.hidden)

    useEffect(() => {
        const loadUserStorage = async (): Promise<void> => {
            const storedCart = window.localStorage.getItem('storageCart')!
            if (storedCart) {
                setCart(JSON.parse(storedCart))
            }
            const storedUser = window.localStorage.getItem('storageUser')!
            if (storedUser) {
                setUser(JSON.parse(storedUser))
            }
        }
        loadUserStorage()
    }, [])

    useEffect(() => {
        console.log(cart)
        if(cart && cart.length){
            window.localStorage.setItem('storageCart',JSON.stringify(cart))
            let totalCart=0
            for(const item of cart){
                totalCart += (item.fullPrice * item.quantity)
            }
            setTotalCart(totalCart)
        }
        else{
            setTotalCart(0)
        }
    }, [cart])


    const login = (params: LoginParams, successCallback?: CallbackType, errorCallback?: CallbackType) =>{
        http.post('service-user/user-site/signin/', params)
        .then(async res => {
            window.localStorage.setItem('storageTokenKeyName', res.data.accessToken)
            window.localStorage.setItem('storageTokenRefreshKeyName', res.data.refreshToken)
            const userData: DataUser = res.data.user
            setUser({ ...userData })
            await window.localStorage.setItem('storageUser', JSON.stringify(userData))  
        })
        .then(async res => {
            if(successCallback){
                successCallback()
            }
        })

            /*window.localStorage.setItem('storageTokenKeyName', "response.data.accessToken")
            window.localStorage.setItem('storageTokenRefreshKeyName', "response.data.refreshToken")
            const userData: DataUser = {
                name: "",
                login: "",
                locked: false,
                birthday: "",
                gender: "",
                phone: "",
                mobile: "",
                cpf: ""
            }
            setUser({ ...userData })
             window.localStorage.setItem('storageUser', JSON.stringify(userData))  */
    }


    const logout = () =>{
        setUser(null)
        //setHidden(true)
        window.localStorage.removeItem('storageUser')
        window.localStorage.removeItem('storageCart')
    }


    const addProduct=(product: DataProduct) =>{
        let newCart:DataCart[] =[]

        if(cart && cart.length){// o state cart não pode estar null e se não estiver nulo também não pode estar vazio (lenght=0)
          newCart =[...cart as DataCart[]]
          //verificar se o produto já está inserido no cart
          const productExists = newCart.find(item => item.idProduct === product.idProduct)

          if(productExists){
            productExists.quantity = productExists.quantity + 1
            productExists.name= product.name
            productExists.active = product.active
            productExists.createdId= product.createdId
            productExists.updatedId= product.updatedId
            productExists.image= product.image
            productExists.fullPrice= product.fullPrice
            productExists.salePrice= product.salePrice
            productExists.onSale= product.onSale
            productExists.description= product.description
            productExists.idBrand= product.idBrand
            productExists.idCategory= product.idCategory
          }
          else{
            newCart?.push({...product, quantity:1})
          }
        }
        else{
            newCart?.push({...product, quantity:1})
        }
        setCart(newCart as DataCart[])

    }

    const removeProduct=(product: DataProduct) =>{
        let newCart:DataCart[] =[]

        if(cart && cart.length){// o state cart não pode estar null e se não estiver nulo também não pode estar vazio (lenght=0)
          newCart =[...cart as DataCart[]]
          //verificar se o produto já está inserido no cart
          const productExists = newCart.find(item => item.idProduct === product.idProduct)

          if(productExists){
            if(productExists.quantity > 1){
                productExists.quantity = productExists.quantity - 1
                productExists.name= product.name
                productExists.active = product.active
                productExists.createdId= product.createdId
                productExists.updatedId= product.updatedId
                productExists.image= product.image
                productExists.fullPrice= product.fullPrice
                productExists.salePrice= product.salePrice
                productExists.onSale= product.onSale
                productExists.description= product.description
                productExists.idBrand= product.idBrand
                productExists.idCategory= product.idCategory
            }
            else{
                newCart = cart.filter(item => item.idProduct!== product.idProduct)
            }

          }
        }
        setCart(newCart as DataCart[])
    }

    const removeAllProduct =(product: DataProduct) =>{
        let newCart:DataCart[] =[]

        if(cart && cart.length){// o state cart não pode estar null e se não estiver nulo também não pode estar vazio (lenght=0)
             console.log(product.idProduct)

            newCart = cart.filter(item => item.idProduct!== product.idProduct) 
            console.log(newCart)
        }
        setCart(newCart as DataCart[])
    }
    
    const clearCart= () =>{
        setCart([])
    }

    const values = {
        user,
        setUser,
        errorMessage,
        setErrorMessage,
        sucessMessage,
        setSucessMessage,
        login: login,
        logout: logout,
        cart: cart,
        setCart: setCart,
        addProduct:addProduct,
        removeProduct: removeProduct,
        removeAllProduct: removeAllProduct,
        clearCart: clearCart,
        totalCart: totalCart,
        setTotalCart: setTotalCart,
        
        ship: ship,
        setShip: setShip,

        selectedShip: selectedShip,
        setSelectedShip: setSelectedShip,
        hidden: hidden,
        setHidden: setHidden,
      }
    
      return <UserContext.Provider value={values}>{children}</UserContext.Provider>
    }
    
export { UserContext, UserProvider }