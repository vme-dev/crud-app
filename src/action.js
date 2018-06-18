export function CHANGE_STOPS(e, index) {
    return {
        target: e,
        type: 'CHANGE_STOPS',
        index: index,
    }
};
export function ADD_COMMENT(name,text,file) {
    return {
        type: 'ADD_COMMENT',
        name: name,
        text: text,
        file: file,
    }
};
export function LOAD(data) {

    return {
        type: 'LOAD',
        data: data,
    }
};
export function EDIT(data) {

    return {
        type: 'EDIT',
        data: data,
    }
};
export function MODAL_TOG(data) {

    return {
        type: 'MODAL_TOG',
        data: data,
    }
};
export function MODAL_EDIT(data) {

    return {
        type: 'MODAL_EDIT',
        data: data,
    }
};
export function MODAL_DEL(data) {

    return {
        type: 'MODAL_DEL',
        data: data,
    }
};
export function MODAL_REPLY(name,text,file) {

    return {
        type: 'MODAL_REPLY',
        name: name,
        text: text,
        file: file,
    }
};