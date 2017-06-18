import React, { Component } from 'react'
import { Sidebar, Segment, Button, Menu, Image, Icon, Header,Card,Grid,Divider } from 'semantic-ui-react'

import Sort from './Sort';
    <Image src='https://pbs.twimg.com/profile_images/794993148925722624/mtfN9pFx.jpg' style={{width:'200px',marginLeft:'auto',marginRight:'auto'}} />

const  interviewTemplate= () => (
  <Card style={{width:'100%',marginLeft:'auto',marginRight:'auto'}}>
      <br/>
      <br/>
    <Card.Content>
      <Card.Header>
        Matthew
      </Card.Header>
      <Card.Meta>
        <span className='date'>
          Expedia
        </span>
      </Card.Meta>
      <Card.Description style={{height:'100px',overflow:'hidden'}}>
        <h2>Experience: </h2>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."

What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.    
      <br/>
      <h2>Preparation: </h2>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."

What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.    
      <br/>
      <h2>Suggestions: </h2>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."

What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.    
      <br/>
      <h2>Resources: </h2>"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."
"There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain..."

What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.    
      <br/>
      </Card.Description>
      <Card.Content extra>
      
                <Divider section />

      <Button basic color="green">  <Icon name='unhide' />
        Read More..</Button>
      
    </Card.Content>
    </Card.Content>
    
  </Card>
)



class Interview extends Component {


  render() {
    return (
          <div>
            
          <Sort/>
          <Grid centered >
              <Grid.Row>
                  <Grid.Column textAlign="center" mobile="14" tablet="14" computer="14"  >
                   {interviewTemplate()} 
                   </Grid.Column>
                   <Grid.Column textAlign="center" mobile="14" tablet="14" computer="14"  >
                   {interviewTemplate()} 
                   </Grid.Column> <Grid.Column textAlign="center" mobile="14" tablet="14" computer="14"  >
                   {interviewTemplate()} 
                   </Grid.Column> <Grid.Column textAlign="center" mobile="14" tablet="14" computer="14"  >
                   {interviewTemplate()} 
                   </Grid.Column> <Grid.Column textAlign="center" mobile="14" tablet="14" computer="14"  >
                   {interviewTemplate()} 
                   </Grid.Column> <Grid.Column textAlign="center" mobile="14" tablet="14" computer="14"  >
                   {interviewTemplate()} 
                   </Grid.Column> <Grid.Column textAlign="center" mobile="14" tablet="14" computer="14"  >
                   {interviewTemplate()} 
                   </Grid.Column> <Grid.Column textAlign="center" mobile="14" tablet="14" computer="14"  >
                   {interviewTemplate()} 
                   </Grid.Column> <Grid.Column textAlign="center" mobile="14" tablet="14" computer="14"  >
                   {interviewTemplate()} 
                   </Grid.Column> <Grid.Column textAlign="center" mobile="14" tablet="14" computer="14"  >
                   {interviewTemplate()} 
                   </Grid.Column>  
                    
              </Grid.Row>

          </Grid>

          </div>
    )
  }
}

export default Interview;