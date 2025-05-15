import Head from "next/head";
import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => {
    return (
        <Layout title="Woven by Toyota">
            <Head>
                <title>
                    Shinno&apos;s Portfolio Page | Work - Woven by Toyota
                </title>
                <meta
                    name="description"
                    content="@vagabadu's experience working at Woven by Toyota"
                />
                <meta
                    property="og:url"
                    content="https://vagabadu-portfolio.netlify.app/work/bloomberg"
                />
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="Shinno's Portfolio Page | Work - Woven by Toyota"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    property="og:description"
                    content="@vagabadu's experience working at Woven by Toyota"
                />
            </Head>
            <Container>
                <Title navLink="work">
                    Woven by Toyota <Badge>2025</Badge>
                </Title>
                <WorkImage
                    src="/images/work/Woven-card.png"
                    alt="Woven by Toyota"
                />
                <P>
                    At Woven by Toyota, I took on a tech instructor role where I
                    had the rewarding opportunity to teach Python programming to
                    Toyota employees from diverse technical backgrounds. This
                    initiative was part of Woven&apos;s broader mission to
                    empower its workforce with cutting-edge software skills in
                    support of mobility innovation.
                </P>
                <P>
                    I delivered a structured curriculum tailored for beginners
                    and intermediate learners, covering core programming
                    concepts such as data types, control structures, functions,
                    object-oriented programming, and API integration. The
                    emphasis was not just on writing code but on developing
                    problem-solving skills, clean coding habits, and the ability
                    to think computationally.
                </P>
                <P>
                    To enhance learning outcomes, I led live interactive coding
                    exercises and hands-on projects, making sure to incorporate
                    real-world examples, ensuring participants could immediately
                    apply what they learned. I also led group discussions and
                    review sessions to reinforce key concepts and foster
                    collaborative learning.
                </P>
                <P>
                    One of the highlights of this role was witnessing
                    participants gain the confidence to build functional tools
                    and scripts that could support their own teams&apos;
                    workflows. By demystifying Python and lowering the barrier
                    to entry, I helped foster a culture of self-driven learning
                    and cross-functional collaboration.
                </P>
                <P>
                    Teaching at Woven by Toyota deepened my understanding of how
                    to communicate complex technical concepts clearly and
                    empathetically. It also reaffirmed my belief that software
                    literacy is a foundational skill in today&apos;s world—one
                    that can empower individuals across disciplines to innovate
                    and build.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta purpose="website">Website</Meta>
                        <Link href="https://woven.toyota/en/" target="_blank">
                            https://woven.toyota/
                            <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                </List>
            </Container>
        </Layout>
    );
};

export default Work;
