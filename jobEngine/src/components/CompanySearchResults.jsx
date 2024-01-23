import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Job from "./Job";
import { useParams } from "react-router-dom";
  
// Componente React per visualizzare i risultati della ricerca di lavoro per un'azienda specifica
const CompanySearchResults = () => {
  // Stato locale per memorizzare l'elenco dei lavori
  const [jobs, setJobs] = useState([]);

  // Ottenere i parametri dall'URL tramite useParams di react-router-dom
  const params = useParams();

  // Endpoint di base per la chiamata API
  const baseEndpoint = "https://strive-benchmark.herokuapp.com/api/jobs?company=";

  // Effetto che si attiva all'avvio del componente
  useEffect(() => {
    // Richiedi e imposta l'elenco dei lavori quando il componente viene montato
    getJobs();
  }, []);

  // Funzione per ottenere i lavori dalla chiamata API
  const getJobs = async () => {
    try {
      // Esegui la chiamata API con il nome dell'azienda dai parametri dell'URL
      const response = await fetch(baseEndpoint + params.company);

      // Verifica se la risposta è positiva (HTTP status code 200-299)
      if (response.ok) {
        // Estrai i dati dalla risposta JSON
        const { data } = await response.json();

        // Imposta lo stato locale con l'elenco dei lavori
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
    // Layout a griglia di Bootstrap per visualizzare i risultati
    <Container>
      <Row>
        <Col className="my-3">
          {/* Intestazione con il nome dell'azienda selezionata */}
          <h1 className="display-4">Job posting for: {params.company}</h1>
          
          {/* Mappa attraverso l'elenco dei lavori e visualizza ciascun lavoro utilizzando il componente Job */}
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default CompanySearchResults;
