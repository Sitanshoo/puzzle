import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Card } from "@mui/material";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const questionContent = [
    {
      alias: "Active Lights",
      forkedUrl:
        "https://stackblitz.com/edit/react-relglg?file=src/ChangeColor.js",
      panel: "panel1",
    },
    {
      alias: "Quiz",
      forkedUrl:
        "https://stackblitz.com/edit/react-44yptq?file=src/App.js",
      panel: "panel2",
    },
    {
      alias: "Generate Form",
      forkedUrl:
        "https://stackblitz.com/edit/react-44yptq?file=src/App.js",
      panel: "panel3",
    },
  ];
  return (
    <div>
      {questionContent.map((que) => {
        return (
          <Accordion
            expanded={expanded === que.panel}
            onChange={handleChange(que.panel)}
          >
            <AccordionSummary>
              <Typography>{que.alias}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Card
                component="iframe"
                src={que.forkedUrl}
                sx={{
                  bgcolor: "background.paper",
                  boxShadow: 1,
                  borderRadius: 2,
                  p: 2,
                  minWidth: 1200,
                  minHeight: 500,
                }}
              ></Card>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}
