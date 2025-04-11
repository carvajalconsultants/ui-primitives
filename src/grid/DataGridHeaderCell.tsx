import { HeaderCell } from "../table/HeaderCell";

import type { HeaderCellProps } from "../table/HeaderCell";

/**
 * Straight passthrough, we have the alias just for DX reasons.
 */
export const DataGridHeaderCell = (props: HeaderCellProps) => <HeaderCell {...props} />;
