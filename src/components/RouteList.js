import{Routes,Route} from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProductListingPage from "../pages/ProductListingPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import LoginPage from "../pages/LogInPage";
import SignUpPage from "../pages/SignUpPage";
import AddProductPage from "../pages/AddProductPage";
import AnyCategoryPage from "../pages/AnyCategoryPage";
import BestSellerPage from "../pages/BestSellerPage";


function RouteList()
{
    return(
        <div>
        <Routes>
    
            <Route path="/" element={<HomePage/>}/>
            <Route path="/products" element={<ProductListingPage/>}/>
            <Route path="/product/:id" element={<ProductDetailsPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/signup" element={<SignUpPage/>}/>
            <Route path="/products/add" element={<AddProductPage/>}/>
            <Route path="/anycategory/:id" element={<AnyCategoryPage/>}/>
            <Route path="/bestseller" element={<BestSellerPage/>}/>

        </Routes>
        </div>
    
    )
}


export default RouteList