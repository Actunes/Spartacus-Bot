<div align="center">
	<h1>
		<sub>
			<a>
				<img
					src="./svg-icons/Icon/emblema.png"
					height="39"
					width="39"
				/>
			</a>
		</sub>
		Spartacus Bot
	</h1>
</div>

Spartacus Bot é um bot feito com node.js para o Discord, ela foi pensada para desenvolver as pendencias particulares do grupo Spartacus.

---

## Como instalar 🛠️

1. Clone este repositório em sua máquina local:
```bash
git@github.com:Actunes/Spartacus-Bot.git
```
2. Instale as dependências do projeto:
```bash
npm install
```
3. Crie um arquivo .env na raiz do projeto e adicione as seguintes variáveis de ambiente:
```
TOKEN= TOKEN_BOT_DISCORD
MONGO= TOKEN_MONGO_DB
```
4. Execute o bot:
```bash
npm run server

```
5. ou execute run.bat (windows somente)

---

## Funções disponíveis

### comandos

* `/info` - Retorna as informações do bot e do servidor atual. 
* `/clear <numero>` - Remove mensagens de um chat.
* `/send_embed <json>` - Envia uma embed (Atualmente aceita apenas json)
* `/edit_embed <link_mensagem> <json>` - Edita uma embed enviada pelo bot.
* `/set_channel <canal>` - Seleciona um canal para as reações automaticas.
* `/unset_channel <canal>` - Remove um canal para as reações automaticas.
* `/say` - Envia uma mensagem qualquer utilizando o bot.
* `/anunciar_proposta` - Realiza um anúncio utilizando um padrão pré estabelecido.

### eventos

* `channelReact` - Reações automaticas {check} {denny}
* `scheduleMessages` - Chamada executada mensalmente.

---

## Contribuindo 🤝

Se você quiser contribuir para este projeto, siga os seguintes passos:
1. Faça um fork deste repositório.
2. Crie uma nova branch com suas alterações: `git checkout -b minha-branch`
3. Faça o commit de suas alterações: `git commit -m 'Adicionando novas funcionalidades'`
4. Envie suas alterações para o seu repositório fork: `git push origin minha-branch`
5. Abra um pull request para este repositório.

---

## Licença 📜

Este projeto está licenciado sob a licença MIT. Consulte o arquivo LICENSE.md para obter mais informações.