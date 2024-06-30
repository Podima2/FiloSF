import {
  Box,
  Card,
  HStack,
  Image,
  VStack,
  Text,
  Flex,
  Divider,
  Button,
} from "@chakra-ui/react";

type Props = {
  imageSrc: string
  title: string
  description: string
  price: string 
}
const Listing = ({ imageSrc, title, description, price }: Props) => (
  <Card
    w={"full"}
    p={4}
    mb={4}
    position="relative"
    borderWidth={1}
    borderRadius={16}
    borderColor="gray.200"
    boxShadow="md"
    transition="all 0.3s ease-in-out"
    _hover={{ shadow: "lg", borderColor: "gray.300" }}
  >
    <Flex direction={{ base: "column", md: "row" }} alignItems={"flex-start"}>
      <Image
        src={imageSrc}
        borderRadius={16}
        boxSize={{ base: "100%", md: "450px" }} // Adjust size here
        objectFit="cover" // Optional: ensure image covers its container
        mr={{ base: 0, md: 8 }}
        mb={{ base: 8, md: 0 }}
      />
      <VStack align={"flex-start"} spacing={4} flex={1}>
        <Text fontSize={24} fontWeight={800}>
          {title}
        </Text>
        <Text fontSize={16}>
          {description}
        </Text>
        <Text fontSize={20} fontWeight={600} color="green.500">
          {price}
        </Text>
      </VStack>
    </Flex>
    <Flex
      position="absolute"
      bottom={4}
      right={4}
      justifyContent="flex-end"
      w="full"
    >
      <Button colorScheme="teal" size="md" variant="solid">
        Buy Now
      </Button>
    </Flex>
  </Card>
);

export const Listings = () => {
  return (
    <Box p={4}>
      <HStack justifyContent={"center"} mb={4}>
        <Text fontSize={35} fontWeight={800}>
          Marketplace
        </Text>
      </HStack>
      <Divider mb={4} />
      <VStack spacing={4} align={"stretch"}>
        <Listing
          imageSrc="/ListingA.png"
          title="1kg of recycled Mountain Dew Neon Green PET Spool"
          description="Recycled San Francisco Bay Area beverage bottles. 1mm, 1.25mm and 1.5mm width spools available"
          price="$10"
        />
        <Listing
          imageSrc="/ListingB.png"
          title="長く製造された Discontinued Mitsubishi 1977 Tractor Gear"
          description="長く製造された 1977 年モデルの正確な代替品として、試行とテストが行​​われた特殊なモデル。Tried and tested specialised model for exact replacement of the longer manufactured 1977 model."
          price="$15"
        />
        <Listing
          imageSrc="/ListingC.png"
          title="Auto Drive Wheel Cover KT950-16MBK"
          description="Fits most foreign and domestic vehicles with 16-in steel wheels. Made of durable, impact resistant ABS plastic which is also weather resistant and will not rust or corrode "
          price="$9.99"
        />
      </VStack>
    </Box>
  );
};
