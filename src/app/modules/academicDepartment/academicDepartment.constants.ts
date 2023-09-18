export const academicDepartmentFilterableFields: string[] = [
  'searchTerm',
  'id',
  'academicFacultyId',
];

export const academicDepartmentSearchableFields: string[] = ['title'];

export const academicDepartmentRelationalFields: string[] = [
  'academicFacultyId',
];

export const academicDepartmentRelationalFieldsMapper: {
  [key: string]: string;
} = {
  academicFacultyId: 'academicFaculty',
};


export const EVENT_ACADEMIC_DEPARTMENT_CREATED = 'academicDepartment.created';
export const EVENT_ACADEMIC_DEPARTMENT_UPDATED = 'academicDepartment.updated';
export const EVENT_ACADEMIC_DEPARTMENT_DELETED = 'academicDepartment.deleted';