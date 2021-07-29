import React , { Component } from 'react';
import NavigationBar from './NavigationBar'
import CarouselComponent from './CarouselComponent'

class Home extends Component {
  render()
  {
    return (
      <div>
      <NavigationBar/>
      <CarouselComponent/>
      
      </div>
    );
  }
}

export default Home;
