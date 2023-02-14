import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  padding: 1.2rem;

  display: flex;
  align-items: center;
  gap: 4rem;

  border: 1px solid #b2b2b2;
  border-radius: 8px;
`;

export const Image = styled.img`
  height: 5rem;
  width: auto;

  border-radius: 50%;
`;

export const Details = styled.div`
  padding-right: 2rem;

  display: flex;
  flex-direction: column;
  gap: 0.7rem;

  overflow: hidden;
`;

export const Title = styled.p`
  font-size: 1.8rem;
  color: #080808;
`;

export const Date = styled.p`
  font-size: 1.4rem;
  color: #808080;
`;
