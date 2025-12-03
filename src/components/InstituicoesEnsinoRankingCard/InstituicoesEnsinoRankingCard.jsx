import { Container, Button, Card, Row, Col } from 'react-bootstrap'
import "./InstituicoesEnsinoRankingCard.css"

const InstituicoesEnsinoRankingCard = ({ranking}) => {
  return (
    <Container className="Cards-instituicoes">
        <Row>
          {ranking.map((instituicaoEnsino, indice) => {
            return (
              <Col key={indice}>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={`/public/${instituicaoEnsino.CO_ENTIDADE}.jpg`} style={{height:'189.45px'}} />
                  <Card.Body>
                    <Card.Title>{instituicaoEnsino.NO_ENTIDADE}</Card.Title>
                    <Card.Text>
                      Município: {instituicaoEnsino.NO_MUNICIPIO}<br/>
                      Estado: {instituicaoEnsino.NO_UF}<br/>
                      Nº matrículas do ensino básico:{instituicaoEnsino.QT_MAT_BAS}
                    </Card.Text>
                    <Button variant="primary">Saiba mais</Button>
                  </Card.Body>
                </Card>
              </Col>
            )})}
        </Row>
      </Container>
  )
}

export default InstituicoesEnsinoRankingCard