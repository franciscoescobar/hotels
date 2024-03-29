import React, { useReducer, useEffect } from "react";
import { Hero } from "../Hero";
import { Filters } from "../Filters";
import { Hotels } from "../Hotels";
import FloatingButton from "../FloatingButton";
import "./index.css";
const App = () => {
  const [state, setState] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      filters: {
        dateFrom: new Date(new Date().valueOf() + 86400000),
        dateTo: new Date(new Date().valueOf() + 86400000 + 86400000),
        country: undefined,
        price: undefined,
        rooms: undefined
      },
      hotels: [],
      loading: true,
      filteredHotels: []
    }
  );
  const { filters, hotels, loading, filteredHotels } = state;
  const fetchUrl = async () => {
    try {
      const response = await fetch(
        "https://wt-8a099f3e7c73b2d17f4e018b6cfd6131-0.sandbox.auth0-extend.com/acamica"
      );
      const json = await response.json();
      setState({ hotels: json, loading: false, filteredHotels: json });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUrl();
  }, []);

  const handleFilterChange = payload => {
    setState({
      filters: payload
    });
  };
  useEffect(() => {
    const filterHotelsByCountry = hotels.filter(
      hotel =>
        hotel.country === filters.country ||
        filters.country === undefined ||
        filters.country === "Todos los países"
    );
    const filterHotelsByPrice = filterHotelsByCountry.filter(
      hotel =>
        hotel.price === Number(filters.price) ||
        filters.price === undefined ||
        filters.price === "Cualquier precio"
    );
    const filterHotelsByRooms = filterHotelsByPrice.filter(
      hotel =>
        (filters.rooms >= hotel.rooms && hotel.rooms <= filters.rooms) ||
        filters.rooms === undefined ||
        filters.rooms === "Cualquier tamaño"
    );
    const filteredHotels = filterHotelsByRooms.filter(
      hotel =>
        hotel.availabilityFrom <= filters.dateFrom &&
        hotel.availabilityTo >= filters.dateTo
    );
    setState({ filteredHotels });
  }, [filters, hotels]);

  return (
    <div>
      <Hero filters={filters} />
      <Filters filters={filters} onFilterChange={handleFilterChange} />
      <Hotels hotels={filteredHotels} loading={loading} />
      <FloatingButton />
    </div>
  );
};
export default App;
