import { auth } from "../firebase/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";


function Profile(){

const navigate = useNavigate();



const logout = async()=>{

try{

await signOut(auth);

alert("Logout Successful");

navigate("/login");


}catch(error){

alert(error.message);

}

};



return(


<div

style={{
minHeight:"100vh",
background:"#f5f5f5",
padding:"20px",
fontFamily:"Arial"
}}

>


<div

style={{
background:"linear-gradient(135deg,#1b5e20,#81c784)",
color:"#fff",
padding:"25px",
borderRadius:"25px",
textAlign:"center"
}}

>


<div
style={{
fontSize:"70px"
}}
>
👤
</div>


<h1>
My Profile
</h1>


<p>
🥭 The Desy Customer
</p>


</div>





<div

style={{
background:"#fff",
padding:"20px",
borderRadius:"20px",
marginTop:"20px",
boxShadow:"0 5px 15px rgba(0,0,0,.1)"
}}

>


<h2>
User Details
</h2>


<p>
📧 Email
</p>


<h3>
{auth.currentUser?.email || "Guest User"}
</h3>


</div>





<button

onClick={()=>navigate("/my-orders")}

style={btn("#1976d2")}

>

📦 My Orders

</button>





<button

onClick={()=>navigate("/wishlist")}

style={btn("#e91e63")}

>

❤️ Wishlist

</button>





<button

onClick={()=>navigate("/")}

style={btn("#2e7d32")}

>

🏠 Home

</button>





<button

onClick={logout}

style={btn("#d32f2f")}

>

🚪 Logout

</button>



</div>


);

}




const btn=(color)=>({

width:"100%",

padding:"15px",

marginTop:"15px",

border:"none",

borderRadius:"30px",

background:color,

color:"#fff",

fontSize:"17px",

fontWeight:"bold"

});


export default Profile;
