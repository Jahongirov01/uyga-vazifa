import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCrd'
import LoadingCard from '../components/LoadingCard'
import ClearImageurl from '../untils/ClearImageurl'

const Home = () => {

    const[ products,SetProducts] = useState([]);
    const [loading, setLoading]= useState(false);

    useEffect(()=>{
        const Getproducts = async () =>{
            setLoading(true)
            const res = await fetch("https://api.escuelajs.co/api/v1/products")
            const data =await res.json();
            
            ClearImageurl(data)



            SetProducts(data)
            setLoading(false)
        }
        Getproducts()
    },[])

  return (
<main style={{marginTop:"10px" }}>
    <div style={{padding:"20px"}}>
<Grid container spacing={2} disableEqualOverflow >
    {loading
    ? [1,2,3,4,5,6].map(num =>(
        <Grid key={num} xs={6} md={4}>
            <LoadingCard/>
        </Grid>
    ))
    :products.map(product =>(
        <Grid key={product.id} xs={6} md={4}>
      <ProductCard {...product}/>
        </Grid>
    ))    }
    
</Grid>
</div>
</main>
  )
}

export default Home