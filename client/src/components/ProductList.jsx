import { useState } from 'react';
import { Grid, Typography, TextField, Box } from '@mui/material';
import ProductCard from './ProductCard';
// import { productData } from '../../public/productData'; // Ensure this path is correct
import { useProducts } from '../hooks/useProducts';
import SimpleBackDrop from './SimpleBackDrop';

const ProductList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const {productsData , isFetching} = useProducts();


  // Filter products based on the search term
  const filteredProducts = productsData?.filter(product =>
    product.itemName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
    {isFetching ? <SimpleBackDrop loading={isFetching}/>:
    <Box sx={{ padding: 2 }}>
      <Box sx={{ mb: 2, display: 'flex', justifyContent: 'center' }}>
        <TextField
          label="Search Products"
          variant="outlined"
          fullWidth
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
          sx={{ maxWidth: '600px' }} // Adjust the maxWidth as needed
        />
      </Box>
      {filteredProducts?.length > 0 ? (
        <Grid container spacing={2}>
          {filteredProducts.map(product => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product._id}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography variant="h6" align="center">
          No products available
        </Typography>
      )}
    </Box>}
    </>
  );
};

export default ProductList;







// // import React from 'react';
// import { Grid, Typography } from '@mui/material';
// import ProductCard from './ProductCard';
// import { productData } from '../../public/productData'; // Ensure this path is correct

// const ProductList = () => (
//   <Grid container spacing={2}>
//     {productData.length > 0 ? (
//       productData.map(product => (
//         <Grid item xs={12} sm={6} md={4} lg={3} key={product._id}>
//           <ProductCard product={product} />
//         </Grid>
//       ))
//     ) : (
//       <Typography variant="h6">No products available</Typography>
//     )}
//   </Grid>
// );

// export default ProductList;
