export interface GetAllSupportDocumentFileService {
  documentId: number;
}

export interface CreateSupportDocumentFileService {
  userId: number;
  documentId: number;
  files?: Express.Multer.File[];
}
