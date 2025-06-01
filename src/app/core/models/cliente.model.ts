import { Endereco } from "./endereco.model";
export interface Cliente {
  id: string; 
  nome: string; 
  email: string; 
  telefone?: string; 
  endereco: Endereco; 
}