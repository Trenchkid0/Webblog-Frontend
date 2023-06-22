import {
    START_FETCHING_BLOG,
    SUCCESS_FETCHING_BLOG,
    ERROR_FETCHING_BLOG,
  } from './constant';
  
  import { getData } from '../../utils/fetch';
  import debounce from 'debounce-promise';
  import { clearNotif } from '../notif/action';
  
  let debouncedFetchBlog = debounce(getData, 1000);
  
  // START
  export const startFetchingBlog = () => {
    return {
      type: START_FETCHING_BLOG,
    };
  };
  
  // SUCCESS
  export const successFetchingBlog = ({ blog }) => {
    return {
      type: SUCCESS_FETCHING_BLOG,
      blog,
    };
  };
  
  export const errorFetchingBlog = () => {
    return {
      type: ERROR_FETCHING_BLOG,
    };
  };
  
  export const fetchBlog = () => {
    return async (dispatch) => {
      dispatch(startFetchingBlog());
  
      try {
        setTimeout(() => {
          dispatch(clearNotif());
        }, 3000);
  
        let res = await debouncedFetchBlog('/cms/writer');
  
        dispatch(
            successFetchingBlog({
            blog: res.data.data,
          })
        );
      } catch (error) {
        dispatch(errorFetchingBlog());
      }
    };
  };
  