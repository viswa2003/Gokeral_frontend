import HomePage from "../pages/Home";
import VehicleWrapper from "../components/driverProfile/modal/DriverAddVehicleModal";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/add-vehicle",
    element: <VehicleWrapper />, // Use the wrapper here
  },
]);
