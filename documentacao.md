## Requisitos

### 1.1 Requisitos Funcionais do Sistema

| ID | Requisito | Descrição |
| --- | --- | --- |
| RF01 | Realizar Login | Verifica os dados de acesso informados pelo usuário e apresenta uma mensagem caso sejam inválidos. |
| RF02 | Exibir Tela Principal | Apresenta a página inicial com as opções disponíveis para navegação no sistema. |
| RF03 | Encerrar Sessão | Finaliza o acesso do usuário ao sistema e redireciona para a tela de login. |
| RF04 | Cadastrar Cliente | Permite registrar um novo cliente, exigindo o preenchimento do nome e CPF, sem aceitar documentos duplicados. |
| RF05 | Consultar Cliente | Permite localizar clientes cadastrados utilizando o nome ou CPF como critério de pesquisa. |
| RF06 | Atualizar Cliente | Possibilita modificar as informações de um cliente já registrado por meio de seu ID. |
| RF07 | Excluir Cliente | Permite remover um cliente do cadastro, desde que ele não possua veículos vinculados. |
| RF08 | Cadastrar Veículo | Possibilita adicionar um veículo ao sistema, informando seu modelo e cliente responsável, com a placa como campo opcional. |
| RF09 | Atualizar Veículo | Permite editar os dados de um veículo cadastrado, identificando-o pelo seu ID. |
| RF10 | Excluir Veículo | Realiza a remoção de um veículo, desde que não existam agendamentos associados a ele. |
| RF11 | Cadastrar Agendamento | Permite criar um novo agendamento, informando obrigatoriamente a data e o veículo relacionado. |
| RF12 | Listar Agendamentos | Exibe os agendamentos registrados, organizados por data e acompanhados das informações do cliente e do veículo. |
| RF13 | Atualizar Agendamento | Possibilita modificar a data e o veículo vinculado a um agendamento existente. |
| RF14 | Excluir Agendamento | Permite remover um agendamento cadastrado após a confirmação da operação. |

### 1.2 Requisitos Não Funcionais

| ID | Requisito | Descrição |
| --- | --- | --- |
| RNF01 | Proteção de Dados | Os dados pessoais dos clientes devem ser armazenados de forma segura, utilizando criptografia para proteger informações como o CPF. |
| RNF02 | Integridade dos Dados | O sistema deve garantir a consistência das informações, utilizando chaves primárias e estrangeiras para evitar registros duplicados e vínculos inválidos. |
| RNF03 | Controle de Acesso | O acesso ao sistema deve ser protegido por mecanismos de autenticação, como JWT e cookies HTTP-only, garantindo que apenas usuários autorizados possam utilizá-lo. |

## 2 Requisitos de Infraestrutura

| Tecnologia | Versão / ambiente |
| --- | --- |
| JavaScript | Node.js 24 |
| Next.js | 16 |
| React e React DOM | 19 |
| bcryptjs | 3 |
| jsonwebtoken | 9 |
| node:crypto | Integrado ao Node.js |
| PostgreSQL | 18 |
| Prisma e Prisma Client | 6 |
| Ant Design | 6 |
