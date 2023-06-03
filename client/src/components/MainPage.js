import styled from "styled-components";
import { useContext, useState, useEffect } from "react";
import Calendar from 'react-calendar'

import TreeCalculator from "./calculator/TreeCalculator";
import BackgroundImage from "./backgroundImage";
import { CurrentUserContext } from "./UserContext";

const MainPage = () => {
  const [value, onChange] = useState(new Date());
  const { calculators, setCalculators } = useContext(CurrentUserContext)
  const { dailyTally, setDailyTally } = useContext(CurrentUserContext)
  const { totalDailyMoney, setTotalDailyMoney } = useContext(CurrentUserContext)

  const idRandomizer = () => {
    // might get two of the same id.
    return Math.floor(Math.random() * 1500);
  }

  const addOrRemoveNewTrees = (ev) => {
    if(ev.target.value === '+') setCalculators([ ...calculators, {id: idRandomizer()} ]);
    else if(ev.target.value === '-') {
      setCalculators(calculators.slice(0, -1))
      setDailyTally(dailyTally.slice(0, -1))
    };
  }
  const submitDailyTally = () => {
    console.log(dailyTally)
    console.log({date: value, production: [dailyTally], moneyTotal: totalDailyMoney})
  }
  const dateClicked = (ev) => {
    console.log(ev.target.value)
  }
  
  useEffect(() =>{
    dailyTally.forEach((tally) => {
      setTotalDailyMoney(totalDailyMoney + tally.amountOfMoney)
    })
  }, [dailyTally, calculators])

  // if (dailyTally) {
  //   console.log(dailyTally)
  //   let totalDailyMoney = 0
  //   dailyTally.forEach((tally) => {
  //     totalDailyMoney += tally.amountOfMoney;
  //     console.log(Number(totalDailyMoney.toFixed(2)))
  //   })
  // }
  return (
    <Main>
      <H1>Chiffres</H1>
        <CalendarSection>
          <Calendar onChange={onChange} value={value} onClick={dateClicked}/>
        </CalendarSection>
        <PlusMinusButtonsDiv>
          <Button value={'+'} onClick={addOrRemoveNewTrees}>+</Button>
          <Button value={'-'} onClick={addOrRemoveNewTrees}>-</Button>
        </PlusMinusButtonsDiv>
        <Calculator>
          {
            calculators &&
            calculators.map((calculator, index) => {
              return (
                <TreeCalculator key={`TreeCalculator ${index}`} id={`calculator${index}`}/>
              )
            })
          }
        </Calculator>
        <TotalMoney>Daily total: ${totalDailyMoney.toFixed(2)}</TotalMoney>
        <SubmitButton onClick={submitDailyTally}>Enregistrer</SubmitButton>
      {/* <BackgroundImage/> */}
    </Main>
  )
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  background-image: url('https://www.wildernesscommittee.org/sites/default/files/2018-10/Cutblock%20R315%20from%20the%20air.jpg');
  background-repeat: no-repeat;
  background-size: 100%;
`;
const Form = styled.form`

`;
const H1 = styled.h1`
  margin: 0 auto;
  color: white;
`;
const CalendarSection = styled.section`
  max-width: 700px;
  margin: 0 auto;
  background-color: white;
  opacity: 0.7;
  padding: 15px;
  border-radius: 15px;
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
const TotalMoney = styled.div`
  margin: 0 auto;
  color: white;
  font-size: 20px;
`;
const SubmitButton = styled.button`
  padding: 5px;
  margin: 0 auto;
  margin-bottom: 15px;
  margin-top: 15px;
  width: 100px;
`;
export default MainPage;