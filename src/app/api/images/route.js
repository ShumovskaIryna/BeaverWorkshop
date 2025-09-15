import fs from 'fs';
import path from 'path';

export async function GET() {
  const imagesDir = path.join(process.cwd(), 'public', 'images', 'portfolio');

  try {
    const categories = fs.readdirSync(imagesDir)
      .filter(folder => fs.statSync(path.join(imagesDir, folder)).isDirectory());

    const allImages = categories.flatMap(category => {
      const files = fs.readdirSync(path.join(imagesDir, category))
        .filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file))
        .map(file => ({
          src: `/images/portfolio/${category}/${file}`,
          category
        }));
      return files;
    });

    return new Response(JSON.stringify({
      categories,
      images: allImages
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    return new Response(JSON.stringify({ error: 'Не вдалося прочитати папки' }), { status: 500 });
  }
}
