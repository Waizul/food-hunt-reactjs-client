import styled from "styled-components";

import useMenu from "../hooks/useMenu";
import Menu from "./Menu";

const Container = styled.div`
  min-height: 100vh;
  overflow: hidden;
`;

const Breakfast = () => {
  const items = useMenu("breakfast");

  return (
    <Container>
      <Menu items={items} />
    </Container>
  );
};

export default Breakfast;
