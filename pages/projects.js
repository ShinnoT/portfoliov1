import Head from "next/head";
import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";

import thumbParanoia from "../public/images/projects/Paranoia-card.png";
import thumbDebtflo from "../public/images/projects/Debtflo-card.png";
import thumbMonitor from "../public/images/projects/Monitor-card.png";

const Projects = () => {
    return (
        <Layout>
            <Head>
                <title>Shinno&apos;s Portfolio Page | Projects</title>
                <meta
                    name="description"
                    content="A gallery of @vagabadu's personal projects."
                />
                <meta
                    property="og:url"
                    content="https://vagabadu-portfolio.netlify.app/projects"
                />
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="Shinno's Portfolio Page | Projects"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    property="og:description"
                    content="A gallery of @vagabadu's personal projects."
                />
            </Head>
            <Container maxW="xl">
                <Heading as="h3" fontSize={20} my={6}>
                    Projects
                </Heading>
                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section>
                        <WorkGridItem
                            id="paranoia"
                            title="Paranoia"
                            href="/projects/paranoia"
                            thumbnail={thumbParanoia}
                        >
                            End-to-end encrypted, database-less, fully secure
                            chat for everyday espionage.
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem
                            id="debtflo"
                            title="Debtflo"
                            href="/projects/debtflo"
                            thumbnail={thumbDebtflo}
                        >
                            Search engine delivering in-depth, real-time
                            financial insights at your fingertips.
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem
                            id="monitor"
                            title="Monitor"
                            href="/projects/monitor"
                            thumbnail={thumbMonitor}
                        >
                            Instant insights into your computer&apos;s
                            performance, right from your terminal.
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    );
};

export default Projects;
