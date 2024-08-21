# Testes automatizados com cypress

[project.webm](https://github.com/user-attachments/assets/8fb2731d-3e5f-41de-a738-f2a91153a4a7)

Estou realizando testes automatizados em uma aplicação disponibilizada nessa URL.

https://erickwendel.github.io/vanilla-js-web-app-example/

O objetivo dos meus testes foram definidos:

Funcionalidade: Registro de Imagem

1.Cenário: Enviando uma imagem com entradas inválidas

- Dado que estou na página de registro de imagem
- Quando eu digitar "" no campo de título
- Então eu digitar "" no campo de URL
- Então eu clicar no botão de envio
- Então eu devo ver a mensagem "Por favor, digite um título para a imagem" acima do campo de título
- E eu devo ver a mensagem "Por favor, digite uma URL válida" acima do campo de imageUrl
- E eu devo ver um ícone de exclamação nos campos de título e URL

  2.Cenário: Enviando uma imagem com entradas válidas usando a tecla enter

- Dado que estou na página de registro de imagem
- Quando eu digitar "Alien BR" no campo de título
- Então eu devo ver um ícone de marca de seleção no campo de título
- Quando eu digitar "https://cdn.mos.cms.futurecdn.net/eM9EvWyDxXcnQTTyH8c8p5-1200-80.jpg" no campo de URL
- Então eu devo ver um ícone de marca de seleção no campo de imageUrl
- Então eu posso pressionar enter para enviar o formulário
- E a lista de imagens registradas deve ser atualizada com o novo item
- E o novo item deve ser armazenado no localStorage
- Então os campos devem ser limpos

  3.Cenário: Enviando uma imagem e atualizando a lista

- Dado que estou na página de registro de imagem
- Então eu digitei "BR Alien" no campo de título
- Então eu digitei "https://cdn.mos.cms.futurecdn.net/eM9EvWyDxXcnQTTyH8c8p5-1200-80.jpg" no campo de URL
- Quando eu clicar no botão de envio
- E a lista de imagens registradas deve ser atualizada com o novo item
- E o novo item deve ser armazenado no localStorage
- Então os campos devem ser limpos

4. Cenário: Atualizando a página após enviar uma imagem clicando no botão de envio

- Dado que estou na página de registro de imagem
- Então eu enviei uma imagem clicando no botão de envio
- Quando eu atualizar a página
- Então eu ainda devo ver a imagem enviada na lista de imagens registradas
