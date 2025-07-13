"use client";

import { useState, useEffect } from "react";

interface ProjectImage {
  id: number;
  url: string;
  alt: string;
}

interface Project {
  id: number;
  title: string;
  images: ProjectImage[];
  description?: string;
}

export default function ProjectGallery() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // JSON dosyasından projeleri yükle
  useEffect(() => {
    const loadProjects = async () => {
      try {
        // Next.js'de public klasöründen dosya çağırırken yolu düzgün belirtmek gerekiyor
        const response = await fetch('/api/projects');
        if (!response.ok) {
          throw new Error('Projeler yüklenemedi');
        }
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error('Proje verileri yüklenirken hata oluştu:', error);
        // Hata durumunda varsayılan projeler gösterilebilir
        setProjects([]);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  const openPreview = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closePreview = () => {
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject && currentImageIndex < selectedProject.images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  if (loading) {
    return (
      <section className="project-gallery-section py-5">
        <div className="container">
          <div className="text-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Yükleniyor...</span>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="project-gallery-section py-5">
        <div className="container">
          {/* Section Title */}
          <div className="text-center mb-5">
            <div 
              className="d-inline-flex align-items-center rounded-pill px-4 py-2 mb-4"
              style={{ backgroundColor: "#000" }}
            >
              <span 
                className="fw-bold text-uppercase" 
                style={{ color: "#fff", fontSize: "0.875rem" }}
              >
                Projelerimiz
              </span>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="row g-4">
            {projects.map((project) => (
              <div key={project.id} className="col-lg-3 col-md-6 col-sm-6">
                <div 
                  className="project-card position-relative overflow-hidden rounded-3 cursor-pointer"
                  style={{
                    backgroundColor: "#ffffff",
                    border: "1px solid #e5e7eb",
                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)"
                  }}
                  onClick={() => openPreview(project)}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.boxShadow = "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1)";
                  }}
                >
                  {/* Project Image */}
                  <div className="project-image position-relative" style={{ height: "200px" }}>
                    <img
                      src={project.images[0].url}
                      alt={project.images[0].alt}
                      className="w-100 h-100 object-fit-cover"
                      style={{ objectFit: "cover" }}
                    />
                    {/* Image Count Badge */}
                    {project.images.length > 1 && (
                      <div 
                        className="position-absolute top-0 end-0 m-2 px-2 py-1 rounded-pill d-flex align-items-center"
                        style={{
                          backgroundColor: "rgba(0, 0, 0, 0.7)",
                          color: "white",
                          fontSize: "0.75rem"
                        }}
                      >
                        <i className="bi bi-images me-1"></i>
                        {project.images.length}
                      </div>
                    )}
                    {/* Hover Overlay */}
                    <div 
                      className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                      style={{
                        backgroundColor: "rgba(99, 66, 236, 0.8)",
                        opacity: 0,
                        transition: "opacity 0.3s ease"
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.opacity = "1";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.opacity = "0";
                      }}
                    >
                      <i className="bi bi-eye text-white" style={{ fontSize: "2rem" }}></i>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-4">
                    <h5 className="fw-bold mb-2" style={{ color: "#111827" }}>
                      {project.title}
                    </h5>
                    <p className="mb-0" style={{ color: "#6E6E6E", fontSize: "0.875rem" }}>
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preview Modal */}
      {selectedProject && (
        <div 
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.9)",
            zIndex: 9999
          }}
          onClick={closePreview}
        >
          <div 
            className="position-relative bg-white rounded-3 p-4 mx-3"
            style={{ maxWidth: "90vw", maxHeight: "90vh" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              className="position-absolute top-0 end-0 m-3 btn btn-light rounded-circle d-flex align-items-center justify-content-center"
              onClick={closePreview}
              style={{ 
                zIndex: 10, 
                width: "40px", 
                height: "40px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
              }}
            >
              <i className="bi bi-x-lg"></i>
            </button>

            {/* Project Title */}
            <h4 className="fw-bold mb-3" style={{ color: "#111827" }}>
              {selectedProject.title}
            </h4>

            {/* Image Display */}
            <div className="text-center mb-4 position-relative">
              <img
                src={selectedProject.images[currentImageIndex].url}
                alt={selectedProject.images[currentImageIndex].alt}
                className="img-fluid rounded-3"
                style={{ maxHeight: "60vh", objectFit: "contain" }}
              />
              
              {/* Navigation Arrows */}
              {selectedProject.images.length > 1 && (
                <>
                  <button
                    className="position-absolute top-50 start-0 translate-middle-y ms-3 btn btn-light rounded-circle d-flex align-items-center justify-content-center"
                    onClick={(e) => {
                      e.stopPropagation();
                      prevImage();
                    }}
                    disabled={currentImageIndex === 0}
                    style={{ 
                      zIndex: 10, 
                      width: "50px", 
                      height: "50px",
                      opacity: currentImageIndex === 0 ? "0.5" : "1",
                      boxShadow: "0 2px 10px rgba(0,0,0,0.2)"
                    }}
                  >
                    <i className="bi bi-chevron-left fs-4"></i>
                  </button>
                  <button
                    className="position-absolute top-50 end-0 translate-middle-y me-3 btn btn-light rounded-circle d-flex align-items-center justify-content-center"
                    onClick={(e) => {
                      e.stopPropagation();
                      nextImage();
                    }}
                    disabled={currentImageIndex === selectedProject.images.length - 1}
                    style={{ 
                      zIndex: 10, 
                      width: "50px", 
                      height: "50px",
                      opacity: currentImageIndex === selectedProject.images.length - 1 ? "0.5" : "1",
                      boxShadow: "0 2px 10px rgba(0,0,0,0.2)"
                    }}
                  >
                    <i className="bi bi-chevron-right fs-4"></i>
                  </button>
                </>
              )}
            </div>

            {/* Image Thumbnails */}
            {selectedProject.images.length > 1 && (
              <div className="d-flex justify-content-center flex-wrap gap-2 mb-3">
                {selectedProject.images.map((image, index) => (
                  <button
                    key={image.id}
                    onClick={(e) => {
                      e.stopPropagation();
                      goToImage(index);
                    }}
                    className="p-0 border-0 position-relative"
                    style={{ 
                      width: "70px", 
                      height: "50px",
                      cursor: "pointer",
                      borderRadius: "4px",
                      overflow: "hidden"
                    }}
                  >
                    <img
                      src={image.url}
                      alt={image.alt}
                      className="w-100 h-100"
                      style={{ 
                        objectFit: "cover",
                        filter: index === currentImageIndex ? "none" : "brightness(0.7)"
                      }}
                    />
                    {index === currentImageIndex && (
                      <div 
                        className="position-absolute top-0 start-0 w-100 h-100"
                        style={{
                          border: "2px solid #6342EC",
                          borderRadius: "4px"
                        }}
                      ></div>
                    )}
                  </button>
                ))}
              </div>
            )}

            {/* Image Counter */}
            {selectedProject.images.length > 1 && (
              <div className="text-center mb-3">
                <span 
                  className="px-3 py-1 rounded-pill" 
                  style={{ 
                    backgroundColor: "#f1f0fe", 
                    color: "#6342EC",
                    fontSize: "0.875rem",
                    fontWeight: "500"
                  }}
                >
                  {currentImageIndex + 1} / {selectedProject.images.length}
                </span>
              </div>
            )}

            {/* Project Description */}
            <p className="text-center mb-0" style={{ color: "#6E6E6E" }}>
              {selectedProject.description}
            </p>
          </div>
        </div>
      )}
    </>
  );
} 