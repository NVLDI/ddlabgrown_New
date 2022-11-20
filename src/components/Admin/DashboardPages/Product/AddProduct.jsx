import React, {useState} from 'react'
import Sidebar from "../../SideBar/Sidebar"
import Navbar from "../../Navbar/Navbar";
import "./AddProduct.css"

export default function Product() {
  const[inputs,setInputs]=useState({
    "date:":"",
    "product_code":"",
    "product_name":"",
    "diamond_shape":"",
    "shape_cutting":"",
    "diamond_color": "",
    "diamond_carat":"",
    "diamond_clarity":"",
    "certificate_no":"",
    "msrp":"",
    "currency":""
});
const[error,setError]=useState(null);
const handleChange = e=>{
    setInputs(prev=>({...prev,[e.target.name]:e.target.value}))
  };
  return (
    <div>
        <Navbar/>
        <div>
        <Sidebar/>
        </div>
        </div>
  )
}
