import React, { Component } from 'react';
import { Card,Icon,Grid,Header ,Divider} from 'semantic-ui-react'
import logo from '../images/codingplanet.png';



const aboutOrg = () => (
  <Card
    
    header='Why we have started Coding Planet?'
    fluid color='green'
    description='We are a team of coders/developers and we have started Coding Planet with the aim of providing one stop platform for students/developers where they can find good quality material to boost up their coding skills. We will be providing best available resources at one point with guidance from mentors. We will be having a forum where you can ask your queries related to coding from the team and mentors we are having with us.'

    style={{width:'80%',marginLeft:'auto',marginRight:'auto',textAlign:'center',marginTop:'10em'}}
  />
)

const extra = (
  <a>
    <Icon name='user' />
    
  </a>
)

const rahul = () => (
  <Card
    image={logo}
    header='Rahul Rana'
    meta='Full Stack Developer'
    description='I am final year Computer Engineering Student at NSIT.I love developing web apps in free time. I believe in sharing knowledge and growing together.'
    
  />
  )
const utsav = () => (
  <Card
    image={logo}
    header='Utsav Goel'
    meta='Full Stack Developer'
    description='I am a pre-final year Engineering Student at NSIT. I love developing web apps in free time. I believe in sharing knowledge and growing together.'
    
  />
  )
  



class AboutUs1 extends Component {
  

  render() {

    
    return (
        
        <div className="AboutUs" >

        	{aboutOrg()}

        	<Header as='h2' icon textAlign='center'>
		      <Icon name='users' circular />
          
		      <Header.Content>
		            <Divider horizontal style={{width:'80%',marginLeft:'auto',marginRight:'auto'}}>Team</Divider>
		      </Header.Content>
		    </Header>

        	<Grid centered textAlign='center'     style={{width:'80%',marginLeft:'auto',marginRight:'auto',textAlign:'center'}}>
			      <Grid.Column   textAlign='center' mobile={8} tablet={8} computer={5}>
			       	{rahul()}
			      </Grid.Column>
			      <Grid.Column textAlign='center' mobile={8} tablet={8} computer={5}>
			       	{utsav()}
			     </Grid.Column>
			      
			      
			</Grid>      


        </div>
        );

    }
};

export default AboutUs1;
          