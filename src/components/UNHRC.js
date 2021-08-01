import React , { Component } from 'react';
import NavigationBar from './NavigationBar';
import unhrc from '../assets/unhrc.jpg';
import {Container, Image, Card} from 'react-bootstrap'

class UNHRC extends Component {
  render()
  {
    return (
      <div>
      <NavigationBar/>
      <Container fluid>
            <Image src={unhrc} width="100%" height="100%"/>
            <Card className="bg-white text-black justify-content-center" >


        <div className="pd-3" >
          <Card.Title className="mb-3 mt-3"><h1>United Nations Human Rights Council
      </h1></Card.Title >
      <Card.Text className="mt-3">
          <h3 className="mt-3 ">This particular organ is made up of 47 member-states and is responsible for the protection of human rights around the globe. A body that focuses on the importance of humanity and maintaining peace and security while giving importance to minority communities and the underprivileged, is an indispensable part of the United Nations. We present to you our third committee, the United Nations Human Rights Council.</h3>
<h1 className="mb-3 mt-3">Agenda: promotion and protection of the rights of ethnic minorities, with special emphasis on Uighur Muslims in China</h1><br/><h3>
Today, the issue of minority rights is found in almost every human rights forum. Minorities contribute significantly to the wealth of society, and countries that take appropriate action to protect their rights are more likely to maintain tolerance and stability. However, crimes against ethnic minorities have been on the rise. The right not to be discriminated against is paramount in protecting the rights of persons belonging to minorities in all regions of the world. Everywhere, they face direct and indirect discrimination in their daily lives. Minority rights are about ensuring respect for distinctive identities while ensuring that any differential treatment towards groups or persons belonging to such groups does not mask discriminatory practices and policies. Individuals must not be subjected to discrimination for manifesting their group identity.
The Xinjiang Uygur Autonomous Region is the only region in China with a Muslim population. In 2017, the number of people arrested in Xinjiang accounted for nearly 21% of the country's arrests, even though their number accounts for 1.5% of the total population. Statistics from the Chinese government show that from 2015 to 2018, the birth rate in Uyghur areas dropped by more than 60%. China has detained as many as 1 million Uyghurs in detention camps. Since 2017, important Islamic holy sites in the region have been demolished. Throughout 2020, reports of violence in Xinjiang have continued to rise, making it difficult for the government to deny them.
The parliaments of the United States, Canada and the Netherlands have determined that China's actions constitute genocide under international law. Therefore, we propose an urgent issue to you, as well as to the UN Human Rights Council, the promotion and protection of the rights of ethnic minorities, with special emphasis on Uighur Muslims in China.


      </h3>
      </Card.Text>
      </div>

      </Card>
      </Container>
      </div>
    );
  }
}

export default UNHRC;
