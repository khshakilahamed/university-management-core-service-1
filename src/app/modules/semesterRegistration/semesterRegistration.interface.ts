export type ISemesterRegistrationFilterRequest = {
  searchTerm?: string | undefined;
  status?: string | undefined;
  academicSemesterId?: string | undefined;
};

export type IEnrollCoursePayload = {
  offeredCourseId: string;
  offeredCourseSectionId: string;
};
