import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { StyledLink } from '../globalStyles';
import useMenu from './../hooks/useMenu';

const Container = styled.section`
margin-top: 1rem;
`
const LinkContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    font-size: 1.2rem;
    font-weight: 500;
`
const Menus = () => {
  const [menu, setMenu] = useState('breakfast')
const menus = useMenu(menu)

  return (
   <Container>
      <LinkContainer>
      <StyledLink to='breakfast' onClick={()=>setMenu('breakfast')}>Breakfast</StyledLink>
      <StyledLink to='lunch' onClick={()=>setMenu('lunch')}>Lunch</StyledLink>
      <StyledLink to='dinner' onClick={()=>setMenu('dinner')}>Dinner</StyledLink>
      </LinkContainer>
      <Outlet />
   </Container>
  )
}

export default Menus