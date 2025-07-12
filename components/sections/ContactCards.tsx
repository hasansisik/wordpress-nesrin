"use client";

import Link from "next/link";

export default function ContactCards() {
  return (
    <section className="contact-cards-section py-5">
      <div className="container">
        <div className="row g-4">
          {/* Sol Kart - Gayrimenkul Satmak İçin */}
          <div className="col-lg-6 col-md-6">
            <Link href="/iletisim" className="text-decoration-none">
              <div 
                className="contact-card h-100 d-flex flex-column justify-content-center align-items-center text-center p-5 position-relative overflow-hidden rounded-3"
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #e5e7eb",
                  minHeight: "300px",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  cursor: "pointer",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1)";
                }}
              >
                {/* Yıldız İkonu */}
                <div className="mb-4">
                  <div 
                    className="star-icon d-flex align-items-center justify-content-center"
                    style={{
                      width: "60px",
                      height: "60px",
                      backgroundColor: "#f1f0fe",
                      borderRadius: "50%",
                      fontSize: "24px",
                      color: "#000"
                    }}
                  >
                    ⭐
                  </div>
                </div>

                {/* Başlık */}
                <h3 className="fw-bold mb-4" style={{ fontSize: "1.5rem", color: "#111827" }}>
                  Lüks Gayrimenkul Satmak İçin
                </h3>

                {/* Açıklama */}
                <p className="mb-4 lh-base" style={{ fontSize: "0.95rem", color: "#6E6E6E" }}>
                  Geniş Yatırımcı Portföyü ve Uzman Pazarlama ile Gayrimenkulünüzü Hızlı ve 
                  Zahmetsiz Satmak İçin
                </p>

                {/* Buton */}
                <div 
                  className="contact-button px-4 py-2 fw-semibold rounded-pill"
                  style={{
                    backgroundColor: "#000",
                    color: "#ffffff",
                    border: "none",
                    fontSize: "0.9rem"
                  }}
                >
                  Hemen İletişime Geçin!
                </div>
              </div>
            </Link>
          </div>

          {/* Sağ Kart - Gayrimenkul Almak İçin */}
          <div className="col-lg-6 col-md-6">
            <Link href="/iletisim" className="text-decoration-none">
              <div 
                className="contact-card h-100 d-flex flex-column justify-content-center align-items-center text-center p-5 position-relative overflow-hidden rounded-3"
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #e5e7eb",
                  minHeight: "300px",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  cursor: "pointer",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                  e.currentTarget.style.boxShadow = "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1)";
                }}
              >
                {/* Yıldız İkonu */}
                <div className="mb-4">
                  <div 
                    className="star-icon d-flex align-items-center justify-content-center"
                    style={{
                      width: "60px",
                      height: "60px",
                      backgroundColor: "#f1f0fe",
                      borderRadius: "50%",
                      fontSize: "24px",
                      color: "#000"
                    }}
                  >
                    ⭐
                  </div>
                </div>

                {/* Başlık */}
                <h3 className="fw-bold mb-4" style={{ fontSize: "1.5rem", color: "#111827" }}>
                  Lüks Gayrimenkul Almak İçin
                </h3>

                {/* Açıklama */}
                <p className="mb-4 lh-base" style={{ fontSize: "0.95rem", color: "#6E6E6E" }}>
                  Geniş Lüks Konut Portföyü ve Uzman Araştırma Ekibi ile Hayallerinizdeki Tüm 
                  Özelliklere Sahip Olan Lüks Konutu Sorunsuz ve Doğru Fiyatlı, Stres Olmadan Satın 
                  Almak İçin
                </p>

                {/* Buton */}
                <div 
                  className="contact-button px-4 py-2 fw-semibold rounded-pill"
                  style={{
                    backgroundColor: "#000",
                    color: "#ffffff",
                    border: "none",
                    fontSize: "0.9rem"
                  }}
                >
                  Hemen İletişime Geçin!
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
} 