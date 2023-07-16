import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Project = () => {
    return (
        <Layout title="Paranoia">
            <Container>
                <Title navLink="projects">
                    Paranoia <Badge>2023</Badge>
                </Title>
                <WorkImage
                    src="/images/projects/Paranoia-card.png"
                    alt="Paranoia"
                />
                <P>
                    End-to-end encrypted, database-less, fully secure chat for
                    everyday espionage.
                </P>
                <P>blah blah blah more info about Paranoia...</P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="#">
                            https://www.paranoia.com/
                            <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                </List>
            </Container>
        </Layout>
    );
};

export default Project;
