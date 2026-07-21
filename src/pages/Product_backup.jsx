import { useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";
import products from "../data/products";


function Product(){

const {id}=useParams();

const navigate=useNavigate();


const {addToCart}=useContext(CartContext);

const {
toggleWishlist,
isInWishlist
}=useContext(WishlistContext);



const product = products.find(
(item)=>String(item.id) === String(id)
);


if(!product){

return(
<h2 style={{padding:"20px"}}>
Product Not Found
</h2>
);

}



const saved = isInWishlist(product.id);



return(

<div

style={{
minHeight:"100vh",
background:"#f5f5f5",
padding:"15px",
fontFamily:"Arial"
}}

>


<Link

to="/"

style={{
color:"#2e7d32",
fontWeight:"bold",
textDecoration:"none"
}}

>
← Back
</Link>




<div

style={{
background:"#fff",
padding:"15px",
borderRadius:"20px",
marginTop:"20px",
boxShadow:"0 5px 20px rgba(0,0,0,.1)"
}}

>



<img

src={product.image}

alt={product.name}

style={{
width:"100%",
height:"300px",
objectFit:"cover",
borderRadius:"20px"
}}

/>




<h1>
{product.name}
</h1>



<p>
⭐ {product.rating} Rating
</p>


<p>
📦 {product.weight}
</p>


<p>
🌿 {product.category}
</p>



<h1
style={{
color:"#2e7d32"
}}
>
₹{product.price}
</h1>



<p
style={{
textDecoration:"line-through",
color:"#888"
}}
>
₹{product.oldPrice}
</p>




<p>
{product.description ||
"Traditional Jharkhand style homemade pickle with authentic taste."}
</p>




<button

onClick={()=>toggleWishlist(product)}

style={{

width:"100%",

padding:"14px",

border:"none",

borderRadius:"30px",

background:
saved
?
"#e91e63"
:
"#ddd",

color:
saved
?
"#fff"
:
"#333",

fontSize:"17px",

fontWeight:"bold",

marginBottom:"12px"

}}

>

{
saved
?
"❤️ Remove Wishlist"
:
"🤍 Add Wishlist"
}

</button>




<button

onClick={()=>{

addToCart(product);

alert("Added To Cart 🛒");

}}

style={{

width:"100%",

padding:"15px",

border:"none",

borderRadius:"30px",

background:"#2e7d32",

color:"#fff",

fontSize:"18px",

fontWeight:"bold"

}}

>

🛒 Add To Cart

</button>




<button

onClick={()=>{

addToCart(product);

navigate("/checkout");

}}

style={{

width:"100%",

padding:"15px",

marginTop:"12px",

border:"2px solid #ff9800",

borderRadius:"30px",

background:"#fff",

color:"#ff9800",

fontSize:"18px",

fontWeight:"bold"

}}

>

⚡ Buy Now

</button>



</div>


</div>


);

}


export default Product;
