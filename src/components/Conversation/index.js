import React from "react";

import { Box, Stack } from "@mui/material";
import Header from "./Header";
import Footer from "./Footer";
import Massage from "./Massage";

function Conversation() {
  return (
    <Stack height={"100%"} maxHeight={"100vh"} width={"auto"}>
      {/*Chat Header */}
      <Header />
      {/*Msg */}
      <Box
        width={"100%"}
        sx={{ flexGrow: 1, height: "100%", overflowY: "scroll" }}
      >
        <Massage menu={true}/>
      </Box>
      {/*Chat Footer */}
      <Footer />
    </Stack>
  );
}

export default Conversation;
