import * as React from "react";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HomeIcon from "@mui/icons-material/Home";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import ItemsList from "../ItemsListPage/ItemsListPage.tsx";
import LinearIndeterminate from "../ProgressBars/LinearIndeterminate.tsx";
import { useState } from "react";

export default function LabTabs() {
  const [value, setValue] = useState<string>("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box>
      <TabContext value={value}>
        <Box dir="rtl">
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label={<HomeIcon />} value="1" />
            <Tab label={<ShoppingCartIcon />} value="2" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <LinearIndeterminate />
        </TabPanel>
        <TabPanel value="2">
          <ItemsList />
        </TabPanel>
      </TabContext>
      <br />
    </Box>
  );
}
