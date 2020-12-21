import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./style.scss";

export default function News() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 3, // optional, default to 1.
      partialVisibilityGutter: 60,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
      partialVisibilityGutter: 50,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
      partialVisibilityGutter: 30,
    },
  };
  return (
    <Container fluid>
      <Row className="container-title m-0">
        <h4 className="brand-text">Os melhores acreditam em nossas soluções</h4>
      </Row>
      <Row className="m-0">
        <Carousel
          partialVisbile
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          centerMode={false}
          className=""
          containerClass="container-with-dots carousel-container"
          dotListClass=""
          draggable={false}
          focusOnSelect={false}
          infinite
          keyBoardControl
          minimumTouchDrag={80}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={responsive}
          showDots={false}
          sliderClass=""
          slidesToSlide={1}
          swipeable
          itemClass="carousel-card"
        >
          <div className="news-container1">
            <p className="data-text">Dezembro/2020</p>
            <Link>
              <h6 className="title-new">
                Petrobras prevê adesão maciça a linha de capital
              </h6>
            </Link>
          </div>
          <div className="news-container2">
            <p className="data-text">Dezembro/2020</p>
            <Link>
              <h6 className="title-new">
                “Há muito espaço para a expansão das fintechs na América Latina”
              </h6>
            </Link>
          </div>
          <div className="news-container3">
            <p className="data-text">Julho/2019</p>
            <Link>
              <h6 className="title-new">
                Microsserviços na Monkey Exchange – Hipsters On The Road #12
              </h6>
            </Link>
          </div>
          <div className="news-container4">
            <p className="data-text">Novembro/2020</p>
            <Link className="title-new">
              <h6>
                Crédito - Como facilitar o acesso ao crédito a empresas e
                pessoas...
              </h6>
            </Link>
          </div>
        </Carousel>
      </Row>
      <Row className="m-0 button-container">
          <button className="button-news">
          Explore Todas as Nossas Notícias
          </button>
      </Row>
    </Container>
  );
}
