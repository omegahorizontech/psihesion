import math

# A few places in FR, VA
lat_lon_list = [
    [38.9113764,-78.1835343],
    [38.9165136,-78.1867283],
    [38.9174327,-78.1879048],
    [38.9175197,-78.1889116],
    [38.9121435,-78.1929513]
]

def find_lat_lon_center():
    center = [0, 0]

    x = 0.0
    y = 0.0
    z = 0.0

    for coord in lat_lon_list:
        lat = math.radians(coord[0])
        lon = math.radians(coord[1])

        x += math.cos(lat) * math.cos(lon)
        y += math.cos(lat) * math.sin(lon)
        z += math.sin(lat)

    total = len(lat_lon_list)

    x = x / total
    y = y / total
    z = z / total

    central_lon = math.atan2(y, x)
    central_square_root = math.sqrt(x * x + y * y)
    central_lat = math.atan2(z, central_square_root)

    center = [math.degrees(central_lat), math.degrees(central_lon)]

    return center

center = find_lat_lon_center()
# IDEA: Handle the output of this operator, perhaps for rendering on a graph
print(center)