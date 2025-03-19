# Gerenciador de Participantes

Este é um aplicativo para gerenciar a lista de participantes de um evento. A aplicação permite adicionar e remover participantes de uma lista de presença, com dados persistentes usando o `AsyncStorage`.

## Funcionalidades

- Adicionar participantes à lista.
- Remover participantes da lista.
- A lista de participantes é armazenada localmente, garantindo que os dados permaneçam após o fechamento do aplicativo.

## Tecnologias Utilizadas

- **React Native**: Framework para desenvolvimento de aplicativos móveis.
- **AsyncStorage**: Para persistência local de dados.
- **TypeScript**: Para maior segurança e tipagem no código.
- **Expo**: Para facilitar o desenvolvimento e testes rápidos no ambiente de React Native.

## Instalação

1. Clone o repositório:

```bash
   git clone https://github.com/seu-usuario/gerenciador-participantes.git
```

2. Navegue até a pasta do projeto:

3. Instale as dependências:
```bash
npm install
```
4. Para rodar o projeto no android:
```bash
npx expo start --android
```

## Estrutura do Projeto

### `App.tsx`
Arquivo principal que carrega o componente `Home` e configura o `StatusBar` com estilo claro.

### `src/screens/Home/index.tsx`
Tela principal onde os participantes podem ser adicionados ou removidos da lista. Utiliza o `AsyncStorage` para persistir os dados.

### `src/components/Participant/index.tsx`
Componente que exibe um participante na lista com a opção de remoção.

### `tsconfig.json`
Arquivo de configuração do TypeScript com a opção `strict` ativada para garantir maior segurança no código.

