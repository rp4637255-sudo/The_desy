import { useState } from "react";
import ProductCard from "../components/ProductCard";
import BottomNav from "../components/BottomNav";
import products from "../data/products";


function Home(){

const [search,setSearch]=useState("");
const [category,setCategory]=useState("All");


const categories=[
"All",
"Fruit Pickle",
"Vegetable Pickle",
"Jharkhand Special",
"Homemade"
];


const filteredProducts = products.filter(item=>{

const searchMatch =
item.name.toLowerCase()
.includes(search.toLowerCase());


const categoryMatch =
category==="All" ||
item.category===category;


return searchMatch && categoryMatch;

});



return(

<div

style={{
minHeight:"100vh",
background:"#fafafa",
padding:"15px",
paddingBottom:"90px",
fontFamily:"Arial"
}}

>


{/* Hero Banner */}

<div

style={{
borderRadius:"25px",
overflow:"hidden",
boxShadow:"0 5px 20px rgba(0,0,0,.2)"
}}

>

<img

src="/images/1784102802537.png"

alt="The Desy"

style={{
width:"100%",
height:"220px",
objectFit:"cover"
}}

/>

</div>



{/* Brand */}

<div

style={{
marginTop:"15px",
background:"linear-gradient(135deg,#1b5e20,#81c784)",
padding:"18px",
borderRadius:"20px",
color:"#fff"
}}

>

<h1 style={{margin:0}}>
🥭 THE DESY
</h1>

<p>
एक बार खाओ, मुँह ललचाओ!
</p>

<small>
🌿 Jharkhand ka pahadi fhalo ka sudh achar
</small>

</div>



{/* Search */}

<input

placeholder="🔍 Search Achar..."

value={search}

onChange={(e)=>setSearch(e.target.value)}

style={{

width:"100%",
padding:"15px",
marginTop:"18px",
borderRadius:"30px",
border:"1px solid #ddd",
fontSize:"16px",
boxSizing:"border-box"

}}

/>



{/* Offer */}

<div

style={{

marginTop:"20px",
background:"#ff9800",
color:"#fff",
padding:"18px",
borderRadius:"20px",
textAlign:"center",
fontWeight:"bold"

}}

>

🔥 Special Offer

<br/>

20% OFF All Pickles

<br/>

🚚 Free Delivery Above ₹499

</div>



{/* Categories */}

<div

style={{
display:"flex",
gap:"10px",
overflowX:"auto",
marginTop:"20px"
}}

>

{

categories.map(cat=>(

<button

key={cat}

onClick={()=>setCategory(cat)}

style={{

padding:"10px 18px",
borderRadius:"25px",
border:"none",
whiteSpace:"nowrap",

background:
category===cat
?
"#2e7d32"
:
"#eee",

color:
category===cat
?
"#fff"
:
"#333"

}}

>

{cat}

</button>

))

}

</div>



<h2 style={{marginTop:"25px"}}>
🔥 Popular Pickles
</h2>



<div

style={{
display:"grid",
gridTemplateColumns:"repeat(2,1fr)",
gap:"12px"
}}

>

{

filteredProducts.map(item=>(

<ProductCard

key={item.id}

product={item}

/>

))

}

</div>



<BottomNav />

</div>

);

}


export default Home;
