import { Injectable } from '@angular/core';
import { Agendamento } from '../models/agendamento.model';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class ToastService {

  constructor(private toast: ToastrService){}

  showSucessToast(message: string){
    this.toast.success(message);
  }
  showErroToast(message: string){
    this.toast.error(message);
  }
  showWarningToast(message: string){
    this.toast.warning(message);
  }
}
