import type { DataType } from "../types";
import { Table } from "antd";
import columns from "./columns";
import { FC } from "react";

type DataEntryProps = {
  data: DataType[]
}

const DataTable: FC<DataEntryProps> = ({ data }) => {

  return <Table<DataType> columns={columns} dataSource={data} />
}

export default DataTable;