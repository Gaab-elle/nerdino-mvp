import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from '../contexts/ThemeContext';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const currentYear = new Date().getFullYear();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMobileMenuOpen && !target.closest('nav')) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <div style={{ 
      minHeight: '100vh', 
      backgroundColor: isDarkMode ? '#111827' : '#f9fafb', 
      display: 'flex', 
      flexDirection: 'column',
      transition: 'background-color 0.3s ease'
    }}>
      {/* Header */}
      <header role="banner" style={{ backgroundColor: '#1f2937', padding: isMobile ? '16px 0' : '20px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: isMobile ? '0 16px' : '0 20px' }}>
          {/* Logo */}
          <div style={{ textAlign: 'center', marginBottom: isMobile ? '16px' : '20px' }}>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              gap: isMobile ? '12px' : '20px',
              flexWrap: 'wrap'
            }}>
              <Image
                src="/icone.png"
                alt="NERDINO Logo"
                width={isMobile ? 60 : 80}
                height={isMobile ? 60 : 80}
                style={{
                  objectFit: 'contain'
                }}
              />
              <h1 style={{
                fontFamily: "'Fira Code', monospace",
                fontSize: isMobile ? '32px' : '48px',
                fontWeight: '600',
                color: 'white',
                margin: 0,
                letterSpacing: isMobile ? '1px' : '2px'
              }}>
                NERDINO
              </h1>
              <button
                onClick={toggleTheme}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  borderRadius: '8px',
                  padding: '8px',
                  cursor: 'pointer',
                  color: 'white',
                  fontSize: isMobile ? '18px' : '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: isMobile ? '36px' : '40px',
                  height: isMobile ? '36px' : '40px',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                }}
                title={isDarkMode ? 'Modo Claro' : 'Modo Escuro'}
              >
                {isDarkMode ? '☀️' : '🌙'}
              </button>
            </div>
          </div>

          {/* Navigation */}
          <nav id="navbar-primary" style={{ backgroundColor: 'transparent', border: 'none' }}>
            <div style={{ width: '100%' }}>
              {/* Mobile Menu Button */}
              <div style={{ textAlign: 'center', marginBottom: isMobile ? '8px' : '10px' }}>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsMobileMenuOpen(!isMobileMenuOpen);
                  }}
                  style={{
                    backgroundColor: isMobileMenuOpen ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
                    border: '2px solid rgba(255, 255, 255, 0.4)',
                    color: 'white',
                    padding: isMobile ? '10px 20px' : '8px 16px',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    display: 'block',
                    margin: '0 auto',
                    fontSize: isMobile ? '16px' : '14px',
                    fontWeight: '500',
                    transition: 'all 0.3s ease',
                    minWidth: '120px'
                  }}
                  className="mobile-menu-btn"
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                    (e.target as HTMLElement).style.borderColor = 'rgba(255, 255, 255, 0.6)';
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.backgroundColor = isMobileMenuOpen ? 'rgba(255, 255, 255, 0.2)' : 'transparent';
                    (e.target as HTMLElement).style.borderColor = 'rgba(255, 255, 255, 0.4)';
                  }}
                >
                  {isMobileMenuOpen ? '✕ Fechar' : '☰ Menu'}
                </button>
              </div>

              {/* Navigation Links */}
              <div 
                id="navbar-primary-collapse"
                style={{
                  display: isMobileMenuOpen ? 'block' : 'none',
                  textAlign: 'center',
                  backgroundColor: isMobile ? 'rgba(0, 0, 0, 0.1)' : 'transparent',
                  borderRadius: isMobile ? '12px' : '0',
                  padding: isMobile ? '16px' : '0',
                  margin: isMobile ? '8px 0' : '0',
                  border: isMobile ? '1px solid rgba(255, 255, 255, 0.1)' : 'none'
                }}
                className="navbar-collapse"
              >
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: isMobile ? 'column' : 'row',
                  gap: isMobile ? '8px' : '0',
                  justifyContent: isMobile ? 'center' : 'center'
                }} className="nav navbar-nav">
                  <li style={{ display: 'inline-block' }}>
                    <Link 
                      href="/" 
                      onClick={() => setIsMobileMenuOpen(false)}
                      style={{
                        color: 'rgba(255, 255, 255, 0.9)',
                        textDecoration: 'none',
                        padding: isMobile ? '12px 24px' : '10px 30px',
                        display: 'block',
                        borderRadius: isMobile ? '8px' : '4px',
                        transition: 'all 0.2s',
                        fontSize: isMobile ? '16px' : '14px',
                        fontWeight: '500'
                      }}
                      onMouseEnter={(e) => {
                        (e.target as HTMLElement).style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                        (e.target as HTMLElement).style.color = 'white';
                      }}
                      onMouseLeave={(e) => {
                        (e.target as HTMLElement).style.backgroundColor = 'transparent';
                        (e.target as HTMLElement).style.color = 'rgba(255, 255, 255, 0.9)';
                      }}
                    >
                      🏠 Home
                    </Link>
                  </li>
                  <li style={{ display: 'inline-block' }}>
                    <Link 
                      href="/about" 
                      onClick={() => setIsMobileMenuOpen(false)}
                      style={{
                        color: 'rgba(255, 255, 255, 0.9)',
                        textDecoration: 'none',
                        padding: isMobile ? '12px 24px' : '10px 30px',
                        display: 'block',
                        borderRadius: isMobile ? '8px' : '4px',
                        transition: 'all 0.2s',
                        fontSize: isMobile ? '16px' : '14px',
                        fontWeight: '500'
                      }}
                      onMouseEnter={(e) => {
                        (e.target as HTMLElement).style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                        (e.target as HTMLElement).style.color = 'white';
                      }}
                      onMouseLeave={(e) => {
                        (e.target as HTMLElement).style.backgroundColor = 'transparent';
                        (e.target as HTMLElement).style.color = 'rgba(255, 255, 255, 0.9)';
                      }}
                    >
                      ℹ️ Sobre
                    </Link>
                  </li>
                  <li style={{ display: 'inline-block' }}>
                    <Link 
                      href="/jobs" 
                      onClick={() => setIsMobileMenuOpen(false)}
                      style={{
                        color: 'rgba(255, 255, 255, 0.9)',
                        textDecoration: 'none',
                        padding: isMobile ? '12px 24px' : '10px 30px',
                        display: 'block',
                        borderRadius: isMobile ? '8px' : '4px',
                        transition: 'all 0.2s',
                        fontSize: isMobile ? '16px' : '14px',
                        fontWeight: '500'
                      }}
                      onMouseEnter={(e) => {
                        (e.target as HTMLElement).style.backgroundColor = 'rgba(255, 255, 255, 0.15)';
                        (e.target as HTMLElement).style.color = 'white';
                      }}
                      onMouseLeave={(e) => {
                        (e.target as HTMLElement).style.backgroundColor = 'transparent';
                        (e.target as HTMLElement).style.color = 'rgba(255, 255, 255, 0.9)';
                      }}
                    >
                      💼 Vagas
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main style={{ flex: 1 }}>
        {children}
      </main>

      {/* Footer */}
      <footer style={{
        backgroundColor: isDarkMode ? '#1f2937' : '#f1f3f4',
        color: isDarkMode ? '#f9fafb' : '#000000',
        padding: isMobile ? '24px 0 16px' : '32px 0 16px',
        marginTop: isMobile ? '32px' : '40px',
        borderTop: isDarkMode ? '1px solid #374151' : '1px solid #e5e7eb',
        transition: 'all 0.3s ease'
      }}>
        <div className="footer-container" style={{ 
          display: 'flex', 
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: isMobile ? 'center' : 'space-between', 
          maxWidth: '1200px',
          margin: '0 auto',
          padding: isMobile ? '0 16px' : '0 20px',
          gap: isMobile ? '24px' : '32px'
        }}>
          
          {/* Coluna 1 - Contato */}
          <div className="footer-column" style={{
            flex: '1',
            minWidth: isMobile ? 'auto' : '280px',
            textAlign: isMobile ? 'center' : 'left'
          }}>
            <h3 style={{
              fontSize: '18px',
              fontWeight: '600',
              color: isDarkMode ? '#f9fafb' : '#000000',
              marginBottom: '8px',
              letterSpacing: '0.5px'
            }}>
              Contato
            </h3>
            <div style={{ marginBottom: '16px' }}>
              <p style={{
                color: isDarkMode ? '#d1d5db' : '#374151',
                fontSize: '14px',
                margin: '0 0 8px 0',
                fontWeight: '500'
              }}>
                Email
              </p>
              <a href="mailto:yggdracode@gmail.com" style={{
                color: '#4f46e5',
                textDecoration: 'none',
                fontSize: '15px',
                transition: 'color 0.2s'
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.color = '#6366f1';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.color = '#4f46e5';
              }}>
                yggdracode@gmail.com
              </a>
            </div>
            <div style={{ marginBottom: '20px' }}>
              <p style={{
                color: isDarkMode ? '#d1d5db' : '#374151',
                fontSize: '14px',
                margin: '0 0 8px 0',
                fontWeight: '500'
              }}>
                Suporte
              </p>
              <a href="mailto:yggdracode@gmail.com" style={{
                color: '#4f46e5',
                textDecoration: 'none',
                fontSize: '15px',
                transition: 'color 0.2s'
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.color = '#6366f1';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.color = '#4f46e5';
              }}>
                yggdracode@gmail.com
              </a>
            </div>
            <div>
              <Link href="/about" style={{
                color: isDarkMode ? '#d1d5db' : '#374151',
                textDecoration: 'none',
                fontSize: '14px',
                marginRight: '20px',
                transition: 'color 0.2s'
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.color = '#4f46e5';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.color = '#374151';
              }}>
                Sobre Nós
              </Link>
              <Link href="/jobs" style={{
                color: isDarkMode ? '#d1d5db' : '#374151',
                textDecoration: 'none',
                fontSize: '14px',
                transition: 'color 0.2s'
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.color = '#4f46e5';
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.color = '#374151';
              }}>
                Todas as Vagas
              </Link>
            </div>
          </div>

          {/* Coluna 2 - Redes Sociais */}
          <div className="footer-column" style={{
            flex: '1',
            minWidth: isMobile ? 'auto' : '250px',
            textAlign: isMobile ? 'center' : 'left'
          }}>
            <h3 style={{
              fontSize: '18px',
              fontWeight: '600',
              color: isDarkMode ? '#f9fafb' : '#000000',
              marginBottom: '8px',
              letterSpacing: '0.5px'
            }}>
              Redes Sociais
            </h3>
            <div style={{
              backgroundColor: 'transparent',
              border: 'none',
              borderRadius: '0',
              padding: '0',
              marginBottom: '16px'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '8px'
              }}>
                <div style={{
                  width: '8px',
                  height: '8px',
                  backgroundColor: '#10b981',
                  borderRadius: '50%',
                  marginRight: '8px'
                }}></div>
                <span style={{
                  color: '#10b981',
                  fontSize: '14px',
                  fontWeight: '500'
                }}>
                  Conecte-se Conosco
                </span>
              </div>
              <p style={{
                color: isDarkMode ? '#d1d5db' : '#374151',
                fontSize: '13px',
                margin: '0',
                lineHeight: '1.5'
              }}>
                Siga-nos para novidades e oportunidades
              </p>
            </div>
            <div>
              <p style={{
                color: isDarkMode ? '#d1d5db' : '#374151',
                fontSize: '14px',
                margin: '0 0 12px 0',
                fontWeight: '500'
              }}>
                Nossas Redes
              </p>
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px'
              }}>
                {[
                  { name: 'Instagram', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/instagram.svg', color: '#E4405F' },
                  { name: 'YouTube', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/youtube.svg', color: '#FF0000' },
                  { name: 'Facebook', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/facebook.svg', color: '#1877F2' }
                ].map((social) => (
                  <a
                    key={social.name}
                    href='#'
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      backgroundColor: isDarkMode ? '#374151' : '#ffffff',
                      color: isDarkMode ? '#f9fafb' : '#1f2937',
                      padding: '6px 10px',
                      borderRadius: '6px',
                      fontSize: '12px',
                      fontWeight: '500',
                      border: isDarkMode ? '1px solid #4b5563' : '1px solid #e2e8f0',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      (e.target as HTMLElement).style.backgroundColor = social.color;
                      (e.target as HTMLElement).style.color = 'white';
                      (e.target as HTMLElement).style.borderColor = social.color;
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLElement).style.backgroundColor = isDarkMode ? '#374151' : '#ffffff';
                      (e.target as HTMLElement).style.color = isDarkMode ? '#f9fafb' : '#1f2937';
                      (e.target as HTMLElement).style.borderColor = isDarkMode ? '#4b5563' : '#e2e8f0';
                    }}
                  >
                    <Image 
                      src={social.icon} 
                      alt={social.name}
                      width={16}
                      height={16}
                      style={{
                        filter: isDarkMode ? 'invert(1)' : 'none'
                      }}
                    />
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Coluna 3 - Sobre o NERDINO */}
          <div className="footer-column" style={{
            flex: '1',
            minWidth: isMobile ? 'auto' : '280px',
            textAlign: isMobile ? 'center' : 'left'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: isMobile ? 'center' : 'flex-start',
              marginBottom: '16px'
            }}>
              <div style={{
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '12px'
              }}>
                <Image
                  src="/icone.png"
                  alt="NERDINO Logo"
                  width={32}
                  height={32}
                  style={{
                    objectFit: 'contain'
                  }}
                />
              </div>
              <h3 style={{
                fontSize: '20px',
                fontWeight: '700',
                color: '#000000',
                margin: '0',
                letterSpacing: '1px'
              }}>
                NERDINO
              </h3>
            </div>
            <p style={{
              color: isDarkMode ? '#6b7280' : '#9ca3af',
              fontSize: '15px',
              lineHeight: '1.6',
              margin: '0 0 24px 0'
            }}>
              A plataforma oficial para conectar talentos de tecnologia com as melhores oportunidades do mercado.
            </p>
            <div style={{
              borderTop: '1px solid #e5e7eb',
              paddingTop: '16px'
            }}>
              <p style={{
                fontSize: '12px',
                color: isDarkMode ? '#9ca3af' : '#4b5563',
                margin: '0 0 8px 0'
              }}>
                &copy; {currentYear} NERDINO. Todos os direitos reservados.
              </p>
              <p style={{
                fontSize: '12px',
                color: isDarkMode ? '#9ca3af' : '#4b5563',
                margin: '0'
              }}>
                Conectando talentos com oportunidades incríveis.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Responsive CSS */}
      <style jsx>{`
        @media (min-width: 768px) {
          .navbar-collapse {
            display: block !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
          .nav.navbar-nav {
            flex-direction: row !important;
            justify-content: center;
            gap: 0 !important;
          }
          .nav.navbar-nav li {
            display: inline-block !important;
          }
        }
        
        @media (max-width: 767px) {
          .navbar-collapse {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
          .nav.navbar-nav {
            flex-direction: column !important;
            gap: 8px !important;
          }
        }
        
        @media (max-width: 1024px) {
          .footer-container {
            flex-direction: column !important;
            gap: 24px !important;
            padding: 0 16px !important;
          }
          .footer-column {
            width: 100% !important;
            max-width: 500px !important;
            margin: 0 auto !important;
            text-align: center !important;
          }
        }
        
        @media (max-width: 768px) {
          .footer-container {
            gap: 20px !important;
            padding: 0 12px !important;
          }
          .footer-column {
            text-align: center !important;
          }
        }
        
        /* Smooth transitions for mobile menu */
        .navbar-collapse {
          transition: all 0.3s ease;
        }
        
        /* Better touch targets for mobile */
        @media (max-width: 767px) {
          .nav.navbar-nav a {
            min-height: 44px !important;
            display: flex !important;
            align-items: center !important;
            justify-content: center !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Layout;
