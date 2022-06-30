const BASE_URL = 'http://5149-45-250-44-237.ngrok.io/SchoolManagement/myapi';
const IMG_URL = 'http://5149-45-250-44-237.ngrok.io/SchoolManagement';

export default {
  login: `${BASE_URL}/login_post`,
  studentList: `${BASE_URL}/Find_Student`,
  get_all_class: `${BASE_URL}/get_all_class`,
  get_subject_classID: `${BASE_URL}/get_subject_classID`,
  get_section_classId: `${BASE_URL}/get_section_classId`,
  Find_Student_By_class_section: `${BASE_URL}/Find_Student_By_class_section`,
  student_attendance: `${BASE_URL}/student_attendance`,
  get_school_gallery: `${BASE_URL}/get_school_gallery`,
  IMG: `${IMG_URL}/assets/uploads/gallery/`,
};
