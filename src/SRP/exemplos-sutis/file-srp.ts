interface FileReader {
  read(file: string): any[];
}

export class CSVFileReader implements FileReader {
  read(file: string): any[] {
    console.log(`Lendo arquivo CSV: ${file}`);
    return [{ name: "Magnolia", value: 100 }];
  }
}

interface FileExporter {
  export(data: any[]): string;
}

export class JSONFileExporter implements FileExporter {
  export(data: any[]): string {
    console.log("Exportando relatório em JSON...");
    return JSON.stringify(data);
  }
}

export class ReportService {
  constructor(
    private csvFileReader: CSVFileReader,
    private jsonFileExporter: JSONFileExporter
  ) {}

  processFileAndExport(file: string) {
    const data = this.csvFileReader.read(file);
    this.jsonFileExporter.export(data);
  }
}

const csvFileReader = new CSVFileReader();
const jsonFileExporter = new JSONFileExporter();
const reportService = new ReportService(csvFileReader, jsonFileExporter);
reportService.processFileAndExport("data.csv");
