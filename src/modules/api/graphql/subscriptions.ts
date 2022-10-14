/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateCourse = /* GraphQL */ `
  subscription OnCreateCourse {
    onCreateCourse {
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
export const onUpdateCourse = /* GraphQL */ `
  subscription OnUpdateCourse {
    onUpdateCourse {
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
export const onDeleteCourse = /* GraphQL */ `
  subscription OnDeleteCourse {
    onDeleteCourse {
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
export const onCreateLesson = /* GraphQL */ `
  subscription OnCreateLesson {
    onCreateLesson {
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
export const onUpdateLesson = /* GraphQL */ `
  subscription OnUpdateLesson {
    onUpdateLesson {
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
export const onDeleteLesson = /* GraphQL */ `
  subscription OnDeleteLesson {
    onDeleteLesson {
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
export const onCreateFrame = /* GraphQL */ `
  subscription OnCreateFrame {
    onCreateFrame {
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
export const onUpdateFrame = /* GraphQL */ `
  subscription OnUpdateFrame {
    onUpdateFrame {
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
export const onDeleteFrame = /* GraphQL */ `
  subscription OnDeleteFrame {
    onDeleteFrame {
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
export const onCreateQuestion = /* GraphQL */ `
  subscription OnCreateQuestion {
    onCreateQuestion {
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
export const onUpdateQuestion = /* GraphQL */ `
  subscription OnUpdateQuestion {
    onUpdateQuestion {
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
export const onDeleteQuestion = /* GraphQL */ `
  subscription OnDeleteQuestion {
    onDeleteQuestion {
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
export const onCreateAnswer = /* GraphQL */ `
  subscription OnCreateAnswer {
    onCreateAnswer {
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
export const onUpdateAnswer = /* GraphQL */ `
  subscription OnUpdateAnswer {
    onUpdateAnswer {
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
export const onDeleteAnswer = /* GraphQL */ `
  subscription OnDeleteAnswer {
    onDeleteAnswer {
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
