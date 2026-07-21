import { useContext } from "react";
import { Link } from "react-router-dom";
import { WishlistContext } from "../context/WishlistContext";
import ProductCard from "../components/ProductCard";
import BottomNav from "../components/BottomNav";


function Wishlist(){

const { wishlist } = useContext(WishlistContext);



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

← Back

</Link>



<h1
style={{
color:"#e91e63"
}}
>
❤️ My Wishlist
</h1>



{

wishlist.length===0 ?


<div

style={{
background:"#fff",
padding:"30px",
borderRadius:"20px",
textAlign:"center",
marginTop:"20px"
}}

>

<h2>
😔 Wishlist Empty
</h2>


<p>
अपने पसंदीदा अचार को wishlist में जोड़ें।
</p>


</div>



:


<div

style={{
display:"grid",
gridTemplateColumns:"repeat(2,1fr)",
gap:"12px"
}}

>


{

wishlist.map(item=>(

<ProductCard

key={item.id}

product={item}

/>

))

}


</div>


}





<BottomNav />

</div>


);

}


export default Wishlist;
