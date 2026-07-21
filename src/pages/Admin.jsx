import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  updateDoc,
  doc
} from "firebase/firestore";

import { db } from "../firebase/firebase";


function Admin(){

const [orders,setOrders]=useState([]);


const fetchOrders=async()=>{

const snap=await getDocs(
collection(db,"orders")
);


setOrders(
snap.docs.map(item=>({
id:item.id,
...item.data()
}))
);

};


useEffect(()=>{
fetchOrders();
},[]);



const changeStatus=async(id,status)=>{

await updateDoc(
doc(db,"orders",id),
{
status:status
}
);

fetchOrders();

};



const whatsapp=(mobile,name)=>{

const msg=`Hello ${name}, The Desy se aapka order update hai.`;

window.open(
`https://wa.me/91${mobile}?text=${encodeURIComponent(msg)}`,
"_blank"
);

};



return(

<div

style={{
minHeight:"100vh",
background:"#111",
padding:"15px",
fontFamily:"Arial",
color:"#fff"
}}

>


<h1
style={{
color:"#00ff66",
textAlign:"center"
}}
>
🛠️ The Desy Admin Orders
</h1>



{
orders.length===0 ?

<h2>No Orders</h2>


:

orders.map(order=>(


<div

key={order.id}

style={{
background:"#1b1b1b",
padding:"18px",
marginTop:"20px",
borderRadius:"18px",
border:"1px solid #00ff66"
}}

>


<h3 style={{color:"#00ff66"}}>
Order #{order.id.slice(0,8)}
</h3>


<p>👤 Name: {order.customer?.name}</p>

<p>📱 Mobile: {order.customer?.mobile}</p>

<p>📍 Address: {order.customer?.address}</p>

<p>💳 Payment: {order.paymentMethod}</p>


<h2>
💰 ₹{order.total}
</h2>


<h3>
Status: {order.status || "Pending"}
</h3>


<h3>🛒 Products</h3>


{
order.products?.map((item,index)=>(

<p key={index}>
🥭 {item.name} × {item.qty}
</p>

))
}



<button

onClick={()=>window.open(`tel:${order.customer?.mobile}`)}

style={btn("#2980b9")}
>
☎️ Call Customer
</button>


<button

onClick={()=>whatsapp(order.customer?.mobile,order.customer?.name)}

style={btn("#25D366")}
>
💬 WhatsApp
</button>



<div>


<button onClick={()=>changeStatus(order.id,"Pending")} style={btn("orange")}>
Pending
</button>


<button onClick={()=>changeStatus(order.id,"Confirmed")} style={btn("#3498db")}>
Confirmed
</button>


<button onClick={()=>changeStatus(order.id,"Packed")} style={btn("#9b59b6")}>
Packed
</button>


<button onClick={()=>changeStatus(order.id,"Shipped")} style={btn("#00ff66")}>
Shipped
</button>


<button onClick={()=>changeStatus(order.id,"Delivered")} style={btn("green")}>
Delivered
</button>


</div>


</div>


))

}


</div>

);

}



const btn=(bg)=>({

margin:"5px",
padding:"10px",
border:"none",
borderRadius:"8px",
background:bg,
fontWeight:"bold",
cursor:"pointer"

});


export default Admin;
