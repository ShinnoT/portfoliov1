import Head from "next/head";
import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Project = () => {
    return (
        <Layout title="Paranoia">
            <Head>
                <title>
                    Shinno&apos;s Portfolio Page | Projects - Paranoia
                </title>
                <meta
                    name="description"
                    content="A showcase of @vagabadu's personal project Paranoia - database-less, end-to-end encrypted chat."
                />
                <meta
                    property="og:url"
                    content="https://vagabadu-portfolio.netlify.app/projects/paranoia"
                />
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="Shinno's Portfolio Page | Projects - Paranoia"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    property="og:description"
                    content="A showcase of @vagabadu's personal project Paranoia - database-less, end-to-end encrypted chat."
                />
            </Head>
            <Container>
                <Title navLink="projects">
                    Paranoia <Badge>2023</Badge>
                </Title>
                <WorkImage
                    src="/images/projects/Paranoia-card.png"
                    alt="Paranoia"
                />
                <P>
                    Paranoia is a cutting-edge, end-to-end encrypted, and
                    database-less chat application, designed to prioritize user
                    privacy and data security above all else.
                </P>
                <P>
                    Built with a powerful tech stack, including Next JS, Express
                    JS, Socket.IO, and the Web Crypto API, Paranoia leverages
                    the latest advancements in web development and cryptography.
                    The core of its security lies in the innovative use of the
                    elliptical curve Diffie-Hellman key agreement protocol,
                    implemented through the Web Crypto API, ensuring that
                    messages exchanged within the chat remain indecipherable to
                    unauthorized entities.
                </P>
                <P>
                    One of the standout features of Paranoia is its seamless and
                    real-time communication capabilities, allowing users to
                    engage in private conversations with complete peace of mind.
                    The absence of a traditional database ensures that no
                    sensitive information is stored, leaving no room for
                    potential breaches. Whether it&apos;s confidential business
                    discussions or personal exchanges, Paranoia ensures that
                    every message shared is protected with the utmost level of
                    encryption.
                </P>
                <P>
                    As a developer, I am immensely proud of &quot;Paranoia&quot;
                    as it represents the perfect marriage of my passion for web
                    technologies and my dedication to creating secure solutions.
                    Through this project, I aim to contribute to a safer digital
                    world, where individuals can communicate freely without
                    compromising their privacy. Feel free to explore the
                    intricacies of &quot;Paranoia&quot; on my portfolio website,
                    and join me on this journey towards a more secure online
                    experience.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="#" target="_blank">
                            coming soon...
                            <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                </List>
            </Container>
        </Layout>
    );
};

export default Project;
