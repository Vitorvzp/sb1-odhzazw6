import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Home, RefreshCw } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: 'Olá! Sou o assistente virtual do Vitor Emanuel. Como posso ajudá-lo hoje? Você pode perguntar sobre projetos, experiências, tecnologias ou qualquer coisa relacionada ao meu trabalho!',
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const suggestedQuestions = [
    'Qual seu projeto favorito?',
    'Como você aprendeu a programar?',
    'Quais tecnologias você domina?',
    'Conta sobre sua experiência com Python',
    'O que você está estudando atualmente?',
    'Quais são seus objetivos profissionais?',
  ];

  const responses: { [key: string]: string } = {
    'projeto favorito': 'Meu projeto favorito é o sistema de automação web que desenvolvi. Ele consegue coletar e processar dados de múltiplas fontes simultaneamente, salvando horas de trabalho manual. Foi desafiador implementar o tratamento de erros e a escalabilidade, mas o resultado final superou minhas expectativas!',
    'aprendeu programar': 'Comecei aos 8 anos, em 2017, por pura curiosidade! Encontrei alguns vídeos no YouTube sobre Python e fiquei fascinado. Desde então, sou completamente autodidata - aprendo através de documentação, projetos práticos, cursos online e muito teste e erro. A comunidade de desenvolvedores também foi fundamental no meu aprendizado.',
    'tecnologias': 'Domino principalmente Python (7+ anos), com expertise em Django, Flask, FastAPI, Pandas, NumPy e SQLAlchemy. Também trabalho com bancos SQL/NoSQL, desenvolvimento web com HTML/CSS/JS, React, TypeScript, e aplicações desktop com PyQt e Tkinter. Atualmente estou me aprofundando em IA e Machine Learning!',
    'python': 'Python é minha linguagem principal há mais de 7 anos! Comecei com scripts simples e hoje desenvolvo desde APIs REST complexas até sistemas de análise de dados. Adoro a versatilidade da linguagem - posso criar automações, aplicações web, desktop, análise de dados e até IA com a mesma ferramenta. É incrível!',
    'estudando': 'Atualmente estou focado em Inteligência Artificial e Machine Learning! Estou aprendendo TensorFlow, aprofundando conhecimentos em algoritmos de ML, e explorando como aplicar IA em projetos reais. Também estou estudando arquiteturas de software mais avançadas e padrões de design para escrever código ainda melhor.',
    'objetivos': 'Meu objetivo é me tornar um desenvolvedor fullstack especializado em IA e automação. Quero trabalhar em projetos que fazem diferença na vida das pessoas, contribuir com a comunidade open source, e talvez no futuro criar minha própria startup de tecnologia. O importante é nunca parar de aprender e evoluir!',
    'default': 'Essa é uma pergunta interessante! Embora eu seja um chatbot simples, posso te contar que o Vitor tem 15 anos, mora em Maceió-AL, programa há 7+ anos e é especialista em Python, automação e Data Science. Ele está sempre aberto para conversar sobre tecnologia, projetos e novas oportunidades de aprendizado!'
  };

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    for (const [key, response] of Object.entries(responses)) {
      if (key !== 'default' && message.includes(key)) {
        return response;
      }
    }
    
    return responses.default;
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getBotResponse(inputMessage),
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleSuggestedQuestion = (question: string) => {
    setInputMessage(question);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const resetChat = () => {
    setMessages([
      {
        id: 1,
        text: 'Olá! Sou o assistente virtual do Vitor Emanuel. Como posso ajudá-lo hoje? Você pode perguntar sobre projetos, experiências, tecnologias ou qualquer coisa relacionada ao meu trabalho!',
        sender: 'bot',
        timestamp: new Date()
      }
    ]);
  };

  return (
    <div className="pt-20 min-h-screen flex flex-col">
      {/* Header */}
      <section className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto text-center fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 heading-responsive">
            Chat com <span className="text-green-400">Vitor Emanuel</span>
          </h1>
          <p className="text-gray-300 text-lg">
            Converse comigo através deste chatbot! Pergunte sobre projetos, experiências ou tecnologias.
          </p>
        </div>
      </section>

      {/* Chat Container */}
      <div className="flex-1 container mx-auto px-4 pb-8">
        <div className="max-w-4xl mx-auto glass rounded-3xl flex flex-col h-[600px]">
          {/* Chat Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center">
                <Bot className="text-white" size={20} />
              </div>
              <div>
                <h3 className="text-white font-semibold">Assistente Virtual</h3>
                <p className="text-green-400 text-sm">Online agora</p>
              </div>
            </div>
            <button
              onClick={resetChat}
              className="p-2 glass-dark rounded-lg hover:bg-green-400/10 transition-colors duration-300"
              title="Reiniciar conversa"
            >
              <RefreshCw className="text-gray-400 hover:text-green-400" size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} slide-up`}
              >
                <div className={`flex items-start space-x-3 max-w-xs lg:max-w-md ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    message.sender === 'user' 
                      ? 'bg-blue-500' 
                      : 'bg-gradient-to-r from-green-500 to-green-600'
                  }`}>
                    {message.sender === 'user' ? 
                      <User className="text-white" size={16} /> : 
                      <Bot className="text-white" size={16} />
                    }
                  </div>
                  <div className={`p-4 rounded-2xl ${
                    message.sender === 'user'
                      ? 'bg-blue-500 text-white'
                      : 'glass-dark text-gray-200'
                  }`}>
                    <p className="text-sm leading-relaxed">{message.text}</p>
                    <p className={`text-xs mt-2 ${
                      message.sender === 'user' ? 'text-blue-100' : 'text-gray-400'
                    }`}>
                      {message.timestamp.toLocaleTimeString('pt-BR', { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start slide-up">
                <div className="flex items-start space-x-3 max-w-xs lg:max-w-md">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center">
                    <Bot className="text-white" size={16} />
                  </div>
                  <div className="glass-dark p-4 rounded-2xl">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Questions */}
          {messages.length === 1 && (
            <div className="p-6 border-t border-white/10">
              <p className="text-gray-400 text-sm mb-3">Sugestões de perguntas:</p>
              <div className="flex flex-wrap gap-2">
                {suggestedQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleSuggestedQuestion(question)}
                    className="px-3 py-2 bg-green-400/10 border border-green-400/30 rounded-lg text-green-300 text-sm hover:bg-green-400/20 hover:border-green-400/50 transition-all duration-300"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-6 border-t border-white/10">
            <div className="flex space-x-4">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Digite sua mensagem..."
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-green-400/50 focus:bg-white/10 transition-all duration-300"
                  disabled={isTyping}
                />
              </div>
              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim() || isTyping}
                className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 disabled:from-gray-600 disabled:to-gray-700 text-white rounded-xl transition-all duration-300 transform hover:scale-105 disabled:scale-100 disabled:cursor-not-allowed"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Button */}
      <div className="container mx-auto px-4 pb-8">
        <div className="max-w-4xl mx-auto text-center">
          <button
            onClick={() => window.location.reload()}
            className="inline-flex items-center space-x-2 px-6 py-3 glass hover:bg-green-400/10 text-green-400 rounded-lg transition-all duration-300 hover:scale-105"
          >
            <Home size={18} />
            <span>Voltar ao Início</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;