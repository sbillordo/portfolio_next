# ⚙️ Configuración de santiagobillordo.com

## ✅ Estado Actual
- **Dominio**: `santiagobillordo.com` (comprado en Vercel)
- **DNS Web**: ✅ Ya configurado en Vercel
- **DNS Email**: ⏳ Pendiente configurar en Resend
- **Código**: ✅ Actualizado para usar dominio personalizado

## 🚀 Próximos Pasos (en orden)

### PASO 1: Configurar Dominio en Resend
1. **Ve a Resend Dashboard**: https://resend.com/domains
2. **Click "Add Domain"**
3. **Ingresa**: `santiagobillordo.com`
4. **Resend te mostrará DNS records para agregar**

### PASO 2: Configurar DNS Records en Vercel
Como Vercel es tu registrador, configurar DNS es muy fácil:

1. **Ve a Vercel Dashboard**: https://vercel.com
2. **Ir a**: Domains > santiagobillordo.com > DNS Records
3. **Agregar estos records** (Resend te los dará exactos):

```dns
# Records que Resend te pedirá agregar:

Type: TXT
Name: @
Value: "v=spf1 include:_spf.resend.dev ~all"

Type: TXT
Name: _dmarc  
Value: "v=DMARC1; p=quarantine; rua=mailto:dmarc-reports@santiagobillordo.com"

Type: CNAME
Name: resend._domainkey
Value: resend._domainkey.resend.dev

# Opcional (para recibir emails):
Type: MX
Name: @
Value: 10 mx.resend.dev (solo si quieres recibir emails en tu dominio)
```

### PASO 3: Verificar Configuración

#### En Resend:
- **Esperar**: 15-30 minutos después de agregar DNS
- **El dominio debe mostrar**: "Verified" ✅
- **Si falla**: Revisar que DNS records estén exactos

#### En tu Portfolio:
- **URL nueva**: https://santiagobillordo.com
- **Debe funcionar**: Mismo contenido que Vercel URL

## 🧪 Testing Completo

### 1. Probar Sitio Web:
```bash
# Deben cargar correctamente:
https://santiagobillordo.com
https://www.santiagobillordo.com
```

### 2. Probar Formulario de Contacto:
- **Llenar formulario** en https://santiagobillordo.com
- **Verificar logs** en terminal local
- **Comprobar emails**:
  - Tu email: `[Santiago Billordo] Nueva consulta de...`
  - Email usuario: `[Santiago Billordo] Hemos recibido tu mensaje...`

### 3. Verificar Headers:
Los emails ahora vienen de:
- **Owner notification**: `Portfolio <no-reply@santiagobillordo.com>`
- **User confirmation**: `Santiago Billordo <santiago@santiagobillordo.com>`

## 🎯 Cambios en el Código (Completados)

### API Route (`src/app/api/contact/route.ts`):
```typescript
// ANTES:
from: 'Portfolio <no-reply@resend.dev>'
from: 'Santiago Billordo <no-reply@resend.dev>'

// DESPUÉS:
from: 'Portfolio <no-reply@santiagobillordo.com>'
from: 'Santiago Billordo <santiago@santiagobillordo.com>'
```

### Email Templates:
```typescript
// Actualizado en ConfirmationEmail.tsx:
🌐 Portfolio: santiagobillordo.com
📧 Email: santiago@santiagobillordo.com
```

## 🚨 Troubleshooting

### Si el dominio no verifica en Resend:
1. **Verificar DNS records** están exactos (sin espacios extra)
2. **Esperar más tiempo** (hasta 48 horas para propagación completa)
3. **Usar herramientas DNS** como: https://dnschecker.org

### Si emails fallan:
1. **Verificar que dominio esté "Verified"** en Resend
2. **Revisar logs** del servidor para errores específicos
3. **Probar envío manual** desde Resend dashboard

### Si sitio web no carga:
1. **Verificar configuración** en Vercel > Domains
2. **Comprobar que apunte** al proyecto correcto
3. **Limpiar caché** del navegador

## 📊 Timeline Esperado

| Paso | Tiempo | Estado |
|------|---------|---------|
| Configurar dominio en Resend | 5 min | ⏳ Próximo |
| Agregar DNS records | 10 min | ⏳ Pendiente |
| Propagación DNS | 15-30 min | ⏳ Automático |
| Verificación Resend | 5 min | ⏳ Pendiente |
| Testing completo | 10 min | ⏳ Final |

**Total estimado**: 45-60 minutos

## 🎉 Resultado Final

Cuando todo esté configurado:
- ✅ **Portfolio**: https://santiagobillordo.com (profesional)
- ✅ **Emails profesionales**: No van a spam
- ✅ **Branding consistente**: Todo bajo tu dominio
- ✅ **Confiabilidad**: Mejor entregabilidad de emails

---

**Siguiente paso**: Configurar el dominio en Resend dashboard 🚀 