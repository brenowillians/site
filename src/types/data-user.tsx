export interface DataUser {
    idUserSite?: number;
    name: string ;
    login: string;
    locked: boolean;
    birthday: string ;
    gender: string ;
    phone: string;
    mobile: string;
    cpf: string 
}

export type LoginParams = {
    login: string
    password: string
}
