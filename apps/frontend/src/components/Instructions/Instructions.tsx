import { Card, Flex } from "@chakra-ui/react";
import { Step } from "./Step";

const Steps = [
  {
    icon: "/steps/1.svg",
    title: "Collect PET or HDPE plastic waste",
    description: "Collect category 1 or 2 plastics.",
  },
  {
    icon: "/steps/3.svg",
    title: "Transform it into 3D printing filament",
    description: "Upload proof, AI will verify and earn B3TR for your noble pursuit.",
  },
  {
    icon: "/steps/2.svg",
    title: "Sell your product",
    description: "You are encouraged to design a product for your local economy.",
  },
];

export const Instructions = () => {
  return (
    <Card mt={3} w={"full"}>
      <Flex
        p={{ base: 4 }}
        w="100%"
        direction={{ base: "column", md: "row" }}
      >
        {Steps.map((step, index) => (
          <Step key={index} {...step} />
        ))}
      </Flex>
    </Card>
  );
};
