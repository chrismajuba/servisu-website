import React, { useContext, useState, useEffect } from "react";
import "./providersGrid.css";
import { APIContext } from "../../../context/ContextProvider";
import ProviderCard from "./providerCard/ProviderCard";
import Pagination from "../../../core/components/pagination/Pagination";
import { getProviders } from "../../../services/api/WeServeService";

const ProvidersGrid = () => {
  const {
    loginDetails,
    setIsloading,
    setLoginDetails,
    setShowErrorPopup,
    setServerError,
  } = useContext(APIContext);

  const [serviceProviders, setServiceProviders] = useState([]);
  const [providerPageNo, setProviderPageNo] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [totalElements, setTotalElements] = useState(0);
  const [pageSize, setPageSize] = useState(0);
  const [occupationId, setOccupationId] = useState(-1);

  const requestProviders = () => {
    setIsloading(true);
    if (loginDetails !== null) {
      getProviders(loginDetails.accessToken, providerPageNo, occupationId)
        .then((response) => {
          if (response.data.hasOwnProperty("_embedded")) {
            setServiceProviders(
              response.data._embedded.providerPortfolioDtoList
            );
          } else {
            setServiceProviders([]);
          }
          setProviderPageNo(response.data.page.number);
          setTotalPages(response.data.page.totalPages);
          setPageSize(response.data.page.size);
          setTotalElements(response.data.page.totalElements);
          setIsloading(false);
        })
        .catch((error) => {
          if (error.status === 401) {
            setLoginDetails(null); //To enforce login
          }
          console.error("Failed to fetch providers:", error);
          setServerError(error.response.data.errorMessage);
          setShowErrorPopup(true);
          setIsloading(false);
        });
    } else {
      setServerError("Please login or register");
      setShowErrorPopup(true);
      setIsloading(false);
    }
  };

  const occupations = [
    {
      id: -1,
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
      id: 100,
      name: "Hair Stylist",
    },
  ];

  useEffect(() => {
    requestProviders();
    window.scrollTo(0, 0);
  }, [providerPageNo, occupationId]);

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
                <select
                  value={occupationId}
                  onChange={(e) => setOccupationId(e.target.value)}
                >
                  {occupations.map((occupation) => {
                    return (
                      <option value={occupation.id} key={occupation.id}>
                        {occupation.name}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
          </div>
          <div className="providers-display">
            <h2>Who do you need help from?</h2>
            <div className="providers-display-grid">
              {serviceProviders.length > 0 ? (
                serviceProviders.map((serviceProvider) => {
                  return (
                    <ProviderCard
                      serviceProvider={serviceProvider}
                      key={serviceProvider.id}
                    />
                  );
                })
              ) : (
                <div className="no-results-found">
                  <p>No results found...</p>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="providers-lower-body">
          <Pagination
            currentPage={providerPageNo}
            totalpages={totalPages}
            totalElements={totalElements}
            pageSize={pageSize}
            paginate={setProviderPageNo}
          />
        </div>
      </div>
    </div>
  );
};

export default ProvidersGrid;
