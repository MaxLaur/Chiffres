import styled from "styled-components";

const SubmitButton = () => {

  return (
    <Button onClick={console.log('submited')}>Enregistrer</Button>
  )
}

const Button = styled.button`
  padding: 30px;
  width: 100px;
`;

export default SubmitButton;