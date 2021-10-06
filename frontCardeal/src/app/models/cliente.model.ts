export interface Cliente {
    id?: number;
    name?: string;
    cpf?: number;
    telephone?: string;
    email?: string;
  }
  export interface Cliente extends Array<Cliente> {}
  