export type ICourseCreateData = {
  title: string;
  code: string;
  credits: number;
  preRequisiteCourses: IPrerequisiteCourseRequest[];
};

export type IPrerequisiteCourseRequest = {
  courseId: string;
  isDeleted?: null;
};

export type ICourseFilterRequest = {
  searchTerm?: string | undefined;
  title?: string | undefined;
  code?: string | undefined;
  credits?: number | undefined;
};
