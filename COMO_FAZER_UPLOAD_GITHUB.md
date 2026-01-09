# 📤 Como Fazer Upload do Site no GitHub

## Opção 1: Usando GitHub Desktop (Mais Fácil) 🖥️

### Passo 1: Instalar GitHub Desktop
1. Baixe o GitHub Desktop: https://desktop.github.com/
2. Instale e faça login com sua conta GitHub

### Passo 2: Criar Repositório
1. Abra o GitHub Desktop
2. Clique em **File > New Repository**
3. Preencha:
   - **Name**: `barbearia-padovani` (ou outro nome)
   - **Description**: Site da Barbearia Padovani
   - **Local Path**: `D:\PROGRAMAÇÃO\barbearia_padovani`
   - **Initialize this repository with a README**: ❌ Desmarque
   - **Git Ignore**: None (já temos .gitignore)
   - **License**: None
4. Clique em **Create Repository**

### Passo 3: Fazer Commit
1. No GitHub Desktop, você verá todos os arquivos
2. Escreva uma mensagem: "Primeiro commit - Site Barbearia Padovani"
3. Clique em **Commit to main**

### Passo 4: Publicar no GitHub
1. Clique em **Publish repository**
2. Escolha se será público ou privado
3. Clique em **Publish Repository**

---

## Opção 2: Usando Git via Terminal (Avançado) 💻

### Passo 1: Instalar Git
1. Baixe o Git: https://git-scm.com/download/win
2. Instale com as opções padrão

### Passo 2: Configurar Git (primeira vez)
```bash
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"
```

### Passo 3: Inicializar Repositório
Abra o PowerShell ou CMD na pasta do projeto:
```bash
cd "D:\PROGRAMAÇÃO\barbearia_padovani"
git init
```

### Passo 4: Adicionar Arquivos
```bash
git add .
```

### Passo 5: Fazer Commit
```bash
git commit -m "Primeiro commit - Site Barbearia Padovani"
```

### Passo 6: Criar Repositório no GitHub
1. Acesse: https://github.com/new
2. Nome do repositório: `barbearia-padovani`
3. Escolha público ou privado
4. **NÃO** marque "Initialize with README"
5. Clique em **Create repository**

### Passo 7: Conectar e Fazer Upload
```bash
git remote add origin https://github.com/SEU_USUARIO/barbearia-padovani.git
git branch -M main
git push -u origin main
```

---

## Opção 3: Upload Manual via Interface Web 🌐

### Passo 1: Criar Repositório
1. Acesse: https://github.com/new
2. Nome: `barbearia-padovani`
3. Escolha público ou privado
4. Clique em **Create repository**

### Passo 2: Upload de Arquivos
1. No repositório criado, clique em **uploading an existing file**
2. Arraste todos os arquivos da pasta `barbearia_padovani` (exceto:
   - `.gitignore` (pode incluir)
   - Arquivos de teste mencionados no .gitignore)
3. Escreva mensagem: "Primeiro commit - Site Barbearia Padovani"
4. Clique em **Commit changes**

---

## 📝 Arquivos Importantes para Incluir

✅ **Incluir:**
- `index.html`
- `style.css`
- `script.js`
- `images/` (pasta completa)
- `README.md`
- `.gitignore`

❌ **Não incluir (já no .gitignore):**
- Arquivos de teste
- Arquivos temporários
- `node_modules/` (se existir)

---

## 🚀 Depois do Upload: Ativar GitHub Pages

Para o site ficar online:

1. No repositório GitHub, vá em **Settings**
2. Role até **Pages** (no menu lateral)
3. Em **Source**, escolha **Deploy from a branch**
4. Selecione **main** e pasta **/ (root)**
5. Clique em **Save**
6. Aguarde alguns minutos
7. Seu site estará em: `https://SEU_USUARIO.github.io/barbearia-padovani/`

---

## 💡 Dica

Se usar GitHub Desktop, é mais fácil fazer atualizações futuras:
1. Faça suas alterações
2. Abra GitHub Desktop
3. Escreva mensagem de commit
4. Clique em **Commit to main**
5. Clique em **Push origin**

---

## ❓ Precisa de Ajuda?

Se tiver dúvidas, me avise!

