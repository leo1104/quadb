import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./components/Home";
import BookTickets from "./components/BookTickets";
import BookingForm from "./components/BookingForm";

function App() {
  return (
    
<BrowserRouter>
<Routes>
      <Route path="/" element={<Home />}/>
        <Route path="/search/:id" element={<BookTickets />} />
        <Route path="/book" element={<BookingForm />} />
      
    </Routes>
</BrowserRouter>



    // <Router>
    //   <Switch>
    //     <Route exact path="/">
    //       <Home />
    //     </Route>
    //     <Route exact path="/search/:id">
    //       <BookTickets />
    //     </Route>
    //     <Route path="/book">
    //       <BookingForm/>
    //     </Route>
    //   </Switch>
    // </Router>
  );
}

export default App;
