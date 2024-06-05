import { User } from "./user";

export interface Demande {
    id?: number; // Optional because it might not be present during creation
    justificatif: string;
    commentaire: string;
    dateCreation: Date;
    user?: User; // Optional because it might not be present during creation
  }
  