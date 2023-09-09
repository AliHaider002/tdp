import Header from "@/Components/Header/Header";
import Layout from "@/Components/Layout";
import Image from "next/image";

export default function Home() {
  return (
    <Layout>
      <Header name={"Dashboard"} desc="This is Dashboard" coloredText="Dashboard"/>
      <h1>Hello world</h1>
    </Layout>
  );
}
