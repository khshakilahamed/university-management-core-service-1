import express from 'express';
import { ENUM_USER_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';
import { StudentEnrolledCourseMarksController } from './studentEnrolledCourseMark.controller';

const router = express.Router();

router.get(
  '/',
  auth(ENUM_USER_ROLE.ADMIN, ENUM_USER_ROLE.FACULTY),
  StudentEnrolledCourseMarksController.getAllFromDB
);

router.patch(
  '/update-marks',
  StudentEnrolledCourseMarksController.updateStudentMarks
);

router.patch(
  '/update-final-marks',
  StudentEnrolledCourseMarksController.updateFinalMarks
);

export const studentEnrolledCourseMarkRoutes = router;
