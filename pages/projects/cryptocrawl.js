import Head from "next/head";
import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Project = () => {
    return (
        <Layout title="Monitor">
            <Head>
                <title>
                    Shinno&apos;s Portfolio Page | Projects - Cryptocrawl
                </title>
                <meta
                    name="description"
                    content="A showcase of @vagabadu's personal project Cryptocrawl - a simple, lightweight ETL data pipeline for cryptocurrency data."
                />
                <meta
                    property="og:url"
                    content="https://vagabadu-portfolio.netlify.app/projects/cryptocrawl"
                />
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="Shinno's Portfolio Page | Projects - Cryptocrawl"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    property="og:description"
                    content="A showcase of @vagabadu's personal project Cryptocrawl - a simple, lightweight ETL data pipeline for cryptocurrency data."
                />
            </Head>
            <Container>
                <Title navLink="projects">
                    Cryptocrawl <Badge>2023</Badge>
                </Title>
                <WorkImage
                    src="/images/projects/Cryptocrawl-card.png"
                    alt="Cryptocrawl"
                />
                <P>
                    The Cryptocrawl ETL data pipeline is a simple and
                    lightweight data pipeline that delivers valuable insights
                    into the ever-changing cryptocurrency market. Built using
                    Python, this data pipeline efficiently automates the process
                    of data extraction, transformation, and loading (ETL),
                    allowing users to readily analyze cryptocurrency data
                    without the need for manual data gathering or processing.
                </P>
                <P>
                    The Cryptocrawl ETL pipeline starts by extracting real-time
                    cryptocurrency data from Yahoo Finance using web scraping
                    techniques. This vast data, which includes attributes like
                    the cryptocurrency name, symbol, price, market
                    capitalization, trading volume, and circulating supply, is
                    then neatly organized into a structured format using
                    transformation processes.
                </P>
                <P>
                    The pipeline leverages the strength of{" "}
                    <Link
                        href="https://www.bonobo-project.org/"
                        target="_blank"
                    >
                        Bonobo
                    </Link>
                    , a straightforward and lightweight Python ETL framework, to
                    streamline the data flow through the extract, transform, and
                    load stages. It employs a single transformation function
                    that prepares the data into two separate dataframes which
                    are then channeled into different paths for loading. This
                    bifurcation demonstrates the versatility and complexity that
                    can be achieved with Bonobo, even in handling parallel data
                    streams.
                </P>
                <P>
                    In the final step of the pipeline, the transformed data is
                    stored in a SQLite database, split between two related
                    tables: &quot;crypto&quot; and &quot;crypto_data&quot;. This
                    structure allows for efficient storage and easy retrieval of
                    data, paving the way for future in-depth analyses and
                    insights.
                </P>
                <P>
                    The entire pipeline can also be integrated into a task
                    manager / scheduler, providing flexibility to users who
                    require the data to be updated more or less frequently than
                    others.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta purpose="github">Github</Meta>
                        <Link
                            href="https://github.com/ShinnoT/cryptocrawl-pipeline"
                            target="_blank"
                        >
                            https://github.com/ShinnoT/cryptocrawl-pipeline
                            <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                </List>
            </Container>
        </Layout>
    );
};

export default Project;
