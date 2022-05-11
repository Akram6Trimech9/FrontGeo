import{Role} from './role'
export interface chef {
    _id: string;
    nom: string;
    prenom: string ;
    email: string;
    password: string;
    role: Role;
    roleType:String;
}
