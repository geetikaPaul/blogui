import React, {Component} from 'react';

import Post from './Post';

class Posts extends Component{
		render(){
		
		return(
			<div>
				{
					this.props.contents && this.props.contents.length>0 ?  
					this.props.contents.map(content => (
						<Post 
							content = {content} 
							showExtendedBody = {this.props.showExtendedBody} 
							extendedBodyDisplay = {this.props.extendedBodyDisplay}/>
					)) :
					console.log('no data')
				}
			</div>
		)
	}
}

export default Posts;