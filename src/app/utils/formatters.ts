type BankDate = `${number}/${number}/${number}`;

const transformBankDate = (date: BankDate): Date => {
  const [day, month, year] = date.split("/").map(Number);
  return new Date(year, month - 1, day);
}

const dateFormat = new Intl.DateTimeFormat("es-ES", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit"
});

const currencyFormat = new Intl.NumberFormat("es-ES", {
  style: "currency",
  useGrouping: true,
  currency: "EUR"
});

interface MonthlyData {
  month: string;
  amount: number;
  data: RawData[];
}

interface RawData {
  key: string;
  date: Date;
  concept: string;
  description: string;
  amount: string;
  comments: string;
  flow: FlowType;
}

type Tag = "food" | "transport" | "housing" | "utilities" | "health" | "education" | "entertainment" | "other";

interface TaggedData {
  tag: Tag;
  amount: number;
  data: RawData[];
}

type FlowType = "income" | "expense";

interface FinancialData {
  monthlyAverage: number;
  monthlyData: MonthlyData[];
  rawData: RawData[];
  taggedData: TaggedData[];
}

const parseFinancialData = (aaData: any[][]): FinancialData => {
  const oFinancialData = {
    monthlyAverage: 0,
    monthlyData: [],
    rawData: [],
    taggedData: []
  }

  oFinancialData.rawData = aaData.map((row) => ({
    key: crypto.randomUUID(),
    date: transformBankDate(row[1]),
    concept: row[2],
    description: row[3],
    amount: row[4],
    comments: row[8]
  }))

  return oFinancialData;
}

export { parseFinancialData, transformBankDate, dateFormat, currencyFormat };