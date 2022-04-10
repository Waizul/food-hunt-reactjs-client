import styled from "styled-components";
import bike from "../image/bike.png";
import helmet from "../image/helmet.png";
import {tablet} from '../responsive'

const Container = styled.section`
  margin-top: 2rem;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  ${tablet({flexDirection:'row',padding: '0 6rem', gap:'5rem'})}
`;
const Left = styled.div`
  flex: 2;
`;
const Map = styled.div`
  width: 100%;
  height: 100%;

  border: 2px solid lightgray;
  border-radius: 0.7rem;
`;
const Right = styled.div`
  padding: 1rem;
  flex: 1;
  background-color: #d6d3d3b7;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 0.7rem;
`;
const ImgContainer = styled.div`
  width:12rem ;
`;
const Image = styled.img`
  width: 90%;
  height: 90%;
  object-fit: contain;
  &.helmet{
    width: 3rem;
    height: 3rem;
  }
`;
const LocationContainer = styled.div`
  background-color: white;
  padding: 1rem;
  height: 12rem;
  border-radius: 0.7rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  `;
const Location = styled.div`
  display: flex;
  flex-direction: column;
  `
const LocationName = styled.div`
  width: max-content;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
const LocationAddress = styled.p`
color: gray;
font-size: 0.8rem;
padding-left: 1.5rem;
`;
const Circle = styled.div`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: red;
`;
const Time = styled.div`
margin: 0.5rem 0;
&>h3{
  font-weight: 500;
  font-size: 1.3rem;
}
&>p{
  color: gray;
  font-size: 0.8rem;
}
`;
const ContactPerson = styled.div`
background-color: white;
width: 100%;
padding: 1rem;
border-radius: 0.7rem;
display: flex;
align-items: center;
gap: 0.5rem;
`;
const Button = styled.button`
  margin-top: 1rem;
  padding: 10px 20px;
  background-color: crimson;
  color: white;
  border: none;
  border-radius: 0.7rem;
  cursor: pointer;
`;

const Delivery = () => {
  return (
    <Container>
      <Left>
        <Map>
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Baridhara,%20Dhaka.+(Food%20Hunt)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
            <a href="https://www.gps.ie/marine-gps/">delivery tracking</a>
          </iframe>
        </Map>
      </Left>
      <Right>
        <ImgContainer>
          <Image src={bike} alt="" />
        </ImgContainer>
        <LocationContainer>
          <Location>

          <LocationName>
            <Circle />
            <h5>Your Location</h5>
          </LocationName>
            <LocationAddress>House No#3, Roade No#3, Baridhara</LocationAddress>
          </Location>
          <Location>

          <LocationName>
            <Circle />
            <h5>Shop Address</h5>
          </LocationName>
          <LocationAddress>
            <p>House No#2, Road#2,Bairdhara.</p>
          </LocationAddress>
          </Location>
        </LocationContainer>
        <Time>
<h3>09:30</h3>
<p>Estimated delivery time</p>
        </Time>
        <ContactPerson>
          <Image src={helmet} alt="contact person" className="helmet" />
          <div>
            <h5>Hamim</h5>
            <p>Your raider</p>
          </div>
        </ContactPerson>
        <Button>Contact</Button>
      </Right>
    </Container>
  );
};

export default Delivery;
