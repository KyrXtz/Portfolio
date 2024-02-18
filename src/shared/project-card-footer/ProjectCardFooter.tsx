import { FC } from "react";

import { Button, Flex, IconButton, useBreakpointValue } from "@chakra-ui/react";

import { ArrowRightIcon, GitHubIcon } from "utils/Icons";
import { open } from "utils/Functions";
import { FaGooglePlay, FaLink } from "react-icons/fa";
import { US, GR } from 'country-flag-icons/react/3x2'
import { Text } from "@chakra-ui/react";

interface MainProps{
    showFlags?:boolean;
}
interface GitHubButtonProps {
    github?: string;
    github2?: string;
    display?: any;
}

interface ReadMoreProps {
    readMore?: string;
}

interface LiveDemoProps {
    app?: string;
    app2?: string;
    site?: string;
    display?: any;
}

interface Props extends MainProps, GitHubButtonProps, ReadMoreProps, LiveDemoProps {}

export const ReadMore: FC<ReadMoreProps> = ({ readMore }) => {
    return readMore ? (
        <Button
            data-aos="fade"
            data-aos-offset="200"
            variant="link"
            colorScheme="black"
            rightIcon={<ArrowRightIcon fontSize="16pt" />}
            _hover={{ color: "primary.600" }}
            _focus={{ bg: "transparent" }}
            onClick={() => open(readMore)}
        >
            Read More
        </Button>
    ) : null;
};

export const GitHubButton: FC<GitHubButtonProps> = ({ github, display }) => {
    const as = useBreakpointValue({ base: IconButton, lg: Button });

    return github ? (
        <Button
            data-aos="fade"
            data-aos-delay="400"
            as={as}
            variant="secondary"
            py="5"
            display={display}
            leftIcon={<GitHubIcon />}
            icon={<GitHubIcon />}
            onClick={() => open(github)}
        >
            GitHub
        </Button>
    ) : null;
};

export const LiveDemo: FC<LiveDemoProps> = ({ app, display }) => {
    const as = useBreakpointValue({ base: IconButton, lg: Button });

    return app ? (
        <Button
            data-aos="fade"
            data-aos-delay="400"
            as={as}
            variant="secondary"
            py="5"
            leftIcon={<FaGooglePlay />}
            icon={<FaGooglePlay />}
            onClick={() => open(app)}
        >
            Google Play
        </Button>
    ) : null;
};

export const Site: FC<LiveDemoProps> = ({ site }) => {
    const as = useBreakpointValue({ base: IconButton, lg: Button });

    return site ? (
        <Button
            data-aos="fade"
            data-aos-delay="400"
            as={as}
            variant="secondary"
            py="5"
            leftIcon={<FaLink />}
            icon={<FaLink />}
            onClick={() => open(site)}
        >
            Site
        </Button>
    ) : null;
};

export const ProjectCardFooter: FC<Props> = ({ showFlags, readMore, github, github2, app, app2, site }) => {
    return (
        <Flex justifyContent={readMore ? "space-between" : "flex-end"} alignItems="center" pt="8">
            <ReadMore readMore={readMore} />
            {(github && github2 && site) && (
                <Site site={site} />
            )}
            {(github && github2 && site) && (
                <Flex justifyContent="space-between" alignItems="center">
                    <Flex alignItems="center">
                        <GitHubButton github={github} />
                        <Text mx={2}>&bull;</Text>
                        <GitHubButton github={github2} />
                    </Flex>
                </Flex>
            )}

            {(app2 && github2) && (
                <Flex justifyContent="space-between" alignItems="center" display="flex">
                    {showFlags && <US height={18} />}
                    <Flex gap="4" justifyContent="space-between" alignItems="center">
                        <LiveDemo app={app} />
                        <Site site={site} />
                        <GitHubButton github={github} />
                    </Flex>
                    {showFlags && <GR height={18} />}
                    <Flex gap="4" justifyContent="space-between" alignItems="center">
                        <LiveDemo app={app2} />
                        <GitHubButton github={github2} />
                    </Flex>
                </Flex>
            )}

            {((app || github) && !github2) && (
                <Flex gap="4" justifyContent="space-between" alignItems="center" display={app || github ? "flex" : "none"}>
                    <LiveDemo app={app} />
                    <Site site={site} />
                    <GitHubButton github={github} />
                </Flex>
            )}
        </Flex>
    );
};


