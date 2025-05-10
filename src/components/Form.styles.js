import styled from "styled-components";

export const FormWrapper = styled.section`
  max-width: 450px;
  margin: 0 auto;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  background:rgb(237, 237, 237);
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
  padding: 10px 16px;
  margin-top: 16px;
  font-size: 16px;
  background:rgba(255, 94, 126, 0.72);
  font-weight: 500;
  border-radius: 30px;
  cursor: pointer;
  border: none;
  font-family: inherit;
  color: black;

  &:hover {
    opacity: 0.9;
  }
`;

export const StyledErrorMessage = styled.p`
  color: red;
  margin: 10px;
  font-size: 14px;
  font-weight: 500;
`;
