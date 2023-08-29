import express from 'express';
import { academicDepartmentRoutes } from '../modules/academicDepartment/academicDepartment.routes';
import { AcademicFacultyRoutes } from '../modules/academicFaculty/academicFaculty.route';
import { AcademicSemesterRoutes } from '../modules/academicSemester/academicSemester.route';
import { buildingRoutes } from '../modules/building/building.route';
import { courseRoute } from '../modules/course/course.route';
import { facultyRoutes } from '../modules/faculty/faculty.route';
import { roomRoutes } from '../modules/room/room.route';
import { semesterRegistrationRoutes } from '../modules/semesterRegistration/semesterRegistration.route';
import { StudentRoutes } from '../modules/student/student.route';

const router = express.Router();

const moduleRoutes = [
  // ... routes
  {
    path: '/academic-semesters',
    route: AcademicSemesterRoutes,
  },
  {
    path: '/academic-faculties',
    route: AcademicFacultyRoutes,
  },
  {
    path: '/students',
    route: StudentRoutes,
  },
  {
    path: '/academic-departments',
    route: academicDepartmentRoutes,
  },
  {
    path: '/faculties',
    route: facultyRoutes,
  },
  {
    path: '/buildings',
    route: buildingRoutes,
  },
  {
    path: '/rooms',
    route: roomRoutes,
  },
  {
    path: '/courses',
    route: courseRoute,
  },
  {
    path: '/semester-registration',
    route: semesterRegistrationRoutes,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;
