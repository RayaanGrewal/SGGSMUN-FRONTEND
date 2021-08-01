import React , { Component } from 'react';
import NavigationBar from './NavigationBar';
import secretariat from '../assets/secretariat.jpg'
import {Container, Image,Card} from 'react-bootstrap'

class LetterFromSecretariat extends Component {
  render()
  {
    return (
      <div>
      <NavigationBar/><Container fluid>
            <Image src={secretariat} width="100%" height="100%"/>
            <Card className="bg-white text-black justify-content-center" >


        <div className="pd-3" >
          <Card.Title className="mb-3 mt-3"><h1>Letter from secretariat

      </h1></Card.Title >
      <Card.Text className="mt-3">
        <br/><h3>
        The 'SGGS-MUN' 2021 secretariat is glad to invite you all to the 3rd edition of SGGS-MUN. We are thrilled to just provide you with four committees that interact with a comprehensive range of external issues and actively encourage students to engage in issues that are really interesting and coherent. Representatives of the future will enhance their capacities in camaraderie, command structure, explanatory, and presentation skills as they converge at this seminar. We, along with the invaluable contributions of the members of the Organizing Committee, are working tirelessly to make this conference a once-in-a-lifetime event.
        We want to provide you with yet another experience and friendliness, as a secretariat and to perpetuate the basic premise and ethos of the UN. It is envisioned that we would foster vigorous involvement in deliberations in order to grasp the UN's zeal and determination. SGGS MUN aims to be an exceptional session due to the efforts and dedication of the responsible employees. Hereunder, the 'SGGS-MUN 2021 Secretariat requests the illustrious and prodigious delegates as well as the fledgling delegates to attend this event that will sustain the principles of creating a better future. The SGGS MUN aims to be an unforgettable conference thanks to the hard work and dedication of the organising committee.

      </h3>
      </Card.Text>
      </div>

      </Card>
      </Container>

      </div>
    );
  }
}

export default LetterFromSecretariat;
