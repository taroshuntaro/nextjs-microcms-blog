import "github-markdown-css/github-markdown-light.css";
import "prismjs/themes/prism-okaidia.min.css";
import Prism from "prismjs";
import Head from "next/head";
import Layout from "@/components/layout";
import Container from "@/components/container";
import { GetStaticProps, GetStaticPaths } from "next";
import { client } from "@/lib/client";
import { convertJST } from "@/lib/utils";
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
        <section>
          {/* 記事タイトル */}
          <div className="text-center">
            <h1 className="scroll-m-20 text-4xl font-bold tracking-tight">
              {props.post.title}
            </h1>
            <p className="text-sm text-muted-foreground">
              {convertJST(props.post.publishedAt)}
            </p>
          </div>
          {/* 記事本文 */}
          <article className="markdown-body">
            <div
              className="pt-10"
              dangerouslySetInnerHTML={{
                __html: `${props.post.content}`,
              }}
            />
          </article>
        </section>
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
