import NextLink from "next/link";
import Image from "next/image";
import { Box, LinkBox, Text, LinkOverlay, border } from "@chakra-ui/react";
import { Global } from "@emotion/react";

const GridItem = ({ children, href, title, thumbnail }) => {
    return (
        <Box w="100%" align="center">
            <LinkBox cursor="pointers">
                <Image
                    src={thumbnail}
                    alt={title}
                    className="grid-item-thumbnail"
                    placeholder="blur"
                    loading="lazy"
                />
                <LinkOverlay href={href} isExternal={true}>
                    <Text mt={2}>{title}</Text>
                </LinkOverlay>
                <Text fontSize={12} mt={1}>
                    {children}
                </Text>
            </LinkBox>
        </Box>
    );
};

const WorkGridItem = ({ children, id, title, thumbnail }) => {
    return (
        <Box w="100%" align="center">
            <LinkBox
                as={NextLink}
                href={`/works/${id}`}
                scroll={false}
                cursor="pointer"
            >
                <Image
                    src={thumbnail}
                    alt={title}
                    className="grid-item-thumbnail"
                    placeholder="blur"
                    style={{ borderRadius: 1 }}
                />
                <LinkOverlay as="div" href={`/works/${id}`}>
                    <Text mt={2} fontSize={20}>
                        {title}
                    </Text>
                </LinkOverlay>
                <Text fontSize={12} mt={1}>
                    {children}
                </Text>
            </LinkBox>
        </Box>
    );
};

const GridItemStyle = () => {
    return (
        <Global
            styles={`
            .grid-item-thumbnail: {
                border-radius: 12px;
            }`}
        />
    );
};

export { GridItem, WorkGridItem, GridItemStyle };
