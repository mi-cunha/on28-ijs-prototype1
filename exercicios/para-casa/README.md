# Exercício de Casa 🏠 

Você foi escalada para criar o sistema para uma clínica veterinária.
Para isso, precisará criar funções construtoras no modelo `Pseudoclassical Instantiation` para quatro tipos e objeto diferentes: 
- [ ] Gatos
- [ ] Cachorros
- [ ] Animais exóticos
- [ ] Histórico médico

1. Exemplo de `Gato`
```javascript
{
    nome: "Pipoca",
    idade: 18, //em meses
    cor: "branco",
    castrado: true,
    historico: HistoricoMedico
}
```

2. Exemplo de `Cachorro`
```javascript
{
    nome: "Aslam",
    idade: 42, //em meses
    cor: "preto",
    castrado: false,
    raça: "srd",
    historico: HistoricoMedico
}
```

3. Exemplo de `AnimalExotico`
```javascript
{
    nome: "Iogurte",
    idade: 19, //em meses
    cor: "branco e laranja",
    especie: "hamster",
    adulto: true,
    historico: HistoricoMedico
}
```

4. Exemplo de `HistoricoMedico`
```javascript
{
    consultas: [9/7/2023, 13/1/2023, 20/7/2022],
    vacinas: ["raiva", "v8", "v10"],
    procedimentos: [{ tipo: "ultrassom", motivo: "dores"}]
}
```

Além disso, será necessário criar alguns métodos:
- [ ] Todos os tipos de animais precisam de um método `vacinar()`, que receba uma nova vacina e adicione no histórico do bichinho.
- [ ] Todos os animais precisam de um método `consultar()`, que adicione uma nova consulta ao histórico. As consultas devem ser mantidas em ordem cronológica reversa, sendo a primeira da lista sempre a mais recente.
- [ ] Todos os animais precisam de um método `realizarProcedimento()`, que adicione um novo procedimento ao histórico. Cada procedimento é um objeto com `tipo` e `motivo`.
- [ ] `Gatos` precisam do método `miar()` e cachorros precisam do método `latir()`;
- [ ] `AnimalExotico` precisam de um método `ehAdulto` que retorne `true` caso o animal já seja um adulto para a espécie dele e `false` caso contrário. Sua implementação pode cobrir apenas as seguintes espécies:
  - Hamster: adulto aos 2 meses
  - Papagaio: adulto aos 3 anos
  - Calopsita: adulto aos 18 meses

---

Terminou o exercício? Dá uma olhada nessa checklist e confere se tá tudo certinho, combinado?!

- [ ] Fiz o fork do repositório.
- [ ] Clonei o fork na minha máquina (`git clone url-do-meu-fork`).
- [ ] Criei minha branch (` git checkout -b nome-sobrenome `)
- [ ] Criei a pasta com o meu nome dentro da pasta entregas (` mkdir nome-sobrenome`)
- [ ] Resolvi o exercício dentro da minha pasta. Como no [exemplo](/on21-imersao-js-S1-TDD/exercicios/para-casa/entregas/exemplo-nome-sobrenome/).
- [ ] Adicionei as mudanças. (`git add .` para adicionar todos os arquivos, ou `git add nome_do_arquivo` para adicionar um arquivo específico)
- [ ] Commitei a cada mudança significativa ou na finalização do exercício (`git commit -m "Mensagem do commit"`)
- [ ] Pushei os commits na minha branch (`git push origin nome-da-branch`)
- [ ] Criei um Pull Request seguindo as orientações que estao nesse [documento](/on21-imersao-js-S1-TDD/exercicios/para-casa/instrucoes-pull-request.md).