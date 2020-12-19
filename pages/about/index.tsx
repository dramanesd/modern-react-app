import NextLink from "next/link";
import {Heading, Link, Flex} from "@chakra-ui/core"

const AboutPage = () => {
  return (
    <Flex 
    flexDirection="column"
    alignItems="center"
    margin={4}
    >
      <Heading as="h1" size="2xl" marginY="2rem">This is ABOUT page</Heading>
      <NextLink href="/" passHref>
        <Link>Go Back Home</Link>
        </NextLink>
      <Link href="/about/me">Go ABOUT ME Page</Link>
    </Flex>
  );
};

export default AboutPage;
