import {
    START_FETCHING_BLOG,
    SUCCESS_FETCHING_BLOG,
    ERROR_FETCHING_BLOG,
    SET_KEYWORD,
  } from './constant';
  
  import { getData } from '../../utils/fetch';
  import debounce from 'debounce-promise';
  import { clearNotif } from '../notif/action';

  
  let debouncedFetchBlog = debounce(getData, 1000);
  
  
  export const startFetchingBlog = () => {
    return {
      type: START_FETCHING_BLOG,
    };
  };
  
  
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
    return async (dispatch,getState) => {
      dispatch(startFetchingBlog());
  
      try {
        setTimeout(() => {
          dispatch(clearNotif());
        }, 3000);

        let params = {
          keyword: getState().blog.keyword,
        };
  
        let res = await debouncedFetchBlog('/cms/writer',params);
  
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

  export const setKeyword = (keyword) => {
    return {
      type: SET_KEYWORD,
      keyword,
    };
  };
  