import { FC } from "react";

import { Button, Text, useBreakpointValue } from "@chakra-ui/react";

import { LandingPageId } from "utils/useScroll";

interface Props {
    text: {
        mobile: string;
        desktop: string;
    };
}

export const LogoType: FC<Props> = ({ text }) => {
    const variant = useBreakpointValue({ base: text.mobile, md: text.desktop });
    const scrollIntoView = () => {
        const featuredHeader = document.getElementById(LandingPageId);

        if (featuredHeader) {
            featuredHeader.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <Button onClick={scrollIntoView} transition="all 0.2s ease-in-out" _hover={{ cursor: "pointer", color: "primary.600" }} _focus={{ bg: "transparent" }}>
            <Text fontSize={{ base: "3xl", md: "4xl" }} lineHeight="1" fontFamily="Signature" mb={{ base: 0, md: -2 }}>
                {variant}
            </Text>
        </Button>
    );
};
