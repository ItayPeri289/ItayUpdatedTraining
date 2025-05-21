import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { useState, useEffect } from "react";

interface loadingProgressBar {
  itemsAmount: number;
  setOpenAlertDialog: (status: boolean) => void;
}

const timeOutMs = 500;

const LinearDeterminate = (props: loadingProgressBar) => {
  const [currentProgress, setCurrentProgress] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentProgress((previousProgress) => {
        if (previousProgress === 100) return 0;

        const diff = 100 / props.itemsAmount;
        return Math.min(previousProgress + diff, 100);
      });
    }, timeOutMs);

    return () => {
      props.setOpenAlertDialog(true);
      clearInterval(timer);
    };
  }, []);

  return (
    <Box sx={{ width: "18rem", backgroundColor: "DodgeBlue" }}>
      <LinearProgress
        variant="determinate"
        value={currentProgress}
        sx={{ height: 10 }}
      />
    </Box>
  );
};

export default LinearDeterminate;
