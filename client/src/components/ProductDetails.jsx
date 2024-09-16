import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, CardMedia, Typography, Rating, Divider, Box, Grid, TextField, Button } from '@mui/material';
import { useProducts } from '../hooks/useProducts';
import SimpleBackDrop from './SimpleBackDrop';

const ProductDetails = () => {
  const { productsData, updateProduct , isUpdating } = useProducts(); // Assuming useProducts provides updateProduct
  const { id } = useParams();
  const product = productsData?.find(p => p._id === id);
  const userData = JSON.parse(localStorage.getItem('user'));
  const userName = userData.name + " " + userData.lastName
  const [showForm, setShowForm] = useState(false);
  const [rating, setRating] = useState(0);
  const [name, setName] = useState(userName);
  const [comment, setComment] = useState('');
  // Calculate the average rating dynamically
  const reviewsArray = Array.isArray(product?.reviewsArray) ? product?.reviewsArray : [];
  const reviewsCount = reviewsArray.length;
  const averageRating = reviewsCount > 0
    ? (reviewsArray.reduce((sum, review) => sum + (review.rating || 0), 0) / reviewsCount).toFixed(1)
    : 0;

  const handleAddRatingClick = () => {
    setShowForm(true);
  };

  const handleSubmit = () => {
    if (!(rating && name && comment)) {
      return;
    }
    const newReview = { name, rating, comment };

    // Update the product data
    updateProduct([product?._id, newReview]); // Ensure this method is correctly implemented

    // Reset form and hide it after submission
    setRating(0);
    setName('');
    setComment('');
    setShowForm(false);
  };

  if (!product) {
    return <Typography variant="h6" sx={{ p: 2 }}>Product not found</Typography>;
  }

  return (
    <>
    <SimpleBackDrop loading={isUpdating}/>
    <Grid container spacing={2} sx={{ p: 2, mt: 5 }}>
      <Grid item xs={12} md={6}>
        <Card sx={{ maxWidth: '100%' }}>
          <CardMedia
            component="img"
            height="300"
            image={product.imageUrl || '/default-image.jpg'} // Provide a fallback image
            alt={product.itemName || 'Product image'}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {product.itemName || 'Product Name'}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              Brand: {product.brandName || 'Brand Name'}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Category: {product.category || 'Category'}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.description || 'Description not available'}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Price: ${product.price?.toFixed(2) || '0.00'}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              In Stock: {product.countInStock || '0'}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Average Rating:
              <Rating name="read-only" value={parseFloat(averageRating)} readOnly size="small" />
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {reviewsCount} Reviews
            </Typography>
            {!showForm ? (
              <Button variant="contained" color="primary" onClick={handleAddRatingClick} sx={{ mt: 2 }}>
                Add Rating
              </Button>
            ) : (
              <Box sx={{ mt: 2 }}>
                <Typography variant="h6" gutterBottom>
                  Add Your Rating
                </Typography>
                <TextField
                  label="Name"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                //   disabled={true}
                InputProps={{
                    readOnly: true,
                  }}
                />
                <Rating
                  name="rating"
                  value={rating}
                  onChange={(event, newValue) => setRating(newValue)}
                  precision={1}
                  sx={{ mb: 2 }}
                />
                <TextField
                  label="Comment"
                  fullWidth
                  variant="outlined"
                  margin="normal"
                  multiline
                  rows={4}
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  required
                />
                <Box sx={{display : "flex" , gap : 2}}>
                <Button variant="contained" color="primary" onClick={handleSubmit} sx={{ mt: 2 }}>
                  Submit Rating
                </Button>
                {showForm &&
                <Button  variant="outlined" color="primary" onClick={() => setShowForm(false)} sx={{ mt: 2 }}>
                  Close
                </Button>}
                </Box>
              </Box>
            )}
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box sx={{ maxHeight: 'calc(100vh - 64px)', overflowY: 'auto' }}>
          <Typography variant="h6" gutterBottom>
            Reviews:
          </Typography>
          {reviewsCount > 0 ? (
            reviewsArray.map((review, index) => (
              <Box key={index} sx={{ marginBottom: '16px' }}>
                <Typography variant="body2" color="text.primary">
                  {review.name}:
                  <Rating name="read-only" value={review.rating} readOnly size="small" />
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {review.comment}
                </Typography>
                <Divider sx={{ my: 1 }} />
              </Box>
            ))
          ) : (
            <Typography variant="body2">No reviews available</Typography>
          )}
        </Box>
      </Grid>
    </Grid>
    </>
  );
};

export default ProductDetails;





// // import React from 'react';
// import { useParams } from 'react-router-dom';
// import { Card, CardContent, CardMedia, Typography, Rating, Divider, Box, Grid } from '@mui/material';
// import { productData } from '../../public/productData'; // Adjust the path as needed

// const ProductDetails = () => {
//   const { id } = useParams();
//   const product = productData.find(p => p._id === id);

//   if (!product) {
//     return <Typography variant="h6" sx={{ p: 2 }}>Product not found</Typography>;
//   }

//   return (
//     <Grid container spacing={2} sx={{ p: 2 , mt : 5} }>
//       <Grid item xs={12} md={6}>
//         <Card sx={{ maxWidth: '100%' }}>
//           <CardMedia
//             component="img"
//             height="300"
//             image={product.imageUrl || '/default-image.jpg'} // Provide a fallback image
//             alt={product.itemName || 'Product image'}
//           />
//           <CardContent>
//             <Typography gutterBottom variant="h5" component="div">
//               {product.itemName || 'Product Name'}
//             </Typography>
//             <Typography variant="subtitle1" color="text.secondary">
//               Brand: {product.brandName || 'Brand Name'}
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               Category: {product.category || 'Category'}
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               {product.description || 'Description not available'}
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               Price: ${product.price?.toFixed(2) || '0.00'}
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               In Stock: {product.countInStock || '0'}
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               Average Rating:
//               <Rating name="read-only" value={product.averageRating || 0} readOnly size="small" />
//             </Typography>
//             <Typography variant="body2" color="text.secondary">
//               {product.numOfReviews || 0} Reviews
//             </Typography>
//           </CardContent>
//         </Card>
//       </Grid>
//       <Grid item xs={12} md={6}>
//         <Box sx={{ maxHeight: 'calc(100vh - 64px)', overflowY: 'auto' }}>
//           <Typography variant="h6" gutterBottom>
//             Reviews:
//           </Typography>
//           {product.reviewsArray.length > 0 ? (
//             product.reviewsArray.map((review, index) => (
//               <Box key={index} sx={{ marginBottom: '16px' }}>
//                 <Typography variant="body2" color="text.primary">
//                   {review.name}:
//                   <Rating name="read-only" value={review.rating} readOnly size="small" />
//                 </Typography>
//                 <Typography variant="body2" color="text.secondary">
//                   {review.comment}
//                 </Typography>
//                 <Divider sx={{ my: 1 }} />
//               </Box>
//             ))
//           ) : (
//             <Typography variant="body2">No reviews available</Typography>
//           )}
//         </Box>
//       </Grid>
//     </Grid>
//   );
// };

// export default ProductDetails;
