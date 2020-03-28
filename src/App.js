import React, {Component} from 'react';
import './App.css';
import axios from 'axios';

import CategoryFrame from './Components/CategoryFrame';
import Post from './Components/Post';

class App extends Component {
	state = {
		showExtendedBody:-1,
		posts:[]
	}

	extendedBodyDisplayHandler = (id) => {
			this.setState({showExtendedBody:id});
	}

	componentDidMount(){
    axios.get('https://apiservicecore.herokuapp.com/api/values')
      .then(response => {
        const posts = response.data;
        this.setState({posts: posts});
        console.log(this.state.posts);
      });
  }

	render()
	{


	const posts = this.state.posts.map(content =>{
      return (
        <div>
          <Post 
          content = {content}
          showExtendedBody = {this.state.showExtendedBody}
          extendedBodyDisplay = {(id) => {this.extendedBodyDisplayHandler(content.id)}}/>         
        </div>
      )})
   
	  return (
	    <div className="App">
	      <CategoryFrame/>
	      {posts}
	    </div>
	  );
	}
}

export default App;
