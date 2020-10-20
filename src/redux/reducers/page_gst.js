import {
    FETCH_GST_SUCCESS ,
    FETCH_GST_FAILED
} from '../actions/gst';

const default_page = {
    data: [],
    pending: true,
    error: false
};

const page_gst = (state = default_page,action) =>{
    switch(action.type){
        case FETCH_GST_SUCCESS: {
            return {
                ...state,
                data: action.payload,
                pending: false
            }
        }
        case FETCH_GST_FAILED: {
            return {
                ...state,
                error: true,
                pending: false
            }
        }
        default: return state
    }
}
export default page_gst;