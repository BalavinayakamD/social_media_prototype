import React, { useState, useRef } from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
  Typography,
  Box,
  InputBase,
  Divider,
} from "@mui/material";
import {
  Favorite,
  FavoriteBorder,
  ChatBubbleOutline,
  Send,
  BookmarkBorder,
  Bookmark,
} from "@mui/icons-material";

function Post({ post }) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [comment, setComment] = useState("");
  const [showAllComments, setShowAllComments] = useState(false);
  const commentInputRef = useRef(null);

  const handleLike = () => {
    setLiked(!liked);
  };
  const handleSave = () => {
    setSaved(!saved);
  };

  const handleComment = (e) => {
    e.preventDefault();
    if (comment.trim()) {
      // Add logic
      console.log("Comment submitted:", comment);
      setComment("");
    }
  };

  const displayComments = showAllComments? post.comments : post.comments.slice(0, 1);

  return (
    <Card
      sx={{
        maxWidth: "100%",
        boxShadow: "none",
        mb: 2,
        border: 1,
        borderColor: "divider",
      }}
    >
      {/* Post Header */}
      <CardHeader
        avatar={<Avatar src={post.userAvatar} />}
        title={<Typography variant="subtitle">{post.username}</Typography>}
        subheader={post.Posted_at}
        sx={{ p: 1.5 }}
      />

      {/* Post Image */}
      <CardMedia
        component="img"
        image={post.imageUrl}
        alt={`${post.username}'s post`}
        sx={{ width: "100%", maxHeight: "500px", objectFit: "contain" }}
      />

      {/* Action Buttons */}
      <CardActions disableSpacing sx={{ pt: 1, pb: 0.5 }}>
        <IconButton onClick={handleLike} sx={{ mr: 1 }}>
          {liked ? <Favorite sx={{ color: "red" }} /> : <FavoriteBorder />}
        </IconButton>
        <IconButton
          onClick={() =>
            commentInputRef.current && commentInputRef.current.focus()
          }
        >
          <ChatBubbleOutline />
        </IconButton>
        <IconButton>
          <Send />
        </IconButton>
        <Box sx={{ flexGrow: 1 }} />
        <IconButton onClick={handleSave}>
          {saved ? <Bookmark /> : <BookmarkBorder />}
        </IconButton>
      </CardActions>

      {/* Likes */}
      <CardContent sx={{ pt: 0, pb: 0.5 }}>
        <Typography variant="subtitle2" fontWeight="bold">
          {liked ? post.likes + 1 : post.likes} likes
        </Typography>

        {/* Caption */}
        <Box sx={{ mt: 0.5, mb: 0.5 }}>
          <Typography component="span" variant="body2">
            <Typography
              component="span"
              variant="subtitle2"
              fontWeight="bold"
              sx={{ mr: 1 }}
            >
              {post.username}
            </Typography>
            {post.caption}
          </Typography>
        </Box>

        {/* Comments */}
        {post.comments.length > 0 && (
          <Box sx={{ my: 1 }}>
            {post.comments.length > 1 && !showAllComments && (
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ cursor: "pointer", mb: 0.5 }}
                onClick={() => setShowAllComments(true)}
              >
                View all {post.comments.length} comments
              </Typography>
            )}

            {displayComments.map((comment, index) => (
              <Typography
                key={index}
                component="div"
                variant="body2"
                sx={{ mb: 0.5 }}
              >
                <Typography
                  component="span"
                  variant="subtitle2"
                  fontWeight="bold"
                  sx={{ mr: 1 }}
                >
                  {comment.username}
                </Typography>
                {comment.text}
              </Typography>
            ))}
          </Box>
        )}

        {/* Timestamp */}
        <Typography variant="caption" color="text.secondary">
          {post.Posted_at}
        </Typography>
      </CardContent>

      <Divider />

      {/* Add Comment */}
      <Box
        component="form"
        onSubmit={handleComment}
        sx={{
          display: "flex",
          alignItems: "center",
          px: 2,
          py: 1,
        }}
      >
        <InputBase
          placeholder="Add a comment..."
          fullWidth
          name="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          sx={{ mr: 1 }}
          inputRef={commentInputRef}
        />
        <IconButton
          type="submit"
          disabled={!comment.trim()}
          sx={{
            color: comment.trim() ? "primary.main" : "text.disabled",
            fontWeight: "bold",
            fontSize: "14px",
          }}
        >
          Post
        </IconButton>
      </Box>
    </Card>
  );
}

export default Post;
