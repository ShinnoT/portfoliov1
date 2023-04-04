import {
    Container,
    Code,
    Box,
    Heading,
    Image,
    useColorModeValue,
    Text,
} from "@chakra-ui/react";
import Section from "../components/section";
import CodeBlock from "../components/code-block";

const Page = () => {
    return (
        <Container>
            <Box
                borderRadius="lg"
                bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
                p={10}
                mb={6}
                mt={6}
                align="center"
            >
                <Text as="em">
                    "How wonderful that we have met with a paradox. Now we have
                    some hope of making progress."
                </Text>
            </Box>
            <CodeBlock />
            <Box display={{ md: "flex" }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        Shinno Taguchi
                    </Heading>
                    @vagabadu ( Arabophile / Developer / H4cker )
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
            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    About
                </Heading>
                <p>
                    Introducing Shinno, the software engineer who codes like a
                    ninja! With lightning-fast reflexes and a deep knowledge of
                    programming languages, Shinno can create complex software
                    solutions with ease. Whether you need a custom web
                    application or a database management system, Shinno's got
                    you covered. But what really makes Shinno stand out is his
                    ability to solve problems creatively and efficiently. He
                    approaches every project with the same agility and precision
                    as a ninja in battle, always ready to adapt to changing
                    circumstances and find innovative solutions. So if you want
                    your software to be as stealthy and efficient as a ninja,
                    Shinno is the engineer for you.
                </p>
            </Section>
        </Container>
    );
};

export default Page;
