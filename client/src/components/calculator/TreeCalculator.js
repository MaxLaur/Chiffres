import { useState, useEffect } from "react"
import styled from "styled-components";

const TreeCalculator = () => {
  const [treeFormat, setTreeFormat] = useState(null)
  const [numOfCassettes, setNumOfCassettes] = useState(0)
  const [prep, setPrep] = useState(null)
  const [treePrice, setTreePrice] = useState(null)
  const [amountOfTrees, setAmountOfTrees] = useState(0)
  const [amountOfMoney, setAmountOfMoney] = useState(0)

  // set the amount of cassettes planted
  const amountOfCassettes = (ev) => {
    setNumOfCassettes(Number(ev.target.value))
  }
  // set tree format in state
  const selectFormat = (ev) => {
    console.log(ev.target.value)
    setTreeFormat(ev.target.value)
  }
  // set land preparation style in state
  const selectPrep = (ev) => {
    console.log(ev.target.value)
    setPrep(ev.target.value)
  }
  //multiplies the amount of cassettes with the amount of trees per cassettes
  useEffect(() => {
    if(treeFormat !== 'feuillu' && treeFormat !== 'racines nues' && treeFormat !== 'autres' && treeFormat !== 'none') {
      setAmountOfTrees(Number(treeFormat) * numOfCassettes)
    }
    else if(treeFormat === 'feuillu' || treeFormat === 'racines nues') {
      setAmountOfTrees(50 * numOfCassettes)
    }
    else if(treeFormat === 'autre') {
      setAmountOfTrees(1 * numOfCassettes)
    }
  }, [treeFormat, numOfCassettes])

  // set the price per tree
  useEffect(() => {
    // if no format or prep has been selected (breaks the amount of money)
    // if(treeFormat || prep === 'none') setTreePrice(0)

    // 45 tree prices
    if(treeFormat === '45' && prep === 'andains') setTreePrice(0.15)
    else if(treeFormat === '45' && prep === 'sillons') setTreePrice(0.155)
    else if(treeFormat === '45' && prep === 'sillons vert') setTreePrice(0.16)
    else if(treeFormat === '45' && prep === 'direct') setTreePrice(0.18)

    // 36 tree prices
    else if(treeFormat === '36' && prep === 'andains') setTreePrice(0.18)
    else if(treeFormat === '36' && prep === 'sillons') setTreePrice(0.19)
    else if(treeFormat === '36' && prep === 'sillons vert') setTreePrice(0.2)
    else if(treeFormat === '36' && prep === 'direct') setTreePrice(0.235)

    // 15 or 25 tree prices
    else if((treeFormat === '15' || treeFormat === '25') && prep === 'andains') setTreePrice(0.2)
    else if((treeFormat === '15' || treeFormat === '25') && prep === 'sillons') setTreePrice(0.21)
    else if((treeFormat === '15' || treeFormat === '25') && prep === 'sillons vert') setTreePrice(0.22)
    else if((treeFormat === '15' || treeFormat === '25') && prep === 'direct') setTreePrice(0.25)

    // feuillu and racines nues prices
    else if(treeFormat === 'feuillu') setTreePrice(0.215)
    else if(treeFormat === 'racines nues') setTreePrice(0.35)

    // if no format or prep selected
    else {
      console.log('no format or prep selected')
    }
    
  }, [treeFormat, numOfCassettes, prep])

  // sets the total money made from that tree entry
  useEffect(() => {
    if(prep || treeFormat !== 'none') setAmountOfMoney(amountOfTrees * treePrice)
    else setAmountOfMoney(0)
  }, [amountOfTrees, treePrice, treeFormat, prep])

  return (
    <Wrapper>
      <Label htmlFor='cassette number'># cassettes</Label>
      <CassettesInput placeholder="# cassettes" onChange={amountOfCassettes}></CassettesInput>
      <Select name="Format" onChange={selectFormat}>
        <option value={'none'}>Format</option>
        <option value={'15'}>15</option>
        <option value={'25'}>25</option>
        <option value={'36'}>36</option>
        <option value={'45'}>45</option>
        <option value={'feuillu'}>Feuillu</option>
        <option value={'racines nues'}>Racines nues</option>
        {/* <option value={'autre'}>Autres</option> */}
      </Select>
      <Select name="Preparation" onChange={selectPrep}>
        <option value={'none'}>Preparation</option>
        <option value={'direct'}>Direct</option>
        <option value={'sillons'}>Sillons</option>
        <option value={'sillons vert'}>Sillons vert</option>
        <option value={'andains'}>Andains</option>
        <option value={'pockets'}>Pockets</option>
        {/* <option value={'autres'}>Autres</option> */}
      </Select>
      <Amount>Arbres: {amountOfTrees}</Amount>
      <Amount>Montant: ${amountOfMoney}</Amount>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  color: white;
  padding: 15px;
  border-radius: 15px;
  background-color: gray;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
`;
const Label = styled.label`
  margin-inline: 5px;
`;
const CassettesInput = styled.input`
  margin-inline: 5px;
`;
const Select = styled.select`
  margin-inline: 5px;
`;
const Amount = styled.div`
  margin-inline: 5px;
`;

export default TreeCalculator;