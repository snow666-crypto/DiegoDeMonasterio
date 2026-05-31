# Diego De Monasterio — Landing Page

Landing page personal del Productor Asesor de Seguros **Diego De Monasterio** (Zurich · Salta Capital).

---

## Estructura de la carpeta

```
diego-de-monasterio-landing/
├── index.html              ← página principal
├── styles.css              ← estilos (todo el diseño)
├── script.js               ← interactividad (menú, validación, animaciones)
├── README.md               ← este archivo
└── assets/
    ├── logo.png            ← logo principal (header y footer)
    ├── diego.jpeg          ← foto del asesor (sección "Sobre mí")
    ├── favicon.png         ← ícono de la pestaña del navegador
    └── fonts/
        ├── montserrat.css           ← declaración @font-face local
        ├── montserrat-300.woff2
        ├── montserrat-400.woff2
        ├── montserrat-500.woff2
        ├── montserrat-600.woff2
        ├── montserrat-700.woff2
        └── montserrat-800.woff2
```

**Total:** ~230 KB. La página es 100 % estática y autocontenida — no depende de internet ni de servicios externos.

---

## Cómo subirla a un dominio

### Opción A — Hosting tradicional (cPanel, FTP, etc.)
1. Subí toda la carpeta al directorio raíz del dominio (normalmente `public_html/`, `htdocs/` o `www/`).
2. Asegurate de que `index.html` quede en la raíz (no dentro de una subcarpeta).
3. Listo. Visitá `https://tudominio.com/`.

### Opción B — Servicios estáticos gratuitos
- **Netlify:** arrastrá la carpeta a [app.netlify.com/drop](https://app.netlify.com/drop) y conectá tu dominio en *Settings → Domain management*.
- **Vercel:** importá la carpeta desde [vercel.com](https://vercel.com).
- **GitHub Pages:** subí los archivos a un repositorio y activá Pages en *Settings → Pages*.
- **Cloudflare Pages:** [pages.cloudflare.com](https://pages.cloudflare.com).

### Opción C — Probarla localmente
Doble clic en `index.html` la abre en el navegador. No hace falta servidor.

---

## Datos de contacto incluidos

- **Email:** `monasterio.asesor@gmail.com`
- **WhatsApp:** `+54 9 387 413 2814` → `https://wa.me/5493874132814`
- **Ubicación:** Salta Capital, Argentina

Para modificarlos, editar las URLs en `index.html` (buscar `5493874132814` y `monasterio.asesor@gmail.com`).

---

## Formulario de contacto

Actualmente el formulario valida los campos en el navegador y muestra un mensaje de éxito (sin envío real). Para que envíe los datos a tu email, podés conectarlo a un servicio gratuito:

- **Formspree** ([formspree.io](https://formspree.io)) — el más simple
- **Web3Forms** ([web3forms.com](https://web3forms.com))
- **EmailJS** ([emailjs.com](https://emailjs.com))

Estos servicios te dan una URL de endpoint que reemplaza el `submit` del formulario.

---

## Tecnologías

- HTML5 semántico
- CSS puro (variables, grid, flexbox, animaciones) — totalmente responsive
- JavaScript vanilla (sin librerías ni frameworks)
- Tipografía Montserrat (Google Fonts, copia local en `assets/fonts/`)
