import {
  createSupportDocumentFileService,
  getAllSupportDocumentFileService,
} from '@/services/document/supportFile.services';
import { ExpressFc } from '@/types';
import { createSupportDocumentFileValidator } from '@/validators/document/supportFile.validators';

export const getAllSupportDocumentFileController: ExpressFc = async (req, res, next) => {
  try {
    const { params } = await createSupportDocumentFileValidator.validate(req, {
      stripUnknown: true,
    });
    const result = await getAllSupportDocumentFileService({
      documentId: params.documentId,
    });
    res.status(200).json({ message: 'success get all support file', data: result });
  } catch (error) {
    next(error);
  }
};

export const createSupportDocumentFileController: ExpressFc = async (req, res, next) => {
  try {
    console.log(req.params, req.files, "HALLO PAYLOAD✅✅✅✅✅✅")
    const { params, files } = await createSupportDocumentFileValidator.validate(req, {
      stripUnknown: true,
    });
    await createSupportDocumentFileService({
      documentId: params.documentId,
      userId: req.user.id,
      files,
    });
    res.status(201).json({ message: 'success create support file' });
  } catch (error) {
    next(error);
  }
};
