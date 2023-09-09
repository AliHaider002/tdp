import Header from "@/Components/Header/Header";
import Layout from "@/Components/Layout";
import Project from "@/pages/Projects/Project";
import React from "react";

const page = () => {
  return (
    <>
      <Layout>
        <div className="pl-4 pt-1">
          <Header
            name="Projects"
            desc="You have 6 active projects!"
            coloredText="6 active projects!"
          />
          <Project />
        </div>
      </Layout>
    </>
  );
};

export default page;
