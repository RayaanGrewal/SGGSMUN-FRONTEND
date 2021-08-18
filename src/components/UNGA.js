import React , { Component } from 'react';
import NavigationBar from './NavigationBar';
import unga from '../assets/unga.jpeg'
import {Container, Image, Card} from 'react-bootstrap'

class UNGA extends Component {
  render()
  {
    return (
      <div>
      <NavigationBar/>
      <Container fluid>
            <Image src={unga} width="100%" height="100%"/>
            <Card className="bg-white text-black justify-content-center" >


        <div className="pd-3" >
          <Card.Title className="mb-3 mt-3"><h1>United Nations General Assembly (UNGA DISEC)

      </h1></Card.Title >
      <Card.Text className="mt-3">
          <h3 className="mt-3 ">One of the six principal organs of the United Nations which started as 51 nation-states coming together as a step towards world peace, has now blossomed into a body with 193 member states, who come together and serve as the main deliberative, policy-making, and representative organ of the UN. We present to you, our first committee, the United Nations General Assembly.

</h3>
<h1 className="mb-3 mt-3">Agenda: Yemen war
</h1><br/><h3>
Yemen has been ripped apart by several armed wars for over a decade, to which several local militant organisations and other states have contributed. The central government has been weakened as a result of these conflicts. Aside from geopolitical considerations, the breakdown of Yemeni institutions throughout the war has exacerbated terrible living circumstances in what has long been the most impoverished Arab country, leading to what is now considered the world’s worst humanitarian crisis.
After “the Saudi-led coalition” launched a military offensive aimed at restoring Hadi’s rule and dislodging Houthi fighters from the capital and other major cities in 2015, a major conflict began.  Over the next five years, the violence engulfed the entire country, resulting in a proliferation of conflict parties, including a number of Coalition-backed armed organisations.  This conflict has led to the death of thousands and has caused significant humanitarian suffering while heavily damaging the country’s infrastructure. As the conflict in Yemen approaches its sixth year, civilians from all across the nation and across generations continue to bear the brunt of military hostilities and illegal acts by both state and non-state armed groups.
Throughout the country, grave human rights violations, including what could be considered war crimes, are occurring. Through arbitrary incarceration, enforced disappearance, harassment, torture and other forms of ill-treatment, and unfair prosecutions, all parties to the conflict have suppressed freedom of expression and association. COVID-19 was spread by conditions in jails and detention centres, including mass overcrowding of holding cells, insufficient access to health care, enough food, clean water, and sanitation.
An estimate as of November 2020 states that more than 130,000 Yemenis have been killed since 2015. We bring to you an extremely pressing issue, and the agenda of UNGA (DISEC), The Yemen War.
</h3>
      </Card.Text>
      </div>

      </Card>
      </Container>
      </div>
    );
  }
}

export default UNGA;
