import { Convention } from "./convention";
import { Demande } from "./demande";
import { Facture } from "./facture";

export interface User {
    id?: number; // Optional because it might not be present during creation
    nom: string;
    prenom: string;
    email: string;
    password?: string; // Optional because it might not be present when fetching user details
    telephonePortable: string;
    telephoneFixe: string;
    adresse: Adresse;
    genre: Genre;
    role: Role;
    matriculeMedecine?: string; // Optional because it might not be present
    conventions?: Convention[]; // Optional because it might not be present
    factures?: Facture[]; // Optional because it might not be present
    demandes?: Demande[]; // Optional because it might not be present
  }
  
  export interface Adresse {
    ville: string;
    codePostal: string;
    adresseDetail: string;
  }
  
  export enum Genre {
    HOMME = 'HOMME',
    FEMME = 'FEMME'
  }
  
  export enum Role {
    Admin = 'Admin',
    Agent = 'Agent',
    Gestionnaire = 'Gestionnaire',
    Directeur='Directeur'
  }
  