import Head from "next/head";
import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => {
    return (
        <Layout title="Bloomberg L.P.">
            <Head>
                <title>
                    Shinno&apos;s Portfolio Page | Work - Bloomberg L.P.
                </title>
                <meta
                    name="description"
                    content="@vagabadu's experience working at Bloomberg L.P."
                />
                <meta
                    property="og:url"
                    content="https://shinno.io/work/bloomberg"
                />
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="Shinno's Portfolio Page | Work - Bloomberg L.P."
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    property="og:description"
                    content="@vagabadu's experience working at Bloomberg L.P."
                />
                <meta
                    property="og:image"
                    content={"/images/work-bloomberg-screenshot-dark.png"}
                />
            </Head>
            <Container>
                <Title navLink="work">
                    Bloomberg L.P. <Badge>2019</Badge>
                </Title>
                <WorkImage
                    src="/images/work/Bloomberg-card.png"
                    alt="Bloomberg L.P."
                />
                <P>
                    As a seasoned Global Data Analyst at Bloomberg L.P., I have
                    had the incredible opportunity to immerse myself in the
                    dynamic world of financial data and analytics. Throughout my
                    tenure with this prestigious organization, I have honed my
                    skills in gathering, analyzing, and interpreting complex
                    datasets from diverse markets worldwide, and had the great
                    privilege of being at the forefront of data-driven
                    innovations, participating in numerous projects that have
                    significantly impacted the financial industry.
                </P>
                <P>
                    One highlight of my tenure was the opportunity to
                    participate in an internal Hackathon, where I collaborated
                    with a talented team and used Machine Learning to tackle a
                    complex data challenge. Leveraging my expertise in data
                    analysis and interpretation, we developed a groundbreaking
                    solution that impressed the judges and earned us the top
                    spot. This experience not only reinforced my problem-solving
                    skills but also demonstrated my ability to thrive in a
                    fast-paced and collaborative environment.
                </P>
                <P>
                    In addition to the Hackathon success, I have played a
                    pivotal role in designing and building (with Python) robust
                    data pipelines for specific financial products. These
                    pipelines have enabled seamless and real-time access to
                    crucial market information, empowering our clients to make
                    informed decisions swiftly and confidently. From data
                    extraction and transformation to loading and visualization,
                    I ensured that the pipelines adhered to the highest
                    standards of accuracy and efficiency.
                </P>
                <P>
                    Working as a Global Data Analyst at Bloomberg L.P. has
                    allowed me to delve into a vast array of financial data from
                    global markets. I have not only provided valuable insights
                    to our clients but also collaborated with cross-functional
                    teams to enhance existing data products and create new ones.
                    My passion for data-driven solutions and my dedication to
                    precision and excellence have been instrumental in making a
                    tangible impact on the financial landscape.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link
                            href="https://www.bloomberg.com/professional/"
                            target="_blank"
                        >
                            https://www.bloomberg.com/professional/
                            <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                </List>
            </Container>
        </Layout>
    );
};

export default Work;
