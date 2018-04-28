import { EventEmitter } from 'events';
import AppDispatcher from '../Dispatchers/AppDispatcher';

let  userDataStore = {};
var AutoCompleteStore = Object.assign({}, EventEmitter.prototype, {

    getUserData: function(){       
        return userDataStore;
    },
   
    dispatcherId: AppDispatcher.register(payload => {
        let action = payload.action;
        switch(action.type){            
            case "USER_ENDPOINT":
                updateUserDatafromServer(action.payload)                
                AutoCompleteStore.emit("change");
            break;
            default :
                break;
        }
    })
});

function updateUserDatafromServer(payload){
    userDataStore = Object.assign({}, payload)
}

export default AutoCompleteStore;
