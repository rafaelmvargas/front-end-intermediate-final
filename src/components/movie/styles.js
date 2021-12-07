import styled from "styled-components";

export const MovieStyle = styled.div`
  display: flex;
  flex: row wrap;

  img {
    width: 95%;
  }
  a {
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
`;

export const MovieInfo = styled.div`
  display: inline-block;
  padding: 0px 10px;
  width: 95%;
  background-color: var(--movie-bg);
`;
