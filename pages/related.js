import NextLink from "next/link";
import {
    Container,
    Box,
    Heading,
    Divider,
    Text,
    Button,
} from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";

const Related = () => {
    return (
        <Layout>
            <Container maxW="xl" align="center">
                <Heading as="h1" fontSize={20} my={6}>
                    Coming soon...
                </Heading>
                <Text>
                    The page you&apos;re looking for does not yet exist, stay
                    tuned for future developments.
                </Text>
                <Box my={6} align="center">
                    <NextLink href="/">
                        <Button colorScheme="teal">Return Home</Button>
                    </NextLink>
                </Box>
            </Container>
        </Layout>
    );
};

export default Related;
