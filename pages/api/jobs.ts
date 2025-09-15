import { NextApiRequest, NextApiResponse } from 'next';

interface JoobleJob {
  id: string;
  title: string;
  company: string;
  location: string;
  snippet: string;
  link: string;
  salary?: string;
  type?: string;
}

interface JoobleResponse {
  jobs: JoobleJob[];
  totalCount?: number;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { keyword = '', location = '', jobType = '', experience = '', page = '1' } = req.query;

  if (!keyword && !location) {
    return res.status(400).json({ message: 'Keyword or location is required' });
  }

  const apiKey = 'a04322c7-93bb-40da-a902-c8b062dcabbd';

  try {
    const response = await fetch(`https://br.jooble.org/api/${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        keywords: `${keyword} ${jobType} ${experience}`.trim(),
        location: location,
        resultOnPage: 100, // Aumentar para 100 resultados por página
      }),
    });

    if (!response.ok) {
      throw new Error(`Jooble API error: ${response.status}`);
    }

    const data: JoobleResponse = await response.json();
    
    // Transform the data to match our interface
    const allJobs = data.jobs?.map((job) => ({
      id: job.id || Math.random().toString(36).substr(2, 9),
      title: job.title || 'Título não disponível',
      company: job.company || 'Empresa não informada',
      location: job.location || 'Localização não informada',
      snippet: job.snippet || 'Descrição não disponível',
      link: job.link || '#',
    })) || [];

    // Pagination logic
    const currentPage = parseInt(page as string, 10);
    const jobsPerPage = 21;
    const startIndex = (currentPage - 1) * jobsPerPage;
    const endIndex = startIndex + jobsPerPage;
    const paginatedJobs = allJobs.slice(startIndex, endIndex);

    res.status(200).json({ 
      jobs: paginatedJobs,
      total: data.totalCount || allJobs.length,
      page: currentPage,
      totalPages: Math.ceil((data.totalCount || allJobs.length) / jobsPerPage)
    });
  } catch (error) {
    console.error('Error fetching jobs:', error);
    res.status(500).json({ 
      message: 'Error fetching jobs from Jooble API',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}
