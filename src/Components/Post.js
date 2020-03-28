import React, {Component} from 'react';
import './Post.css';

class Post extends Component{
	render(){		
		console.log(this.props.content.title)
		return(
			<div className = "Post">
				<h3>{this.props.content.title}</h3>
				<p>{this.props.content.body}
				{this.props.showExtendedBody!=this.props.content.id ? <span onClick = {this.props.extendedBodyDisplay}>Read More...</span>: null}
		  		{this.props.showExtendedBody==this.props.content.id ? <span>{this.props.content.extendedBody}</span>: null}	</p>		
			
			</div>
		)
	}
}

export default Post;