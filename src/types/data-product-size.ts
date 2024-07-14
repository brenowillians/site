import { DataSize } from "./data-size";

export interface DataProductSize {
    idProductSize: number;
    idProduct: number;
    idSize: number;
    available: boolean;
    createdId: number;
    updatedId: number;
    createdDate: string;
    updatedDate: string;
    deletedDate: string;
    idSize2: DataSize;
}