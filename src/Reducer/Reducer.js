import {Add_to_Cart} from "../Constant";
const intialstate={cartData:[]}
export default function cartItems(state = intialState,action){
    switch(action,type){

         case ADD_TO_CART (action.type):
             return{
                 ...state,
                    cartData:action.data
             }

    }
}