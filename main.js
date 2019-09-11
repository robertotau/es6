class Matematica {
  static soma(a, b) {
    return a + b;
  }
}
console.log(Matematica.soma(1, 2));

/*class List {
  constructor() {
    this.data = [];
  }

  add(data) {
    this.data.push(data);
    console.log(this.data);
  }
}

class TodoList extends List {
  constructor() {
    super();
    
    this.usuario = 'Beto';
  }
  
  mostraUsuario() {
    console.log(this.usuario);
  }

}
//Esse variável guarda meu novo objeto
const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function() {
  MinhaLista.add('Novo todu');
}

MinhaLista.mostraUsuario();*/