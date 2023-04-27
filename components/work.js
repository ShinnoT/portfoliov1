import NextLink from "next/link";
import { Heading, Box, Image, Link, Badge } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

const Title = ({ children }) => {
    return (
        <Box mt={6}>
            <Link as={NextLink} href="/works">
                Works
            </Link>
            <span>
                &nbsp;
                <ChevronRightIcon />
                &nbsp;
            </span>
            <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
                {children}
            </Heading>
        </Box>
    );
};

const WorkImage = ({ src, alt }) => {
    return <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />;
};

const Meta = ({ children }) => {
    return (
        <Badge colorScheme="green" mr={2}>
            {children}
        </Badge>
    );
};

export { Title, WorkImage, Meta };
