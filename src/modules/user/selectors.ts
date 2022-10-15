export const selectRoot = (state: any) => state.user
export const selectUsers = (state: any) => selectRoot(state).users
export const selectUser = (state: any) => selectRoot(state).user
