import React, {Component} from 'react';
import './Post.css';
import renderHTML from 'react-render-html';

class Post extends Component{
	render(){		
		console.log(this.props.content.body)
		return(
			<div className = "Post">
				<h3>{this.props.content.title}</h3>
				<div>{renderHTML(this.props.content.body)}
				{this.props.showExtendedBody!=this.props.content.id ? <span onClick = {this.props.extendedBodyDisplay}>Read More...</span>: null}
		  		{this.props.showExtendedBody==this.props.content.id ? <span>{renderHTML(this.props.content.extendedBody)}</span>: null}	</div>		
			
			</div>
		)
	}
}

export default Post;