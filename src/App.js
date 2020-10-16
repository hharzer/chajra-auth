import React from "react";
import {
  ThemeProvider,
  CSSReset,
  theme,
  Box,
  Divider,
  Stat,
  StatLabel,
  StatNumber,
  Heading,
  StatHelpText,
  Flex,
  Text,
  Stack,
  Button,
  Link,
  SimpleGrid
} from "@chakra-ui/core";
import SplitPane, { Pane } from "react-split-pane";
import { Global, css } from "@emotion/core";

const App = () => (
  <ThemeProvider theme={theme}>
    <Global
      styles={css`
        html,
        body {
          width: 100vw;
          height: 100vh;
          margin: 0;
          padding: 0;
        }

        * {
          box-sizing: border-box;
        }

        #root {
          width: 100%;
          margin: 0;
          padding: 8px;
          height: 100%;
        }

        .Resizer {
          background: #000;
          opacity: 0.2;
          z-index: 1;
          -moz-box-sizing: border-box;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          -moz-background-clip: padding;
          -webkit-background-clip: padding;
          background-clip: padding-box;
        }

        .Resizer:hover {
          -webkit-transition: all 2s ease;
          transition: all 2s ease;
        }

        .Resizer.horizontal {
          height: 11px;
          margin: -5px 0;
          border-top: 5px solid rgba(255, 255, 255, 0);
          border-bottom: 5px solid rgba(255, 255, 255, 0);
          cursor: row-resize;
          width: 100%;
        }

        .Resizer.horizontal:hover {
          border-top: 5px solid rgba(0, 0, 0, 0.5);
          border-bottom: 5px solid rgba(0, 0, 0, 0.5);
        }

        .Resizer.vertical {
          width: 11px;
          margin: 0 -5px;
          border-left: 5px solid rgba(255, 255, 255, 0);
          border-right: 5px solid rgba(255, 255, 255, 0);
          cursor: col-resize;
        }

        .Resizer.vertical:hover {
          border-left: 5px solid rgba(0, 0, 0, 0.5);
          border-right: 5px solid rgba(0, 0, 0, 0.5);
        }
        .Resizer.disabled {
          cursor: not-allowed;
        }
        .Resizer.disabled:hover {
          border-color: transparent;
        }
      `}
    />
    <CSSReset />
    <Box
      width="100%"
      height="100%"
      display="flex"
      flexDirection="column"
      justifyContent="center"
    >
      <Box
        display="flex"
        alignItems="center"
        pl={4}
        pr={4}
        pt={0}
        pb={0}
        backgroundColor="blackAlpha.300"
      >
        <Text flexGrow={1} fontWeight="bold" fontSize="2xl">
          fnexus
        </Text>
        <Stack p={1} pl={1} alignItems="center" isInline isReversed>
          <Button variantColor="green">Login</Button>
          <Stack isInline pt={1} pb={1} pl={1} pr={1}>
            <Link>Webclips</Link>
            <Link>Tracks</Link>
            <Link>Files</Link>
          </Stack>
        </Stack>
      </Box>
      <Divider borderColor="blackAlpha.900" />
      <Flex flexGrow={1} display="grid" p={1}>
        <SplitPane split="vertical" minSize={50}>
          <Stack pl={2} pr={2} pt={4} pb={4}>
            <Box
              minHeight="80px"
              borderWidth="1px"
              p={5}
              shadow="md"
              backgroundColor="whiteAlpha.500"
            >
              <Heading fontSize="xl">title</Heading>
              <Text mt={4}>desc</Text>
            </Box>
          </Stack>
          <Stack isInline spacing={8} pl={2} pr={2} pt={4} pb={4}>
            <Stat p="6">
              <StatLabel>Collected Fees</StatLabel>
              <StatNumber>£0.00</StatNumber>
              <StatHelpText>Feb 12 - Feb 28</StatHelpText>
            </Stat>
            <Stat p="6">
              <StatLabel>Collected Fees</StatLabel>
              <StatNumber>£0.00</StatNumber>
              <StatHelpText>Feb 12 - Feb 28</StatHelpText>
            </Stat>
          </Stack>
        </SplitPane>
      </Flex>
      <Divider borderColor="blackAlpha.900" />
      <Box backgroundColor="blackAlpha.300" />
    </Box>
  </ThemeProvider>
);

export default App;
