import { Link } from "react-router-dom";
import { useContext } from "react";

import { CartContext } from "../context/CartContext";
import { WishlistContext } from "../context/WishlistContext";


function BottomNav(){

const {cart}=useContext(CartContext);

const {wishlist}=useContext(WishlistContext);



return(

<div

style={{

position:"fixed",

bottom:0,

left:0,

right:0,

background:"#ffffff",

borderTop:"1px solid #ddd",

display:"flex",

justifyContent:"space-around",

alignItems:"center",

padding:"10px 0",

zIndex:1000,

fontFamily:"Arial",

boxShadow:"0 -3px 15px rgba(0,0,0,.1)"

}}

>



<Link

to="/"

style={linkStyle}

>

<div>
🏠
</div>

<small>
Home
</small>

</Link>





<Link

to="/cart"

style={linkStyle}

>

<div>
🛒
</div>

<small>
Cart ({cart.length})
</small>

</Link>





<Link

to="/wishlist"

style={linkStyle}

>

<div>
❤️
</div>

<small>
Wishlist ({wishlist.length})
</small>

</Link>





<Link

to="/profile"

style={linkStyle}

>

<div>
👤
</div>

<small>
Profile
</small>

</Link>



</div>


);

}



const linkStyle={

textDecoration:"none",

color:"#2e7d32",

textAlign:"center",

fontWeight:"bold",

fontSize:"13px"

};


export default BottomNav;
