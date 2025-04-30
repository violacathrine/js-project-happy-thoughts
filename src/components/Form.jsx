import { useState } from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  background-color: #fff8ee;
  width: 50%;
  margin: 0 auto;
`;

const StyledInput = styled.input`
border-radius: 10px;
padding: 10px;
margin: 10px;
`;

const Button = styled.button`
color: blue;
`;

export const Form = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage("");
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <label htmlFor>Do you have some happy thoughts to share today?
        <StyledInput
        type="text"
        value={message}
        onChange={(event) => setMessage(event.target.value)}/>
      </label>
      <button>Send</button>
    </StyledForm>
  );
};
