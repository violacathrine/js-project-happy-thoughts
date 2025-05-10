import styled, { keyframes } from "styled-components";
import { LikeButton } from "./LikeButton";

const CardFadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const CardWrapper = styled.section`
  max-width: 450px;
  margin: 0 auto;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f8f8f8;
  border: 1px solid #ccc;
  padding: 16px;
  box-shadow: 7px 7px 0px rgb(0, 0, 0);
  margin: 30px 0;
  animation: ${CardFadeIn} 0.5s ease-out;
  word-break: break-word;
`;

const BottomRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
`;

const LeftPart = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const RightPart = styled.div`
  font-size: 14px;
  font-family: Arial, sans-serif;
  color: gray;
`;

const MessageText = styled.p`
  align-self: start;
  font-weight: 500;
  margin: 0;
  padding-right: 30px; // plats för hjärtat
`;

const Timestamp = styled.small`
  font-size: 14px;
  font-family: arial;
  color: gray;
  align-self: flex-end;
  margin: 10px;
`;

const getMinutesAgo = (date) => {
  const now = new Date();
  const then = new Date(date);
  const diffInMinutes = Math.floor((now - then) / 1000 / 60);
  return diffInMinutes === 0
    ? "Just now"
    : `${diffInMinutes} minute${diffInMinutes > 1 ? "s" : ""} ago`;
};

export const MessageCard = ({ message, onLike }) => {
  return (
    <CardWrapper>
      <Card>
        <MessageText>{message.message}</MessageText>
        <BottomRow>
          <LeftPart>
            <LikeButton
              thoughtId={message._id}
              hearts={message.hearts}
              onLike={onLike}
            />
          </LeftPart>
          <RightPart>{getMinutesAgo(message.createdAt)}</RightPart>
        </BottomRow>
      </Card>
    </CardWrapper>
  );
};
