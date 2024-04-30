import express from 'express';

import {
  createDocumentController,
  deleteDocumentController,
  getAllDocumentController,
} from '@/controllers/document/document.controllers';
import multerUpload from '@/utils/multerUpload';

import supportFileRouter from './supportFile.routes';

const documentRouter = express.Router({ mergeParams: true });

documentRouter.get('/', getAllDocumentController);
documentRouter.use('/:documentId/support-file', supportFileRouter);
documentRouter.post('/', multerUpload.array('files'), createDocumentController);
documentRouter.delete('/:documentId', deleteDocumentController);

export default documentRouter;
