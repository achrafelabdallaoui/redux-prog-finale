import { Container, Row, Col, ListGroup, Button } from "react-bootstrap";
import { Trash } from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

// Componente React per visualizzare la lista dei preferiti
const Favourites = () => {
  // Ottieni la lista delle aziende preferite dallo stato globale di Redux
  const favourites = useSelector((state) => state.favourite.list);

  // Ottieni la funzione dispatch dallo store di Redux
  const dispatch = useDispatch();

  // Hook di navigazione per spostarsi tra le pagine
  const navigate = useNavigate();

  return (
    // Layout a griglia di Bootstrap per visualizzare la lista dei preferiti
    <Container>
      <Row>
        {/* Intestazione con il titolo e un pulsante per tornare alla Home */}
        <Col xs={10} className="d-flex align-items-center mx-auto my-3">
          <h1 className="display-4 me-auto">Favourites</h1>
          {/* Pulsante per tornare alla Home */}
          <Button variant="outline-primary" onClick={() => navigate("/")}>
            go to Home
          </Button>
        </Col>
        
        {/* Lista dei preferiti */}
        <Col xs={10} className="mx-auto my-3">
          <ListGroup>
            {/* Verifica se ci sono preferiti da visualizzare */}
            {favourites.length > 0 ? (
              // Mappa attraverso la lista dei preferiti e visualizza ciascuno con un'icona di cancellazione e un link
              favourites.map((fav, i) => (
                <ListGroup.Item key={i}>
                  {/* Icona di cancellazione per rimuovere l'azienda dai preferiti */}
                  <Trash
                    color="red"
                    className="me-2"
                    onClick={() =>
                      dispatch({
                        type: "REMOVE_FROM_FAVOURITE",
                        payload: fav,
                      })
                    }
                  />
                  {/* Link alla pagina dettaglio dell'azienda */}
                  <Link to={"/" + fav}>{fav}</Link>
                </ListGroup.Item>
              ))
            ) : (
              // Messaggio se non ci sono preferiti
              <ListGroup.Item>
                No favourites yet, go <Link to="/">back to Homepage</Link> to select some
              </ListGroup.Item>
            )}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Favourites;
