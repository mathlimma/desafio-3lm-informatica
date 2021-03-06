import styled from 'styled-components';
import { Form as Unform } from '@unform/web';

export const Form = styled(Unform)`
  padding: 18px 10px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-weight: 600;
  font-size: 36px;
  line-height: 36px;
  margin-bottom: 40px;
  color: #fff;
`;

export const Button = styled.button`
  font-weight: 600;
  border-radius: 8px;
  border: 0;
  background: #39b100;
  color: #fff;
  margin-top: 48px;
  align-self: flex-end;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled.div`
  display: flex;
  padding: 16px 16px;
  background: #41c900;
  border-radius: 0 8px 8px 0;
  margin: 0 auto;
`;

export const Text = styled.p`
  padding: 16px 24px;
`;

export const Select = styled.select`
  margin: 20px 0px 20px 0px;
  height: 60px;
  border-radius: 8px;
  background: #fff;
  color: #b7b7cc;
  font-size: 16px;
  padding: 0px 20px 0px 20px;
`;

export const Option = styled.option``;
