import React, { Component } from 'react';
import './UserSelect.scss';
import ReactHtmlParser from 'react-html-parser';
class UserSelect extends Component{
	constructor(props){
		super(props);
		this.state = {
			[props.name] : ''
		}
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange( evt ) {
		this.setState({
			[evt.target.name] : evt.target.value
		}, function () {
			try{
				this.props.updateSelection(this.state)
			} catch( ex ) {
				console.error("Error caught udpating parent selections: ", ex);
			}
		});
	}
	render(){
		const {name, placeholder, data, dataKeyName, dataValueName, emptyMessage, selection } = this.props;
		const placeholderOption = ( !!data && data.length > 0 ) ? <option value='' disabled='disabled'>{placeholder}</option> : null;
		return (
			<select value = { selection } name = {name} id = {name} onChange ={ this.handleChange } className='UserSelect'disabled = { ( !!data && data.length > 0 ) ? false : true } >
				{ placeholderOption }
				{
					( !!data && data.length > 0 ) ?
						data.map ( (option) => <option key={option[dataKeyName]} value={option[dataKeyName]}>{ReactHtmlParser(option[dataValueName])}</option> )
					: <option value=''> { emptyMessage } </option>
				}
			</select>
		)
	}
}
export default UserSelect;