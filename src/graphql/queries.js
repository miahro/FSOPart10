import { gql } from "@apollo/client";

export const GET_REPOSITORIES = gql`
  query Repositories($orderDirection: OrderDirection, $orderBy: AllRepositoriesOrderBy) {
    repositories(orderDirection: $orderDirection, orderBy: $orderBy) {
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

// export const GET_REPOSITORIES = gql`
//   query Repositories {
//     repositories(orderDirection: DESC, orderBy: RATING_AVERAGE) {
//         edges {
//           node {
//             id
//             fullName
//             description
//             language
//             stargazersCount
//             forksCount
//             reviewCount
//             ratingAverage
//             ownerAvatarUrl
//           }
//         }
//       }
//   }
// `;



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
