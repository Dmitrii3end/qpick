import Shop from "../pages/Shop/Shop";
import Basket from "../pages/Basket/Basket";
import { SHOP_ROUTE } from "../utils/const";

export const publicRoute = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    },
]