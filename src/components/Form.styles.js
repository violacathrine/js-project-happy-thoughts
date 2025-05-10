import styled from "styled-components";

export const FormWrapper = styled.section`
  max-width: 450px;
  margin: 0 auto;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  background: rgb(237, 237, 237);
  width: 100%;
  border: 1px solid #ccc;
  padding: 16px;
  box-shadow: 7px 7px 0px rgb(0, 0, 0);
`;

export const StyledLabel = styled.label`
  color: rgb(0, 0, 0);
  font-size: 18px;
  margin: 10px 10px 0px;
`;

export const StyledTextarea = styled.textarea`
  outline: none;
  width: 100%;
  border: 1px solid #ccc;
  padding: 8px;
  margin-top: 10px;
  font-size: 15px;
  font-family: inherit;
  resize: none;
`;

export const StyledInfoCharacterText = styled.p`
  font-size: 14px;
  margin: 0px 10px 0px;
  color: ${(props) => (props.$exceedsLimit ? "red" : "gray")};
`;

export const StyledButton = styled.button`
  display: flex;
  font-family: courier new;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 10px 16px;
  border: none;
  border-radius: 25px;
  background-color: rgb(255, 166, 178);
  color: black;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: pink;
  }
`;

export const StyledErrorMessage = styled.p`
  color: red;
  margin: 10px;
  font-size: 14px;
  font-weight: 500;
`;
