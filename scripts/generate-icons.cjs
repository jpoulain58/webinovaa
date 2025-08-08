const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Tailles d'icônes nécessaires
const iconSizes = [
  { size: 16, name: 'favicon-16x16.png' },
  { size: 32, name: 'favicon-32x32.png' },
  { size: 96, name: 'favicon-96x96.png' },
  { size: 180, name: 'apple-touch-icon.png' },
  { size: 192, name: 'icon-192.png' },
  { size: 512, name: 'icon-512.png' }
];

async function generateIcons() {
  try {
    console.log('🎨 Génération des icônes depuis le logo Webinovaa...');
    
    const logoPath = path.join(__dirname, '../public/logos/logo-webinovaa.png');
    const publicPath = path.join(__dirname, '../public');
    
    // Vérifier que le logo existe
    if (!fs.existsSync(logoPath)) {
      throw new Error('Logo non trouvé : ' + logoPath);
    }
    
    // Générer chaque taille d'icône
    for (const icon of iconSizes) {
      const outputPath = path.join(publicPath, icon.name);
      
      await sharp(logoPath)
        .resize(icon.size, icon.size, {
          fit: 'contain',
          background: { r: 255, g: 255, b: 255, alpha: 0 } // Background transparent
        })
        .png()
        .toFile(outputPath);
        
      console.log(`✅ Créé: ${icon.name} (${icon.size}x${icon.size})`);
    }
    
    // Générer le favicon.ico comme un PNG (plus simple et compatible)
    const faviconPath = path.join(publicPath, 'favicon.ico');
    
    await sharp(logoPath)
      .resize(32, 32, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 }
      })
      .png()
      .toFile(faviconPath);
      
    console.log('✅ Créé: favicon.ico (format PNG)');
    
    console.log('🎉 Toutes les icônes ont été générées avec succès !');
    
  } catch (error) {
    console.error('❌ Erreur lors de la génération des icônes:', error.message);
    process.exit(1);
  }
}

generateIcons(); 