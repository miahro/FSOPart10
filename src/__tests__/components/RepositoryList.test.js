import { render } from "@testing-library/react-native";
import { RepositoryListContainer } from "../../components/RepositoryList";
import { formatThousands } from "../../utils/formatThousands";

describe("RepositoryList", () => {
  describe("RepositoryListContainer", () => {
    it("renders repository information correctly", () => {
      const repositories = {
        totalCount: 8,
        pageInfo: {
          hasNextPage: true,
          endCursor:
            "WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==",
          startCursor: "WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd",
        },
        edges: [
          {
            node: {
              id: "jaredpalmer.formik",
              fullName: "jaredpalmer/formik",
              description: "Build forms in React, without the tears",
              language: "TypeScript",
              forksCount: 1619,
              stargazersCount: 21856,
              ratingAverage: 88,
              reviewCount: 3,
              ownerAvatarUrl:
                "https://avatars2.githubusercontent.com/u/4060187?v=4",
            },
            cursor: "WyJqYXJlZHBhbG1lci5mb3JtaWsiLDE1ODg2NjAzNTAwNzZd",
          },
          {
            node: {
              id: "async-library.react-async",
              fullName: "async-library/react-async",
              description: "Flexible promise-based React data loader",
              language: "JavaScript",
              forksCount: 69,
              stargazersCount: 1760,
              ratingAverage: 72,
              reviewCount: 3,
              ownerAvatarUrl:
                "https://avatars1.githubusercontent.com/u/54310907?v=4",
            },
            cursor:
              "WyJhc3luYy1saWJyYXJ5LnJlYWN0LWFzeW5jIiwxNTg4NjU2NzUwMDc2XQ==",
          },
        ],
      };

      const { getAllByTestId } = render(
        <RepositoryListContainer repositories={repositories} />
      );

      for (let i = 0; i < repositories.edges.length; i++) {
        expect(getAllByTestId("fullName")[i]).toHaveTextContent(
          repositories.edges[i].node.fullName
        );
        expect(getAllByTestId("description")[i]).toHaveTextContent(
          repositories.edges[i].node.description
        );
        expect(getAllByTestId("language")[i]).toHaveTextContent(
          repositories.edges[i].node.language
        );
        expect(getAllByTestId("starCount")[i]).toHaveTextContent(
          formatThousands(repositories.edges[i].node.stargazersCount)
        );
        expect(getAllByTestId("forkCount")[i]).toHaveTextContent(
          formatThousands(repositories.edges[i].node.forksCount)
        );
        expect(getAllByTestId("reviewCount")[i]).toHaveTextContent(
          formatThousands(repositories.edges[i].node.reviewCount)
        );
        expect(getAllByTestId("ratingAverage")[i]).toHaveTextContent(
          formatThousands(repositories.edges[i].node.ratingAverage)
        );
      }
    });
  });
});
