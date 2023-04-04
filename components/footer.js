import {
    ButtonGroup,
    Container,
    IconButton,
    Stack,
    Text,
    Divider,
} from "@chakra-ui/react";
import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => (
    <Container
        as="footer"
        role="contentinfo"
        w="100%"
        pt={{ base: "12", md: "16" }}
        pb={{ base: "4", md: "6" }}
        maxW="container.md"
    >
        <Divider mb={2} />
        <Stack spacing={{ base: "4", md: "5" }}>
            <Stack justify="space-between" direction="row" align="center">
                <ButtonGroup variant="ghost">
                    <IconButton
                        as="a"
                        href="#"
                        aria-label="Instagram"
                        icon={<FaInstagram fontSize="1.25rem" />}
                    />
                    <IconButton
                        as="a"
                        href="#"
                        aria-label="GitHub"
                        icon={<FaGithub fontSize="1.25rem" />}
                    />
                    <IconButton
                        as="a"
                        href="#"
                        aria-label="Twitter"
                        icon={<FaTwitter fontSize="1.25rem" />}
                    />
                </ButtonGroup>
            </Stack>
            <Text fontSize="sm" color="subtle">
                &copy; {new Date().getFullYear()} Made with ♥. All rights
                reserved.
            </Text>
        </Stack>
    </Container>
);

export default Footer;
