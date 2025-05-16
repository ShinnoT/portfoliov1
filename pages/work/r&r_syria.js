import Head from "next/head";
import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => {
    return (
        <Layout title="Relief & Reconciliation for Syria">
            <Head>
                <title>
                    Shinno&apos;s Portfolio Page | Work - Relief &
                    Reconciliation for Syria
                </title>
                <meta
                    name="description"
                    content="@vagabadu's experience working at Relief & Reconciliation for Syria."
                />
                <meta
                    property="og:url"
                    content="https://vagabadu-portfolio.netlify.app/work/r&r_syria"
                />
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="Shinno's Portfolio Page | Work - Relief & Reconciliation for Syria"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    property="og:description"
                    content="@vagabadu's experience working at Relief & Reconciliation for Syria."
                />
            </Head>
            <Container>
                <Title navLink="work">
                    Relief & Reconciliation for Syria <Badge>2022 - 2023</Badge>
                </Title>
                <WorkImage
                    src="/images/work/RR-card.png"
                    alt="Relief & Reconciliation for Syria"
                />
                <P>
                    During my time with the NGO Relief and Reconciliation for
                    Syria, based in northern Lebanon near the Syrian border, I
                    worked to support both local Lebanese communities and Syrian
                    refugees. My involvement spanned several roles, including
                    but not limited to, communications manager, translator,
                    English teacher, and computer literacy teacher.
                </P>
                <P>
                    As communications manager, I helped coordinate internal and
                    external communication efforts. I worked with team members
                    to develop and implement strategies that conveyed the
                    organization&apos;s mission and activities clearly to
                    stakeholders and the public. My goal was to support
                    transparency and engagement, not to promote myself, but to
                    ensure the work of the organization was effectively
                    represented.
                </P>
                <P>
                    In my role as translator, I supported communication between
                    Arabic- and English-speaking individuals, helping to
                    facilitate understanding between staff, beneficiaries, and
                    international partners. I saw this as an important
                    responsibility in ensuring that language did not become a
                    barrier to cooperation or access to services.
                </P>
                <P>
                    As an English and computer literacy teacher, I taught basic
                    language and computer skills to students of varying ages
                    from the communities we served. I also helped support
                    students in Basic Literacy and Numeracy (BLN) classes as
                    well as afterschool homework help classes. My role was to
                    provide practical support and knowledge that could be useful
                    in everyday life or future employment. I approached this
                    work with the understanding that even small contributions
                    can be meaningful when responding to long-term needs. A
                    great source of inspiration was Paulo Freire and his
                    book&nbsp;
                    <Link
                        href="https://en.wikipedia.org/wiki/Pedagogy_of_the_Oppressed"
                        target="_blank"
                    >
                        "Pedagogy of the Oppressed"
                    </Link>
                    .
                </P>
                <P>
                    Overall, my time at the NGO was shaped by a commitment to
                    serve and support others, and I remain grateful for the
                    experience and for the opportunity to work alongside a
                    dedicated team in a challenging environment.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta purpose="website">Website</Meta>
                        <Link
                            href="https://www.reliefandreconciliation.org/"
                            target="_blank"
                        >
                            https://www.reliefandreconciliation.org/
                            <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                </List>
            </Container>
        </Layout>
    );
};

export default Work;
