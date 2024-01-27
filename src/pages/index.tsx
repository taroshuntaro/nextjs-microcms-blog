import Head from "next/head";
import Layout from "@/components/layout";
import Container from "@/components/container";
import HomePosts from "@/components/home-posts";
import HomeImage from "@/components/home-image";
import { BLOG_TITLE } from "@/lib/constants";
import { GetStaticProps } from "next";
import { client } from "@/lib/client";

export default function Home(props: any) {
  return (
    <Layout>
      <Head>
        <title>{BLOG_TITLE}</title>
      </Head>
      <HomeImage></HomeImage>
      <Container>
        <HomePosts posts={props.posts}></HomePosts>
      </Container>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.get({
    endpoint: "blogs",
  });
  return {
    props: {
      posts: data.contents,
    },
  };
};
