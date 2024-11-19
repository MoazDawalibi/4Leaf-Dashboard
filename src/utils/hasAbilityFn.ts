import { ABILITIES_ENUM, ABILITIES_VALUES_ENUM } from "../enums/abilities";
import { hasAbility } from "./hasAbility";

///// EduClass

export const canAddEduClass = hasAbility(
  ABILITIES_ENUM.EDUCATION_CLASS,
  ABILITIES_VALUES_ENUM.STORE,
);
export const canEditEduClass = hasAbility(
  ABILITIES_ENUM.EDUCATION_CLASS,
  ABILITIES_VALUES_ENUM.UPDATE,
);
export const canDeleteEduClass = hasAbility(
  ABILITIES_ENUM.EDUCATION_CLASS,
  ABILITIES_VALUES_ENUM.DELETE,
);
export const canShowEduClass = hasAbility(
  ABILITIES_ENUM.EDUCATION_CLASS,
  ABILITIES_VALUES_ENUM.SHOW,
);
export const canIndexEduClass = hasAbility(
  ABILITIES_ENUM.EDUCATION_CLASS,
  ABILITIES_VALUES_ENUM.INDEX,
);

///// Coupon

export const canAddCoupon = hasAbility(
  ABILITIES_ENUM.EDUCATION_CLASS,
  ABILITIES_VALUES_ENUM.STORE,
);
export const canEditCoupon = hasAbility(
  ABILITIES_ENUM.EDUCATION_CLASS,
  ABILITIES_VALUES_ENUM.UPDATE,
);
export const canDeleteCoupon = hasAbility(
  ABILITIES_ENUM.EDUCATION_CLASS,
  ABILITIES_VALUES_ENUM.DELETE,
);
export const canShowCoupon = hasAbility(
  ABILITIES_ENUM.EDUCATION_CLASS,
  ABILITIES_VALUES_ENUM.SHOW,
);
export const canIndexCoupon = hasAbility(
  ABILITIES_ENUM.EDUCATION_CLASS,
  ABILITIES_VALUES_ENUM.INDEX,
);

///// City

export const canAddCity = hasAbility(
  ABILITIES_ENUM.EDUCATION_CLASS,
  ABILITIES_VALUES_ENUM.STORE,
);
export const canEditCity = hasAbility(
  ABILITIES_ENUM.EDUCATION_CLASS,
  ABILITIES_VALUES_ENUM.UPDATE,
);
export const canDeleteCity = hasAbility(
  ABILITIES_ENUM.EDUCATION_CLASS,
  ABILITIES_VALUES_ENUM.DELETE,
);
export const canShowCity = hasAbility(
  ABILITIES_ENUM.EDUCATION_CLASS,
  ABILITIES_VALUES_ENUM.SHOW,
);
export const canIndexCity = hasAbility(
  ABILITIES_ENUM.EDUCATION_CLASS,
  ABILITIES_VALUES_ENUM.INDEX,
);

///// Area

export const canAddArea = hasAbility(
  ABILITIES_ENUM.EDUCATION_CLASS,
  ABILITIES_VALUES_ENUM.STORE,
);
export const canEditArea = hasAbility(
  ABILITIES_ENUM.EDUCATION_CLASS,
  ABILITIES_VALUES_ENUM.UPDATE,
);
export const canDeleteArea = hasAbility(
  ABILITIES_ENUM.EDUCATION_CLASS,
  ABILITIES_VALUES_ENUM.DELETE,
);
export const canShowArea = hasAbility(
  ABILITIES_ENUM.EDUCATION_CLASS,
  ABILITIES_VALUES_ENUM.SHOW,
);
export const canIndexArea = hasAbility(
  ABILITIES_ENUM.EDUCATION_CLASS,
  ABILITIES_VALUES_ENUM.INDEX,
);

///// Course

export const canAddCourse = hasAbility(
  ABILITIES_ENUM.COURSE,
  ABILITIES_VALUES_ENUM.STORE,
);
export const canEditCourse = hasAbility(
  ABILITIES_ENUM.COURSE,
  ABILITIES_VALUES_ENUM.UPDATE,
);
export const canDeleteCourse = hasAbility(
  ABILITIES_ENUM.COURSE,
  ABILITIES_VALUES_ENUM.DELETE,
);
export const canShowCourse = hasAbility(
  ABILITIES_ENUM.COURSE,
  ABILITIES_VALUES_ENUM.SHOW,
);
export const canIndexCourse = hasAbility(
  ABILITIES_ENUM.COURSE,
  ABILITIES_VALUES_ENUM.INDEX,
);

