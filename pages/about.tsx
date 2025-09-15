import React, { useState } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import { useTheme } from '../contexts/ThemeContext';

const About: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const { isDarkMode } = useTheme();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
      setEmail('');
      // Simular envio (sem backend real)
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <>
      <Head>
        <title>Sobre - NERDINO</title>
        <meta name="description" content="Conheça o NERDINO - sua plataforma de vagas tech em desenvolvimento" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div style={{
          maxWidth: '896px',
          margin: '0 auto',
          padding: '48px 16px',
          transition: 'all 0.3s ease'
        }}>
          {/* Hero Section */}
          <div style={{
            textAlign: 'center',
            marginBottom: '48px'
          }}>
            <h1 style={{
              fontSize: '36px',
              fontWeight: 'bold',
              color: isDarkMode ? '#f9fafb' : '#111827',
              marginBottom: '16px',
              transition: 'color 0.3s ease'
            }}>
              Sobre o NERDINO
            </h1>
            <p style={{
              fontSize: '20px',
              color: isDarkMode ? '#d1d5db' : '#6b7280',
              transition: 'color 0.3s ease'
            }}>
              A plataforma que está revolucionando a busca por vagas de tecnologia
            </p>
          </div>

          {/* Main Content */}
          <div style={{
            backgroundColor: isDarkMode ? '#374151' : '#ffffff',
            borderRadius: '12px',
            boxShadow: isDarkMode ? '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)' : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            padding: '32px',
            marginBottom: '32px',
            transition: 'all 0.3s ease'
          }}>
            <div>
              <h2 style={{
                fontSize: '24px',
                fontWeight: 'bold',
                color: isDarkMode ? '#f9fafb' : '#111827',
                marginBottom: '24px',
                transition: 'color 0.3s ease'
              }}>
                Em Desenvolvimento
              </h2>
              
              <p style={{
                color: isDarkMode ? '#e5e7eb' : '#374151',
                marginBottom: '24px',
                lineHeight: '1.6',
                transition: 'color 0.3s ease'
              }}>
                O <strong>NERDINO</strong> está atualmente em fase de testes e desenvolvimento. 
                Nossa missão é criar a melhor plataforma para conectar profissionais de 
                tecnologia com as melhores oportunidades de trabalho.
              </p>

              <h3 style={{
                fontSize: '20px',
                fontWeight: '600',
                color: isDarkMode ? '#f9fafb' : '#111827',
                marginBottom: '16px',
                transition: 'color 0.3s ease'
              }}>
                O que estamos construindo:
              </h3>
              
              <ul style={{
                listStyle: 'disc',
                listStylePosition: 'inside',
                color: isDarkMode ? '#e5e7eb' : '#374151',
                marginBottom: '24px',
                lineHeight: '1.6',
                transition: 'color 0.3s ease'
              }}>
                <li style={{ marginBottom: '8px' }}>Busca inteligente por vagas de tecnologia</li>
                <li style={{ marginBottom: '8px' }}>Filtros avançados por localização, experiência e stack</li>
                <li style={{ marginBottom: '8px' }}>Alertas personalizados de novas vagas</li>
                <li style={{ marginBottom: '8px' }}>Perfil profissional otimizado</li>
                <li style={{ marginBottom: '8px' }}>Integração com principais plataformas de recrutamento</li>
                <li style={{ marginBottom: '8px' }}>Comunidade de desenvolvedores</li>
              </ul>


              <div style={{
                backgroundColor: isDarkMode ? '#451a03' : '#fef3c7',
                border: isDarkMode ? '1px solid #92400e' : '1px solid #f59e0b',
                borderRadius: '8px',
                padding: '24px',
                marginBottom: '32px',
                transition: 'all 0.3s ease'
              }}>
                <div style={{ display: 'flex' }}>
                  <div style={{ flexShrink: 0 }}>
                    <svg style={{ width: '20px', height: '20px', color: '#f59e0b' }} viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div style={{ marginLeft: '12px' }}>
                    <h3 style={{
                      fontSize: '14px',
                      fontWeight: '500',
                      color: isDarkMode ? '#fbbf24' : '#92400e',
                      margin: '0',
                      transition: 'color 0.3s ease'
                    }}>
                      Versão Beta
                    </h3>
                    <div style={{ marginTop: '8px' }}>
                      <p style={{
                        fontSize: '14px',
                        color: isDarkMode ? '#fcd34d' : '#b45309',
                        margin: '0',
                        lineHeight: '1.5',
                        transition: 'color 0.3s ease'
                      }}>
                        Esta é uma versão de teste do NERDINO. Algumas funcionalidades 
                        podem não estar totalmente implementadas ou podem apresentar instabilidades.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interest Form */}
          <div style={{
            backgroundColor: isDarkMode ? '#1e1b4b' : '#e0e7ff',
            borderRadius: '12px',
            padding: '32px',
            transition: 'all 0.3s ease'
          }}>
            <div style={{ textAlign: 'center' }}>
              <h2 style={{
                fontSize: '24px',
                fontWeight: 'bold',
                color: isDarkMode ? '#f9fafb' : '#111827',
                marginBottom: '16px',
                transition: 'color 0.3s ease'
              }}>
                Quer ser notificado do lançamento?
              </h2>
              <p style={{
                color: isDarkMode ? '#d1d5db' : '#6b7280',
                marginBottom: '24px',
                transition: 'color 0.3s ease'
              }}>
                Cadastre seu email para receber atualizações sobre o desenvolvimento 
                e ser um dos primeiros a testar as novas funcionalidades!
              </p>

              {submitted ? (
                <div style={{
                  backgroundColor: isDarkMode ? '#064e3b' : '#d1fae5',
                  border: isDarkMode ? '1px solid #047857' : '1px solid #10b981',
                  borderRadius: '8px',
                  padding: '16px',
                  transition: 'all 0.3s ease'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg style={{ width: '20px', height: '20px', color: '#10b981', marginRight: '8px' }} viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span style={{
                      color: isDarkMode ? '#6ee7b7' : '#065f46',
                      fontWeight: '500',
                      transition: 'color 0.3s ease'
                    }}>
                      Obrigado! Você será notificado em breve.
                    </span>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ maxWidth: '448px', margin: '0 auto' }}>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Seu melhor email"
                      required
                      style={{
                        flex: 1,
                        padding: '12px 16px',
                        border: isDarkMode ? '1px solid #4b5563' : '1px solid #d1d5db',
                        borderRadius: '8px',
                        backgroundColor: isDarkMode ? '#1f2937' : '#ffffff',
                        color: isDarkMode ? '#f9fafb' : '#111827',
                        fontSize: '16px',
                        transition: 'all 0.3s ease'
                      }}
                    />
                    <button
                      type="submit"
                      style={{
                        padding: '12px 24px',
                        backgroundColor: '#4f46e5',
                        color: 'white',
                        fontWeight: '500',
                        borderRadius: '8px',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: '16px',
                        transition: 'background-color 0.2s'
                      }}
                      onMouseEnter={(e) => {
                        (e.target as HTMLElement).style.backgroundColor = '#4338ca';
                      }}
                      onMouseLeave={(e) => {
                        (e.target as HTMLElement).style.backgroundColor = '#4f46e5';
                      }}
                    >
                      Cadastrar
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default About;
