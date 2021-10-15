export interface Proprietario {
  id?: number;
  name?: string;
  cpf?: string;
  phone?: string;
  email?: string;
  isActive?: boolean;
}export interface Proprietarios extends Array<Proprietario> {}
