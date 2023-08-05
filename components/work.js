import NextLink from "next/link";
import { Heading, Box, Image, Link, Badge } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

const Title = ({ navLink, children }) => {
    return (
        <Box mt={6}>
            <Link as={NextLink} href={`/${navLink}`}>
                {navLink.charAt(0).toUpperCase() + navLink.slice(1)}
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

const Meta = ({ purpose, children }) => {
    const colorScheme = {
        website: "green",
        github: "gray",
    };

    return (
        <Badge colorScheme={colorScheme[purpose]} mr={2}>
            {children}
        </Badge>
    );
};

export { Title, WorkImage, Meta };
