/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      email
      firstName
      lastName
      companyId
      role
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      email
      firstName
      lastName
      companyId
      role
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      email
      firstName
      lastName
      companyId
      role
      createdAt
      updatedAt
    }
  }
`;
export const createCourse = /* GraphQL */ `
  mutation CreateCourse(
    $input: CreateCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    createCourse(input: $input, condition: $condition) {
      id
      name
      lessons {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateCourse = /* GraphQL */ `
  mutation UpdateCourse(
    $input: UpdateCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    updateCourse(input: $input, condition: $condition) {
      id
      name
      lessons {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteCourse = /* GraphQL */ `
  mutation DeleteCourse(
    $input: DeleteCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    deleteCourse(input: $input, condition: $condition) {
      id
      name
      lessons {
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createLesson = /* GraphQL */ `
  mutation CreateLesson(
    $input: CreateLessonInput!
    $condition: ModelLessonConditionInput
  ) {
    createLesson(input: $input, condition: $condition) {
      id
      title
      chapter
      course {
        id
        name
        createdAt
        updatedAt
      }
      frames {
        nextToken
      }
      question {
        id
        correctAnswer
        text
        audio
        createdAt
        updatedAt
        questionLessonId
      }
      createdAt
      updatedAt
      courseLessonsId
      lessonQuestionId
    }
  }
`;
export const updateLesson = /* GraphQL */ `
  mutation UpdateLesson(
    $input: UpdateLessonInput!
    $condition: ModelLessonConditionInput
  ) {
    updateLesson(input: $input, condition: $condition) {
      id
      title
      chapter
      course {
        id
        name
        createdAt
        updatedAt
      }
      frames {
        nextToken
      }
      question {
        id
        correctAnswer
        text
        audio
        createdAt
        updatedAt
        questionLessonId
      }
      createdAt
      updatedAt
      courseLessonsId
      lessonQuestionId
    }
  }
`;
export const deleteLesson = /* GraphQL */ `
  mutation DeleteLesson(
    $input: DeleteLessonInput!
    $condition: ModelLessonConditionInput
  ) {
    deleteLesson(input: $input, condition: $condition) {
      id
      title
      chapter
      course {
        id
        name
        createdAt
        updatedAt
      }
      frames {
        nextToken
      }
      question {
        id
        correctAnswer
        text
        audio
        createdAt
        updatedAt
        questionLessonId
      }
      createdAt
      updatedAt
      courseLessonsId
      lessonQuestionId
    }
  }
`;
export const createFrame = /* GraphQL */ `
  mutation CreateFrame(
    $input: CreateFrameInput!
    $condition: ModelFrameConditionInput
  ) {
    createFrame(input: $input, condition: $condition) {
      id
      lesson {
        id
        title
        chapter
        createdAt
        updatedAt
        courseLessonsId
        lessonQuestionId
      }
      text
      textStyle
      image
      audio
      duration
      createdAt
      updatedAt
      lessonFramesId
    }
  }
`;
export const updateFrame = /* GraphQL */ `
  mutation UpdateFrame(
    $input: UpdateFrameInput!
    $condition: ModelFrameConditionInput
  ) {
    updateFrame(input: $input, condition: $condition) {
      id
      lesson {
        id
        title
        chapter
        createdAt
        updatedAt
        courseLessonsId
        lessonQuestionId
      }
      text
      textStyle
      image
      audio
      duration
      createdAt
      updatedAt
      lessonFramesId
    }
  }
`;
export const deleteFrame = /* GraphQL */ `
  mutation DeleteFrame(
    $input: DeleteFrameInput!
    $condition: ModelFrameConditionInput
  ) {
    deleteFrame(input: $input, condition: $condition) {
      id
      lesson {
        id
        title
        chapter
        createdAt
        updatedAt
        courseLessonsId
        lessonQuestionId
      }
      text
      textStyle
      image
      audio
      duration
      createdAt
      updatedAt
      lessonFramesId
    }
  }
`;
export const createQuestion = /* GraphQL */ `
  mutation CreateQuestion(
    $input: CreateQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    createQuestion(input: $input, condition: $condition) {
      id
      lesson {
        id
        title
        chapter
        createdAt
        updatedAt
        courseLessonsId
        lessonQuestionId
      }
      answers {
        nextToken
      }
      correctAnswer
      text
      audio
      createdAt
      updatedAt
      questionLessonId
    }
  }
`;
export const updateQuestion = /* GraphQL */ `
  mutation UpdateQuestion(
    $input: UpdateQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    updateQuestion(input: $input, condition: $condition) {
      id
      lesson {
        id
        title
        chapter
        createdAt
        updatedAt
        courseLessonsId
        lessonQuestionId
      }
      answers {
        nextToken
      }
      correctAnswer
      text
      audio
      createdAt
      updatedAt
      questionLessonId
    }
  }
`;
export const deleteQuestion = /* GraphQL */ `
  mutation DeleteQuestion(
    $input: DeleteQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    deleteQuestion(input: $input, condition: $condition) {
      id
      lesson {
        id
        title
        chapter
        createdAt
        updatedAt
        courseLessonsId
        lessonQuestionId
      }
      answers {
        nextToken
      }
      correctAnswer
      text
      audio
      createdAt
      updatedAt
      questionLessonId
    }
  }
`;
export const createAnswer = /* GraphQL */ `
  mutation CreateAnswer(
    $input: CreateAnswerInput!
    $condition: ModelAnswerConditionInput
  ) {
    createAnswer(input: $input, condition: $condition) {
      id
      question {
        id
        correctAnswer
        text
        audio
        createdAt
        updatedAt
        questionLessonId
      }
      text
      audio
      duration
      createdAt
      updatedAt
      questionAnswersId
    }
  }
`;
export const updateAnswer = /* GraphQL */ `
  mutation UpdateAnswer(
    $input: UpdateAnswerInput!
    $condition: ModelAnswerConditionInput
  ) {
    updateAnswer(input: $input, condition: $condition) {
      id
      question {
        id
        correctAnswer
        text
        audio
        createdAt
        updatedAt
        questionLessonId
      }
      text
      audio
      duration
      createdAt
      updatedAt
      questionAnswersId
    }
  }
`;
export const deleteAnswer = /* GraphQL */ `
  mutation DeleteAnswer(
    $input: DeleteAnswerInput!
    $condition: ModelAnswerConditionInput
  ) {
    deleteAnswer(input: $input, condition: $condition) {
      id
      question {
        id
        correctAnswer
        text
        audio
        createdAt
        updatedAt
        questionLessonId
      }
      text
      audio
      duration
      createdAt
      updatedAt
      questionAnswersId
    }
  }
`;
