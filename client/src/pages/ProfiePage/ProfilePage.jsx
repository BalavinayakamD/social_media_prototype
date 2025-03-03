import { useState } from "react";
import { 
  Avatar, 
  Typography,
  Container,
  Grid,
  Box,
  Button,
  Tabs,
  Tab,
  ImageList,
  ImageListItem,
  IconButton,
  useMediaQuery,
  useTheme
} from "@mui/material";
import GridOnIcon from "@mui/icons-material/GridOn";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useStore } from "../../store/Store";

function ProfilePage() {
  const { userAvatar, userName } = useStore();
  const [tabValue, setTabValue] = useState(0);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  // Light theme colors
  const lightTheme = {
    background: "#FAFAFA",
    paper: "#FFFFFF",
    border: "#DBDBDB",
    textPrimary: "#262626",
    textSecondary: "#8E8E8E",
    accent: "#0095F6"
  };
  
  // Sample posts for demonstration
  const samplePosts = [
    { id: 1, imageUrl: "https://source.unsplash.com/random/300x300?nature" },
    { id: 2, imageUrl: "https://source.unsplash.com/random/300x300?city" },
    { id: 3, imageUrl: "https://source.unsplash.com/random/300x300?people" },
    { id: 4, imageUrl: "https://source.unsplash.com/random/300x300?technology" },
    { id: 5, imageUrl: "https://source.unsplash.com/random/300x300?animals" },
    { id: 6, imageUrl: "https://source.unsplash.com/random/300x300?architecture" },
    { id: 7, imageUrl: "https://source.unsplash.com/random/300x300?travel" },
    { id: 8, imageUrl: "https://source.unsplash.com/random/300x300?food" },
    { id: 9, imageUrl: "https://source.unsplash.com/random/300x300?fashion" },
  ];

  return (
    <Container sx={{ 
      py: 2, 
      maxWidth: { xs: "sm", md: "md" },
      px: { xs: 1, sm: 2 },
      bgcolor: lightTheme.background
    }}>
      {/* Profile Header */}
      <Box sx={{ mb: 2, pt: 1, px: { xs: 0, sm: 1 } }}>
        <Grid container spacing={isMobile ? 2 : 3} alignItems="center">
          {/* Profile Avatar */}
          <Grid item xs={4} sm={3} container justifyContent="center">
            <Avatar 
              src={userAvatar} 
              alt={userName || "Profile"}
              sx={{ 
                width: { xs: 77, sm: 100, md: 130 }, 
                height: { xs: 77, sm: 100, md: 130 },
                border: `1px solid ${lightTheme.border}`
              }}
            />
          </Grid>
          
          {/* Profile Info */}
          <Grid item xs={8} sm={9}>
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              mb: { xs: 1.5, sm: 2 },
              flexWrap: 'wrap',
              gap: 1
            }}>
              <Typography 
                variant={isMobile ? "subtitle1" : "h6"} 
                fontWeight="400" 
                sx={{ 
                  mr: 1.5,
                  color: lightTheme.textPrimary
                }}
              >
                {userName || "instagram_user"}
              </Typography>
              
              <Button 
                variant="outlined" 
                size="small" 
                sx={{ 
                  borderRadius: 1, 
                  mr: 0.5, 
                  textTransform: 'none', 
                  fontWeight: 600,
                  px: { xs: 1.5, sm: 2 },
                  py: 0.5,
                  fontSize: { xs: '0.8rem', sm: '0.875rem' },
                  color: lightTheme.textPrimary,
                  borderColor: lightTheme.border,
                  "&:hover": {
                    borderColor: lightTheme.textSecondary,
                    backgroundColor: "rgba(0,0,0,0.03)"
                  }
                }}
              >
                Edit Profile
              </Button>
              
              <IconButton size="small" sx={{ color: lightTheme.textPrimary }}>
                <MoreHorizIcon fontSize={isMobile ? "small" : "medium"} />
              </IconButton>
            </Box>
            
            <Box sx={{ 
              display: 'flex', 
              mb: { xs: 1.5, sm: 2 },
              flexWrap: { xs: 'wrap', sm: 'nowrap' }
            }}>
              <Box sx={{ mr: 3, mb: { xs: 0.5, sm: 0 } }}>
                <Typography 
                  component="span" 
                  fontWeight="600" 
                  color={lightTheme.textPrimary}
                  fontSize={{ xs: '0.9rem', sm: '1rem' }}
                >
                  54
                </Typography>
                <Typography 
                  component="span" 
                  color={lightTheme.textPrimary} 
                  sx={{ ml: 0.5 }}
                  fontSize={{ xs: '0.9rem', sm: '1rem' }}
                >
                  posts
                </Typography>
              </Box>
              
              <Box sx={{ mr: 3, mb: { xs: 0.5, sm: 0 } }}>
                <Typography 
                  component="span" 
                  fontWeight="600" 
                  color={lightTheme.textPrimary}
                  fontSize={{ xs: '0.9rem', sm: '1rem' }}
                >
                  843
                </Typography>
                <Typography 
                  component="span" 
                  color={lightTheme.textPrimary} 
                  sx={{ ml: 0.5 }}
                  fontSize={{ xs: '0.9rem', sm: '1rem' }}
                >
                  followers
                </Typography>
              </Box>
              
              <Box>
                <Typography 
                  component="span" 
                  fontWeight="600" 
                  color={lightTheme.textPrimary}
                  fontSize={{ xs: '0.9rem', sm: '1rem' }}
                >
                  162
                </Typography>
                <Typography 
                  component="span" 
                  color={lightTheme.textPrimary} 
                  sx={{ ml: 0.5 }}
                  fontSize={{ xs: '0.9rem', sm: '1rem' }}
                >
                  following
                </Typography>
              </Box>
            </Box>
            
            <Box sx={{ mb: 0.5 }}>
              <Typography 
                fontWeight="600" 
                color={lightTheme.textPrimary}
                fontSize={{ xs: '0.9rem', sm: '1rem' }}
              >
                {userName || "Full Name"}
              </Typography>
              
              <Typography 
                variant="body2" 
                sx={{ 
                  whiteSpace: 'pre-line',
                  wordBreak: 'break-word',
                  fontWeight: 400,
                  color: lightTheme.textPrimary,
                  fontSize: { xs: '0.8rem', sm: '0.875rem' }
                }}
              >
                Photography enthusiast | Travel lover 
                Food explorer | Digital creator
              </Typography>
              
              <Typography 
                variant="body2" 
                color={lightTheme.accent} 
                sx={{ 
                  mt: 0.5, 
                  fontWeight: 500,
                  fontSize: { xs: '0.8rem', sm: '0.875rem' }
                }}
                component="a"
                href="#"
              >
                www.instagram.com
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      
      {/* Tabs and Posts */}
      <Box sx={{ borderTop: `1px solid ${lightTheme.border}`, mt: 1 }}>
        <Tabs
          value={tabValue}
          onChange={(event, newValue) => setTabValue(newValue)}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          sx={{ 
            '& .MuiTab-root': {
              textTransform: 'none',
              fontSize: { xs: '0.7rem', sm: '0.8rem' },
              fontWeight: 500,
              minHeight: { xs: 40, sm: 48 },
              color: lightTheme.textSecondary,
              '&.Mui-selected': {
                color: lightTheme.accent
              }
            } 
          }}
        >
          <Tab icon={<GridOnIcon fontSize={isMobile ? "small" : "medium"} />} iconPosition="start" label="Posts" />
          <Tab icon={<BookmarkBorderIcon fontSize={isMobile ? "small" : "medium"} />} iconPosition="start" label="Saved" />
        </Tabs>
        
        <Box sx={{ py: 0.5 }}>
          {tabValue === 0 && (
            <ImageList 
              cols={3} 
              gap={isMobile ? 1 : 2}
              sx={{ m: 0 }}
            >
              {samplePosts.map((post) => (
                <ImageListItem 
                  key={post.id} 
                  sx={{ 
                    aspectRatio: '1/1',
                    cursor: 'pointer',
                    overflow: 'hidden',
                    '&:hover': { 
                      opacity: 0.9,
                      transition: 'all 0.3s ease'
                    }
                  }}
                >
                  <img
                    src={post.imageUrl}
                    alt={`Post ${post.id}`}
                    loading="lazy"
                    style={{ 
                      objectFit: 'cover', 
                      width: '100%', 
                      height: '100%',
                      display: 'block'
                    }}
                  />
                </ImageListItem>
              ))}
            </ImageList>
          )}
          
          {tabValue === 1 && (
            <Box sx={{ py: 10, textAlign: 'center' }}>
              <Typography 
                color={lightTheme.textSecondary} 
                sx={{ 
                  fontWeight: 500,
                  fontSize: { xs: '0.9rem', sm: '1rem' }
                }}
              >
                Only you can see what you've saved
              </Typography>
              <Typography 
                variant="body2" 
                color={lightTheme.textSecondary}
                fontSize={{ xs: '0.8rem', sm: '0.875rem' }}
              >
                No saved posts yet.
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
    </Container>
  );
}

export default ProfilePage;
