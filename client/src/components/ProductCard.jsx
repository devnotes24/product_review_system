import PropTypes from 'prop-types'; // Import PropTypes
import { Card, CardContent, CardMedia, Typography, Rating } from '@mui/material';
import { Link } from 'react-router-dom';

// Define the ProductCard component
const ProductCard = ({ product }) => {
  // Check if the product object is valid
  if (!product) {
    return <Typography variant="body2">Product data not available</Typography>;
  }

  // Calculate the average rating dynamically
  const reviewsArray = Array.isArray(product.reviewsArray) ? product.reviewsArray : [];
  const reviewsCount = reviewsArray.length;
  const averageRating = reviewsCount > 0
    ? (reviewsArray.reduce((sum, review) => sum + (review.rating || 0), 0) / reviewsCount).toFixed(1)
    : 0;

  return (
    <Link to={`/rating/${product._id}`} style={{ textDecoration: 'none' }}>
      <Card sx={{ maxWidth: 345, margin: '16px', padding: '16px' }}>
        <CardMedia
          component="img"
          height="140"
          image={product.imageUrl || '/default-image.jpg'} // Provide a fallback image
          alt={product.itemName || 'Product image'}
          overflow = "hidden" 
          sx={{'&:hover': {
      transform: 'scale(1.2)',  // Scale on hover
    }, transition: 'transform 0.4s ease-out',}}
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
        </CardContent>
      </Card>
    </Link>
  );
};

// Define PropTypes for the component
ProductCard.propTypes = {
  product: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    itemName: PropTypes.string,
    brandName: PropTypes.string,
    imageUrl: PropTypes.string,
    category: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.number,
    countInStock: PropTypes.number,
    reviewsArray: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string,
      rating: PropTypes.number,
      comment: PropTypes.string,
    })),
  }).isRequired,
};

export default ProductCard;
