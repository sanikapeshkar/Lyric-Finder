import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { TextField } from "@mui/material";
import { getLyrics } from "../api/requests";

const styles = {
  paperContainer: {
    backgroundImage: `url(${Image})`,
  },
};

const Searchsong: React.FC = () => {


  const [track, setTrack] = useState("");
  const [artist, setArtist] = useState("");
  const [lyrics, setLyrics] = useState("");
  const [statusText, setStatusText] = useState("Search for lyrics..");
  
  const search = async () => {
    if (track === "" || artist === "") {
      return alert("Please fill all details!");
    }
    setLyrics("");
    const res = await getLyrics(track, artist);
    if (res.error) {
      return setStatusText(
        "Sorry lyrics not found! search for something else.."
      );
    }
    setLyrics(res);
    setStatusText("Search for lyrics..");
  };

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        pt: 15,
        pb: 3,
        m: 4,
      }}
    >
      <Container maxWidth="lg">
        <Paper
          sx={{
            bgcolor: "background.paper",
            pt: 15,
            pb: 10,
            pl: 10,
            pr: 10,
          }}
          style={styles.paperContainer}
        >
          <Typography
            component="h2"
            variant="h3"
            align="left"
            color="text.primary"
            gutterBottom
          >
            A Lyrics Finder
          </Typography>
          <Typography
            variant="h6"
            align="left"
            color="text.secondary"
            paragraph
          >
            Just type In Your Favorite song to get the lyrics .
          </Typography>
          <Stack sx={{ pt: 8, gap: 10 }} spacing={2} justifyContent="center">
            <Stack mt={-5}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="track"
                label="Enter Track"
                name="track"
                autoComplete="track"
                autoFocus
                value={track}
                onChange={(e) => {
                  // setSearchState(false);
                  console.log(e.target.value);
                  setTrack(e.target.value);
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="artist"
                label="Enter Artist"
                name="artist"
                autoComplete="artist"
                autoFocus
                value={artist}
                onChange={(e) => {
                  // setSearchState(false);
                  console.log(e.target.value);
                  setArtist(e.target.value);
                }}
              />
              <Button variant="contained" onClick={() => search()}>
                <SearchIcon sx={{ mr: 2 }} />
                FIND
              </Button>
            </Stack>
          </Stack>
        </Paper>
      </Container>
      <Container>
        <Typography variant="h6" align="left" color="text.secondary" paragraph>
          Lyrics preview
        </Typography>
        {lyrics === "" ? <h1>{statusText}</h1> : <p>{lyrics}</p>}
      </Container>
    </Box>
  );
};
export default Searchsong;
