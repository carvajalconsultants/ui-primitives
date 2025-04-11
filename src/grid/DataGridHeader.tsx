import { TableHeader } from "../table/TableHeader";

import type { TableHeaderProps } from "../table/TableHeader";

/**
 * Straight passthrough, we have the alias just for DX reasons.
 */
export const DataGridHeader = (props: TableHeaderProps) => <TableHeader {...props} />;
