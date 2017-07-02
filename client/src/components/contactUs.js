import React, { Component } from 'react'
import { Card,Icon,Grid,Header ,Divider, Button, Reveal,Segment} from 'semantic-ui-react'
import { Input,input } from 'semantic-ui-react'
import { Image} from 'semantic-ui-react'




const head = () => (<div style={{textAlign:'center',marginLeft:'auto',marignRight:'auto',padding:'20px'}}>
		<center><Segment raised size='big' circular='true' inverted='true' >
 			 Better yet, drop us a message! 
		</Segment></center>
		</div>
	)
	
const fb = () => (
		 <Button color='facebook' size='big' style={{textAlign:'center',marginLeft:'auto',marignRight:'auto',padding:'20px'}}>
      <Icon name='facebook' /> Facebook
    	<a href= "https://www.facebook.com/codingplanet0"/>
    		</Button>
	)
const gp = () => (
			<Button color='google plus' size='big' style={{textAlign:'center',marginLeft:'auto',marignRight:'auto',padding:'20px'}}  >
      <Icon name='google plus' /> Google Plus
      <a href= "https://www.facebook.com/codingplanet0"/>
    </Button>
	)

class contactUs extends Component {

	constructor(props) {
    super(props);
    
    this.state = {
      showComponent: false,
    };

    this.onButtonClick = this.onButtonClick.bind(this);
  	
  	}

	onButtonClick() {
    	this.setState({
      	showComponent: true,
      	name:'',
      	email:'',
      	query:'',
      	nameError:0,
      	emailError:0,
      	queryError:0.
    	});
  	}

  	name = (e) => {
  		this.setState({name:e.target.value});
  	}

  	email = (e) => {
  		this.setState({email:e.target.value});
  	}

  	query = (e) => {
  		this.setState({query:e.target.value});
  	}

  	send = () => {

  		let error=0;

  		if(this.state.name === ''){
  			error=1;

  		}
  		if(this.state.email === ''){
  			error=1;

  		}
  		if(this.state.query === ''){
  			error=1;

  		}

  		if (error) {
  			console.log('error');

  		}
  		else
  		{
  			console.log('success');
  		}	




  	}

	render() {
		return(
    <div style={{backgroundColor:'black'}}>
		<div  style={{opacity:'0.5',minHeight:'90vh',backgroundImage:'url(https://static.pexels.com/photos/230557/pexels-photo-230557.jpeg)', backgroundSize:'100%',backgroundRepeat:'no-repeat'}}>
			<div  >  
			<center> {head()} </center><br/>
			<center> {fb()} </center><br/>
			<center> {gp()} </center><br/>
				
			<center><Button primary size='big' style={{textAlign:'center',marginLeft:'auto',marignRight:'auto',padding:'20px'}} onClick={this.onButtonClick}> Submit here </Button></center>
				{this.state.showComponent? 
			<div style={{textAlign:'center',marginLeft:'auto',marignRight:'auto',padding:'20px'}}> <Input onChange={this.name} style={{marginTop:'2%',display:'block'}} label={{ basic: true, content: 'Name' }} labelPosition='left' placeholder='Enter name...' size='big' />
 		 	
 		 	<Input  onChange={this.email}   iconPosition='left'  placeholder='Enter email...' size='big'> <Icon name='at' />
      <input /></Input>
  			
  			<Input onChange={this.query} style={{marginTop:'1%',display:'block'}} label={{ basic: true, content: 'Query' }} labelPosition='left' placeholder='.......' size='big' />
 			
 			<Button style={{marginTop:'1%'}} positive onClick={this.send}>Submit</Button>
 		</div>: null }
		</div>
	</div>
  </div>
		);
	}
};
export default contactUs