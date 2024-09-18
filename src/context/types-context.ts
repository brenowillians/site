import { DataAddressType } from "@/types/data-address-type"
import { DataCart } from "@/types/data-cart"
import { DataProduct } from "@/types/data-product"
import { DataShip } from "@/types/data-ship"
import { DataUser, LoginParams } from "@/types/data-user"
import { DataUserAddress } from "@/types/data-user-address"

export type CallbackType = () => void

export type UserValuesType ={
    login: (params: LoginParams, successCallback?: CallbackType, errorCallback?: CallbackType) => void
    logout: () => void
    
    
    updateAddress: (userAddress: DataUserAddress, successCallback?: CallbackType, errorCallback?: CallbackType) => void
    createAddress: (userAddress: DataUserAddress, successCallback?: CallbackType, errorCallback?: CallbackType) => void
    

    user: DataUser | null
    setUser: (value: DataUser | null) => void

    hidden: boolean 
    setHidden: (value: boolean) => void

    errorMessage: string | null
    setErrorMessage: (value: string | null) => void

    sucessMessage: string | null
    setSucessMessage: (value: string | null) => void

    cart: DataCart[] | null
    setCart: (value: DataCart[] | null) => void

    ship: DataShip[] | null
    setShip: (value: DataShip[] | null) => void

    selectedShip: DataShip | null
    setSelectedShip: (value: DataShip | null) => void


    addressTypes: DataAddressType[] | null
    setAddressTypes: (value: DataAddressType[] | null) => void

    addProduct: (dataProduct: DataProduct) => void

    removeProduct: (dataProduct: DataProduct) => void

    removeAllProduct: (dataProduct: DataProduct) => void
    
    clearCart: ()=>void

    totalCart: number | null
    setTotalCart: (value: number | null) => void

    isLogged: ()=> boolean

    getCode: (login: string, successCallback?: CallbackType,) => void


}