import React , { Component } from 'react';
import NavigationBar from './NavigationBar'
import CarouselComponent from './CarouselComponent'
import {Card} from 'react-bootstrap'

class Home extends Component {
  render()
  {
    return (
      <div className="mb-0">
      <NavigationBar/>
      <CarouselComponent/>


      <Card className="bg-white text-black justify-content-center" >


  <div className="pd-3" >
    <Card.Title className="mb-3 mt-3"><h1>About the conference
</h1></Card.Title >
<Card.Text className="mt-3">
    <h3 className="mt-3 ">Sri Guru Gobind Singh Collegiate Public School is back with the third edition of the SGGS-MUN. At SGGS, we believe that the youth of today is the key to moving towards a better, brighter future. Innovative ideas, critical thinking skills and a strong character, are just some of the things we hope the delegates will take away from this conference. The SGGSMUN is more than just a two-day event where people come to debate. It is a learning experience. Its goal is to help students think about and address some of the most difficult challenges that the world has ever faced.
We believe that words have the power to inflict real change in the world and our goal is to introduce students to a situation of international negotiation as well as the tangible facts of the topics they will be discussing in a formal, diplomatic manner. There is no such thing as too young to learn, and SGGS-MUN will provide a platform for young and motivated minds to address important world topics while also helping to instil skills such as public speaking, critical thinking, and diplomatic deliberation. This conference will assist delegates in gaining a better grasp of global concerns, overcoming numerous complexities, and developing ideas for the betterment of humanity.
This MUN promises a whole new level of debate and experience that will make an indelible mark on your thoughts. Therefore, after two extremely successful conferences, we present to you, the third edition of the  SGGS-MUN conference. Come along with us as we grow into better, more aware citizens.We look forward to hosting you.
</h3>
</Card.Text>
</div>

</Card>


</div>
    );
  }
}

export default Home;
