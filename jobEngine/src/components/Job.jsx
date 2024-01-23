import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Star, StarFill } from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";

// Componente React che rappresenta un singolo lavoro
const Job = ({ data }) => {
  // Ottieni la lista delle aziende preferite dallo stato globale tramite useSelector di react-redux
  const favourites = useSelector((state) => state.favourite.list);

  // Ottieni la funzione dispatch dallo store di Redux
  const dispatch = useDispatch();

  // Verifica se l'azienda corrente è tra le preferite
  const isFav = favourites.includes(data.company_name);

  return (
    // Layout a griglia di Bootstrap per mostrare le informazioni del lavoro
    <Row className="mx-0 mt-3 p-3" style={{ border: "1px solid #00000033", borderRadius: 4 }}>
      {/* Colonna sinistra con icona di stella per aggiungere/rimuovere dai preferiti e il nome dell'azienda */}
      <Col xs="auto" className="d-flex align-items-center">
        {isFav ? (
          // Stella piena se l'azienda è tra le preferite
          <StarFill
            color="gold"
            size={22}
            className="me-2 my-auto"
            // Dispatch un'azione per rimuovere l'azienda dai preferiti quando la stella viene cliccata
            onClick={() =>
              dispatch({
                type: "REMOVE_FROM_FAVOURITE",
                payload: data.company_name,
              })
            }
          />
        ) : (
          // Stella vuota se l'azienda non è tra le preferite
          <Star
            color="gold"
            size={22}
            className="me-2 my-auto"
            // Dispatch un'azione per aggiungere l'azienda ai preferiti quando la stella viene cliccata
            onClick={() =>
              dispatch({
                type: "ADD_TO_FAVOURITE",
                payload: data.company_name,
              })
            }
          />
        )}

        {/* Link alla pagina dettaglio dell'azienda */}
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>

      {/* Colonna destra con il titolo del lavoro, link al sito dell'annuncio */}
      <Col>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
    </Row>
  );
};

export default Job;
