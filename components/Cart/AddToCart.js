import useCart from "../../lib/drawer/customhooks/useCart";
import AwaitButton from "../Loaders/AwaitButton";


const AddToCart =({data})=>{
    const {isSpinning,fetchCart} = useCart()
    if(isSpinning){
        return (
            <AwaitButton/>
        )
    }
    else{
        return (
            <div 
                className="checkout_button" 
                onClick={()=>fetchCart(data.payload)}>
                <h3>Add to cart </h3>
            </div>
        )
    }
}

export default AddToCart;