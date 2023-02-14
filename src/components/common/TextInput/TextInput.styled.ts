import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
`;

export const Input = styled.input<{ $active: boolean }>`
  width: 100%;

  padding: 0.8rem;

  border-radius: 18px;
  border: 2px solid ${(props) => (props.$active ? '#0084ff' : '#b2b2b2')};

  color: #050505;
  font-size: 1.5rem;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #cccccc;
  }
`;
