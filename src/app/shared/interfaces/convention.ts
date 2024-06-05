import { User } from "./user";

export interface Convention {
    id?: number; // Optional because it might not be present during creation
    nombreEnregistrement: number;
    dateInscription: Date;
    dateDebutConvention: Date;
    dateFinConvention: Date;
    materiel: Materiel;
    user?: User; // Optional because it might not be present during creation
  }
  
  export enum Materiel {
    RADIOGRAPHIE = 'RADIOGRAPHIE',
    ECHOGRAPHIE = 'ECHOGRAPHIE',
    SCANNER = 'SCANNER',
    IRM = 'IRM',
    MAMMOGRAPHIE = 'MAMMOGRAPHIE',
    VEHICULE = 'VEHICULE',
    STOCK = 'STOCK',
    BUREAUTIQUE = 'BUREAUTIQUE'
  }
  