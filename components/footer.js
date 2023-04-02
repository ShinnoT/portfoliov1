import {
    ButtonGroup,
    Container,
    IconButton,
    Stack,
    Text,
} from "@chakra-ui/react";
import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => (
    <Container as="footer" role="contentinfo" py={{ base: "12", md: "16" }}>
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
                &copy; {new Date().getFullYear()} Made with love. All rights
                reserved.
            </Text>
            <Text fontSize="sm" color="subtle">
                Icon by{" "}
                <a
                    class="link_pro"
                    href="https://freeicons.io/corona-virus-precautions-icon/corona-avoid-unprotected-contact-with-live-wild-or-farm-animals-copy-icon-39006"
                >
                    Shabna Ashraf
                </a>
                on <a href="https://freeicons.io">freeicons.io</a>
            </Text>
        </Stack>
    </Container>
);

export default Footer;
