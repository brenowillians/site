import { DataUserAddress } from "./data-user-address";

export interface DataAddressType {
    idAddressType: number;
    description: string ;
    createdDate: string;
    updatedDate: string;
    deletedDate: string;  
    userAddresses: DataUserAddress[];
}

export type LoginParams = {
    login: string
    password: string
}
