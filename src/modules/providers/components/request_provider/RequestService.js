import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./requestService.css";
import { requestService } from "../../../services/api/WeServeService";
import { APIContext } from "../../../context/ContextProvider";
import LoadingScreen from "../../../core/components/pop_up/progress_bar/LoadingScreen";
import DatePicker from "react-datepicker";
import { RequestProviderDto } from "../../models/RequestProviderDto";
import { Address } from "../../models/Address";
import { GeoLocation } from "../../models/Geolocation";

const RequestService = () => {
  const { authDetails, loginDetails, showPopupMessageOnNavbar, logout } =
    useContext(APIContext);

  const [isLoading, setIsLoading] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [eventStatusDto, setEventStatusDto] = useState(null);
  const navLocation = useLocation();
  const serviceProvider = navLocation.state || {};
  const navigate = useNavigate();

  //Geolocation details
  const [location, setLocation] = useState(null);

  //User details
  const [username, setUsername] = useState(loginDetails?.name);
  const [usersurname, setUsersurname] = useState(loginDetails?.surname);
  const [email, setEmail] = useState(loginDetails?.email);
  const [cellNumber, setCellNumber] = useState(loginDetails?.cellNumber);
  const [street, setStreet] = useState("");
  const [suburb, setSuburb] = useState("");
  const [city, setCity] = useState("");
  const [houseNumber, setHouseNumber] = useState();
  const [code, setCode] = useState();

  const getLocation = () => {
    if (!navigator.geolocation) {
      //setError("Geolocation is not supported by your browser.");
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            altitude: position.coords.altitude,
          });
        },
        (err) => {
          setLocation(null);
        }
      );
    }
  };

  const requestAProvider = () => {
    setIsLoading(true);
    let geolocation = null;

    if (location != null) {
      geolocation = new GeoLocation(location.latitude, location.longitude, 1);
    }

    const address = new Address(
      geolocation,
      houseNumber,
      street,
      suburb,
      city,
      code
    );

    const requestDto = new RequestProviderDto(
      address,
      username,
      usersurname,
      email,
      cellNumber,
      serviceProvider.id,
      "03/11/2025",
      null
    );

    requestService(authDetails.accessToken, requestDto)
      .then((response) => {
        setEventStatusDto(response.data);
        navigate("/account/my-requests");
        setIsLoading(false);
      })
      .catch((error) => {
        if (error?.status === 401) {
          logout();
          showPopupMessageOnNavbar(error.response?.data?.errorMessage);
        } else if (error.code === "ERR_NETWORK") {
          showPopupMessageOnNavbar(
            `[${error.message}] Server might be down. Please try again later`
          );
        } else if (error.code === "ECONNABORTED") {
          showPopupMessageOnNavbar(`[${error.message}] Connection timed out.`);
        } else {
          showPopupMessageOnNavbar(
            error.response?.data?.errorMessage || "Unexpected error"
          );
        }
        setIsLoading(true);
      });
  };

  useEffect(() => {
    getLocation();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    requestAProvider();
  };

  if (isLoading) {
    return (
      <>
        <LoadingScreen />
      </>
    );
  }

  return (
    <form className="request-service" onSubmit={handleSubmit}>
      <div className="request-service-contents">
        <div className="request-service-left">
          <p className="title">Please enter your Contact details</p>
          <div className="multi-fields">
            <input
              type="text"
              placeholder="First name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Last name"
              value={usersurname}
              onChange={(e) => setUsersurname(e.target.value)}
              required
            />
          </div>
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Cell number"
            value={cellNumber}
            onChange={(e) => setCellNumber(e.target.value)}
            required
          />

          <p className="title">Please enter your Address details</p>
          <input
            type="text"
            placeholder="Street"
            value={street}
            onChange={(e) => setStreet(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Suburb"
            value={suburb}
            onChange={(e) => setSuburb(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
          <div className="multi-fields">
            <input
              type="number"
              placeholder="House/unit number"
              value={houseNumber}
              onChange={(e) => setHouseNumber(e.target.value)}
              required
            />
            <input
              type="number"
              placeholder="Postal code"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              required
            />
          </div>

          <div className="date">
            <p>Select date of Service</p>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              minDate={new Date()}
              showTimeSelect
              dateFormat="Pp"
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
            />
          </div>
        </div>
        <div className="request-service-middle"></div>
        <div className="request-service-right"></div>
      </div>
      <button className="payment-btn" type="submit">
        Proceed To Payment
      </button>
    </form>
  );
};

export default RequestService;