///// session

export const canAddSession = hasAbility(
  ABILITIES_ENUM.SESSION,
  ABILITIES_VALUES_ENUM.STORE,
);
export const canEditSession = hasAbility(
  ABILITIES_ENUM.SESSION,
  ABILITIES_VALUES_ENUM.UPDATE,
);
export const canDeleteSession = hasAbility(
  ABILITIES_ENUM.SESSION,
  ABILITIES_VALUES_ENUM.DELETE,
);

//// teacher

export const canEditTeacher = hasAbility(
  ABILITIES_ENUM.TEACHER,
  ABILITIES_VALUES_ENUM.UPDATE,
);
export const canDeleteTeacher = hasAbility(
  ABILITIES_ENUM.TEACHER,
  ABILITIES_VALUES_ENUM.DELETE,
);
export const canAddTeacher = hasAbility(
  ABILITIES_ENUM.TEACHER,
  ABILITIES_VALUES_ENUM.STORE,
);

//// unit
export const canAddUnit = hasAbility(
  ABILITIES_ENUM.UNIT,
  ABILITIES_VALUES_ENUM.STORE,
);

export const canEditUnit = hasAbility(
  ABILITIES_ENUM.UNIT,
  ABILITIES_VALUES_ENUM.UPDATE,
);
export const canDeleteUnit = hasAbility(
  ABILITIES_ENUM.UNIT,
  ABILITIES_VALUES_ENUM.DELETE,
);
export const canShowUnit = hasAbility(
  ABILITIES_ENUM.UNIT,
  ABILITIES_VALUES_ENUM.SHOW,
);

/// subject

export const canAddSubject = hasAbility(
  ABILITIES_ENUM.SUBJECT,
  ABILITIES_VALUES_ENUM.STORE,
);

export const canEditSubject = hasAbility(
  ABILITIES_ENUM.SUBJECT,
  ABILITIES_VALUES_ENUM.UPDATE,
);
export const canDeleteSubject = hasAbility(
  ABILITIES_ENUM.SUBJECT,
  ABILITIES_VALUES_ENUM.DELETE,
);

export const canShowSubject = hasAbility(
  ABILITIES_ENUM.SUBJECT,
  ABILITIES_VALUES_ENUM.SHOW,
);
/// Role

export const canAddRole = hasAbility(
  ABILITIES_ENUM.ROLE,
  ABILITIES_VALUES_ENUM.STORE,
);

export const canEditRole = hasAbility(
  ABILITIES_ENUM.ROLE,
  ABILITIES_VALUES_ENUM.UPDATE,
);
export const canDeleteRole = hasAbility(
  ABILITIES_ENUM.ROLE,
  ABILITIES_VALUES_ENUM.DELETE,
);

export const canShowRole = hasAbility(
  ABILITIES_ENUM.ROLE,
  ABILITIES_VALUES_ENUM.SHOW,
);
/// Payment

export const canIndexPayment = hasAbility(
  ABILITIES_ENUM.PAYMENT,
  ABILITIES_VALUES_ENUM.INDEX,
);

export const canAddPayment = hasAbility(
  ABILITIES_ENUM.PAYMENT,
  ABILITIES_VALUES_ENUM.STORE,
);

export const canEditPayment = hasAbility(
  ABILITIES_ENUM.PAYMENT,
  ABILITIES_VALUES_ENUM.UPDATE,
);
export const canDeletePayment = hasAbility(
  ABILITIES_ENUM.PAYMENT,
  ABILITIES_VALUES_ENUM.DELETE,
);

/// Lesson

export const canAddLesson = hasAbility(
  ABILITIES_ENUM.LESSON,
  ABILITIES_VALUES_ENUM.STORE,
);

