import React, { useEffect, useState } from 'react';
import { colors } from '../styles/colors'; // Import centralized colors
import SearchBar from '../components/SearchBar'; // SearchBar bileşenini import edin
import Menu from '../components/Menu'; // Menu bileşenini import edin
import { brands } from '../data/brands'; // Marka verilerini import edin
import styles from '../styles/BrandList.module.css'; // CSS modülünü import edin

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [brandData, setBrandData] = useState(
    brands.map((brand) => ({
      ...brand,
      redFlags: 0,
      whiteFlags: 0,
      greenFlags: 0,
    }))
  );
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setBrandData((prevData) =>
      prevData.map((brand) => ({
        ...brand,
        redFlags: Math.floor(Math.random() * 100),
        whiteFlags: Math.floor(Math.random() * 100),
        greenFlags: Math.floor(Math.random() * 100),
      }))
    );
  }, []);

  const filteredBrands = brandData
    .filter((brand) => brand.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div>
      {/* Hamburger Menu Button */}
      <div style={{ position: 'absolute', top: '20px', left: '20px' }}>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: 'none',
            border: 'none',
            fontSize: '24px',
            cursor: 'pointer',
          }}
        >
          ☰
        </button>
      </div>

      {/* Menü Bileşeni */}
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      {/* Sayfa Başlığı */}
      <h1 style={{ textAlign: 'center', marginBottom: '20px' }}>Boykot Listesi</h1>

      {/* Arama Kutusu */}
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {/* Marka Listesi */}
      <ul className={styles.brandList}>
        {filteredBrands.map((brand, index) => (
          <li key={index} className={styles.brandItem}>
            <img src={brand.logo} alt={brand.name} className={styles.brandLogo} />
            <div>
              <strong className={styles.brandName}>{brand.name}</strong>
              <p className={styles.brandDescription}>{brand.description}</p>
              <div className={styles.brandFlags}>
                <span className={styles.redFlag}>Red Flags: {brand.redFlags}</span>
                <span className={styles.whiteFlag}>White Flags: {brand.whiteFlags}</span>
                <span className={styles.greenFlag}>Green Flags: {brand.greenFlags}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
