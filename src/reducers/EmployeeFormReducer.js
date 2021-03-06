import {
    EMPLOYEE_UPDATE,
    EMPLOYEE_CREATE,
    EMPLOYEE_SAVE_SUCCESS,
    EMPLOYEE_CLEAR_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
    name: '',
    phone: '',
    shift: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMPLOYEE_UPDATE:
            //action.payload === {prop:'name', value: 'the persons name'}
            return { ...state, [action.payload.prop]: action.payload.value };
        case EMPLOYEE_CREATE:
            return { ...INITIAL_STATE };
        case EMPLOYEE_SAVE_SUCCESS:
            return { ...INITIAL_STATE };
        case EMPLOYEE_CLEAR_SUCCESS:
            return { ...INITIAL_STATE };
        default:
            return state;
    }
};
