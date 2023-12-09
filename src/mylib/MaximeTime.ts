const date = new Date()

export function getActualLocalDateTimeISO() {
    return date.getFullYear()
        + '-' + (date.getMonth() + 1).toString().padStart(2, '0')
        + '-' + date.getDate().toString().padStart(2, '0')
        + 'T' + date.getHours().toString().padStart(2, '0')
        + ':' + date.getMinutes().toString().padStart(2, '0')
        + ':' + date.getSeconds().toString().padStart(2, '0')
        + '.' + date.getMilliseconds().toString().padStart(3, '0')
        + 'L'
}

export interface MyDateTime {
    year: number,
    month: number,
    dayOfTheMonth: number,
    dayOfTheWeek: number,
    hour: number,
    minute: number,
    second: number,
    millisecond: number
}

export function getActualLocalDateTimeObject(): MyDateTime {
    return {
        year: date.getFullYear(),
        month: date.getMonth(),
        dayOfTheMonth: date.getDate(),
        dayOfTheWeek: date.getDay(),
        hour: date.getHours(),
        minute: date.getMinutes(),
        second: date.getSeconds(),
        millisecond: date.getMilliseconds()
    }
}

export function getActualDateTimeISO() {
    return date.toISOString()
}

export function getActualDateTimeUTC() {
    return date.toUTCString()
}

export function getActualLocalDateTime() {
    return date.toLocaleString()
}

export function getActualLocalDate() {
    return date.toLocaleDateString()
}

export function getActualLocalTime() {
    return date.toLocaleTimeString()
}
