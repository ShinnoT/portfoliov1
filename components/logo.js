import Link from "next/link";
import { Text, useColorModeValue } from "@chakra-ui/react";
import { FaBomb } from "react-icons/fa";
import styled from "@emotion/styled";

const LogoBox = styled.span`
    font-weight: bold;
    font-size: 18px;
    display: inline-flex;
    align-items: center;
    height: 30px;
    line-height: 20px;
    padding: 10px;

    svg {
        transition-duration: 1s;
    }

    &:hover svg {
        transform: rotate(20deg);
        color: #eba134;
    }
`;

const Logo = () => {
    return (
        <Link href="/">
            <LogoBox>
                <FaBomb />
                <Text
                    color={useColorModeValue("gray.800", "whiteAlpha.900")}
                    fontFamily="M PLUS Rounded 1c"
                    fontWeight="bold"
                    ml={3}
                >
                    Shinno Taguchi
                </Text>
            </LogoBox>
        </Link>
    );
};

export default Logo;
