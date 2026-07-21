import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useContext } from "react";
import { WishlistContext } from "../context/WishlistContext";


function ProductCard({product}){

const {addToCart}=useCart();

const {
toggleWishlist,
isInWishlist
}=useContext(WishlistContext);


return(

<div
style={{
background:"#fff",
borderRadius:"20px",
overflow:"hidden",
boxShadow:"0 5px 18px rgba(0,0,0,0.12)",
margin:"5px",
position:"relative"
}}
>


<div style={{position:"relative"}}>

<Link
to={`/product/${product.id}`}
style={{
textDecoration:"none",
color:"inherit"
}}
>

<img
src={product.image}
alt={product.name}
style={{
width:"100%",
height:"170px",
objectFit:"cover"
}}
/>

</Link>


<button
onClick={()=>toggleWishlist(product)}
style={{
position:"absolute",
top:"10px",
right:"10px",
border:"none",
background:"#fff",
borderRadius:"50%",
width:"40px",
height:"40px",
fontSize:"22px"
}}
>
{isInWishlist(product.id) ? "❤️" : "🤍"}
</button>


<span
style={{
position:"absolute",
top:"10px",
left:"10px",
background:"#ff5722",
color:"#fff",
padding:"6px 10px",
borderRadius:"20px",
fontSize:"12px",
fontWeight:"bold"
}}
>
{product.discount}
</span>


</div>


<div style={{padding:"12px"}}>


<h3>
{product.name}
</h3>


<p>
📦 {product.weight}
</p>


<div
style={{
display:"flex",
justifyContent:"space-between",
alignItems:"center"
}}
>

<h2 style={{color:"#2e7d32"}}>
₹{product.price}
</h2>


<span>
⭐ {product.rating}
</span>

</div>


<p
style={{
textDecoration:"line-through",
color:"#999"
}}
>
₹{product.oldPrice}
</p>


<button
onClick={()=>addToCart(product)}
style={{
width:"100%",
padding:"12px",
border:"none",
borderRadius:"25px",
background:"#2e7d32",
color:"#fff",
fontSize:"16px",
fontWeight:"bold"
}}
>
🛒 Add To Cart
</button>


</div>


</div>

);

}


export default ProductCard;