export const canEditLesson = hasAbility(
  ABILITIES_ENUM.LESSON,
  ABILITIES_VALUES_ENUM.UPDATE,
);
export const canDeleteLesson = hasAbility(
  ABILITIES_ENUM.LESSON,
  ABILITIES_VALUES_ENUM.DELETE,
);
export const canShowLesson = hasAbility(
  ABILITIES_ENUM.LESSON,
  ABILITIES_VALUES_ENUM.SHOW,
);

/// Exercise

export const canAddExercise = hasAbility(
  ABILITIES_ENUM.EXERCISE,
  ABILITIES_VALUES_ENUM.STORE,
);

export const canEditExercise = hasAbility(
  ABILITIES_ENUM.EXERCISE,
  ABILITIES_VALUES_ENUM.UPDATE,
);
export const canDeleteExercise = hasAbility(
  ABILITIES_ENUM.EXERCISE,
  ABILITIES_VALUES_ENUM.DELETE,
);

/// Cycle

export const canAddCycle = hasAbility(
  ABILITIES_ENUM.CYCLE,
  ABILITIES_VALUES_ENUM.STORE,
);

export const canEditCycle = hasAbility(
  ABILITIES_ENUM.CYCLE,
  ABILITIES_VALUES_ENUM.UPDATE,
);
export const canDeleteCycle = hasAbility(
  ABILITIES_ENUM.CYCLE,
  ABILITIES_VALUES_ENUM.DELETE,
);
export const canShowCycle = hasAbility(
  ABILITIES_ENUM.CYCLE,
  ABILITIES_VALUES_ENUM.SHOW,
);

/// Admin

export const canAddAdmin = hasAbility(
  ABILITIES_ENUM.ADMIN,
  ABILITIES_VALUES_ENUM.STORE,
);

export const canEditAdmin = hasAbility(
  ABILITIES_ENUM.ADMIN,
  ABILITIES_VALUES_ENUM.UPDATE,
);
export const canDeleteAdmin = hasAbility(
  ABILITIES_ENUM.ADMIN,
  ABILITIES_VALUES_ENUM.DELETE,
);
export const canShowAdmin = hasAbility(
  ABILITIES_ENUM.ADMIN,
  ABILITIES_VALUES_ENUM.SHOW,
);

/// Term

export const canAddTerm = hasAbility(
  ABILITIES_ENUM.TERM,
  ABILITIES_VALUES_ENUM.STORE,
);

export const canEditTerm = hasAbility(
  ABILITIES_ENUM.TERM,
  ABILITIES_VALUES_ENUM.UPDATE,
);
export const canDeleteTerm = hasAbility(
  ABILITIES_ENUM.TERM,
  ABILITIES_VALUES_ENUM.DELETE,
);
export const canShowTerm = hasAbility(
  ABILITIES_ENUM.TERM,
  ABILITIES_VALUES_ENUM.SHOW,
);

/// Student

export const canAddStudent = hasAbility(
  ABILITIES_ENUM.STUDENT,
  ABILITIES_VALUES_ENUM.STORE,
);

export const canEditStudent = hasAbility(
  ABILITIES_ENUM.STUDENT,
  ABILITIES_VALUES_ENUM.UPDATE,
);
export const canDeleteStudent = hasAbility(
  ABILITIES_ENUM.STUDENT,
  ABILITIES_VALUES_ENUM.DELETE,
);
export const canShowStudent = hasAbility(
  ABILITIES_ENUM.STUDENT,
  ABILITIES_VALUES_ENUM.SHOW,
);

/// Manager

export const canAddManager = hasAbility(
  ABILITIES_ENUM.MANAGERS,
  ABILITIES_VALUES_ENUM.STORE,
);

export const canEditManager = hasAbility(
  ABILITIES_ENUM.MANAGERS,
  ABILITIES_VALUES_ENUM.UPDATE,
);
export const canDeleteManager = hasAbility(
  ABILITIES_ENUM.MANAGERS,
  ABILITIES_VALUES_ENUM.DELETE,
);
export const canShowManager = hasAbility(
  ABILITIES_ENUM.MANAGERS,
  ABILITIES_VALUES_ENUM.SHOW,
);
/// EarlyDeparture

export const canAddEarlyDeparture = hasAbility(
  ABILITIES_ENUM.EARLY_DEPARTURE,
  ABILITIES_VALUES_ENUM.STORE,
);

