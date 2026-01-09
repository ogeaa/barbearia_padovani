# 🚀 Instruções Rápidas - Barbearia Padovani

## ⚡ Início Rápido

### 1. Instalar Dependências
```bash
cd barbearia_padovani
npm install
```

### 2. Personalizar Dados
Edite o arquivo `data/site.ts` com as informações da sua barbearia:

```typescript
export const siteConfig: SiteConfig = {
  name: "Sua Barbearia",           // ← Nome da barbearia
  whatsapp: "5511999999999",       // ← WhatsApp (sem espaços)
  address: { ... },                 // ← Endereço completo
  hours: { ... },                   // ← Horários
  services: [ ... ],                // ← Serviços e preços
  // ...
}
```

### 3. Rodar o Projeto
```bash
npm run dev
```

Acesse: **http://localhost:3000**

---

## 📝 Personalizações Comuns

### Alterar WhatsApp
```typescript
// data/site.ts
whatsapp: "5511999999999"  // Formato: país + DDD + número
```

### Alterar Endereço
```typescript
// data/site.ts
address: {
  street: "Rua Nova, 456",
  city: "São Paulo",
  state: "SP",
  zip: "01234-567",
  full: "Rua Nova, 456 - São Paulo, SP - 01234-567",
}
```

### Adicionar/Remover Serviços
```typescript
// data/site.ts
services: [
  {
    id: "1",
    name: "Novo Serviço",
    description: "Descrição do serviço",
    price: "R$ 40,00",
    icon: "✂️",
  },
  // ... outros serviços
]
```

### Trocar Imagens da Galeria
```typescript
// data/site.ts
gallery: [
  {
    id: "1",
    src: "https://sua-imagem.com/foto.jpg",  // ← URL da imagem
    alt: "Descrição da imagem",
  },
  // ... outras imagens
]
```

### Alterar Cores
Edite `tailwind.config.ts`:
```typescript
colors: {
  accent: {
    DEFAULT: '#d4af37',  // ← Cor dourada (pode mudar para outra)
  },
}
```

---

## 🎨 Estrutura de Componentes

Cada seção é um componente separado em `/components`:

- `Hero.tsx` - Seção inicial com imagem de fundo
- `Services.tsx` - Cards de serviços
- `Benefits.tsx` - Diferenciais
- `Gallery.tsx` - Galeria de fotos
- `Location.tsx` - Endereço e mapa
- `Hours.tsx` - Horários
- `CTA.tsx` - Call-to-action
- `Footer.tsx` - Rodapé
- `WhatsAppButton.tsx` - Botão flutuante

---

## 📦 Build para Produção

```bash
npm run build
npm start
```

---

## 🌐 Deploy

### Vercel (Mais Fácil)
1. Faça push para GitHub
2. Acesse [vercel.com](https://vercel.com)
3. Importe o repositório
4. Deploy automático!

### Outras Opções
- Netlify
- Railway
- Render
- AWS Amplify

---

## ❓ Dúvidas?

- Verifique o `README.md` para documentação completa
- Todos os dados estão em `data/site.ts`
- Componentes em `/components`

---

**Pronto para usar! 🎉**

