@echo off
chcp 65001 >nul
title Barbearia Padovani - Instalacao
color 0A

echo.
echo ========================================
echo   BARBEARIA PADOVANI - INSTALACAO
echo ========================================
echo.

cd /d "%~dp0"
echo Pasta atual: %CD%
echo.

echo [1/4] Verificando Node.js...
where node >nul 2>&1
if %errorlevel% neq 0 (
    echo.
    echo [ERRO] Node.js NAO ENCONTRADO!
    echo.
    echo Por favor, instale o Node.js primeiro:
    echo https://nodejs.org/
    echo.
    echo Escolha a versao LTS (recomendada)
    echo.
    echo Apos instalar, feche e reabra este arquivo.
    echo.
    pause
    start https://nodejs.org/
    exit /b 1
)

echo [OK] Node.js encontrado!
node --version
npm --version
echo.

echo [2/4] Verificando se node_modules existe...
if exist "node_modules\" (
    echo [INFO] Dependencias ja instaladas. Pulando instalacao...
    echo.
) else (
    echo [3/4] Instalando dependencias...
    echo Isso pode levar alguns minutos na primeira vez...
    echo Por favor, aguarde...
    echo.
    call npm install
    if %errorlevel% neq 0 (
        echo.
        echo [ERRO] Falha ao instalar dependencias!
        echo.
        echo Tente executar manualmente:
        echo   npm install
        echo.
        pause
        exit /b 1
    )
    echo.
    echo [OK] Dependencias instaladas com sucesso!
    echo.
)

echo [4/4] Iniciando servidor...
echo.
echo ========================================
echo   SERVIDOR INICIANDO...
echo ========================================
echo.
echo O site estara disponivel em:
echo.
echo   http://localhost:3000
echo.
echo Aguarde alguns segundos e o navegador abrira automaticamente...
echo.
echo Para parar o servidor, pressione CTRL+C
echo.
echo ========================================
echo.

timeout /t 3 /nobreak >nul
start http://localhost:3000

call npm run dev

pause
