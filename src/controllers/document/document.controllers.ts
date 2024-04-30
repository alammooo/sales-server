import {
  createDocumentService,
  deleteDocumentService,
  getAllDocumentService,
} from '@/services/document/document.services';
import { ExpressFc } from '@/types';
import {
  createDocumentValidator,
  deleteDocumentValidator,
  getAllDocumentValidator,
} from '@/validators/document/document.validators';

export const getAllDocumentController: ExpressFc = async (req, res, next) => {
  try {
    const { params } = await getAllDocumentValidator.validate(req);
    const result = await getAllDocumentService(params);
    res.status(200).json({ message: 'success get all document', data: result });
  } catch (error) {
    next(error);
  }
};

export const createDocumentController: ExpressFc = async (req, res, next) => {
  try {
    console.log(req.params, req.files, 'HALLO PAYLOAD✅✅✅✅✅✅');
    const { body, params, files } = await createDocumentValidator.validate(req, {
      stripUnknown: true,
    });
    let result;

    if (params.subElementId) {
      result = await createDocumentService({
        ...body,
        subElementId: params.subElementId,
        userId: req.user.id,
        files,
      });
    } else if (params.elementId) {
      result = await createDocumentService({
        ...body,
        elementId: params.elementId,
        userId: req.user.id,
        files,
      });
    } else if (params.criteriaId) {
      result = await createDocumentService({
        ...body,
        criteriaId: params.criteriaId,
        userId: req.user.id,
        files,
      });
    } else if (params.subUnitId) {
      result = await createDocumentService({
        ...body,
        subUnitId: params.subUnitId,
        userId: req.user.id,
        files,
      });
    } else if (params.unitId) {
      result = await createDocumentService({
        ...body,
        unitId: params.unitId,
        userId: req.user.id,
        files,
      });
    }

    res.status(201).json({
      message: 'success create document',
      documentId: result?.id,
      documentNumber: result?.documentNumber,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteDocumentController: ExpressFc = async (req, res, next) => {
  try {
    const { params } = await deleteDocumentValidator.validate(req);
    await deleteDocumentService({ id: params.documentId });
    res.status(204).json({ message: 'success delete document' });
  } catch (error) {
    next(error);
  }
};
