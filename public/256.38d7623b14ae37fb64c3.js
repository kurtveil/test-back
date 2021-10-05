(self.webpackChunkproject_test=self.webpackChunkproject_test||[]).push([[256],{8256:(t,e,i)=>{"use strict";i.r(e),i.d(e,{ChildRoutesModule:()=>P});var a=i(4655),r=i(7716),o=i(2754);let s=(()=>{class t{constructor(t,e){this.usuarioService=t,this.router=e}canActivate(t,e){return"ADMIN_ROLE"===this.usuarioService.role||(this.router.navigateByUrl("/dashboard"),!1)}}return t.\u0275fac=function(e){return new(e||t)(r.LFG(o.i),r.LFG(a.F0))},t.\u0275prov=r.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var n=i(8259),u=i.n(n),d=i(9408),c=i(2789),l=i(9490),m=i(2458),h=(i(6461),i(9765)),g=(i(6682),i(7238),i(8583));i(9238);const p=new r.OlP("MAT_SORT_DEFAULT_OPTIONS"),f=(0,m.dB)((0,m.Id)(class{}));let Z=(()=>{class t extends f{constructor(t){super(),this._defaultOptions=t,this.sortables=new Map,this._stateChanges=new h.xQ,this.start="asc",this._direction="",this.sortChange=new r.vpe}get direction(){return this._direction}set direction(t){this._direction=t}get disableClear(){return this._disableClear}set disableClear(t){this._disableClear=(0,l.Ig)(t)}register(t){this.sortables.set(t.id,t)}deregister(t){this.sortables.delete(t.id)}sort(t){this.active!=t.id?(this.active=t.id,this.direction=t.start?t.start:this.start):this.direction=this.getNextSortDirection(t),this.sortChange.emit({active:this.active,direction:this.direction})}getNextSortDirection(t){var e,i,a;if(!t)return"";const r=null!==(i=null!==(e=null==t?void 0:t.disableClear)&&void 0!==e?e:this.disableClear)&&void 0!==i?i:!!(null===(a=this._defaultOptions)||void 0===a?void 0:a.disableClear);let o=function(t,e){let i=["asc","desc"];return"desc"==t&&i.reverse(),e||i.push(""),i}(t.start||this.start,r),s=o.indexOf(this.direction)+1;return s>=o.length&&(s=0),o[s]}ngOnInit(){this._markInitialized()}ngOnChanges(){this._stateChanges.next()}ngOnDestroy(){this._stateChanges.complete()}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(p,8))},t.\u0275dir=r.lG2({type:t,selectors:[["","matSort",""]],hostAttrs:[1,"mat-sort"],inputs:{disabled:["matSortDisabled","disabled"],start:["matSortStart","start"],direction:["matSortDirection","direction"],disableClear:["matSortDisableClear","disableClear"],active:["matSortActive","active"]},outputs:{sortChange:"matSortChange"},exportAs:["matSort"],features:[r.qOj,r.TTD]}),t})();var b=i(3679);let v=(()=>{class t{constructor(t){this.userService=t,this.newItemEvent=new r.vpe,this.usuarioForm=new b.cw({nombre:new b.NI("",[b.kI.required]),email:new b.NI("",[b.kI.required])})}ngOnInit(){}ngOnChanges(t){if(void 0!==t.dataUser.currentValue)this.usuarioChild=t.dataUser.currentValue.usuario,this.usuarioForm.patchValue({nombre:this.usuarioChild.nombre,email:this.usuarioChild.email});else if(void 0===t.dataUser.currentValue)return}guardarData(){this.usuarioChild.nombre=this.usuarioForm.value.nombre,this.usuarioChild.email=this.usuarioForm.value.email,this.userService.saveData(this.usuarioChild),this.newItemEvent.emit("fue editado correctamente")}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(o.i))},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-editar-usuario"]],inputs:{dataUser:"dataUser"},outputs:{newItemEvent:"newItemEvent"},features:[r.TTD],decls:22,vars:1,consts:[["id","modalEditar","tabindex","-1","aria-labelledby","modalEdit","aria-hidden","true",1,"modal","fade"],[1,"modal-dialog","modal-dialog-centered"],[1,"modal-content"],[1,"modal-header"],["id","modalEdit",1,"modal-title"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn-close"],[1,"modal-body"],[3,"formGroup"],[1,"form-group"],["for","exampleInputEmail1"],["formControlName","nombre","type","text","id","exampleInputEmail1","aria-describedby","emailHelp","placeholder","Nombre",1,"form-control"],["for","exampleInputPassword1"],["formControlName","email","type","text","id","exampleInputPassword1","placeholder","email",1,"form-control"],[1,"modal-footer"],["type","button","data-bs-dismiss","modal",1,"btn","btn-secondary"],["type","button","data-bs-dismiss","modal",1,"btn","btn-primary",3,"click"]],template:function(t,e){1&t&&(r.TgZ(0,"div",0),r.TgZ(1,"div",1),r.TgZ(2,"div",2),r.TgZ(3,"div",3),r.TgZ(4,"h3",4),r._uU(5,"Editar usuario "),r.qZA(),r._UZ(6,"button",5),r.qZA(),r.TgZ(7,"div",6),r.TgZ(8,"form",7),r.TgZ(9,"div",8),r.TgZ(10,"label",9),r._uU(11,"Nombre"),r.qZA(),r._UZ(12,"input",10),r.qZA(),r.TgZ(13,"div",8),r.TgZ(14,"label",11),r._uU(15,"Email"),r.qZA(),r._UZ(16,"input",12),r.qZA(),r.TgZ(17,"div",13),r.TgZ(18,"button",14),r._uU(19,"Cerrar"),r.qZA(),r.TgZ(20,"button",15),r.NdJ("click",function(){return e.guardarData()}),r._uU(21,"Guadar"),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA(),r.qZA()),2&t&&(r.xp6(8),r.Q6J("formGroup",e.usuarioForm))},directives:[b._Y,b.JL,b.sg,b.Fj,b.JJ,b.u],styles:[""]}),t})();var C=i(6627),T=i(8590);function A(t,e){1&t&&(r.TgZ(0,"div",3),r.TgZ(1,"div",4),r.TgZ(2,"div",5),r.TgZ(3,"h4",6),r._uU(4,"Cargando"),r.qZA(),r._UZ(5,"em",7),r.TgZ(6,"p",8),r._uU(7,"Por favor espere"),r.qZA(),r.qZA(),r.qZA(),r.qZA())}function U(t,e){1&t&&(r.TgZ(0,"th",26),r._uU(1," No. "),r.qZA())}function _(t,e){if(1&t&&(r.TgZ(0,"td",27),r._uU(1),r.qZA()),2&t){const t=e.index;r.xp6(1),r.hij(" ",t+1," ")}}function q(t,e){1&t&&(r.TgZ(0,"th",26),r._uU(1," Nombre "),r.qZA())}function w(t,e){if(1&t&&(r.TgZ(0,"td",27),r._uU(1),r.qZA()),2&t){const t=e.$implicit;r.xp6(1),r.hij(" ",t.nombre," ")}}function x(t,e){1&t&&(r.TgZ(0,"th",26),r._uU(1," Email "),r.qZA())}function S(t,e){if(1&t&&(r.TgZ(0,"td",27),r._uU(1),r.qZA()),2&t){const t=e.$implicit;r.xp6(1),r.hij(" ",t.email," ")}}function N(t,e){1&t&&(r.TgZ(0,"th",26),r._uU(1," Role "),r.qZA())}function I(t,e){if(1&t){const t=r.EpF();r.TgZ(0,"td",27),r.TgZ(1,"select",28),r.NdJ("ngModelChange",function(e){return r.CHM(t).$implicit.role=e})("change",function(){const e=r.CHM(t).$implicit;return r.oxw(2).cambiarRole(e)}),r.TgZ(2,"option",29),r._uU(3,"Admin"),r.qZA(),r.TgZ(4,"option",30),r._uU(5,"User"),r.qZA(),r.qZA(),r.qZA()}if(2&t){const t=e.$implicit;r.xp6(1),r.Q6J("ngModel",t.role)}}function E(t,e){1&t&&(r.TgZ(0,"th",26),r._uU(1," Auth "),r.qZA())}function y(t,e){1&t&&(r.TgZ(0,"span",33),r._uU(1,"Google"),r.qZA())}function D(t,e){1&t&&(r.TgZ(0,"span",34),r._uU(1,"Email"),r.qZA())}function O(t,e){if(1&t&&(r.TgZ(0,"td",27),r.YNc(1,y,2,0,"span",31),r.YNc(2,D,2,0,"span",32),r.qZA()),2&t){const t=e.$implicit;r.xp6(1),r.Q6J("ngIf",t.google),r.xp6(1),r.Q6J("ngIf",!t.google)}}function M(t,e){1&t&&(r.TgZ(0,"th",26),r._uU(1," Acciones "),r.qZA())}function Y(t,e){if(1&t){const t=r.EpF();r.TgZ(0,"td",27),r.TgZ(1,"div",35),r.TgZ(2,"mat-icon",36),r.NdJ("click",function(){const e=r.CHM(t),i=e.$implicit,a=e.index;return r.oxw(2).openModalEditar(i,a)}),r._uU(3,"edit"),r.qZA(),r.qZA(),r.TgZ(4,"div"),r.TgZ(5,"mat-icon",37),r.NdJ("click",function(){const e=r.CHM(t).$implicit;return r.oxw(2).eliminarUsuario(e)}),r._uU(6,"delete"),r.qZA(),r.qZA(),r.qZA()}}function J(t,e){1&t&&r._UZ(0,"tr",38)}function k(t,e){1&t&&r._UZ(0,"tr",39)}const Q=function(){return[5,10,20]};function B(t,e){if(1&t&&(r.TgZ(0,"div",9),r.TgZ(1,"h4",10),r._uU(2),r.qZA(),r.TgZ(3,"h6",11),r._uU(4,"Registrados"),r.qZA(),r.TgZ(5,"div",12),r.TgZ(6,"table",13),r.ynx(7,14),r.YNc(8,U,2,0,"th",15),r.YNc(9,_,2,1,"td",16),r.BQk(),r.ynx(10,17),r.YNc(11,q,2,0,"th",15),r.YNc(12,w,2,1,"td",16),r.BQk(),r.ynx(13,18),r.YNc(14,x,2,0,"th",15),r.YNc(15,S,2,1,"td",16),r.BQk(),r.ynx(16,19),r.YNc(17,N,2,0,"th",15),r.YNc(18,I,6,1,"td",16),r.BQk(),r.ynx(19,20),r.YNc(20,E,2,0,"th",15),r.YNc(21,O,3,2,"td",16),r.BQk(),r.ynx(22,21),r.YNc(23,M,2,0,"th",15),r.YNc(24,Y,7,0,"td",16),r.BQk(),r.YNc(25,J,1,0,"tr",22),r.YNc(26,k,1,0,"tr",23),r.qZA(),r._UZ(27,"mat-paginator",24,25),r.qZA(),r.qZA()),2&t){const t=r.oxw();r.xp6(2),r.hij("Total de usuarios (",t.totalUsuarios,")"),r.xp6(4),r.Q6J("dataSource",t.dataSource),r.xp6(19),r.Q6J("matHeaderRowDef",t.displayedColumns),r.xp6(1),r.Q6J("matRowDefColumns",t.displayedColumns),r.xp6(1),r.Q6J("pageSizeOptions",r.DdM(7,Q))("pageIndex",0)("pageSize",5)}}const R=[{path:"users",component:(()=>{class t{constructor(t){this.usuariosServices=t,this.displayedColumns=["position","nombre","email","role","auth","acciones"],this.totalUsuarios=0,this.usuarios=[],this.usuariosTemp=[],this.desde=0,this.cargando=!0,this.isEditar=!1,this.dataSource=new c.by(this.usuarios),this.dataSource=new c.by(this.usuarios)}ngAfterViewInit(){this.dataSource.paginator=this.paginator,this.dataSource.sort=this.sort}ngOnInit(){this.cargarUsuarios()}cargarUsuarios(){this.cargando=!0,this.usuariosServices.cargarUsuarios().subscribe(({total:t,usuarios:e})=>{this.totalUsuarios=t,this.dataSource.data=e,console.log(this.dataSource.data),console.log(this.usuarios),this.usuarios=e,this.usuariosTemp=e,this.cargando=!1})}cambiarPagina(t){this.desde+=t,this.desde<0?this.desde=0:this.desde>=this.totalUsuarios&&(this.desde-=t),this.cargarUsuarios()}eliminarUsuario(t){if(t.uid===this.usuariosServices.uid)return u().fire("Error","No puede borrarse a si mismo","error");u().fire({title:"Eliminar usuario?",text:`Esta a punto de eliminar a ${t.nombre}`,icon:"question",showCancelButton:!0,confirmButtonText:"Si, eliminar!"}).then(e=>{e.isConfirmed&&this.usuariosServices.eliminarUsuario(t).subscribe(e=>{this.cargarUsuarios(),u().fire("Eliminado!",`${t.nombre} fue eliminado correctamente`,"success")})})}cambiarRole(t){this.usuariosServices.guardarUsuario(t).subscribe(t=>{})}openModalEditar(t,e){this.usuarioParent={usuario:t,idx:e}}addItem(t){u().fire({title:"Editar usuario?",text:`Esta a punto de editar a ${this.usuariosServices.usuario.nombre}`,icon:"question",showCancelButton:!0,confirmButtonText:"Si, editar!"}).then(e=>{e.isConfirmed&&this.usuariosServices.guardarUsuario(this.usuariosServices.usuario).subscribe(e=>{this.cargarUsuarios(),u().fire("Editado!",`${this.usuariosServices.usuario.nombre} ${t}`,"success")})})}}return t.\u0275fac=function(e){return new(e||t)(r.Y36(o.i))},t.\u0275cmp=r.Xpm({type:t,selectors:[["app-users"]],viewQuery:function(t,e){if(1&t&&(r.Gf(d.NW,5),r.Gf(Z,5)),2&t){let t;r.iGM(t=r.CRH())&&(e.paginator=t.first),r.iGM(t=r.CRH())&&(e.sort=t.first)}},decls:5,vars:3,consts:[["class","row animated fadeIn fast",4,"ngIf"],["class","card-body",4,"ngIf"],[3,"dataUser","newItemEvent"],[1,"row","animated","fadeIn","fast"],[1,"col-12"],["role","alert",1,"alert","alert-info","text-center"],[1,"alert-heading"],[1,"fa","fa-spin","fa-refresh","fa-2x"],[1,"mb-0"],[1,"card-body"],[1,"card-title"],[1,"card-subtitle"],[1,"mat-elevation-z8"],["mat-table","",3,"dataSource"],["matColumnDef","position"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","nombre"],["matColumnDef","email"],["matColumnDef","role"],["matColumnDef","auth"],["matColumnDef","acciones"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",3,"pageSizeOptions","pageIndex","pageSize"],["paginator",""],["mat-header-cell",""],["mat-cell",""],[1,"form-control","cursor",3,"ngModel","ngModelChange","change"],["value","ADMIN_ROLE"],["value","USER_ROLE"],["class","badge bg-primary",4,"ngIf"],["class","badge bg-danger",4,"ngIf"],[1,"badge","bg-primary"],[1,"badge","bg-danger"],["id","divEdit","data-bs-target","#modalEditar","data-bs-toggle","modal"],["aria-hidden","false","aria-label","icon edit","data-toggle","tooltip","matTooltip","Editar","matTooltipPosition","above",1,"cursor",3,"click"],["data-toggle","tooltip","matTooltip","Borrar","matTooltipPosition","above","aria-hidden","false","aria-label","delete icon",1,"cursor",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(t,e){1&t&&(r.TgZ(0,"h1"),r._uU(1,"Usuarios"),r.qZA(),r.YNc(2,A,8,0,"div",0),r.YNc(3,B,29,8,"div",1),r.TgZ(4,"app-editar-usuario",2),r.NdJ("newItemEvent",function(t){return e.addItem(t)}),r.qZA()),2&t&&(r.xp6(2),r.Q6J("ngIf",e.cargando),r.xp6(1),r.Q6J("ngIf",!e.cargando),r.xp6(1),r.Q6J("dataUser",e.usuarioParent))},directives:[g.O5,v,c.BZ,c.w1,c.fO,c.Dz,c.as,c.nj,d.NW,c.ge,c.ev,b.EJ,b.JJ,b.On,b.YN,b.Kr,C.Hw,T.gM,c.XQ,c.Gk],styles:[".w-100[_ngcontent-%COMP%]{width:100%!important}.mat-icon[_ngcontent-%COMP%]{color:#af1212}.cursor[_ngcontent-%COMP%]{cursor:pointer}#divEdit[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%]{color:blue}table[_ngcontent-%COMP%]{width:100%}"]}),t})(),data:{title:"Usuarios"},canActivate:[s]}];let P=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[[a.Bz.forChild(R)],a.Bz]}),t})()}}]);