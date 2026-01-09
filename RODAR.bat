@echo off
chcp 65001 >nul
title Barbearia Padovani - Rodando
color 0A

echo.
echo ========================================
echo   BARBEARIA PADOVANI - RODAR SITE
echo ========================================
echo.

cd /d "%~dp0"

echo Verificando instalacao...
if not exist "node_modules\" (
    echo.
    echo [ERRO] Dependencias nao encontradas!
    echo.
    echo Execute primeiro: INSTALAR_E_RODAR.bat
    echo.
    pause
    exit /b 1
)

echo [OK] Tudo pronto!
echo.
echo ========================================
echo   SERVIDOR INICIANDO...
echo ========================================
echo.
echo O site estara disponivel em:
echo.
echo   http://localhost:3000
echo.
echo Aguarde alguns segundos...
echo O navegador abrira automaticamente.
echo.
echo Para parar o servidor, pressione CTRL+C
echo.
echo ========================================
echo.

timeout /t 5 /nobreak >nul
start http://localhost:3000

call npm run dev

pause
