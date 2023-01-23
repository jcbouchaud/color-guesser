import styled from "styled-components";
import { Link } from "react-router-dom";

interface StyledHeaderLinkProps {
  path: string;
  name: string;
}

export const StyledHeaderLink = styled.div`
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

const HeaderLink = ({ path, name }: StyledHeaderLinkProps) => {
  return (
    <StyledHeaderLink color={"purple"}>
      <Link to={path}>{name}</Link>
    </StyledHeaderLink>
  );
};

export default HeaderLink;
