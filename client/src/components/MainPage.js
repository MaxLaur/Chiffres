import styled from "styled-components";
import { useContext, useState } from "react";
import Calendar from 'react-calendar'

import NewTreesButton from "./NewTreesButton";
import TreeCalculator from "./calculator/TreeCalculator";
import SubmitButton from "./SubmitButton";
import BackgroundImage from "./backgroundImage";
import { CurrentUserContext } from "./UserContext";

const MainPage = () => {
  const [value, onChange] = useState(new Date());
  console.log(value)
  const { calculators, setCalculators } = useContext(CurrentUserContext)

  const addOrRemoveNewTrees = (ev) => {
    if(ev.target.value === '+') setCalculators([ ...calculators, 'new format' ]);
    else if(ev.target.value === '-') setCalculators(calculators.slice(0, -1));
  }
  const submitDailyTally = () => {
    // change things into a form
  }

  return (
    <Main>
      <H1>Chiffres</H1>
      <div>
        <Calendar onChange={onChange} value={value} />
      </div>
      <PlusMinusButtonsDiv>
        <Button value={'+'} onClick={addOrRemoveNewTrees}>+</Button>
        <Button value={'-'} onClick={addOrRemoveNewTrees}>-</Button>
      </PlusMinusButtonsDiv>
      <Calculator>
        {
          calculators &&
          calculators.map((calculator, index) => {
            return (
              <TreeCalculator key={`TreeCalculator ${index}`} />
            )
          })
        }
      </Calculator>
      <SubmitButton onClick={submitDailyTally}>Submit</SubmitButton>
      <BackgroundImage/>
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
  margin-top: 10px;
`;
const PlusMinusButtonsDiv = styled.div`
  margin: 0 auto;
`;
const Button = styled.button`
  margin: 0 auto;
  margin-top: 10px;
  margin-left: 15px;
  padding: 5px 10px;
  width: 100px;
`;
export default MainPage;