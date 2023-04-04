import Head from "next/head";
import NavBar from "../navbar";
import Footer from "../footer";
import { Box, Container } from "@chakra-ui/react";

const Main = ({ children, router }) => {
    return (
        <Box as="main">
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <title>@vagabadu's Portfolio Page</title>
            </Head>
            <NavBar path={router.asPath} />
            <Container maxW="container.md" pt={14}>
                {children}
            </Container>
            <Footer />
        </Box>
    );
};

export default Main;
