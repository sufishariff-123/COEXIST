# COEXIST — Data Sources Documentation

## Overview

COEXIST integrates multiple geospatial, ecological, biodiversity, and infrastructure datasets to generate AI-assisted ecological intelligence for sustainable urban planning.

The platform combines satellite imagery, biodiversity observations, forest monitoring systems, and infrastructure mapping layers into a unified GIS pipeline.

---

# 1. Satellite & Forest Monitoring Data

## Google Earth Engine

Source:
https://earthengine.google.com/

Purpose:

* forest cover analysis
* NDVI vegetation analysis
* land-use monitoring
* ecological visualization
* satellite image processing

Datasets Used:

* Sentinel-2
* Landsat imagery

---

## Global Forest Watch

Source:
https://www.globalforestwatch.org/

Purpose:

* forest loss monitoring
* encroachment detection
* near real-time disturbance alerts
* deforestation analysis

Data Used:

* Tree cover loss
* GLAD alerts
* forest degradation layers

---

# 2. Biodiversity & Wildlife Data

## GBIF — Global Biodiversity Information Facility

Source:
https://www.gbif.org/

Purpose:

* wildlife occurrence data
* biodiversity hotspot analysis
* species observation mapping
* ecological sensitivity analysis

Example Usage:

* elephant observation mapping
* wildlife hotspot detection
* corridor approximation

---

## India Biodiversity Portal

Source:
https://indiabiodiversity.org/

Purpose:

* Indian wildlife observations
* biodiversity records
* ecological hotspot visualization
* species occurrence analysis

---

# 3. Infrastructure & Urban Data

## OpenStreetMap

Source:
https://www.openstreetmap.org/

Purpose:

* roads
* railways
* buildings
* urban infrastructure mapping
* fragmentation analysis

Tools Used:

* Overpass Turbo
* GeoJSON exports

---

# 4. Terrain & Environmental Data

## DEM / Elevation Data

Sources:

* NASA SRTM
* Google Earth Engine terrain layers

Purpose:

* elevation analysis
* terrain suitability
* wildlife movement behavior analysis
* slope analysis

---

# 5. Data Formats Used

The project primarily uses:

* GeoJSON
* GeoTIFF
* CSV
* Raster layers
* GIS vector data

---

# 6. Data Usage in COEXIST

The collected datasets are used to:

* detect ecological stress zones
* identify habitat fragmentation
* map wildlife corridors
* monitor forest degradation
* analyze infrastructure overlap
* generate ecological risk scores
* support sustainable route recommendations

---

# 7. Real-Time / Near Real-Time Monitoring

COEXIST supports periodic ecological updates using:

* satellite-based forest alerts
* recent biodiversity observations
* near real-time environmental monitoring systems

Typical refresh intervals:

* 24 hrs
* 48 hrs
* weekly updates depending on source availability

---

# Conclusion

COEXIST combines multi-source ecological intelligence into a unified geospatial AI pipeline to support sustainable urban development and wildlife coexistence.
