const apiServ = require('./presentation/apiPres');

const port = 3001;

function main(){
  //pour lancer l'api 
  apiServ.start(port);

}

main();