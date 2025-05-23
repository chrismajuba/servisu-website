import React, { useContext, useState, useEffect } from "react";
import "./providersGrid.css";
import { APIContext } from "../../../context/ContextProvider";
import ProviderCard from "./providerCard/ProviderCard";
import Pagination from "../../../core/components/pagination/Pagination";
import LoadingScreen from "../../../core/components/pop_up/progress_bar/LoadingScreen";
import {
  getProviders,
  searchProviders,
} from "../../../services/api/WeServeService";

const ProvidersGrid = () => {
  const { authDetails, setLoginDetails, showPopupMessageOnNavbar, logout } =
    useContext(APIContext);

  const [serviceProviders, setServiceProviders] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [totalElements, setTotalElements] = useState(0);
  const [pageSize] = useState(5);
  const [occupationId, setOccupationId] = useState(-1);
  const [keyword, setKeyword] = useState("");
  const [isLoaded, setIsLoaded] = useState(false);

  const requestProviders = () => {
    if (authDetails !== null || authDetails?.authenticated) {
      setIsLoaded(false);
      getProviders(authDetails.accessToken, pageSize, currentPage, occupationId)
        .then((response) => {
          if (response.data.hasOwnProperty("_embedded")) {
            setServiceProviders(
              response.data._embedded.providerPortfolioDtoList
            );
          } else {
            setServiceProviders([]);
          }

          setTotalPages(response.data.page.totalPages);
          setTotalElements(response.data.page.totalElements);
          setIsLoaded(true);
        })
        .catch((error) => {
          if (error.hasOwnProperty("status") && error.status === 401) {
            setLoginDetails(null); //To enforce login
            showPopupMessageOnNavbar(error.response.data.errorMessage);
          } else if (error.code === "ERR_NETWORK") {
            showPopupMessageOnNavbar(
              `[${error.message}] Server might be down. Please try again later`
            );
          } else if (error.code === "ECONNABORTED") {
            showPopupMessageOnNavbar(
              `[${error.message}] Connection timed out.`
            );
          } else {
            showPopupMessageOnNavbar(error.response.data.errorMessage);
          }
          showPopupMessageOnNavbar(true);
          setIsLoaded(true);
        });
    } else {
      showPopupMessageOnNavbar("Please login or register to proceed");
      setIsLoaded(true);
    }
  };

  const searchServiceProviders = () => {
    setIsLoaded(false);
    if (authDetails !== null || authDetails?.authenticated) {
      searchProviders(
        authDetails.accessToken,
        keyword,
        pageSize,
        currentPage,
        occupationId
      )
        .then((response) => {
          if (response.data.hasOwnProperty("_embedded")) {
            setServiceProviders(
              response.data._embedded.providerPortfolioDtoList
            );
          } else {
            setServiceProviders([]);
          }

          setTotalPages(response.data.page.totalPages);
          setTotalElements(response.data.page.totalElements);
          setIsLoaded(true);
        })
        .catch((error) => {
          if (error.hasOwnProperty("status") && error.status === 401) {
            logout(); //To enforce login
            showPopupMessageOnNavbar(error.response.data.errorMessage);
          } else if (error.code === "ERR_NETWORK") {
            showPopupMessageOnNavbar(
              `[${error.message}] Server might be down. Please try again later`
            );
          } else if (error.code === "ECONNABORTED") {
            showPopupMessageOnNavbar(
              `[${error.message}] Connection timed out.`
            );
          } else {
            showPopupMessageOnNavbar(error.response.data.errorMessage);
          }
          setIsLoaded(true);
        });
    } else {
      showPopupMessageOnNavbar("Please login or register to proceed.");
      setIsLoaded(true);
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
      id: 10,
      name: "Hair Stylist",
    },
  ];

  const indexOfLastProvider = currentPage * pageSize;
  const indexOfFirstProvider = indexOfLastProvider - pageSize;
  let lastProvider =
    pageSize * currentPage <= totalElements
      ? currentPage * pageSize
      : totalElements;

  useEffect(() => {
    if (keyword === "") {
      requestProviders();
    } else {
      searchServiceProviders();
    }

    window.scrollTo(0, 0);
  }, [currentPage, occupationId]);

  if (!isLoaded) {
    return (
      <>
        <LoadingScreen />
      </>
    );
  }

  return (
    <div className="providers-content">
      <div className="providers-header">
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="Try Chris..."
        />
        <button onClick={() => searchServiceProviders()}>Search</button>
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
                  onChange={(e) => setOccupationId(e.target.value)}>
                  {occupations.map((occupation) => {
                    return (
                      <option value={occupation.id} key={occupation.id}>
                        {occupation.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              {totalElements > 0 && (
                <div className="results">
                  <p>Results ({totalElements})</p>
                  <p>
                    {indexOfFirstProvider + 1} to {lastProvider} of{" "}
                    {totalElements}
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="providers-display">
            {totalElements > 0 && <h2>Who do you need help from?</h2>}
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
                <div>
                  <div className="no-results-found">
                    <p>No results found...</p>
                  </div>
                  <div className="support">
                    <p>Can't find what you are looking for?</p>
                    <button>Support</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="providers-lower-body">
          {totalPages > 1 && (
            <Pagination
              currentPage={currentPage}
              totalpages={totalPages}
              paginate={setCurrentPage}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProvidersGrid;
