import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class Pagination extends Component {
  state = { activeItem: '10' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu pagination>
        <Menu.Item name='1' active={activeItem === '1'} onClick={this.handleItemClick} />
        
        <Menu.Item name='2' active={activeItem === '10'} onClick={this.handleItemClick} />
        
      </Menu>
    )
  }
}
