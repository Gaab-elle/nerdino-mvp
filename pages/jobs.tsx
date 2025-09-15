import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import { useTheme } from '../contexts/ThemeContext';

const Jobs: React.FC = () => {
  const { isDarkMode } = useTheme();

  return (
    <>
      <Head>
        <title>Vagas - NERDINO</title>
        <meta name="description" content="Encontre as melhores vagas de tecnologia no NERDINO - agregador de oportunidades" />
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
              Vagas de Tecnologia
            </h1>
            <p style={{
              fontSize: '20px',
              color: isDarkMode ? '#d1d5db' : '#6b7280',
              transition: 'color 0.3s ease'
            }}>
              Encontre as melhores oportunidades em tecnologia em um só lugar
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
                Como Funciona o NERDINO
              </h2>
              
              <p style={{
                color: isDarkMode ? '#e5e7eb' : '#374151',
                marginBottom: '24px',
                lineHeight: '1.6',
                transition: 'color 0.3s ease'
              }}>
                O <strong>NERDINO</strong> é um <strong>agregador de vagas</strong> que centraliza oportunidades 
                de tecnologia de diversas plataformas em um só lugar. Nossa missão é facilitar sua busca 
                por oportunidades, economizando tempo e conectando você com as melhores vagas do mercado.
              </p>

              <h3 style={{
                fontSize: '20px',
                fontWeight: '600',
                color: isDarkMode ? '#f9fafb' : '#111827',
                marginBottom: '16px',
                transition: 'color 0.3s ease'
              }}>
                Fontes das Vagas
              </h3>
              
              <p style={{
                color: isDarkMode ? '#e5e7eb' : '#374151',
                marginBottom: '20px',
                lineHeight: '1.6',
                transition: 'color 0.3s ease'
              }}>
                <strong>Importante:</strong> O NERDINO não oferece vagas próprias. Todas as oportunidades 
                listadas são captadas de sites externos especializados em recrutamento e tecnologia.
              </p>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '16px',
                marginBottom: '32px'
              }}>
                {[
                  { name: 'InfoJobs', description: 'Portal de empregos líder no Brasil' },
                  { name: 'LinkedIn', description: 'Rede profissional global' },
                  { name: 'Catho', description: 'Plataforma de vagas e currículos' },
                  { name: 'Jooble', description: 'Motor de busca de empregos' }
                ].map((source) => (
                  <div key={source.name} style={{
                    backgroundColor: isDarkMode ? '#4f46e5' : '#e0e7ff',
                    color: isDarkMode ? '#ffffff' : '#4f46e5',
                    padding: '16px',
                    borderRadius: '8px',
                    textAlign: 'center',
                    transition: 'all 0.3s ease'
                  }}>
                    <h4 style={{
                      fontSize: '16px',
                      fontWeight: '600',
                      margin: '0 0 8px 0',
                      color: isDarkMode ? '#ffffff' : '#4f46e5'
                    }}>
                      {source.name}
                    </h4>
                    <p style={{
                      fontSize: '14px',
                      margin: '0',
                      color: isDarkMode ? '#e0e7ff' : '#6366f1',
                      lineHeight: '1.4'
                    }}>
                      {source.description}
                    </p>
                  </div>
                ))}
              </div>

              <h3 style={{
                fontSize: '20px',
                fontWeight: '600',
                color: isDarkMode ? '#f9fafb' : '#111827',
                marginBottom: '16px',
                transition: 'color 0.3s ease'
              }}>
                Vantagens do NERDINO
              </h3>
              
              <ul style={{
                listStyle: 'disc',
                listStylePosition: 'inside',
                color: isDarkMode ? '#e5e7eb' : '#374151',
                marginBottom: '24px',
                lineHeight: '1.6',
                transition: 'color 0.3s ease'
              }}>
                <li style={{ marginBottom: '8px' }}>Busca centralizada em múltiplas plataformas</li>
                <li style={{ marginBottom: '8px' }}>Filtros avançados por tecnologia e localização</li>
                <li style={{ marginBottom: '8px' }}>Interface limpa e fácil de usar</li>
                <li style={{ marginBottom: '8px' }}>Resultados atualizados em tempo real</li>
                <li style={{ marginBottom: '8px' }}>Economia de tempo na busca por vagas</li>
                <li style={{ marginBottom: '8px' }}>Acesso direto às vagas originais</li>
              </ul>

              <div style={{
                backgroundColor: isDarkMode ? '#064e3b' : '#d1fae5',
                border: isDarkMode ? '1px solid #047857' : '1px solid #10b981',
                borderRadius: '8px',
                padding: '20px',
                marginBottom: '24px',
                transition: 'all 0.3s ease'
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <div style={{ flexShrink: 0, marginRight: '12px' }}>
                    <svg style={{ width: '20px', height: '20px', color: '#10b981' }} viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 style={{
                      fontSize: '16px',
                      fontWeight: '600',
                      color: isDarkMode ? '#6ee7b7' : '#065f46',
                      margin: '0 0 8px 0',
                      transition: 'color 0.3s ease'
                    }}>
                      Como Funciona
                    </h4>
                    <p style={{
                      fontSize: '14px',
                      color: isDarkMode ? '#a7f3d0' : '#047857',
                      margin: '0',
                      lineHeight: '1.5',
                      transition: 'color 0.3s ease'
                    }}>
                      Quando você clica em &quot;Ver Vaga&quot;, é redirecionado diretamente para o site original 
                      onde a vaga foi publicada. Lá você pode se candidatar seguindo o processo normal 
                      de cada plataforma.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div style={{
            backgroundColor: isDarkMode ? '#1e1b4b' : '#e0e7ff',
            borderRadius: '12px',
            padding: '32px',
            textAlign: 'center',
            transition: 'all 0.3s ease'
          }}>
            <h2 style={{
              fontSize: '24px',
              fontWeight: 'bold',
              color: isDarkMode ? '#f9fafb' : '#111827',
              marginBottom: '16px',
              transition: 'color 0.3s ease'
            }}>
              Pronto para Encontrar sua Vaga Ideal?
            </h2>
            <p style={{
              color: isDarkMode ? '#d1d5db' : '#6b7280',
              marginBottom: '24px',
              transition: 'color 0.3s ease'
            }}>
              Volte à página inicial e comece sua busca por oportunidades em tecnologia!
            </p>
            <Link
              href="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 24px',
                backgroundColor: '#4f46e5',
                color: 'white',
                fontWeight: '500',
                borderRadius: '8px',
                textDecoration: 'none',
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
              Buscar Vagas
              <svg style={{ width: '16px', height: '16px' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </Link>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Jobs;
