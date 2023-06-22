import {
    START_FETCHING_BLOG,
    SUCCESS_FETCHING_BLOG,
    ERROR_FETCHING_BLOG,
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
  
      default:
        return state;
    }
  }
  