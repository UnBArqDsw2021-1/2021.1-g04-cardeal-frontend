export interface Agendamento {
    id?: number;
    idClient: number;
    idProperty?: number;
    dateMeeting?: Date;
  }
  export interface Agendamentos extends Array<Agendamento> {}
  