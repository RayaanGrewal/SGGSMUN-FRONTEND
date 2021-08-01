import React , { Component } from 'react';
import NavigationBar from './NavigationBar';
import ecosoc from '../assets/ecosoc.jpg';
import {Container, Image, Card} from 'react-bootstrap'


class ECOSOC extends Component {
  render()
  {
    return (
      <div>
        <NavigationBar/>
        <Container fluid>
              <Image src={ecosoc} width="100%" height="100%"/>
              <Card className="bg-white text-black justify-content-center" >


          <div className="pd-3" >
            <Card.Title className="mb-3 mt-3"><h1>Economic and Social Council (ECOSOC)

        </h1></Card.Title >
        <Card.Text className="mt-3">
            <h3 className="mt-3 ">It is one of the six main organs of the United Nations System and was formed by the UN Charter in 1945. It brings together the fourteen United Nations specialised agencies, functional commissions, and five regional commissioners to coordinate economic, social, and related work. It is the primary platform for addressing worldwide economic and social concerns, as well as producing policy recommendations for the Member States and the UN system. Thus we bring to you our fourth committee, The Economic and Social Council.
</h3>
  <h1 className="mb-3 mt-3">Agenda: Rebuilding the Global Economic Dynamics Post COVID, Keeping in Mind the SDGs 2030
</h1><br/><h3>
  Amid the unravelling COVID19 crisis, the international community has found itself facing unprecedented challenges. The pandemic is changing the world as we know it. It has disrupted the implementation of many sustainable development goals and, in some cases, has delayed years of progress. This crisis has affected all segments of the population, all sectors of the economy and all regions of the world. However, the monetarily underprivileged have been the worst hit. Had the world been on track to achieve the 2030 Agenda, it would have also been better prepared to deal with the pandemic.
The impact of the pandemic and the measures taken to mitigate its impact have overwhelmed the global health system. It has kept up to 90 per cent of students out of school. Businesses and factories have shut down and global value chains disrupted. and the supply of products. It is expected that 71 million people will be pushed back into extreme poverty and 32 million more will suffer from undernourishment.
In 2020, the world faced the worst economic recession since the Great Depression and GDP per capita is expected to fall by 4.2%. World trade is expected to fall by 13% to 32%. The situation in the most vulnerable countries is worse. It is estimated that foreign direct investment may fall by 40%, and remittances to low- and middle-income countries may fall by 20%. COVID-19 has also resulted in 400 million people losing their jobs. This pandemic has highlighted harsh and significant inequalities in our communities and is further worsening existing gaps within and among countries. It is extremely important that we address this grave issue. Thus the agenda for ECOSOC is Rebuilding the Global Economic Dynamics Post COVID, Keeping in Mind the SDGs 2030

</h3>
        </Card.Text>
        </div>

        </Card>
        </Container>

      </div>
    );
  }
}

export default ECOSOC;
