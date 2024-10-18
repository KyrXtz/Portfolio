import { FC } from "react";

import { Center, Container, Heading, Image, HStack, Stack, Flex, Box, IconButton, Button } from "@chakra-ui/react";

import { Content, configs, useContent, MarkdownFile } from "shared/content/Content";
import { Socials } from "shared/socials/Socials";
import { AboutPageId } from "utils/useScroll";
import { ChevronDownIcon } from "utils/Icons";

export const Landing: FC = () => {
    const content = useContent(MarkdownFile.Landing);

    const scrollIntoView = () => {
        const featuredHeader = document.getElementById(AboutPageId);

        if (featuredHeader) {
            featuredHeader.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <Box id="page-landing">
            <Center pb={{ base: 16, md: 32 }}>
                <Stack 
                    direction={{ base: "column", lg: "row" }} 
                    spacing="16"
                    justifyContent="space-between"
                    alignItems={{ base: "center", lg: "flex-start" }} 
                >
                    <Stack flex={{ base: "1", lg: "0.6" }} spacing="16">
                        <Stack spacing="8">
                            <Heading
                                fontSize={{ base: "5xl", md: "7xl" }}
                                lineHeight="1"
                                data-aos="fade-down"
                                data-aos-delay="400"
                            >
                                {configs.landing.headline}
                            </Heading>

                            {/* Image: displayed between headline and content on mobile */}
                            <Container
                                alignItems="center"
                                flex={{ base: "1", lg: "0.4" }} 
                                display={{ base: "block", lg: "none" }} 
                                data-aos="fade-up"
                                data-aos-delay="400"
                            >
                                <picture>
                                    <source type="image/webp" src={configs.landing.picture}></source>
                                    <source type="image/jpeg" src={configs.landing.jpg}></source>
                                    <Image 
                                        borderRadius="xl" 
                                        src={configs.landing.jpg} 
                                        alt={`coder-cover-image`} 
                                        maxWidth="50%"
                                        objectFit="cover"
                                        mx="auto"
                                    />                                
                                </picture>
                            </Container>

                            <Content data-aos="fade-up" data-aos-delay="500" fontSize="lg">
                                {content.landing}
                            </Content>
                        </Stack>

                        <Socials delay={1000} />
                    </Stack>

                    {/* Image for larger screens */}
                    <Container
                        alignItems="center"
                        flex="0.4"
                        display={{ base: "none", lg: "block" }} 
                        data-aos="fade-up"
                        data-aos-delay="400"
                    >
                        <picture>
                            <source type="image/webp" src={configs.landing.picture}></source>
                            <source type="image/jpeg" src={configs.landing.jpg}></source>
                            <Image borderRadius="xl" src={configs.landing.jpg} alt={`coder-cover-image`} />
                        </picture>
                    </Container>
                </Stack>
            </Center>
            <Flex justifyContent="center" data-aos="fade" data-aos-delay="1400">
                <Button
                    as={IconButton}
                    fontSize="3xl"
                    variant="icon"
                    aria-label="down arrow button"
                    icon={<ChevronDownIcon />}
                    onClick={scrollIntoView}
                ></Button>
                
            </Flex>
        </Box>
    );
};
