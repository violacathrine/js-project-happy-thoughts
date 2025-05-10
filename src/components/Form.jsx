import { useState } from "react";
import { MessageCard } from "./MessageCard";
import {
  FormWrapper,
  StyledForm,
  StyledLabel,
  StyledTextarea,
  StyledInfoCharacterText,
  StyledButton,
  StyledErrorMessage,
} from "./Form.styles";

export const Form = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const maxLength = 140;
  const isTooLong = message.length > maxLength;

  const [error, setError] = useState("");

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

    const capitalizedMessage =
      message.charAt(0).toUpperCase() + message.slice(1);

    const newMessage = {
      id: Date.now(),
      text: capitalizedMessage,
      createdAt: new Date(),
    };

    setMessages([newMessage, ...messages]);
    setMessage("");
  };

  return (
    <>
      <FormWrapper>
        <StyledForm onSubmit={handleSubmit}>
          <StyledLabel>
            What's making you happy today?
            <StyledTextarea
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter" && !event.shiftKey) {
                  event.preventDefault();
                  handleSubmit(event);
                }
              }}
            />
          </StyledLabel>

          <StyledInfoCharacterText $exceedsLimit={isTooLong}>
            {maxLength - message.length} characters remaining
          </StyledInfoCharacterText>

          {error && <StyledErrorMessage>{error}</StyledErrorMessage>}

          <StyledButton type="submit">❤️ Send Happy Thought ❤️</StyledButton>
        </StyledForm>
      </FormWrapper>
    </>
  );
};
