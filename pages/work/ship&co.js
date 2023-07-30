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
                    As a dedicated full-stack software engineer, my time at
                    Ship&co has been a thrilling journey filled with innovation
                    and problem-solving. Working with cutting-edge technologies,
                    including Node.js, Meteor.js, and MongoDB, I have been
                    instrumental in developing robust and scalable applications
                    that revolutionized the shipping and e-commerce industry.
                </P>
                <P>
                    At Ship&co, I played a pivotal role in crafting a
                    feature-rich application that streamlined shipping processes
                    for our clients. Utilizing the power of Node.js and
                    Meteor.js, I created efficient server-side modules that
                    handled complex data operations with utmost precision,
                    delivering a seamless and responsive user experience. My
                    expertise in MongoDB further ensured smooth data storage and
                    retrieval, optimizing application performance and
                    reliability.
                </P>
                <P>
                    One of the highlights of my work at Ship&co was integrating
                    REST APIs and webhooks into our application. This
                    integration allowed us to connect with external systems
                    seamlessly, enabling real-time data exchange and automation.
                    Whether it was interfacing with carrier services or
                    synchronizing shipping data, I ensured that our application
                    communicated flawlessly with external platforms, enhancing
                    the overall efficiency of our clients&apos; shipping
                    processes.
                </P>
                <P>
                    Throughout my journey as a full-stack software engineer, I
                    collaborated closely with cross-functional teams to bring
                    projects from ideation to successful deployment. From
                    participating in brainstorming sessions to providing
                    valuable insights during architectural discussions, I
                    actively contributed to the entire software development
                    lifecycle. My unwavering commitment to staying updated with
                    the latest industry trends and best practices allowed me to
                    incorporate the most relevant technologies into our
                    projects, delivering cutting-edge solutions.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
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
