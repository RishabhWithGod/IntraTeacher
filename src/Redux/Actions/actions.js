export const SET_USER_ID = 'SET_USER_ID';
export const SET_TEACHER_ID = 'SET_TEACHER_ID';
export const SET_SCHOOL_ID = 'SET_SCHOOL_ID';
export const SET_USER_NAME = 'SET_USER_NAME';
export const SET_USER_EMAIL = 'SET_USER_EMAIL';
export const SET_USER_IMAGE = 'SET_USER_IMAGE';
export const SET_USER_INFO = 'SET_USER_INFO';
export const SET_SHOW_PROFILE = 'SET_SHOW_PROFILE';
export const SET_SHOW_MODAL = 'SET_SHOW_MODAL';
export const SET_CHECKED = 'SET_CHECKED';
export const SET_VALUE = 'SET_VALUE';
export const SET_USER_DOB = 'SET_USER_DOB';
export const SET_USER_ADDRESS = 'SET_USER_ADDRESS';
export const SET_USER_PHONE = 'SET_USER_PHONE';


export const setuserId = userid => dispatch => {
  dispatch({
    type: SET_USER_ID,
    payload: userid,  
  });
};
export const setTeacherId = teacherid => dispatch => {
  dispatch({
    type: SET_TEACHER_ID,
    payload: teacherid,  
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
export const setValue = value => dispatch => {
  dispatch({
    type: SET_VALUE,
    payload: value,  
  });
};
export const setuserDOB = userdob => dispatch => {
  dispatch({
    type: SET_USER_DOB,
    payload: userdob,  
  });
};
export const setuserAddress = useraddress => dispatch => {
  dispatch({
    type: SET_USER_ADDRESS,
    payload: useraddress,
  });
};
export const setuserPhone = userphone => dispatch => {
  dispatch({
    type: SET_USER_PHONE,
    payload: userphone,
  });
};
