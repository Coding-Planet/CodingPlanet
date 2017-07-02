import React, { Component } from 'react';
import { Segment, Statistic } from 'semantic-ui-react'

const items = [
  { label: 'Users', value: '22' },
  { label: 'Vistors', value: '31,200' },
  { label: 'Posts', value: '22' },
  { label: 'Questions', value: '3,200' },
  { label: 'Interviews', value: '10,000' },
  { label: 'Likes', value: '10,000' },
  { label: 'Comments', value: '10,000' }, 
  { label: 'Admin', value: '10,000' }, 
  { label: 'Forum Post', value: '10,000' },    
]
class AdminHome extends Component {
  	stats= () => (
  <Segment >
    <center><Statistic.Group horizontal size='small' widths='three' items={items}   /></center>

  </Segment>
)


  render() {

 

 
    return (
        
        <div className="AdminHome"  style={{marginTop:'50px',marginLeft:'auto',marginRight:'auto',opacity:'0.6',color:'white'}}>
       	{this.stats()}
        </div>
        );
    }
};

export default AdminHome;
          