export type Zone = "LEFT" | "UP" | "RIGHT" | "DOWN" | "CENTER"

export function getPositionZone(screenSizeX: number, screenSizeY: number, posX: number, posY: number): Zone {
    if (posX < ((screenSizeX / 2) + (screenSizeX * 0.1))
        && posX > ((screenSizeX / 2) - (screenSizeX * 0.1))
        && posY < ((screenSizeY / 2) + (screenSizeY * 0.1))
        && posY > ((screenSizeY / 2) - (screenSizeY * 0.1))
    ) {
        return "CENTER"
    }
    const y1 = (screenSizeY / screenSizeX) * posX
    const y2 = ((-(screenSizeY / screenSizeX)) * posX) + screenSizeY
    if (posY > y1) {
        if (posY > (y2)) {
            return "DOWN"
        } else {
            return "LEFT"
        }
    } else {
        if (posY > (y2)) {
            return "RIGHT"
        } else {
            return "UP"
        }
    }
}
