import { useQuery } from "@tanstack/react-query";
import { getComments } from "../../api/comment";
import { CommentCard } from "../commentCard";
import { Divider, List, ListItem } from "@mui/material";

export function CommentsList() {
  const { isPending, error, data } = useQuery({
    queryKey: ["comments"],
    queryFn: getComments,
  });

  if (isPending) {
    return <p>is loading ... </p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }
  if (!data) {
    return <p>No data available</p>;
  }

  const comments = data.slice(-10).reverse();

  return (
    <List>
      {comments.map((el) => (
        <div key={el.id}>
          <ListItem>
            <CommentCard card={el} />
          </ListItem>
          <Divider variant="inset" />
        </div>
      ))}
    </List>
  );
}
