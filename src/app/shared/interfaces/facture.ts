import { User } from "./user";

export interface Facture {
    id?: number; // Optional because it might not be present during creation
    nombreFacture: number;
    dateFacturation: Date;
    montantFacturation: number;
    rib: string;
    user?: User; // Optional because it might not be present during creation
  }
  