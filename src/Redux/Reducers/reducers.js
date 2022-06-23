import {
  SET_USER_INFO,
  SET_SHOW_PROFILE,
  SET_USER_ID,
  SET_USER_NAME,
  SET_SHOW_MODAL,
  SET_USER_EMAIL,
  SET_CHECKED,
  SET_USER_IMAGE,
  SET_SCHOOL_ID,
} from '../Actions/actions';

const initialState = {
  userid: '',
  schoolid:'',
  username: '',
  useremail: '',
  userimage:'',
  userinfo: [],
  showprofile: false,
  showmodal: false,
  checked:''
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USER_ID:
      return {...state, userid: action.payload};
      case SET_SCHOOL_ID:
        return {...state, schoolid: action.payload};
    case SET_USER_NAME:
      return {...state, username: action.payload};
    case SET_USER_EMAIL:
      return {...state, useremail: action.payload};
      case SET_USER_IMAGE:
      return {...state, userimage: action.payload};
    case SET_USER_INFO:
      return {...state, userinfo: action.payload};
    case SET_SHOW_PROFILE:
      return {...state, showprofile: action.payload};
    case SET_SHOW_MODAL:
      return {...state, showmodal: action.payload};
      case SET_CHECKED:
        return {...state, checked: action.payload};
    default:
      return state;
  }
}

export default userReducer;
