import React, {Component} from 'react';
import './Post.css';
import renderHTML from 'react-render-html';

class Post extends Component{
	render(){
		return(
			<div className = "Post">
				<h3>{this.props.content.title}</h3>
				<div>{renderHTML(this.props.content.body)}
				{this.props.content.extendedBody.length>0 && this.props.showExtendedBody!=this.props.content.id ? <span onClick = {this.props.extendedBodyDisplay}>Read More...</span>: null}
		  		{this.props.showExtendedBody==this.props.content.id ? <span>{renderHTML(this.props.content.extendedBody)}</span>: null}	</div>		
			
			</div>
		)
	}
}

export default Post;