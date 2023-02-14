import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  padding: 1.2rem;

  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    max-width: 768px;
  }
`;

export const Header = styled.div`
  width: 100%;

  margin-bottom: 1.2rem;
  padding: 0 0.4rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const IconContainer = styled.div`
  padding: 0.4rem;

  background-color: #e6e6e6;
  border-radius: 50%;

  &:hover {
    cursor: pointer;
  }
`;
