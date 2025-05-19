import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { useState, useEffect } from "react";

interface loadingProgressBar {
  itemsAmount: number;
  setOpenAlertDialog: (status: boolean) => void;
}

export default function LinearDeterminate(props: loadingProgressBar) {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = 100 / props.itemsAmount;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      props.setOpenAlertDialog(true);
      clearInterval(timer);
    };
  }, []);

  return (
    <Box sx={{ width: "18rem", backgroundColor: "DodgeBlue" }}>
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{ height: 10 }}
      />
    </Box>
  );
}
