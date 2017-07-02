import React, { Component } from 'react';
import { Dropdown,Form, Input, TextArea} from 'semantic-ui-react';

const category = [ { key: 'WD', value: 'WD', text: 'Web Development' },{ key: 'D', value: 'D', text: 'Data Structures' },{ key: 'AL', value: 'AL', text: 'Algorithm' },{ key: 'Design', value: 'Design', text: 'Design' }  ]


class AdminPost extends Component {

	formDisplay = () => (
  <Form>
    <Form.Field required>
      <label>Title</label>
      <Input placeholder='Enter Title...' />
    </Form.Field>

    <Dropdown placeholder='Category' search selection options={category} />


    <Form.TextArea label='Content' placeholder='Tell us more about this...' />

    <Form.Field required>
      <label>Author</label>
      <Input placeholder='Author' />
    </Form.Field>



  </Form>
)
  render() {
 
    return (
        
        <div className="" style={{width:'40%'}}>

        {this.formDisplay()}
       
        </div>
        );
    }
};

export default AdminPost;
          