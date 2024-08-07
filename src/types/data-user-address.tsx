import { DataAddressType } from "./data-address-type";
import { DataUser } from "./data-user";

export interface DataUserAddress {
    idAddress?: number;
    idUserSite: number;
    street: string ;
    number: string ;
    zipCode: string ;
    city: string ;
    state: string ;
    country: string ;
    idAddressType: number;
    createdDate: string;
    updatedDate: string;
    deletedDate: string;  

    idAddressType2: DataAddressType;
    idUserSite2: DataUser;

}

export type LoginParams = {
    login: string
    password: string
}
