import { DataProduct } from "./data-product";

export interface DataCart extends DataProduct {
    quantity: number;
}