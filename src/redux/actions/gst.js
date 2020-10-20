export const FETCH_GST_SUCCESS = 'FETCH_GST_SUCCESS';
export const FETCH_GST_FAILED = 'FETCH_GST_FAILED';

export const load_gst = (pages) =>{
    return {
        type:FETCH_GST_SUCCESS,
        payload: pages
    }
}
export const error_gst = () =>{
    return {
        type: FETCH_GST_FAILED,
        payload: null
    }
}