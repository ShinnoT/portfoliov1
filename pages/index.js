import NextLink from "next/link";
import Head from "next/head";
import { Container, Box, Heading, Image, Button, Link } from "@chakra-ui/react";
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
            <Head>
                <title>Shinno&apos;s Portfolio Page</title>
                <meta
                    name="description"
                    content="Welcome to @vagabadu's portfolio website - come explore my work."
                />
                <meta
                    property="og:url"
                    content="https://vagabadu-portfolio.netlify.app"
                />
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
            <Container maxW="xl">
                <Quote author="Niels Bohr">
                    How wonderful that we have met with a paradox. Now we have
                    some hope of making progress.
                </Quote>
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
                <CodeBlock />
                <Section delay={0.2}>
                    <Heading as="h3" variant="section-title">
                        About
                    </Heading>
                    <Paragraph>
                        Hey there, fellow tech enthusiasts and coding
                        connoisseurs! Welcome to my little corner of the
                        internet where tech magic happens, bugs tremble, and
                        caffeine turns into code! I&apos;m Shinno, your resident
                        software sorcerer, and I couldn&apos;t be more thrilled
                        to have you stumble upon my digital playground.
                    </Paragraph>
                    <Paragraph>
                        I&apos;ve got a soft spot for the weird and wonderful -
                        whether it&apos;s the latest tech trends, programming
                        languages du jour, or just some hilarious coding memes
                        to keep me sane during those torturous debugging
                        sessions.
                    </Paragraph>
                    <Paragraph>
                        So, take a seat, grab your favorite beverage
                        (mine&apos;s a lipton ice-tea [peach]), and let&apos;s
                        embark on an epic journey into the realms of tech, code,
                        and everything in between. Feel free to checkout my work
                        experiences and personal projects, and if you&apos;re
                        interested in the strange thoughts I have regularly,
                        feel free to checkout my{" "}
                        <Link
                            as="a"
                            href="https://vagabadu-blog.netlify.app/"
                            target="_blank"
                        >
                            personal blog
                        </Link>{" "}
                        as well.
                    </Paragraph>
                    <Paragraph>
                        And remember, if you ever need a code wizard to sprinkle
                        some magic on your tech projects, I&apos;m just a click
                        away. Stay nerdy and keep coding!
                    </Paragraph>
                    <Box align="center" my={4}>
                        <NextLink href="/work">
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
                        (Bachelor&apos;s in Liberal Arts).
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
                    <Box align="center" my={4}>
                        <NextLink href="/projects">
                            <Button
                                rightIcon={<ChevronRightIcon />}
                                colorScheme="teal"
                            >
                                My projects
                            </Button>
                        </NextLink>
                    </Box>
                </Section>
            </Container>
        </Layout>
    );
};

export default Page;
