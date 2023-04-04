import {
    Container,
    Box,
    Heading,
    Image,
    useColorModeValue,
} from "@chakra-ui/react";

const Page = () => {
    return (
        <Container>
            <Box
                borderRadius="lg"
                bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
                p={2}
                mb={6}
                mt={6}
                align="center"
            >
                Hello World! I&apos;m Shinno, a Syrian Japanese H4CKER based in
                Lebanon.
            </Box>
            <Box display={{ md: "flex" }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Shinno Taguchi
                    </Heading>
                    @Vagabadu ( Arabophile / Developer / H4cker )
                </Box>
                <Box
                    flexShrink={0}
                    mt={{ base: 4, md: 0 }}
                    ml={{ md: 6 }}
                    align="center"
                >
                    <Image
                        borderColor="whiteAlpha.800"
                        borderWidth={2}
                        borderStyle="solid"
                        maxWidth="100px"
                        display="inline-block"
                        borderRadius="full"
                        src="/images/shinno.png"
                        alt="Profile Image"
                    />
                </Box>
            </Box>
        </Container>
    );
};

export default Page;
