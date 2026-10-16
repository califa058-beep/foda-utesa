# Generador Oficial de Análisis FODA Institucional – UTESA

Aplicación web desarrollada para la **Universidad Tecnológica de Santiago (UTESA)** que permite a directores de carrera de cualquier facultad generar, redactar y descargar su **Análisis FODA (Fortalezas, Oportunidades, Debilidades y Amenazas)** conforme a la plantilla institucional homologada.

---

## 🚀 Cómo usar la aplicación

Tienes **dos opciones** sumamente sencillas:

### Opción 1: Abrir directamente (Sin instalar nada)
Simplemente haz **doble clic en el archivo `index.html`** para abrirlo en tu navegador favorito (Google Chrome, Microsoft Edge, Mozilla Firefox, Safari). Funciona de inmediato sin requerir conexión especial a un servidor.

### Opción 2: Ejecutar con el servidor local Node.js
Si prefieres servirlo como un sitio web local:
```bash
npm start
```
Luego abre en tu navegador: [http://localhost:3000](http://localhost:3000)

---

## 🌟 Características Principales

1. **Timbrado y Encabezado Oficial UTESA**:
   - Logotipo oficial corporativo en alta resolución ("50 años de excelencia académica e innovación para un mejor futuro").
   - Pie de página institucional con la dirección oficial (Sede Santiago), teléfonos, RNC, correo y portal web.

2. **Formulario Inteligente y Guiado para Directores**:
   - Solo solicita los datos esenciales: Carrera, Siglas, Facultad, Director, Período, Fuentes y las **viñetas clave** de cada cuadrante FODA.
   - Botón `+ Añadir` y control de eliminación por viñeta.

3. **Plantillas de Ejemplo con 1 Clic**:
   - **⚡ Ingeniería Eléctrica (IEL):** El caso modelo extraído del documento PDF oficial.
   - **💻 Ingeniería de Sistemas Computacionales (ISC)**.
   - **🩺 Medicina (MED)**.
   - **📊 Administración de Empresas (ADM)**.
   - Opción de **Limpiar formulario** para iniciar desde cero.

4. **Motor de Redacción Automática con Inteligencia Institucional**:
   - A partir de las viñetas ingresadas, autocompleta con redacción académica ejecutiva:
     - **1. Introducción**
     - **2. Metodología**
     - **4. Análisis de los factores** (4.1 Fortalezas, 4.2 Debilidades, 4.3 Oportunidades, 4.4 Amenazas)
     - **5. Estrategias derivadas (Matriz FODA cruzada)** (FO, DO, FA, DA) combinando estratégicamente los factores
     - **6. Conclusión ejecutiva** orientada al POA del siguiente año
   - En la pestaña **"2. Análisis y Conclusión"**, el director puede afinar o personalizar cualquier párrafo antes de exportar.

5. **Espacio Limpio para Firma y Sello Físico**:
   - Conforme a la solicitud, se han retirado la firma digital y el sello preimpreso, dejando una línea formal centrada para que cada director pueda firmar y estampar su sello oficial.

6. **Descarga Nativa en Word (.docx)**:
   - Al pulsar **"Descargar Word (.docx)"**, se genera un documento editable en Microsoft Word (.docx) con encabezado timbrado, tablas estilizadas con colores verde y marrón institucionales, viñetas, pie de página institucional y espacio para firma.

7. **Impresión / Exportación a PDF**:
   - Botón optimizado para imprimir en hojas tamaño carta con márgenes y saltos de página limpios.
