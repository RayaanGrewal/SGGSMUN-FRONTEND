import React from 'react';
import {Carousel} from 'react-bootstrap';
import SGGSMUN from "../assets/SGGSMUN.jpg";
import sggsmun2 from "../assets/sggsmun2.jpeg";
import register from "../assets/register.jpeg";



function CarouselComponent(props){


    return (
      <Carousel nextLabel={null} prevLabel={null}>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={SGGSMUN}
          alt="First slide"
        />

      </Carousel.Item>
      <Carousel.Item  interval={3000}>
        <img
          className="d-block w-100"
          src={sggsmun2}
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img
          className="d-block w-100"
          src={register}
          alt="Third slide"
        />

      </Carousel.Item>
    </Carousel>
    );
  }


export default CarouselComponent;
