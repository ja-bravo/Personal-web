import styled from 'styled-components/macro';

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 4rem;
  @media screen and (min-width: 1600px) {
    width: 66.67%;
  }
`;

export default Row;
