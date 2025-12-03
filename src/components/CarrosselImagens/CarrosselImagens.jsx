import { Carousel } from 'react-bootstrap'
import "./CarrosselImagens.css"

const CarrosselImagens = () => {
  return (
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
  )
}

export default CarrosselImagens