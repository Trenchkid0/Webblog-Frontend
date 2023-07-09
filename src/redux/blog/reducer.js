import {
    START_FETCHING_BLOG,
    SUCCESS_FETCHING_BLOG,
    ERROR_FETCHING_BLOG,
    SET_KEYWORD,
  } from './constant';
  
  const statuslist = {
    idle: 'idle',
    process: 'process',
    success: 'success',
    error: 'error',
  };
  
  const initialState = {
    data: [],
    status: statuslist.idle,
    keyword: '',
  };
  
  export default function reducer(state = initialState, action) {
    switch (action.type) {
      case START_FETCHING_BLOG:
        return { ...state, status: statuslist.process };
  
      case ERROR_FETCHING_BLOG:
        return { ...state, status: statuslist.error };
  
      case SUCCESS_FETCHING_BLOG:
        return {
          ...state,
          status: statuslist.success,
          data: action.blog,
        };
      case SET_KEYWORD:
        return {
          ...state,
          keyword: action.keyword,
        };
  
      default:
        return state;
    }
  }
  