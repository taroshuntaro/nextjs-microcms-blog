import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getPostDetailPath, convertJST } from "@/lib/utils";

const HomePosts = ({ posts }) => {
  return (
    <section>
      <div className="pt-10">
        {posts.map((post) => (
          <Card key={post.id} className="p-5">
            <CardHeader>
              <a href={getPostDetailPath(post.id)}>
                <CardTitle>{post.title}</CardTitle>
              </a>
              <p className="text-sm text-muted-foreground">
                {convertJST(post.publishedAt)}
              </p>
            </CardHeader>
            <CardFooter>
              {post.category.map((category) => (
                <Badge key={category.id} variant="secondary" className="mr-2">
                  {category.name}
                </Badge>
              ))}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default HomePosts;
