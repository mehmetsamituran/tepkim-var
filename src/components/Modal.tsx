import React, { useState, useEffect } from 'react';
import { brands } from '../data/brands';
import { categories } from '../data/categories';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  borderColor: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, borderColor }) => {
  const [nickname, setNickname] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [freeText, setFreeText] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false); // Onay modalı için state
  const [formError, setFormError] = useState(''); // Hata mesajı için state

  // Modal her açıldığında kullanıcı girişlerini sıfırla
  useEffect(() => {
    if (isOpen) {
      setNickname('');
      setEmail('');
      setEmailError(false);
      setSelectedBrand('');
      setSelectedCategory('');
      setFreeText('');
      setSearchTerm('');
      setFormError('');
    }
  }, [isOpen]);

  // Markaları arama terimine göre filtreleme
  const filteredBrands = searchTerm
    ? brands.filter((brand) =>
        brand.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  if (!isOpen) return null;

  // Mail adresi kontrolü
  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = () => {
    // Zorunlu alanların kontrolü
    if (!nickname) {
      setFormError('Lütfen bir nickname giriniz.');
      return;
    }
    if (!validateEmail(email)) {
      setFormError('Lütfen geçerli bir mail adresi giriniz.');
      setEmailError(true);
      return;
    }
    if (!selectedBrand) {
      setFormError('Lütfen bir marka seçiniz.');
      return;
    }
    if (!selectedCategory) {
      setFormError('Lütfen bir kategori seçiniz.');
      return;
    }

    // Tüm zorunlu alanlar doldurulmuşsa onay modalını aç
    setFormError('');
    setIsConfirmModalOpen(true);
  };

  const handleConfirm = () => {
    console.log('Onaylandı:');
    console.log('Nickname:', nickname);
    console.log('Email:', email);
    console.log('Seçilen Marka:', selectedBrand);
    console.log('Seçilen Kategori:', selectedCategory);
    console.log('Serbest Metin:', freeText);

    // Onay modalını kapat ve ana modalı kapat
    setIsConfirmModalOpen(false);
    onClose();
  };

  const handleCancel = () => {
    // Onay modalını kapat
    setIsConfirmModalOpen(false);
  };

  return (
    <>
      {/* Ana Modal */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 1000,
          padding: '20px',
          backdropFilter: 'blur(5px)',
        }}
      >
        <div
          style={{
            backgroundColor: 'white',
            padding: '20px',
            borderRadius: '10px',
            border: `4px solid ${borderColor}`,
            width: '90%',
            maxWidth: '400px',
            textAlign: 'center',
            position: 'relative',
            maxHeight: '90vh',
            overflowY: 'auto',
          }}
        >
          {/* Modalı kapatma butonu */}
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              background: 'none',
              border: 'none',
              fontSize: '18px',
              cursor: 'pointer',
            }}
          >
            ✖
          </button>

          {/* Başlık */}
          <h2
            style={{
              color: borderColor,
              marginBottom: '20px',
            }}
          >
            {title}
          </h2>

          {/* Sabit İkon ve Paragraf */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              textAlign: 'left',
              marginBottom: '20px',
            }}
          >
            <span
              style={{
                fontSize: '24px',
              }}
            >
              {title === 'Boykot et!' ? '❌' : '✅'}
            </span>
            <p
              style={{
                fontSize: '14px',
                color: '#333',
                margin: 0,
              }}
            >
              {title === 'Boykot et!'
                ? 'Boykot etmek istediğiniz markayı seçin, daha sonra boykotunuzu kategorilendirin. Dilerseniz nedenini paylaşın ve gönderin.'
                : 'Onurlandırmak istediğiniz markayı seçin, daha sonra onurlandırma nedeninizi paylaşın ve gönderin.'}
            </p>
          </div>

          {/* Hata Mesajı */}
          {formError && (
            <p
              style={{
                color: 'red',
                fontSize: '14px',
                marginBottom: '15px',
              }}
            >
              {formError}
            </p>
          )}

          {/* Nickname Input */}
          <input
            type="text"
            value={nickname}
            onChange={(e) => {
              if (e.target.value.length <= 15) setNickname(e.target.value);
            }}
            placeholder="Nickname"
            style={{
              width: '90%',
              padding: '10px',
              marginBottom: '15px',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }}
          />

          {/* Email Input */}
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError(false);
            }}
            placeholder="Mail adresiniz"
            style={{
              width: '90%',
              padding: '10px',
              marginBottom: '15px',
              borderRadius: '5px',
              border: emailError ? '1px solid red' : '1px solid #ccc',
            }}
          />

          {/* Marka Arama Kutusu */}
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Marka ara..."
            style={{
              width: '90%',
              padding: '10px',
              marginBottom: '15px',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }}
          />

          {/* Marka Listesi */}
          <div
            style={{
              maxHeight: '150px',
              overflowY: 'auto',
              marginBottom: '15px',
              border: '1px solid #ccc',
              borderRadius: '5px',
              padding: '10px',
            }}
          >
            {searchTerm && filteredBrands.length > 0 ? (
              filteredBrands.map((brand, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedBrand(brand.name)}
                  style={{
                    padding: '5px 10px',
                    cursor: 'pointer',
                    backgroundColor: selectedBrand === brand.name ? '#f0f0f0' : 'transparent',
                    borderRadius: '5px',
                  }}
                >
                  {brand.name}
                </div>
              ))
            ) : (
              searchTerm && (
                <>
                  <p style={{ fontSize: '14px', color: '#999' }}>Eşleşen marka bulunamadı.</p>
                  {/* Yeni Marka Öner Butonu */}
                  <button
                    onClick={() => console.log('Yeni Marka Öner butonuna tıklandı')}
                    style={{
                      backgroundColor: '#007bff',
                      color: 'white',
                      border: 'none',
                      padding: '10px 20px',
                      borderRadius: '5px',
                      cursor: 'pointer',
                      fontSize: '14px',
                      marginTop: '10px',
                    }}
                  >
                    Yeni Marka Öner
                  </button>
                </>
              )
            )}
          </div>

          {/* Kategori Seçimi */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            style={{
              width: '100%',
              padding: '10px',
              marginBottom: '15px',
              borderRadius: '5px',
              border: '1px solid #ccc',
            }}
          >
            <option value="">Kategori Seçin</option>
            {categories.map((category, index) => (
              <option key={index} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>

          {/* Serbest Metin Alanı */}
          <textarea
            value={freeText}
            onChange={(e) => setFreeText(e.target.value)}
            placeholder="Neden bu şekilde düşünüyorsun?"
            style={{
              width: '90%',
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #ccc',
              marginBottom: '30px',
              resize: 'none',
              height: '80px',
            }}
          />

          {/* Gönder Butonu */}
          <button
            onClick={handleSubmit}
            style={{
              backgroundColor: borderColor,
              color: 'white',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '5px',
              cursor: 'pointer',
              fontSize: '16px',
            }}
          >
            Gönder
          </button>
        </div>
      </div>

      {/* Onay Modalı */}
      {isConfirmModalOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1100,
            padding: '20px',
          }}
        >
          <div
            style={{
              backgroundColor: 'white',
              padding: '20px',
              borderRadius: '10px',
              width: '90%',
              maxWidth: '400px',
              textAlign: 'center',
            }}
          >
            <h3>Bilgilerinizi Onaylayın</h3>
            <p><strong>Nickname:</strong> {nickname}</p>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Seçilen Marka:</strong> {selectedBrand || 'Seçilmedi'}</p>
            <p><strong>Seçilen Kategori:</strong> {selectedCategory || 'Seçilmedi'}</p>
            <p><strong>Serbest Metin:</strong> {freeText || 'Boş'}</p>
            <button
              onClick={handleConfirm}
              style={{
                backgroundColor: 'green',
                color: 'white',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '5px',
                cursor: 'pointer',
                marginRight: '10px',
              }}
            >
              Onayla
            </button>
            <button
              onClick={handleCancel}
              style={{
                backgroundColor: 'red',
                color: 'white',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              İptal
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;