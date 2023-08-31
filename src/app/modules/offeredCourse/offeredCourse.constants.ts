export const offeredCourseFilterableFields = [
  'searchTerm',
  'id',
  'courseId',
  'academicDepartmentId',
  'semesterRegistrationId',
];

export const offeredCourseSearchableFields = [];

export const offeredCourseRelationalFields: string[] = [
  'courseId',
  'academicDepartmentId',
  'semesterRegistrationId',
];

export const offeredCourseRelationalFieldMapper: { [key: string]: string } = {
  courseId: 'course',
  academicDepartmentId: 'academicDepartment',
  semesterRegistrationId: 'semesterRegistration',
};
