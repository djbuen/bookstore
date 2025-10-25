
import { ResourceController } from '.';
// Extend Express types safely
declare global {
  namespace Express {
    interface Application {
      resource: (path: string, controller: ResourceController) => void;
    }
  }
}