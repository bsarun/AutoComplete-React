import request from 'superagent';
import EndpointUtils from './EndpointActionsUtils.js';

var AutoCompleteAction = {
	getUserData() {
		var apiUrl = "https://jsonplaceholder.typicode.com/users";
		request
			.get(apiUrl)
			.end((err, response) => {
				if (!err && response.body) {
					return EndpointUtils.dispatch('USER_ENDPOINT', response.body);
				}				
			}
			);
	},
};

export default AutoCompleteAction;