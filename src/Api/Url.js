const BASE_URL = 'http://intraedu.in/admin/myapi/';
const IMG_URL = 'http://intraedu.in/admin/';

export default {
  login: `${BASE_URL}teacher_login_post`,
  studentList: `${BASE_URL}Find_Student`,
  get_all_class: `${BASE_URL}get_all_class`,
  get_subject_classID: `${BASE_URL}get_subject_classID`,
  get_section_classId: `${BASE_URL}get_section_classId`,
  Find_Student_By_class_section: `${BASE_URL}Find_Student_By_class_section`,
  student_attendance: `${BASE_URL}student_attendance`,
  get_school_gallery: `${BASE_URL}get_school_gallery`,
  profile_IMG: `${IMG_URL}assets/uploads/teacher-photo/`,
  gallery_IMG: `${IMG_URL}assets/uploads/gallery/`,
};
