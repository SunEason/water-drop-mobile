import { gql } from '@apollo/client'

export const getAllUser = gql`
  query AllUser {
    users {
      id
      name
      password
      account
      desc
      tel
      createTime
      updateTime
    }
  }
`
