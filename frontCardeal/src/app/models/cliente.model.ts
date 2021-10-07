export interface Cliente {
  id?: number;
  name?: string;
  cpf?: number;
  email?: string;
  phone?: string;
}
export interface Cliente extends Array<Cliente> {}
