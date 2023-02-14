import styled, { css } from 'styled-components';

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

export const InputContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const ButtonContainer = styled.div<{ $disabled?: boolean }>`
  ${(props) =>
    !props.$disabled &&
    css`
      &:hover {
        cursor: pointer;
      }
    `}
`;

export const MessagesContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  padding: 1.2rem 0;

  overflow: scroll;
`;

export const Header = styled.div`
  width: 100%;

  padding: 1.6rem 1.2rem;

  display: flex;
  align-items: center;

  background-color: #e6e6e6;
  border-top: 1px solid #080808;

  font-size: 1.8rem;
  font-weight: bold;
  color: #080808;
`;

export const Image = styled.img`
  height: 3.3rem;
  width: auto;

  margin-left: 3rem;
  margin-right: 1rem;

  border-radius: 50%;
`;
