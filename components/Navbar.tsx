"use client";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Button,
  Menu,
  MenuButton,
  IconButton,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
const NavLink = ({ isActive, href, children }) => {
  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded="md"
      _hover={{
        textDecoration: "none",
        bg: isActive ? "" : "transparent",
      }}
      borderBottom={isActive ? "2px" : "none"}
      borderColor="#FED530"
      href={href}
    >
      {children}
    </Box>
  );
};

const Navbar = () => {
  const activePage = "Home";

  return (
    <Box color="white" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <HStack spacing={8} alignItems="center">
          <Box px="2" fontSize="32px">
            PcariMovie
          </Box>
          <HStack
            fontSize="16px"
            fontWeight={"400"}
            as="nav"
            spacing={4}
            display={{ base: "none", md: "flex" }}
          >
            <NavLink isActive={activePage === "Home"} href="/">
              Home
            </NavLink>
            <NavLink isActive={activePage === "Movies"} href="/">
              Movies
            </NavLink>
            <NavLink isActive={activePage === "TV Show"} href="/">
              TV Show
            </NavLink>
            <NavLink isActive={activePage === "Video"} href="/">
              Video
            </NavLink>
            <NavLink isActive={activePage === "FAQ"} href="/">
              FAQ
            </NavLink>
            <NavLink isActive={activePage === "Contact Us"} href="/">
              Contact Us
            </NavLink>
          </HStack>
        </HStack>
        <Flex alignItems="center">
          <Menu>
            <IconButton
              aria-label="Search"
              icon={<SearchIcon />}
              color={"white"}
              bgColor={"transparent"}
              width={"24px"}
              height={"24px"}
              padding={"1.95px 2.29px 2.29px 1.95px"}
            />
            <MenuButton
              as={Button}
              rounded="full"
              variant="link"
              cursor="pointer"
              minW={0}
              color={"#E6E6E6"}
            >
              <Avatar size="sm" src={""} />
            </MenuButton>
            <Box px="2" fontSize="16px">
              John Glich
            </Box>
          </Menu>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;
