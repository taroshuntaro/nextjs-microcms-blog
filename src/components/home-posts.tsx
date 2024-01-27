import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { getPostDetailPath } from "@/lib/utils";

const HomePosts = ({ posts }) => {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {posts.map((post) => (
          <Card key={post.id} className="p-5">
            <CardHeader>
              <div>
                <img src={post.eyecatch.url} className="w-full" alt="" />
              </div>
              <CardTitle>{post.title}</CardTitle>
              <a href={getPostDetailPath(post.id)}>サンプルリンク</a>
              <CardDescription></CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default HomePosts;