export const canEditEarlyDeparture = hasAbility(
  ABILITIES_ENUM.EARLY_DEPARTURE,
  ABILITIES_VALUES_ENUM.UPDATE,
);
export const canDeleteEarlyDeparture = hasAbility(
  ABILITIES_ENUM.EARLY_DEPARTURE,
  ABILITIES_VALUES_ENUM.DELETE,
);
export const canShowEarlyDeparture = hasAbility(
  ABILITIES_ENUM.EARLY_DEPARTURE,
  ABILITIES_VALUES_ENUM.SHOW,
);

/// Exam

export const canAddExam = hasAbility(
  ABILITIES_ENUM.EXAM,
  ABILITIES_VALUES_ENUM.STORE,
);

export const canEditExam = hasAbility(
  ABILITIES_ENUM.EXAM,
  ABILITIES_VALUES_ENUM.UPDATE,
);
export const canDeleteExam = hasAbility(
  ABILITIES_ENUM.EXAM,
  ABILITIES_VALUES_ENUM.DELETE,
);
export const canShowExam = hasAbility(
  ABILITIES_ENUM.EXAM,
  ABILITIES_VALUES_ENUM.SHOW,
);

/// HomeWork

export const canAddHomeWork = hasAbility(
  ABILITIES_ENUM.HOMEWORK,
  ABILITIES_VALUES_ENUM.STORE,
);

export const canEditHomeWork = hasAbility(
  ABILITIES_ENUM.HOMEWORK,
  ABILITIES_VALUES_ENUM.UPDATE,
);
export const canDeleteHomeWork = hasAbility(
  ABILITIES_ENUM.HOMEWORK,
  ABILITIES_VALUES_ENUM.DELETE,
);
export const canShowHomeWork = hasAbility(
  ABILITIES_ENUM.HOMEWORK,
  ABILITIES_VALUES_ENUM.SHOW,
);

/// Mark

export const canAddMark = hasAbility(
  ABILITIES_ENUM.MARK,
  ABILITIES_VALUES_ENUM.STORE,
);

export const canEditMark = hasAbility(
  ABILITIES_ENUM.MARK,
  ABILITIES_VALUES_ENUM.UPDATE,
);
export const canDeleteMark = hasAbility(
  ABILITIES_ENUM.MARK,
  ABILITIES_VALUES_ENUM.DELETE,
);
export const canShowMark = hasAbility(
  ABILITIES_ENUM.MARK,
  ABILITIES_VALUES_ENUM.SHOW,
);

/// Note

export const canAddNote = hasAbility(
  ABILITIES_ENUM.NOTE,
  ABILITIES_VALUES_ENUM.STORE,
);

export const canEditNote = hasAbility(
  ABILITIES_ENUM.NOTE,
  ABILITIES_VALUES_ENUM.UPDATE,
);
export const canDeleteNote = hasAbility(
  ABILITIES_ENUM.NOTE,
  ABILITIES_VALUES_ENUM.DELETE,
);
export const canShowNote = hasAbility(
  ABILITIES_ENUM.NOTE,
  ABILITIES_VALUES_ENUM.SHOW,
);

/// Absence

export const canAddAbsence = hasAbility(
  ABILITIES_ENUM.ABSENCE,
  ABILITIES_VALUES_ENUM.STORE,
);

export const canEditAbsence = hasAbility(
  ABILITIES_ENUM.ABSENCE,
  ABILITIES_VALUES_ENUM.UPDATE,
);
export const canDeleteAbsence = hasAbility(
  ABILITIES_ENUM.ABSENCE,
  ABILITIES_VALUES_ENUM.DELETE,
);
export const canShowAbsence = hasAbility(
  ABILITIES_ENUM.ABSENCE,
  ABILITIES_VALUES_ENUM.SHOW,
);

/// SessionContent

export const canAddSessionContent = hasAbility(
  ABILITIES_ENUM.SESSION_CONTENT,
  ABILITIES_VALUES_ENUM.STORE,
);

