import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { useState, useEffect } from "react";
import HomePage from "../HomePage/HomePage";

const timeOutMs = 1000;

const LinearIndeterminate = () => {
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, timeOutMs);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box sx={{ width: "100%" }}>
      {loading ? (
        <LinearProgress
          sx={{ marginTop: "12em", marginRight: "3rem", marginLeft: "5rem" }}
        />
      ) : (
        <HomePage />
      )}
    </Box>
  );
};

export default LinearIndeterminate;
