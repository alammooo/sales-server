import { Prisma } from '@prisma/client';

import prisma from '@/config/prisma';
import {
  CreateDocumentService,
  DeleteDocumentService,
  GetAllDocumentService,
} from '@/types/document/document.types';

export const getAllDocumentService = async (params: GetAllDocumentService) => {
  if (params.subElementId) {
    return prisma.document.findMany({
      where: { subElementId: params.subElementId },
      include: { supportFiles: true },
    });
  } else if (params.elementId) {
    return prisma.document.findMany({
      where: { elementId: params.elementId },
      include: { supportFiles: true },
    });
  } else if (params.criteriaId) {
    return prisma.document.findMany({
      where: { criteriaId: params.criteriaId },
      include: { supportFiles: true },
    });
  } else if (params.subUnitId) {
    return prisma.document.findMany({
      where: { subUnitId: params.subUnitId },
      include: { supportFiles: true },
    });
  } else if (params.unitId) {
    return prisma.document.findMany({
      where: { unitId: params.unitId },
      include: { supportFiles: true },
    });
  }
};

export const createDocumentService = async ({ userId, files, ...props }: CreateDocumentService) => {
  return await prisma.$transaction(async (tx) => {
    const documents = await tx.document.create({
      data: {
        ...props,
        createdBy: userId,
        updatedBy: userId,
      },
    });

    const supportFiles: Prisma.SupportFileCreateManyInput[] =
      files?.map((file) => {
        return {
          documentId: documents.id,
          name: file.filename,
          url: file.path,
          createdBy: userId,
          updatedBy: userId,
        };
      }) || [];

    await tx.supportFile.createMany({ data: supportFiles });

    return documents;
  });
};

export const deleteDocumentService = async ({ id }: DeleteDocumentService) => {
  return prisma.document.delete({
    where: { id },
  });
};
