import { ToastService } from 'src/app/services/toast.service';
import { Component, OnInit, Input} from '@angular/core';
import { CorretorService } from 'src/app/services/corretor.service';
import { Corretor } from 'src/app/models/corretor.model';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-update-corretor',
  templateUrl: './update-corretor.component.html',
  styleUrls: ['./update-corretor.component.css']
})
export class UpdateCorretorComponent implements OnInit {
  @Input()
  id!: number;
  private routeSub!: Subscription;
  corretor!: Corretor;

  constructor(
    private route: ActivatedRoute,
    private service: CorretorService,
    private router: Router,
    private location: Location,
    private toast: ToastService
  ) {}

   ngOnInit(): void {
    this.routeSub = this.route.params.subscribe((params) => {
      this.id = params['id'];
      this.receberCorretor();
    });
   }

   receberCorretor() {
    this.service.MostraCorretor(this.id).subscribe((corretor) => {
      this.corretor = corretor;
    });
  }

   handleSubmit(){
    const novoCorretor = {
      name: this.corretor.name,
      cpf: this.corretor.cpf,
      phone: this.corretor.phone ,
      email: this.corretor.email,
      id: this.corretor.id
    }

    this.service.atualizaCorretor(novoCorretor).subscribe(
      resposta =>{
      this.toast.showSucessToast("Informações do corretor atualizado com sucesso!!!")
      this.router.navigateByUrl("/dashboard");
    },
    erro => this.toast.showErroToast("Erro ao atualizar as informações do corretor!!!"+erro))
   }

   excluirConta(){
     this.service.deleteCorretor(this.corretor).subscribe(resposta =>{
      this.toast.showSucessToast("Conta removida com sucesso!!!")
       this.router.navigateByUrl("/login-corretor")
     }, error => this.toast.showErroToast("Erro ao remover conta do corretor: "+error))
   }

   voltar() {
    this.location.back();
  }

  ngOnDestroy() {
    this.routeSub.unsubscribe();
  }
}
