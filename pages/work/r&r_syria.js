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
                <meta
                    property="og:image"
                    content={"/images/work-rr-screenshot-dark.png"}
                />
            </Head>
            <Container>
                <Title navLink="work">
                    Relief & Reconciliation for Syria <Badge>2022</Badge>
                </Title>
                <WorkImage
                    src="/images/work/RR-card.png"
                    alt="Relief & Reconciliation for Syria"
                />
                <P>
                    Throughout my fulfilling journey at the NGO Relief and
                    Reconciliation for Syria, located on the borders of Syria in
                    Northern Lebanon, I have had the privilege of contributing
                    my skills and expertise to make a positive impact in the
                    lives of others. As a versatile professional, I have held
                    multiple roles within the organization, serving as a
                    Communications Manager, Translator, English Teacher, and
                    Computer Literacy Teacher.
                </P>
                <P>
                    As a Communications Manager, I took on the responsibility of
                    fostering clear and effective communication channels both
                    internally and externally. I collaborated closely with
                    various teams to develop and implement communication
                    strategies, ensuring that the organization&apos;s mission
                    and initiatives were conveyed to stakeholders and the public
                    with clarity and impact. My passion for storytelling and
                    connecting with diverse audiences played a significant role
                    in enhancing the NGO&apos;s outreach and engagement efforts.
                </P>
                <P>
                    In addition to my managerial role, my language skills
                    allowed me to bridge cultural divides and facilitate
                    understanding between English and Arabic-speaking
                    communities. Serving as a Translator, I facilitated seamless
                    communication between those we serve, our staff, and
                    international partners. This role strengthened my belief in
                    the power of language to foster empathy and unity, even in
                    challenging circumstances.
                </P>
                <P>
                    As an English Teacher and Computer Literacy Teacher, I had
                    the opportunity to empower individuals by imparting valuable
                    skills that opened doors to new opportunities. Whether
                    teaching language skills that improved employability or
                    equipping beneficiaries with digital literacy, I witnessed
                    firsthand the transformative effect of education in shaping
                    lives and fostering resilience.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
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
