import { Container, Box, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";

import thumbRR from "../public/images/works/RR-card.png";
import thumbBBG from "../public/images/works/Bloomberg-card.png";
import thumbShipandco from "../public/images/works/Shipandco-card.png";

const Works = () => {
    return (
        <Layout>
            <Container maxW="xl">
                <Heading as="h3" fontSize={20} my={6}>
                    Works
                </Heading>
                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <Section>
                        <WorkGridItem
                            id="Ship&co"
                            title="Ship&co"
                            thumbnail={thumbShipandco}
                        >
                            All-in-One Shipping Management Solution for Global
                            E-commerce
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem
                            id="Bloomberg L.P."
                            title="Bloomberg L.P."
                            thumbnail={thumbBBG}
                        >
                            Bloomberg is the global leader in business and
                            financial data, news and insight.
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem
                            id="R&R Syria"
                            title="R&R Syria"
                            thumbnail={thumbRR}
                        >
                            Frontline NGO based in Akkar, Lebanon, supporting
                            those affected by the Syrian and economic crisis.
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    );
};

export default Works;
