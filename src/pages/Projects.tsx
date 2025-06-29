import React from 'react';
import { ExternalLink, Github, Code2, Database, Bot, Globe, Zap, Brain } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'Sistema de Automação Web',
      description: 'Sistema de Automação de coleta de dados de empresas para envio de mensagens com trafego orgânico, integrado com banco de dados e envio de database via discord bot.',
      technologies: ['Python', 'Google', 'SQLModel', 'SQL', 'Discord'],
      category: 'Automação',
      icon: Zap,
      githubUrl: 'https://github.com/Vitorvzp/Scrpr',
      liveUrl: 'https://github.com/Vitorvzp/Scrpr',
      color: 'from-blue-500 to-purple-600'
    },
    {
      id: 2,
      title: 'API de Banco de Dados com Flask',
      description: 'API para busca de usuários, funcionários ou produtos de um banco de dados com 300 Mil Usuários, 50 Mil Funcionários, 5 Mil Produtos, com envio de log de IP e localização triangulada a cada novo acesso via discord bot.',
      technologies: ['Python', 'Flask', 'SQLAlchemy', 'SQL'],
      category: 'Backend',
      icon: Database,
      githubUrl: 'https://github.com/Vitorvzp/API',
      liveUrl: 'https://github.com/Vitorvzp/API',
      color: 'from-green-500 to-teal-600'
    },
    {
      id: 3,
      title: 'Discord Bot Multi-Funções',
      description: 'Bot de discord para multifunções integrado com ia para conversa, comandos de criptografia e descriptografia privadas (Criada por Mim) de texto.',
      technologies: ['Python', 'Discord', 'SQL', 'SQLModel', 'Google'],
      category: 'Data Science',
      icon: Brain,
      githubUrl: 'https://github.com/Vitorvzp/DiscordBot',
      liveUrl: 'https://github.com/Vitorvzp/DiscordBot',
      color: 'from-orange-500 to-red-600'
    },
    {
      id: 4,
      title: 'Portifólio Integrado com Chatobot',
      description: 'Portifólio integrado com chatbot personalizado que conhece cada detalhe sobre mim, e com sistema de pesquisa em base com meus dados.',
      technologies: ['Python', 'JavaScript', 'HTML/CSS', 'Google', 'Typescript'],
      category: 'IA & Machine Learning',
      icon: Bot,
      githubUrl: 'https://github.com/Vitorvzp/sb1-odhzazw6',
      liveUrl: 'https://github.com/Vitorvzp/sb1-odhzazw6',
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: 5,
      title: 'Cardápio Escolar Responsivo',
      description: 'Cardápio virtual completo para trabalho escolar, com carrinho de compras, sistema de pagamento (Teste)',
      technologies: ['JavaScript', 'HTML/CSS'],
      category: 'Web',
      icon: Globe,
      githubUrl: 'https://github.com/Vitorvzp/Gourmet',
      liveUrl: 'https://github.com/Vitorvzp/Gourmet',
      color: 'from-teal-500 to-green-600'
    }
  ];

  const categories = ['Todos', 'Automação', 'Backend', 'Data Science', 'IA & Machine Learning', 'Desktop', 'Web'];
  const [selectedCategory, setSelectedCategory] = React.useState('Todos');

  const filteredProjects = selectedCategory === 'Todos' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 heading-responsive">
            Meus <span className="text-green-400">Projetos</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Uma seleção dos projetos que desenvolvi ao longo da minha jornada como programador.
            Cada projeto representa um desafio superado e conhecimento adquirido.
          </p>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="container mx-auto px-4 pb-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-green-500 to-green-600 text-white shadow-lg shadow-green-500/25 scale-105'
                    : 'glass text-gray-300 hover:text-green-400 hover:bg-green-400/10 hover:border-green-400/30'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="container mx-auto px-4 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <div
                  key={project.id}
                  className="glass rounded-2xl overflow-hidden hover:scale-105 hover:shadow-2xl transition-all duration-500 group slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Project Header */}
                  <div className={`h-32 bg-gradient-to-r ${project.color} relative overflow-hidden`}>
                    <div className="absolute inset-0 background-animation opacity-20"></div>
                    <div className="relative z-10 h-full flex items-center justify-center">
                      <IconComponent className="text-white" size={40} />
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="text-xs text-white/80 bg-white/20 px-2 py-1 rounded-full backdrop-blur-sm">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-green-400/10 border border-green-400/30 rounded-full text-green-300 text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-all duration-300 hover:scale-105"
                      >
                        <Github size={16} />
                        <span className="text-sm font-medium">Código</span>
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-lg transition-all duration-300 hover:scale-105"
                      >
                        <ExternalLink size={16} />
                        <span className="text-sm font-medium">Demo</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* GitHub CTA */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-3xl p-12 text-center scale-in">
            <Github className="text-green-400 mx-auto mb-6" size={48} />
            <h2 className="text-3xl font-bold text-white mb-6">
              Mais Projetos no GitHub
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Explore os repositórios no meu GitHub, incluindo projetos pessoais, 
              e experimentos com novas tecnologias.
            </p>
            <a
              href="https://github.com/Vitorvzp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white font-semibold rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <Github size={20} />
              Ver Perfil Completo
              <ExternalLink size={16} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;