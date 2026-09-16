"""
Convierte un FBX (o STEP) exportado de tu CAD a un GLB listo para el visor web.

Uso (desde una terminal, con Blender instalado):
    blender --background --python convertir_a_glb.py -- entrada.fbx salida.glb
    blender --background --python convertir_a_glb.py -- entrada.step salida.glb --formato step

Por defecto asume **FBX**, que Blender importa de forma nativa (sin addons) y
es la ruta recomendada porque Solid Edge lo exporta directo (Archivo > Guardar
como > Documentos FBX). STEP sigue soportado como alternativa si prefieres
esa ruta, pero requiere que tengas habilitado un addon de importación STEP en
Blender (Edit > Preferences > Add-ons) — si el nombre del operador no
coincide con el que dejamos abajo, ajústalo ahí.

El script hace: importar -> escalar mm->m -> decimar -> exportar GLB con
compresión Draco. Ajusta ESCALA y RATIO_DECIMATE abajo si tu modelo lo
necesita.

⚠️ Sin probar todavía contra un archivo real tuyo (no existía ninguno al
escribir esto) — avísame qué falla en tu primer intento y lo ajustamos.
"""

import sys
import bpy

# --- Parámetros ajustables -------------------------------------------------
ESCALA = 0.001          # mm -> m. Pon 1.0 si tu archivo ya viene en metros.
RATIO_DECIMATE = 0.5    # 1.0 = sin reducir triángulos, más bajo = más ligero.

# --- Argumentos de línea de comandos (todo lo que va después de "--") ------
argv = sys.argv[sys.argv.index("--") + 1:] if "--" in sys.argv else []
if len(argv) < 2:
    raise SystemExit(
        "Uso: blender --background --python convertir_a_glb.py -- entrada.fbx salida.glb [--formato fbx|step]"
    )
ruta_entrada, ruta_salida = argv[0], argv[1]
formato = "fbx"
if "--formato" in argv:
    formato = argv[argv.index("--formato") + 1].lower()

# --- Limpiar la escena por defecto (el cubo inicial) ------------------------
bpy.ops.object.select_all(action="SELECT")
bpy.ops.object.delete(use_global=False)

# --- Importar el modelo ------------------------------------------------------
if formato == "fbx":
    # Importador nativo de Blender, siempre disponible, sin addons.
    bpy.ops.import_scene.fbx(filepath=ruta_entrada)
elif formato == "step":
    # El operador exacto depende del addon de importación STEP que tengas
    # habilitado (Edit > Preferences > Add-ons, buscar "STEP"). Este es el
    # nombre más común, pero AJÚSTALO si tu Blender no lo reconoce.
    bpy.ops.import_scene.occ_import_step(filepath=ruta_entrada)
else:
    raise SystemExit(f"Formato no soportado: {formato} (usa 'fbx' o 'step')")

objetos_importados = [obj for obj in bpy.context.scene.objects if obj.type == "MESH"]
if not objetos_importados:
    raise SystemExit("No se importó ninguna malla — revisa el formato/operador de importación arriba.")

# --- Escalar mm -> m ----------------------------------------------------------
for obj in objetos_importados:
    obj.scale = (ESCALA, ESCALA, ESCALA)
    obj.select_set(True)
bpy.context.view_layer.objects.active = objetos_importados[0]
bpy.ops.object.transform_apply(location=False, rotation=False, scale=True)

# --- Decimar geometría muy detallada (tornillería, roscas, etc.) -------------
for obj in objetos_importados:
    mod = obj.modifiers.new(name="Decimate", type="DECIMATE")
    mod.ratio = RATIO_DECIMATE
    bpy.context.view_layer.objects.active = obj
    bpy.ops.object.modifier_apply(modifier=mod.name)

# --- Exportar a GLB con compresión Draco -------------------------------------
bpy.ops.export_scene.gltf(
    filepath=ruta_salida,
    export_format="GLB",
    export_draco_mesh_compression_enable=True,
    use_selection=False,
)

print(f"Listo: {ruta_salida}")
