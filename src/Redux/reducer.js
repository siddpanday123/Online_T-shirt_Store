import { ADD_TO_CART, DECREASE_QUENTITY, INCREASE_QUENTITY, REMOVE_PRODUCT } from "./constant";
const initialState={
  currentCartData:[],
  Totalprice:0
}
export const cartData = (data = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {...data,currentCartData:[...manageAddTocart(data.currentCartData,action.data,action.id)],Totalprice:TotalPrice(data.currentCartData,action.data?.InitialPrice)};
    case INCREASE_QUENTITY:
      return {...data,currentCartData:[...incrementCartProduct(data.currentCartData,action.id)],Totalprice:TotalPrice(data.currentCartData,action.InitialPrice)};
    case DECREASE_QUENTITY:
      return {...data,currentCartData:[...decrementCartProduct(data.currentCartData,action.id)],Totalprice:(data.Totalprice-action.InitialPrice)};
    case REMOVE_PRODUCT:
      return {...data, currentCartData:[...RemoveCart(data.currentCartData,action.id)],Totalprice:(data.Totalprice-action.price)}
    default:
      return data;
  }
};

function manageAddTocart(cartData,data,id){
    if(cartData.length===0){
      cartData.push(data);
      return cartData;
    }
    else if(cartData.length>0){
      for(let i=0;i<cartData.length;i++){
        if(cartData[i].id==id){
          alert("product already in cart");
          return cartData;
        }
      }
      cartData.push(data);
      return cartData;
    }
}
function incrementCartProduct(data,id){
   let newData=data.map((e)=>e.id==id?{...e,price:calculatePrice(e.InitialPrice,e.currentQuentity>=1?e.currentQuentity+1:1),currentQuentity:e.currentQuentity>=1?e.currentQuentity+1:1}:e);
   return newData
}
function decrementCartProduct(data,id){
  let newData=data.map((e)=>e.id==id?{...e,price:calculatePrice(e.InitialPrice,e.currentQuentity>1?e.currentQuentity-1:1),currentQuentity:e.currentQuentity>1?e.currentQuentity-1:1}:e);
  return newData
}
function calculatePrice(InitialPrice,quentity){
  return InitialPrice*quentity;
}

function TotalPrice(data,InitialPrice){
  let totalPriceOfCart=InitialPrice;
  for(let i=0;i<data.length;i++){
    totalPriceOfCart=totalPriceOfCart+data[i].price;
  }
  return totalPriceOfCart;
}

function RemoveCart(data,id){
    return data.filter((e)=>{
      if(e.id!=id){
        return e;
      }
    })
}
