export interface Corretor{
  id?: number,
  name?: string;
  cpf?: string;
  phone?: string;
  email: string;
  password?: string;
} export interface Corretores extends Array<Corretor> {}
