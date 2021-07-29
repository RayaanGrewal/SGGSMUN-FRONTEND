import React , { Component } from 'react';
import NavigationBar from './NavigationBar'
import CarouselComponent from './CarouselComponent'
import {Container} from 'react-bootstrap'

class Home extends Component {
  render()
  {
    return (
      <div>
      <NavigationBar/>
      <CarouselComponent/>
      <Container fluid>
      </Container>
      </div>
    );
  }
}

export default Home;
