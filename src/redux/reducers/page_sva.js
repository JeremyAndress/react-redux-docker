import {
    FETCH_PAGE_SUCCESS ,
    FETCH_PAGE_FAILED
} from '../actions/sva';

const default_page = {
    data: [],
    pending: true,
    error: false
};

const page_sva = (state = default_page,action) =>{
    switch(action.type){
        case FETCH_PAGE_SUCCESS: {
            return {
                ...state,
                data: action.payload,
                pending: false
            }
        }
        case FETCH_PAGE_FAILED: {
            return {
                ...state,
                error: true,
                pending: false
            }
        }
        default: return state
    }
}
export default page_sva;