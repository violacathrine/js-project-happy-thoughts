import styled from "styled-components";

export const FormWrapper = styled.section`
  max-width: 450px;
  margin: 0 auto;
`;

export const StyledForm = styled.form`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  background-color: rgba(237, 220, 217, 0.65);
  height: auto;
  width: auto;
  border: 2px solid #264143;
  box-shadow: 7px 7px 0px #e99f4c;
  border-radius: 5px;
`;

export const StyledLabel = styled.label`
  color: rgb(0, 0, 0);
  font-size: 18px;
  margin: 10px 10px 0px;
`;

export const StyledTextarea = styled.textarea`
  outline: none;
  width: 100%;
  border: 2px solid #264143;
  margin-top: 10px;
  font-size: 15px;
  resize: none;
`;

export const StyledInfoCharacterText = styled.p`
  font-size: 14px;
  margin: 0px 10px 0px;
  color: ${(props) => (props.exceedsLimit ? "red" : "gray")};
`;

export const StyledButton = styled.button`
  padding: 8px;
  margin: 10px;
  font-size: 16px;
  background: rgb(244, 150, 197);
  font-weight: 500;
  border-radius: 50px;
  cursor: pointer;
  border: none;

  &:hover {
    background: rgb(230, 130, 180);
  }
`;

export const StyledErrorMessage = styled.p`
  color: red;
  margin: 10px;
  font-size: 14px;
  font-weight: 500;
`;