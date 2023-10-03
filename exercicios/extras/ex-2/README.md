# Exercício de Sala 🏫  

## Exercício extra 2

### Gerenciamento de Alunas
Neste exercício, você será desafiada a criar um sistema de gerenciamento de alunas em uma escola. Utilize funções construtoras pseudoclássicas para representar alunas e suas informações.

#### Especificações
##### 1. Aluna
A função `Aluna` deve ser uma função construtora pseudoclássica que representa uma aluna. Ela deve possuir os seguintes atributos:

- `nome (string)`: O nome da aluna.
- `matricula (string)`: O número de matrícula da aluna.
- `notas (array)`: Um array que armazena as notas da aluna.

A classe Aluna deve possuir os seguintes métodos:

- `adicionarNota(nota)`: Este método permite adicionar uma nota à lista de notas da aluna.
- `calcularMedia()`: Este método calcula e retorna a média das notas da aluna.
- `exibirInformacoes()`: Este método exibe no console o nome, número de matrícula e média da aluna.

##### 2. Turma
A função `Turma` deve ser uma função construtora pseudoclássica que representa uma turma de alunas. Ela deve possuir os seguintes atributos:

- `alunas (array)`: Um array que armazena as alunas da turma.

A classe Turma deve possuir os seguintes métodos:

- `adicionarAluna(aluna)`: Este método permite adicionar uma aluna à turma.
- `exibirListaAlunas()`: Este método exibe no console a lista de alunas na turma, incluindo seus nomes e números de matrícula.

---

##### Exemplo de Utilização

```javascript
const aluna1 = new Aluna('Maria', '2021001');
aluna1.adicionarNota(8.5);
aluna1.adicionarNota(9.0);
aluna1.exibirInformacoes();

const aluna2 = new Aluna('Joana', '2021002');
aluna2.adicionarNota(7.8);
aluna2.adicionarNota(8.0);
aluna2.exibirInformacoes();

const turmaA = new Turma();
turmaA.adicionarAluna(aluna1);
turmaA.adicionarAluna(aluna2);

turmaA.exibirListaAlunas();
```

A saída esperada para o exemplo acima é:

```yaml
Nome: Maria, Matrícula: 2021001, Média: 8.75

Nome: Joana, Matrícula: 2021002, Média: 7.90

Lista de Alunas:
- Nome: Maria, Matrícula: 2021001
- Nome: Joana, Matrícula: 2021002
```
---

##### Observações
- A média das notas deve ser calculada com duas casas decimais.
- Certifique-se de que os métodos exibam as informações de forma correta e organizada no console.