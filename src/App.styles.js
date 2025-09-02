import styled from "styled-components";

export const AppContainer = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
`;

export const PageTitle = styled.h1`
  text-align: center;
  margin: 20px 0;
  color: #333333;
`;

export const WelcomeSection = styled.div`
  text-align: center;
  margin-bottom: 30px;
  padding: 0 20px;
`;

export const WelcomeTitle = styled.h2`
  font-size: 18px;
  font-weight: normal;
  color: #333;
  line-height: 1.5;
  font-family: inherit;
`;

export const WelcomeText = styled.p`
  font-size: 14px;
  color: #666;
  line-height: 1.6;
  margin-top: 10px;
  font-family: inherit;
`;

export const LoginButton = styled.button`
  margin-top: 15px;
  background: transparent;
  border: 1px solid #333;
  border-radius: 20px;
  padding: 6px 16px;
  cursor: pointer;
  font-size: 14px;
  font-family: inherit;
  color: #333;
  transition: all 0.2s ease;

  &:hover {
    background: #f5f5f5;
  }
`;

export const UserSection = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 16px;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const UserEmail = styled.span`
  font-size: 14px;
  color: #666;
`;

export const LogoutButton = styled.button`
  background: transparent;
  border: 1px solid #333;
  border-radius: 20px;
  padding: 6px 16px;
  cursor: pointer;
  font-size: 14px;
  font-family: inherit;
  color: #333;
  transition: all 0.2s ease;

  &:hover {
    background: #f5f5f5;
  }
`;

export const AuthFormSection = styled.section`
  max-width: 450px;
  margin: 5px auto 30px auto;
`;

export const AuthFormBox = styled.div`
  padding: 20px;
  border: 1px solid #333;
  box-shadow: 7px 7px 0px rgba(0, 0, 0, 1);
  background: white;
  box-sizing: border-box;
  width: 100%;
`;

export const AuthFormTitle = styled.h2`
  margin-bottom: 15px;
`;

export const ToggleText = styled.p`
  text-align: center;
  margin-top: 20px;
  font-size: 14px;
  color: #666;
`;

export const ToggleLink = styled.button`
  background: none;
  border: none;
  color: #333;
  text-decoration: underline;
  cursor: pointer;
  font-size: 14px;
  font-family: inherit;
  padding: 0;

  &:hover {
    color: #000;
  }
`;