# Sobre
<p>Essa api faz a captura dos dados nessa <a href="http://www.ipeadata.gov.br/exibeserie.aspx?stub=1&serid1739471028=1739471028">página</a>, rebendo todo o texto contido numa tabela</p>
<p>A extração e a formatação dos dados requeridos foram feitos através de expressões regulares<p/>
<p>A api tem apenas uma rota do tipo get ('/'), retornando um json com o ano.mês e o sálario referente. Seguindo o padrão da expressão regular, api conseguiu capturar os dados até setembro de 1994, sendo que o salário mínimo nesse periodo era de R$ 70,00</p>

## Tecnologias 
* [Scrape-it](https://github.com/IonicaBizau/scrape-it#readme)
* [Express](http://expressjs.com/pt-br/)
* [Node.js](https://nodejs.org/en/)

## Como rodar o projeto 

```bash
$ git clone https://github.com/diasjoaovitor/webscraping-salario-minimo
$ cd webscraping-salario-minimo
$ yarn ou npm i
$ yarn start ou npm start
```
