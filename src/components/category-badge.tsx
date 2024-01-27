import { Badge } from "@/components/ui/badge";

const CategoryBadge = (props: any) => {
  return (
    <div className="w-max">
      {props.category
        .sort((a, b) => (a.name > b.name ? 1 : -1))
        .map((category) => (
          <Badge key={category.id} variant="secondary" className="mr-2">
            {category.name}
          </Badge>
        ))}
    </div>
  );
};

export default CategoryBadge;
