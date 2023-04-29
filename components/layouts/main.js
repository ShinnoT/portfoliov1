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
                <title>Shinno's Portfolio Page</title>
                <meta property="og:url" content="https://shinno.io" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Shinno's Portfolio Page" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    property="og:description"
                    content="Welcome to @vagabadu's portfolio website - come explore my work."
                />
                <meta
                    property="og:image"
                    content={"/images/website-screenshot-dark.png"}
                />
            </Head>
            <NavBar path={router.asPath} />
            <Container
                maxW="container.md"
                height="100vh"
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                pt={14}
            >
                {children}
                <Footer />
            </Container>
        </Box>
    );
};

export default Main;
