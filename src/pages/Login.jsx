import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { useNavigate } from "react-router-dom";


function Login(){

const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
const [loading,setLoading]=useState(false);

const navigate=useNavigate();



const login=async()=>{


if(!email || !password){

alert("Email and Password required");
return;

}


try{


setLoading(true);


await signInWithEmailAndPassword(
auth,
email.trim(),
password
);



alert("✅ Login Successful");

navigate("/");



}catch(error){

alert(error.message);


}finally{

setLoading(false);

}


};



return(


<div

style={{
minHeight:"100vh",
background:"linear-gradient(135deg,#1b5e20,#81c784)",
display:"flex",
alignItems:"center",
justifyContent:"center",
padding:"20px",
fontFamily:"Arial"
}}

>


<div

style={{
background:"#fff",
width:"100%",
maxWidth:"400px",
padding:"30px",
borderRadius:"25px",
boxShadow:"0 8px 25px rgba(0,0,0,.2)"
}}

>


<h1
style={{
textAlign:"center",
color:"#2e7d32"
}}
>
🥭 THE DESY
</h1>


<p
style={{
textAlign:"center"
}}
>
Login to continue shopping
</p>



<input

type="email"

placeholder="Email"

value={email}

onChange={(e)=>setEmail(e.target.value)}

style={inputStyle}

/>



<input

type="password"

placeholder="Password"

value={password}

onChange={(e)=>setPassword(e.target.value)}

style={inputStyle}

/>



<button

onClick={login}

style={buttonStyle}

>

{
loading
?
"Please Wait..."
:
"🔐 Login"
}

</button>



</div>


</div>


);

}



const inputStyle={

width:"100%",

padding:"14px",

marginBottom:"15px",

borderRadius:"12px",

border:"1px solid #ddd",

fontSize:"16px",

boxSizing:"border-box"

};


const buttonStyle={

width:"100%",

padding:"14px",

border:"none",

borderRadius:"30px",

background:"#2e7d32",

color:"#fff",

fontSize:"18px",

fontWeight:"bold"

};


export default Login;
