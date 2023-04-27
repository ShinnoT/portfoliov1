import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => {
    return (
        <Layout title="Relief & Reconciliation for Syria">
            <Container>
                <Title>
                    Relief & Reconciliation for Syria <Badge>2022</Badge>
                </Title>
                <WorkImage
                    src="/images/works/RR-card.png"
                    alt="Relief & Reconciliation for Syria"
                />
                <P>
                    For us, Syria is more than a country. Syria is the home of
                    our tortured humanity. Syria is the place where the fate of
                    the twenty-first century will be carved: as a century of
                    freedom and welfare for all humankind or as a century of
                    oppression and war.
                </P>
                <P>
                    We are a group of men and women, based in Europe and the
                    Middle East, who could not stand by and watch while the
                    cradle of our civilisation is bombed into ruins. We could
                    not look the other way when millions of Syrians were killed
                    or had to flee their homes. We could not remain silent when
                    the aspirations of peaceful protestors were answered with
                    crimes against humanity. We could not remain indifferent
                    when religious communities were driven against each other so
                    that a few could stay in power.
                </P>
                <P>
                    We are a group of simple citizens from Syria, Europe and
                    from a range of Arab countries who felt compelled to take
                    action. As a genuine expression of the emerging civil
                    society from both shores of the Mediterranean, we unite
                    Muslims, Christians, Jews and others around a common cause:
                    to stand up in solidarity with the Syrian people and to send
                    a message of hope to the world. United in diversity, we are
                    committed to the principle of spiritual solidarity that
                    transcends borders in the search for the common good.
                </P>
                <P>
                    Relief & Reconciliation International AISBL is an
                    independent non-profit organisation under Belgian law that
                    is based upon the individual membership of dedicated men and
                    women who serve as unpaid volunteers for our cause. We count
                    today more than 550 members from around the world who are
                    working for peace and justice in Syria and the wider region.
                    We are following a specific methodology, combining conflict
                    transformation with humanitarian aid under the co-deciding
                    authority of local communities.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://www.reliefandreconciliation.org/">
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
