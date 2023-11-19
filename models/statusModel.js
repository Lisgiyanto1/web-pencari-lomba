// models/statusModel.js
import { Router } from 'express';
const router = Router();

class StatusModel {
  constructor() {
    this.status = 'Hello Express.js';
  }

  getStatus() {
    return this.status;
  }
}

export default StatusModel;
