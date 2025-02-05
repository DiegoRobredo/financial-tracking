import { FC, useState } from "react";
import { Flex, Splitter, Typography } from "antd";
import type { SplitterProps } from "antd";
import DataEntry from "./dataEntry";
import Charts from "./charts";
import type { DataType } from "./types";

const CustomSplitter: FC<Readonly<SplitterProps>> = ({
  style,
  ...restProps
}) => {
  const [data, setData] = useState<DataType[]>([]);

  return (
    <Splitter
      className="h-full"
      style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", ...style }}
      {...restProps}
    >
      <Splitter.Panel collapsible min="20%">
        <Charts data={data} />
      </Splitter.Panel>
      <Splitter.Panel collapsible>
        <DataEntry data={data} setData={setData} />
      </Splitter.Panel>
    </Splitter>
  );
};
const App: FC = () => {
  return (
    <Flex gap="middle" vertical>
      <CustomSplitter className="h-full" layout="vertical" />
    </Flex>
  );
};

export default App;
