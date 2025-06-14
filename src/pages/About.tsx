import React from 'react';
import { GraduationCap, Target, Code, Brain, Database, Globe } from 'lucide-react';

const About: React.FC = () => {
  const journey = [
    {
      year: '2017',
      title: 'Início da Jornada',
      description: 'Comecei a aprender programação aos 8 anos, começando com Python básico.',
      icon: Code
    },
    {
      year: '2019',
      title: 'Primeiros Projetos',
      description: 'Desenvolvi meus primeiros projetos de automação e pequenas aplicações desktop.',
      icon: Target
    },
    {
      year: '2021',
      title: 'Web Development',
      description: 'Expandiu conhecimentos para desenvolvimento web com HTML, CSS, JavaScript e frameworks Python.',
      icon: Globe
    },
    {
      year: '2023',
      title: 'Data Science & IA',
      description: 'Mergulhei no mundo da ciência de dados e inteligência artificial.',
      icon: Brain
    },
    {
      year: '2024',
      title: 'Especialização',
      description: 'Focando em soluções fullstack e aplicações de IA em projetos reais.',
      icon: Database
    }
  ];

  const characteristics = [
    {
      title: 'Autodidata',
      description: 'Aprendo constantemente através de cursos, documentações, projetos práticos e experimentação.',
      icon: '🎓'
    },
    {
      title: 'Curioso',
      description: 'Sempre questionando como as coisas funcionam e buscando entender tecnologias emergentes.',
      icon: '🔍'
    },
    {
      title: 'Comunicativo',
      description: 'Facilidade para explicar conceitos técnicos e trabalhar em equipe de forma colaborativa.',
      icon: '💬'
    },
    {
      title: 'Comprometido',
      description: 'Dedicação total aos projetos, sempre buscando entregar soluções de qualidade.',
      icon: '🎯'
    }
  ];

  const expertise = [
    {
      category: 'Backend Development',
      skills: ['Python', 'Django', 'Flask', 'FastAPI', 'SQLAlchemy', 'RESTful APIs'],
      icon: Database
    },
    {
      category: 'Data Science & IA',
      skills: ['Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow', 'Machine Learning', 'Data Analysis'],
      icon: Brain
    },
    {
      category: 'Frontend & Mobile',
      skills: ['HTML/CSS/JS', 'React', 'TypeScript', 'Kivy', 'PyQt', 'Tkinter'],
      icon: Globe
    }
  ];

  return (
    <div className="pt-20 min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center fade-in">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 heading-responsive">
            Mais Sobre <span className="text-green-400">Mim</span>
          </h1>
          <div className="glass rounded-3xl p-8 text-left">
            <p className="text-lg text-gray-200 leading-relaxed mb-6">
              Sou o <span className="text-green-400 font-semibold">Vitor Emanuel</span>, jovem desenvolvedor de 
              <span className="text-green-400 font-semibold"> 15 anos</span> que aprendeu programação por conta própria desde cedo.
            </p>
            <p className="text-lg text-gray-200 leading-relaxed mb-6">
              Tenho domínio em <span className="text-green-400 font-semibold">Python</span>, com foco em automações, APIs, 
              manipulação de dados, e frameworks como <span className="text-green-400 font-semibold">Flask</span>, 
              <span className="text-green-400 font-semibold"> Django</span>, <span className="text-green-400 font-semibold">FastAPI</span>, 
              além de bibliotecas como <span className="text-green-400 font-semibold">Pandas</span>, 
              <span className="text-green-400 font-semibold"> Requests</span>, <span className="text-green-400 font-semibold">Tkinter</span>.
            </p>
            <p className="text-lg text-gray-200 leading-relaxed mb-6">
              Também atuo com desenvolvimento web, desktop e mobile com <span className="text-green-400 font-semibold">Kivy</span>, 
              <span className="text-green-400 font-semibold"> PyQt</span>, <span className="text-green-400 font-semibold">HTML/CSS/JS</span>.
            </p>
            <p className="text-lg text-gray-200 leading-relaxed">
              Atualmente estudo <span className="text-green-400 font-semibold">Inteligência Artificial</span> e procuro aplicar 
              IA em projetos reais. Meu objetivo é atuar com IA, automação e desenvolvimento fullstack, contribuindo com 
              <span className="text-green-400 font-semibold"> soluções inovadoras e funcionais</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Characteristics */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12 fade-in">
            Características Pessoais
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {characteristics.map((char, index) => (
              <div 
                key={char.title}
                className="glass rounded-2xl p-6 text-center slide-up hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-4">{char.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{char.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{char.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12 fade-in">
            Minha Jornada
          </h2>
          <div className="space-y-8">
            {journey.map((item, index) => {
              const IconComponent = item.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={item.year}
                  className={`flex items-center ${isEven ? 'flex-row' : 'flex-row-reverse'} slide-up`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`flex-1 ${isEven ? 'pr-8' : 'pl-8'}`}>
                    <div className={`glass rounded-2xl p-6 ${isEven ? 'text-right' : 'text-left'}`}>
                      <div className="flex items-center justify-center w-12 h-12 bg-green-500 rounded-full mx-auto mb-4">
                        <IconComponent className="text-white" size={20} />
                      </div>
                      <span className="text-green-400 font-bold text-lg">{item.year}</span>
                      <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>
                  
                  <div className="w-4 h-4 bg-green-500 rounded-full border-4 border-green-300 z-10 relative">
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-16 bg-green-400 -z-10"></div>
                  </div>
                  
                  <div className="flex-1"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12 fade-in">
            Áreas de Expertise
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {expertise.map((area, index) => {
              const IconComponent = area.icon;
              return (
                <div 
                  key={area.category}
                  className="glass rounded-2xl p-8 scale-in hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full mx-auto mb-6">
                    <IconComponent className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-semibold text-white text-center mb-6">{area.category}</h3>
                  <div className="space-y-3">
                    {area.skills.map((skill) => (
                      <div key={skill} className="flex items-center">
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                        <span className="text-gray-300">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-3xl p-12 text-center scale-in">
            <GraduationCap className="text-green-400 mx-auto mb-6" size={48} />
            <h2 className="text-3xl font-bold text-white mb-6">
              Objetivos e Visão
            </h2>
            <p className="text-lg text-gray-200 leading-relaxed mb-8">
              Tenho facilidade em trabalhar com <span className="text-green-400 font-semibold">Git</span>, 
              bancos <span className="text-green-400 font-semibold">SQL/NoSQL</span> e novas tecnologias. 
              Sou autodidata, aprendo com cursos, vídeos, projetos pessoais e desafios próprios.
            </p>
            <p className="text-xl text-green-400 font-semibold">
              "Sempre buscando evoluir tecnicamente e pessoalmente, focando em soluções que fazem a diferença."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;