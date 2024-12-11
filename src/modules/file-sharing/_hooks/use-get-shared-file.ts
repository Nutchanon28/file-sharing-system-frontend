import { useQuery, gql } from '@apollo/client'

const QUERY = gql`
  query SharedFiles {
    sharedFiles {
      id
      name
      fileUrl
      createdAt
      updatedAt
    }
  }
`

// TODO: Make this type safe?
export const useGetSharedFile = () => useQuery(QUERY)
