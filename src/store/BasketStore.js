import { makeAutoObservable } from "mobx";

export default class BasketStore{
    constructor(){
        this.products = [];
        makeAutoObservable(this);
    }

    //addproduct сделать
    addOneProduct(productId){
        for (let i = 0; i < this.products.length; i++){
            if (this.products[i].id == productId){
                this.products[i].count = this.products[i].count++;
                break;
            }
        }
    }

    dropOneProduct(productId){

    }

    dropProduct(productId){
        this.products = this.products.filter((elem) => elem != productId);
    }
}