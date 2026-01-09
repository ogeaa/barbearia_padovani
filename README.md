# Barbearia Padovani - Site One-Page

Site one-page moderno e responsivo para barbearia, desenvolvido com Next.js 14, TypeScript e Tailwind CSS.

## 🎨 Design

- **Tema**: Preto/Cinza/Branco com detalhes dourados
- **Estilo**: Urbano Premium
- **Layout**: Mobile-first e totalmente responsivo
- **Acessibilidade**: WCAG AA compliant

## 🚀 Tecnologias

- **Next.js 14** - Framework React
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **Next/Image** - Otimização de imagens

## 📋 Estrutura do Projeto

```
barbearia_padovani/
├── app/
│   ├── layout.tsx       # Layout principal com SEO
│   ├── page.tsx         # Página principal
│   └── globals.css      # Estilos globais
├── components/
│   ├── Hero.tsx         # Seção hero com CTA
│   ├── Services.tsx     # Cards de serviços
│   ├── Benefits.tsx     # Diferenciais
│   ├── Gallery.tsx      # Galeria de fotos
│   ├── Location.tsx     # Endereço e mapa
│   ├── Hours.tsx        # Horários de funcionamento
│   ├── CTA.tsx          # Call-to-action final
│   ├── Footer.tsx       # Rodapé
│   └── WhatsAppButton.tsx # Botão flutuante WhatsApp
├── data/
│   └── site.ts          # Configuração e dados do site
└── public/              # Arquivos estáticos
```

## 🛠️ Instalação e Execução

### Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn

### Passos

1. **Instalar dependências:**
   ```bash
   npm install
   # ou
   yarn install
   ```

2. **Configurar dados da barbearia:**
   
   Edite o arquivo `data/site.ts` e atualize:
   - Nome da barbearia
   - WhatsApp (formato: código do país + DDD + número, sem espaços)
   - Endereço completo
   - Horários de funcionamento
   - Serviços oferecidos
   - Links de redes sociais

3. **Executar em desenvolvimento:**
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. **Abrir no navegador:**
   ```
   http://localhost:3000
   ```

5. **Build para produção:**
   ```bash
   npm run build
   npm start
   ```

## 📝 Personalização

### Editar Dados da Barbearia

Todos os dados estão centralizados em `data/site.ts`. Edite este arquivo para:

- Alterar nome, tagline e descrição
- Atualizar WhatsApp e endereço
- Modificar serviços e preços
- Adicionar/remover benefícios
- Trocar imagens da galeria
- Atualizar links de redes sociais

### Alterar Cores

As cores estão definidas em `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    DEFAULT: '#1a1a1a',    // Preto principal
    light: '#2d2d2d',     // Preto claro
    dark: '#0a0a0a',      // Preto escuro
  },
  accent: {
    DEFAULT: '#d4af37',   // Dourado
    light: '#f4d03f',     // Dourado claro
    dark: '#b8941f',      // Dourado escuro
  },
  secondary: {
    DEFAULT: '#8b4513',   // Marrom
    light: '#a0522d',     // Marrom claro
    dark: '#654321',      // Marrom escuro
  },
}
```

### Substituir Imagens

1. **Hero**: Edite a URL da imagem em `components/Hero.tsx`
2. **Galeria**: Atualize as URLs em `data/site.ts` no array `gallery`

### Google Maps

O mapa usa um embed do Google Maps. Para personalizar:

1. Edite o endereço em `data/site.ts`
2. O componente `Location.tsx` gera automaticamente o embed

## 📱 Seções do Site

1. **Hero** - Imagem de fundo com overlay, título e CTA WhatsApp
2. **Serviços** - Grid com até 6 cards de serviços
3. **Benefícios** - 3-4 diferenciais da barbearia
4. **Galeria** - 6 imagens em grid responsivo
5. **Localização** - Endereço e mapa do Google Maps
6. **Horários** - Horário de funcionamento
7. **CTA Final** - Call-to-action para agendamento
8. **Footer** - Informações de contato e links

## 🔧 Funcionalidades

- ✅ Design responsivo (mobile-first)
- ✅ Botão flutuante WhatsApp
- ✅ SEO otimizado (meta tags, OG tags)
- ✅ Acessibilidade (ARIA labels, navegação por teclado)
- ✅ Animações suaves
- ✅ Otimização de imagens (Next/Image)
- ✅ Scroll suave entre seções
- ✅ Modal para galeria de fotos

## 📦 Deploy

### Vercel (Recomendado)

1. Faça push do código para GitHub
2. Importe o projeto na Vercel
3. Configure as variáveis de ambiente se necessário
4. Deploy automático!

### Outras Plataformas

O projeto pode ser deployado em qualquer plataforma que suporte Next.js:
- Netlify
- Railway
- Render
- AWS Amplify

## 📄 Licença

Este projeto é de código aberto e está disponível para uso pessoal e comercial.

## 🤝 Suporte

Para dúvidas ou sugestões, entre em contato através do WhatsApp configurado no site.

## 🌐 Publicação no GitHub

Para fazer upload do site no GitHub, consulte o arquivo:
- **[COMO_FAZER_UPLOAD_GITHUB.md](./COMO_FAZER_UPLOAD_GITHUB.md)** - Guia completo passo a passo

### Opções Rápidas:
1. **GitHub Desktop** (Recomendado para iniciantes)
   - Baixe: https://desktop.github.com/
   - Siga o guia em `COMO_FAZER_UPLOAD_GITHUB.md`

2. **Script Automático** (Se tiver Git instalado)
   - Execute: `UPLOAD_GITHUB.bat`
   - Siga as instruções na tela

3. **Upload Manual**
   - Crie repositório no GitHub
   - Faça upload via interface web
   - Veja detalhes no guia

### Ativar GitHub Pages:
Após o upload, ative o GitHub Pages para o site ficar online:
1. Settings → Pages
2. Source: Deploy from a branch
3. Branch: main, Folder: / (root)
4. Salve e aguarde alguns minutos

---

Desenvolvido com ❤️ usando Next.js 14

