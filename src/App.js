import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";
import TrackingForm from "./Pages/TrackingForm";
import ShipmentDetails from "./Pages/ShipmentDetails";
import Layout from "./Components/Layout/Layout";

const App = () => {
  return (
    <MuiThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<TrackingForm />} />
            <Route path="/:trackingNo" element={<ShipmentDetails />} />
          </Route>
        </Routes>
      </Router>
    </MuiThemeProvider>
  );
};

export default App;
