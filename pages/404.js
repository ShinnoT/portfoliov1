import NextLink from "next/link";
import { Container, Box, Heading, Text, Button } from "@chakra-ui/react";
import Layout from "../components/layouts/article";

const NotFound = () => {
    return (
        <Layout>
            <Container maxW="xl" align="center">
                <Heading as="h1" fontSize={20} my={6}>
                    404: Not Found
                </Heading>
                <Text>The page you&apos;re looking for does not exist.</Text>
                <Box my={6} align="center">
                    <NextLink href="/">
                        <Button colorScheme="teal">Return Home</Button>
                    </NextLink>
                </Box>
            </Container>
        </Layout>
    );
};

export default NotFound;
