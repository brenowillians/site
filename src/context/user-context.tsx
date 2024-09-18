import { ReactNode, createContext, useEffect, useState } from "react";
import { CallbackType, UserValuesType } from "./types-context";
import { DataUser, LoginParams } from "@/types/data-user";
import { DataCart } from "@/types/data-cart";
import { DataShip } from "@/types/data-ship";
import { DataProduct } from "@/types/data-product";
import http from "@/utils/http";
import { DataUserAddress } from "@/types/data-user-address";
import { DataAddressType } from "@/types/data-address-type";
import router from "next/router";

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

    updateAddress: () => Promise.resolve(),
    createAddress: () => Promise.resolve(),

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

    addressTypes: null,
    setAddressTypes: () => null,

    addProduct: () => Promise.resolve(),

    removeProduct: () => Promise.resolve(),
    
    removeAllProduct: () => Promise.resolve(),
    
    clearCart:() => Promise.resolve(),

    getCode:() => Promise.resolve(),

    totalCart: null,
    setTotalCart: () => null,

    isLogged: () => true,
    
    
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
    const [addressTypes, setAddressTypes] = useState<DataAddressType[] | null>(defaultProvider.addressTypes)

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

        const loadAddressTypes = async (): Promise<void> =>{
            try{
                const result = await http.get('service-user/address-type')
                if(result.data && result.data.length){
                    setAddressTypes(result.data)
                }
            }
            catch(error){
                console.error('Error:', error)
            }

        }

        loadAddressTypes()
        loadUserStorage()
    }, [])

    useEffect(() => {
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

    const getCode = (login: string, successCallback?: CallbackType) =>{
        http.post('service-user/user-site/get-code/', {login: login})
        .then(async res => {
            console.log(res.data)
            if(successCallback && res.data){
                successCallback()
            }       
        })
        .catch(err =>{
            console.error('Error:', err)
            setErrorMessage("E-mail inválido. Por favor revise as informações")
        })
    }


    const updateAddress = async (userAddress: DataUserAddress, successCallback?: CallbackType, errorCallback?: CallbackType) =>{
        try{
            if(!userAddress.idAddress){
                throw new Error("idAddress é obrigatório")
            }
            const result = await http.patch('service-user/user-address/'+ userAddress.idAddress, userAddress)
            if(result.status === 200){
                const storageUser = window.localStorage.getItem('storageUser')!
                if (storageUser) {
                    const newData: DataUser =JSON.parse(storageUser)

                    const isPrimary = userAddress.primary==1

                    for(let i=0; i<newData.userAddresses.length; i++){
                        if(newData.userAddresses[i].idAddress === userAddress.idAddress){
                            newData.userAddresses[i] = userAddress
                        }
                        else{
                            if(isPrimary){
                                newData.userAddresses[i].primary = 0
                            }
                        }
                    }
                    setUser({ ...newData })
                    await window.localStorage.setItem('storageUser', JSON.stringify(newData))  
                }
                if(successCallback){
                    successCallback()
                }
            }
        }
        catch(error){
            if(errorCallback){
                errorCallback()
            }
            else{
                console.error(error)
            }
        }
       
    }

    const createAddress = async (userAddress: DataUserAddress, successCallback?: CallbackType, errorCallback?: CallbackType) =>{
        try{
            const result = await http.post('service-user/user-address/', userAddress)
            if(result.status === 201){
                const storageUser = window.localStorage.getItem('storageUser')!
                if (storageUser) {
                    const newData: DataUser =JSON.parse(storageUser)

                    const isPrimary = userAddress.primary==1

                    for(let i=0; i<newData.userAddresses.length; i++){
                        if(isPrimary){
                            newData.userAddresses[i].primary = 0
                        }
                    }
                    newData.userAddresses.unshift(result.data)

                    setUser({ ...newData })
                    await window.localStorage.setItem('storageUser', JSON.stringify(newData))  
                }
                if(successCallback){
                    successCallback()
                }
            }
        }
        catch(error){
            if(errorCallback){
                errorCallback()
            }
            else{
                console.error(error)
            }
        }
       
    }

    const logout = () =>{
        setUser(null)
        window.localStorage.removeItem('storageUser')
        router.replace('/')
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

    const isLogged = ()=>{
        try{
            const storageUser = window.localStorage.getItem('storageUser')
            if(storageUser){
                return true
            }
            setUser(null)
            return false
        }
        catch(error){
            console.error(error)
            setUser(null)
            return false
            
        }

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
        getCode: getCode,
        
        ship: ship,
        setShip: setShip,

        addressTypes: addressTypes,
        setAddressTypes: setAddressTypes,

        selectedShip: selectedShip,
        setSelectedShip: setSelectedShip,
        hidden: hidden,
        setHidden: setHidden,

        updateAddress: updateAddress,
        createAddress: createAddress,
        isLogged: isLogged
       
      }
    
      return <UserContext.Provider value={values}>{children}</UserContext.Provider>
    }
    
export { UserContext, UserProvider }