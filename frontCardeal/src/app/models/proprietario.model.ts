export interface Proprietario {
  id?: number;
  name: string;
  cpf: string;
  telephone: string;
  email: string;
}export interface Imoveis extends Array<Proprietario> {}