export const canEditSessionContent = hasAbility(
  ABILITIES_ENUM.SESSION_CONTENT,
  ABILITIES_VALUES_ENUM.UPDATE,
);
export const canDeleteSessionContent = hasAbility(
  ABILITIES_ENUM.SESSION_CONTENT,
  ABILITIES_VALUES_ENUM.DELETE,
);
export const canShowSessionContent = hasAbility(
  ABILITIES_ENUM.SESSION_CONTENT,
  ABILITIES_VALUES_ENUM.SHOW,
);

/// Branch

export const canAddBranch = hasAbility(
  ABILITIES_ENUM.BRANCH,
  ABILITIES_VALUES_ENUM.STORE,
);

export const canEditBranch = hasAbility(
  ABILITIES_ENUM.BRANCH,
  ABILITIES_VALUES_ENUM.UPDATE,
);
export const canDeleteBranch = hasAbility(
  ABILITIES_ENUM.BRANCH,
  ABILITIES_VALUES_ENUM.DELETE,
);
export const canShowBranch = hasAbility(
  ABILITIES_ENUM.BRANCH,
  ABILITIES_VALUES_ENUM.SHOW,
);

/// status

export const canIndexStatus =
  hasAbility(ABILITIES_ENUM.EARLY_DEPARTURE, ABILITIES_VALUES_ENUM.INDEX) &&
  hasAbility(ABILITIES_ENUM.ABSENCE, ABILITIES_VALUES_ENUM.INDEX) &&
  hasAbility(ABILITIES_ENUM.LATE_ARRIVAL, ABILITIES_VALUES_ENUM.INDEX) &&
  hasAbility(ABILITIES_ENUM.PRESENCE, ABILITIES_VALUES_ENUM.INDEX);

export const canUpdateStatus =
  hasAbility(ABILITIES_ENUM.EARLY_DEPARTURE, ABILITIES_VALUES_ENUM.UPDATE) &&
  hasAbility(ABILITIES_ENUM.ABSENCE, ABILITIES_VALUES_ENUM.UPDATE) &&
  hasAbility(ABILITIES_ENUM.LATE_ARRIVAL, ABILITIES_VALUES_ENUM.UPDATE);

export const canAddStatus =
  hasAbility(ABILITIES_ENUM.EARLY_DEPARTURE, ABILITIES_VALUES_ENUM.STORE) &&
  hasAbility(ABILITIES_ENUM.ABSENCE, ABILITIES_VALUES_ENUM.STORE) &&
  hasAbility(ABILITIES_ENUM.LATE_ARRIVAL, ABILITIES_VALUES_ENUM.STORE);

/// MarksReport

export const canAddMarksReport = hasAbility(
  ABILITIES_ENUM.MARK,
  ABILITIES_VALUES_ENUM.STORE,
);

export const canEditMarksReport = hasAbility(
  ABILITIES_ENUM.MARK,
  ABILITIES_VALUES_ENUM.UPDATE,
);
export const canDeleteMarksReport = hasAbility(
  ABILITIES_ENUM.MARK,
  ABILITIES_VALUES_ENUM.DELETE,
);
export const canShowMarksReport = hasAbility(
  ABILITIES_ENUM.MARK,
  ABILITIES_VALUES_ENUM.SHOW,
);
/// Tags

export const canAddTags = hasAbility(
  ABILITIES_ENUM.TAG,
  ABILITIES_VALUES_ENUM.STORE,
);

export const canEditTags = hasAbility(
  ABILITIES_ENUM.TAG,
  ABILITIES_VALUES_ENUM.UPDATE,
);
export const canDeleteTags = hasAbility(
  ABILITIES_ENUM.TAG,
  ABILITIES_VALUES_ENUM.DELETE,
);
export const canShowTags = hasAbility(
  ABILITIES_ENUM.TAG,
  ABILITIES_VALUES_ENUM.SHOW,
);

/// Question

export const canAddQuestion = hasAbility(
  ABILITIES_ENUM.QUESTION,
  ABILITIES_VALUES_ENUM.STORE,
);

export const canEditQuestion = hasAbility(
  ABILITIES_ENUM.QUESTION,
  ABILITIES_VALUES_ENUM.UPDATE,
);
export const canDeleteQuestion = hasAbility(
  ABILITIES_ENUM.QUESTION,
  ABILITIES_VALUES_ENUM.DELETE,
);
export const canShowQuestion = hasAbility(
  ABILITIES_ENUM.QUESTION,
  ABILITIES_VALUES_ENUM.SHOW,
);

