import { Code, Box, Stack } from "@chakra-ui/react";

const CodeLine = ({ children }) => {
    return (
        <Code color="green" fontSize="xs">
            console.log
            <Code color="orange" fontSize="xs">
                (
            </Code>
            <Code color="yellow" fontSize="xs">
                <Code color="purple.300" fontSize="xs">
                    "
                </Code>
                {children}
                <Code color="purple.300" fontSize="xs">
                    "
                </Code>
            </Code>
            <Code color="orange" fontSize="xs">
                )
            </Code>
            ;
        </Code>
    );
};

const CodeBlock = () => {
    return (
        <Stack
            borderRadius="lg"
            bg="black"
            p={4}
            mb={6}
            mt={6}
            align="left"
            direction="column"
        >
            <CodeLine>Hello World.</CodeLine>
            <CodeLine>Name: Shinno Taguchi.</CodeLine>
            <CodeLine>Occupation: H4cker.</CodeLine>
            <CodeLine>Location: Beirut, LB.</CodeLine>
        </Stack>
    );
};

export default CodeBlock;
