import React, { Component } from 'react';
import UserSelect from '../UserSelect/UserSelect';
import './SearchForm.scss';
class SearchForm extends Component{
	constructor(props){
		super(props);
		this.state = {
			frmForce: '',
			frmNBD: ''
		}
		this.updateSelection = this.updateSelection.bind(this);
	}
	updateSelection( selection ){
		console.log(selection)
		// this.setState({
		// 	[evt.target.name] : evt.target.value
		// });
	}
	render(){
		const { 
			onSubmitHandler, 
			tagline, 
			//forceChangeHandler, 
			//nbdChangeHandler, 
			forceData, 
			nbdData,
			selectedForce,
			selectedNBD
		} = this.props;
		return (
			<form onSubmit={ onSubmitHandler } className="SearchForm">
	            <p className="tagline">{tagline}</p>
	            <div className="flex">
	              <UserSelect
	                placeholder='Please select a force...'
	                name = 'frmForce'
	                {/*handleChange = { this.handleChange }*/}
	                updateSelection = {this.updateSelection}
	                currSelection = { selectedForce }
	                data = { forceData }
	                dataKeyName = 'id'
	                dataValueName = 'name'
	                emptyMessage = 'Getting forces data...' />
	              <UserSelect
	                placeholder='Please select a neighbourhood...'
	                name = 'frmNBD'
	                updateSelection = {this.updateSelection}
	                {/*handleChange = { this.handleChange }*/}
	                data = { nbdData }
	                currSelection = { selectedNBD }
	                dataKeyName = 'id'
	                dataValueName = 'name'
	                emptyMessage = 'Select a force to continue' />
	              <button className="App__btn" type="submit">Search</button>
	            </div>
          	</form>
		);		
	}
}
export default SearchForm;