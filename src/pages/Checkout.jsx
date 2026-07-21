import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

import { CartContext } from "../context/CartContext";
import { db, auth } from "../firebase/firebase";

function Checkout() {

  const navigate = useNavigate();

  const { cart, clearCart } = useContext(CartContext);

  const [name,setName] = useState("");
  const [mobile,setMobile] = useState("");
  const [address,setAddress] = useState("");
  const [loading,setLoading] = useState(false);
const [paymentMethod,setPaymentMethod] = useState("COD");

  const total = cart.reduce(
    (sum,item)=> sum + item.price * item.qty,
    0
  );


  const placeOrder = async()=>{

    if(cart.length===0){
      alert("Cart empty");
      return;
    }

    if(!name || !mobile || !address){
      alert("Fill all details");
      return;
    }
    if(!auth.currentUser){
  alert("Please login first");
  navigate("/login");
  return;
}

    setLoading(true);


    try{

      await addDoc(collection(db,"orders"),{

        userId: auth.currentUser.uid,

        customer:{
          name,
          mobile,
          address
        },

        products:cart,
        paymentMethod,
        total,

        status:"Pending",

        createdAt:serverTimestamp()

      });


      clearCart();

      alert("🎉 Order Successfully Placed");

      navigate("/order-success");


    }catch(error){

      alert(error.message);

    }
    finally{

      setLoading(false);

    }

  };


return(

<div
style={{
background:"#f5f5f5",
minHeight:"100vh",
padding:"20px",
fontFamily:"Arial"
}}
>


<div
style={{
maxWidth:"500px",
margin:"auto",
background:"#fff",
padding:"20px",
borderRadius:"20px",
boxShadow:"0 5px 15px #ddd"
}}
>


<h1 style={{textAlign:"center",color:"#2E7D32"}}>
🛍️ Checkout
</h1>


{cart.map(item=>(

<div
key={item.id}
style={{
display:"flex",
alignItems:"center",
gap:"10px",
marginBottom:"10px"
}}
>

<img
src={item.image}
width="60"
height="60"
style={{
objectFit:"contain",
borderRadius:"10px"
}}
/>

<div>
<b>{item.name}</b>
<p>₹{item.price} × {item.qty}</p>
</div>

</div>

))}


<hr/>


<input
placeholder="Full Name"
value={name}
onChange={(e)=>setName(e.target.value)}
style={{
width:"100%",
padding:"12px",
margin:"10px 0"
}}
/>


<input
placeholder="Mobile Number"
value={mobile}
onChange={(e)=>setMobile(e.target.value)}
style={{
width:"100%",
padding:"12px",
margin:"10px 0"
}}
/>


<textarea
placeholder="Delivery Address"
value={address}
onChange={(e)=>setAddress(e.target.value)}
style={{
width:"100%",
height:"100px",
padding:"12px",
margin:"10px 0"
}}
/>

<h3>Payment Method</h3>

<select
  value={paymentMethod}
  onChange={(e) => setPaymentMethod(e.target.value)}
  style={{
    width: "100%",
    padding: "12px",
    margin: "10px 0",
    borderRadius: "10px"
  }}
>
  <option value="COD">💵 Cash on Delivery</option>
  <option value="UPI">🏦 UPI</option>
  <option value="PhonePe">📱 PhonePe</option>
  <option value="Google Pay">🟢 Google Pay</option>
  <option value="Paytm">🔵 Paytm</option>
</select>
<h2>
Total: ₹{total}
</h2>


<button
onClick={placeOrder}
disabled={loading}
style={{
width:"100%",
padding:"15px",
background:"#2E7D32",
color:"#fff",
border:"none",
borderRadius:"12px",
fontSize:"18px"
}}
>

{loading ? "Placing..." : "Place Order 🛒"}

</button>


</div>


</div>

);

}


export default Checkout;
