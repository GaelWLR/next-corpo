import { v4 as uuid } from 'uuid';

export default function handler(req, res) {
  res.status(200).json({ uuid: uuid() });
}
