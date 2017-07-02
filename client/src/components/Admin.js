import React, { Component } from 'react';
import { Grid, Card,Icon, Button} from 'semantic-ui-react';
import AdminPost from './AdminPost';
import AdminInterview from './AdminInterview';
import AdminQuestion from './AdminQuestion';
import AdminHome from './AdminHome';
import '../index.css';
class Admin extends Component {

	state={nav:1,
		   question:false,
			interview:false,
			home:true}
 
	  	nav = () => {

  
  	return <div>
  	<Grid centered stackable><Grid.Row>
  	<Grid.Column  tablet="4" computer="4" mobile="16">
  	<Button onClick={this.handleNav} style={{width:'100%'}}
      content='Home' icon='home' labelPosition='left' /></Grid.Column>

      <Grid.Column tablet="4" computer="4" mobile="16">
    <Button onClick={this.handleNav} style={{width:'100%'}}
      content='Post' icon='feed' labelPosition='left' /></Grid.Column>

      <Grid.Column tablet="4" computer="4" mobile="4">
    <Button onClick={this.handleNav} style={{width:'100%'}}
      content='Question' icon='question' labelPosition='left' /></Grid.Column>

      <Grid.Column tablet="4" computer="4" mobile="4">
    <Button onClick={this.handleNav} style={{width:'100%'}}
      content='Interview' icon='user' labelPosition='left' /></Grid.Column>

    </Grid.Row>
    </Grid>  
    
  </div>;
}
	handleNav = (e,data) => {
				console.log(data);

		if (data.content === 'Home'){	
			console.log('show called');

			this.setState({post:false,
		   question:false,
			interview:false,
			home:true,
			nav:1})
		}
		else if (data.content === 'Post') {
							console.log('show called');

			this.setState({post:true,
		   question:false,
			interview:false,
			home:false,
			nav:2})


		}
		else if (data.content === "Question") {
			this.setState({post:false,
		   question:true,
			interview:false,
			home:false,
			nav:3})


		}
		else if (data.content === "Interview") {
			this.setState({post:false,
		   question:false,
			interview:true,
			home:false,
			nav:4})


		}
	}

	show = () => {

		if(this.state.interview){
			return <AdminInterview />
		}
		else if(this.state.post){
			return <AdminPost />
		}

		else if(this.state.question) {
			return <AdminPost/>
		}

		else if(this.state.question){

			return <AdminQuestion />
		}

		return <AdminHome/>;

	}


  render() { 
    return (
        
        <div className="Admin" >
       	<p className="pHead" style={{textAlign:'center',paddingTop:'50'}}>CP Admin Panel</p>
        <div className="AdminNav">{this.nav()}</div>

        <div className="AdminBody">
        {this.state.nav ? this.show() : null}
        </div>

        </div>
        );
    }
};

export default Admin;
          