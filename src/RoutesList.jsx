import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import PostcardsList from "./PostcardsList";
import PostcardDetailPage from "./PostcardDetailPage";
import PostcardCreationPage from "./PostcardCreationPage";

/** Photo
 *
 * props: postcard
 *
 * state:
 *
 * renders:
 */
function RoutesList() {

    return (
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/postcards" element={<PostcardsList/>}/>
            <Route path="/postcards/:id" element={<PostcardDetailPage/>}/>
            <Route path="/postcards/create" element={<PostcardCreationPage/>}/>
        </Routes>
    )
  }

  export default RoutesList