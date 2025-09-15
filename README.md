# NERDINO MVP - Vagas Tech

Uma plataforma para busca de vagas de tecnologia, desenvolvida com Next.js, TypeScript e Tailwind CSS.

## 🚀 Funcionalidades

- **Busca de Vagas**: Busca por palavra-chave e localização
- **Integração com Jooble API**: Busca vagas reais da API da Jooble
- **Interface Responsiva**: Design moderno e responsivo com Tailwind CSS
- **Páginas de Detalhe**: Visualização detalhada das vagas (mockado)
- **Página Sobre**: Informações sobre o projeto e cadastro de interesse

## 🛠️ Tecnologias

- **Next.js 14** - Framework React
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **Jooble API** - Integração com API de vagas

## 📦 Instalação

1. Clone o repositório:
```bash
git clone <seu-repositorio>
cd nerdino-mvp
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
```bash
cp .env.local.example .env.local
```

4. Edite o arquivo `.env.local` e adicione sua chave da API Jooble:
```env
JOOBLE_API_KEY=sua_chave_da_api_jooble_aqui
```

## 🔑 Configuração da API Jooble

1. Acesse [Jooble.org](https://jooble.org/api/about)
2. Registre-se e obtenha sua chave de API
3. Adicione a chave no arquivo `.env.local`

## 🚀 Como Executar

### Desenvolvimento
```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

### Produção
```bash
npm run build
npm start
```

## 📁 Estrutura do Projeto

```
nerdino-mvp/
├── pages/
│   ├── index.tsx          # Home com busca e listagem
│   ├── about.tsx          # Página sobre o projeto
│   ├── job/[id].tsx       # Detalhe de vaga (mockado)
│   ├── api/jobs.ts        # API route para Jooble
│   ├── _app.tsx           # Configuração global
│   └── _document.tsx      # HTML document
├── components/
│   ├── Layout.tsx         # Header + Footer
│   └── JobCard.tsx        # Card de vaga
├── styles/
│   └── globals.css        # Estilos globais
├── .env.local             # Variáveis de ambiente
└── README.md
```

## 🌐 Deploy no Vercel

1. **Conecte seu repositório ao Vercel**:
   - Acesse [vercel.com](https://vercel.com)
   - Conecte sua conta GitHub
   - Importe o projeto

2. **Configure as variáveis de ambiente**:
   - No dashboard do Vercel, vá em Settings > Environment Variables
   - Adicione `JOOBLE_API_KEY` com sua chave da API

3. **Deploy**:
   - O Vercel fará o deploy automaticamente
   - Sua aplicação estará disponível em `https://seu-projeto.vercel.app`

## 🔧 Scripts Disponíveis

- `npm run dev` - Executa em modo desenvolvimento
- `npm run build` - Gera build de produção
- `npm start` - Executa build de produção
- `npm run lint` - Executa o linter

## 📝 API Routes

### GET /api/jobs

Busca vagas na API da Jooble.

**Parâmetros de Query:**
- `keyword` (opcional): Palavra-chave para busca
- `location` (opcional): Localização para busca

**Exemplo:**
```
GET /api/jobs?keyword=react&location=são paulo
```

**Resposta:**
```json
{
  "jobs": [
    {
      "id": "string",
      "title": "string",
      "company": "string",
      "location": "string",
      "snippet": "string",
      "link": "string"
    }
  ]
}
```

## 🎨 Customização

### Cores
As cores principais podem ser customizadas no arquivo `tailwind.config.js`:
- Primary: `indigo-600`
- Background: `gray-50`
- Cards: `white`

### Componentes
Todos os componentes estão em `/components` e podem ser facilmente modificados.

## 🐛 Solução de Problemas

### Erro de API Key
- Verifique se a `JOOBLE_API_KEY` está configurada corretamente
- Confirme se a chave é válida no painel da Jooble

### Erro de Build
- Execute `npm run lint` para verificar erros de código
- Verifique se todas as dependências estão instaladas

## 📄 Licença

Este projeto é um MVP para demonstração. Todos os direitos reservados.

## 🤝 Contribuição

Este é um projeto MVP em desenvolvimento. Para sugestões ou melhorias, abra uma issue no repositório.

---

**NERDINO** - Encontre as melhores vagas de tecnologia em um só lugar! 🚀