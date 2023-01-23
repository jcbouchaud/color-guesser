import styled from "styled-components";
import { Link } from "react-router-dom";

interface StyledFooterLinkProps {
  path: string;
  name: string;
}

export const StyledFooterLink = styled.div`
  margin-right: 30px;
  min-width: 60px;
  font-family: "Roboto Light";
  color: ${(props) => props.color};
  cursor: pointer;
  a {
    text-decoration: none !important;
    font-family: "Roboto Light";
    color: ${(props) => props.color};
  }
`;

const FooterLink = ({ path, name }: StyledFooterLinkProps) => {
  return (
    <StyledFooterLink color={"purple"}>
      <Link to={path}>{name}</Link>
    </StyledFooterLink>
  );
};

export default FooterLink;
