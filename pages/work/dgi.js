import Head from "next/head";
import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => {
    return (
        <Layout title="David Graeber Institute">
            <Head>
                <title>
                    Shinno&apos;s Portfolio Page | Work - David Graeber
                    Institute
                </title>
                <meta
                    name="description"
                    content="@vagabadu's experience working at David Graeber Institute"
                />
                <meta
                    property="og:url"
                    content="https://vagabadu-portfolio.netlify.app/work/bloomberg"
                />
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="Shinno's Portfolio Page | Work - David Graeber Institute"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    property="og:description"
                    content="@vagabadu's experience working at David Graeber Institute"
                />
            </Head>
            <Container>
                <Title navLink="work">
                    David Graeber Institute <Badge>2024</Badge>
                </Title>
                <WorkImage
                    src="/images/work/DGI-card.png"
                    alt="David Graeber Institute"
                />
                <P>
                    At the David Graeber Institute, I had the opportunity to
                    blend my technical skills with creative storytelling,
                    supporting an organization dedicated to the radical
                    reimagination of economic and social systems. My work
                    focused on both digital infrastructure and media production,
                    helping to bring the Institute’s vision to a broader
                    audience.
                </P>
                <P>
                    One of my key contributions was designing, configuring, and
                    launching a fully functional Shopify store. From setting up
                    product listings and customizing the front-end experience to
                    managing backend workflows and payment integrations, I
                    ensured that the store reflected the values and identity of
                    the Institute while maintaining professional-grade usability
                    and performance. The end result was a streamlined e-commerce
                    platform that enabled the Institute to distribute
                    publications and merchandise directly to supporters.
                </P>
                <P>
                    In parallel, I worked closely with the content team to edit
                    and produce high-quality videos for events, talks, and
                    campaigns. My background in media production enabled me to
                    translate complex ideas into engaging visual narratives.
                    Whether it was polishing interviews or designing user
                    interfaces, my focus was always on clarity, tone, and
                    accessibility.
                </P>
                <P>
                    My time at the David Graeber Institute taught me how to work
                    across disciplines—bridging technology, design, and
                    activism—to build platforms that are not only functional but
                    meaningful. It was a rare opportunity to contribute to an
                    organization inspired by an author whose work I deeply
                    admire, using my technical expertise in service of
                    progressive change.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta purpose="website">Website</Meta>
                        <Link
                            href="https://davidgraeber.institute/"
                            target="_blank"
                        >
                            https://davidgraeber.institute/
                            <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                </List>
            </Container>
        </Layout>
    );
};

export default Work;
