let permissao; //comun,gerente,diretor

permissao = 'comum';

switch(permissao) {
    case 'comum':
        console.log("Usuario comum");
    break;

    case 'gerente':
        console.log("Usuario gerente");
    break;

    case 'diretor':
        console.log("Usario diretor");
    break;

    default:
        console.log("Usuario não reconhecido")
}