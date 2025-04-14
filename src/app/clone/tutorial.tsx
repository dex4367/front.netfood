"use client";

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function CloneTutorial() {
  const [activeTab, setActiveTab] = useState('httrack');

  const tabs = [
    { id: 'httrack', label: 'HTTrack' },
    { id: 'manual', label: 'Clonagem Manual' },
    { id: 'proxy', label: 'Proxy Server' },
    { id: 'browser', label: 'Extensões de Navegador' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Tutorial Completo: Como Clonar Páginas Web</h1>
      
      {/* Introdução */}
      <Card className="mb-8">
        <CardContent className="pt-6">
          <h2 className="text-xl font-semibold mb-4">O que significa "clonar" uma página web?</h2>
          <p className="mb-4">
            Clonar uma página web significa criar uma cópia local ou reproduzir o visual e funcionalidades 
            de um site existente. Isso pode ser feito para diversos fins, como:
          </p>
          <ul className="list-disc ml-6 space-y-2">
            <li>Estudar e aprender como sites são construídos</li>
            <li>Criar templates ou modelos baseados em designs existentes</li>
            <li>Fazer backup de sites para referência</li>
            <li>Desenvolver versões offline de sites para teste</li>
          </ul>
          <div className="bg-yellow-100 p-4 rounded mt-4">
            <p className="font-semibold">⚠️ Aviso Importante:</p>
            <p>Clonar sites para fins comerciais sem autorização pode violar direitos autorais e propriedade intelectual. 
              Este tutorial é para fins educacionais apenas. Sempre respeite as leis de propriedade intelectual.</p>
          </div>
        </CardContent>
      </Card>
      
      {/* Navegação entre abas */}
      <div className="flex flex-wrap border-b mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-4 py-2 ${
              activeTab === tab.id
                ? 'border-b-2 border-primary font-semibold'
                : 'text-gray-500'
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      
      {/* Conteúdo de cada aba */}
      <div className="tab-content">
        {/* HTTrack */}
        {activeTab === 'httrack' && (
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold mb-4">Usando HTTrack</h2>
              <p className="mb-4">HTTrack é uma ferramenta gratuita para Windows que permite baixar sites completos para visualização offline.</p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium">Passo 1: Instalar o HTTrack</h3>
                  <ol className="list-decimal ml-6 mt-2 space-y-2">
                    <li>Acesse <a href="https://www.httrack.com/" className="text-blue-600 underline">https://www.httrack.com/</a></li>
                    <li>Baixe a versão para seu sistema operacional</li>
                    <li>Instale seguindo as instruções do instalador</li>
                  </ol>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium">Passo 2: Configurar um novo projeto</h3>
                  <ol className="list-decimal ml-6 mt-2 space-y-2">
                    <li>Abra o HTTrack e clique em "Next"</li>
                    <li>Dê um nome ao seu projeto e escolha uma pasta de destino</li>
                    <li>Clique em "Next"</li>
                  </ol>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium">Passo 3: Adicionar a URL do site</h3>
                  <ol className="list-decimal ml-6 mt-2 space-y-2">
                    <li>Na opção "Web Addresses (URL)", adicione a URL do site que deseja clonar</li>
                    <li>Configure as opções adicionais como profundidade de navegação</li>
                    <li>Clique em "Next" e em "Finish" para iniciar o download</li>
                  </ol>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium">Passo 4: Visualizar o site clonado</h3>
                  <ol className="list-decimal ml-6 mt-2 space-y-2">
                    <li>Após o download, navegue até a pasta de destino</li>
                    <li>Abra o arquivo "index.html" ou similar em seu navegador</li>
                    <li>Você agora tem uma cópia local funcional do site!</li>
                  </ol>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
        
        {/* Clonagem Manual */}
        {activeTab === 'manual' && (
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold mb-4">Clonagem Manual (para desenvolvedores)</h2>
              <p className="mb-4">Esta abordagem envolve inspecionar e recriar o código do site manualmente.</p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium">Passo 1: Inspecionar o site original</h3>
                  <ol className="list-decimal ml-6 mt-2 space-y-2">
                    <li>Abra o site no Chrome ou Firefox</li>
                    <li>Clique com o botão direito e selecione "Inspecionar" ou pressione F12</li>
                    <li>Estude a estrutura HTML, CSS e JavaScript do site</li>
                  </ol>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium">Passo 2: Salvar os recursos</h3>
                  <ol className="list-decimal ml-6 mt-2 space-y-2">
                    <li>Salve o código HTML da página (Ctrl+S ou clique direito > "Ver código fonte" > salvar)</li>
                    <li>Identifique e baixe os arquivos CSS e JavaScript utilizados</li>
                    <li>Baixe as imagens e outros recursos necessários</li>
                  </ol>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium">Passo 3: Recriar a estrutura</h3>
                  <ol className="list-decimal ml-6 mt-2 space-y-2">
                    <li>Crie um novo projeto em seu editor de código (VS Code, etc.)</li>
                    <li>Reescreva o HTML ou adapte o código HTML salvo</li>
                    <li>Organize os arquivos CSS, JavaScript e imagens em pastas apropriadas</li>
                    <li>Atualize os caminhos para recursos no HTML</li>
                  </ol>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium">Passo 4: Testar e ajustar</h3>
                  <ol className="list-decimal ml-6 mt-2 space-y-2">
                    <li>Abra o arquivo HTML no navegador para testar</li>
                    <li>Compare com o site original e faça ajustes necessários</li>
                    <li>Use ferramentas de desenvolvimento para corrigir problemas</li>
                  </ol>
                </div>
                
                <div className="bg-blue-100 p-4 rounded">
                  <p>A abordagem manual oferece mais controle e aprendizado, mas requer conhecimentos de HTML, CSS e JavaScript.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
        
        {/* Proxy Server */}
        {activeTab === 'proxy' && (
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold mb-4">Usando um Proxy Server (para desenvolvedores)</h2>
              <p className="mb-4">Esta é a abordagem mais avançada, usando um servidor proxy para contornar restrições de CORS.</p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium">Passo 1: Criar um servidor proxy</h3>
                  <p className="mt-2">Usando Node.js e Express:</p>
                  <pre className="bg-gray-100 p-4 rounded overflow-x-auto mt-2">
{`const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/proxy', async (req, res) => {
  try {
    const url = req.query.url;
    if (!url) {
      return res.status(400).send('URL required');
    }
    
    const response = await axios.get(url);
    res.send(response.data);
  } catch (error) {
    res.status(500).send('Error fetching URL');
  }
});

app.listen(3000, () => {
  console.log('Proxy server running on port 3000');
});`}
                  </pre>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium">Passo 2: Criar a interface de clonagem</h3>
                  <p className="mt-2">Crie uma página HTML com JavaScript para buscar conteúdo pelo proxy:</p>
                  <pre className="bg-gray-100 p-4 rounded overflow-x-auto mt-2">
{`// No front-end
async function cloneWebsite() {
  const url = document.getElementById('url-input').value;
  const resultDiv = document.getElementById('result');
  
  try {
    const response = await fetch(\`http://localhost:3000/proxy?url=\${encodeURIComponent(url)}\`);
    const html = await response.text();
    
    // Exibir o HTML clonado
    resultDiv.innerHTML = html;
    
    // Opcional: processar para corrigir caminhos relativos
    // processClonedHTML(resultDiv);
  } catch (error) {
    resultDiv.innerHTML = 'Erro ao clonar página: ' + error.message;
  }
}`}
                  </pre>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium">Passo 3: Processar e adaptar o conteúdo</h3>
                  <p className="mt-2">Para corrigir caminhos relativos e recursos:</p>
                  <pre className="bg-gray-100 p-4 rounded overflow-x-auto mt-2">
{`function processClonedHTML(container) {
  // Corrigir caminhos de imagens
  const images = container.querySelectorAll('img');
  images.forEach(img => {
    if (img.src && img.src.startsWith('/')) {
      img.src = 'https://site-original.com' + img.src;
    }
  });
  
  // Corrigir links
  const links = container.querySelectorAll('a');
  links.forEach(link => {
    if (link.href && link.href.startsWith('/')) {
      link.href = 'https://site-original.com' + link.href;
    }
  });
  
  // Remover scripts (opcional por segurança)
  const scripts = container.querySelectorAll('script');
  scripts.forEach(script => script.remove());
}`}
                  </pre>
                </div>
                
                <div className="bg-yellow-100 p-4 rounded mt-4">
                  <p className="font-semibold">⚠️ Observação:</p>
                  <p>Esta abordagem pode enfrentar limitações com sites que usam CSRF tokens, autenticação ou proteções contra scraping.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
        
        {/* Extensões de Navegador */}
        {activeTab === 'browser' && (
          <Card>
            <CardContent className="pt-6">
              <h2 className="text-xl font-semibold mb-4">Usando Extensões de Navegador</h2>
              <p className="mb-4">Esta é a maneira mais simples para salvar uma página específica.</p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium">Opção 1: Salvar página com o navegador</h3>
                  <ol className="list-decimal ml-6 mt-2 space-y-2">
                    <li>Abra o site que deseja clonar</li>
                    <li>Pressione Ctrl+S ou clique em Menu > Salvar como</li>
                    <li>Escolha "Página da Web, completa" como formato</li>
                    <li>Selecione uma pasta de destino e salve</li>
                  </ol>
                  <p className="mt-2">Esta opção irá salvar o HTML e criar uma pasta com recursos como imagens e CSS.</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium">Opção 2: Extensão "Save Page WE" para Chrome</h3>
                  <ol className="list-decimal ml-6 mt-2 space-y-2">
                    <li>Instale a extensão "Save Page WE" da Chrome Web Store</li>
                    <li>Navegue até a página que deseja salvar</li>
                    <li>Clique no ícone da extensão na barra de ferramentas</li>
                    <li>A página será salva como um único arquivo HTML</li>
                  </ol>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium">Opção 3: SingleFile (Chrome/Firefox)</h3>
                  <ol className="list-decimal ml-6 mt-2 space-y-2">
                    <li>Instale a extensão "SingleFile" da Chrome Web Store ou Firefox Add-ons</li>
                    <li>Abra a página que deseja salvar</li>
                    <li>Clique no ícone da extensão</li>
                    <li>A página será salva como um único arquivo HTML com todos os recursos embutidos</li>
                  </ol>
                  <p className="mt-2">Esta é uma das melhores opções para preservar a aparência exata da página.</p>
                </div>
                
                <div className="bg-green-100 p-4 rounded mt-4">
                  <p className="font-semibold">💡 Dica:</p>
                  <p>Se você precisar das páginas para estudar o código, use o "Visualizador de código-fonte" do navegador. Clique com o botão direito > "Ver código-fonte".</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
      
      {/* Conclusão */}
      <Card className="mt-8">
        <CardContent className="pt-6">
          <h2 className="text-xl font-semibold mb-4">Adaptando para o Next.js (como este projeto)</h2>
          <p className="mb-4">
            Para integrar uma página clonada em um projeto Next.js como este, você precisará:
          </p>
          <ol className="list-decimal ml-6 space-y-2">
            <li>Converter o HTML para JSX</li>
            <li>Adaptar estilos CSS para Tailwind ou CSS Modules</li>
            <li>Substituir tags <code className="bg-gray-100 px-1 rounded">{`<a>`}</code> por <code className="bg-gray-100 px-1 rounded">{`<Link>`}</code> do Next.js</li>
            <li>Substituir tags <code className="bg-gray-100 px-1 rounded">{`<img>`}</code> por <code className="bg-gray-100 px-1 rounded">{`<Image>`}</code> do Next.js</li>
            <li>Mover a lógica JavaScript para hooks do React como useState e useEffect</li>
          </ol>
          <div className="mt-4">
            <p className="font-semibold">Ferramentas úteis:</p>
            <ul className="list-disc ml-6 mt-2 space-y-2">
              <li><a href="https://transform.tools/html-to-jsx" className="text-blue-600 underline">HTML para JSX Converter</a></li>
              <li><a href="https://github.com/ameerthehacker/htmltojsx" className="text-blue-600 underline">HTML to JSX CLI</a></li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
} 