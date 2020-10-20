export const FETCH_PAGE_SUCCESS = 'FETCH_PAGE_SUCCESS';
export const FETCH_PAGE_FAILED = 'FETCH_PAGE_FAILED';

export const load_page = (pages) =>{
    return {
        type:FETCH_PAGE_SUCCESS,
        payload: pages
    }
}
export const error_page = () =>{
    return {
        type: FETCH_PAGE_FAILED,
        payload: null
    }
}