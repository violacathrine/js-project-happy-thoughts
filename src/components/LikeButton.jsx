import styled from "styled-components";

const LikeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const HeartButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 20px;
  padding: 0;
  margin: 0;

  &:hover {
    transform: scale(1.1);
  }
`;

const LikeCount = styled.span`
  font-size: 14px;
  color: #333;
  white-space: nowrap;
  font-family: arial;
`;

export const LikeButton = ({ thoughtId, hearts, onLike }) => {
  const handleLike = () => {
    fetch(
      `https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${thoughtId}/like`,
      {
        method: "POST",
      }
    )
      .then((res) => res.json())
      .then(() => onLike())
      .catch((error) => console.error("Error liking thought:", error));
  };

  return (
    <LikeContainer>
      <HeartButton onClick={handleLike}>🩷</HeartButton>
      <LikeCount>x {hearts}</LikeCount>
    </LikeContainer>
  );
};
