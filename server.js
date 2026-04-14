import { createServer } from 'http';
import { readFileSync, existsSync, statSync } from 'fs';
import { join, extname } from 'path';

const PORT = 3000;
const PUBLIC_DIR = './out';

const MIME_TYPES = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.wav': 'audio/wav',
  '.mp4': 'video/mp4',
  '.woff': 'application/font-woff',
  '.ttf': 'application/font-ttf',
  '.eot': 'application/vnd.ms-fontobject',
  '.otf': 'application/font-otf',
  '.wasm': 'application/wasm'
};

const getMimeType = (filePath) => {
  const ext = extname(filePath).toLowerCase();
  return MIME_TYPES[ext] || 'application/octet-stream';
};

const handleRequest = (req, res) => {
  console.log(`${req.method} ${req.url}`);

  // Handle /unit-conversion/ base path - remove it for file serving
  let requestPath = req.url.startsWith('/unit-conversion/') 
    ? req.url.replace('/unit-conversion', '') 
    : req.url;
  
  // Handle SPA routing - serve index.html for all routes
  let filePath = join(PUBLIC_DIR, requestPath === '/' ? 'index.html' : requestPath);
  
   // If the requested path is a directory, append index.html
  if (existsSync(filePath) && statSync(filePath).isDirectory()) {
    filePath = join(filePath, 'index.html');
  }
  
  // If the requested file doesn't exist, try to serve index.html for SPA routing
  if (!existsSync(filePath)) {
    filePath = join(PUBLIC_DIR, 'index.html');
  }

  try {
    const content = readFileSync(filePath);
    const mimeType = getMimeType(filePath);
    
    res.writeHead(200, { 'Content-Type': mimeType });
    res.end(content, 'utf-8');
  } catch (error) {
    if (error.code === 'ENOENT') {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      res.end('<h1>404 Not Found</h1>', 'utf-8');
    } else if (error.code === 'EISDIR') {
      // Handle directory case - try to serve index.html from the directory
      const indexPath = join(filePath, 'index.html');
      if (existsSync(indexPath)) {
        const content = readFileSync(indexPath);
        const mimeType = getMimeType(indexPath);
        res.writeHead(200, { 'Content-Type': mimeType });
        res.end(content, 'utf-8');
      } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 Not Found</h1>', 'utf-8');
      }
    } else {
      res.writeHead(500);
      res.end(`Server Error: ${error.code}`, 'utf-8');
    }
  }
};

const server = createServer(handleRequest);

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
  console.log(`Serving files from: ${PUBLIC_DIR}`);
});
