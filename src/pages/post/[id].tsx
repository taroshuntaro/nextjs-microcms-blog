import "github-markdown-css/github-markdown-light.css";
import "prismjs/themes/prism-okaidia.css";
import Prism from "prismjs";
import Head from "next/head";
import Layout from "@/components/layout";
import Container from "@/components/container";
import { GetStaticProps, GetStaticPaths } from "next";
import { client } from "@/lib/client";
import { useEffect } from "react";

const PostDetail = (props: any) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <Layout>
      <Head>
        <title>{props.post.title}</title>
      </Head>
      <Container>
        <article className="markdown-body">
          <div
            dangerouslySetInnerHTML={{
              __html: `${props.post.content}`,
            }}
          />
        </article>
      </Container>
    </Layout>
  );
};

export default PostDetail;

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const data = await client.get({
    endpoint: `blogs/${params.id}`,
  });

  return { props: { post: data } };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const postIdList = await client.getAllContentIds({
    endpoint: "blogs",
  });

  const paths = postIdList.map((postId: any) => {
    return {
      params: { id: postId },
    };
  });

  return { paths, fallback: false };
};
