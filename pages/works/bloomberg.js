import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => {
    return (
        <Layout title="Bloomberg L.P.">
            <Container>
                <Title>
                    Bloomberg L.P. <Badge>2019</Badge>
                </Title>
                <WorkImage
                    src="/images/works/Bloomberg-card.png"
                    alt="Bloomberg L.P."
                />
                <P>
                    Bloomberg unleashes the power of information and technology
                    to bring clarity to a complex world.
                </P>
                <P>
                    Global customers rely on us to deliver accurate, real-time
                    business and market-moving information that helps them make
                    critical financial decisions.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://www.bloomberg.com/professional/">
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
