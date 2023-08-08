import "./feed.css";
import axios from "axios";
import Share from "../share/Share";
import Post from "../post/Post";
import { useEffect, useState } from "react";

export default function Feed({ username }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = username
        ? await axios.get("http://localhost:3500/api/posts/profile/" + username)
        : await axios.get(
            "http://localhost:3500/api/posts/timeline/64c36bc79b761390b29f7bc6"
          );
      setPosts(res.data);
    };
    fetchData();
  }, [username]);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((p) => (
          <Post key={p._id} post={p} />
        ))}
      </div>
    </div>
  );
}
