@echo off
chcp 65001 >nul
echo ========================================
echo   Upload do Site para GitHub
echo ========================================
echo.

REM Verificar se Git está instalado
where git >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERRO] Git não está instalado!
    echo.
    echo Por favor, instale o Git primeiro:
    echo https://git-scm.com/download/win
    echo.
    echo OU use o GitHub Desktop:
    echo https://desktop.github.com/
    echo.
    pause
    exit /b 1
)

echo [OK] Git encontrado!
echo.

REM Verificar se já é um repositório Git
if exist .git (
    echo [INFO] Repositório Git já inicializado.
    echo.
) else (
    echo [INFO] Inicializando repositório Git...
    git init
    if %errorlevel% neq 0 (
        echo [ERRO] Falha ao inicializar repositório!
        pause
        exit /b 1
    )
    echo [OK] Repositório inicializado!
    echo.
)

REM Adicionar arquivos
echo [INFO] Adicionando arquivos...
git add .
if %errorlevel% neq 0 (
    echo [ERRO] Falha ao adicionar arquivos!
    pause
    exit /b 1
)
echo [OK] Arquivos adicionados!
echo.

REM Verificar se há mudanças para commitar
git diff --cached --quiet
if %errorlevel% equ 0 (
    echo [INFO] Nenhuma mudança para commitar.
    echo.
) else (
    echo [INFO] Fazendo commit...
    git commit -m "Atualização do site Barbearia Padovani"
    if %errorlevel% neq 0 (
        echo [ERRO] Falha ao fazer commit!
        pause
        exit /b 1
    )
    echo [OK] Commit realizado!
    echo.
)

REM Verificar se há remote configurado
git remote get-url origin >nul 2>&1
if %errorlevel% neq 0 (
    echo ========================================
    echo   Configurar Repositório Remoto
    echo ========================================
    echo.
    echo 1. Crie um repositório no GitHub:
    echo    https://github.com/new
    echo.
    echo 2. Copie a URL do repositório (exemplo):
    echo    https://github.com/SEU_USUARIO/barbearia-padovani.git
    echo.
    set /p REPO_URL="Cole a URL do repositório: "
    
    if "%REPO_URL%"=="" (
        echo [ERRO] URL não fornecida!
        pause
        exit /b 1
    )
    
    echo.
    echo [INFO] Configurando repositório remoto...
    git remote add origin %REPO_URL%
    if %errorlevel% neq 0 (
        echo [ERRO] Falha ao configurar remote!
        pause
        exit /b 1
    )
    echo [OK] Remote configurado!
    echo.
    
    echo [INFO] Configurando branch main...
    git branch -M main
    echo.
)

REM Fazer push
echo ========================================
echo   Fazendo Upload para GitHub
echo ========================================
echo.
echo [INFO] Enviando arquivos para GitHub...
echo.
git push -u origin main

if %errorlevel% equ 0 (
    echo.
    echo ========================================
    echo   [SUCESSO] Upload Concluído!
    echo ========================================
    echo.
    echo Seu site foi enviado para o GitHub!
    echo.
    echo Para ativar o GitHub Pages:
    echo 1. Vá em Settings do repositório
    echo 2. Clique em Pages
    echo 3. Selecione branch: main, pasta: / (root)
    echo 4. Salve
    echo.
) else (
    echo.
    echo [ERRO] Falha ao fazer upload!
    echo.
    echo Possíveis causas:
    echo - Repositório não existe no GitHub
    echo - Sem permissão para fazer push
    echo - Problema de autenticação
    echo.
    echo Tente fazer o upload manualmente ou configure
    echo a autenticação do Git.
    echo.
)

pause

