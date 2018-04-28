/*
	Developed by Arun BS - 
	https://www.linkedin.com/in/arunbs1990/
	https://stackoverflow.com/users/3332758/arun
 */
import React, { Component } from 'react';
import Select from 'react-select';
import AutoCompleteActions from '../Actions/AutoCompleteActions.js';
import AutoCompleteStore from '../Stores/AutoCompleteStore.js';
import PropTypes from 'prop-types';

let userListArray = [];
class AutoComplete extends Component {
	constructor(props) {
		super(props)
		this.state = {
			userList: []
		}

		this.binds = {
			handleChange: this.handleChange.bind(this),
			getUsersListData: this.getUsersListData.bind(this)
		}

	}

	getUsersListData = () => {
		var userList = AutoCompleteStore.getUserData();
		this.setState({
			userList: userList
		})

	}

	handleChange = (selectedOption) => {
		this.setState({
			selval: selectedOption
		});
	}


	componentWillUnmount() {
		AutoCompleteStore.removeListener('change', this.binds.getUsersListData);
	}

	componentWillMount() {
		AutoCompleteActions.getUserData();
		AutoCompleteStore.on('change', this.getUsersListData);
	}

	render() {

		Object.keys(this.state.userList).forEach((houseHoldList) => {
			userListArray.push(this.state.userList[houseHoldList])
		});
		return (
			<div className="selectuserlist-wrapper">
				<div className="select-labeldiv"><label>Select :</label></div>
				<div className="selwrap"><Select
					name="select-user"
					value={this.state.selval}
					onChange={this.binds.handleChange}
					labelKey="name"
					valueKey="name"
					options={userListArray}
					removeSelected={true}
				/></div>
			</div>
		)
	}
}

AutoComplete.propTypes = {

}

AutoComplete.defaultProps = {

};

export default AutoComplete;