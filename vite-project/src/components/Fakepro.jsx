import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Fakepro = () => {
    const [ProductData,setProductData] =useState([])
    const [isLoading,setLoading]=useState(true)
    const [cartData, setCartData]=useState([])
    useEffect(()=>{
        const fetchData= async()=>{
            const response =await axios.get('https://fakestoreapi.com/products')
            // console.log(response.data)
            setProductData(response.data)
            setLoading(false)
        }
        fetchData()
    },[])

    useEffect(()=>{
        const localData=JSON.parse(localStorage.getItem('cart')) || []
        setCartData(localData)
    },[])

    const addToCart=(item)=>{
        // setCartData([...cartData,item])
        const newItem = [...cartData,item]
        setCartData(newItem)
        localStorage.setItem("cart",JSON.stringify(newItem))
      
    }

    const removeCart=(id)=>{
        
        // setCartData(cartData.filter(item=>item.id!=id))
        const newCart=cartData.filter(item=>item.id!=id)
        setCartData(newCart)
        localStorage.setItem("cart",JSON.stringify(newCart))
    }
  return (
    <>    
            <h1>Cart Items : {cartData.length}</h1>
            {cartData===0?<h3>Cart is empty:</h3>:cartData.map((hel,index)=>(
                <div key={index}>
                    <h6>{hel.title}</h6>
                    <p>{hel.price}</p>
                    <button className='bg-red-400' onClick={()=>removeCart(hel.id)}>Remove</button>
                </div>
            ))}
       
        {isLoading?<h1>....Loading....</h1>:ProductData.map((item,index)=>(
            <>
                <div key={index} className='w-[500px] bg-blue-400 flex '>
                   <div className='bg-red-500 my-5 py-2 w-[400px] '>
                    <img src={item.image} className='w-[100px] mx-auto'/>
                    <h3>{item.title}</h3>
                   <p>{item.category}</p>
                   <p>{item.price}</p>
                   <button className='border bg-blue-400 px-5 rounded py-2' onClick={()=>addToCart(item)}>Add to Cart</button>
                   <button className='border bg-blue-400 px-5 rounded py-2 ml-5' onClick={()=>removeCart(item.id)}>Remove to Cart</button>
                   </div>
                  
                </div>
            </>
        ))}
         
        
    </>
  )
}

export default Fakepro


















