import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const LazyLoadingImage = ({ data }) => {
    const [search,setSearch]=useState([])

    const searchChange=(e)=>{
        setSearch(e.target.value)
    }
    
  return (
    <div>
      <div>
      <input  placeholder='search' className='px-10 py-2 bg-red-300 border-2 ml-20 text-2xl' onChange={searchChange}></input>
      {/* <button className='bg-blue-300 px-3 py-2 rounded-lg text-2xl'>Enter</button> */}
      </div>

      <div className='mx-12 my-2'>
      <button className='bg-green-300 px-3 py-2 rounded-lg text-2xl ' >Low to high</button>
      </div>

      <div className='mx-12 my-2'>
      <button className='bg-yellow-300 px-3 py-2 rounded-lg text-2xl '>high to Low</button>
      </div>


      {data.map((item,index) => (
        
       <div key={index} className='flex items-center justify-around px-5 py-12 border-2'>
       <div>
       <h1>Title: {item.title}</h1>
       <p>Price: {item.price}</p>
       </div>
       <div><LazyLoadImage
          key={item.id}
          alt={item.title} 
          height={200}
          src={item.image} 
          width={100}
        /></div>
       </div>
    
      ))}
    </div>
  );
};

export default LazyLoadingImage;
