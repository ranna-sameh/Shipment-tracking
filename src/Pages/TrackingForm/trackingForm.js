import React, { useContext, useState } from "react";
import {
  TextField,
  InputAdornment,
  IconButton,
  Box,
  Typography,
  CircularProgress,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";
import { Context } from "../../Context";
import { useNavigate } from "react-router-dom";
import { mapSteps } from "../../utils";

const SearchInput = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const { setData, setState } = useContext(Context);
  const [err, setErr] = useState("");

  const navigate = useNavigate();

  const handleSearch = () => {
    setErr("");
    setLoading(true);

    axios
      .get(`https://tracking.bosta.co/shipments/track/${searchQuery}`)
      .then((response) => {
        const data = response.data;
        setLoading(false);
        setData(data);
        setState(mapSteps[data.CurrentStatus.state]);
        navigate(`/${searchQuery}`);
      })
      .catch((er) => {
        setLoading(false);

        setErr("Inavlid shipment no.");
      });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: 20,
      }}
    >
      <Typography style={{ fontFamily: "Cairo", fontSize: 20 }}>
        Track your shipment
      </Typography>
      <TextField
        variant="outlined"
        placeholder="Tracking No."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        size="medium"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleSearch} edge="end">
                {loading ? <CircularProgress /> : <SearchIcon />}
              </IconButton>
            </InputAdornment>
          ),
        }}
        sx={{
          "& input::placeholder": {
            fontFamily: "Cairo",
          },
        }}
      />
      {err && (
        <Typography style={{ fontFamily: "Cairo", color: "red" }}>
          {err}
        </Typography>
      )}
    </Box>
  );
};

export default SearchInput;
