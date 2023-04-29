import NextLink from "next/link";
import {
    Container,
    Box,
    Heading,
    Image,
    useColorModeValue,
    Text,
    Button,
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import CodeBlock from "../components/code-block";
import Paragraph from "../components/paragraph";
import Quote from "../components/quote";
import { BioSection, BioYear } from "../components/bio";

const Page = () => {
    return (
        <Layout>
            <Container maxW="xl">
                <Quote author="Niels Bohr">
                    How wonderful that we have met with a paradox. Now we have
                    some hope of making progress.
                </Quote>
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
                    <Paragraph>
                        Introducing Shinno, the software engineer who codes like
                        a ninja! With lightning-fast reflexes and a deep
                        knowledge of programming languages, Shinno can create
                        complex software solutions with ease. Whether you need a
                        custom web application or a database management system,
                        Shinno's got you covered. But what really makes Shinno
                        stand out is his ability to solve problems creatively
                        and efficiently. He approaches every project with the
                        same agility and precision as a ninja in battle, always
                        ready to adapt to changing circumstances and find
                        innovative solutions. So if you want your software to be
                        as stealthy and efficient as a ninja, Shinno is the
                        engineer for you.
                    </Paragraph>
                    <Box align="center" my={4}>
                        <NextLink href="/works">
                            <Button
                                rightIcon={<ChevronRightIcon />}
                                colorScheme="teal"
                            >
                                My portfolio
                            </Button>
                        </NextLink>
                    </Box>
                </Section>
                <Section delay={0.3}>
                    <Heading as="h3" variant="section-title">
                        Bio
                    </Heading>
                    <BioSection>
                        <BioYear>1996</BioYear>Born in Damascus, Syria.
                    </BioSection>
                    <BioSection>
                        <BioYear>2017</BioYear>Graduated Le Wagon Coding
                        Bootcamp.
                    </BioSection>
                    <BioSection>
                        <BioYear>2018</BioYear>Graduated Doshisha University
                        (Bachelor's in Liberal Arts).
                    </BioSection>
                    <BioSection>
                        <BioYear>2018</BioYear>Worked at Ship&co Kyoto.
                    </BioSection>
                    <BioSection>
                        <BioYear>2019</BioYear>Worked at Bloomberg L.P. Tokyo.
                    </BioSection>
                    <BioSection>
                        <BioYear>2022 - present</BioYear>Working at Relief &
                        Reconciliation for Syria.
                    </BioSection>
                </Section>
                <Section delay={0.4}>
                    <Heading as="h3" variant="section-title">
                        I ♥
                    </Heading>
                    <Paragraph>
                        Code, Design, Data Stuff, Brazilian Jiu Jitsu, Cooking,
                        Reading, Watching Movies
                    </Paragraph>
                </Section>
            </Container>
        </Layout>
    );
};

export default Page;
