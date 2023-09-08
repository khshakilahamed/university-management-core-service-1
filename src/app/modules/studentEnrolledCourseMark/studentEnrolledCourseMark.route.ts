import express from 'express';
import { StudentEnrolledCourseMarksController } from './studentEnrolledCourseMark.controller';

const router = express.Router();

router.patch(
  '/update-marks',
  StudentEnrolledCourseMarksController.updateStudentMarks
);

export const studentEnrolledCourseMarkRoutes = router;
