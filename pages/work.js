import Head from "next/head";
import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";

import thumbRR from "../public/images/work/RR-card.png";
import thumbBBG from "../public/images/work/Bloomberg-card.png";
import thumbShipandco from "../public/images/work/Shipandco-card.png";
import thumbDGI from "../public/images/work/DGI-card.png";
import thumbWoven from "../public/images/work/Woven-card.png";

const Work = () => {
    return (
        <Layout>
            <Head>
                <title>Shinno&apos;s Portfolio Page | Work</title>
                <meta
                    name="description"
                    content="A gallery of @vagabadu's work experience."
                />
                <meta
                    property="og:url"
                    content="https://vagabadu-portfolio.netlify.app/work"
                />
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="Shinno's Portfolio Page | Work"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    property="og:description"
                    content="A gallery of @vagabadu's work experience."
                />
            </Head>
            <Container maxW="xl">
                <Heading as="h3" fontSize={20} my={6}>
                    Work
                </Heading>
                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section>
                        <WorkGridItem
                            id="ship&co"
                            title="Ship&co"
                            href="/work/ship&co"
                            thumbnail={thumbShipandco}
                        >
                            All-in-One Shipping Management Solution for Global
                            E-commerce
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem
                            id="bloomberg"
                            title="Bloomberg L.P."
                            href="/work/bloomberg"
                            thumbnail={thumbBBG}
                        >
                            Bloomberg is the global leader in business and
                            financial data, news and insight.
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem
                            id="r&r_syria"
                            title="R&R Syria"
                            href="/work/r&r_syria"
                            thumbnail={thumbRR}
                        >
                            Frontline NGO based in Akkar, Lebanon, supporting
                            those affected by the Syrian and economic crisis.
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem
                            id="dgi"
                            title="David Graeber Institute"
                            href="/work/dgi"
                            thumbnail={thumbDGI}
                        >
                            Provides a platform for projects related to David
                            Graeber’s legacy, developing his ideas and projects.
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem
                            id="woven_toyota"
                            title="Woven by Toyota"
                            href="/work/woven_toyota"
                            thumbnail={thumbWoven}
                        >
                            Creating and managing the software for Toyota's
                            vehicle operating system, automated driving, and
                            safety.
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    );
};

export default Work;
