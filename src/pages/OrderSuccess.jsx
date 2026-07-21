import { useNavigate } from "react-router-dom";


function OrderSuccess(){

const navigate = useNavigate();



return(

<div

style={{
minHeight:"100vh",
background:"linear-gradient(135deg,#e8f5e9,#fff3e0)",
display:"flex",
justifyContent:"center",
alignItems:"center",
padding:"20px",
fontFamily:"Arial"
}}

>


<div

style={{
background:"#fff",
width:"100%",
maxWidth:"420px",
padding:"35px 25px",
borderRadius:"30px",
textAlign:"center",
boxShadow:"0 10px 30px rgba(0,0,0,.15)"
}}

>


<div

style={{
fontSize:"90px"
}}

>
🎉
</div>



<h1

style={{
color:"#2e7d32"
}}

>
Order Successful!
</h1>



<p

style={{
color:"#555",
fontSize:"17px",
lineHeight:"1.5"
}}

>

आपका ऑर्डर सफलतापूर्वक मिल गया है।

<br/>

The Desy परिवार में आपका स्वागत है ❤️

</p>




<div

style={{
background:"#f1f8e9",
padding:"18px",
borderRadius:"20px",
margin:"25px 0"
}}

>

<h2>
🥭 THE DESY
</h2>

<p>
"एक बार खाओ, मुँह ललचाओ!"
</p>

<small>
Jharkhand Ka Pahadi Swad 🌿
</small>


</div>





<button

onClick={()=>navigate("/my-orders")}

style={{

width:"100%",

padding:"15px",

border:"none",

borderRadius:"30px",

background:"#2e7d32",

color:"#fff",

fontSize:"17px",

fontWeight:"bold",

marginBottom:"15px"

}}

>

📦 Track My Order

</button>





<button

onClick={()=>navigate("/")}

style={{

width:"100%",

padding:"15px",

border:"2px solid #ff9800",

borderRadius:"30px",

background:"#fff",

color:"#ff9800",

fontSize:"17px",

fontWeight:"bold"

}}

>

🛍 Continue Shopping

</button>




</div>


</div>


);

}


export default OrderSuccess;
