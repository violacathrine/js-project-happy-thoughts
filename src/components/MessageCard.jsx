import styled from "styled-components";

const CardWrapper = styled.section`
  max-width: 450px;
  margin: 0 auto;
`;

const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: rgba(237, 220, 217, 0.03);
  height: auto;
  width: auto;
  border: 2px solid #264143;
  border-radius: 5px;
  box-shadow: 7px 7px 0px #e99f4c;
  margin: 30px 0px 30px;
  overflow: hidden;
  word-break: break-word;
`;

const MessageText = styled.p`
  align-self: start;
  font-weight: 500;
  margin: 10px;
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

export const MessageCard = ({ message }) => {
  return (
    <CardWrapper>
      <Card>
        <MessageText>{message.text}</MessageText>
        <Timestamp>{getMinutesAgo(message.createdAt)}</Timestamp>
      </Card>
    </CardWrapper>
  );
};
