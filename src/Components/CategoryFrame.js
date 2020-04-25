import React,{Component} from 'react';
import './CategoryFrame.css';

class CategoryFrame extends Component{
	render(){
	return (
			<div>
				<ul className="CategoryFrame-ul">
					{this.props.categories.map(category => (
						<li className = "CategoryFrame-li">
							<a className="CategoryFrame-li-a" onClick = {() => this.props.categoryChangeHandler(category)}>{category}
							</a>
						</li>
						))}
				</ul>
			</div>
		)
	}
}

export default CategoryFrame;