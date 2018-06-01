import { SEND_TEST } from '../actions/book';

//set initial state
const initialState = {
    data: [],
    errors: {},
    isLoading: false
};

export default function books(state = initialState, { type, payload }) {
    switch (type) {
        case SEND_TEST:
          return { ...state, data: [{ 'name': 'test book'}]};

        default:
          return { ...state };
    }
}