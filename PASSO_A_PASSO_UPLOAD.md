# 📤 Passo a Passo: Upload Manual no GitHub

## ✅ Você já criou o repositório? Ótimo!

Agora vamos fazer o upload dos arquivos:

---

## 📋 Passo 1: Acessar o Repositório

1. Abra o seu repositório no GitHub
2. Você verá uma página com instruções
3. Procure por: **"uploading an existing file"** ou **"upload files"**
4. Clique nessa opção

---

## 📁 Passo 2: Selecionar Arquivos

Você precisa fazer upload dos seguintes arquivos:

### ✅ Arquivos Principais (OBRIGATÓRIOS):
- ✅ `index.html`
- ✅ `style.css`
- ✅ `script.js`
- ✅ `README.md`
- ✅ `.gitignore`

### 📁 Pasta de Imagens (OBRIGATÓRIA):
- ✅ Pasta `images/` completa (com todos os arquivos dentro):
  - `barbearia.png`
  - `barbearia anime.png`
  - `barbearia crianca.png`
  - `favicon.ico`
  - `kelwin.png`
  - `logo.png`
  - `time.png`

### ❌ NÃO Precisa Enviar:
- ❌ Arquivos `.bat` (scripts do Windows)
- ❌ Arquivos `.txt` de instruções
- ❌ Pasta `app/` (se existir)
- ❌ Pasta `components/` (se existir)
- ❌ Pasta `data/` (se existir)
- ❌ `node_modules/` (se existir)
- ❌ Arquivos de teste

---

## 🖱️ Passo 3: Fazer Upload

### Método 1: Arrastar e Soltar (Mais Fácil)

1. Abra a pasta do projeto: `D:\PROGRAMAÇÃO\barbearia_padovani`
2. Selecione os arquivos e pastas mencionados acima
3. Arraste e solte na área de upload do GitHub
4. Aguarde o upload terminar

### Método 2: Selecionar Arquivos

1. Clique em "choose your files" ou "selecionar arquivos"
2. Navegue até: `D:\PROGRAMAÇÃO\barbearia_padovani`
3. Selecione os arquivos um por um (ou use Ctrl+A para selecionar todos)
4. Clique em "Open" ou "Abrir"

---

## 💬 Passo 4: Fazer Commit

1. Role a página para baixo
2. No campo **"Commit changes"**, escreva:
   ```
   Primeiro upload - Site Barbearia Padovani
   ```
3. Clique no botão verde **"Commit changes"** ou **"Fazer commit das alterações"**

---

## ⏳ Passo 5: Aguardar

- O GitHub processará os arquivos
- Isso pode levar alguns segundos
- Quando terminar, você verá todos os arquivos no repositório

---

## 🚀 Passo 6: Ativar GitHub Pages (Para Site Ficar Online)

### 6.1. Ir para Settings
1. No seu repositório, clique na aba **"Settings"** (Configurações)
2. Role a página até encontrar **"Pages"** no menu lateral esquerdo

### 6.2. Configurar Pages
1. Clique em **"Pages"**
2. Em **"Source"** (Fonte), selecione:
   - **Branch**: `main` (ou `master`)
   - **Folder**: `/ (root)` ou `/` (raiz)
3. Clique em **"Save"** (Salvar)

### 6.3. Aguardar Deploy
- Aguarde 1-2 minutos
- O GitHub processará o site
- Você verá uma mensagem verde com o link do site

### 6.4. Acessar o Site
- O link será algo como:
  ```
  https://SEU_USUARIO.github.io/NOME_DO_REPOSITORIO/
  ```
- Exemplo:
  ```
  https://joaosilva.github.io/barbearia-padovani/
  ```

---

## ✅ Pronto!

Seu site está no ar! 🎉

---

## 🔄 Para Fazer Atualizações Futuras

### Opção 1: Upload Manual Novamente
- Repita os passos acima
- Faça upload apenas dos arquivos que mudaram

### Opção 2: Instalar Git (Recomendado)
- Baixe: https://git-scm.com/download/win
- Depois use o script `UPLOAD_GITHUB.bat`
- Ou use GitHub Desktop: https://desktop.github.com/

---

## ❓ Problemas Comuns

### "Arquivo muito grande"
- Imagens muito grandes podem dar erro
- Comprima as imagens antes de fazer upload
- Tamanho máximo recomendado: 1MB por imagem

### "Site não aparece"
- Aguarde 2-3 minutos após ativar Pages
- Verifique se selecionou branch `main` e pasta `/ (root)`
- Recarregue a página do GitHub

### "Imagens não aparecem"
- Verifique se a pasta `images/` foi enviada completa
- Verifique os caminhos no `index.html` (devem ser `images/nome.png`)

---

## 📞 Precisa de Ajuda?

Se tiver algum problema, me avise!

