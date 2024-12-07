import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Avatar,
  Box,
  Container,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  IconButton,
} from "@mui/material";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import FavoriteIcon from "@mui/icons-material/Favorite";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import "./CommunityForum.css";
import Header from "../header/header"; // Header component for navigation

function CommunityForum() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "My First Camping Experience",
      content: "It was amazing! Highly recommend the mountains.",
      comments: ["Wow, that sounds amazing!", "Which mountain did you go to?"],
      avatarUrl: "/assets/user-image.png",
      userName: "John Doe",
      reactions: { like: 10, love: 5, haha: 3 },
    },
    {
      id: 2,
      title: "Best Camping Gear",
      content: "I love my portable stove. It's a game-changer!",
      comments: ["Totally agree! Portable stoves are essential.", "Which brand do you use?"],
      avatarUrl: "/assets/user-image.png",
      userName: "Jane Smith",
      reactions: { like: 15, love: 8, haha: 2 },
    },
  ]);

  const [newPost, setNewPost] = useState({ title: "", content: "" });
  const [commentInput, setCommentInput] = useState("");
  const [filter, setFilter] = useState(""); // For filtering posts
  const [searchQuery, setSearchQuery] = useState(""); // For searching posts

  const handlePostSubmit = (e) => {
    e.preventDefault();
    setPosts([
      ...posts,
      {
        ...newPost,
        id: posts.length + 1,
        comments: [],
        avatarUrl: "https://via.placeholder.com/40", // Default avatar
        userName: "Anonymous", // Default username
        reactions: { like: 0, love: 0, haha: 0 },
      },
    ]);
    setNewPost({ title: "", content: "" });
  };

  const handleCommentSubmit = (postId) => {
    setPosts(
      posts.map((post) =>
        post.id === postId
          ? { ...post, comments: [...post.comments, commentInput] }
          : post
      )
    );
    setCommentInput("");
  };

  const handleReaction = (postId, type) => {
    setPosts(
      posts.map((post) =>
        post.id === postId
          ? { ...post, reactions: { ...post.reactions, [type]: post.reactions[type] + 1 } }
          : post
      )
    );
  };

  const filteredPosts = posts.filter((post) => {
    if (filter === "mostRecent") {
      return posts.sort((a, b) => b.id - a.id);
    } else if (filter === "mostComments") {
      return posts.sort((a, b) => b.comments.length - a.comments.length);
    }
    return post.title.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className="community-forum">
      <Header />

      <Container maxWidth="md" className="forum-container">
        <Typography variant="h3" align="center" gutterBottom>
          Community Forum
        </Typography>

        {/* Filters and Search */}
        <Box className="filter-search">
          <FormControl variant="outlined" size="small" className="filter">
            <InputLabel>Filter</InputLabel>
            <Select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              label="Filter"
            >
              <MenuItem value="">None</MenuItem>
              <MenuItem value="mostRecent">Most Recent</MenuItem>
              <MenuItem value="mostComments">Most Comments</MenuItem>
            </Select>
          </FormControl>

          <TextField
            variant="outlined"
            size="small"
            placeholder="Search posts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-bar"
          />
        </Box>

        {/* New Post Form */}
        <form onSubmit={handlePostSubmit} className="post-form">
          <TextField
            label="Post Title"
            variant="outlined"
            fullWidth
            value={newPost.title}
            onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
            required
            sx={{ marginBottom: 2 }}
          />
          <TextField
            label="Share your experience..."
            variant="outlined"
            fullWidth
            value={newPost.content}
            onChange={(e) =>
              setNewPost({ ...newPost, content: e.target.value })
            }
            required
            multiline
            rows={4}
            sx={{ marginBottom: 2 }}
          />
          <Button variant="contained" color="primary" type="submit" fullWidth>
            Post
          </Button>
        </form>

        {/* Posts Section */}
        <div className="posts">
          {filteredPosts.map((post) => (
            <Card
              key={post.id}
              className="post-card"
              sx={{ marginBottom: 3 }}
              data-aos="fade-up" // Animation on scroll
            >
              <CardContent>
                <Box
                  sx={{ display: "flex", alignItems: "center", marginBottom: 2 }}
                >
                  <Avatar src={post.avatarUrl} alt="User Avatar" />
                  <Box sx={{ marginLeft: 2 }}>
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      {post.userName}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ fontStyle: "italic" }}
                    >
                      {post.title}
                    </Typography>
                  </Box>
                </Box>
                <Typography variant="body2" color="text.secondary">
                  {post.content}
                </Typography>

                {/* Reactions Section */}
                <Box sx={{ display: "flex", marginTop: 2, gap: 1 }}>
                  <IconButton
                    onClick={() => handleReaction(post.id, "like")}
                    color="primary"
                  >
                    <ThumbUpIcon />
                  </IconButton>
                  <Typography>{post.reactions.like}</Typography>
                  <IconButton
                    onClick={() => handleReaction(post.id, "love")}
                    sx={{ color: "red" }}
                  >
                    <FavoriteIcon />
                  </IconButton>
                  <Typography>{post.reactions.love}</Typography>
                  <IconButton
                    onClick={() => handleReaction(post.id, "haha")}
                    sx={{ color: "gold" }}
                  >
                    <EmojiEmotionsIcon />
                  </IconButton>
                  <Typography>{post.reactions.haha}</Typography>
                </Box>

                {/* Comments Section */}
                <Box sx={{ marginTop: 3 }}>
                  <Typography variant="subtitle1" sx={{ marginBottom: 1 }}>
                    Comments:
                  </Typography>
                  <div className="comments">
                    {post.comments.map((comment, index) => (
                      <Typography
                        key={index}
                        variant="body2"
                        className="comment"
                      >
                        {comment}
                      </Typography>
                    ))}
                  </div>
                  <Box sx={{ display: "flex", marginTop: 2 }}>
                    <TextField
                      variant="outlined"
                      size="small"
                      fullWidth
                      placeholder="Write a comment..."
                      value={commentInput}
                      onChange={(e) => setCommentInput(e.target.value)}
                      sx={{ marginRight: 1 }}
                    />
                    <Button
                      variant="contained"
                      onClick={() => handleCommentSubmit(post.id)}
                    >
                      Comment
                    </Button>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default CommunityForum;
