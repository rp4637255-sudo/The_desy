import { useEffect, useState } from "react";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc
} from "firebase/firestore";

import { db } from "../firebase/firebase";
import { uploadImage } from "../services/cloudinary";

function AdminProducts() {

  const emptyProduct = {
    name: "",
    category: "",
    price: "",
    oldPrice: "",
    discount: "",
    weight: "",
    rating: "",
    image: "",
    description: ""
  };


  const [product, setProduct] = useState(emptyProduct);
  const [products, setProducts] = useState([]);
  const [preview, setPreview] = useState("");



  const fetchProducts = async () => {

    const snap = await getDocs(
      collection(db, "products")
    );

    setProducts(
      snap.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
    );

  };


  useEffect(() => {
    fetchProducts();
  }, []);



  const handleChange = (e) => {

    setProduct({
      ...product,
      [e.target.name]: e.target.value
    });

  };

const handleImage = async (e) => {
  const file = e.target.files[0];

  if (!file) return;

  setPreview(URL.createObjectURL(file));

  try {
    const imageURL = await uploadImage(file);

    setProduct((prev) => ({
      ...prev,
      image: imageURL,
    }));

    alert("✅ Image Uploaded Successfully");
  } catch (error) {
    console.error(error);
    alert("❌ Image Upload Failed");
  }
};











  const addProduct = async () => {

    if(!product.name || !product.price){

      alert("Please fill Product Name and Price");
      return;

    }


    await addDoc(
      collection(db,"products"),
      {
        ...product,
        price:Number(product.price),
        oldPrice:Number(product.oldPrice),
        rating:Number(product.rating)
      }
    );


    alert("✅ Product Added");


    setProduct(emptyProduct);
    setPreview("");

    fetchProducts();

  };



  const deleteProduct = async(id)=>{

    if(!window.confirm("Delete Product?"))
      return;


    await deleteDoc(
      doc(db,"products",id)
    );


    fetchProducts();

  };



  return (

<div
style={{
minHeight:"100vh",
background:"#111",
color:"#fff",
padding:"20px"
}}
>


<h1 style={{color:"#00ff66"}}>
📦 Admin Products
</h1>



<input name="name" placeholder="Product Name"
value={product.name}
onChange={handleChange}
/>


<select
name="category"
value={product.category}
onChange={handleChange}
style={{
padding:"10px",
margin:"5px",
borderRadius:"8px"
}}
>
<option value="">Select Category</option>
<option value="Fruit Pickle">🥭 Fruit Pickle</option>
<option value="Vegetable Pickle">🥕 Vegetable Pickle</option>
<option value="Spicy Pickle">🌶️ Spicy Pickle</option>
<option value="Jharkhand Special">🌿 Jharkhand Special</option>
<option value="Premium Special">⭐ Premium Special</option>
</select>

<input name="price" placeholder="Price"
value={product.price}
onChange={handleChange}
/>


<input name="oldPrice" placeholder="Old Price"
value={product.oldPrice}
onChange={handleChange}
/>


<input name="discount" placeholder="Discount"
value={product.discount}
onChange={handleChange}
/>


<input name="weight" placeholder="Weight"
value={product.weight}
onChange={handleChange}
/>


<input name="rating" placeholder="Rating"
value={product.rating}
onChange={handleChange}
/>



<h3>📷 Select Product Image</h3>


<input
type="file"
accept="image/*"
onChange={handleImage}
/>
<input
type="text"
name="image"
placeholder="Cloudinary Image URL"
value={product.image}
onChange={handleChange}
/>


{
preview &&
<img
src={preview}
alt="preview"
style={{
width:"200px",
marginTop:"15px",
borderRadius:"15px"
}}
/>
}



<textarea
name="description"
placeholder="Description"
value={product.description}
onChange={handleChange}
/>



<button
onClick={addProduct}
style={{
marginTop:"15px",
padding:"12px",
background:"#00ff66",
border:"none",
borderRadius:"10px",
fontWeight:"bold"
}}
>
➕ Add Product
</button>




<hr/>

<h2>📋 All Products</h2>


{
products.map(item=>(

<div
key={item.id}
style={{
background:"#1b1b1b",
padding:"12px",
marginTop:"10px",
borderRadius:"12px"
}}
>

<h3>{item.name}</h3>

<p>₹{item.price}</p>

<button
onClick={()=>deleteProduct(item.id)}
style={{
background:"red",
color:"#fff"
}}
>
🗑 Delete
</button>


</div>

))
}


</div>

  );

}


export default AdminProducts;
