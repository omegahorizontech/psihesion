from dataclasses import dataclass

@dataclass()
class Location:
    id: int
    latitude: float
    longitude: float
    name: str
    