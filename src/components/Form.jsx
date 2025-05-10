import { useState } from "react";
import { HeartIcon } from "./HeartIcon";
import {
  FormWrapper,
  StyledForm,
  StyledLabel,
  StyledTextarea,
  StyledInfoCharacterText,
  StyledButton,
  StyledErrorMessage,
} from "./Form.styles";

export const Form = ({ onSubmitMessage }) => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const maxLength = 140;
  const isTooLong = message.length > maxLength;

  const handleSubmit = (event) => {
    event.preventDefault();

    if (message.length < 5) {
      setError("Your message is too short.");
      return;
    }

    if (message.length > maxLength) {
      setError("Your message is too long.");
      return;
    }

    setError("");

    onSubmitMessage(message);
    setMessage("");
  };

  return (
    <FormWrapper>
      <StyledForm onSubmit={handleSubmit}>
        <StyledLabel>
          What's making you happy today?
          <StyledTextarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSubmit(e);
              }
            }}
          />
        </StyledLabel>

        <StyledInfoCharacterText $exceedsLimit={isTooLong}>
          {maxLength - message.length} characters remaining
        </StyledInfoCharacterText>

        {error && <StyledErrorMessage>{error}</StyledErrorMessage>}

        <StyledButton type="submit">
          <HeartIcon /> Send Happy Thought <HeartIcon />
        </StyledButton>
      </StyledForm>
    </FormWrapper>
  );
};
