import { DataUserAddress } from "./data-user-address";

export interface DataUser {
    idUserSite?: number;
    name: string ;
    login: string;
    locked: boolean;
    birthday: string ;
    gender: string ;
    phone: string;
    mobile: string;
    cpf: string ;
    userAddresses: DataUserAddress[];
}

export type LoginParams = {
    login: string
    password: string
}
