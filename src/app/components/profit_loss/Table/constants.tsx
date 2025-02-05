import {
  dateFormat,
  currencyFormat
} from "@/app/utils/formatters";
import type { DataType } from "../types";
import type { TableProps } from "antd";
import { Space, Table, Tag, Input, Typography } from "antd";

const columns: TableProps<DataType>["columns"] = [
  {
    title: "Fecha",
    dataIndex: "date",
    key: "date",
    render: (date: Date) => <Typography>{dateFormat.format(date)}</Typography>
  },
  {
    title: "Concepto",
    dataIndex: "concept",
    key: "concept"
  },
  {
    title: "Descripción",
    dataIndex: "description",
    key: "description"
  },
  {
    title: "Cantidad",
    dataIndex: "amount",
    key: "amount",
    render: (amount: number) => (
      <Tag color={amount > 0 ? "green" : "red"}>
        {currencyFormat.format(amount)}
      </Tag>
    ),
    align: "right"
  },
  {
    title: "Comentarios",
    dataIndex: "comments",
    key: "comments"
  }
];

export { columns };