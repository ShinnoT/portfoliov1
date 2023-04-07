import Logo from "./logo";
import NextLink from "next/link";
import dynamic from "next/dynamic";
import { HamburgerIcon } from "@chakra-ui/icons";
import ThemeToggleButton from "./theme-toggle-button";
import {
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue,
    StackDivider,
} from "@chakra-ui/react";

const LinkItem = ({ href, path, children }) => {
    const active = path === href;
    const inactiveColor = useColorModeValue("gray200", "whiteAlpha.900");
    return (
        <Link
            as={NextLink}
            href={href}
            p={2}
            bg={active && "glassTeal"}
            color={active ? "#202023" : inactiveColor}
        >
            {children}
        </Link>
    );
};

const NavBar = (props) => {
    const { path } = props;

    return (
        <Box
            position="fixed"
            as="nav"
            w="100%"
            bg={useColorModeValue("#ffffff40", "#20202380")}
            style={{ backdropFilter: "blur(10px)" }}
            zIndex={1}
            {...props}
        >
            <Container
                display="flex"
                p={2}
                maxW="container.md"
                flexWrap="wrap"
                alignItems="center"
                justifyContent="space-between"
            >
                <Flex align="center" mr={5}>
                    <Heading as="h1" size="lg" letterSpacing="tighter">
                        <Logo />
                    </Heading>
                </Flex>
                <Stack
                    direction={{ base: "column", md: "row" }}
                    display={{ base: "none", md: "flex" }}
                    width={{ base: "full", md: "auto" }}
                    alignItems="center"
                    flexGrow={1}
                    mt={{ base: 4, nmd: 0 }}
                    divider={<StackDivider borderColor="gray.200" />}
                >
                    <LinkItem href="/works" path={path}>
                        Works
                    </LinkItem>
                    <LinkItem href="/posts" path={path}>
                        Posts
                    </LinkItem>
                    <LinkItem href="/related" path={path}>
                        Related
                    </LinkItem>
                </Stack>
                <Box flex={1} align="right">
                    <ThemeToggleButton />
                    <Box ml={2} display={{ base: "inline-block", md: "none" }}>
                        <Menu>
                            <MenuButton
                                as={IconButton}
                                icon={<HamburgerIcon />}
                                variant="outline"
                                aria-label="Options"
                            />
                            <MenuList>
                                <MenuItem as={NextLink} href="/">
                                    Home
                                </MenuItem>
                                <MenuItem as={NextLink} href="/works">
                                    Works
                                </MenuItem>
                                <MenuItem as={NextLink} href="/posts">
                                    Posts
                                </MenuItem>
                                <MenuItem as={NextLink} href="/related">
                                    Related
                                </MenuItem>
                                <MenuItem
                                    as={Link}
                                    href="https://github.com/ShinnoT"
                                >
                                    View Source
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default NavBar;
// export default dynamic(() => Promise.resolve(NavBar), { ssr: false });
