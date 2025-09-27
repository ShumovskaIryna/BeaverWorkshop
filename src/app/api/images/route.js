const categoryMapping = {
  'Doors': 'Двері',
  'Stairs': 'Сходи', 
  'Tables&Cabinets': 'Столи&тумби',
  'Windowsill': 'Підвіконники',
  'others': 'Інше'
};

const s3Categories = ['Doors', 'others', 'Stairs', 'Tables&Cabinets', 'Windowsill'];

async function getFilesFromCategory(category) {
  try {
    const encodedCategory = encodeURIComponent(category);
    const response = await fetch(`https://beaverworkshop.s3.eu-west-3.amazonaws.com/?list-type=2&prefix=portfolio/${encodedCategory}/&delimiter=/`);
    
    if (!response.ok) {
      console.log(`Не вдалося отримати файли з категорії ${category}: ${response.status}`);
      return [];
    }
    
    const xmlText = await response.text();
    
    // Парсимо XML для отримання ключів файлів
    const keyMatches = xmlText.match(/<Key>([^<]+)<\/Key>/g);
    if (!keyMatches) return [];
    
    const files = keyMatches
      .map(match => match.replace(/<\/?Key>/g, ''))
      .map(key => key.replace(/&amp;/g, '&'))
      .filter(key => 
        key.startsWith(`portfolio/${category}/`) && 
        key !== `portfolio/${category}/` &&
        /\.(jpg|jpeg|png|gif|webp|heic)$/i.test(key)
      )
      .map(key => ({
        src: `https://beaverworkshop.s3.eu-west-3.amazonaws.com/${encodeURI(key)}`,
        category: categoryMapping[category] || category
      }));
    
    return files;
  } catch (error) {
    console.error(`Помилка при отриманні файлів з ${category}:`, error);
    return [];
  }
}

export async function GET() {
  try {
    const allImages = [];
    
    for (const category of s3Categories) {
      const files = await getFilesFromCategory(category);
      allImages.push(...files);
    }

    const categories = [...new Set(allImages.map(img => img.category))];

    return new Response(JSON.stringify({
      categories,
      images: allImages
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Error:', error);
    return new Response(JSON.stringify({ 
      error: 'Не вдалося завантажити зображення з S3',
      details: error.message 
    }), { status: 500 });
  }
}
