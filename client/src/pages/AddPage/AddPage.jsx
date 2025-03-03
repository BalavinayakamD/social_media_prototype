import React, { useState, useRef } from "react";
import {
  Container,
  Box,
  Typography,
  Button,
  TextField,
  IconButton,
  Paper,
  Divider,
  Grid,
  Avatar,
  CircularProgress
} from "@mui/material";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import ImageIcon from "@mui/icons-material/Image";
import CloseIcon from "@mui/icons-material/Close";
import { useStore } from "../../store/Store";
import Bottom from "../../components/bottom/Bottom";

function AddPage() {
  const { userAvatar, userName } = useStore();
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(null);
  const fileInputRef = useRef(null);

  // Light theme colors for consistent styling
  const lightTheme = {
    background: "#FAFAFA",
    paper: "#FFFFFF",
    border: "#DBDBDB",
    textPrimary: "#262626",
    textSecondary: "#8E8E8E",
    accent: "#0095F6"
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setImage(selectedFile);
      
      // Create a preview URL for the selected image
      const fileReader = new FileReader();
      fileReader.onload = () => {
        setPreviewUrl(fileReader.result);
      };
      fileReader.readAsDataURL(selectedFile);
    }
  };

  const handleCaptionChange = (e) => {
    setCaption(e.target.value);
  };

  const handleUpload = () => {
    if (!image) return;
    
    setIsLoading(true);
    
    // Simulate upload delay - replace with actual API call
    setTimeout(() => {
      // Send to backend
      console.log("Uploading image:", image);
      console.log("Caption:", caption);
      
      // Reset the form after successful upload
      setIsLoading(false);
      setImage(null);
      setPreviewUrl(null);
      setCaption("");
      
      // Redirect to home page
    }, 1500);
  };

  const handleRemoveImage = () => {
    setImage(null);
    setPreviewUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <Container 
      maxWidth="sm" 
      sx={{ 
        py: 2, 
        minHeight: "90vh", 
        display: "flex", 
        flexDirection: "column",
        bgcolor: lightTheme.background
      }}
    >
      <Paper 
        elevation={0} 
        sx={{ 
          p: 2, 
          mb: 2, 
          borderRadius: 2,
          bgcolor: lightTheme.paper,
          border: `1px solid ${lightTheme.border}`
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <Typography 
            variant="h6" 
            sx={{ 
              flexGrow: 1, 
              fontWeight: 500,
              color: lightTheme.textPrimary
            }}
          >
            Create New Post
          </Typography>
        </Box>

        <Divider sx={{ mb: 3 }} />

        {!previewUrl ? (
          // Upload section when no image is selected
          <Box 
            sx={{ 
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              py: 6,
              textAlign: "center"
            }}
          >
            <ImageIcon 
              sx={{ 
                fontSize: 60, 
                color: lightTheme.textSecondary,
                mb: 2
              }} 
            />
            <Typography 
              variant="h6" 
              sx={{ mb: 1, color: lightTheme.textPrimary }}
            >
              Drag photos and videos here
            </Typography>
            
            <Typography 
              variant="body2" 
              sx={{ mb: 3, color: lightTheme.textSecondary }}
            >
              Share your moments with your followers
            </Typography>
            
            <Button
              variant="contained"
              component="label"
              startIcon={<AddAPhotoIcon />}
              sx={{
                bgcolor: lightTheme.accent,
                '&:hover': {
                  bgcolor: "#0077CC"
                },
                textTransform: 'none',
                borderRadius: 1,
                px: 3
              }}
            >
              Select from computer
              <input
                type="file"
                hidden
                accept="image/*"
                ref={fileInputRef}
                onChange={handleFileChange}
              />
            </Button>
          </Box>
        ) : (
          // Preview and caption section when image is selected
          <Box>
            <Box sx={{ position: "relative", mb: 3 }}>
              <img
                src={previewUrl}
                alt="Preview"
                style={{ 
                  width: "100%",
                  maxHeight: "400px",
                  objectFit: "contain",
                  borderRadius: "4px"
                }}
              />
              
              <IconButton
                onClick={handleRemoveImage}
                sx={{ 
                  position: "absolute",
                  top: 8,
                  right: 8,
                  bgcolor: "rgba(0,0,0,0.5)",
                  color: "#fff",
                  '&:hover': {
                    bgcolor: "rgba(0,0,0,0.7)"
                  },
                  p: 0.5
                }}
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </Box>
            
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Avatar 
                src={userAvatar} 
                alt={userName} 
                sx={{ mr: 1.5, width: 32, height: 32 }}
              />
              <Typography variant="subtitle2" fontWeight="500">
                {userName || "username"}
              </Typography>
            </Box>
            
            <TextField
              fullWidth
              multiline
              rows={4}
              placeholder="Write a caption..."
              value={caption}
              onChange={handleCaptionChange}
              variant="outlined"
              sx={{ 
                mb: 3,
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: lightTheme.border,
                  },
                  '&:hover fieldset': {
                    borderColor: lightTheme.textSecondary,
                  }
                }
              }}
            />
            
            <Button
              fullWidth
              variant="contained"
              onClick={handleUpload}
              disabled={isLoading}
              sx={{
                bgcolor: lightTheme.accent,
                '&:hover': {
                  bgcolor: "#0077CC"
                },
                textTransform: 'none',
                borderRadius: 1,
                py: 1
              }}
            >
              {isLoading ? (
                <CircularProgress size={24} sx={{ color: "#fff" }} />
              ) : (
                "Share"
              )}
            </Button>
          </Box>
        )}
      </Paper>
      
      <Box sx={{ mt: 'auto', py: 2 }}>
        <Bottom />
      </Box>
    </Container>
  );
}

export default AddPage;