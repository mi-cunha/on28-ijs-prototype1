# Exercício de Sala 🏫  

## Exercício extra 1

### Gerenciamento de Ingressos para Eventos

Você deve implementar um sistema de gerenciamento de ingressos para eventos. O sistema deve permitir a compra de ingressos para diferentes eventos, levando em consideração o tipo de ingresso (normal ou VIP) e a idade do comprador.

#### Especificações

##### 1. Evento
A função `Evento` deve ser uma função construtora pseudoclássica que representa um evento. Deve possuir os seguintes atributos, todos a serem recebidos na instanciação:

- `nome (string)`: O nome do evento.
- `adulto (boolean)`: Indica se o evento é para maiores de idade.
- `valorNormal (number)`: O valor do ingresso normal.
- `valorVip (number)`: O valor do ingresso VIP.

##### 2. Ingresso
A função `Ingresso` deve ser uma função construtora pseudoclássica que representa um ingresso para um evento. Deve possuir os seguintes atributos:

- `evento (Evento)`: O evento para o qual o ingresso foi adquirido (recebido na instanciação).
- `tipo (string)`: O tipo do ingresso (normal ou VIP) (recebido na instanciação).
- `valor (number)`: O valor do ingresso com base no tipo (inicializado dentro da função de acordo com o tipo).

##### 3. Pessoa
A função `Pessoa` deve ser uma função construtora pseudoclássica que representa uma pessoa interessada em adquirir ingressos para eventos. Deve possuir os seguintes atributos:

- `nome (string)`: O nome da pessoa (recebido na instanciação).
- `idade (number)`: A idade da pessoa (recebido na instanciação).
- `dinheiro (number)`: A quantia de dinheiro que a pessoa possui (recebido na instanciação).
- `ingressos (array)`: Um array que armazena os ingressos adquiridos pela pessoa (inicializado dentro da função com uma array vazia).

A classe Pessoa deve também possuir os seguintes métodos:

`comprarIngresso(evento, tipo)`: Este método permite que a pessoa compre um ingresso para um evento específico com base no tipo (normal ou VIP). A compra só será realizada se a pessoa tiver idade suficiente para o evento e dinheiro suficiente para comprar o ingresso.

`mostrarIngressos()`: Este método exibe no console os ingressos adquiridos pela pessoa. Ela deve exibir o nome da pessoa a qual pertence os ingressos, o nome do evento, o tipo do ingresso adquirido e o valor pago no mesmo.

---

##### Exemplo de Utilização

```javascript
const eventoExemplo = new Evento('Exemplo Fest', true, 50, 100);
const pessoaExemplo1 = new Pessoa('Maria', 20, 200);
const pessoaExemplo2 = new Pessoa('Babi', 25, 40);
const pessoaExemplo3 = new Pessoa('Joana', 15, 200);

pessoaExemplo1.comprarIngresso(eventoExemplo, 'VIP'); // Linha 1
pessoaExemplo2.comprarIngresso(eventoExemplo, 'normal'); // Linha 2
pessoaExemplo3.comprarIngresso(eventoExemplo, 'normal'); // Linha 3

pessoaExemplo1.mostrarIngressos(); // Linha 4
pessoaExemplo2.mostrarIngressos(); // Linha 5
pessoaExemplo3.mostrarIngressos(); // Linha 6
```

##### Exemplo de saídas
```
Linha 1: Maria comprou ingresso VIP para o evento Exemplo Fest!
Linha 2: Babi não tem dinheiro suficiente para comprar o ingresso normal para o evento Exemplo Fest!
Linha 3: Joana não tem idade suficiente para comprar o ingresso para o evento Exemplo Fest!

Linha 4: Ingressos de Maria: Evento: Exemplo Fest - Tipo: VIP - Valor pago: 100
Linha 5: Ingressos de Babi:
Linha 6: Ingressos de Joana:
```

---

##### Observações
- Se a pessoa não tiver idade suficiente para o evento, ou não tiver dinheiro suficiente para comprar o ingresso, uma mensagem adequada deve ser exibida no console.

---

Terminou o exercício? Dá uma olhada nessa checklist e confere se tá tudo certinho, combinado?!

- [ ] Fiz o fork do repositório.
- [ ] Clonei o fork na minha máquina (`git clone url-do-meu-fork`).
- [ ] Resolvi o exercício dentro da pasta resolução.
- [ ] Adicionei as mudanças. (`git add .` para adicionar todos os arquivos, ou `git add nome_do_arquivo` para adicionar um arquivo específico)
- [ ] Commitei a cada mudança significativa ou na finalização do exercício (`git commit -m "Mensagem do commit"`)
- [ ] Pushei os commits na minha branch (`git push origin nome-da-branch`)
