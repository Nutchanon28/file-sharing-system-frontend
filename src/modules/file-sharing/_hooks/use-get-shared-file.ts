import { gql } from '@/__generated__'
import { useQuery } from '@apollo/client'

const QUERY = gql(`
  query SharedFiles {
    sharedFiles {
      id
      name
      fileUrl
      createdAt
      updatedAt
    }
  }
`)

export const useGetSharedFile = () => useQuery(QUERY)
