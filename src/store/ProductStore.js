import productImg1 from '../assets/imgs/products/AppleBYZS852I.png';
import productImg2 from '../assets/imgs/products/AppleEarPods.png';
import productImg3 from '../assets/imgs/products/AppleEarPods2.png';
import productImg4 from '../assets/imgs/products/AppleAirPods2.png';
import productImg5 from '../assets/imgs/products/GERLAXGH-04.png';
import productImg6 from '../assets/imgs/products/BOROFONEBO4.png';
import { makeAutoObservable } from 'mobx';

export default class ProductStore{
    constructor(){
        this.products = [
            {
                group: 'Наушники',
                products: [
                    {
                        id: 1,
                        img: productImg1,
                        name: 'Apple BYZ S852I',
                        cost: 2927,
                        previousCost: 3527,
                        rate: 4.7,
                    },
                    {
                        id: 2,
                        img: productImg2,
                        name: 'Apple EarPods',
                        cost: 2327,
                        previousCost: 2327,
                        rate: 4.5,
                    },
                    {
                        id: 3,
                        img: productImg3,
                        name: 'Apple EarPods',
                        cost: 2327,
                        previousCost: 2327,
                        rate: 4.5,
                    },
                    {
                        id: 4,
                        img: productImg1,
                        name: 'Apple BYZ S852I',
                        cost: 2927,
                        previousCost: 3527,
                        rate: 4.7,
                    },
                    {
                        id: 5,
                        img: productImg2,
                        name: 'Apple EarPods',
                        cost: 2327,
                        previousCost: 2327,
                        rate: 4.5,
                    },
                    {
                        id: 6,
                        img: productImg3,
                        name: 'Apple EarPods',
                        cost: 2327,
                        previousCost: 2327,
                        rate: 4.5,
                    }
                ]
            },{
                group: 'Беспроводные наушники',
                products: [
                    {
                        id: 7,
                        img: productImg4,
                        name: 'Apple AirPods',
                        cost: 9527,
                        previousCost: 9527,
                        rate: 4.7,
                    },
                    {
                        id: 8,
                        img: productImg5,
                        name: 'GERLAX GH-04',
                        cost: 6527,
                        previousCost: 6527,
                        rate: 4.7,
                    },
                    {
                        id: 9,
                        img: productImg6,
                        name: 'BOROFONE BO4',
                        cost: 7527,
                        previousCost: 7527,
                        rate: 4.7,
                    }
                ]
            }
        ];
        makeAutoObservable(this);
    }

    setProducts(products){
        this.products = products;
    }
}