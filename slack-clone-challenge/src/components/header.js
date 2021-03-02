import React from "react";
import styled from "styled-components";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";

function header() {
  return (
    <Container>
      <Main>
        <AccessTimeIcon />

        <input type="text" placeholder="Search..." />

        <HelpOutlineIcon />
      </Main>

      <UserContainer>
          Abhay Patil

         <img src="https://www.seekpng.com/png/detail/115-1150053_avatar-png-transparent-png-royalty-free-default-user.png" alt="user"></img>



      </UserContainer>
    </Container>
  );
}

export default header;

const Container = styled.div`
  background: #924444;
`;

const Main = styled.div``;

const UserContainer = styled.div``;
