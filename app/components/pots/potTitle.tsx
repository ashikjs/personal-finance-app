import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { DotsThree } from "phosphor-react";
import theme from "~/theme";

interface PotTitleProps {
    fill: string;
    potName: string;
}

const PotTitle: React.FC<PotTitleProps> = ({ fill, potName }) => {
    return (
        <Flex
            justify="space-between"
            align="center"
            alignSelf="stretch"
            width="100%"
        >
            <Flex
                width="19.75rem"
                align="center"
                gap={theme.spacing[200]}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <circle cx="8" cy="8" r="8" fill={fill} />
                </svg>
                <Text textStyle="preset2" color="grey.900">{potName}</Text>
            </Flex>
            <DotsThree />
        </Flex>
    )
}

export default PotTitle;