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
import { useState, SyntheticEvent } from "react";

const Tabs = () => {
  const [value, setValue] = useState<string>("HomeTab");

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box>
      <TabContext value={value}>
        <Box dir="rtl">
          <TabList onChange={handleChange}>
            <Tab label={<HomeIcon />} value="HomeTab" />
            <Tab label={<ShoppingCartIcon />} value="CartTab" />
          </TabList>
        </Box>
        <TabPanel value="HomeTab">
          <LinearIndeterminate />
        </TabPanel>
        <TabPanel value="CartTab">
          <ItemsList />
        </TabPanel>
      </TabContext>
      <br />
    </Box>
  );
};

export default Tabs;
