
import React, { Component } from 'react';
import { Card ,Row,Col,Tag} from 'antd';




class AboutUs extends Component {
  

  render() {

    
    return (
        
        <div className="AboutUs" style={{fontFamily:'Nunito, sans-serif'}}> 
 			
 			
        	<div style={{fontSize:'50px',color:'rgba(191,54,12 ,1)',textAlign:'center', background: '#ECECEC', padding: '30px 30px 30px 30px ',width:'90%',marginLeft:'auto',marginRight:'auto' }}>
			   <center> <Card title="About Coding Planet" bordered={true} style={{ }}>
			              	<span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
			              	</span>
			    </Card></center>
			  </div>

			  <div>
			  <h1>Team</h1	>
			  </div>

			  <div style={{fontSize:'50px',color:'rgba(56,142,60 ,1)',textAlign:'center', background: '#ECECEC', padding: '30px 30px 30px 30px ',width:'80%',marginLeft:'auto',marginRight:'auto' }}>
			   <center> <Card  bordered={true} style={{padding:'10px 10px 20px 10px' }}>
			   			<Card style={{width:'40%',float:'left'}}><Col span={24} pull={0} style={{border:'2px solid red'}}><img src="https://pbs.twimg.com/profile_images/822771036055666688/o82Yd3ro.jpg" width="100%"/></Col>	
			   			</Card>	
			   			<Card style={{padding:'10px 10px 10px 10px'}}>

			   			<Col span={8}><Tag color="green">Full Stack Developer</Tag></Col>
			   			<Col span={8}><Tag color="green">Software Developer  </Tag></Col>
			   			<Col span={8}><Tag color="green">Isomorphic App Developer</Tag></Col>
			   			
			   			</Card>
			   			<Card style={{padding:'10px 10px 10px 10px'}}>

			   			<Col span={8}><Tag color="green">Full Stack Developer</Tag></Col>
			   			<Col span={8}><Tag color="green">Software Developer  </Tag></Col>
			   			<Col span={8}><Tag color="green">Isomorphic App Dev.</Tag></Col>
			   			
			   			</Card>


			              	
			    </Card></center>
			  </div>


        </div>
        );

    }
};

export default AboutUs;
          