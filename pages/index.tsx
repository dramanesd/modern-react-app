import { NextPage } from "next";
import Link from "next/link";

const IndexPage: NextPage = () => {
  return (
    <>
      <h1>Hell world</h1>
      <Link href="/about">Go to About</Link>
    </>
  );
};

export default IndexPage;
