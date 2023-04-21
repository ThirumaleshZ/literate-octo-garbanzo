import Stack from "@mui/material/Stack";
import TypoGraphy from "../../../components/atoms/TypoGraphy";
import theme from "../../../theme/theme";

const currentDate = new Date();
const currentDateFormatted = currentDate.toLocaleDateString("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
});

const Greetings = () => {
  return (
    <Stack direction="column" data-testid="greetings">
      <TypoGraphy
        label={`Good ${
          currentDate.getHours() >= 12 ? "afternoon" : "morning"
        } ✋`}
        variants={"heading2"}
        style={{
          color: theme.palette.text.primary,
        }}
      />

      <TypoGraphy
        label={`${currentDateFormatted}`}
        variants={"heading3"}
        style={{
          color: theme.palette.text.disabled,
        }}
      />
    </Stack>
  );
};

export default Greetings;
