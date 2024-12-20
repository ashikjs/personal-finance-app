import { Flex, Center, Spinner } from "@chakra-ui/react";

const PageLoading = () => {
    return (
        <Flex
            height="100%"
            align="center"
            justify="center"
        >
            <Center>
                <Spinner mr={2} />
                Loading...
            </Center>
        </Flex>
    )
}

export default PageLoading;