///// Grade

export const canAddGrade = hasAbility(
  ABILITIES_ENUM.EDUCATION_CLASS,
  ABILITIES_VALUES_ENUM.STORE,
);
export const canEditGrade = hasAbility(
  ABILITIES_ENUM.EDUCATION_CLASS,
  ABILITIES_VALUES_ENUM.UPDATE,
);
export const canDeleteGrade = hasAbility(
  ABILITIES_ENUM.EDUCATION_CLASS,
  ABILITIES_VALUES_ENUM.DELETE,
);
export const canShowGrade = hasAbility(
  ABILITIES_ENUM.EDUCATION_CLASS,
  ABILITIES_VALUES_ENUM.SHOW,
);
export const canIndexGrade = hasAbility(
  ABILITIES_ENUM.EDUCATION_CLASS,
  ABILITIES_VALUES_ENUM.INDEX,
);

///// Curriculum

export const canAddCurriculum = hasAbility(
  ABILITIES_ENUM.EDUCATION_CLASS,
  ABILITIES_VALUES_ENUM.STORE,
);
export const canEditCurriculum = hasAbility(
  ABILITIES_ENUM.EDUCATION_CLASS,
  ABILITIES_VALUES_ENUM.UPDATE,
);
export const canDeleteCurriculum = hasAbility(
  ABILITIES_ENUM.EDUCATION_CLASS,
  ABILITIES_VALUES_ENUM.DELETE,
);
export const canShowCurriculum = hasAbility(
  ABILITIES_ENUM.EDUCATION_CLASS,
  ABILITIES_VALUES_ENUM.SHOW,
);
export const canIndexCurriculum = hasAbility(
  ABILITIES_ENUM.EDUCATION_CLASS,
  ABILITIES_VALUES_ENUM.INDEX,
);

/// Package

export const canAddPackage = hasAbility(
  ABILITIES_ENUM.Package,
  ABILITIES_VALUES_ENUM.STORE,
);

export const canEditPackage = hasAbility(
  ABILITIES_ENUM.Package,
  ABILITIES_VALUES_ENUM.UPDATE,
);
export const canDeletePackage = hasAbility(
  ABILITIES_ENUM.Package,
  ABILITIES_VALUES_ENUM.DELETE,
);
export const canShowPackage = hasAbility(
  ABILITIES_ENUM.Package,
  ABILITIES_VALUES_ENUM.SHOW,
);

/// Report

export const canAddReport = hasAbility(
  ABILITIES_ENUM.Report,
  ABILITIES_VALUES_ENUM.STORE,
);

export const canEditReport = hasAbility(
  ABILITIES_ENUM.Report,
  ABILITIES_VALUES_ENUM.UPDATE,
);
export const canDeleteReport = hasAbility(
  ABILITIES_ENUM.Report,
  ABILITIES_VALUES_ENUM.DELETE,
);
export const canShowReport = hasAbility(
  ABILITIES_ENUM.Report,
  ABILITIES_VALUES_ENUM.SHOW,
);

/// User

export const canAddUser = hasAbility(
  ABILITIES_ENUM.User,
  ABILITIES_VALUES_ENUM.STORE,
);

export const canEditUser = hasAbility(
  ABILITIES_ENUM.User,
  ABILITIES_VALUES_ENUM.UPDATE,
);
export const canDeleteUser = hasAbility(
  ABILITIES_ENUM.User,
  ABILITIES_VALUES_ENUM.DELETE,
);

/// ReSeller

export const canAddReSeller = hasAbility(
  ABILITIES_ENUM.RE_SELLER,
  ABILITIES_VALUES_ENUM.STORE,
);

export const canEditReSeller = hasAbility(
  ABILITIES_ENUM.RE_SELLER,
  ABILITIES_VALUES_ENUM.UPDATE,
);
export const canDeleteReSeller = hasAbility(
  ABILITIES_ENUM.RE_SELLER,
  ABILITIES_VALUES_ENUM.DELETE,
);
export const canShowReSeller = hasAbility(
  ABILITIES_ENUM.RE_SELLER,
  ABILITIES_VALUES_ENUM.SHOW,
);

/// Param

