export interface Service {
  id: string;
  name: string;
  description: string;
  price?: string;
  icon: string;
}

export interface Benefit {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  whatsapp: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    full: string;
  };
  hours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  services: Service[];
  benefits: Benefit[];
  gallery: GalleryImage[];
  social: {
    instagram?: string;
    facebook?: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "Barbearia Padovani",
  tagline: "Estilo e Tradição em Cada Corte",
  description: "Barbearia premium especializada em cortes modernos, barbas e cuidados masculinos. Ambiente sofisticado com atendimento personalizado.",
  whatsapp: "5511999999999", // Formato: código do país + DDD + número (sem espaços ou caracteres)
  address: {
    street: "Rua Exemplo, 123",
    city: "São Paulo",
    state: "SP",
    zip: "01234-567",
    full: "Rua Exemplo, 123 - São Paulo, SP - 01234-567",
  },
  hours: {
    weekdays: "Segunda a Sexta: 09:00 - 19:00",
    saturday: "Sábado: 08:00 - 18:00",
    sunday: "Domingo: Fechado",
  },
  services: [
    {
      id: "1",
      name: "Corte Masculino",
      description: "Corte moderno e estiloso com técnicas profissionais",
      price: "R$ 35,00",
      icon: "✂️",
    },
    {
      id: "2",
      name: "Barba Completa",
      description: "Aparar, modelar e definir com navalha e tesoura",
      price: "R$ 25,00",
      icon: "🪒",
    },
    {
      id: "3",
      name: "Corte + Barba",
      description: "Pacote completo com desconto especial",
      price: "R$ 50,00",
      icon: "💈",
    },
    {
      id: "4",
      name: "Sobrancelha",
      description: "Design e modelagem profissional",
      price: "R$ 15,00",
      icon: "👁️",
    },
    {
      id: "5",
      name: "Relaxamento",
      description: "Massagem capilar relaxante",
      price: "R$ 20,00",
      icon: "💆",
    },
    {
      id: "6",
      name: "Hidratação",
      description: "Tratamento hidratante para cabelo e barba",
      price: "R$ 30,00",
      icon: "✨",
    },
  ],
  benefits: [
    {
      id: "1",
      title: "Profissionais Experientes",
      description: "Barbeiros certificados com anos de experiência no mercado",
      icon: "👨‍💼",
    },
    {
      id: "2",
      title: "Produtos Premium",
      description: "Utilizamos apenas produtos de alta qualidade e importados",
      icon: "⭐",
    },
    {
      id: "3",
      title: "Ambiente Moderno",
      description: "Espaço climatizado e equipado com tecnologia de ponta",
      icon: "🏢",
    },
    {
      id: "4",
      title: "Atendimento Personalizado",
      description: "Cada cliente recebe atenção exclusiva e cuidados especiais",
      icon: "🤝",
    },
  ],
  gallery: [
    {
      id: "1",
      src: "https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&h=600&fit=crop",
      alt: "Interior da barbearia",
    },
    {
      id: "2",
      src: "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800&h=600&fit=crop",
      alt: "Corte de cabelo em andamento",
    },
    {
      id: "3",
      src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&h=600&fit=crop",
      alt: "Barbeiro trabalhando",
    },
    {
      id: "4",
      src: "https://images.unsplash.com/photo-1622296242081-2e3e2e5b1b1a?w=800&h=600&fit=crop",
      alt: "Ferramentas de barbearia",
    },
    {
      id: "5",
      src: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&h=600&fit=crop",
      alt: "Cliente sendo atendido",
    },
    {
      id: "6",
      src: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800&h=600&fit=crop",
      alt: "Ambiente da barbearia",
    },
  ],
  social: {
    instagram: "https://instagram.com/barbeariapadovani",
    facebook: "https://facebook.com/barbeariapadovani",
  },
};

