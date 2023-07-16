import Head from "next/head";
import { Container, Box, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";

import thumbParanoia from "../public/images/projects/Paranoia-card.png";

const Projects = () => {
    return (
        <Layout>
            <Head>
                <title>Shinno's Portfolio Page | Projects</title>
                <meta
                    name="description"
                    content="A gallery of @vagabadu's personal projects."
                />
                <meta property="og:url" content="https://shinno.io/projects" />
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
                <meta
                    property="og:image"
                    content={"/images/projects-screenshot-dark.png"}
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
                </SimpleGrid>
            </Container>
        </Layout>
    );
};

export default Projects;
