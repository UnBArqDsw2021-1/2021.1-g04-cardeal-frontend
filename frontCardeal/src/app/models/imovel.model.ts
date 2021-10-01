export interface Imovel {
  state?: string;
  city?: string;
  district?: string;
  number?: number;
  zipNumber?: string;
  size?: number;
  numberBedroom?: number;
  numberBath?: number;
  numberPark?: number;
  value?: number;
  views?: number;
  idOwner?: number;
  idRealtor?: number;
  media?: string;
  type?: string;
  id?: number;
}
export interface Imoveis extends Array<Imovel> {}
