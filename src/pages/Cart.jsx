import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import BottomNav from "../components/BottomNav";


function Cart(){

const navigate = useNavigate();


const {
cart,
removeFromCart,
increaseQty,
decreaseQty

}=useContext(CartContext);



const total = cart.reduce(
(sum,item)=> sum + Number(item.price) * Number(item.qty || 1),
0
);



return(

<div

style={{
minHeight:"100vh",
background:"#f5f5f5",
padding:"15px",
paddingBottom:"90px",
fontFamily:"Arial"
}}

>


<Link

to="/"

style={{
textDecoration:"none",
color:"#2e7d32",
fontWeight:"bold"
}}

>

← Continue Shopping

</Link>




<h1
style={{
color:"#d35400"
}}
>
🛒 The Desy Cart
</h1>



{
cart.length===0 ?


<div

style={{
background:"#fff",
padding:"30px",
borderRadius:"20px",
textAlign:"center"
}}

>

<h2>
😔 Cart Empty
</h2>


<p>
Add your favourite achar
</p>


<button

onClick={()=>navigate("/")}

style={buttonStyle}

>
🥭 Shop Now
</button>


</div>



:


<>


{
cart.map(item=>(


<div

key={item.id}

style={{
background:"#fff",
borderRadius:"20px",
padding:"15px",
marginTop:"15px",
boxShadow:"0 5px 15px rgba(0,0,0,.1)"
}}

>


<div

style={{
display:"flex",
gap:"15px"
}}

>


<img

src={item.image}

alt={item.name}

style={{
width:"90px",
height:"90px",
borderRadius:"15px",
objectFit:"cover"
}}

/>



<div>

<h3 style={{margin:"0"}}>
{item.name}
</h3>


<p>
₹{item.price}
</p>



</div>


</div>





<div

style={{
display:"flex",
alignItems:"center",
justifyContent:"space-between",
marginTop:"15px"
}}

>


<div>


<button

onClick={()=>decreaseQty(item.id)}

style={qtyBtn}

>
−
</button>



<span
style={{
padding:"0 15px",
fontWeight:"bold"
}}
>
{item.qty}
</span>



<button

onClick={()=>increaseQty(item.id)}

style={qtyBtn}

>
+
</button>



</div>




<h3>
₹{item.price * item.qty}
</h3>



</div>




<button

onClick={()=>removeFromCart(item.id)}

style={{

width:"100%",

marginTop:"12px",

padding:"10px",

border:"none",

borderRadius:"20px",

background:"#e74c3c",

color:"#fff",

fontWeight:"bold"

}}

>
❌ Remove
</button>



</div>


))

}




<div

style={{
background:"#fff",
padding:"20px",
borderRadius:"20px",
marginTop:"20px"
}}

>


<h2>
Total Amount
</h2>


<h1
style={{
color:"#2e7d32"
}}
>
₹{total}
</h1>



<button

onClick={()=>navigate("/checkout")}

style={buttonStyle}

>

Proceed To Checkout 🚀

</button>


</div>



</>

}




<BottomNav />


</div>


);

}




const qtyBtn={

background:"#2e7d32",

color:"#fff",

border:"none",

width:"35px",

height:"35px",

borderRadius:"50%",

fontSize:"20px"

};



const buttonStyle={

width:"100%",

padding:"15px",

border:"none",

borderRadius:"30px",

background:"linear-gradient(135deg,#1b5e20,#66bb6a)",

color:"#fff",

fontSize:"17px",

fontWeight:"bold"

};



export default Cart;
