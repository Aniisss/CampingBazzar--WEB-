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
import { motion } from "motion/react";
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
      comments: [
        "Totally agree! Portable stoves are essential.",
        "Which brand do you use?",
      ],
      avatarUrl: "/assets/user-image.png",
      userName: "Jane Smith",
      reactions: { like: 15, love: 8, haha: 2 },
    },
  ]);

  const [newPost, setNewPost] = useState({ title: "", content: "" });
  const [commentInput, setCommentInput] = useState("");
  const [filter, setFilter] = useState(""); // For sorting/filtering posts
  const [searchQuery, setSearchQuery] = useState(""); // For searching posts
  const [showComments, setShowComments] = useState({}); // For toggling comments visibility

  // Toggle visibility of comments for a specific post
  const toggleCommentVisibility = (postId) => {
    setShowComments((prev) => ({
      ...prev,
      [postId]: !prev[postId],
    }));
  };

  // Add a new post
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

  // Add a new comment to a specific post
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

  // Update reactions (like, love, haha) for a specific post
  const handleReaction = (postId, type) => {
    setPosts(
      posts.map((post) =>
        post.id === postId
          ? {
              ...post,
              reactions: {
                ...post.reactions,
                [type]: post.reactions[type] + 1,
              },
            }
          : post
      )
    );
  };

  // Filter and sort posts based on search query or filters
  const filteredPosts = posts
    .filter((post) =>
      searchQuery
        ? post.title.toLowerCase().includes(searchQuery.toLowerCase())
        : true
    )
    .sort((a, b) => {
      if (filter === "mostRecent") return b.id - a.id;
      if (filter === "mostComments")
        return b.comments.length - a.comments.length;
      return 0; // No sorting by default
    });

  return (
    <div className="community-forum">
      <Header />

      <Container maxWidth="md" className="forum-container">
        <Typography variant="h3" align="center" gutterBottom>
          Community Forum
        </Typography>

        {/* Filters and Search */}
        <Box
          className="filter-search"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 4,
          }}
        >
          <FormControl variant="outlined" size="small">
            <InputLabel>Filter</InputLabel>
            <Select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              label="Filter"
              sx={{ width: 150 }}
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
            sx={{ flex: 1, marginLeft: 2 }}
          />
        </Box>

        {/* New Post Form */}
        <motion.form
          onSubmit={handlePostSubmit}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="post-form"
        >
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
            rows={3}
            sx={{ marginBottom: 2 }}
          />
          <motion.button
            type="submit"
            className="butt"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Post
          </motion.button>
        </motion.form>

        {/* Posts Section */}
        <div
          className="posts"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px",
          }}
        >
          {filteredPosts.map((post) => (
            <motion.div
              className="post-card"
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Card
                sx={{ padding: 2, position: "relative", overflow: "hidden" }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: 2,
                  }}
                >
                  <Avatar src={post.avatarUrl} alt="User Avatar" />
                  <Box sx={{ marginLeft: 2 }}>
                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      {post.userName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {post.title}
                    </Typography>
                  </Box>
                </Box>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    maxHeight: "50px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {post.content}
                </Typography>
                <Button
                  variant="text"
                  size="small"
                  sx={{ marginTop: 1, color: "#3f51b5" }}
                >
                  Read More
                </Button>

                {/* Reactions Section */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginTop: 2,
                  }}
                >
                  {/* Reactions Container */}
                  <Box
                    sx={{
                      display: "flex",
                      gap: 1,
                      fontSize: "1rem",
                    }}
                  >
                    <IconButton
                      onClick={() => handleReaction(post.id, "like")}
                      sx={{
                        color: "primary.main", // Uses theme's primary color
                        transition: "color 0.3s ease", // Smooth color transition
                        "&:hover": {
                          color: "primary.dark", // Darker shade on hover
                        },
                      }}
                    >
                      <ThumbUpIcon />
                    </IconButton>
                    <Typography>{post.reactions.like}</Typography>

                    <IconButton
                      onClick={() => handleReaction(post.id, "love")}
                      sx={{
                        color: "red",
                        transition: "transform 0.2s ease", // Add scale effect
                        "&:hover": {
                          transform: "scale(1.2)", // Enlarge on hover
                        },
                      }}
                    >
                      <FavoriteIcon />
                    </IconButton>
                    <Typography>{post.reactions.love}</Typography>

                    <IconButton
                      onClick={() => handleReaction(post.id, "haha")}
                      sx={{
                        color: "gold",
                        transition: "transform 0.2s ease",
                        "&:hover": {
                          transform: "rotate(-10deg)", // Tilt on hover for fun effect
                        },
                      }}
                    >
                      <EmojiEmotionsIcon />
                    </IconButton>
                    <Typography>{post.reactions.haha}</Typography>
                  </Box>

                  {/* Comments Button */}
                  <Button
                    size="small"
                    onClick={() =>
                      setShowComments((prev) => ({
                        ...prev,
                        [post.id]: !prev[post.id],
                      }))
                    }
                    sx={{
                      color: "primary.main",
                      fontWeight: "bold",
                      transition: "background-color 0.3s ease, color 0.3s ease",
                      "&:hover": {
                        backgroundColor: "primary.light",
                        color: "white",
                      },
                    }}
                  >
                    {showComments[post.id] ? "Hide Comments" : "View Comments"}
                  </Button>
                </Box>

                {/* Collapsible Comments */}
                {showComments[post.id] && (
                  <Box sx={{ marginTop: 2 }}>
                    {post.comments.map((comment, index) => (
                      <Typography
                        key={index}
                        variant="body2"
                        sx={{ marginBottom: 1 }}
                      >
                        {comment}
                      </Typography>
                    ))}
                    <TextField
                      variant="outlined"
                      size="small"
                      placeholder="Write a comment..."
                      value={commentInput}
                      onChange={(e) => setCommentInput(e.target.value)}
                      fullWidth
                      sx={{ marginTop: 1 }}
                    />
                    <Button
                      variant="contained"
                      size="small"
                      sx={{ marginTop: 1 }}
                      onClick={() => handleCommentSubmit(post.id)}
                    >
                      Comment
                    </Button>
                  </Box>
                )}
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default CommunityForum;
