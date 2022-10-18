/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  email: string,
  firstName: string,
  lastName: string,
  companyId: string,
  role?: string | null,
};

export type ModelUserConditionInput = {
  email?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  companyId?: ModelStringInput | null,
  role?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type User = {
  __typename: "User",
  id: string,
  email: string,
  firstName: string,
  lastName: string,
  companyId: string,
  role?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateUserInput = {
  id: string,
  email?: string | null,
  firstName?: string | null,
  lastName?: string | null,
  companyId?: string | null,
  role?: string | null,
};

export type DeleteUserInput = {
  id: string,
};

export type CreateCourseInput = {
  id?: string | null,
  name: string,
};

export type ModelCourseConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelCourseConditionInput | null > | null,
  or?: Array< ModelCourseConditionInput | null > | null,
  not?: ModelCourseConditionInput | null,
};

export type Course = {
  __typename: "Course",
  id: string,
  name: string,
  lessons?: ModelLessonConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelLessonConnection = {
  __typename: "ModelLessonConnection",
  items:  Array<Lesson | null >,
  nextToken?: string | null,
};

export type Lesson = {
  __typename: "Lesson",
  id: string,
  title: string,
  chapter: number,
  course?: Course | null,
  frames?: ModelFrameConnection | null,
  question?: Question | null,
  createdAt: string,
  updatedAt: string,
  courseLessonsId?: string | null,
  lessonQuestionId?: string | null,
};

export type ModelFrameConnection = {
  __typename: "ModelFrameConnection",
  items:  Array<Frame | null >,
  nextToken?: string | null,
};

export type Frame = {
  __typename: "Frame",
  id: string,
  lesson?: Lesson | null,
  text: string,
  textStyle: string,
  image: string,
  audio: string,
  duration: number,
  createdAt: string,
  updatedAt: string,
  lessonFramesId?: string | null,
};

export type Question = {
  __typename: "Question",
  id: string,
  lesson?: Lesson | null,
  answers?: ModelAnswerConnection | null,
  correctAnswer: number,
  text: string,
  audio: string,
  createdAt: string,
  updatedAt: string,
  questionLessonId?: string | null,
};

export type ModelAnswerConnection = {
  __typename: "ModelAnswerConnection",
  items:  Array<Answer | null >,
  nextToken?: string | null,
};

export type Answer = {
  __typename: "Answer",
  id: string,
  question?: Question | null,
  text: string,
  audio: string,
  duration: number,
  createdAt: string,
  updatedAt: string,
  questionAnswersId?: string | null,
};

export type UpdateCourseInput = {
  id: string,
  name?: string | null,
};

export type DeleteCourseInput = {
  id: string,
};

export type CreateLessonInput = {
  id?: string | null,
  title: string,
  chapter: number,
  courseLessonsId?: string | null,
  lessonQuestionId?: string | null,
};

export type ModelLessonConditionInput = {
  title?: ModelStringInput | null,
  chapter?: ModelIntInput | null,
  and?: Array< ModelLessonConditionInput | null > | null,
  or?: Array< ModelLessonConditionInput | null > | null,
  not?: ModelLessonConditionInput | null,
  courseLessonsId?: ModelIDInput | null,
  lessonQuestionId?: ModelIDInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateLessonInput = {
  id: string,
  title?: string | null,
  chapter?: number | null,
  courseLessonsId?: string | null,
  lessonQuestionId?: string | null,
};

export type DeleteLessonInput = {
  id: string,
};

export type CreateFrameInput = {
  id?: string | null,
  text: string,
  textStyle: string,
  image: string,
  audio: string,
  duration: number,
  lessonFramesId?: string | null,
};

export type ModelFrameConditionInput = {
  text?: ModelStringInput | null,
  textStyle?: ModelStringInput | null,
  image?: ModelStringInput | null,
  audio?: ModelStringInput | null,
  duration?: ModelIntInput | null,
  and?: Array< ModelFrameConditionInput | null > | null,
  or?: Array< ModelFrameConditionInput | null > | null,
  not?: ModelFrameConditionInput | null,
  lessonFramesId?: ModelIDInput | null,
};

export type UpdateFrameInput = {
  id: string,
  text?: string | null,
  textStyle?: string | null,
  image?: string | null,
  audio?: string | null,
  duration?: number | null,
  lessonFramesId?: string | null,
};

export type DeleteFrameInput = {
  id: string,
};

export type CreateQuestionInput = {
  id?: string | null,
  correctAnswer: number,
  text: string,
  audio: string,
  questionLessonId?: string | null,
};

export type ModelQuestionConditionInput = {
  correctAnswer?: ModelIntInput | null,
  text?: ModelStringInput | null,
  audio?: ModelStringInput | null,
  and?: Array< ModelQuestionConditionInput | null > | null,
  or?: Array< ModelQuestionConditionInput | null > | null,
  not?: ModelQuestionConditionInput | null,
  questionLessonId?: ModelIDInput | null,
};

export type UpdateQuestionInput = {
  id: string,
  correctAnswer?: number | null,
  text?: string | null,
  audio?: string | null,
  questionLessonId?: string | null,
};

export type DeleteQuestionInput = {
  id: string,
};

export type CreateAnswerInput = {
  id?: string | null,
  text: string,
  audio: string,
  duration: number,
  questionAnswersId?: string | null,
};

export type ModelAnswerConditionInput = {
  text?: ModelStringInput | null,
  audio?: ModelStringInput | null,
  duration?: ModelIntInput | null,
  and?: Array< ModelAnswerConditionInput | null > | null,
  or?: Array< ModelAnswerConditionInput | null > | null,
  not?: ModelAnswerConditionInput | null,
  questionAnswersId?: ModelIDInput | null,
};

export type UpdateAnswerInput = {
  id: string,
  text?: string | null,
  audio?: string | null,
  duration?: number | null,
  questionAnswersId?: string | null,
};

export type DeleteAnswerInput = {
  id: string,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  email?: ModelStringInput | null,
  firstName?: ModelStringInput | null,
  lastName?: ModelStringInput | null,
  companyId?: ModelStringInput | null,
  role?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
  scannedCount?: number | null,
  count?: number | null,
};

export type ModelCourseFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelCourseFilterInput | null > | null,
  or?: Array< ModelCourseFilterInput | null > | null,
  not?: ModelCourseFilterInput | null,
};

export type ModelCourseConnection = {
  __typename: "ModelCourseConnection",
  items:  Array<Course | null >,
  nextToken?: string | null,
};

export type ModelLessonFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  chapter?: ModelIntInput | null,
  and?: Array< ModelLessonFilterInput | null > | null,
  or?: Array< ModelLessonFilterInput | null > | null,
  not?: ModelLessonFilterInput | null,
  courseLessonsId?: ModelIDInput | null,
  lessonQuestionId?: ModelIDInput | null,
};

export type ModelFrameFilterInput = {
  id?: ModelIDInput | null,
  text?: ModelStringInput | null,
  textStyle?: ModelStringInput | null,
  image?: ModelStringInput | null,
  audio?: ModelStringInput | null,
  duration?: ModelIntInput | null,
  and?: Array< ModelFrameFilterInput | null > | null,
  or?: Array< ModelFrameFilterInput | null > | null,
  not?: ModelFrameFilterInput | null,
  lessonFramesId?: ModelIDInput | null,
};

export type ModelQuestionFilterInput = {
  id?: ModelIDInput | null,
  correctAnswer?: ModelIntInput | null,
  text?: ModelStringInput | null,
  audio?: ModelStringInput | null,
  and?: Array< ModelQuestionFilterInput | null > | null,
  or?: Array< ModelQuestionFilterInput | null > | null,
  not?: ModelQuestionFilterInput | null,
  questionLessonId?: ModelIDInput | null,
};

export type ModelQuestionConnection = {
  __typename: "ModelQuestionConnection",
  items:  Array<Question | null >,
  nextToken?: string | null,
};

export type ModelAnswerFilterInput = {
  id?: ModelIDInput | null,
  text?: ModelStringInput | null,
  audio?: ModelStringInput | null,
  duration?: ModelIntInput | null,
  and?: Array< ModelAnswerFilterInput | null > | null,
  or?: Array< ModelAnswerFilterInput | null > | null,
  not?: ModelAnswerFilterInput | null,
  questionAnswersId?: ModelIDInput | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    email: string,
    firstName: string,
    lastName: string,
    companyId: string,
    role?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    email: string,
    firstName: string,
    lastName: string,
    companyId: string,
    role?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    email: string,
    firstName: string,
    lastName: string,
    companyId: string,
    role?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCourseMutationVariables = {
  input: CreateCourseInput,
  condition?: ModelCourseConditionInput | null,
};

export type CreateCourseMutation = {
  createCourse?:  {
    __typename: "Course",
    id: string,
    name: string,
    lessons?:  {
      __typename: "ModelLessonConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCourseMutationVariables = {
  input: UpdateCourseInput,
  condition?: ModelCourseConditionInput | null,
};

export type UpdateCourseMutation = {
  updateCourse?:  {
    __typename: "Course",
    id: string,
    name: string,
    lessons?:  {
      __typename: "ModelLessonConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCourseMutationVariables = {
  input: DeleteCourseInput,
  condition?: ModelCourseConditionInput | null,
};

export type DeleteCourseMutation = {
  deleteCourse?:  {
    __typename: "Course",
    id: string,
    name: string,
    lessons?:  {
      __typename: "ModelLessonConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateLessonMutationVariables = {
  input: CreateLessonInput,
  condition?: ModelLessonConditionInput | null,
};

export type CreateLessonMutation = {
  createLesson?:  {
    __typename: "Lesson",
    id: string,
    title: string,
    chapter: number,
    course?:  {
      __typename: "Course",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    frames?:  {
      __typename: "ModelFrameConnection",
      nextToken?: string | null,
    } | null,
    question?:  {
      __typename: "Question",
      id: string,
      correctAnswer: number,
      text: string,
      audio: string,
      createdAt: string,
      updatedAt: string,
      questionLessonId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    courseLessonsId?: string | null,
    lessonQuestionId?: string | null,
  } | null,
};

export type UpdateLessonMutationVariables = {
  input: UpdateLessonInput,
  condition?: ModelLessonConditionInput | null,
};

export type UpdateLessonMutation = {
  updateLesson?:  {
    __typename: "Lesson",
    id: string,
    title: string,
    chapter: number,
    course?:  {
      __typename: "Course",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    frames?:  {
      __typename: "ModelFrameConnection",
      nextToken?: string | null,
    } | null,
    question?:  {
      __typename: "Question",
      id: string,
      correctAnswer: number,
      text: string,
      audio: string,
      createdAt: string,
      updatedAt: string,
      questionLessonId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    courseLessonsId?: string | null,
    lessonQuestionId?: string | null,
  } | null,
};

export type DeleteLessonMutationVariables = {
  input: DeleteLessonInput,
  condition?: ModelLessonConditionInput | null,
};

export type DeleteLessonMutation = {
  deleteLesson?:  {
    __typename: "Lesson",
    id: string,
    title: string,
    chapter: number,
    course?:  {
      __typename: "Course",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    frames?:  {
      __typename: "ModelFrameConnection",
      nextToken?: string | null,
    } | null,
    question?:  {
      __typename: "Question",
      id: string,
      correctAnswer: number,
      text: string,
      audio: string,
      createdAt: string,
      updatedAt: string,
      questionLessonId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    courseLessonsId?: string | null,
    lessonQuestionId?: string | null,
  } | null,
};

export type CreateFrameMutationVariables = {
  input: CreateFrameInput,
  condition?: ModelFrameConditionInput | null,
};

export type CreateFrameMutation = {
  createFrame?:  {
    __typename: "Frame",
    id: string,
    lesson?:  {
      __typename: "Lesson",
      id: string,
      title: string,
      chapter: number,
      createdAt: string,
      updatedAt: string,
      courseLessonsId?: string | null,
      lessonQuestionId?: string | null,
    } | null,
    text: string,
    textStyle: string,
    image: string,
    audio: string,
    duration: number,
    createdAt: string,
    updatedAt: string,
    lessonFramesId?: string | null,
  } | null,
};

export type UpdateFrameMutationVariables = {
  input: UpdateFrameInput,
  condition?: ModelFrameConditionInput | null,
};

export type UpdateFrameMutation = {
  updateFrame?:  {
    __typename: "Frame",
    id: string,
    lesson?:  {
      __typename: "Lesson",
      id: string,
      title: string,
      chapter: number,
      createdAt: string,
      updatedAt: string,
      courseLessonsId?: string | null,
      lessonQuestionId?: string | null,
    } | null,
    text: string,
    textStyle: string,
    image: string,
    audio: string,
    duration: number,
    createdAt: string,
    updatedAt: string,
    lessonFramesId?: string | null,
  } | null,
};

export type DeleteFrameMutationVariables = {
  input: DeleteFrameInput,
  condition?: ModelFrameConditionInput | null,
};

export type DeleteFrameMutation = {
  deleteFrame?:  {
    __typename: "Frame",
    id: string,
    lesson?:  {
      __typename: "Lesson",
      id: string,
      title: string,
      chapter: number,
      createdAt: string,
      updatedAt: string,
      courseLessonsId?: string | null,
      lessonQuestionId?: string | null,
    } | null,
    text: string,
    textStyle: string,
    image: string,
    audio: string,
    duration: number,
    createdAt: string,
    updatedAt: string,
    lessonFramesId?: string | null,
  } | null,
};

export type CreateQuestionMutationVariables = {
  input: CreateQuestionInput,
  condition?: ModelQuestionConditionInput | null,
};

export type CreateQuestionMutation = {
  createQuestion?:  {
    __typename: "Question",
    id: string,
    lesson?:  {
      __typename: "Lesson",
      id: string,
      title: string,
      chapter: number,
      createdAt: string,
      updatedAt: string,
      courseLessonsId?: string | null,
      lessonQuestionId?: string | null,
    } | null,
    answers?:  {
      __typename: "ModelAnswerConnection",
      nextToken?: string | null,
    } | null,
    correctAnswer: number,
    text: string,
    audio: string,
    createdAt: string,
    updatedAt: string,
    questionLessonId?: string | null,
  } | null,
};

export type UpdateQuestionMutationVariables = {
  input: UpdateQuestionInput,
  condition?: ModelQuestionConditionInput | null,
};

export type UpdateQuestionMutation = {
  updateQuestion?:  {
    __typename: "Question",
    id: string,
    lesson?:  {
      __typename: "Lesson",
      id: string,
      title: string,
      chapter: number,
      createdAt: string,
      updatedAt: string,
      courseLessonsId?: string | null,
      lessonQuestionId?: string | null,
    } | null,
    answers?:  {
      __typename: "ModelAnswerConnection",
      nextToken?: string | null,
    } | null,
    correctAnswer: number,
    text: string,
    audio: string,
    createdAt: string,
    updatedAt: string,
    questionLessonId?: string | null,
  } | null,
};

export type DeleteQuestionMutationVariables = {
  input: DeleteQuestionInput,
  condition?: ModelQuestionConditionInput | null,
};

export type DeleteQuestionMutation = {
  deleteQuestion?:  {
    __typename: "Question",
    id: string,
    lesson?:  {
      __typename: "Lesson",
      id: string,
      title: string,
      chapter: number,
      createdAt: string,
      updatedAt: string,
      courseLessonsId?: string | null,
      lessonQuestionId?: string | null,
    } | null,
    answers?:  {
      __typename: "ModelAnswerConnection",
      nextToken?: string | null,
    } | null,
    correctAnswer: number,
    text: string,
    audio: string,
    createdAt: string,
    updatedAt: string,
    questionLessonId?: string | null,
  } | null,
};

export type CreateAnswerMutationVariables = {
  input: CreateAnswerInput,
  condition?: ModelAnswerConditionInput | null,
};

export type CreateAnswerMutation = {
  createAnswer?:  {
    __typename: "Answer",
    id: string,
    question?:  {
      __typename: "Question",
      id: string,
      correctAnswer: number,
      text: string,
      audio: string,
      createdAt: string,
      updatedAt: string,
      questionLessonId?: string | null,
    } | null,
    text: string,
    audio: string,
    duration: number,
    createdAt: string,
    updatedAt: string,
    questionAnswersId?: string | null,
  } | null,
};

export type UpdateAnswerMutationVariables = {
  input: UpdateAnswerInput,
  condition?: ModelAnswerConditionInput | null,
};

export type UpdateAnswerMutation = {
  updateAnswer?:  {
    __typename: "Answer",
    id: string,
    question?:  {
      __typename: "Question",
      id: string,
      correctAnswer: number,
      text: string,
      audio: string,
      createdAt: string,
      updatedAt: string,
      questionLessonId?: string | null,
    } | null,
    text: string,
    audio: string,
    duration: number,
    createdAt: string,
    updatedAt: string,
    questionAnswersId?: string | null,
  } | null,
};

export type DeleteAnswerMutationVariables = {
  input: DeleteAnswerInput,
  condition?: ModelAnswerConditionInput | null,
};

export type DeleteAnswerMutation = {
  deleteAnswer?:  {
    __typename: "Answer",
    id: string,
    question?:  {
      __typename: "Question",
      id: string,
      correctAnswer: number,
      text: string,
      audio: string,
      createdAt: string,
      updatedAt: string,
      questionLessonId?: string | null,
    } | null,
    text: string,
    audio: string,
    duration: number,
    createdAt: string,
    updatedAt: string,
    questionAnswersId?: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    email: string,
    firstName: string,
    lastName: string,
    companyId: string,
    role?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      email: string,
      firstName: string,
      lastName: string,
      companyId: string,
      role?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
    scannedCount?: number | null,
    count?: number | null,
  } | null,
};

export type GetCourseQueryVariables = {
  id: string,
};

export type GetCourseQuery = {
  getCourse?:  {
    __typename: "Course",
    id: string,
    name: string,
    lessons?:  {
      __typename: "ModelLessonConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCoursesQueryVariables = {
  filter?: ModelCourseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCoursesQuery = {
  listCourses?:  {
    __typename: "ModelCourseConnection",
    items:  Array< {
      __typename: "Course",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetLessonQueryVariables = {
  id: string,
};

export type GetLessonQuery = {
  getLesson?:  {
    __typename: "Lesson",
    id: string,
    title: string,
    chapter: number,
    course?:  {
      __typename: "Course",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    frames?:  {
      __typename: "ModelFrameConnection",
      nextToken?: string | null,
    } | null,
    question?:  {
      __typename: "Question",
      id: string,
      correctAnswer: number,
      text: string,
      audio: string,
      createdAt: string,
      updatedAt: string,
      questionLessonId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    courseLessonsId?: string | null,
    lessonQuestionId?: string | null,
  } | null,
};

export type ListLessonsQueryVariables = {
  filter?: ModelLessonFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLessonsQuery = {
  listLessons?:  {
    __typename: "ModelLessonConnection",
    items:  Array< {
      __typename: "Lesson",
      id: string,
      title: string,
      chapter: number,
      createdAt: string,
      updatedAt: string,
      courseLessonsId?: string | null,
      lessonQuestionId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetFrameQueryVariables = {
  id: string,
};

export type GetFrameQuery = {
  getFrame?:  {
    __typename: "Frame",
    id: string,
    lesson?:  {
      __typename: "Lesson",
      id: string,
      title: string,
      chapter: number,
      createdAt: string,
      updatedAt: string,
      courseLessonsId?: string | null,
      lessonQuestionId?: string | null,
    } | null,
    text: string,
    textStyle: string,
    image: string,
    audio: string,
    duration: number,
    createdAt: string,
    updatedAt: string,
    lessonFramesId?: string | null,
  } | null,
};

export type ListFramesQueryVariables = {
  filter?: ModelFrameFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFramesQuery = {
  listFrames?:  {
    __typename: "ModelFrameConnection",
    items:  Array< {
      __typename: "Frame",
      id: string,
      text: string,
      textStyle: string,
      image: string,
      audio: string,
      duration: number,
      createdAt: string,
      updatedAt: string,
      lessonFramesId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetQuestionQueryVariables = {
  id: string,
};

export type GetQuestionQuery = {
  getQuestion?:  {
    __typename: "Question",
    id: string,
    lesson?:  {
      __typename: "Lesson",
      id: string,
      title: string,
      chapter: number,
      createdAt: string,
      updatedAt: string,
      courseLessonsId?: string | null,
      lessonQuestionId?: string | null,
    } | null,
    answers?:  {
      __typename: "ModelAnswerConnection",
      nextToken?: string | null,
    } | null,
    correctAnswer: number,
    text: string,
    audio: string,
    createdAt: string,
    updatedAt: string,
    questionLessonId?: string | null,
  } | null,
};

export type ListQuestionsQueryVariables = {
  filter?: ModelQuestionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListQuestionsQuery = {
  listQuestions?:  {
    __typename: "ModelQuestionConnection",
    items:  Array< {
      __typename: "Question",
      id: string,
      correctAnswer: number,
      text: string,
      audio: string,
      createdAt: string,
      updatedAt: string,
      questionLessonId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetAnswerQueryVariables = {
  id: string,
};

export type GetAnswerQuery = {
  getAnswer?:  {
    __typename: "Answer",
    id: string,
    question?:  {
      __typename: "Question",
      id: string,
      correctAnswer: number,
      text: string,
      audio: string,
      createdAt: string,
      updatedAt: string,
      questionLessonId?: string | null,
    } | null,
    text: string,
    audio: string,
    duration: number,
    createdAt: string,
    updatedAt: string,
    questionAnswersId?: string | null,
  } | null,
};

export type ListAnswersQueryVariables = {
  filter?: ModelAnswerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAnswersQuery = {
  listAnswers?:  {
    __typename: "ModelAnswerConnection",
    items:  Array< {
      __typename: "Answer",
      id: string,
      text: string,
      audio: string,
      duration: number,
      createdAt: string,
      updatedAt: string,
      questionAnswersId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    email: string,
    firstName: string,
    lastName: string,
    companyId: string,
    role?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    email: string,
    firstName: string,
    lastName: string,
    companyId: string,
    role?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    email: string,
    firstName: string,
    lastName: string,
    companyId: string,
    role?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCourseSubscription = {
  onCreateCourse?:  {
    __typename: "Course",
    id: string,
    name: string,
    lessons?:  {
      __typename: "ModelLessonConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCourseSubscription = {
  onUpdateCourse?:  {
    __typename: "Course",
    id: string,
    name: string,
    lessons?:  {
      __typename: "ModelLessonConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCourseSubscription = {
  onDeleteCourse?:  {
    __typename: "Course",
    id: string,
    name: string,
    lessons?:  {
      __typename: "ModelLessonConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateLessonSubscription = {
  onCreateLesson?:  {
    __typename: "Lesson",
    id: string,
    title: string,
    chapter: number,
    course?:  {
      __typename: "Course",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    frames?:  {
      __typename: "ModelFrameConnection",
      nextToken?: string | null,
    } | null,
    question?:  {
      __typename: "Question",
      id: string,
      correctAnswer: number,
      text: string,
      audio: string,
      createdAt: string,
      updatedAt: string,
      questionLessonId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    courseLessonsId?: string | null,
    lessonQuestionId?: string | null,
  } | null,
};

export type OnUpdateLessonSubscription = {
  onUpdateLesson?:  {
    __typename: "Lesson",
    id: string,
    title: string,
    chapter: number,
    course?:  {
      __typename: "Course",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    frames?:  {
      __typename: "ModelFrameConnection",
      nextToken?: string | null,
    } | null,
    question?:  {
      __typename: "Question",
      id: string,
      correctAnswer: number,
      text: string,
      audio: string,
      createdAt: string,
      updatedAt: string,
      questionLessonId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    courseLessonsId?: string | null,
    lessonQuestionId?: string | null,
  } | null,
};

export type OnDeleteLessonSubscription = {
  onDeleteLesson?:  {
    __typename: "Lesson",
    id: string,
    title: string,
    chapter: number,
    course?:  {
      __typename: "Course",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null,
    frames?:  {
      __typename: "ModelFrameConnection",
      nextToken?: string | null,
    } | null,
    question?:  {
      __typename: "Question",
      id: string,
      correctAnswer: number,
      text: string,
      audio: string,
      createdAt: string,
      updatedAt: string,
      questionLessonId?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    courseLessonsId?: string | null,
    lessonQuestionId?: string | null,
  } | null,
};

export type OnCreateFrameSubscription = {
  onCreateFrame?:  {
    __typename: "Frame",
    id: string,
    lesson?:  {
      __typename: "Lesson",
      id: string,
      title: string,
      chapter: number,
      createdAt: string,
      updatedAt: string,
      courseLessonsId?: string | null,
      lessonQuestionId?: string | null,
    } | null,
    text: string,
    textStyle: string,
    image: string,
    audio: string,
    duration: number,
    createdAt: string,
    updatedAt: string,
    lessonFramesId?: string | null,
  } | null,
};

export type OnUpdateFrameSubscription = {
  onUpdateFrame?:  {
    __typename: "Frame",
    id: string,
    lesson?:  {
      __typename: "Lesson",
      id: string,
      title: string,
      chapter: number,
      createdAt: string,
      updatedAt: string,
      courseLessonsId?: string | null,
      lessonQuestionId?: string | null,
    } | null,
    text: string,
    textStyle: string,
    image: string,
    audio: string,
    duration: number,
    createdAt: string,
    updatedAt: string,
    lessonFramesId?: string | null,
  } | null,
};

export type OnDeleteFrameSubscription = {
  onDeleteFrame?:  {
    __typename: "Frame",
    id: string,
    lesson?:  {
      __typename: "Lesson",
      id: string,
      title: string,
      chapter: number,
      createdAt: string,
      updatedAt: string,
      courseLessonsId?: string | null,
      lessonQuestionId?: string | null,
    } | null,
    text: string,
    textStyle: string,
    image: string,
    audio: string,
    duration: number,
    createdAt: string,
    updatedAt: string,
    lessonFramesId?: string | null,
  } | null,
};

export type OnCreateQuestionSubscription = {
  onCreateQuestion?:  {
    __typename: "Question",
    id: string,
    lesson?:  {
      __typename: "Lesson",
      id: string,
      title: string,
      chapter: number,
      createdAt: string,
      updatedAt: string,
      courseLessonsId?: string | null,
      lessonQuestionId?: string | null,
    } | null,
    answers?:  {
      __typename: "ModelAnswerConnection",
      nextToken?: string | null,
    } | null,
    correctAnswer: number,
    text: string,
    audio: string,
    createdAt: string,
    updatedAt: string,
    questionLessonId?: string | null,
  } | null,
};

export type OnUpdateQuestionSubscription = {
  onUpdateQuestion?:  {
    __typename: "Question",
    id: string,
    lesson?:  {
      __typename: "Lesson",
      id: string,
      title: string,
      chapter: number,
      createdAt: string,
      updatedAt: string,
      courseLessonsId?: string | null,
      lessonQuestionId?: string | null,
    } | null,
    answers?:  {
      __typename: "ModelAnswerConnection",
      nextToken?: string | null,
    } | null,
    correctAnswer: number,
    text: string,
    audio: string,
    createdAt: string,
    updatedAt: string,
    questionLessonId?: string | null,
  } | null,
};

export type OnDeleteQuestionSubscription = {
  onDeleteQuestion?:  {
    __typename: "Question",
    id: string,
    lesson?:  {
      __typename: "Lesson",
      id: string,
      title: string,
      chapter: number,
      createdAt: string,
      updatedAt: string,
      courseLessonsId?: string | null,
      lessonQuestionId?: string | null,
    } | null,
    answers?:  {
      __typename: "ModelAnswerConnection",
      nextToken?: string | null,
    } | null,
    correctAnswer: number,
    text: string,
    audio: string,
    createdAt: string,
    updatedAt: string,
    questionLessonId?: string | null,
  } | null,
};

export type OnCreateAnswerSubscription = {
  onCreateAnswer?:  {
    __typename: "Answer",
    id: string,
    question?:  {
      __typename: "Question",
      id: string,
      correctAnswer: number,
      text: string,
      audio: string,
      createdAt: string,
      updatedAt: string,
      questionLessonId?: string | null,
    } | null,
    text: string,
    audio: string,
    duration: number,
    createdAt: string,
    updatedAt: string,
    questionAnswersId?: string | null,
  } | null,
};

export type OnUpdateAnswerSubscription = {
  onUpdateAnswer?:  {
    __typename: "Answer",
    id: string,
    question?:  {
      __typename: "Question",
      id: string,
      correctAnswer: number,
      text: string,
      audio: string,
      createdAt: string,
      updatedAt: string,
      questionLessonId?: string | null,
    } | null,
    text: string,
    audio: string,
    duration: number,
    createdAt: string,
    updatedAt: string,
    questionAnswersId?: string | null,
  } | null,
};

export type OnDeleteAnswerSubscription = {
  onDeleteAnswer?:  {
    __typename: "Answer",
    id: string,
    question?:  {
      __typename: "Question",
      id: string,
      correctAnswer: number,
      text: string,
      audio: string,
      createdAt: string,
      updatedAt: string,
      questionLessonId?: string | null,
    } | null,
    text: string,
    audio: string,
    duration: number,
    createdAt: string,
    updatedAt: string,
    questionAnswersId?: string | null,
  } | null,
};
