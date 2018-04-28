import AppDispatcher from '../../Dispatchers/AppDispatcher';
import request from 'superagent';
import sinon from 'sinon';
const EndpointUtils = jest.mock('../../Actions/EndpointActionUtils');

describe("Autocomplete Action Test", function () {

	it('Get Userlist - USER_ENDPOINT', () => {
		let eventSpy = sinon.spy();		
		require('superagent').__setMockResponse({
			body: [
                {
                  "userId": 1,
                  "id": 1,
                  "title": "quidem molestiae enim"
                },
                {
                  "userId": 1,
                  "id": 2,
                  "title": "sunt qui excepturi placeat culpa"
                }
            ]
		});		
		let dispatchListener = AppDispatcher.register((payload) => {
			if (payload.action.type === 'USER_ENDPOINT') {
				eventSpy(payload.action.payload);
			}
		});	
		expect(eventSpy.called).toBe(false);
		dispatch('USER_ENDPOINT', null);
		AppDispatcher.unregister(dispatchListener);
		
    });	


});

let dispatch = (actionType, payload) => {
	AppDispatcher.dispatch({
		action: {
			type:    actionType,
			payload: payload
		}
	});
};

 