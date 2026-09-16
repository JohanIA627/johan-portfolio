# Guía: convertir tus diseños CAD a GLB para el visor 3D

*Aviso honesto: esta guía no se ha probado todavía contra un archivo real
tuyo — hoy no existe ninguno. Documenta el camino que investigamos, pero es
probable que tu primer intento necesite algún ajuste que aquí no
anticipamos. Cuando lo intentes, avísame qué falló y lo resolvemos juntos.*

## Por qué GLB y no un formato de CAD directamente

STEP, .sldprt, .par y similares son formatos de **CAD paramétrico**: guardan
cómo se construyó la pieza (extrusiones, restricciones, historial de
operaciones), no cómo dibujarla en una pantalla. Un navegador no sabe
interpretarlos. **GLB** es justo lo contrario: geometría ya "cocinada"
(triángulos, materiales, texturas) lista para que WebGL la dibuje — es el
formato que usa `<model-viewer>`, el componente que vamos a integrar en tu
web.

## Paso 1 — Exportar desde tu CAD: usa FBX, no STEP

Confirmamos que Solid Edge exporta directo a **`Documentos FBX (*.fbx)`**
desde el mismo diálogo de "Guardar como" — está en la lista, junto a STEP,
OBJ, IGES, etc. **Usa FBX en vez de STEP**: Blender lo importa de forma
nativa, sin necesidad de instalar ni habilitar ningún addon (a diferencia de
STEP, que depende de un addon que no siempre viene activado), y conserva
mejor la estructura del ensamble (cada pieza como objeto separado) y los
colores/materiales básicos.

**Solid Edge:** Archivo → Guardar como → tipo `Documentos FBX (*.fbx)`.

**SolidWorks:** Archivo → Guardar como → tipo `FBX (*.fbx)` (si tu versión no
lo muestra directo, exporta STEP como alternativa — ver más abajo).

⚠️ Si la máquina tiene varias piezas, exporta el **ensamble completo**
(assembly), no piezas sueltas por separado — si no, en Blender vas a tener
que volver a posicionar cada pieza a mano.

**Alternativa (STEP):** si por lo que sea necesitas exportar STEP en vez de
FBX (por ejemplo, para conservar más precisión geométrica), el archivo debe
ser `STEP AP242` o `AP214 (*.stp)`, pero entonces sí necesitas el addon de
importación STEP de Blender — ver el aviso en el Paso 3.

## Paso 2 — Instalar Blender

Descárgalo gratis de [blender.org](https://www.blender.org/download/).
Pesa ~2GB, instalación estándar de Windows (siguiente, siguiente,
finalizar). No necesitas licencia ni cuenta.

## Paso 3 — Importar el FBX en Blender

Con FBX este paso es directo, sin addons: **File → Import → FBX (.fbx)**,
selecciona tu archivo y listo — Blender lo trae nativamente desde hace años.

**Si en cambio exportaste STEP** (ver la alternativa del Paso 1): Blender no
siempre trae la importación de STEP activada por defecto.

1. Ve a **Edit → Preferences → Add-ons**, busca "STEP" y actívalo si
   aparece un addon de importación STEP.
2. Luego: **File → Import → STEP (.stp/.step)**.

Si el addon no existe en tu versión de Blender o la importación falla, hay
una ruta más rápida para tu primer modelo de prueba: un convertidor STEP→GLB
en línea gratuito, como **Innerscene STEP Viewer** o **CAD Exchanger**. Son
prácticos para probar rápido, pero ⚠️ **no subas ahí un modelo con detalles
confidenciales de un cliente** (por ejemplo, si el diseño real sigue bajo
reserva de la empresa) — para esos, mejor hacer la conversión localmente en
Blender. Esto es otra razón para preferir FBX: te ahorras este problema por
completo.

## Paso 4 — Limpiar el modelo en Blender

Una vez importado, antes de exportar:

- **Revisa la escala.** Solid Edge y SolidWorks trabajan en milímetros; GLB
  espera metros. Si el modelo se ve gigante o minúsculo al exportar,
  selecciónalo y escala por **0.001** (Object → Transform → Scale, o `S`
  luego `0.001` y Enter).
- **Asigna materiales/colores básicos** si el STEP no los trae (a veces
  llega todo gris). No hace falta que sea fotorrealista — colores planos
  por tipo de pieza (acero, plástico, etc.) ya se ven bien en el visor.
- **Decima las piezas muy detalladas** (tornillería, roscas, superficies
  internas que no se ven) con el modificador **Decimate**
  (Modifier Properties → Add Modifier → Decimate, ratio ~0.3–0.5) para que
  el archivo final no pese de más.

Si ya hiciste esta limpieza a mano una vez y quieres repetir el proceso
rápido para otro modelo, el script `scripts/convertir_a_glb.py` (junto
a esta guía) automatiza la escala + decimate + exportación, para no repetir
los mismos clics cada vez.

## Paso 5 — Exportar a GLB

**File → Export → glTF 2.0 (.glb/.gltf)**. En el panel de opciones de la
derecha:
- Formato: **glTF Binary (.glb)**.
- Activa la **compresión Draco** (checkbox "Compression" en la sección
  Geometry del exportador) — reduce bastante el peso del archivo sin perder
  calidad visible.

## Paso 6 — Entregarlo

Guarda el `.glb` resultante en `public/models/` con un nombre descriptivo,
por ejemplo:

- `cip-indulacteos.glb`
- `dosificadora-indunilo.glb`

y avísame para conectarlo a la tarjeta del proyecto correspondiente en la
sección de Proyectos de ingeniería (hoy esa sección usa un modelo de
muestra genérico mientras no existan los tuyos).
