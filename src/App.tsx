import { useState, useEffect } from "react";
import {
  Mail,
  Code2,
  Server,
  Smartphone,
  Cloud,
  Award,
  Briefcase,
  GraduationCap,
  Menu,
  X,
  ExternalLink,
  MapPin,
  Calendar,
  Trophy,
  Github,
  Linkedin,
  Phone,
  PointerIcon,
  UserRound,
} from "lucide-react";

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "experience", "contact"];
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-white to-cyan-50 text-gray-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-300/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-cyan-300/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-96 h-96 bg-blue-400/30 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/70 backdrop-blur-lg z-50 border-b border-blue-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-linear-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center shadow-md">
                <Code2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Vítor Ornelas
              </span>
            </div>

            <div className="hidden md:flex space-x-8">
              {["home", "about", "skills", "experience", "contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`capitalize transition-all font-medium ${
                      activeSection === item
                        ? "text-blue-600 border-b-2 border-blue-600"
                        : "text-gray-600 hover:text-blue-600"
                    }`}
                  >
                    {item === "home"
                      ? "Início"
                      : item === "about"
                      ? "Sobre"
                      : item === "skills"
                      ? "Habilidades"
                      : item === "experience"
                      ? "Experiência"
                      : "Contato"}
                  </button>
                )
              )}
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-blue-50 text-blue-600"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden py-4 space-y-2 bg-white/90 border-t border-blue-100 backdrop-blur-sm">
              {["home", "about", "skills", "experience", "contact"].map(
                (item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="block w-full text-left px-4 py-2 capitalize hover:bg-blue-50 rounded-lg text-gray-700 hover:text-blue-600"
                  >
                    {item === "home"
                      ? "Início"
                      : item === "about"
                      ? "Sobre"
                      : item === "skills"
                      ? "Habilidades"
                      : item === "experience"
                      ? "Experiência"
                      : "Contato"}
                  </button>
                )
              )}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-4 pt-20 relative z-10"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center md:justify-end order-2 md:order-1">
              <div className="relative group">
                <div className="absolute -inset-4 bg-linear-to-r from-blue-400 to-cyan-400 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity"></div>
                <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl bg-linear-to-br from-blue-100 to-cyan-100">
                  <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-blue-400 to-cyan-500">
                    <img src="/photo.jpg" alt="Foto de Vítor César" />
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
                👋 Bem-vindo ao meu portfólio
              </div>
              <h1 className="text-4xl sm:text-6xl font-bold mb-4">
                <span className="bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                  Vítor César
                </span>
                <br />
                <span className="text-gray-800">Gonçalves Ornelas</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-700 mb-4 font-semibold">
                Desenvolvedor Full Stack
              </p>
              <p className="text-lg text-gray-600 mb-8 max-w-xl">
                Transformando ideias em soluções digitais há mais de 5 anos.
                Especialista em modernização de sistemas e arquiteturas
                escaláveis.
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <a
                  href="https://github.com/Mr-Reed-11"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white rounded-lg transition-all transform hover:scale-105 shadow-lg"
                >
                  <Github className="w-5 h-5" />
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/vitor-ornelas/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all transform hover:scale-105 shadow-lg"
                >
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </a>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="flex items-center gap-2 px-6 py-3 bg-linear-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-lg transition-all transform hover:scale-105 shadow-lg"
                >
                  <Mail className="w-5 h-5" />
                  Contato
                </button>
              </div>

              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-blue-500" />
                  Palmas, TO
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-blue-500" />
                  5+ anos
                </div>
                <div className="flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-blue-500" />
                  5+ Projetos
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen flex items-center px-4 py-20 relative z-10"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Sobre Mim
              </span>
            </h2>
            <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
          </div>

          <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-10 border border-blue-100 shadow-xl mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Olá! Sou desenvolvedor Full Stack com mais de 5 anos de
              experiência, apaixonado por criar soluções digitais que fazem
              diferença. Formado em{" "}
              <strong className="text-blue-600">
                Sistemas de Informação pelo IFTO
              </strong>{" "}
              e cursando pós-graduação em{" "}
              <strong className="text-blue-600">Sistemas Computacionais</strong>
              .
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Atuo como empresário à frente da{" "}
              <strong className="text-blue-600">Nortix Code</strong>,
              desenvolvedor freelancer e professor de Lógica de Programação e
              Desenvolvimento Web. Minha missão é compartilhar conhecimento e
              formar novos talentos na área de tecnologia.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Especializado em{" "}
              <strong className="text-cyan-600">
                modernização de sistemas legados
              </strong>
              , migração de tecnologias e criação de arquiteturas robustas,
              seguras e escaláveis que atendem às demandas do mercado atual.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-linear-to-br from-blue-500 to-cyan-500 rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all">
              <GraduationCap className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-3">Formação</h3>
              <p className="text-blue-50 mb-1">Sistemas de Informação</p>
              <p className="text-blue-50 text-sm mb-3">IFTO - Campus Paraíso</p>
              <p className="text-blue-50">Pós-graduação</p>
              <p className="text-blue-50 text-sm">Sistemas Computacionais</p>
            </div>

            <div className="bg-linear-to-br from-cyan-500 to-blue-500 rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all">
              <Briefcase className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-3">Atuação</h3>
              <p className="text-blue-50 mb-1">✦ Empresário - Nortix Code</p>
              <p className="text-blue-50 mb-1">✦ Professor de Programação</p>
              <p className="text-blue-50">✦ Desenvolvedor Freelancer</p>
            </div>

            <div className="bg-linear-to-br from-blue-600 to-cyan-600 rounded-2xl p-8 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all">
              <Award className="w-12 h-12 mb-4" />
              <h3 className="text-xl font-bold mb-3">Especialidades</h3>
              <p className="text-blue-50 mb-1">→ Modernização de Sistemas</p>
              <p className="text-blue-50 mb-1">→ Arquitetura Escalável</p>
              <p className="text-blue-50">→ Migração de Tecnologias</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="min-h-screen flex items-center px-4 py-20 relative z-10"
      >
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Habilidades Técnicas
              </span>
            </h2>
            <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 border border-blue-100 shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
              <div className="w-16 h-16 bg-linear-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Server className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Backend</h3>
              <ul className="space-y-3">
                {[
                  "PHP (Laravel)",
                  "Node.js (NestJS)",
                  "APIs RESTful",
                  "PostgreSQL",
                  "MongoDB",
                  "Firebase",
                  "Docker",
                  "CI/CD",
                ].map((skill, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    <div className="w-2 h-2 bg-linear-to-r from-blue-500 to-cyan-500 rounded-full"></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 border border-cyan-100 shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
              <div className="w-16 h-16 bg-linear-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-gray-800">
                Frontend
              </h3>
              <ul className="space-y-3">
                {[
                  "TypeScript",
                  "React",
                  "Vue.js",
                  "Vite",
                  "React Native",
                  "Tailwind CSS",
                  "Next.js",
                  "Componentização",
                ].map((skill, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    <div className="w-2 h-2 bg-linear-to-r from-cyan-500 to-blue-500 rounded-full"></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 border border-blue-100 shadow-xl hover:shadow-2xl transition-all transform hover:scale-105">
              <div className="w-16 h-16 bg-linear-to-br from-blue-600 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Cloud className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-gray-800">
                Cloud & Arquitetura
              </h3>
              <ul className="space-y-3">
                {[
                  "Google Cloud Platform",
                  "Cloud Run",
                  "Cloud SQL",
                  "Microsserviços",
                  "Serverless",
                  "OAuth2/JWT",
                  "SSO",
                  "ADRs",
                ].map((skill, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    <div className="w-2 h-2 bg-linear-to-r from-blue-600 to-cyan-600 rounded-full"></div>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="min-h-screen flex items-center px-4 py-20 relative z-10"
      >
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Projetos & Experiência
              </span>
            </h2>
            <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-8">
            <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 border border-blue-100 shadow-xl hover:shadow-2xl transition-all">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-linear-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shrink-0 shadow-lg">
                  <Award className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Nortix Code
                  </h3>
                  <p className="text-blue-600 font-semibold mb-4">
                    Fundador & Desenvolvedor Full Stack
                  </p>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Empresa focada em desenvolvimento de soluções web e sistemas
                    corporativos, oferecendo serviços de modernização, migração
                    de sistemas legados e desenvolvimento de aplicações
                    escaláveis.
                  </p>
                  <a
                    href="https://nortixcode.com.br/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
                  >
                    Ver projeto <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 border border-cyan-100 shadow-xl hover:shadow-2xl transition-all">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-linear-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center shrink-0 shadow-lg">
                  <UserRound className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Run PSO Eventos
                  </h3>
                  <p className="text-cyan-600 font-semibold mb-4">
                    Sistema de Gestão de Eventos
                  </p>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Plataforma completa para gestão de eventos com dashboard
                    administrativo, integração com sistemas de pagamento e
                    relatórios em tempo real. Conta com mais de 3000 usuários
                    ativos.
                  </p>
                  <a
                    href="https://runpsoeventos.com.br"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-cyan-600 hover:text-cyan-700 font-medium transition-colors"
                  >
                    Ver site <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 border border-cyan-100 shadow-xl hover:shadow-2xl transition-all">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-linear-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center shrink-0 shadow-lg">
                  <PointerIcon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Biipp
                  </h3>
                  <p className="text-cyan-600 font-semibold mb-4">
                    Sistema de afiliados e direcionamento de promoções para
                    influences e blogueiros
                  </p>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Plataforma completa para gestão de produtos e canais de
                    vendas, com dashboard administrativo, integração com
                    sistemas de pagamento e relatórios em tempo real.
                  </p>
                  <a
                    href="https://www.biipp.com.br"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-cyan-600 hover:text-cyan-700 font-medium transition-colors"
                  >
                    Ver site <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 border border-blue-100 shadow-xl hover:shadow-2xl transition-all">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-linear-to-br from-blue-600 to-cyan-600 rounded-xl flex items-center justify-center shrink-0 shadow-lg">
                  <GraduationCap className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">
                    Professor de Programação
                  </h3>
                  <p className="text-blue-600 font-semibold mb-4">
                    Lógica de Programação & Desenvolvimento Web
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Ministro aulas formando novos desenvolvedores com foco em
                    boas práticas e tecnologias modernas, compartilhando
                    conhecimento e experiências do mercado.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen flex items-center px-4 py-20 relative z-10"
      >
        <div className="max-w-4xl mx-auto w-full text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Vamos Trabalhar Juntos?
            </span>
          </h2>
          <div className="w-24 h-1 bg-linear-to-r from-blue-500 to-cyan-500 mx-auto rounded-full mb-12"></div>

          <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-12 border border-blue-100 shadow-2xl">
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Estou sempre aberto a novos desafios e oportunidades. Entre em
              contato para conversarmos sobre seu projeto!
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-8">
              <a
                href="mailto:nortixcode@gmail.com.br"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-linear-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-xl transition-all transform hover:scale-105 shadow-lg text-lg font-semibold"
              >
                <Mail className="w-6 h-6" />
                Enviar E-mail
              </a>
              <a
                href="https://www.linkedin.com/in/vitor-ornelas/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-all transform hover:scale-105 shadow-lg text-lg font-semibold"
              >
                <Linkedin className="w-6 h-6" />
                LinkedIn
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=5563985154774&text&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-all transform hover:scale-105 shadow-lg text-lg font-semibold"
              >
                <Phone className="w-6 h-6" />
                Whatsapp
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-gray-600">
              <a
                href="https://github.com/Mr-Reed-11"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-blue-600 transition-colors font-medium"
              >
                <Github className="w-5 h-5" />
                github.com/Mr-Reed-11
              </a>
              <a
                href="https://nortixcode.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-cyan-600 transition-colors font-medium"
              >
                <ExternalLink className="w-5 h-5" />
                nortixcode.com.br
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-linear-to-r from-blue-600 to-cyan-600 py-8 relative z-10">
        <div className="max-w-6xl mx-auto px-4 text-center text-white">
          <p className="font-medium">
            © 2025 Vítor César Gonçalves Ornelas. Todos os direitos reservados.
          </p>
          <p className="mt-2 text-blue-100">
            Desenvolvido com React, TypeScript e Tailwind CSS
          </p>
        </div>
      </footer>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -50px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(50px, 50px) scale(1.05); }
        }
        .animate-blob {
          animation: blob 15s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
