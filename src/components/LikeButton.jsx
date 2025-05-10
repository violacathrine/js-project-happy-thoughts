import styled from "styled-components";
import { HeartIcon } from "./HeartIcon";

const LikeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

const HeartWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #eaeaea;

  border: none;
  cursor: pointer;
  padding: 0;
  transition: transform 0.2s ease;
`;

const LikeCount = styled.span`
  font-size: 14px;
  color: #888;
  font-family: Arial, sans-serif;
`;

export const LikeButton = ({ hearts, onClick }) => {
  return (
    <LikeContainer>
      <HeartWrapper onClick={onClick}>
        <HeartIcon size="1.3rem" />
      </HeartWrapper>
      <LikeCount>x {hearts}</LikeCount>
    </LikeContainer>
  );
};
