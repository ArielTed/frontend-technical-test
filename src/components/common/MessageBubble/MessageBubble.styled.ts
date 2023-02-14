import styled, { css } from 'styled-components';

export const Container = styled.div<{ $isSender: boolean }>`
  width: 100%;

  display: flex;
  align-items: ${(props) => (props.$isSender ? 'flex-end' : 'flex-start')};
  flex-direction: column;
`;

export const Bubble = styled.div<{ $isSender: boolean }>`
  width: fit-content;
  max-width: 60%;

  padding: 0.8rem 1.2rem;

  overflow-wrap: break-word;

  border-radius: 18px;
  background-color: ${(props) => (props.$isSender ? '#0084ff' : '#E4E6EB')};

  color: ${(props) => (props.$isSender ? '#ffffff' : '#050505')};
  font-size: 1.5rem;
`;

export const Timestamp = styled.p<{ $isSender: boolean }>`
  margin-top: 0.2rem;

  color: #b2b2b2;

  ${(props) =>
    props.$isSender
      ? css`
          margin-right: 1.2rem;
        `
      : css`
          margin-left: 1.2rem;
        `}
`;
