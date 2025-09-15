import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  snippet: string;
  link: string;
}

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  const { isDarkMode } = useTheme();
  
  return (
    <div style={{
      backgroundColor: isDarkMode ? '#111827' : 'white',
      borderRadius: '12px',
      boxShadow: isDarkMode ? '0 2px 4px rgba(0, 0, 0, 0.3)' : '0 2px 4px rgba(20, 11, 11, 0.1)',
      padding: '16px',
      border: isDarkMode ? '1px solid #4b5563' : '1px solid #e5e7eb',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }}
    onMouseEnter={(e) => {
      (e.target as HTMLElement).style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
      (e.target as HTMLElement).style.transform = 'translateY(-2px)';
    }}
    onMouseLeave={(e) => {
      (e.target as HTMLElement).style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
      (e.target as HTMLElement).style.transform = 'translateY(0)';
    }}
    >
      {/* Title */}
      <h3 style={{
        fontSize: '16px',
        fontWeight: '600',
        color: isDarkMode ? '#ffffff' : '#111827',
        marginBottom: '8px',
        lineHeight: '1.3',
        display: '-webkit-box',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden'
      }}>
        {job.title}
      </h3>
      
      {/* Company and Location */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        fontSize: '13px',
        color: isDarkMode ? '#e5e7eb' : '#6b7280',
        marginBottom: '10px',
        flexWrap: 'wrap'
      }}>
        <span style={{ 
          fontWeight: '500', 
          color: isDarkMode ? '#818cf8' : '#4f46e5',
          display: '-webkit-box',
          WebkitLineClamp: 1,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden'
        }}>
          {job.company}
        </span>
        {job.location && (
          <>
            <span style={{ margin: '0 6px' }}>•</span>
            <span style={{
              display: '-webkit-box',
              WebkitLineClamp: 1,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden'
            }}>
              {job.location}
            </span>
          </>
        )}
      </div>
      
      {/* Snippet */}
      <p style={{
        color: isDarkMode ? '#f3f4f6' : '#374151',
        fontSize: '13px',
        marginBottom: '12px',
        flex: 1,
        lineHeight: '1.4',
        display: '-webkit-box',
        WebkitLineClamp: 3,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden'
      }}>
        {job.snippet.replace(/<[^>]*>/g, '')}
      </p>
      
      {/* Action Button */}
      <div style={{ marginTop: 'auto' }}>
        <a
          href={job.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            padding: '8px 12px',
            backgroundColor: isDarkMode ? '#6366f1' : '#4f46e5',
            color: 'white',
            fontSize: '13px',
            fontWeight: '500',
            borderRadius: '6px',
            textDecoration: 'none',
            transition: 'background-color 0.2s'
          }}
          onMouseEnter={(e) => {
            (e.target as HTMLElement).style.backgroundColor = isDarkMode ? '#4f46e5' : '#4338ca';
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLElement).style.backgroundColor = isDarkMode ? '#6366f1' : '#4f46e5';
          }}
        >
          Ver Vaga
          <svg 
            style={{ marginLeft: '6px', width: '14px', height: '14px' }}
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default JobCard;
