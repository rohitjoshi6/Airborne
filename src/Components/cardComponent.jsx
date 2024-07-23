/* eslint-disable react/prop-types */
import { fetchData } from "../utils/dataFetching";
import Popup from "reactjs-popup";
import { useState } from "react";

const CardComponent = ({ item }) => {
 const [details, setDetails] = useState({});
 const [open, setOpen] = useState(false);

 const closeModal = () => {
    setOpen(false);
  };

  const showDetails = async() => {
    const data = await fetchData(item.id);
    setDetails(data[0]);
    console.log(data[0]);
    setOpen(true);
  };
  return (
    <>
    <div className="border rounded-lg p-4 shadow-lg">
      <h3 className="text-xl font-bold mb-2">{item.plane}</h3>
      <div className="h-48 w-full mb-4 overflow-hidden rounded-lg">
      <img src={item.imgThumb} alt={item.plane} className="w-full h-full object-cover shadow-lg" />
      </div>
      <div className="space-y-2">
        <p><strong>Brand:</strong> {item.brand}</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={showDetails}>Read More</button>
      </div>
    </div>

    {/* <Popup open={open} closeOnDocumentClick onClose={() => setOpen(false)}>
        <div className="w-96 p-4 bg-white rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-2">{details.plane}</h2>
            <div className="h-48 w-full mb-4 overflow-hidden rounded-lg">
            <img src={details.imgThumb} alt={details.plane} className="w-full h-full object-cover shadow-lg" />
            </div>
            <div className="space-y-2">
                <p><strong>Brand:</strong> {details.brand}</p>
                <p><strong>Ceiling (ft):</strong> {details.ceiling_ft}</p>
                <p><strong>Cruise Speed (km/h):</strong> {details.cruise_speed_kmph}</p>
                <p><strong>Empty Weight (kg):</strong> {details.empty_weight_kg}</p>
                <p><strong>Engine:</strong> {details.engine}</p>
                <p><strong>Fuel Capacity (litres):</strong> {details.fuel_capacity_litres}</p>
                <p><strong>Height (ft):</strong> {details.height_ft}</p>
                <p><strong>Length (ft):</strong> {details.length_ft}</p>
                <p><strong>Max Landing Weight (kg):</strong> {details.max_landing_weight_kg}</p>
                <p><strong>Max Takeoff Weight (kg):</strong> {details.max_takeoff_weight_kg}</p>
                <p><strong>Passenger Capacity:</strong> {details.passenger_capacity}</p>
                <p><strong>Price (USD):</strong> {details.priceUSD}</p>
                <p><strong>Range (km):</strong> {details.range_km}</p>
                <p><strong>Wingspan (ft):</strong> {details.wingspan_ft}</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setOpen(false)}>Close</button>
            </div>
        </div>
    </Popup> */}

      <Popup open={open} closeOnDocumentClick onClose={closeModal}>
        <div className="max-w-4xl mx-auto p-4 bg-white rounded-lg shadow-2xl flex flex-col md:flex-row">
          <button
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 transition duration-200 ease-in-out"
            onClick={closeModal}
          >
            &times;
          </button>
          {details ? (
            <div className="flex flex-col md:flex-row w-full">
              <div className="md:w-1/2 h-64 md:h-auto overflow-hidden rounded-lg">
                <img
                  src={details.imgThumb}
                  alt={details.plane}
                  className="w-full h-full object-contain shadow-lg"
                />
              </div>
              <div className="md:w-1/2 p-4 space-y-2 text-gray-700">
                <h2 className="text-2xl font-bold mb-4">{details.plane}</h2>
                <p><strong>Brand:</strong>{details.brand}</p>
                <p><strong>Ceiling (ft):</strong> {details.ceiling_ft}</p>
                <p><strong>Cruise Speed (km/h):</strong> {details.cruise_speed_kmph}</p>
                <p><strong>Empty Weight (kg):</strong> {details.empty_weight_kg}</p>
                <p><strong>Engine:</strong> {details.engine}</p>
                <p><strong>Fuel Capacity (litres):</strong> {details.fuel_capacity_litres}</p>
                <p><strong>Height (ft):</strong> {details.height_ft}</p>
                <p><strong>Length (ft):</strong> {details.length_ft}</p>
                <p><strong>Max Landing Weight (kg):</strong> {details.max_landing_weight_kg}</p>
                <p><strong>Max Takeoff Weight (kg):</strong> {details.max_takeoff_weight_kg}</p>
                <p><strong>Passenger Capacity:</strong> {details.passenger_capacity}</p>
                <p><strong>Price (USD):</strong> {details.priceUSD}</p>
                <p><strong>Range (km):</strong> {details.range_km}</p>
                <p><strong>Wingspan (ft):</strong> {details.wingspan_ft}</p>
                <button
                  className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-200 ease-in-out"
                  onClick={closeModal}
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </Popup>

    </>
  );
};

export default CardComponent;
