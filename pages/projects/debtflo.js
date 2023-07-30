import Head from "next/head";
import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Project = () => {
    return (
        <Layout title="Debtflo">
            <Head>
                <title>Shinno&apos;s Portfolio Page | Projects - Debtflo</title>
                <meta
                    name="description"
                    content="A showcase of @vagabadu's personal project Debtflo - delivers in-depth, real-time financial insights on any stock ticker at your fingertips."
                />
                <meta
                    property="og:url"
                    content="https://vagabadu-portfolio.netlify.app/projects/debtflo"
                />
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="Shinno's Portfolio Page | Projects - Debtflo"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    property="og:description"
                    content="A showcase of @vagabadu's personal project Debtflo - delivers in-depth, real-time financial insights on any stock ticker at your fingertips."
                />
            </Head>
            <Container>
                <Title navLink="projects">
                    Debtflo <Badge>2023</Badge>
                </Title>
                <WorkImage
                    src="/images/projects/Debtflo-card.png"
                    alt="Debtflo"
                />
                <P>
                    Debtflo is a pioneering personal project, embodying the
                    perfect intersection of finance and technology. Created to
                    provide a platform that bridges the information gap for
                    investors, it provides comprehensive financial information,
                    elegantly presented in a beautifully designed, user-friendly
                    dashboard.
                </P>
                <P>
                    The core objective of Debtflo is to democratize financial
                    data, making it more accessible and understandable for all
                    users, irrespective of their investing experience. Users can
                    search any stock ticker and instantly gain a plethora of
                    financial insights about the respective company. From
                    fundamental indicators such as earnings per share and P/E
                    ratios, to more advanced metrics like debt ratios and return
                    on equity, Debtflo is designed to cater to everyone from
                    novice investors to experienced finance professionals.
                </P>
                <P>
                    What sets Debtflo apart is not only the breadth and depth of
                    financial information it offers, but also its visually
                    stunning and intuitive interface. Complex financial data is
                    transformed into clear, easy-to-understand visualizations,
                    allowing users to quickly interpret and utilize the data for
                    their investment decisions. The aim is to make the
                    experience of diving into financial data less intimidating
                    and more engaging.
                </P>
                <P>
                    Debtflo is more than just a web app - it&apos;s a
                    comprehensive financial companion designed to guide and
                    inform your investment journey. Leveraging cutting-edge
                    technology to unravel the complexities of the financial
                    world, it provides a seamless, enriching experience for
                    anyone interested in gaining a deeper understanding of their
                    investments. The ultimate vision for Debtflo is to empower
                    individual investors, enabling them to navigate the stock
                    market with confidence and precision.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="#" target="_blank">
                            coming soon...
                            <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                </List>
            </Container>
        </Layout>
    );
};

export default Project;
