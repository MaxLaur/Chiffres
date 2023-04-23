import styled from "styled-components";
import TreeCalculator from "./calculator/TreeCalculator";

const NewTreesButton = () => {

  const newTrees = () => {
    return (
      <TreeCalculator />
    )
  }

  return (
    <Button onClick={newTrees}>+</Button>
  )
}

const Button = styled.button`
  margin: 0 auto;
  margin-top: 10px;
  padding: 5px 10px;
  width: 100px;
`;

export default NewTreesButton;