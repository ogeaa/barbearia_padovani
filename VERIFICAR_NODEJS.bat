@echo off
chcp 65001 >nul
title Verificar Node.js
color 0B

echo.
echo ========================================
echo   VERIFICANDO INSTALACAO DO NODE.JS
echo ========================================
echo.

where node >nul 2>&1
if %errorlevel% neq 0 (
    echo [X] Node.js NAO ESTA INSTALADO
    echo.
    echo Para instalar:
    echo 1. Acesse: https://nodejs.org/
    echo 2. Baixe a versao LTS (recomendada)
    echo 3. Instale normalmente
    echo 4. Reinicie o computador (recomendado)
    echo 5. Execute este arquivo novamente
    echo.
    pause
    start https://nodejs.org/
    exit /b 1
)

echo [OK] Node.js ESTA INSTALADO!
echo.
echo Versao do Node.js:
node --version
echo.
echo Versao do npm:
npm --version
echo.
echo ========================================
echo   TUDO PRONTO!
echo ========================================
echo.
echo Agora voce pode executar:
echo   INSTALAR_E_RODAR.bat
echo.
pause

