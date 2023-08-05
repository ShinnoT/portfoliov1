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
                <title>Shinno&apos;s Portfolio Page | Projects - Monitor</title>
                <meta
                    name="description"
                    content="A showcase of @vagabadu's personal project Monitor - live, colorful, instant insights into your computer's performance, right from your terminal."
                />
                <meta
                    property="og:url"
                    content="https://vagabadu-portfolio.netlify.app/projects/monitor"
                />
                <meta property="og:type" content="website" />
                <meta
                    property="og:title"
                    content="Shinno's Portfolio Page | Projects - Monitor"
                />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    property="og:description"
                    content="A showcase of @vagabadu's personal project Monitor - live, colorful, instant insights into your computer's performance, right from your terminal."
                />
            </Head>
            <Container>
                <Title navLink="projects">
                    Monitor <Badge>2023</Badge>
                </Title>
                <WorkImage
                    src="/images/projects/Monitor-card.png"
                    alt="Monitor"
                />
                <P>
                    Monitor is a very simple command-line application designed
                    to provide users with live visualizations of their
                    computer&apos;s performance metrics. Developed using Python
                    and the &quot;rich&quot; library, Monitor offers real-time
                    monitoring of essential system statistics, including CPU
                    usage, memory usage, disk usage, network data, running
                    processes, and more.
                </P>
                <P>
                    The app presents a clean and dynamic interface, utilizing
                    the &quot;rich&quot; library&apos;s capabilities to showcase
                    key performance metrics in various colorful segments. Users
                    can track system resources at a glance, making it ideal for
                    troubleshooting and optimizing their computers&apos;
                    performance. Additionally, the application includes a live
                    line chart displaying CPU usage trends over the past 60
                    seconds, providing users with a graphical representation of
                    their system&apos;s performance history.
                </P>
                <P>
                    Powered by the &quot;psutil&quot; library, Monitor fetches
                    real-time data on CPU, memory, disk, and network usage,
                    keeping the display constantly up-to-date. Users can witness
                    system fluctuations and get instant insights into their
                    PC&apos;s performance.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta purpose="github">Github</Meta>
                        <Link
                            href="https://github.com/ShinnoT/monitor"
                            target="_blank"
                        >
                            https://github.com/ShinnoT/monitor
                            <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                </List>
            </Container>
        </Layout>
    );
};

export default Project;
