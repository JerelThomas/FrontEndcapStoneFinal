import {Link} from "react-router-dom"


function Header()
{
    return(
        

        <div id="Header_background">
            <div className="header">
                <h1><i class="fa fa-hippo"></i> <Link to="/">Shop HIPPO</Link></h1>
                <input type="text" id="search"/>
                <button type="submit">search</button>
                    <div id="header_links">
                    <Link to="/signup">SignUpPage</Link>
                    <Link to="/login">LogInPage</Link>
                    </div> 
                <div id="shoppingcart"><Link to=""><i class="fa fa-list" ></i></Link></div>
            </div>
            <div className="Nav">
            <Link to="/">HomePage</Link>
            <Link to="/products">ProductListingPage</Link>
            <Link to="/bestseller">BestSellerPage</Link>
            <Link to="/products/add">AddProductPage</Link>
            </div>
        </div>
    )
}
export default Header;