import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  gap: 1.6rem;

  overflow: scroll;

  & > :hover {
    cursor: pointer;
  }
`;
