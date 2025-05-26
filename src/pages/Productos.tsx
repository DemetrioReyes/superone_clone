import Header from '../components/Header';
import './Productos.css';

// Importar imágenes
import superfirmaLogo from '../assets/img/superfirma_logo.png';
import onelinkLogo from '../assets/img/onelink_logo.png';
import onechatLogo from '../assets/img/Onechat_logo.png';
import prodoctivityLogo from '../assets/img/prodoctivity_logo.png';
import prestamasLogo from '../assets/img/prestamas_logo.png';
import superoneLogo from '../assets/img/Logo-2023-XS.png';

function Productos() {
  const productos = [
    {
      nombre: "SuperFirma",
      imagen: superfirmaLogo,
      descripcion: "Firma tus documentos electrónicamente con validez jurídica.",
      detalle: "SuperFirma te brinda más facilidad y comodidad a la hora de firmar un contrato, convenio de servicio o cualquier otro tipo de documento."
    },
    {
      nombre: "OnLink",
      imagen: onelinkLogo,
      descripcion: "Tarjetas de presentación inteligentes con tecnología NFC y códigos QR.",
      detalle: "Con nuestras tarjetas de presentación, puedes estar seguro de que estás haciendo tu parte para ayudar al medio ambiente y, al mismo tiempo, ahorrar dinero a largo plazo."
    },
    {
      nombre: "OneChat",
      imagen: onechatLogo,
      descripcion: "Sincroniza todos tus números de WhatsApp en un sólo lugar.",
      detalle: "Atiende a tus clientes en WhatsApp e incrementa la productividad de tu equipo con una única solución que te permitirá mejorar la comunicación a todos los niveles."
    },
    {
      nombre: "Prodoctivity",
      imagen: prodoctivityLogo,
      descripcion: "Optimice la creación y gestión de documentos.",
      detalle: "Nuestra solución puede ayudarle a alcanzar sus objetivos estratégicos, llevando su empresa al más alto nivel."
    },
    {
      nombre: "Prestamas",
      imagen: prestamasLogo,
      descripcion: "Solicita un préstamo y págalo en cómodas cuotas.",
      detalle: "Al invertir en PréstaMás obtienes mejores beneficios y tasas favorables."
    }
  ];

  return (
    <>
      <Header />
      <main className="productos-container">
        <div className="productos-header">
          <img src={superoneLogo} alt="SuperOne Technologies" className="company-logo" />
          <h1>Nuestros Productos</h1>
          <p className="subtitle">Soluciones tecnológicas diseñadas para impulsar tu negocio</p>
        </div>
        
        <div className="productos-grid">
          {productos.map((producto, index) => (
            <div key={index} className="producto-card">
              <div className="producto-image-container">
                <img 
                  src={producto.imagen} 
                  alt={producto.nombre} 
                  className="producto-image"
                  loading="lazy"
                />
              </div>
              <div className="producto-content">
                <h2>{producto.nombre}</h2>
                <p className="producto-descripcion">{producto.descripcion}</p>
                <p className="producto-detalle">{producto.detalle}</p>
                <button className="producto-btn">
                  Conocer más
                  <span className="arrow">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default Productos;