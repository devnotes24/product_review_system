import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import { Suspense} from "react";
import PageNotFound from '../pages/PageNotFound';
import AppLayout from '../components/AppLayout';
import AboutPage from '../pages/AboutPage';
import SignInPage from '../pages/SignInPage';
import SignUpPage from '../pages/SignUpPage';
import ProtectedRoute from '../components/ProtectedRoute';
import AddItem from '../pages/AddItem';
import ProductDetails from '../components/ProductDetails';
import Services from '../pages/Services';
import DevelopersInfo from '../pages/DeveloperInfo';
function Routes() {
    const routes = createBrowserRouter(
        [
          {
            path : "/",
            element : <AppLayout/>,
            children : [
              {
                path : "",
                element : <Services/>
              },
              {
                path : "about",
                element : <AboutPage/>
              },
              {
                path : "/rating/:id",
                element : (
                <ProtectedRoute>
                    <ProductDetails />
                </ProtectedRoute>
                )
              },
              {
                path : "signIn",
                element : <SignInPage/>
              },
              {
                path : "signUp",
                element : <SignUpPage/>
              },
              {
                path : "developerInfo",
                element : <DevelopersInfo/>
              },
              {
                path : "addItem",
                element : <AddItem />
              },

            ]
          },
          {
            path : "*",
            element : <PageNotFound/>,
          }
        ]
      )
    return (
        <Suspense>
            <RouterProvider router={routes}/>
        </Suspense>
    )
}

export default Routes
