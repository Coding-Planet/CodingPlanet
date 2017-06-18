import React, { Component } from 'react'
import { Menu,Grid,Dropdown } from 'semantic-ui-react'
import {Link} from 'react-router';
import logo from './images/codingplanet.png';

let friendOptions = [
  {
    text: 'Jenny Hess',
    value: 'Jenny Hess',
    image: { avatar: true, src: '/assets/images/avatar/small/jenny.jpg' },
  }
]
export default class App1 extends Component {
  
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <div >
      <Grid>
        <Grid.Row column={16} only="tablet computer">
          <Grid.Column >
          <Menu stackable> 
            <Menu.Item name='lo'><img src={logo} /></Menu.Item>
            <Menu.Item header>Coding Planet</Menu.Item>
            <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} >
              <Link to="/">Home</Link></Menu.Item>       
            <Menu.Item name='aboutUs' active={activeItem === 'aboutUs'} onClick={this.handleItemClick} >
              <Link to="aboutUs">About Us</Link></Menu.Item> 
            <Menu.Item name='interview' active={activeItem === 'interview'} onClick={this.handleItemClick} >
              <Link to="interview">Interview</Link></Menu.Item> 
            <Menu.Item name='codingQuestions' active={activeItem === 'codingQuestions'} onClick={this.handleItemClick} >
              <Link to="dsAndAlgo">Data Structures And Algorithm</Link></Menu.Item>         
            <Menu.Item name='contactUs' active={activeItem === 'contactUs'} onClick={this.handleItemClick} >
              <Link to="contactUs">Contact Us</Link></Menu.Item> 
          </Menu>
            </Grid.Column>
          </Grid.Row>
          </Grid>

            <Grid>
        <Grid.Row centered column={12} only="mobile" style={{margin:'10px'}}>
          <Grid.Column >
            <Dropdown placeholder='Menu' fluid selection options={friendOptions} />

           </Grid.Column>
          </Grid.Row>
          </Grid>

          <div className="Content" >
          {this.props.children}
          </div>

          <footer>
          </footer>
       </div>   
    )
  }
}