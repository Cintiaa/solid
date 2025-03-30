export class FileUploadService {
  uploadFile(file: Buffer, destination: string) {
    const compressedFile = this.compressFile(file);

    console.log(`Enviando arquivo para ${destination}...`);
  }

  private compressFile(file: Buffer): Buffer {
    console.log("Compactando arquivo...");

    // Simulação de compactação
    return file.slice(0, file.length / 2);
  }
}
