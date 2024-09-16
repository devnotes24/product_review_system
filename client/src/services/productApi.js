import api from "./api";

// Handle GET request -  product
export async function getProducts() {
  try {
    const response = await api.get('productDataRt/getAllProducts');
    if (response.status !== 200) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    if (response.data.error) {
      console.error('Failed to load the products:', response.data.error);
      throw new Error(response.data.error);
    }
    // Assuming the backend sorts by startDate by default
    return response.data;
  } catch (error) {
    console.error('There was an error fetching the products:', error);
    throw error;
  }
}

// Handle POST request - Create a new products
export async function createProduct(newProduct) {
  try {
    const response = await api.post('productDataRt/createProduct',newProduct,{headers: {
        'Content-Type': 'application/json',
      }});
    if (response.status !== 201) { // Assuming 201 is the success status for creation
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    if (response.data.error) {
      console.error('Failed to create product:', response.data.error);
      throw new Error(response.data.error);
    }
    return response.data;
  } catch (error) {
    console.error('There was an error creating the product:', error);
    throw error;
  }
}
  

// Handle PUT request - Update an existing product
export async function updateProduct(id, updatedData) {
  try {
    console.log({
        "reviewsArray" : [updatedData]
      });
    const response = await api.put(`productDataRt/updateProduct/${id}`, {
      "reviewsArray" : [updatedData]
    });
    
    if (response.status !== 200) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    if (response.data.error) {
      console.error('Failed to update the products:', response.data.error);
      throw new Error(response.data.error);
    }
    return response.data;
  } catch (error) {
    console.error('There was an error updating the product:', error);
    throw error;
  }
}

// Handle DELETE request - Delete product by ids
export async function deleteProducts(ids) {
    try {
      const response = await api({
        method: 'DELETE',
        url: 'productDataRt/getAllProducts',
        data: { ids },
        headers: {
          'Content-Type': 'application/json',
        }
      });
  
      // Check if the response status is not 204 for DELETE
      if (response.status !== 204 && response.status !== 200) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      return response.data; // Only if the backend sends some data on success
    } catch (error) {
      console.error('There was an error deleting the product:', error.response?.data || error.message);
      throw error;
    }
  }
  