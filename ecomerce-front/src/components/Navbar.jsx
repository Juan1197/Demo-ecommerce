import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined, PersonOutline } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import Logo from "./Logo"

const Container = styled.div`
  height: 10%;
  border-bottom: 1px solid lightgray;
`;

const Wrapper = styled.div`
  padding: 0% 4% 0% 1%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  padding: min(1%, 15px);
  width: 50%;
  max-height:
`;

const Input = styled.input`
  border: none;
  outline: none;
  width: 100%;
`;

const MenuButton = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-left: 5px;
`;

const MenuButtonText = styled.p`
  font-size: 14px;
  @media only screen and (max-width: 500px) {
    display: none;
  }
`;

const Navbar = () => {
	return (
		<Container>
			<Wrapper>
				<Logo />
				<SearchContainer>
					<Input placeholder="Search" />
					<Search style={{ color: "gray", fontSize: 16 }} />
				</SearchContainer>
				<MenuButton>
					<PersonOutline />
					<MenuButtonText>
						My account
					</MenuButtonText>
				</MenuButton>
				<MenuButton>
					<Badge badgeContent={0} color="primary" overlap="rectangular">
						<ShoppingCartOutlined />
					</Badge>
				</MenuButton>
			</Wrapper>
		</Container>
	);
};

export default Navbar;