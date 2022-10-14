export const selectRoot = (state: any) => state.lesson
export const selectLessons = (state: any) => selectRoot(state).lessons
