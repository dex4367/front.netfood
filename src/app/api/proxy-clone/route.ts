import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // Pegar a URL da query string
  const url = request.nextUrl.searchParams.get('url');
  
  // Verificar se a URL foi fornecida
  if (!url) {
    return NextResponse.json(
      { error: 'URL não fornecida' },
      { status: 400 }
    );
  }
  
  try {
    // Fazer a requisição para a URL fornecida
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
      },
    });
    
    // Verificar se a requisição foi bem-sucedida
    if (!response.ok) {
      return NextResponse.json(
        { error: `Erro ao acessar a URL: ${response.statusText}` },
        { status: response.status }
      );
    }
    
    // Pegar o conteúdo da resposta
    const contentType = response.headers.get('content-type') || 'text/html';
    const content = await response.text();
    
    // Retornar o conteúdo com o tipo de conteúdo correto
    return new NextResponse(content, {
      headers: {
        'Content-Type': contentType,
      },
    });
  } catch (error) {
    console.error('Erro ao clonar a página:', error);
    
    return NextResponse.json(
      { error: 'Erro ao clonar a página' },
      { status: 500 }
    );
  }
} 