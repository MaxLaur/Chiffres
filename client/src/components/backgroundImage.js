import styled from "styled-components"

const BackgroundImage = () => {
  return (
    <Img src="https://www.wildernesscommittee.org/sites/default/files/2018-10/Cutblock%20R315%20from%20the%20air.jpg"/>
  )
}

const Img = styled.img`
  width: 100%;
  height: 100%;
  z-index: -1;
`;

export default BackgroundImage