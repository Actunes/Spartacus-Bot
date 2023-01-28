@echo off
echo ----------------------------------
echo         Iniciando o bot...
echo ----------------------------------
:main
npm run server
echo Reiniciando o bot
goto main