# 🌐 Configuración de Dominio Personalizado

## 🎯 Objetivo
Configurar un dominio personalizado para tu portfolio y emails para mejorar la profesionalidad y entregabilidad.

## 📊 Estado Actual
- **Portfolio URL**: https://portfolio-green-nu-76.vercel.app/es
- **Email FROM**: `no-reply@resend.dev` (temporal)
- **Problema**: Emails pueden ir a spam por usar dominio compartido

## 🚀 Opciones de Dominio

### Opción 1: Dominio Propio (Recomendado)
**Comprar dominio nuevo: `santiagobillordo.com`**
- 💰 **Costo**: ~$12-15 USD/año
- 🚀 **Beneficios**: Control total, profesional, mejor entregabilidad
- 📧 **Emails**: `santiago@santiagobillordo.com`, `no-reply@santiagobillordo.com`

### Opción 2: Subdominio Gratuito
**Usar servicios gratuitos como Freenom**
- 💰 **Costo**: Gratis
- ⚠️ **Limitaciones**: Menos profesional, puede tener restricciones
- 📧 **Emails**: `santiago@tudominio.tk`

### Opción 3: Solo Vercel Custom Domain
**Usar el dominio de Vercel con subdomain**
- 💰 **Costo**: Gratis (pero solo para el sitio web)
- ❌ **Limitación**: No mejora emails (siguen siendo @resend.dev)

## 🛠️ Implementación Paso a Paso

### PASO 1: Comprar Dominio (Recomendado)

#### Mejores registradores:
1. **Namecheap** (recomendado)
   - Ve a: https://www.namecheap.com
   - Busca: `santiagobillordo.com`
   - Precio: ~$12 USD/año

2. **Cloudflare** (más barato)
   - Ve a: https://www.cloudflare.com/products/registrar/
   - Precio: ~$10 USD/año

3. **Google Domains** (ahora Squarespace)
   - Ve a: https://domains.google.com
   - Precio: ~$14 USD/año

### PASO 2: Configurar Dominio en Vercel

```bash
# En Vercel Dashboard:
1. Ve a tu proyecto: portfolio-green-nu-76
2. Click "Settings" > "Domains"
3. Add Domain: santiagobillordo.com
4. Add también: www.santiagobillordo.com
5. Vercel te dará records DNS para configurar
```

#### DNS Records que debes agregar:
```
Type: A
Name: @
Value: 76.76.19.61

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### PASO 3: Configurar Dominio en Resend

```bash
# En Resend Dashboard:
1. Ve a: https://resend.com/domains
2. Click "Add Domain"
3. Ingresa: santiagobillordo.com
4. Resend te dará records DNS adicionales
```

#### DNS Records adicionales para emails:
```
Type: TXT
Name: @
Value: "v=spf1 include:_spf.resend.dev ~all"

Type: TXT  
Name: _dmarc
Value: "v=DMARC1; p=quarantine; rua=mailto:dmarc@santiagobillordo.com"

Type: CNAME
Name: resend._domainkey
Value: resend._domainkey.resend.dev
```

### PASO 4: Actualizar Código del Portfolio

```typescript
// src/app/api/contact/route.ts
// Cambiar estos valores:

// ANTES:
from: 'Portfolio <no-reply@resend.dev>'
from: 'Santiago Billordo <no-reply@resend.dev>'

// DESPUÉS:
from: 'Portfolio <no-reply@santiagobillordo.com>'
from: 'Santiago Billordo <santiago@santiagobillordo.com>'
```

### PASO 5: Verificar Configuración

#### Verificar Vercel:
1. Espera 24-48 horas para propagación DNS
2. Visita: `https://santiagobillordo.com`
3. Debe cargar tu portfolio

#### Verificar Resend:
1. En dashboard, el dominio debe mostrar "Verified" ✅
2. Envía un email de prueba
3. Revisa que llegue al inbox (no spam)

## 🔧 Configuración Rápida (Sin Dominio Propio)

### Si NO quieres comprar dominio ahora:

#### Opción A: Mejorar entregabilidad actual
```typescript
// Cambios mínimos para mejor entregabilidad:
from: 'Santiago B Portfolio <no-reply@resend.dev>'
subject: '[Santiago Billordo] Nueva consulta de...'
```

#### Opción B: Usar subdomain gratuito
1. Registra dominio gratuito en: https://www.freenom.com
2. Ejemplo: `santiagobillordo.tk`
3. Configura igual que dominio pago

## 📊 Comparación de Opciones

| Opción | Costo | Setup | Profesionalidad | Entregabilidad | Recomendado |
|--------|-------|-------|-----------------|----------------|-------------|
| Dominio propio | $12/año | 1-2 días | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ✅ SÍ |
| Subdomain gratis | Gratis | 1-2 días | ⭐⭐⭐ | ⭐⭐⭐ | 🤔 OK |
| Solo mejorar actual | Gratis | 5 min | ⭐⭐ | ⭐⭐⭐ | 🚀 RÁPIDO |

## 🎯 Mi Recomendación

### Para AHORA (5 minutos):
1. **Arreglar problema del email de confirmación**
2. **Mejorar subjects y headers actuales**
3. **Marcar como "no spam" en Gmail**

### Para ESTA SEMANA (si tienes presupuesto):
1. **Comprar `santiagobillordo.com`** en Namecheap
2. **Configurar en Vercel y Resend**
3. **Actualizar código con nuevo dominio**

### Para el FUTURO:
1. **Configurar email personalizado** (`santiago@santiagobillordo.com`)
2. **Agregar Google Analytics**
3. **SEO optimization**

## 🚨 Problema Actual a Solucionar

**En los logs veo que el email de confirmación falla silenciosamente:**
```
✅ Email al propietario enviado: fcc1f703-aef0-4698-9049-9764d44672d5  
✅ Email de confirmación enviado: undefined  ❌ PROBLEMA
```

**Pasos inmediatos:**
1. Arreglar el bug del email de confirmación
2. Probar que ambos emails funcionen
3. Luego considerar dominio personalizado

---

**¿Quieres que primero arreglemos el bug del email de confirmación, o prefieres empezar con la compra del dominio?** 