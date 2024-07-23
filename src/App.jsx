import LandingPage from "./Pages/LandingPage";
import AirplanesPage from "./Pages/AiriplanesPage";
import StickyButton from "./Components/stickyButton";
import {
  Routes,
  Route,
} from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" Component={LandingPage} />
          <Route path="/airplanes" Component={AirplanesPage}/>
        </Routes>
        <StickyButton />
      </Router>
    </>
  )
}

export default App
