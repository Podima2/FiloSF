import { Box, Container, HStack, Image, Text } from "@chakra-ui/react";
import { ConnectWalletButton } from "./ConnectWalletButton";
export const Navbar = () => {
  return (
    <Box
      px={0}
      position={"sticky"}
      top={0}
      zIndex={10}
      py={4}
      h={"auto"}
      w={"full"}
      bg={"#f7f7f7"}
    >
      <Container
        w="full"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems={"center"}
        maxW={"container.xl"}
      >
        {/* <HStack flex={1} justifyContent={"start"}>
          <Image src="/Filo_Logo.svg" />
        </HStack> */}

        <HStack alignSelf={{ base: "left", md: "flex-start" }}>
          <Image src="/Filo_Logo.svg" h={16} borderRadius={16} />
          <Text fontSize={24} fontWeight={800}>
            Filo
          </Text>
        </HStack>

        <HStack flex={1} spacing={4} justifyContent={"end"}>
          <ConnectWalletButton />
        </HStack>
      </Container>
    </Box>
  );
};
