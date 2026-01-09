@echo off
chcp 65001 >nul
title Testar Instalacao
color 0E

echo.
echo ========================================
echo   TESTANDO INSTALACAO
echo ========================================
echo.

cd /d "%~dp0"

echo [1] Verificando Node.js...
where node >nul 2>&1
if %errorlevel% neq 0 (
    echo [X] Node.js nao encontrado
    echo Execute: VERIFICAR_NODEJS.bat
    pause
    exit /b 1
)
echo [OK] Node.js encontrado
node --version
echo.

echo [2] Verificando npm...
where npm >nul 2>&1
if %errorlevel% neq 0 (
    echo [X] npm nao encontrado
    pause
    exit /b 1
)
echo [OK] npm encontrado
npm --version
echo.

echo [3] Verificando pasta do projeto...
if not exist "package.json" (
    echo [X] Arquivo package.json nao encontrado
    echo Certifique-se de estar na pasta correta
    pause
    exit /b 1
)
echo [OK] Pasta do projeto correta
echo.

echo [4] Verificando dependencias...
if not exist "node_modules\" (
    echo [X] Dependencias nao instaladas
    echo Execute: INSTALAR_E_RODAR.bat
    pause
    exit /b 1
)
echo [OK] Dependencias instaladas
echo.

echo [5] Verificando arquivos do projeto...
if not exist "app\" (
    echo [X] Pasta app nao encontrada
    pause
    exit /b 1
)
if not exist "components\" (
    echo [X] Pasta components nao encontrada
    pause
    exit /b 1
)
if not exist "data\site.ts" (
    echo [X] Arquivo data/site.ts nao encontrado
    pause
    exit /b 1
)
echo [OK] Arquivos do projeto encontrados
echo.

echo ========================================
echo   TUDO OK! PRONTO PARA RODAR
echo ========================================
echo.
echo Execute: RODAR.bat
echo.
pause

