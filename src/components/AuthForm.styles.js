import styled from "styled-components";

export const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ErrorMessage = styled.p`
  color: red;
  margin: 0;
  font-size: 14px;
`;

export const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  font-family: inherit;

  &:focus {
    outline: none;
    border-color: #333;
  }
`;

export const SubmitButton = styled.button`
  padding: 10px 20px;
  background: rgb(255, 166, 178);
  color: black;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  font-size: 16px;
  font-family: inherit;
  font-weight: 500;
  transition: background 0.2s ease;

  &:hover {
    background: pink;
  }

  &:active {
    transform: translateY(1px);
  }
`;