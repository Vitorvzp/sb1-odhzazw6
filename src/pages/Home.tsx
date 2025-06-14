import React from 'react';
import { MapPin, Calendar, Code2, Database, Bot } from 'lucide-react';

const Home: React.FC = () => {
  const skills = [
    { name: 'Python', level: 95, icon: '🐍' },
    { name: 'Data Science', level: 85, icon: '📊' },
    { name: 'Automação', level: 90, icon: '🤖' },
    { name: 'Bancos de Dados', level: 80, icon: '💾' },
    { name: 'Web Development', level: 75, icon: '🌐' },
    { name: 'IA & Machine Learning', level: 70, icon: '🧠' },
  ];

  const technologies = [
    'Python', 'Django', 'Flask', 'FastAPI', 'Pandas', 'NumPy',
    'SQLAlchemy', 'PostgreSQL', 'MongoDB', 'React', 'TypeScript',
    'Git', 'Docker', 'AWS', 'Tkinter', 'PyQt', 'Kivy'
  ];

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center fade-in">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full glass p-1">
              <div className="w-full h-full rounded-full bg-gradient-to-r from-green-400 to-green-600 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">VER</span>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 heading-responsive">
              Vitor Emanuel
              <span className="block text-green-400 text-3xl md:text-4xl font-medium mt-2">
                Oliveira Rodrigues
              </span>
            </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="glass rounded-2xl p-6 slide-up">
              <div className="flex items-center justify-center mb-4">
                <Calendar className="text-green-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Idade</h3>
              <p className="text-gray-300">15 anos</p>
            </div>

            <div className="glass rounded-2xl p-6 slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="flex items-center justify-center mb-4">
                <MapPin className="text-green-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Localização</h3>
              <p className="text-gray-300">Maceió, Alagoas</p>
            </div>

            <div className="glass rounded-2xl p-6 slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center justify-center mb-4">
                <Code2 className="text-green-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Experiência</h3>
              <p className="text-gray-300">7+ anos</p>
            </div>
          </div>

          <div className="glass rounded-3xl p-8 text-left scale-in" style={{ animationDelay: '0.3s' }}>
            <p className="text-lg text-gray-200 leading-relaxed">
              Estudo programação há mais de <span className="text-green-400 font-semibold">7 anos</span>, 
              com foco em <span className="text-green-400 font-semibold">Python</span>, 
              <span className="text-green-400 font-semibold"> Data Science</span>, 
              bancos de dados e automações. Sou <span className="text-green-400 font-semibold">autodidata</span>, 
              curioso, comunicativo e comprometido, buscando sempre evoluir tecnicamente e pessoalmente.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12 fade-in">
            Especialidades
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {skills.map((skill, index) => (
              <div 
                key={skill.name} 
                className="glass rounded-2xl p-6 slide-up hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">{skill.icon}</span>
                  <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                  <div 
                    className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <p className="text-gray-300 text-sm">{skill.level}% de proficiência</p>
              </div>
            ))}
          </div>

          {/* Technologies */}
          <div className="glass rounded-3xl p-8 scale-in">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Tecnologias & Ferramentas
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {technologies.map((tech, index) => (
                <span 
                  key={tech}
                  className="px-4 py-2 bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-400/30 rounded-full text-green-300 font-medium hover:bg-green-500/30 hover:border-green-400/50 transition-all duration-300 cursor-default"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="glass rounded-3xl p-12 scale-in">
            <h2 className="text-3xl font-bold text-white mb-6">
              Pronto para colaborar?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Estou sempre aberto a novos desafios e oportunidades de aprendizado.
              Vamos conversar sobre tecnologia, projetos e inovação!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-lg hover:from-green-600 hover:to-green-700 transform hover:scale-105 transition-all duration-300 shadow-lg shadow-green-500/25">
                Ver Projetos
              </button>
              <button className="px-8 py-3 glass border-green-400/50 text-green-400 font-semibold rounded-lg hover:bg-green-400/10 transform hover:scale-105 transition-all duration-300">
                Conversar no Chatbot
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;