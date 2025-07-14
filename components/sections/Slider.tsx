export default function Slider() {
  return (
    <section 
      className="slider-section position-relative overflow-hidden"
      style={{
        width: "100%",
        margin: 0,
        padding: 0
      }}
    >
      <div 
        className="slider-container position-relative w-100 d-block"
        style={{ 
          height: "600px",
          background: "url('/assets/imgs/hero-1/hero.png')",
          backgroundSize: "cover",
          backgroundPosition: "left",
          backgroundRepeat: "no-repeat"
        }}
      >
      </div>
      
      {/* Mobile responsive style */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @media (max-width: 768px) {
            .slider-container {
              height: 400px !important;
              background: url('/assets/imgs/hero-1/hero-mobile.png') !important;
              background-size: cover !important;
              background-position: left !important;
              background-repeat: no-repeat !important;
            }
          }
        `
      }} />
    </section>
  );
} 