# Aplicação de Eletrodomésticos

Aplicação web para gerenciamento de eletrodomésticos utilizando Vue.js.

## Instalação

Certifique-se de ter o Node.js e o npm instalados.

1. Clone este repositório:

git clone https://github.com/luisTrivinh0/eletrodomesticos-frontend.git

2. Navegue até o diretório do projeto:

cd app-eletrodomesticos

3. Instale as dependências:

npm install

## Configuração

1. Abra o arquivo `src/main.js` e localize a linha `axios.defaults.baseURL = 'http://localhost:8000/api';`.
2. Verifique se a URL corresponde à URL da API de eletrodomésticos corretamente. Caso contrário, atualize-a.

## Uso

1. Inicie o servidor de desenvolvimento:

npm run serve


2. Acesse a aplicação em `http://localhost:8080/`.

## Estrutura do Projeto

- `/src`: Contém os arquivos-fonte do projeto.
- `/components`: Contém os componentes Vue.
- `/views`: Contém as views principais do aplicativo.
- `/router`: Contém as configurações do Vue Router.
- `/api`: Contém os arquivos relacionados às chamadas de API.
- `/assets`: Contém os arquivos estáticos, como imagens e estilos.
- `/utils`: Contém utilitários e funções auxiliares.

## Contribuição

Se você quiser contribuir para este projeto, siga as etapas abaixo:

1. Faça um fork do repositório.
2. Crie um novo branch com a sua feature: `git checkout -b minha-feature`.
3. Faça as alterações necessárias e adicione os commits: `git commit -m 'Minha nova feature'`.
4. Envie as suas alterações: `git push origin minha-feature`.
5. Envie um Pull Request.