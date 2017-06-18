import React, { Component } from 'react';
import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/c_cpp';
import 'brace/ext/searchbox';
import {split} from 'react-ace';
import 'brace/theme/monokai';
import 'brace/ext/language_tools';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import { Button } from 'antd';
import store from '../store/index.js';

let source='';

function onChange(newValue) {
	source=newValue;
	console.log(source);

}


var hackerEarth=require('hackerearth-node'); //require the Library
//Now set your application 
var hackerEarth=new hackerEarth(
                                '7366292cc87cab6c4528ffc9ad57a211fc4f8aef',  //Your Client Secret Key here this is mandatory
                                '0'  //mode sync=1 or async(optional)=0 or null async is by default and preferred for nodeJS
);

let res;
function compile(){


	var config={};
config.time_limit=1;  //your time limit in integer
config.memory_limit=323244;  //your memory limit in integer
config.source=source;  //your source code for which you want to use hackerEarth api
config.input="";  //input against which you have to test your source code
config.language="C++";

	




hackerEarth.compile(config)
                        .then(result => {
                          //Handle Result
                          hackerEarth.run(config)
                    .then(result => result).then(result=>{
                    	console.log('result mil gaya');
                    	
                    	store.dispatch({type:'run',payload:result})
                      //Handle Result
                    })
                    .catch(err => {
                      //Handle Error
                      console.log(err);
                    });
                        })
                        .catch(err => {
                          //Handle Error
                          console.log(err.message);
                        });


}




class Editor extends Component {


  

  show=()=>{

  	if(this.props.CompileAndRun.run_status!=undefined){
  	return <div><h3>Status:</h3> <h4>{this.props.CompileAndRun.run_status.status}</h4>
  				<h3>Output:</h3><h4>{this.props.CompileAndRun.run_status.output}</h4>	
  			</div>;
  }
  }

  render() {
  

  	
  	
  	
    return (
        
        <div className="Editor">

        	<h1>Editor</h1>
        	<AceEditor
			    mode="c_cpp"
			    theme="monokai"
			    split={2}
			    searchbox
			    name="editmy"
			    onChange={onChange}
			    orientation="below"
			    highlightActiveLine={true}
			    value="Start Coding ......"
			    name="UNIQUE_ID_OF_DIV"
			    editorProps={{$blockScrolling: Infinity}}
			    enableLiveAutocompletion={true}
			    enableBasicAutocompletion={true}

			    style={{width:'80%',fontSize:'30px',padding:'20px 0 20px 0',marginLeft:'auto',marginRight:'auto',height:'70vh',marginBottom:'20px'}}
			  />

			      <Button type="primary" onClick={compile}>Compile</Button>
			      <h1>Result</h1>	
			      {this.show()}

        </div>
        );

    }
};

function mapStateToProps(state) {
  return {
    CompileAndRun: state.CompileAndRun
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({}, dispatch),
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
