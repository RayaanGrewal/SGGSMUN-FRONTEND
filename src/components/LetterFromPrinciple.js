import React , { Component } from 'react';
import NavigationBar from './NavigationBar';
import lfp from '../assets/lfp.jpeg'
import { Container, Image } from 'react-bootstrap'

class LetterFromPrinciple extends Component {
  render()
  {
    return (
      <div>
      <NavigationBar/>
      <Container fluid>
            <Image src={lfp} width="100%" height="100%"/>

      </Container>

      </div>
    );
  }
}

export default LetterFromPrinciple;
