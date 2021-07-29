import React from 'react';
import {Carousel} from 'react-bootstrap';
import SGGSMUN from "../assets/SGGSMUN.jpg";



function CarouselComponent(props){


    return (
      <Carousel>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={SGGSMUN}
          alt="First slide"
        />

      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={require("../assets/SGGSMUN.jpg")}
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={require("../assets/SGGSMUN.jpg")}
          alt="Third slide"
        />

      </Carousel.Item>
    </Carousel>
    );
  }


export default CarouselComponent;
