import styled from "styled-components";

import NewTreesButton from "./NewTreesButton";
import TreeCalculator from "./calculator/TreeCalculator";
import SubmitButton from "./SubmitButton";
import BackgroundImages from "./backgroundImage";

const MainPage = () => {
  return (
    <Main>
      <H1>Chiffres</H1>
      <Calculator>
        <TreeCalculator />
      </Calculator>
      <NewTreesButton />
      <BackgroundImages/>
    </Main>
  )
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
`;
const H1 = styled.h1`
  margin: 0 auto;
`;
const Calculator = styled.div`
  margin: 0 auto;
  margin-top: 40px;
`;
export default MainPage;