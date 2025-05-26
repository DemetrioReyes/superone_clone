import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import './Contacto.css';

interface FormData {
  nombre: string;
  correo: string;
  mensaje: string;
}

interface FormErrors {
  nombre?: string;
  correo?: string;
  mensaje?: string;
}

function Contacto() {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    correo: '',
    mensaje: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    const newErrors: FormErrors = {};
    
    if (!formData.nombre.trim()) {
      newErrors.nombre = 'El nombre es requerido';
    }
    
    if (!formData.correo.trim()) {
      newErrors.correo = 'El correo es requerido';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.correo)) {
      newErrors.correo = 'Correo electrónico no válido';
    }
    
    if (!formData.mensaje.trim()) {
      newErrors.mensaje = 'El mensaje es requerido';
    } else if (formData.mensaje.length < 10) {
      newErrors.mensaje = 'El mensaje debe tener al menos 10 caracteres';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      setSubmitMessage('');
      try {
        await new Promise(resolve => setTimeout(resolve, 1500));
        setSubmitMessage('¡Mensaje enviado con éxito!');
        setFormData({
          nombre: '',
          correo: '',
          mensaje: ''
        });
        setErrors({});
      } catch (error) {
        setSubmitMessage('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <main className="main-body contacto-container">
      <h1>Contacto</h1>
      <p>Complete el formulario y nos pondremos en contacto con usted.</p>
      
      {submitMessage && (
        <div className={`submit-message ${submitMessage.includes('éxito') ? 'success' : 'error'}`}>
          {submitMessage}
        </div>
      )}
      
      <form onSubmit={handleSubmit} className="contacto-form" noValidate>
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            placeholder="Tu nombre completo"
            value={formData.nombre}
            onChange={handleChange}
            className={errors.nombre ? 'error-input' : ''}
            autoComplete="off"
          />
          {errors.nombre && <span className="error-message">{errors.nombre}</span>}
        </div>
        
        <div className="form-group">
          <label htmlFor="correo">Correo electrónico:</label>
          <input
            type="email"
            id="correo"
            name="correo"
            placeholder="tu@correo.com"
            value={formData.correo}
            onChange={handleChange}
            className={errors.correo ? 'error-input' : ''}
            autoComplete="off"
          />
          {errors.correo && <span className="error-message">{errors.correo}</span>}
        </div>
        
        <div className="form-group">
          <label htmlFor="mensaje">Mensaje:</label>
          <textarea
            id="mensaje"
            name="mensaje"
            placeholder="Escribe tu mensaje aquí..."
            rows={5}
            value={formData.mensaje}
            onChange={handleChange}
            className={errors.mensaje ? 'error-input' : ''}
          />
          {errors.mensaje && <span className="error-message">{errors.mensaje}</span>}
        </div>
        
        <button
          type="submit"
          className="submit-button"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
        </button>
      </form>
    </main>
  );
}

export default Contacto;