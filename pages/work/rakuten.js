import Head from "next/head";
import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => {
    return (
        <Layout title="Rakuten">
            <Head>
                <title>Shinno&apos;s Portfolio Page | Work - Rakuten</title>
                <meta
                    name="description"
                    content="@vagabadu's experience working at Rakuten"
                />
                <meta
                    property="og:url"
                    content="https://vagabadu-portfolio.netlify.app/work/bloomberg"
                />
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="Shinno's Portfolio Page | Work - Rakuten"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    property="og:description"
                    content="@vagabadu's experience working at Rakuten"
                />
            </Head>
            <Container>
                <Title navLink="work">
                    Rakuten <Badge>2025 - present</Badge>
                </Title>
                <WorkImage src="/images/work/Rakuten-card.png" alt="Rakuten" />
                <P>
                    At Rakuten, I worked as an Application Engineer in the
                    Artificial Intelligence and Data Department, focusing on
                    search technologies that support both the company&apos;s
                    e-commerce platform and its many digital services. My role
                    centered on building scalable systems in Python that
                    improved how users discover and interact with Rakuten&apos;s
                    offerings.
                </P>
                <P>
                    I built and optimized search engine features, improved
                    retrieval pipelines, and contributed to projects aimed at
                    making search more accurate and efficient at scale. A major
                    highlight was developing a Model Context Protocol (MCP)
                    server, which served as a critical integration layer between
                    advanced AI tools and Rakuten&apos;s infrastructure. This
                    required not only solid Python engineering but also a strong
                    understanding of distributed systems and interoperability,
                    ensuring the server could reliably handle large-scale data
                    flows and support diverse services.
                </P>
                <P>
                    I also had the opportunity to work with cutting-edge
                    development tools such as Cursor and Claude Code, which
                    accelerated experimentation and collaboration. Partnering
                    with data scientists, backend engineers, and product
                    managers, I helped translate complex business needs into
                    robust technical solutions that could scale across
                    Rakuten&apos;s ecosystem.
                </P>
                <P>
                    This experience deepened my expertise in Python development,
                    large-scale search systems, and modern AI workflows, while
                    reinforcing the importance of adaptability and collaboration
                    in delivering high-impact technology.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta purpose="website">Website</Meta>
                        <Link
                            href="https://global.rakuten.com/corp/about/"
                            target="_blank"
                        >
                            https://global.rakuten.com/corp/about/
                            <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                </List>
            </Container>
        </Layout>
    );
};

export default Work;
