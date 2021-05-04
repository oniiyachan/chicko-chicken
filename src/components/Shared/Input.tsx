import { functions } from "firebase";
import React from "react";
import styled from "styled-components";

interface IRecipeProps {
  type?: string;
  value?: string;
  name?: string;
  required?: boolean;
  placeholder?: string;
  onChange?: any;
  autoComplete?: string;
  icon?: any;
}

interface IRecipeState {}

const Container = styled.div`
  background-color: #fff;
  box-shadow: 0px 0px 5px -2px #9e9e9e;
  border-radius: 20px;
  margin-bottom: 15px;
  padding: 12px 20px;
  display: flex;
  align-items: center;
`;

const InputEle = styled.input`
  background-color: #fff;
  border: none;
  margin-left: 15px;
  width: 100%;
`;
const Icon = styled.div`
  height: 26px;
  width: 16px;
  display: flex;
  align-items: center;
  padding-bottom: 3px;
`;

const Input: React.FC<IRecipeProps> = ({
  type,
  value,
  name,
  onChange,
  required,
  placeholder,
  icon,
}) => {
  return (
    <Container>
      <Icon>
        <img src={icon} alt="" style={{ height: 14 }} />
      </Icon>
      <InputEle
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required
        placeholder={placeholder}
      />
    </Container>
  );
};

export default Input;
