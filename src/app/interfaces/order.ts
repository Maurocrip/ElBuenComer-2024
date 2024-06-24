import { orderState } from "../enums/orderState";
import { product } from "./products";

export interface order
{
    id : string;
    idTable : string;
    products : Array<productInOrder>;
    creationTime : number;
    price : number;
    state : orderState;
    barFinished : boolean;
    kitchenFinished : boolean;
}

export interface productInOrder
{
    product : product;
    cuantity : number;
}