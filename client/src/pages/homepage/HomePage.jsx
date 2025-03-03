import React, { useEffect } from "react";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Post from "../../components/post/Post";
import { useStore } from "../../store/Store";
import { Typography } from "@mui/material";

function HomePage() {
  const { setAvatar, setName } = useStore();
  const handleProfile = (post) => {
    setAvatar(post.userAvatar);
    setName(post.username);
  };
  //test data
  const posts = [
    {
      id: 1,
      username: "user1",
      userAvatar: "https://randomuser.me/api/portraits/men/32.jpg",
      imageUrl: "https://source.unsplash.com/random/600x800?nature",
      caption: "Beautiful day outdoors! #nature #hiking",
      likes: 156,
      comments: [
        { username: "alice", text: "Looks amazing!" },
        { username: "bob", text: "Where is this?" },
      ],
      Posted_at: "2h",
    },
    {
      id: 2,
      username: "user2",
      userAvatar: "https://randomuser.me/api/portraits/women/44.jpg",
      imageUrl: "https://source.unsplash.com/random/600x800?food",
      caption: "Homemade pasta! 🍝 #food #cooking",
      likes: 89,
      comments: [{ username: "chef_mike", text: "Recipe please!" }],
      timestamp: "5h",
    },
  ];
  useEffect(() => {
    posts.map((post) => handleProfile(post));
  }, []);
  return (
    <>
    <Typography variant="h4" align="center" sx={{ color: "#333" , bgcolor: "#fafafa", pt:2}} >
      Home
    </Typography>
    <Container sx={{ p: 0, bgcolor: "#fafafa", minHeight: "100vh" }}>
      <Stack spacing={2} sx={{ pt: 2, pb: 7 }}>
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </Stack>
    </Container>
    </>
  );
}

export default HomePage;
