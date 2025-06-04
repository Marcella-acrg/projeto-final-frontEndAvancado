# SITE DA FACULDADE UNIESP

Aplicação front-end desenvolvida durante estudos da disciplina de **Front-End Avançado**, ministrada pelo **professor Kelson Almeida**. O projeto simula um site institucional com informações "fakes", utilizando como principais tecnologias o React, o React-Bootstrap e o React Router DOM. Também foram utilizadas ferramentas auxiliares como Axios (para requisições HTTP) e JSON Server (para simulação de uma API REST).


![Demonstração do projeto](./public/demo.gif)


## 🚀 Detalhamento das Tecnologias Utilizadas
---

| Tecnologia                                             | Função                                               | Comando de Instalação                    |
|--------------------|------------------------------------------------------------------------------------------|------------------------------------------|
| [React](https://reactjs.org/)                          | Biblioteca principal para criação de interfaces      | `npm install react react-dom`            |
| [React Router DOM](https://reactrouter.com/)           | Gerenciamento de rotas e navegação entre páginas     | `npm install react-router-dom`           |
| [React-Bootstrap](https://react-bootstrap.github.io/)  | Componentes prontos do Bootstrap adaptados ao React  | `npm install react-bootstrap bootstrap`  |
| [Axios](https://axios-http.com/)                       | Cliente HTTP para consumir APIs                      | `npm install axios`                      |
| [JSON Server](https://github.com/typicode/json-server) | API REST fake para simular back-end com JSON         | `npm install json-server`                |


## 📁 Estrutura de Pastas

```bash
📦SITE-UNIESP
├── data/
│   ├──db.json  
├── node_modules
├── public/
│   ├── banner1.png
│   ├── banner2.png
│   ├── demo.gif
│   ├── exoplaneta.png
│   ├── IA-generativa.png
│   ├── mercado-financeiro.png
│   ├── uniesp.jpg
├── src/
│   ├── assets/
│   ├── components/
│       ├──BannerAd.jsx  
│       ├──CustomNavbar.jsx   
│   ├── pages/
│       ├──DpoLgpd.jsx  
│       ├──Faculdade.jsx  
│       ├──Inicial.jsx  
│       ├──Noticias.jsx  
│       ├──VisualizaNoticia.jsx  
│   ├── api.js
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

# ⚙ Instalação

1 - Clonar o repositório:

```bash
git clone git@github.com:Marcella-acrg/projeto-final-frontEndAvancado.git
```

2 - Acessar a pasta do projeto: 
```bash
cd projeto-final-frontEndAvancado
```

3 - Instale as dependências
```bash
npm install
```

4 - Inicie o servidor de desenvolvimento
```bash
npm run dev
```

5 - Inicie a API REST (fake)
```bash
npm run server
```