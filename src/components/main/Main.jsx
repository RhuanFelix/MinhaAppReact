import { Carousel, Container, Button, Card, Row, Col } from 'react-bootstrap';
import instituicoesEnsino from "../../datasets/censoEscolar.js";
import "./main.css";

const Main = () => {
  let instituicoesEnsinoJson = [...instituicoesEnsino];
  console.log(instituicoesEnsinoJson)
  return (
    <main>

      {/* Carrossel de imagens */}

      <Carousel>
        <Carousel.Item>
          <div className="imagem-carrossel img1"></div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="imagem-carrossel img2"></div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="imagem-carrossel img3"></div>
        </Carousel.Item>
      </Carousel>

      {/* Cartões da IE */}

      <Container>
        <Row>
          {instituicoesEnsinoJson.map((instituicaoEnsino) => {
            return (
              <Col>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={instituicaoEnsino.urlImagem} style={{height:'189.45px'}} />
                  <Card.Body>
                    <Card.Title>{instituicaoEnsino.nome}</Card.Title>
                    <Card.Text>
                      Município: {instituicaoEnsino.municipio}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
                </Card>
              </Col>
            )})}
        </Row>
      </Container>
      
    </main>
  )
}

export default Main