import React, { Component } from 'react';
import Noty from 'noty';
import './FilterControls.scss';
import 'noty/src/noty.scss';
import 'noty/src/themes/mint.scss';
class FilterControls extends Component{
	constructor(props){
		super(props);
		this.resetFilters = this.resetFilters.bind(this);
	}
	resetFilters(){
		new Noty({
          timeout: 3000,
          text: 'Filters have been reset!',
          type: 'success',
        }).show();
        this.props.resetFilters();
	}
	render(){
		const { visible, openFilterHandler, resetFilters, filterApplied } = this.props;
		return(
			<section className="FilterControls flexbox">
				<button onClick={ openFilterHandler } className={ visible ? 'flexbox App__btn App__btn--active':'flexbox App__btn'}>
					<span className="App__btnicon">
						<svg height="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"> <path d="M8,12.14V2H6V12.14a4,4,0,0,0,0,7.72V30H8V19.86a4,4,0,0,0,0-7.72ZM7,18a2,2,0,1,1,2-2A2,2,0,0,1,7,18Z"></path> <path d="M17,20.14V2H15V20.14a4,4,0,0,0,0,7.72V30h2V27.86a4,4,0,0,0,0-7.72ZM16,26a2,2,0,1,1,2-2A2,2,0,0,1,16,26Z"></path> <path d="M29,8a4,4,0,0,0-3-3.86V2H24V4.14a4,4,0,0,0,0,7.72V30h2V11.86A4,4,0,0,0,29,8Zm-4,2a2,2,0,1,1,2-2A2,2,0,0,1,25,10Z"></path> </svg>
					</span>
					Filters
				</button>
				{
					filterApplied ?
					<button onClick = { this.resetFilters } className="App__btn flexbox">
						Reset Filters
					</button>
					: null
				}
			</section>
		)
	}
}
export default FilterControls;