import React, { useEffect, useState } from 'react';
import Counter from './components/Counter';
import Login from './components/Login';
import SignUp from './components/SignUp';
import LazyLoadingImage from './components/LazyLoadingImage';
import Fakepro from './components/Fakepro';
import DataApi from './components/DataApi';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setData(data)); 
  }, []);

  return (
    <div>
      {/* <Counter /> */}
      {/* <Login /> */}
      {/* <SignUp /> */}
      {/* <LazyLoadingImage data={data} /> */}
      {/* <Fakepro/> */}
      <DataApi/>
    </div>
  );
};

export default App;
