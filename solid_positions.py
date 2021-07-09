"""
Calculate the Radii of the Platonic Solids
Compare to Kepler's Planetary Positions
"""

import sys, os
import numpy as np

# Kepler's high & low radii planetary orbits (distance from the Sun)
# Moon is included the Earth's sweep
planet_ds = {
    'saturn': {'high': 183.93228895793544, 'low': 153.88649309560518},
    'jupiter': {'high': 89.08262406715185, 'low': 81.10740472097561},
    'mars': {'high': 27.058996539821955, 'low': 22.876361835005497},
    'earth': {'high': 18.179511520801732, 'low': 16.725292124066016},
    'venus': {'high': 13.288351891282018, 'low': 12.483628022382645},
    'mercury': {'high': 8.828342449357729, 'low': 4.072423664626422}
}

# Kepler's distances for spheres which inscribe & circumscribe the solids
# Units: radius of the circumscribing sphere is 1000
# rccf := radius of the circle circumsribing a face of the solid
# ris := radius of the inscribed sphere
solid_rs = {
    # first position between Saturn and Jupiter (first primary)
    'cube': {'edge': 1155, 'rccf': 816.5, 'ris': 577},
    # second position between Jupiter and Mars (second primary)
    'pyramid': {'edge': 1633, 'rccf': 943, 'ris': 333},
    # third position beween Mars and Earth (third primary)
    'dodecahedron': {'edge': 714, 'rccf': 607, 'ris': 795},
    # fourth position between Earth and Venus (sencond secondary)
    'icosohedron': {'edge': 1051, 'rccf': 607, 'ris': 795}, 
    # fifth position between Venus and Mercury (first secondary)
    'octahedron': {'edge': 1414, 'rccf': 816.5, 'ris': 577} 
}

# Compute solid distances relative to planetary distances
# Cube takes the low radius of Saturn as the radius of its circumscribing sphere
cube_incirc = (planet_ds['saturn']['low'] / 1000) * solid_rs['cube']['ris']
cube_edge = (planet_ds['saturn']['low'] / 1000) * solid_rs['cube']['edge']
pyramid_incirc = (planet_ds['jupiter']['low'] / 1000) * solid_rs['pyramid']['rccf']
dodecahedron_incirc = (planet_ds['mars']['low'] / 1000) * solid_rs['dodecahedron']['ris']
icosohedron_incirc = (planet_ds['earth']['low'] / 1000) * solid_rs['icosohedron']['ris']
octohedron_incirc = (planet_ds['venus']['low'] / 1000) * solid_rs['octahedron']['ris']
solid_ds = {
    'cube': cube_circ,
    'cube_edge': cube_edge,
    'pyramid': pyramid_circ,
    'dodecahedron': dodecahedron_circ,
    'icosohedron': icosohedron_circ,
    'octohedron': octohedron_circ
}
for k, v in solid_ds.items():
    print("{}: {}".format(k, v))
"""
cube: 88.79250651616418
pyramid: 27.008765772084878
dodecahedron: 18.18670765882937
icosohedron: 13.296607238632484
octohedron: 7.2030533689147855
"""