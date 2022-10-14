/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        firstName
        lastName
        companyId
        role
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCourse = /* GraphQL */ `
  query GetCourse($id: ID!) {
    getCourse(id: $id) {
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
export const listCourses = /* GraphQL */ `
  query ListCourses(
    $filter: ModelCourseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getLesson = /* GraphQL */ `
  query GetLesson($id: ID!) {
    getLesson(id: $id) {
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
export const listLessons = /* GraphQL */ `
  query ListLessons(
    $filter: ModelLessonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLessons(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        chapter
        createdAt
        updatedAt
        courseLessonsId
        lessonQuestionId
      }
      nextToken
    }
  }
`;
export const getFrame = /* GraphQL */ `
  query GetFrame($id: ID!) {
    getFrame(id: $id) {
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
export const listFrames = /* GraphQL */ `
  query ListFrames(
    $filter: ModelFrameFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFrames(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        text
        textStyle
        image
        audio
        duration
        createdAt
        updatedAt
        lessonFramesId
      }
      nextToken
    }
  }
`;
export const getQuestion = /* GraphQL */ `
  query GetQuestion($id: ID!) {
    getQuestion(id: $id) {
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
export const listQuestions = /* GraphQL */ `
  query ListQuestions(
    $filter: ModelQuestionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        correctAnswer
        text
        audio
        createdAt
        updatedAt
        questionLessonId
      }
      nextToken
    }
  }
`;
export const getAnswer = /* GraphQL */ `
  query GetAnswer($id: ID!) {
    getAnswer(id: $id) {
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
export const listAnswers = /* GraphQL */ `
  query ListAnswers(
    $filter: ModelAnswerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAnswers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        text
        audio
        duration
        createdAt
        updatedAt
        questionAnswersId
      }
      nextToken
    }
  }
`;
