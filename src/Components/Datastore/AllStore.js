import React, { createContext, useState, useEffect } from 'react'
import Home from '../Navbar/Home'
import Bollywood from '../Navbar/Bollywood'
import Tech from '../Navbar/Tech'
import Hollywood from '../Navbar/Hollywood'
import Fitness from '../Navbar/Fitness'
import Food from '../Navbar/Food'
import { Route, Routes } from 'react-router-dom';
import DynamicCompo from './DynamicCompo'
import axios from 'axios'


export const Store = createContext()
function AllStore() {
    const [data, setdata] = useState([])
    useEffect(() => {
        fetchData();
     }, []);
    
     const fetchData = async () => {
        try {
          const response = await axios.get('https://blog-backend-ygv2.onrender.com/api/blog');
          setdata(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
     };

    return (
        <Store.Provider value={[data, setdata]}>

            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/bollywood' element={<Bollywood />}></Route>
                <Route path='/technology' element={<Tech />}></Route>
                <Route path='/hollywood' element={<Hollywood />}></Route>
                <Route path='/fitness' element={<Fitness />}></Route>
                <Route path='/food' element={<Food />}></Route>
                <Route path='/dynamiccompo/:id' element={<DynamicCompo />} />
                <Route path='/dynamiccompo/:id/:id' element={<DynamicCompo />} />
            </Routes>

        </Store.Provider>
    )
}
export default AllStore;