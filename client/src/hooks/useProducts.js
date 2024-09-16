import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getProducts , updateProduct , deleteProducts , createProduct} from "../services/productApi";
import toast from "react-hot-toast";

export function useProducts() {
  const queryClient = useQueryClient();

  // Fetching products data
  const queryKey = ['products'];
  const queryFn = () => getProducts();

  const { data: productsData, isLoading: isFetching, isError: isFetchingError, error: fetchError } = useQuery({
    queryKey,
    queryFn,
  });

  // Mutation for creating a new product
  const createMutation = useMutation({
    mutationFn: (newProduct) => createProduct(newProduct),
    onSuccess: () => {
      
      queryClient.invalidateQueries(queryKey);

      toast.success("Product added successfully");
    },
    onError: (error) => {
      console.error('Error creating Product:', error.response?.data || error.message);
      toast.error("Error adding Product");
    },
  });


  // Mutation for updating a Product
  const updateMutation = useMutation({
    mutationFn: ([id , newRating]) => updateProduct(id , newRating),
    onSuccess: () => {
      queryClient.invalidateQueries(queryKey);

      toast.success("Rmarks added successfully");
    },
    onError: (error) => {
      console.error('Error in adding remarks:', error.response?.data || error.message);
      toast.error("Error in adding remarks");
    },
  });



  // Mutation for deleting a new Product
  const deleteMutation = useMutation({
    mutationFn: (idList) => deleteProducts(idList),
    onSuccess: () => {
      
      queryClient.invalidateQueries(queryKey);
      toast.success("Product deleted successfully");
    },
    onError: (error) => {
      console.error('Error deleting Product:', error.response?.data || error.message);
      toast.error("Error deleting Product");
    },
  });

  // const isLoading = createMutation.isPending || deleteMutation.isPending || updateMutation.isPending            
  return { 
    productsData, 
    isFetching, 
    isFetchingError, 
    fetchError,
    createProduct: createMutation.mutateAsync ,
    deleteProduct : deleteMutation.mutateAsync,
    updateProduct : updateMutation.mutateAsync,
    // isAdding : isLoading,
    // isDeleting : isLoading,
    // isUpdating : isLoading,
    isAdding : createMutation.isPending,
    isDeleting : deleteMutation.isPending,
    isUpdating : updateMutation.isPending,
  };
}
