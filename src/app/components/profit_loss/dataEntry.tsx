import { ChangeEvent, FC } from "react";
import { Input } from "antd";
import type { DataType } from "./types";
import readExcelFile from "@/app/utils/excel";
import { parseFinancialData } from "@/app/utils/formatters";
import DataTable from "./Table/table";

interface DataEntryProps {
  data: DataType[];
  setData: (data: DataType[]) => void;
}

const DataEntry: FC<DataEntryProps> = ({ data, setData }) => {
  const onLoadFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.currentTarget.files?.[0];
    readExcelFile(file).then((aaData) => {
      // Eliminamos la primera fila (cabecera)
      aaData.shift();

      setData(parseFinancialData(aaData));
    });
  };

  return (
    <div>
      <Input type="file" onChange={onLoadFile} />
      <DataTable data={data} />
    </div>
  );
};

export default DataEntry;
