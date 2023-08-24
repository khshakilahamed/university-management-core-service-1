export type ICourseCreateData = {
  title: string;
  code: string;
  credits: number;
  preRequisiteCourses: {
    courseId: string;
  }[];
};

export type ICourseFilterRequest = {
  searchTerm?: string | undefined;
  title?: string | undefined;
  code?: string | undefined;
  credits?: number | undefined;
};
