import { Box, Button, Container, HStack, Image, Link, Text } from "@chakra-ui/react";
import { ConnectWalletButton } from "./ConnectWalletButton";
import { MdOutlineArrowOutward } from "react-icons/md";
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
        <Link isExternal href="https://github.com/Podima2/FiloSF">
                <Button
                  rounded={"full"}
                  colorScheme="primary"
                  size={"md"}
                  leftIcon={<MdOutlineArrowOutward />}
                  mt={{ base: 2, md: 0 }}
                  ml={{ base: 0, md: 2 }}
                >
                  Github repository
                </Button>
              </Link>
          <ConnectWalletButton />
        </HStack>
      </Container>
    </Box>
  );
};
