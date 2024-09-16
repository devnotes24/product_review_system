// import React from 'react';
import { Box, TextField, Button, Typography, Grid, Container, useTheme } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useProducts } from '../hooks/useProducts';
import SimpleBackDrop from '../components/SimpleBackDrop';

const validationSchema = Yup.object({
  itemName: Yup.string().required('Item name is required'),
  brandName: Yup.string().required('Brand name is required'),
  imageUrl: Yup.string().url('Invalid URL').required('Image URL is required'),
  category: Yup.string().required('Category is required'),
  description: Yup.string().required('Description is required'),
  price: Yup.number().min(0, 'Price must be at least 0').required('Price is required'),
  countInStock: Yup.number().min(0, 'Stock count must be at least 0').required('Stock count is required'),
  reviewsArray: Yup.array().of(
    Yup.object({
      name: Yup.string().required('Reviewer name is required'),
      rating: Yup.number().min(1, 'Minimum rating is 1').max(5, 'Maximum rating is 5').required('Rating is required'),
      comment: Yup.string().required('Comment is required'),
    })
  ).required('At least one review is required'),
});

function AddProductForm() {
const {createProduct , isAdding} = useProducts()
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark'
return (
  <>
  <SimpleBackDrop loading={isAdding}/>
  <Container maxWidth="sm">
    <Typography variant="h4" gutterBottom>
      Add New Product
    </Typography>
    <Formik
      initialValues={{
        itemName: '',
        brandName: '',
        imageUrl: '',
        category: '',
        description: '',
        price: 0,
        countInStock: 1,
        reviewsArray: [{ name: '', rating: 1, comment: '' }],
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        // console.log('Form data', values);
        createProduct(values)
      }}
    >
      {({ values, errors, touched }) => (
        <Form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Field
                name="itemName"
                as={TextField}
                label="Item Name"
                fullWidth
                variant="outlined"
                helperText={touched.itemName && errors.itemName}
                error={touched.itemName && Boolean(errors.itemName)}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                name="brandName"
                as={TextField}
                label="Brand Name"
                fullWidth
                variant="outlined"
                helperText={touched.brandName && errors.brandName}
                error={touched.brandName && Boolean(errors.brandName)}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                name="imageUrl"
                as={TextField}
                label="Image URL"
                fullWidth
                variant="outlined"
                helperText={touched.imageUrl && errors.imageUrl}
                error={touched.imageUrl && Boolean(errors.imageUrl)}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                name="category"
                as={TextField}
                label="Category"
                fullWidth
                variant="outlined"
                helperText={touched.category && errors.category}
                error={touched.category && Boolean(errors.category)}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                name="description"
                as={TextField}
                label="Description"
                fullWidth
                variant="outlined"
                multiline
                rows={4}
                helperText={touched.description && errors.description}
                error={touched.description && Boolean(errors.description)}
              />
            </Grid>
            {/* <Grid item xs={12} md={6}>
              <Field
                name="averageRating"
                as={TextField}
                label="Average Rating"
                fullWidth
                variant="outlined"
                type="number"
                inputProps={{ min: 0, max: 5 }}
                helperText={touched.averageRating && errors.averageRating}
                error={touched.averageRating && Boolean(errors.averageRating)}
              />
            </Grid> */}
            {/* <Grid item xs={12} md={6}>
              <Field
                name="numOfReviews"
                as={TextField}
                label="Number of Reviews"
                fullWidth
                variant="outlined"
                type="number"
                inputProps={{ min: 0 }}
                helperText={touched.numOfReviews && errors.numOfReviews}
                error={touched.numOfReviews && Boolean(errors.numOfReviews)}
              />
            </Grid> */}
            <Grid item xs={12} md={6}>
              <Field
                name="price"
                as={TextField}
                label="Price"
                fullWidth
                variant="outlined"
                type="number"
                inputProps={{ min: 0, step: '0.01' }}
                helperText={touched.price && errors.price}
                error={touched.price && Boolean(errors.price)}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Field
                name="countInStock"
                as={TextField}
                label="Count in Stock"
                fullWidth
                variant="outlined"
                type="number"
                inputProps={{ min: 0 }}
                helperText={touched.countInStock && errors.countInStock}
                error={touched.countInStock && Boolean(errors.countInStock)}
              />
            </Grid>
            {/* Review fields (dynamic) */}
            <Grid item xs={12}>
              <Typography variant="h6">Reviews:</Typography>
              {values.reviewsArray.map((_, index) => (
                <Box key={index} sx={{ mb: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Typography variant="subtitle1">Review {index + 1}</Typography>
                  <Field
                    name={`reviewsArray[${index}].name`}
                    as={TextField}
                    label="Reviewer Name"
                    fullWidth
                    variant="outlined"
                    helperText={touched.reviewsArray?.[index]?.name && errors.reviewsArray?.[index]?.name}
                    error={touched.reviewsArray?.[index]?.name && Boolean(errors.reviewsArray?.[index]?.name)}
                  />
                  <Field
                    name={`reviewsArray[${index}].rating`}
                    as={TextField}
                    label="Rating"
                    fullWidth
                    variant="outlined"
                    type="number"
                    inputProps={{ min: 0, max: 5 }}
                    helperText={touched.reviewsArray?.[index]?.rating && errors.reviewsArray?.[index]?.rating}
                    error={touched.reviewsArray?.[index]?.rating && Boolean(errors.reviewsArray?.[index]?.rating)}
                  />
                  <Field
                    name={`reviewsArray[${index}].comment`}
                    as={TextField}
                    label="Comment"
                    fullWidth
                    variant="outlined"
                    multiline
                    rows={3}
                    helperText={touched.reviewsArray?.[index]?.comment && errors.reviewsArray?.[index]?.comment}
                    error={touched.reviewsArray?.[index]?.comment && Boolean(errors.reviewsArray?.[index]?.comment)}
                  />
                </Box>
              ))}
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="primary" fullWidth sx={{bgcolor: isDarkMode? "primary" :  '#384B70'}}>
                Add Product
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  </Container>
  </>
);}

export default AddProductForm;
