export interface Solution {
  title: string;
  description: string;
  icon: string;
  link: string;
}

export const solutions: Solution[] = [
  {
    title: "Web development",
    description: "We deliver top-tier B2B and B2C web solutions across the island, crafting unique and functional web platforms with our expert team—our passion lies in innovation and excellence.",
    icon: "https://cdn3.iconfinder.com/data/icons/web-design-development-flat-colors/48/coding-512.png",
    link: "/services/web-development"
  },
  {
    title: "Mobile App Development",
    description: "Whether you need a native Android app or a cross-platform solution, we've got you covered. Our team delivers cutting-edge mobile applications equipped with all the features you require.",
    icon: "https://cdn3.iconfinder.com/data/icons/web-design-development-flat-colors/48/smartphone-512.png",
    link: "/services/mobile-development"
  },
  {
    title: "Custom Software Development",
    description: "Whether you need a data-driven web platform or a sleek mobile app, we engineer scalable, secure, and future-proof solutions. From concept to deployment, our full-stack developers and architects transform ideas into high-performance tools.",
    icon: "https://cdn3.iconfinder.com/data/icons/web-design-development-flat-colors/48/web_developmrnt-512.png",
    link: "/services/research-development"
  },
  {
    title: "Enterprise Technology Solutions",
    description: "Tackle complex business challenges with ERP systems, AI-driven analytics platforms, and legacy software modernization. We build robust architectures designed for scalability, compliance, and seamless integration.",
    icon: "https://cdn3.iconfinder.com/data/icons/web-design-development-flat-colors/48/layer-512.png",
    link: "/services/cloud-solutions"
  }
]; 