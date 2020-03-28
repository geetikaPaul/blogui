import React, {Component} from 'react';

import Post from './Post';

class Posts extends Component{
		render(){
		
		return(
			<div>
				{this.props.contents.map(content => (
					<Post content = {content} showExtendedBody = {this.props.showExtendedBody} extendedBodyDisplay = {this.props.extendedBodyDisplay}/>
				))}
			</div>
		)
	}
}

export default Posts;