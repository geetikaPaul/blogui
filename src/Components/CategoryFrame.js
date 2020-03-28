import React,{Component} from 'react';
import './CategoryFrame.css';

class CategoryFrame extends Component{
	render(){
	let categories = ["Technical", "Yoga", "Food", "Art"]

	return (
			<div>
				<ul className="CategoryFrame-ul">
					{categories.map(category => (
						<li className = "CategoryFrame-li"><a className="CategoryFrame-li-a">{category}</a></li>
						))}
				</ul>
			</div>
		)
	}
}

export default CategoryFrame;