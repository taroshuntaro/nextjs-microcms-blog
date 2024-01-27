import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CategoryBadge from "./category-badge";
import { getPostDetailPath, convertJST } from "@/lib/utils";

const HomePosts = ({ posts }) => {
  return (
    <section>
      <div className="pt-5">
        {posts.map((post) => (
          <Card key={post.id} className="mb-5">
            <CardHeader>
              <a href={getPostDetailPath(post.id)}>
                <CardTitle>{post.title}</CardTitle>
              </a>
              <p className="text-sm text-muted-foreground">
                {convertJST(post.publishedAt)}
              </p>
            </CardHeader>
            <CardFooter>
              <CategoryBadge category={post.category} />
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default HomePosts;
