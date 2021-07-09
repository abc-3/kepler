import sys, os
import numpy as np

"""
Planetary distances based on Keplerean elements

"""





"""
Kepler's distances of the planets from the Sun
The Moon is included with the Earth
"""
planet_deg = {

    'saturn':  { 'high': [10, 35, 56], 'low': [  8, 51,  8] },
    'jupiter': { 'high': [ 5,  6, 39], 'low': [  4, 39,  8] },
    'mars':    { 'high': [ 1, 33,  2], 'low': [  1, 18, 39] },
    'earth':   { 'high': [ 1,  2, 30], 'low': [  0, 57, 30] },
    'venus':   { 'high': [ 0, 45, 41], 'low': [  0, 42, 55] },
    'mercury': { 'high': [ 0, 30, 21], 'low': [  0, 14,  0] }    
}

def compute_ds(w):
    """ compute distances for whole sine = w """
    distances = {}
    for planet, v in planet_deg.items():
        distances[k] = {}
        for k, pos in v.items():
            deg = pos[0] + (pos[1]/60) + (pos[2]/3600)
            dist = np.sin(np.deg2rad(deg)) * w
            distances[planet][k] = dist
    return distances

"""
# compute whole sine = 1000
planets = compute_ds(1000)
# print the high & low distances for each planet
for k, v in planets.items():
    print("{}: {}".format(k, v))

saturn: {'high': 183.93228895793544, 'low': 153.88649309560518}
jupiter: {'high': 89.08262406715185, 'low': 81.10740472097561}
mars: {'high': 27.058996539821955, 'low': 22.876361835005497}
earth: {'high': 18.179511520801732, 'low': 16.725292124066016}
venus: {'high': 13.288351891282018, 'low': 12.483628022382645}
mercury: {'high': 8.828342449357729, 'low': 4.072423664626422}
"""


