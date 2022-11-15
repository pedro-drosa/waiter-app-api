import { resolve } from 'node:path';
import { randomBytes } from 'node:crypto';
import multer from 'multer';

export const UPLOADS_PATH = resolve(__dirname, '..', '..', 'uploads');

const storage = multer.diskStorage({
  destination: (_request, _file, callback) => {
    callback(null, UPLOADS_PATH);
  },
  filename: (_request, file, callback) => {
    const HASH = randomBytes(16).toString('hex');
    const filename = `${HASH}-${file.originalname}`;
    callback(null, filename);
  },
});

export const upload = multer({ storage });
