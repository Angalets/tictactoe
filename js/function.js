(function(_0x2b9061,_0x76795b){const _0x3a1372=_0x388c,_0x6909ea=_0x2b9061();while(!![]){try{const _0x34d788=-parseInt(_0x3a1372(0xba))/0x1+parseInt(_0x3a1372(0xb1))/0x2*(parseInt(_0x3a1372(0xae))/0x3)+-parseInt(_0x3a1372(0xb2))/0x4+parseInt(_0x3a1372(0xaa))/0x5*(-parseInt(_0x3a1372(0xb7))/0x6)+-parseInt(_0x3a1372(0xbd))/0x7*(parseInt(_0x3a1372(0xbb))/0x8)+-parseInt(_0x3a1372(0xad))/0x9*(-parseInt(_0x3a1372(0xc4))/0xa)+parseInt(_0x3a1372(0xb3))/0xb;if(_0x34d788===_0x76795b)break;else _0x6909ea['push'](_0x6909ea['shift']());}catch(_0x2dff96){_0x6909ea['push'](_0x6909ea['shift']());}}}(_0x2fbe,0xe3a91));var siguiente=![],contador=0x0,cronometro=0x0,contadorIniciado=![],cronometroIniciado=![],intervalo,intervalo1;function iniciarContador(){const _0x3caadf=_0x388c;let _0x5be68d=0xb4,_0x1cd445=document[_0x3caadf(0xbf)](_0x3caadf(0xbc)),_0x15b0b3=document[_0x3caadf(0xbf)](_0x3caadf(0xa8));clearInterval(intervalo1),intervalo1=setInterval(function(){const _0x4d9104=_0x3caadf;let _0x336bc0=Math['floor'](_0x5be68d/0x3c),_0x506ee6=_0x5be68d%0x3c;_0x336bc0=_0x336bc0<0xa?'0'+_0x336bc0:_0x336bc0,_0x506ee6=_0x506ee6<0xa?'0'+_0x506ee6:_0x506ee6,_0x1cd445['textContent']=_0x336bc0+':'+_0x506ee6,_0x5be68d--,_0x5be68d<0x0&&(clearInterval(intervalo1),_0x1cd445['textContent']=_0x4d9104(0xbe),_0x15b0b3['textContent']='');},0x3e8);}function _0x388c(_0x5b282b,_0x409a63){const _0x2fbeb0=_0x2fbe();return _0x388c=function(_0x388cac,_0x2be399){_0x388cac=_0x388cac-0xa3;let _0x7131e9=_0x2fbeb0[_0x388cac];return _0x7131e9;},_0x388c(_0x5b282b,_0x409a63);}function iniciarCronometro(){const _0x467d24=_0x388c;tiempo=0x0;let _0x4026f4=document[_0x467d24(0xbf)](_0x467d24(0xb9)),_0x1bdfb3=document[_0x467d24(0xbf)](_0x467d24(0xb6));intervalo=setInterval(function(){const _0x22dcf6=_0x467d24;let _0x37cbe8=Math[_0x22dcf6(0xb8)](tiempo/0x3c),_0x4f0496=tiempo%0x3c;_0x37cbe8=_0x37cbe8<0xa?'0'+_0x37cbe8:_0x37cbe8,_0x4f0496=_0x4f0496<0xa?'0'+_0x4f0496:_0x4f0496,_0x4026f4['textContent']=_0x37cbe8+':'+_0x4f0496+'\x20',tiempo++,_0x1bdfb3[_0x22dcf6(0xac)]=_0x22dcf6(0xb0),tiempo>=0xb4&&(_0x4026f4[_0x22dcf6(0xac)]=_0x22dcf6(0xbe),_0x1bdfb3[_0x22dcf6(0xac)]='');},0x3e8);}function turno(_0x559711){const _0x407271=_0x388c;_0x559711[_0x407271(0xb4)]=!![],_0x559711[_0x407271(0xa6)]=!siguiente?'X':'O',siguiente=!siguiente,document[_0x407271(0xbf)](_0x407271(0xa9))[_0x407271(0xc2)]=siguiente?'Turno:\x20O':'Turno:\x20X',verificar(),!contadorIniciado&&(iniciarContador(),contadorIniciado=!![]),!cronometroIniciado&&(iniciarCronometro(),cronometroIniciado=!![]);}function _0x2fbe(){const _0x30b729=['colorGanador','value','style','contador1','Turno','57590BfeNFg','input[type=\x27button\x27]','textContent','7090029UlTkdx','914712dweDoB','reload','minutos','10yuRuWX','3134536Cglede','35540109afIkGp','disabled','EMPATE','cronometro1','708hnHmOo','floor','cronometro','1418204fWfrJx','8atEJLo','contador','7348327VsUsoq','¡Tiempo\x20terminado!','getElementById','none','flex','innerHTML','backgroundColor','10HyjTxi','miPopup','display','querySelectorAll'];_0x2fbe=function(){return _0x30b729;};return _0x2fbe();}function reinicio(_0x594e01){const _0xa6593b=_0x388c;location[_0xa6593b(0xaf)]();}function verificar(){const _0x30df6a=_0x388c;var _0x5a5c90=document[_0x30df6a(0xa4)](_0x30df6a(0xab));const _0x73762d=document[_0x30df6a(0xbf)](_0x30df6a(0xa5))[_0x30df6a(0xa6)];++contador==0x9&&(document[_0x30df6a(0xbf)](_0x30df6a(0xa9))[_0x30df6a(0xc2)]=_0x30df6a(0xb5));let _0x59ef67=[[0x0,0x1,0x2],[0x3,0x4,0x5],[0x6,0x7,0x8],[0x0,0x3,0x6],[0x1,0x4,0x7],[0x2,0x5,0x8],[0x0,0x4,0x8],[0x2,0x4,0x6]];for(let _0x3f7123 of _0x59ef67){let [_0x2166e9,_0x1a0bc9,_0x23f086]=_0x3f7123;if(_0x5a5c90[_0x2166e9]['value']&&_0x5a5c90[_0x2166e9][_0x30df6a(0xa6)]==_0x5a5c90[_0x1a0bc9][_0x30df6a(0xa6)]&&_0x5a5c90[_0x2166e9]['value']==_0x5a5c90[_0x23f086][_0x30df6a(0xa6)]){document[_0x30df6a(0xbf)](_0x30df6a(0xa9))[_0x30df6a(0xc2)]='Gana:\x20'+_0x5a5c90[_0x2166e9][_0x30df6a(0xa6)],_0x5a5c90[_0x2166e9][_0x30df6a(0xa7)][_0x30df6a(0xc3)]=_0x73762d,_0x5a5c90[_0x1a0bc9][_0x30df6a(0xa7)][_0x30df6a(0xc3)]=_0x73762d,_0x5a5c90[_0x23f086][_0x30df6a(0xa7)][_0x30df6a(0xc3)]=_0x73762d,bloquear(),clearInterval(intervalo),clearInterval(intervalo1);return;}}}function bloquear(){const _0x131dcc=_0x388c;var _0x59989d=document[_0x131dcc(0xa4)](_0x131dcc(0xab));for(let _0x3e8ab1=0x0;_0x3e8ab1<_0x59989d['length'];_0x3e8ab1++){_0x59989d[_0x3e8ab1][_0x131dcc(0xb4)]=!![];}function _0x1e24a7(){const _0x2ad26e=_0x131dcc;document[_0x2ad26e(0xbf)](_0x2ad26e(0xc5))['style']['display']=_0x2ad26e(0xc1);}function _0x5c31d2(){const _0x43a1c7=_0x131dcc;document[_0x43a1c7(0xbf)](_0x43a1c7(0xc5))[_0x43a1c7(0xa7)][_0x43a1c7(0xa3)]=_0x43a1c7(0xc0);}}