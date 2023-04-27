import { Container, Badge, Link, List, ListItem } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work";
import P from "../../components/paragraph";
import Layout from "../../components/layouts/article";

const Work = () => {
    return (
        <Layout title="Ship&co">
            <Container>
                <Title>
                    Ship&co <Badge>2018</Badge>
                </Title>
                <WorkImage
                    src="/images/works/Shipandco-card.png"
                    alt="Ship&co"
                />
                <P>
                    Sync all your online stores to easily manage shipping
                    process for both international shipments & domestic
                    shipments in one place. It takes less than 10 minutes to
                    start shipping with Ship&co. Get your carriers & shops
                    registered, and then, start to SHIP.
                </P>
                <P>
                    Quickly print shipping labels, electronically sync customs
                    data, & automatically send tracking number and order status
                    back to your online store. No more copy-and-paste!
                </P>
                <P>
                    Ship&co started from automating the shipping process of our
                    online store, selling to more than 100 countries. We know
                    how time-consuming shipping can be for online sellers.
                    That’s why we created Ship&co. Ship&co integrates with
                    several major eCommerce platforms. By plugging in your
                    eCommerce stores into Ship&co, you can automatically get all
                    accurate delivery information and product details, in
                    real-time, to print the shipping labels fast, with
                    error-free. From small businesses to global enterprises, we
                    offers an easy-to-use web application & API solution,
                    suitable for all types of users. Start digitizing your
                    shipping today with Ship&co!
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://www.shipandco.com/en">
                            https://www.shipandco.com/en
                            <ExternalLinkIcon mx="2px" />
                        </Link>
                    </ListItem>
                </List>
            </Container>
        </Layout>
    );
};

export default Work;
