import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query Repositories($orderDirection: OrderDirection, $orderBy: AllRepositoriesOrderBy, $filter: String) {
    repositories(orderDirection: $orderDirection, orderBy: $orderBy, searchKeyword: $filter) {
        edges {
          node {
            id
            fullName
            description
            language
            stargazersCount
            forksCount
            reviewCount
            ratingAverage
            ownerAvatarUrl
          }
        }
      }
  }
`;




export const SIGNED_IN_USER = gql`
  query SignInUser {
    me {
      id
      username
    }
  }
`;

export const GET_REPOSITORY = gql`
  query Repository($id: ID!) {
    repository(id: $id) {
      id
      fullName
      description
      language
      stargazersCount
      forksCount
      reviewCount
      ratingAverage
      ownerAvatarUrl
      url
      reviews {
        edges {
          node {
            id
            text
            rating
            createdAt
            user {
              id
              username
            }
          }
        }
      }
    }
  }
`;
