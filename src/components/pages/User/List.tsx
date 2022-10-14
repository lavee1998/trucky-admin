import React from 'react'
import { useUser } from '../../../modules/user'
// import { useLesson } from '../../../modules/lesson'

const List = () => {
  const { users } = useUser()
  console.log({ users })
  return <div>List</div>
}

export default List
