import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import JobCard from '../components/JobCard';
import { useTheme } from '../contexts/ThemeContext';

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  snippet: string;
  link: string;
}

const Home: React.FC = () => {
  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('');
  const [jobType, setJobType] = useState('');
  const [experience, setExperience] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const jobsPerPage = 21;
  const { isDarkMode } = useTheme();

  const handleSearch = async (e: React.FormEvent, page: number = 1) => {
    e.preventDefault();
    
    if (!keyword.trim() && !location.trim()) {
      setError('Digite pelo menos uma palavra-chave ou localização');
      return;
    }

    setLoading(true);
    setError('');
    setJobs([]);
    setCurrentPage(page);

    try {
      const params = new URLSearchParams();
      if (keyword.trim()) params.append('keyword', keyword.trim());
      if (location.trim()) params.append('location', location.trim());
      if (jobType.trim()) params.append('jobType', jobType.trim());
      if (experience.trim()) params.append('experience', experience.trim());
      params.append('page', page.toString());

      const response = await fetch(`/api/jobs?${params.toString()}`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Erro ao buscar vagas');
      }

      setJobs(data.jobs || []);
      setTotalPages(data.totalPages || Math.ceil((data.total || data.jobs?.length || 0) / jobsPerPage));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao buscar vagas');
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
      handleSearch({ preventDefault: () => {} } as React.FormEvent, newPage);
    }
  };

  // Busca inicial automática
  useEffect(() => {
    const initialSearch = async () => {
      setKeyword('desenvolvedor');
      setLocation('');
      setLoading(true);
      setError('');

      try {
        const response = await fetch('/api/jobs?keyword=desenvolvedor&page=1');
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || 'Erro ao buscar vagas');
        }

        setJobs(data.jobs || []);
        setTotalPages(data.totalPages || Math.ceil((data.total || data.jobs?.length || 0) / jobsPerPage));
        setCurrentPage(1);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro ao buscar vagas');
      } finally {
        setLoading(false);
      }
    };

    initialSearch();
  }, []);

  return (
    <>
      <Head>
        <title>NERDINO - Vagas Tech</title>
        <meta name="description" content="Encontre as melhores vagas de tecnologia em um só lugar" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <style jsx>{`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}</style>
      </Head>

      <Layout>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Title Section */}
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h1 style={{ 
              fontSize: '36px', 
              fontWeight: 'bold', 
              marginBottom: '16px',
              color: isDarkMode ? '#f9fafb' : '#1f2937',
              transition: 'color 0.3s ease'
            }}>
              Encontre sua vaga tech ideal
            </h1>
            <p style={{ 
              fontSize: '20px', 
              color: isDarkMode ? '#d1d5db' : '#6b7280',
              maxWidth: '600px',
              margin: '0 auto',
              transition: 'color 0.3s ease'
            }}>
              Busque entre milhares de oportunidades em tecnologia no NERDINO.
            </p>
          </div>

          {/* Search Box */}
          <div style={{
            backgroundColor: isDarkMode ? '#374151' : 'white',
            borderRadius: '16px',
            boxShadow: isDarkMode ? '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 2px 4px -1px rgba(0, 0, 0, 0.2)' : '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            padding: '24px',
            marginTop: '32px',
            maxWidth: '672px',
            marginLeft: 'auto',
            marginRight: 'auto',
            transition: 'all 0.3s ease'
          }}>
            <form onSubmit={handleSearch} style={{ display: 'grid', gap: '16px' }}>
              <input
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="Palavra-chave (Ex: React, Python...)"
                style={{
                  border: isDarkMode ? '1px solid #4b5563' : '1px solid #d1d5db',
                  borderRadius: '12px',
                  padding: '12px',
                  width: '100%',
                  boxSizing: 'border-box',
                  boxShadow: isDarkMode ? '0 1px 2px 0 rgba(0, 0, 0, 0.2)' : '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                  backgroundColor: isDarkMode ? '#1f2937' : 'white',
                  color: isDarkMode ? '#f9fafb' : '#1f2937',
                  transition: 'all 0.3s ease'
                }}
              />
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Localização (Ex: São Paulo, Remoto...)"
                style={{
                  border: isDarkMode ? '1px solid #4b5563' : '1px solid #d1d5db',
                  borderRadius: '12px',
                  padding: '12px',
                  width: '100%',
                  boxSizing: 'border-box',
                  boxShadow: isDarkMode ? '0 1px 2px 0 rgba(0, 0, 0, 0.2)' : '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
                  backgroundColor: isDarkMode ? '#1f2937' : 'white',
                  color: isDarkMode ? '#f9fafb' : '#1f2937',
                  transition: 'all 0.3s ease'
                }}
              />
              
              {/* Filtros Avançados */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <button
                  type="button"
                  onClick={() => setShowFilters(!showFilters)}
                  style={{
                    backgroundColor: 'transparent',
                    color: isDarkMode ? '#9ca3af' : '#6b7280',
                    border: isDarkMode ? '1px solid #4b5563' : '1px solid #d1d5db',
                    padding: '8px 16px',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    fontSize: '14px',
                    transition: 'all 0.2s'
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.backgroundColor = isDarkMode ? '#374151' : '#f9fafb';
                    (e.target as HTMLElement).style.color = isDarkMode ? '#d1d5db' : '#374151';
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.backgroundColor = 'transparent';
                    (e.target as HTMLElement).style.color = isDarkMode ? '#9ca3af' : '#6b7280';
                  }}
                >
                  {showFilters ? 'Ocultar Filtros' : 'Filtros Avançados'}
                </button>
              </div>

              {showFilters && (
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
                  gap: '16px',
                  padding: '16px',
                  backgroundColor: isDarkMode ? '#1f2937' : '#f9fafb',
                  borderRadius: '8px',
                  border: isDarkMode ? '1px solid #374151' : '1px solid #e5e7eb',
                  transition: 'all 0.3s ease'
                }}>
                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: '14px',
                      fontWeight: '500',
                      color: isDarkMode ? '#d1d5db' : '#374151',
                      marginBottom: '8px',
                      transition: 'color 0.3s ease'
                    }}>
                      Tipo de Trabalho
                    </label>
                    <select
                      value={jobType}
                      onChange={(e) => setJobType(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '8px 12px',
                        border: isDarkMode ? '1px solid #4b5563' : '1px solid #d1d5db',
                        borderRadius: '6px',
                        backgroundColor: isDarkMode ? '#374151' : 'white',
                        color: isDarkMode ? '#f9fafb' : '#1f2937',
                        fontSize: '14px',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <option value="">Todos os tipos</option>
                      <option value="CLT">CLT</option>
                      <option value="PJ">PJ</option>
                      <option value="Freelance">Freelance</option>
                      <option value="Estágio">Estágio</option>
                      <option value="Trainee">Trainee</option>
                    </select>
                  </div>

                  <div>
                    <label style={{
                      display: 'block',
                      fontSize: '14px',
                      fontWeight: '500',
                      color: isDarkMode ? '#d1d5db' : '#374151',
                      marginBottom: '8px',
                      transition: 'color 0.3s ease'
                    }}>
                      Nível de Experiência
                    </label>
                    <select
                      value={experience}
                      onChange={(e) => setExperience(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '8px 12px',
                        border: isDarkMode ? '1px solid #4b5563' : '1px solid #d1d5db',
                        borderRadius: '6px',
                        backgroundColor: isDarkMode ? '#374151' : 'white',
                        color: isDarkMode ? '#f9fafb' : '#1f2937',
                        fontSize: '14px',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      <option value="">Todos os níveis</option>
                      <option value="Júnior">Júnior</option>
                      <option value="Pleno">Pleno</option>
                      <option value="Sênior">Sênior</option>
                      <option value="Especialista">Especialista</option>
                      <option value="Líder Técnico">Líder Técnico</option>
                    </select>
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                style={{
                  backgroundColor: '#4f46e5',
                  color: 'white',
                  padding: '12px 16px',
                  borderRadius: '12px',
                  fontWeight: '600',
                  border: 'none',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  opacity: loading ? 0.5 : 1,
                  transition: 'background-color 0.2s'
                }}
                onMouseEnter={(e) => {
                  if (!loading) {
                    (e.target as HTMLElement).style.backgroundColor = '#4338ca';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!loading) {
                    (e.target as HTMLElement).style.backgroundColor = '#4f46e5';
                  }
                }}
              >
                {loading ? (
                  <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg style={{ animation: 'spin 1s linear infinite', marginRight: '12px', height: '20px', width: '20px' }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle style={{ opacity: 0.25 }} cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path style={{ opacity: 0.75 }} fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Buscando...
                  </span>
                ) : (
                  'Buscar Vagas'
                )}
              </button>
            </form>
          </div>

          {/* Error Message */}
          {error && (
            <div style={{ maxWidth: '672px', margin: '0 auto 32px auto' }}>
              <div style={{
                backgroundColor: '#fef2f2',
                border: '1px solid #fecaca',
                borderRadius: '12px',
                padding: '16px'
              }}>
                <div style={{ display: 'flex' }}>
                  <div style={{ flexShrink: 0 }}>
                    <svg style={{ height: '20px', width: '20px', color: '#f87171' }} viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div style={{ marginLeft: '12px' }}>
                    <p style={{ fontSize: '14px', color: '#991b1b' }}>{error}</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Jobs */}
          <div style={{ 
            marginTop: '40px', 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '20px',
            maxWidth: '1200px',
            margin: '40px auto 0',
            marginBottom: '60px'
          }}>
            {loading && (
              <div style={{ 
                gridColumn: '1 / -1', 
                textAlign: 'center', 
                color: isDarkMode ? '#9ca3af' : '#6b7280',
                padding: '40px'
              }}>
                <div style={{
                  display: 'inline-block',
                  width: '40px',
                  height: '40px',
                  border: '4px solid #e5e7eb',
                  borderTop: '4px solid #4f46e5',
                  borderRadius: '50%',
                  animation: 'spin 1s linear infinite'
                }}></div>
                <p style={{ marginTop: '16px', fontSize: '16px' }}>
                  Carregando vagas...
                </p>
              </div>
            )}
            {!loading && jobs.length === 0 && (keyword || location) && !error && (
              <div style={{ 
                gridColumn: '1 / -1', 
                textAlign: 'center', 
                color: isDarkMode ? '#9ca3af' : '#6b7280',
                padding: '40px'
              }}>
                <p style={{ fontSize: '18px' }}>
                  Nenhuma vaga encontrada.
                </p>
                <p style={{ fontSize: '14px', marginTop: '8px' }}>
                  Tente ajustar os termos de busca.
                </p>
              </div>
            )}
            {jobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>

          {/* Pagination */}
          {jobs.length > 0 && totalPages > 1 && (
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '40px',
              marginBottom: '40px',
              gap: '16px'
            }}>
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 20px',
                  backgroundColor: currentPage === 1 ? '#f3f4f6' : '#4f46e5',
                  color: currentPage === 1 ? '#9ca3af' : 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
                  fontSize: '14px',
                  fontWeight: '500',
                  transition: 'all 0.2s',
                  opacity: currentPage === 1 ? 0.5 : 1
                }}
                onMouseEnter={(e) => {
                  if (currentPage > 1) {
                    (e.target as HTMLElement).style.backgroundColor = '#4338ca';
                  }
                }}
                onMouseLeave={(e) => {
                  if (currentPage > 1) {
                    (e.target as HTMLElement).style.backgroundColor = '#4f46e5';
                  }
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="15,18 9,12 15,6"></polyline>
                </svg>
                Anterior
              </button>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                  let pageNum: number;
                  if (totalPages <= 5) {
                    pageNum = i + 1;
                  } else if (currentPage <= 3) {
                    pageNum = i + 1;
                  } else if (currentPage >= totalPages - 2) {
                    pageNum = totalPages - 4 + i;
                  } else {
                    pageNum = currentPage - 2 + i;
                  }

                  return (
                    <button
                      key={pageNum}
                      onClick={() => handlePageChange(pageNum)}
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '8px',
                        border: 'none',
                        backgroundColor: currentPage === pageNum ? '#4f46e5' : '#f3f4f6',
                        color: currentPage === pageNum ? 'white' : '#374151',
                        cursor: 'pointer',
                        fontSize: '14px',
                        fontWeight: '500',
                        transition: 'all 0.2s'
                      }}
                      onMouseEnter={(e) => {
                        if (currentPage !== pageNum) {
                          (e.target as HTMLElement).style.backgroundColor = '#e5e7eb';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (currentPage !== pageNum) {
                          (e.target as HTMLElement).style.backgroundColor = '#f3f4f6';
                        }
                      }}
                    >
                      {pageNum}
                    </button>
                  );
                })}
              </div>

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 20px',
                  backgroundColor: currentPage === totalPages ? '#f3f4f6' : '#4f46e5',
                  color: currentPage === totalPages ? '#9ca3af' : 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
                  fontSize: '14px',
                  fontWeight: '500',
                  transition: 'all 0.2s',
                  opacity: currentPage === totalPages ? 0.5 : 1
                }}
                onMouseEnter={(e) => {
                  if (currentPage < totalPages) {
                    (e.target as HTMLElement).style.backgroundColor = '#4338ca';
                  }
                }}
                onMouseLeave={(e) => {
                  if (currentPage < totalPages) {
                    (e.target as HTMLElement).style.backgroundColor = '#4f46e5';
                  }
                }}
              >
                Próxima
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9,18 15,12 9,6"></polyline>
                </svg>
              </button>
            </div>
          )}

          {/* Page Info */}
          {jobs.length > 0 && (
            <div style={{
              textAlign: 'center',
              marginTop: '20px',
              color: '#6b7280',
              fontSize: '14px'
            }}>
              Página {currentPage} de {totalPages} • {jobs.length} vagas encontradas
            </div>
          )}
        </div>
      </Layout>
    </>
  );
};

export default Home;
