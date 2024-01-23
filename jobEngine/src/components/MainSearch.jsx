import { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Job from "./Job";

// Componente React per la ricerca principale di lavori remoti
const MainSearch = () => {
  // Stato locale per memorizzare la query di ricerca
  const [query, setQuery] = useState("");

  // Stato locale per memorizzare l'elenco dei lavori
  const [jobs, setJobs] = useState([]);

  // Hook di navigazione per spostarsi tra le pagine
  const navigate = useNavigate();

  // Endpoint di base per la chiamata API di ricerca
  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?search=";

  // Gestisce il cambiamento nella barra di ricerca
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  // Gestisce la presentazione della query di ricerca
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Esegui la chiamata API con la query di ricerca e imposta l'elenco dei lavori
      const response = await fetch(baseEndpoint + query + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        setJobs(data);
      } else {
        // Gestisci un errore se la risposta non è positiva
        alert("Error fetching results");
      }
    } catch (error) {
      // Gestisci eventuali errori durante la chiamata API
      console.log(error);
    }
  };

  return (
    // Layout a griglia di Bootstrap per visualizzare la barra di ricerca e i risultati
    <Container>
      <Row>
        {/* Intestazione con il titolo e un pulsante per andare alla pagina dei preferiti */}
        <Col xs={10} className="d-flex flex-wrap align-items-center mx-auto my-3">
          <h1 className="display-1 me-auto">Remote Jobs Search</h1>
          {/* Pulsante per andare alla pagina dei preferiti */}
          <Button variant="outline-primary" onClick={() => navigate("/favourites")}>
            go to Favourites
          </Button>
        </Col>

        {/* Form per la barra di ricerca */}
        <Col xs={10} className="mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Control type="search" value={query} onChange={handleChange} placeholder="type and press Enter" />
          </Form>
        </Col>

        {/* Elenco dei risultati della ricerca */}
        <Col xs={10} className="mx-auto mb-5">
          {/* Mappa attraverso l'elenco dei lavori e visualizza ciascun lavoro utilizzando il componente Job */}
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
