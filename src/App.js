import Aggrid from "./Aggrid";
import MainMenu from "./MainMenu";

function App() {
   return(
    <BrowserRouter>
<Routes>
  <Route
    path="/"
    element={
      <MainMenu/>
      
    }
  />
   <Route
    path="/aggrid"
    element={
      <Aggrid/>
      
    }
  />
    </Routes>
    </BrowserRouter>
   ) 
}
