import styled from "styled-components";

const StyledCustomButton = styled.button`
  height: 50px;
  width: calc(100% - 10px);
  border: ${(props) => `1px solid ${props.color}`};
  color: ${(props) => props.color};
  background-color: white;
  border-radius: 5px;
  cursor: pointer;
  margin: 5px;
  margin-top: auto;

  &:hover {
    font-weight: bold;
    border: ${(props) => `2px solid ${props.color}`};
  }
`;

interface ButtonProps {
  text: string;
  color: string;
  onClick: () => void;
}

const CustomColorButton = ({ onClick, color, text }: ButtonProps) => {
  return <StyledCustomButton onClick={onClick} color={color}>{text}</StyledCustomButton>;
};

export default CustomColorButton;
