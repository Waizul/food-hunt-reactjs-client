import styled from "styled-components";
import { css } from "styled-components";

const Container = styled.div``;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const Title = styled.h3`
  font-size: 1.2rem;
  font-weight: 500;
`;
const Hr = styled.hr`
  border: 1px solid gray;
  background-color: gray;
`;
const InputCss = css`
  border: none;
  border-radius: 5px;
  outline: none;
  padding: 0.4rem;
  background-color: #d6d3d3b7;
  font-size: 1.1rem;
  &::placeholder {
    font-size: 14px;
  }
`;
const Input = styled.input`
  ${InputCss}
  &::placeholder {
    font-size: 13px;
  }
`;
const TextArea = styled.textarea`
  ${InputCss}
`;
const Button = styled.button`
  margin-top: 1rem;
  padding: 10px 20px;
  background-color: crimson;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const DeliveryContact = () => {
  return (
    <Container>
      <Form>
        <Title>Edit Delivery Details</Title>
        <Hr />
        <Input placeholder="Your Name" />
        <Input placeholder="House Number" />
        <Input placeholder="Floor Number" />
        <Input placeholder="Road Number" />
        <TextArea placeholder="Delivery Instruction" />
        <Button>Save & Continue</Button>
      </Form>
    </Container>
  );
};

export default DeliveryContact;
