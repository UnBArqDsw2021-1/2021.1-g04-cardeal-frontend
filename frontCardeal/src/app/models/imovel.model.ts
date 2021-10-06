export interface Imovel {
  id?: number;
  name?: string;
  city?: string;
  state?: string;
  district?: string;
  street?: string;
  number?: number;
  zipNumber?: string;
  type?: string;
  size?: string;
  numberBedroom?: number;
  numberBath?: number;
  numberPark?: number;
  status?: string;
  value?: number;
  viewed?: number;
  idOwner?: number;
  idRealtor?: number;
  media?: string;
}
export interface Imoveis extends Array<Imovel> {}
