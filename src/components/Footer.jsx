import styled from "styled-components";
import { HeartIcon } from "./HeartIcon";

const FooterWrapper = styled.footer`
  text-align: center;
  font-size: 146x;
  color: #666;
  margin: 50px auto 20px;
  padding: 10px;
`;

const FooterLink = styled.a`
  color: inherit;
  text-decoration: none;
  &:hover {
    color: #000;
  }
`;

export const Footer = () => {
  return (
    <FooterWrapper>
      © 2025{" "}
      <FooterLink
        href="https://github.com/violacathrine/js-project-happy-thoughts"
        target="_blank"
        rel="noopener noreferrer"
      >
        Cathi
      </FooterLink>{" "}
      - Built with <HeartIcon />
    </FooterWrapper>
  );
};
