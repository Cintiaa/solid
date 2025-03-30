export class FileCompressor {
  compress(file: Buffer): Buffer {
    console.log("Compactando arquivo...");
    return file.slice(0, file.length / 2);
  }
}

export class CloudUploader {
  upload(file: Buffer, destination: string) {
    console.log(`Enviando arquivo para ${destination}...`);
  }
}

export class FileUploadService {
  constructor(
    private fileCompressor: FileCompressor,
    private cloudUploader: CloudUploader
  ) {}

  uploadFile(file: Buffer, destination: string) {
    const compressedFile = this.fileCompressor.compress(file);
    this.cloudUploader.upload(compressedFile, destination);
  }
}
