import React, {Component} from 'react';
import './App.css';
import axios from 'axios';

import CategoryFrame from './Components/CategoryFrame';
import Post from './Components/Post';

class App extends Component {
	state = {
		showExtendedBody:-1,
		posts:[],
		categories:[],
		selectedCategory:""
	}

	extendedBodyDisplayHandler = (id) => {
			this.setState({showExtendedBody:id});
	}

	componentDidMount(){
		axios.get('http://localhost:50455/api/values/GetCategories')
	      .then(response => {
	        const categories = response.data;
	        this.setState({categories:categories});
	        this.setState({selectedCategory:categories[0]});

	    	axios.get('http://localhost:50455/api/values/GetByCategory?selectedCategory='+this.state.selectedCategory)
	      	.then(response => {
	        const posts = response.data;
	        this.setState({posts: posts});
	      });
	    });		

  	}

  	componentDidUpdate(prevProps, prevState){
  		if (prevState.selectedCategory!== this.state.selectedCategory) {
		    axios.get('http://localhost:50455/api/values/GetByCategory?selectedCategory='+this.state.selectedCategory)
		      .then(response => {
		        const posts = response.data;
		        this.setState({posts: posts});
		      });
	  }
  	}

  	categoryChangeHandler = (category) =>{
    	this.setState({selectedCategory: category});
    }

	render()
	{
		const posts = this.state.posts.length>0 ? this.state.posts.map(content =>{
	      return (
	        <div>
	          <Post 
	          content = {content}
	          showExtendedBody = {this.state.showExtendedBody}
	          extendedBodyDisplay = {(id) => {this.extendedBodyDisplayHandler(content.id)}}/>         
	        </div>
	      )}) : <div className="NoData">No data Available</div>
	   
		  return (
		    <div className="App">
		      <CategoryFrame categories = {this.state.categories} categoryChangeHandler={this.categoryChangeHandler} />
		      {posts}
		    </div>
		  );
	}
}

export default App;
