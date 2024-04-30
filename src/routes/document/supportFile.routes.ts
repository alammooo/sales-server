import express from 'express';

import {
  createSupportDocumentFileController,
  getAllSupportDocumentFileController,
} from '@/controllers/document/supportFile.controllers';
import multerUpload from '@/utils/multerUpload';

const supportFileRouter = express.Router({ mergeParams: true });

supportFileRouter.get('/', getAllSupportDocumentFileController);
supportFileRouter.post('/', multerUpload.array('files'), createSupportDocumentFileController);

export default supportFileRouter;
