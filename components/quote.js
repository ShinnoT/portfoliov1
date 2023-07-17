import { Box, Text, useColorModeValue } from "@chakra-ui/react";

const Quote = ({ author, children }) => {
    return (
        <Box
            borderRadius="lg"
            bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
            p={16}
            mb={6}
            mt={6}
            fontFamily="Georgia"
            fontSize={{ base: "xl", md: "2xl" }}
        >
            <Text as="em" align="left">
                <q>{children}</q>
            </Text>

            <Text mt={4} mb={0} fontSize="sm" align="right">
                &mdash; {author}
            </Text>
        </Box>
    );
};

export default Quote;
