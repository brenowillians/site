import { DataProductSize } from "./data-product-size";

export interface DataProduct {
    idProduct?: number;
    name: string ;
    active: boolean ;
    createdId: number;
    updatedId: number | null;
    image: string ;
    fullPrice: number;
    salePrice?: number;
    onSale: boolean ;
    description: string ;
    idBrand: number; 
    idCategory: number; 
    productSizes: DataProductSize[]
}