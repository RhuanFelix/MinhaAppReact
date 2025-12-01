import { Carousel, Container, Button, Card, Row, Col } from 'react-bootstrap';
import instituicoesEnsino from "../../datasets/censoEscolar.js";
import ranking from "../../datasets/matriculas_pb.json";
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

      <Container className="Cards-instituicoes">
        <Row>
          {ranking.map((instituicaoEnsino) => {
            return (
              <Col>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={`/public/${instituicaoEnsino.CO_ENTIDADE}.jpg`} style={{height:'189.45px'}} />
                  <Card.Body>
                    <Card.Title>{instituicaoEnsino.NO_ENTIDADE}</Card.Title>
                    <Card.Text>
                      Município: {instituicaoEnsino.NO_MUNICIPIO}<br/>
                      Estado: {instituicaoEnsino.NO_UF}<br/>
                      Nº matrículas do ensino básico:{instituicaoEnsino.QT_MAT_BAS}
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