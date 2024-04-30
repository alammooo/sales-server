import { Prisma } from '@prisma/client';

import prisma from '@/config/prisma';
import {
  CreateSupportDocumentFileService,
  GetAllSupportDocumentFileService,
} from '@/types/document/supportFile.types';

export const getAllSupportDocumentFileService = async ({
  documentId,
}: GetAllSupportDocumentFileService) => {
  return prisma.supportFile.findMany({ where: { documentId } });
};

export const createSupportDocumentFileService = async ({
  userId,
  files,
  documentId,
}: CreateSupportDocumentFileService) => {
  const supportFiles: Prisma.SupportFileCreateManyInput[] =
    files?.map((file) => {
      return {
        documentId: documentId,
        name: file.filename,
        url: file.path,
        createdBy: userId,
        updatedBy: userId,
      };
    }) || [];

  return prisma.supportFile.createMany({ data: supportFiles });
};
