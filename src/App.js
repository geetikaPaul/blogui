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
		selectedCategory:"",
		loading:true,
		resumeLink:""
	}

	extendedBodyDisplayHandler = (id) => {
			this.setState({showExtendedBody:id});
	}

	componentDidMount(){
		axios.get('https://apiservicecore.herokuapp.com/api/values/GetCategories')
	      .then(response => {
	        const categories = response.data;
	        this.setState({categories:categories});
	        this.setState({selectedCategory:categories[0]});

	    	axios.get('https://apiservicecore.herokuapp.com/api/values/GetByCategory?selectedCategory='+this.state.selectedCategory)
	      	.then(response => {
	        const posts = response.data;
	        this.setState({posts: posts});
	        this.setState({loading: false});
	      });
	    });	

	    axios.get('https://apiservicecore.herokuapp.com/api/values/GetResume')
	      	.then(response => {
	        this.setState({resumeLink: response.data});
	      });	

  	}

  	componentDidUpdate(prevProps, prevState){
  		if (prevState.selectedCategory!== this.state.selectedCategory) {
		    axios.get('https://apiservicecore.herokuapp.com/api/values/GetByCategory?selectedCategory='+this.state.selectedCategory)
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
		      <CategoryFrame categories = {this.state.categories} resumeLink = {this.state.resumeLink} categoryChangeHandler={this.categoryChangeHandler} />
		      {this.state.loading ? <div className="NoData"> Loading... </div> : null}
		      {!this.state.loading ? posts : null}
		    </div>
		  );
	}
}

export default App;
