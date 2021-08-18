import React , { Component } from 'react';
import NavigationBar from './NavigationBar';
import { Card, Container } from 'react-bootstrap';
import ayaan from "../assets/ayaan.jpeg";
import saanya from "../assets/saanya.jpeg"
import harshitha from "../assets/harshitha.jpeg"


class Secretariat extends Component {
  render()
  {
    return (
      <div>
      <Container fluid>
      <NavigationBar/>
      <Card>
    <Card.Img variant="top" src={ayaan} height="800" />
    <Card.Body>
    <h1>Ayaan Singh Anand</h1>
      <Card.Text>
      He has many versatile facets to his personality. Being the city topper he excelled not only in studies but is an accomplished all-rounder.

An orator par excellence, school house prefect, captain of the Chandigarh zone chess team, member of the school tennis team and accomplished pianist are just some of the myriad hats he has worn with aplomb. He has contributed to society by spending time educating underprivileged children. An expressive persuasive speaker with an impeccable command of the language and a genial disposition, he has actively participated in many inter-school debates and recitations with enthusiasm and gusto.

A high level of independence, meticulous organizational abilities, boundless enthusiasm, and a mature approach are his forte. He has the tendency to excel at whatever he may put his mind to. His interest and in depth knowledge of global affairs is commendable and has stood him in good stead in various MUN’s he has participated in over the past few years. Ayaan has an innate ability to lead guide and shoulder responsibility.

We present to you, Ayaan Singh Anand, the Secretary - General of the SGGS Model United Nations Conference 2021.
      </Card.Text>
    </Card.Body>
  </Card>
  <br />
  <Card>
<Card.Img variant="top" src={saanya} height="1000"/>
<Card.Body>
<h1>Saanya Chhabra</h1>
  <Card.Text>
  Dedication, determination and chirpy nature are some few words that just start to describe her who is undoubtedly one of the liveliest member of the team with utmost positivity and eagerness to take any challenge be it in academics, extra curricular activities or helping others in various tasks with ever-smiling persona and positivity.

She has always engaged wholeheartedly into any task entrusted to her and has never shied from volunteering to take upon herself new arenas and not giving up till the work sees it’s completion to an indelible mark of job.

A hardcore perfectionist with excellence in academics now choosing medicine as her future authenticates her dedication, an enthusiastic graceful gymnast, strong and skilful swimmer, happy-go-lucky personality with utmost humility and compassionate persona always makes her stand out from the crowd.
We present to you Saanya Chhabra, the Director General of SGGS Model United Nations Conference 2021.
  </Card.Text>
</Card.Body>
</Card>
<br />
<Card>
<Card.Img variant="top" src={harshitha} height="1200"/>
<Card.Body>
<h1>Harshitha Pathania(Rayaan's gf)</h1>
<Card.Text>
With her impeccable poise and unwavering hold over the workings of a conference, her presence doesn't only aid any conference, instead, it propels it to greater heights.With her unparalleled leadership skills and a knack for proficiency, she never fails to transfigure any conversation into an esoteric debate. Her love for procrastination does not stop her from being our ‘jack of all trades’. Nevertheless, beyond that exterior of absolute professionalism, lies a young woman with a mettlesome attitude. A quintessential debater,always wanting to leave an indelible mark, she is also undoubtedly the ‘devil-may-care’ girl of our group. Equipped with resilience and an unwavering desire to achieve, Her calm and reposeful persona enables her to tackle and overcome every situation. an eloquent orator with excellent communication skills, she is adored for being our very own melodramatic vivacious virtuoso.
We present to you Harshitha Pathania, the Convenor of SGGS Model United Nations Conference 2021.
</Card.Text>
</Card.Body>
</Card>
<br />
</Container>




</div>
    );
  }
}

export default Secretariat;
