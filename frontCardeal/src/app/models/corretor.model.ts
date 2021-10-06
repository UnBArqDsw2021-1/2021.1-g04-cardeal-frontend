export interface Corretor{
  id?: number,
  name?: string;
  cpf?: string;
  phones:{id?:number, phone_number?:string}[],
  email: string;
  password?: string;
}
