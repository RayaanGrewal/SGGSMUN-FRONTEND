import React , { Component } from 'react';
import NavigationBar from './NavigationBar';
import unsc from '../assets/unsc.jpeg';
import {Container, Image, Card} from 'react-bootstrap';

class UNSC extends Component {
  render()
  {
    return (
      <div>
      <NavigationBar/>
      <Container fluid>
            <Image src={unsc} width="100%" height="100%"/>
            <Card className="bg-white text-black justify-content-center" >


        <div className="pd-3" >
          <Card.Title className="mb-3 mt-3"><h1>United Nations Security Council (UNSC)
      </h1></Card.Title >
      <Card.Text className="mt-3">
          <h3 className="mt-3 ">Arguably one of the most important organs of the UN, it holds the primary responsibility to maintain international peace and security. It is the only council with the power to make decisions that member states are obligated to implement. We present to you our second committee, the United Nations Security Council.</h3>
          <h3>
<h1 className="mb-3 mt-3">Agenda: Reviewing Actions of Aggression and Breaches of Peace in Context of Chapter 7 of the UN Charter</h1><br/>
The framework within which the Security Council may take enforcement measures shall be provided for and in Chapter VII of the Charter of the United Nations. The Commission permits the Council "to identify and suggest or recur to non-military and military actions to preserve or to restore global peace or security, or any danger to peace, breaching the peace or act of aggression."  The Security Council has the power to preserve the framework of common protection by means of a far-reaching authority and fewer limits under Chapter VII of the UN Charter.
In Chapter VII's interests, the Council's tasks should only be based on collective security issues, i.e. it is not intended to function as a "law-enforcing body". Only its core scope of activity should be fulfilled: peace-keeping and security. The character of its abilities is exemplified in accordance with Chapter VII's individual articles, as well as with the following chapters' implications.
Chapter VII resolutions are rarely taken as a stand-alone measure. A resolution urging that the crisis be terminated is frequently the first response to a catastrophe. This is only followed by a Chapter VII resolution that outlines the steps that must be taken to ensure that the first resolution is followed. In the past, there have been a few instances where chapter VII interventions were required. In the past, there have been a few instances where chapter VII interventions were required. Chapter VII interventions are included in UN Security Council Resolutions 678, 1973, 1267, 82, and 502, as well as the Oil-for-Food Program (Iraq), the Special Tribunal for Lebanon, and others. Thus, we present to you the agenda for the UNSC Reviewing Aggression and Breach of Peace in the Context of Chapter 7 of the UN Charter.

      </h3>
      </Card.Text>
      </div>

      </Card>



      </Container>
      </div>
    );
  }
}

export default UNSC;
