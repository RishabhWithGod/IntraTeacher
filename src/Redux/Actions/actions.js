export const SET_USER_ID = 'SET_USER_ID';
export const SET_SCHOOL_ID = 'SET_SCHOOL_ID';
export const SET_USER_NAME = 'SET_USER_NAME';
export const SET_USER_EMAIL = 'SET_USER_EMAIL';
export const SET_USER_IMAGE = 'SET_USER_IMAGE';
export const SET_USER_INFO = 'SET_USER_INFO';
export const SET_SHOW_PROFILE = 'SET_SHOW_PROFILE';
export const SET_SHOW_MODAL = 'SET_SHOW_MODAL';
export const SET_CHECKED = 'SET_CHECKED';


export const setuserId = userid => dispatch => {
  dispatch({
    type: SET_USER_ID,
    payload: userid,  
  });
};
export const setschoolId = schoolid => dispatch => {
  dispatch({
    type: SET_SCHOOL_ID,
    payload: schoolid,  
  });
};
export const setuserName = username => dispatch => {
  dispatch({
    type: SET_USER_NAME,
    payload: username,  
  });
};

export const setuserEmail = useremail => dispatch => {
  dispatch({
    type: SET_USER_EMAIL,
    payload: useremail,  
  });
};

export const setuserImage = userimage => dispatch => {
  dispatch({
    type: SET_USER_IMAGE,
    payload: userimage,
  });
};

export const setuserInfo = userinfo => dispatch => {
  dispatch({
    type: SET_USER_INFO,
    payload: userinfo,
  });
};

export const setShowProfile = showprofile => dispatch => {
  dispatch({
    type: SET_SHOW_PROFILE,
    payload: showprofile,
  });
};

export const setShowModal = showmodal => dispatch => {
  dispatch({
    type: SET_SHOW_MODAL,
    payload: showmodal,
  });
};
export const setChecked = checked => dispatch => {
  dispatch({
    type: SET_CHECKED,
    payload: checked,
  });
};
