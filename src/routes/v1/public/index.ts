import express from 'express';
const router = express.Router();
import { scrapeValidation } from '../../../validation';
import { scrapeController } from '../../../controllers';
import { processRequestQuery } from 'zod-express-middleware';

router.get(
  '/wiki-summary',
  processRequestQuery(scrapeValidation.getSummary.query),
  scrapeController.getSummary,
);

export default router;
