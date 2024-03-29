import React from 'react';
import NavGeneral from '../NavGeneral';
import '../../CSS/VideoPage.css';
import '../../CSS/Home.css';
import Video from './Video';
import Footer from '../Footer';
import Collaborate from '../Collaborate/Collaborate';

export default function VideosPage() {
  return (
    <div className="main-content">
      <div id="content-wrapper">
        <NavGeneral />
        <div className="strongMessage">
          <div>
            <h1 className="stronMessageTitle">Se le deba la voz a la communidad.</h1>
            <h2>Únete a nosotros en la mission de dar voz a la communidad pan-hispana estadounidense. <em>Voces</em> cubre a fondo los asuntos más importantes y celebratorios de la communidad. Descruba las historias de la gente en vidéo. Comparta. Discuta. Aprenda.</h2>
          </div>
        </div>
        <div id="vid" className="videoViewer">
          <Video />
        </div>
        <Collaborate />
        <div id="footer">
          <Footer />
        </div>
      </div>
    </div>  
  )
}