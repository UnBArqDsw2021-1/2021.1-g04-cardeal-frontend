export interface Agendamento {
    id?: number;
    dateMeeting?: string;
    idClient?: number;
    idProperty?: number;
    email?: string;
    phone?: string;
  }
  export interface Agendamento extends Array<Agendamento> {}
  