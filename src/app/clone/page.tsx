"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import CloneTutorial from './tutorial';

// Esta é uma página de exemplo para clonar um site externo
export default function ClonePage() {
  const [loadedContent, setLoadedContent] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState('https://www.example.com');
  const [error, setError] = useState<string | null>(null);
  const [showTutorial, setShowTutorial] = useState(false);

  const handleClone = async () => {
    setLoading(true);
    setError(null);
    
    try {
      // Em um ambiente real, você precisaria de um proxy de servidor ou uma API
      // devido a restrições de CORS em navegadores
      // Este é apenas um exemplo didático
      const response = await fetch(`/api/proxy-clone?url=${encodeURIComponent(url)}`);
      
      if (!response.ok) {
        throw new Error('Não foi possível clonar a página');
      }
      
      const data = await response.text();
      setLoadedContent(data);
    } catch (err) {
      console.error('Erro ao clonar página:', err);
      setError('Não foi possível clonar a página. No ambiente real, você precisaria de um servidor proxy para contornar as restrições de CORS.');
    } finally {
      setLoading(false);
    }
  };

  // Para explicação didática, vamos mostrar como você clonaria uma página
  if (showTutorial) {
    return <CloneTutorial />;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Clone de Sites</h1>
      
      <Card className="mb-8">
        <CardContent className="pt-6">
          <h2 className="text-xl font-semibold mb-4">Como clonar uma página web</h2>
          
          <div className="space-y-4">
            <p>Existem várias maneiras de clonar uma página web:</p>
            
            <ol className="list-decimal ml-6 space-y-2">
              <li><strong>Usando ferramentas como HTTrack:</strong> Permitem baixar um site inteiro para seu computador.</li>
              <li><strong>Usando extensões de navegador:</strong> Existem extensões que permitem salvar páginas inteiras.</li>
              <li><strong>Manualmente:</strong> Inspecionar o código-fonte e recriar a estrutura HTML, CSS e JavaScript.</li>
              <li><strong>Usando uma API de proxy no servidor:</strong> Para contornar restrições de CORS.</li>
            </ol>
          </div>
          
          <div className="mt-6">
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <input
                type="text"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Digite a URL do site"
                className="flex-1 p-2 border rounded"
              />
              <Button
                onClick={handleClone}
                disabled={loading}
                className="bg-primary text-white"
              >
                {loading ? 'Clonando...' : 'Clonar Site'}
              </Button>
            </div>
            
            <Button 
              onClick={() => setShowTutorial(true)} 
              variant="outline" 
              className="mt-2 w-full"
            >
              Ver Tutorial Detalhado
            </Button>
            
            {error && (
              <div className="bg-red-100 text-red-700 p-4 rounded mb-4 mt-4">
                {error}
              </div>
            )}
          </div>
        </CardContent>
      </Card>
      
      <Card>
        <CardContent className="pt-6">
          <h2 className="text-xl font-semibold mb-4">Passos para clonar uma página no Next.js</h2>
          
          <div className="space-y-4">
            <p>Para clonar uma página em um projeto Next.js como este, você pode:</p>
            
            <ol className="list-decimal ml-6 space-y-2">
              <li>Criar um arquivo API em <code className="bg-gray-100 px-1 rounded">src/app/api/proxy-clone/route.ts</code> para servir como proxy</li>
              <li>Criar a página de destino como fizemos aqui</li>
              <li>Extrair e processar o HTML retornado</li>
              <li>Adaptar estilos e scripts para seu projeto</li>
            </ol>
            
            <div className="bg-blue-100 p-4 rounded">
              <p className="font-semibold">Importante:</p>
              <p>Lembre-se que clonar sites comerciais para uso além de fins educacionais pode violar direitos autorais. Sempre use esta técnica de forma ética e legal.</p>
            </div>
          </div>
        </CardContent>
      </Card>
      
      {/* Demonstração da estrutura HTML que seria clonada */}
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Resultado da clonagem</h2>
        
        {loadedContent ? (
          <div className="border p-4 rounded bg-white">
            <div dangerouslySetInnerHTML={{ __html: loadedContent }} />
          </div>
        ) : (
          <div className="border p-4 rounded bg-gray-100 text-center py-16">
            Clique em "Clonar Site" para ver o resultado
          </div>
        )}
      </div>
    </div>
  );
} 