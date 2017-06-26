import React, { Component } from 'react'
import { Card,Icon,Grid,Header ,Divider, Button, Reveal,Segment} from 'semantic-ui-react'
import { Input } from 'semantic-ui-react'
import { Image} from 'semantic-ui-react'




const head = () => (<div style={{marginLeft:'37%'}}>
		<Segment raised size='massive' circular='true' inverted='true' >
 			 Better yet, drop us a message! 
		</Segment>
		</div>
	)
	
const fb = () => (
		 <Button color='facebook' size='big' style={{marginTop:'3%', marginLeft:'30%'}}>
      <Icon name='facebook' /> Facebook
    	<a href= "https://www.facebook.com/codingplanet0"/>
    		</Button>
	)
const gp = () => (
			<Button color='google plus' size='big' style={{marginLeft:'3%'}}  >
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
    	});
  	}
	render() {
		return(
		<div style={{backgroundImage:'url(https://cdn2.tnwcdn.com/wp-content/blogs.dir/1/files/2015/06/design-1200x633.jpg)', backgroundSize:'100%'}}>
			<div> {head()}
			{fb()}
			{gp()}
				<Button primary size='big' style={{marginLeft:'3%'}} onClick={this.onButtonClick}> Submit here </Button>
				{
					this.state.showComponent? 
			<div style={{ textAlign:'center'}}> <Input   style={{marginTop:'2%',display:'block'}}
    			label={{ basic: true, content: 'Name' }}
	    		labelPosition='left'
    			placeholder='Enter name...'
	    		size='big'
		  		/>
 		 	<Input   style={{marginTop:'1%' ,display:'block'}}
    		label={{ basic: true, content: 'Email' }}
    		labelPosition='left'
    		placeholder='Enter email...'
    		size='big'
  			/>
  			<Input style={{marginTop:'1%',display:'block'}}
    		label={{ basic: true, content: 'Query' }}
    		labelPosition='left'
    		placeholder='.......'
    		size='big'
 			/>
 			<Button style={{marginTop:'1%'}} positive >Submit</Button>
 		</div>: null
		}
	</div>
		</div>
		);
	}
};
export default contactUs