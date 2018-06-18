import { combineReducers } from 'redux';

var db = { 
	id: 0,
	dataList:null,
    modal:false,
    edit:false,
    del:false,
    reply:false,
    position:null,

};


const index = (state= db, action) => {


    switch (action.type) {

        case 'ADD_COMMENT':
            {   
            	if (action.text === "") {
                    alert("err");
                    return state;
                    break;
                }

            	var obj = {
            		id:state.id,
            		name:action.name,
            		text:action.text,
            		file:action.file,
            	}

                if (state.dataList === null) { state.dataList = {childComm:[]} };
                console.log(state.dataList);
            	state.dataList.childComm.push(obj); 


            	return Object.assign({}, state, {
                    dataList: state.dataList,
                    id:++state.id,
                });

                break;
            }
            case 'LOAD': {

                var str = action.data;
                var parsStr = JSON.parse(str);

                return Object.assign({}, state, {
                    dataList: parsStr,
                    
                });

                break;
            }
            case 'MODAL_EDIT': {

                var arr = state.position.split(".");

                function getObj(arr,a) {
                    var obj = a;

                    for (var i = 1; i < arr.length; i++) {
                        obj = obj.childComm[+arr[i]];
                    }

                    return obj;
                }           

                getObj(arr,state.dataList).text = action.data;

                return Object.assign({}, state, {modal: !state.modal,edit:false}, state.dataList);
                break;
            }
            case 'MODAL_DEL': {

                var arr = state.position.split(".");

                function getArr(arr,a) {
                    var obj = a;

                    for (var i = 1; i < arr.length - 1; i++) {
                        obj = obj.childComm[+arr[i]];
                    }

                    return obj.childComm;
                }           

                getArr(arr,state.dataList).splice(arr[arr.length - 1], 1);

                return Object.assign({}, state, {modal: !state.modal,del:false}, state.dataList);
                break;
            }
            case 'MODAL_REPLY': {

                var arr = state.position.split(".");
                var objData =  {
                    id:state.id,
                    name:action.name,
                    text:action.text,
                    file:action.file,
                }

                function getArr(arr,a) {
                    var obj = a;

                    for (var i = 1; i < arr.length - 1; i++) {
                        obj = obj.childComm[+arr[i]];
                    }

                    return obj.childComm;
                }          

                getArr(arr,state.dataList).push(objData);

                return Object.assign({}, state, {modal: !state.modal,reply:false}, state.dataList);
                break;
            }
             case 'MODAL_TOG': {
                console.log(action.data);

                var obj = {modal: !state.modal,};
                if (action.data != null) {
                    obj[action.data.type] = true;
                    obj.position = action.data.position;
                }

                return Object.assign({}, state, obj);
                break;
            }

        default:
            return state
    }
};

const reduser = combineReducers({
    index,
});

export default reduser;