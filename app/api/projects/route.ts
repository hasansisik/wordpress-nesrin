import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    // JSON dosyasının yolunu belirle
    const filePath = path.join(process.cwd(), 'data', 'projects.json');
    
    // Dosyayı oku
    const fileContents = fs.readFileSync(filePath, 'utf8');
    
    // JSON olarak ayrıştır
    const data = JSON.parse(fileContents);
    
    // Yanıt olarak döndür
    return NextResponse.json(data);
  } catch (error) {
    console.error('Projeler yüklenirken hata oluştu:', error);
    return NextResponse.json(
      { error: 'Projeler yüklenemedi' },
      { status: 500 }
    );
  }
} 