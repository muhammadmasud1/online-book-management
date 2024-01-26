
import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";

const router = createBrowserRouter([
           {
              path : '/',
              element : <Root></Root>,
              errorElement : <h1>Error Page</h1>
              
           }   
])
export default router;