import { Container, Box, Heading } from "@chakra-ui/react";

const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" p={3} mb={6} align="center">
                Hello World! I&apos;m Shinno, a Syrian Japanese H4CKER based in
                Lebanon.
            </Box>
            <Box display={{ md: "flex" }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Shinno Taguchi
                    </Heading>
                    <p>
                        H4cker ( Arabophile / Techophile / Developer / Hacker )
                    </p>
                </Box>
            </Box>
        </Container>
    );
};

export default Page;
