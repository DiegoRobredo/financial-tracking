import * as XLSX from "xlsx";

const readExcelFile = async function (
  file: File | undefined
): Promise<any[][]> {
  if (!file) {
    return Promise.reject(new Error("No se ha seleccionado ningún archivo"));
  }

  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (event) => {
      if (!event.target?.result) {
        return reject(new Error("Error al leer el archivo"));
      }

      const data = new Uint8Array(event.target.result as ArrayBuffer);
      const workbook = XLSX.read(data, { type: "array" });

      // Suponemos que queremos leer la primera hoja del Excel
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];

      // Convertimos la hoja en un array de arrays (matriz)
      const sheetData: any[][] = XLSX.utils.sheet_to_json(sheet, { header: 1 });

      resolve(sheetData);
    };

    reader.onerror = (error) => reject(error);
    reader.readAsArrayBuffer(file);
  });
};

export default readExcelFile;