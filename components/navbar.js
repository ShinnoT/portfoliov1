import Logo from "./logo";
import NextLink from "next/link";
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

const LinkItem = ({ as, href, path, children }) => {
    const active = path === href;
    const inactiveColor = useColorModeValue("gray.700", "whiteAlpha.900");
    return (
        <Link
            as={as}
            href={href}
            p={2}
            bg={active && "glassTeal"}
            color={active ? "#202023" : inactiveColor}
            borderRadius={2}
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
                    divider={
                        <StackDivider
                            borderColor={useColorModeValue(
                                "gray.400",
                                "gray.600"
                            )}
                        />
                    }
                >
                    <LinkItem as={NextLink} href="/work" path={path}>
                        Work
                    </LinkItem>
                    <LinkItem as={NextLink} href="/projects" path={path}>
                        Projects
                    </LinkItem>
                    <LinkItem
                        as="a"
                        href="https://vagabadu-blog.netlify.app/"
                        path={path}
                    >
                        Blog
                    </LinkItem>
                    <LinkItem
                        as="a"
                        href="https://vagabadu-graphic-design.carrd.co/"
                        path={path}
                    >
                        Graphic Design
                    </LinkItem>
                    <LinkItem
                        as="a"
                        href="https://github.com/ShinnoT/portfoliov1"
                        path={path}
                    >
                        View Source
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
                                <MenuItem as={NextLink} href="/work">
                                    Work
                                </MenuItem>
                                <MenuItem as={NextLink} href="/projects">
                                    Projects
                                </MenuItem>
                                <MenuItem
                                    as="a"
                                    href="https://vagabadu-blog.netlify.app/"
                                >
                                    Blog
                                </MenuItem>
                                <MenuItem
                                    as="a"
                                    href="https://vagabadu-graphic-design.carrd.co/"
                                >
                                    Graphic Design
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
