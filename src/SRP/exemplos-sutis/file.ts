export class FIleProcessor {
  processFile(file: string) {
    console.log(`Processando arquivo: ${file}`);
    const data = [{name: "Magnolia", value: 100}];

    const jsonReport = JSON.stringify(data);
    console.log(`Exportanto relatório em JSON: ${jsonReport}`);
  }
}