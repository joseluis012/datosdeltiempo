import Image from 'next/image';
import "./screenIcon.css";
import tormenta from '/public/Thunderstorm.png';
import llovizna from  'public/LightRain.png';
import lluvia from 'public/Shower.png';
import nieve from 'public/Snow.png';
import limpio from 'public/Clear.png';
import atmosfera from 'public/LightCloud.png';
import nubes from 'public/HeavyCloud.png';

const ScreenIcon = ({climaPrincipal}) => {
  
const climaMapeo = {
  "Thunderstorm": {
    urlIcono: tormenta,
    ancho: 203,
    alto: 235,
    alternate: "Thunderstorm Icon",
    mensaje: "tormenta"
  },
  "Drizzle": {
    urlIcono: llovizna,
    ancho: 203,
    alto: 235,
    alternate: "Drizzle Icon",
    mensaje: "llovizna"
  },
  "Rain": {
    urlIcono: lluvia,
    ancho: 202,
    alto: 234,
    alternate: "Rain Icon",
    mensaje: "lluvia"
  },
  "Snow": {
    urlIcono: nieve,
    ancho: 203,
    alto: 169,
    alternate: "Snow Icon",
    mensaje: "nieve"
  },
  "Clear": {
    urlIcono: limpio,
    ancho: 213,
    alto: 206,
    alternate: "Clear Icon",
    mensaje: "limpio"
  },
  "Atmosphere": {
    urlIcono: atmosfera,
    ancho: 221,
    alto: 206,
    alternate: "Atmosphere Icon",
    mensaje: "atmosfera"
  },
  "Clouds": {
    urlIcono: nubes,
    ancho: 203,
    alto: 150,
    alternate: "Clouds Icon",
    mensaje: "nubes"
  }
};


const climaInfo = climaMapeo[climaPrincipal] || climaMapeo["Thunderstorm"]; 


const { urlIcono, ancho, alto, alternate, mensaje } = climaInfo;

console.log(mensaje);



  return (
    <div id="pantallaIcono">
        <div id="screen-nubes"></div>
        <div id="iconoGrande">
          <Image  src={urlIcono} width={ancho} height={alto} alt={alternate} />
        </div>        
    </div>
  )
}

export default ScreenIcon