import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";


const BarraRicerca = ({ city, setCity, handleSearch }) => {
  const img = "https://cdn.icon-icons.com/icons2/2505/PNG/512/sunny_weather_icon_150663.png"
  return (
    <>
      <Navbar
        expand="lg"
        className="rounded-3 justify-content-center "
        
      >
        <img
          src = {img}
            width="70"
            height="70"
            className=""
          />

        <Form className="d-flex mx-3 ">
          <Form.Control
            type="text"
            placeholder="Inserisci il nome della città"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            aria-label="Search"
          />
          <Button onClick={handleSearch} variant="outline-info mx-3 rounded-5">
            Search
          </Button>
        </Form>
      </Navbar>
    </>
  );
};

export default BarraRicerca;