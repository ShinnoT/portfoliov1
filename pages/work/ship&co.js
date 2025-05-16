import Head from "next/head";
import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => {
    return (
        <Layout title="Ship&co">
            <Head>
                <title>Shinno&apos;s Portfolio Page | Work - Ship&co</title>
                <meta
                    name="description"
                    content="@vagabadu's experience working at Ship&co."
                />
                <meta
                    property="og:url"
                    content="https://vagabadu-portfolio.netlify.app/work/ship&co"
                />
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="Shinno's Portfolio Page | Work - Ship&co"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    property="og:description"
                    content="@vagabadu's experience working at Ship&co."
                />
            </Head>
            <Container>
                <Title navLink="work">
                    Ship&co <Badge>2018</Badge>
                </Title>
                <WorkImage
                    src="/images/work/Shipandco-card.png"
                    alt="Ship&co"
                />
                <P>
                    As a full-stack software engineer at Ship&co, my experience
                    has been both challenging and rewarding, offering numerous
                    opportunities to grow through hands-on problem-solving and
                    collaboration. Working with technologies like Node.js,
                    Meteor.js, and MongoDB, I contributed to the development of
                    scalable applications aimed at improving shipping workflows
                    for e-commerce businesses.
                </P>
                <P>
                    During my time at Ship&co, I was involved in building a
                    feature-rich application that helped streamline shipping
                    processes for our clients. I worked on developing
                    server-side modules using Node.js and Meteor.js to support
                    efficient data operations and aimed to deliver a smooth,
                    responsive user experience. My work with MongoDB contributed
                    to ensuring reliable data storage and retrieval, which
                    supported the overall performance of the application.
                </P>
                <P>
                    One particularly meaningful aspect of my role was
                    integrating REST APIs and webhooks into the platform. This
                    allowed us to connect our system with external services,
                    enabling real-time data exchange and process automation.
                    Whether it involved integrating with carrier APIs or syncing
                    shipping data, I did my best to support reliable
                    communication between our platform and external systems.
                </P>
                <P>
                    I also had the opportunity to collaborate closely with
                    cross-functional teams, from early-stage discussions to
                    final deployment. Being part of brainstorming sessions and
                    architectural planning helped me gain a broader
                    understanding of the development lifecycle. I continuously
                    made an effort to stay updated with current technologies and
                    best practices, which informed my contributions and helped
                    us deliver practical, up-to-date solutions.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta purpose="website">Website</Meta>
                        <Link
                            href="https://www.shipandco.com/en"
                            target="_blank"
                        >
                            https://www.shipandco.com/en
                            <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                </List>
            </Container>
        </Layout>
    );
};

export default Work;
