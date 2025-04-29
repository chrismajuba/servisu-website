import React, { useContext, useEffect } from "react";
import "./providersGrid.css";
import { APIContext } from "../../../context/ContextProvider";
import ProviderCard from "./providerCard/ProviderCard";
import LoadingScreen from "../../../core/components/pop_up/progress_bar/LoadingScreenPopup";

const ProvidersGrid = () => {
  const { isLoading, serviceProviders, requestProviders } =
    useContext(APIContext);

  const occupations = [
    {
      id: 0,
      name: "All",
    },
    {
      id: 1,
      name: "Cleaner",
    },
    {
      id: 2,
      name: "Gardener",
    },
    {
      id: 3,
      name: "Lawn-mower",
    },
    {
      id: 4,
      name: "Photographer",
    },
    {
      id: 5,
      name: "Window Cleaner",
    },
    {
      id: 6,
      name: "Painter",
    },
    {
      id: 7,
      name: "School Transporter",
    },
    {
      id: 8,
      name: "Nail Polisher",
    },
    {
      id: 9,
      name: "Plumber",
    },
    {
      id: 10,
      name: "Hair Stylist",
    },
  ];

  useEffect(() => {
    requestProviders();
  }, []);

  return (
    <div className="providers-content">
      <div className="providers-header">
        <input type="text" placeholder="Try Gardener..." />
        <button onClick={() => requestProviders()}>Search</button>
      </div>
      <hr></hr>

      <div className="providers-body">
        <div className="providers-upper-body">
          <div className="providers-filter">
            <h2>Filter</h2>
            <div className="providers-filter-content">
              <div className="occupation-filter-container">
                <h3>Occupation</h3>
                <select>
                  {occupations.map((occupation) => {
                    return (
                      <option key={occupation.id}>{occupation.name}</option>
                    );
                  })}
                </select>
              </div>
            </div>
          </div>
          <div className="providers-display">
            <h2>Who do you need help from?</h2>
            <div className="providers-display-grid">
              {serviceProviders.map((serviceProvider) => {
                return <ProviderCard serviceProvider={serviceProvider} />;
              })}
            </div>
          </div>
        </div>
        <div className="providers-lower-body">
          <div className="load-more">
            <button>More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProvidersGrid;
