import Products from "./Components/Products/Products"
import Users from "./Components/Users/Users";
import Orders from "./Components/Orders/Orders";
import Offs from "./Components/Offs/Offs";
import Comments from "./Components/Comments/Comments";


let routes = [
    {path :"/" , element : ""},
    {path : "/users" , element: <Users></Users>},
    {path : "/orders" , element: <Orders></Orders>},
    {path : "/products" , element: <Products> </Products>},
    {path : "/oofs" , element: <Offs> </Offs>},
    {path : "/comments" , element: <Comments> </Comments>},
]

export default routes