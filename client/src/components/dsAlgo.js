import React, { Component } from 'react'
import { Card,Icon,Grid,Header ,Divider, Button, Reveal,Segment} from 'semantic-ui-react'
import { Input, Table } from 'semantic-ui-react'
import { Image} from 'semantic-ui-react'
import logo from '../images/codingplanet.png'
import {Link} from 'react-router'
import Home from './Home'


const practice = () =>
(	<div>
	<Card fluid color='black' raised='true' style={{width:'80%',marginLeft:'auto',marginRight:'auto'}}>
		<Card.Content>
			<Card.Header style={{color:'teal',textAlign:'center',fontSize:'30', fontFamily: 'sans-serif'}}>
			Data Structures and Algorithms
			</Card.Header>
		</Card.Content>
	</Card>
	<Card fluid color='blue' style={{width:'94%',marginLeft:'auto',marginRight:'auto'}}>
		<Card.Content>
		<Image floated="left" src={logo} href="www.google.com" style={{height:'8%',width:'8%'}}/>
		<Card.Header style={{textAlign:'left',fontSize:'30'}}>     Practice here</Card.Header>
		<Card.Meta ><b>This section is to practice problems and improve your coding skills. We have added some quality problems here which will strengthen your understanding of the concept associated with it.</b></Card.Meta>
		</Card.Content>
	</Card>
	</div>
)
const tabq = () =>
(
	<Table celled structured color='teal' inverted size='large' style={{fontFamily:'sans-serif',width:'94%',marginLeft:'auto',marginRight:'auto'}}>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell width={1}>Id</Table.HeaderCell>
          <Table.HeaderCell width={5}>Name</Table.HeaderCell>
          <Table.HeaderCell width={3}>Category</Table.HeaderCell>
          <Table.HeaderCell width={2}>Difficulty level</Table.HeaderCell>
          <Table.HeaderCell width={1}>Submissions</Table.HeaderCell>
          <Table.HeaderCell width={10}>Resources </Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      
    </Table>

)

class dsAlgo extends Component{
	render()
	{
		return (
			<div>
				{practice()}
				{tabq()}
			</div>
		);

	}
};
export default dsAlgo