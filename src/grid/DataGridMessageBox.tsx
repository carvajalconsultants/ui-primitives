import { Box } from "../../styled-system/jsx";
import { Paragraph } from "../typography/Paragraph";

/*
  This component is used to display a message in a data grid.
*/
export const DataGridMessageBox = ({ children }: { children: React.ReactNode }) => (
  <Box padding="8" background="body.bg" borderRadius="lg" height="full" display="flex" justifyContent="center" alignItems="center" border="1" borderColor="border.secondary._alt">
    {/* If the children is a string, display it as a paragraph */}
    {typeof children === "string" ? (
      <Paragraph size="lg" weight="semibold">
        {children}
      </Paragraph>
    ) : (
      children
    )}
  </Box>
);
