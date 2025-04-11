import { TableFooter } from "../table/TableFooter";

import type { TableFooterProps } from "../table/TableFooter";

/**
 * Straight passthrough, we have the alias just for DX reasons.
 */
export const DataGridFooter = (props: TableFooterProps) => <TableFooter {...props} />;
