import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout from '../../components/Layout';

// Mock data for job details
const mockJobs = {
  '1': {
    id: '1',
    title: 'Desenvolvedor React Senior',
    company: 'TechCorp Brasil',
    location: 'São Paulo, SP - Remoto',
    salary: 'R$ 8.000 - R$ 12.000',
    type: 'CLT',
    description: `
      Estamos buscando um Desenvolvedor React Senior para se juntar à nossa equipe de desenvolvimento. 
      Você trabalhará em projetos inovadores e terá a oportunidade de impactar milhares de usuários.
      
      ## Responsabilidades:
      - Desenvolver interfaces de usuário responsivas e interativas
      - Colaborar com designers e outros desenvolvedores
      - Participar de code reviews e mentorias
      - Contribuir para a arquitetura de frontend
      - Otimizar performance e experiência do usuário
      
      ## Requisitos:
      - 5+ anos de experiência com React
      - Conhecimento sólido em JavaScript/TypeScript
      - Experiência com Redux ou Context API
      - Conhecimento em testes (Jest, React Testing Library)
      - Experiência com Git e metodologias ágeis
      
      ## Diferenciais:
      - Experiência com Next.js
      - Conhecimento em GraphQL
      - Experiência com Docker
      - Conhecimento em AWS ou outras clouds
    `,
    requirements: [
      '5+ anos de experiência com React',
      'Conhecimento sólido em JavaScript/TypeScript',
      'Experiência com Redux ou Context API',
      'Conhecimento em testes (Jest, React Testing Library)',
      'Experiência com Git e metodologias ágeis'
    ],
    benefits: [
      'Vale refeição R$ 800',
      'Vale alimentação R$ 400',
      'Plano de saúde e odontológico',
      'Home office 100%',
      'Horário flexível',
      'Participação nos lucros'
    ],
    link: 'https://example.com/job/1',
    postedAt: '2024-01-15'
  },
  '2': {
    id: '2',
    title: 'DevOps Engineer',
    company: 'StartupXYZ',
    location: 'Rio de Janeiro, RJ',
    salary: 'R$ 10.000 - R$ 15.000',
    type: 'PJ',
    description: `
      Procuramos um DevOps Engineer experiente para gerenciar nossa infraestrutura em nuvem 
      e automatizar nossos processos de deploy e monitoramento.
      
      ## Responsabilidades:
      - Gerenciar infraestrutura AWS/GCP
      - Automatizar pipelines de CI/CD
      - Monitorar aplicações e infraestrutura
      - Implementar práticas de segurança
      - Otimizar custos de infraestrutura
      
      ## Requisitos:
      - 3+ anos de experiência com DevOps
      - Conhecimento em AWS ou GCP
      - Experiência com Docker e Kubernetes
      - Conhecimento em Terraform ou CloudFormation
      - Experiência com Jenkins, GitLab CI ou GitHub Actions
      
      ## Diferenciais:
      - Certificações em cloud
      - Experiência com monitoring (Prometheus, Grafana)
      - Conhecimento em Python ou Go
      - Experiência com microserviços
    `,
    requirements: [
      '3+ anos de experiência com DevOps',
      'Conhecimento em AWS ou GCP',
      'Experiência com Docker e Kubernetes',
      'Conhecimento em Terraform ou CloudFormation',
      'Experiência com Jenkins, GitLab CI ou GitHub Actions'
    ],
    benefits: [
      'Vale refeição R$ 1.000',
      'Plano de saúde premium',
      'Equipamento de trabalho',
      'Ambiente de trabalho moderno',
      'Cursos e certificações pagos',
      'Stock options'
    ],
    link: 'https://example.com/job/2',
    postedAt: '2024-01-14'
  }
};

const JobDetail: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  
  const job = id ? mockJobs[id as keyof typeof mockJobs] : null;

  if (!job) {
    return (
      <Layout>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              Vaga não encontrada
            </h1>
            <p className="text-gray-600 mb-8">
              A vaga que você está procurando não existe ou foi removida.
            </p>
            <button
              onClick={() => router.push('/')}
              className="px-6 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 transition-colors duration-200"
            >
              Voltar para Home
            </button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <>
      <Head>
        <title>{job.title} - {job.company} | NERDINO</title>
        <meta name="description" content={`Vaga de ${job.title} na ${job.company} - ${job.location}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Back Button */}
          <button
            onClick={() => router.back()}
            className="flex items-center text-indigo-600 hover:text-indigo-700 mb-6 transition-colors duration-200"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Voltar
          </button>

          {/* Job Header */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {job.title}
                </h1>
                <div className="flex items-center text-lg text-indigo-600 font-semibold mb-4">
                  {job.company}
                </div>
                <div className="flex flex-wrap items-center gap-4 text-gray-600">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {job.location}
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                    {job.salary}
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                    </svg>
                    {job.type}
                  </div>
                </div>
              </div>
              <div className="mt-4 md:mt-0 md:ml-6">
                <a
                  href={job.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
                >
                  Candidatar-se
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="text-sm text-gray-500">
              Publicado em {new Date(job.postedAt).toLocaleDateString('pt-BR')}
            </div>
          </div>

          {/* Job Description */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Descrição da Vaga</h2>
            <div className="prose prose-lg max-w-none">
              <pre className="whitespace-pre-wrap text-gray-700 font-sans">
                {job.description}
              </pre>
            </div>
          </div>

          {/* Requirements */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Requisitos</h2>
            <ul className="space-y-3">
              {job.requirements.map((req, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{req}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Benefícios</h2>
            <ul className="space-y-3">
              {job.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-5 h-5 text-indigo-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Apply Button */}
          <div className="text-center">
            <a
              href={job.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white text-lg font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
            >
              Candidatar-se Agora
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default JobDetail;