export const canAddParam = hasAbility(
  ABILITIES_ENUM.PARAM,
  ABILITIES_VALUES_ENUM.STORE,
);

export const canEditParam = hasAbility(
  ABILITIES_ENUM.PARAM,
  ABILITIES_VALUES_ENUM.UPDATE,
);
export const canDeleteParam = hasAbility(
  ABILITIES_ENUM.PARAM,
  ABILITIES_VALUES_ENUM.DELETE,
);
export const canShowParam = hasAbility(
  ABILITIES_ENUM.PARAM,
  ABILITIES_VALUES_ENUM.SHOW,
);

/// User

export const canAddStudent_Package = hasAbility(
  ABILITIES_ENUM.Student_Package,
  ABILITIES_VALUES_ENUM.STORE,
);

export const canEditStudent_Package = hasAbility(
  ABILITIES_ENUM.Student_Package,
  ABILITIES_VALUES_ENUM.UPDATE,
);
export const canDeleteStudent_Package = hasAbility(
  ABILITIES_ENUM.Student_Package,
  ABILITIES_VALUES_ENUM.DELETE,
);

/// QuestionBank

export const canAddQuestionBank = hasAbility(
  ABILITIES_ENUM.QUESTION_BANK,
  ABILITIES_VALUES_ENUM.STORE,
);

export const canEditQuestionBank = hasAbility(
  ABILITIES_ENUM.QUESTION_BANK,
  ABILITIES_VALUES_ENUM.UPDATE,
);
export const canDeleteQuestionBank = hasAbility(
  ABILITIES_ENUM.QUESTION_BANK,
  ABILITIES_VALUES_ENUM.DELETE,
);

export const canShowQuestionBank = hasAbility(
  ABILITIES_ENUM.QUESTION_BANK,
  ABILITIES_VALUES_ENUM.SHOW,
);

/// sales

export const canAddSales = hasAbility(
  ABILITIES_ENUM.Sales,
  ABILITIES_VALUES_ENUM.STORE,
);

export const canEditSales = hasAbility(
  ABILITIES_ENUM.Sales,
  ABILITIES_VALUES_ENUM.UPDATE,
);
export const canDeleteSales = hasAbility(
  ABILITIES_ENUM.Sales,
  ABILITIES_VALUES_ENUM.DELETE,
);

/// Phone

export const canEditPhone = hasAbility(
  ABILITIES_ENUM.Phone,
  ABILITIES_VALUES_ENUM.UPDATE,
);

/// Email

export const canEditEmail = hasAbility(
  ABILITIES_ENUM.Email,
  ABILITIES_VALUES_ENUM.UPDATE,
);

/// financial_collection

export const canAddFinancial_Collection = hasAbility(
  ABILITIES_ENUM.Financial_Collection,
  ABILITIES_VALUES_ENUM.STORE,
);

export const canEditFinancial_Collection = hasAbility(
  ABILITIES_ENUM.Financial_Collection,
  ABILITIES_VALUES_ENUM.UPDATE,
);
export const canDeleteFinancial_Collection = hasAbility(
  ABILITIES_ENUM.Financial_Collection,
  ABILITIES_VALUES_ENUM.DELETE,
);

// collection reseller
export const canShowCollection = hasAbility(
  ABILITIES_ENUM.Collections,
  ABILITIES_VALUES_ENUM.SHOW,
);

///// Notification

export const canAddNotification = hasAbility(
  ABILITIES_ENUM.EDUCATION_CLASS,
  ABILITIES_VALUES_ENUM.STORE,
);
export const canEditNotification = hasAbility(
  ABILITIES_ENUM.EDUCATION_CLASS,
  ABILITIES_VALUES_ENUM.UPDATE,
);
export const canDeleteNotification = hasAbility(
  ABILITIES_ENUM.EDUCATION_CLASS,
  ABILITIES_VALUES_ENUM.DELETE,
);
export const canShowNotification = hasAbility(
  ABILITIES_ENUM.EDUCATION_CLASS,
  ABILITIES_VALUES_ENUM.SHOW,
);
export const canIndexNotification = hasAbility(
  ABILITIES_ENUM.EDUCATION_CLASS,
  ABILITIES_VALUES_ENUM.INDEX,
);
