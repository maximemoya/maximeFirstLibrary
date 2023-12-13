const date = new Date()

// -------
//  Lima
// -------

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

export function getLocalDateTimeObjectFrom(date: Date): MyDateTime {
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

export function getLocalDateTimeISOFrom(date: Date) {
    return date.getFullYear()
        + '-' + (date.getMonth() + 1).toString().padStart(2, '0')
        + '-' + date.getDate().toString().padStart(2, '0')
        + 'T' + date.getHours().toString().padStart(2, '0')
        + ':' + date.getMinutes().toString().padStart(2, '0')
        + ':' + date.getSeconds().toString().padStart(2, '0')
        + '.' + date.getMilliseconds().toString().padStart(3, '0')
        + 'L'
}

export function getActualLocalDate() {
    return date.getFullYear()
        + '-' + (date.getMonth() + 1).toString().padStart(2, '0')
        + '-' + date.getDate().toString().padStart(2, '0')
}

export function getLocalDateFrom(date: Date) {
    return date.getFullYear()
        + '-' + (date.getMonth() + 1).toString().padStart(2, '0')
        + '-' + date.getDate().toString().padStart(2, '0')
}

export function getActualLocalTime24() {
    return date.getHours().toString().padStart(2, '0')
        + ':' + date.getMinutes().toString().padStart(2, '0')
        + ':' + date.getSeconds().toString().padStart(2, '0')
}

export function getLocalTime24From(date: Date) {
    return date.getHours().toString().padStart(2, '0')
        + ':' + date.getMinutes().toString().padStart(2, '0')
        + ':' + date.getSeconds().toString().padStart(2, '0')
}

// --------
//  Zoulou
// --------

export function getActualDateTimeISO() {
    return date.toISOString()
}

export function getDateTimeISOFrom(date: Date) {
    return date.toISOString()
}

export function getActualDateTimeUTC() {
    return date.toUTCString()
}

export function getDateTimeUTCFrom(date: Date) {
    return date.toUTCString()
}

// -------------
// CONDITIONNAL
// -------------

export function isDateOnlySameYear(dateA: Date, dateB: Date) {
    return (dateA.getFullYear() === dateB.getFullYear())
}

export function isDateOnlySameMonth(dateA: Date, dateB: Date) {
    return (dateA.getMonth() === dateB.getMonth())
}

export function isDateOnlySameDay(dateA: Date, dateB: Date) {
    return (dateA.getDate() === dateB.getDate())
}

export function isDateOnlySameHour(dateA: Date, dateB: Date) {
    return (dateA.getHours() === dateB.getHours())
}

export function isDateOnlySameMinute(dateA: Date, dateB: Date) {
    return (dateA.getMinutes() === dateB.getMinutes())
}

export function isDateOnlySameSecond(dateA: Date, dateB: Date) {
    return (dateA.getSeconds() === dateB.getSeconds())
}

// ---------------------------

export function isDateEqual(
    dateA: Date,
    dateB: Date,
    according: "year" | "month" | "day" | "hour" | "minute" | "second" | undefined = undefined
) {
    switch (according) {
        case undefined: {
            return (dateA.getTime() === dateB.getTime())
        }
        case "year": {
            return (dateA.getFullYear() === dateB.getFullYear())
        }
        case "month": {
            return (
                dateA.getFullYear() === dateB.getFullYear() &&
                dateA.getMonth() === dateB.getMonth()
            )
        }
        case "day": {
            return (
                dateA.getFullYear() === dateB.getFullYear() &&
                dateA.getMonth() === dateB.getMonth() &&
                dateA.getDay() === dateB.getDay()
            )
        }
        case "hour": {
            return (
                dateA.getFullYear() === dateB.getFullYear() &&
                dateA.getMonth() === dateB.getMonth() &&
                dateA.getDay() === dateB.getDay() &&
                dateA.getHours() === dateB.getHours()
            )
        }
        case "minute": {
            return (
                dateA.getFullYear() === dateB.getFullYear() &&
                dateA.getMonth() === dateB.getMonth() &&
                dateA.getDay() === dateB.getDay() &&
                dateA.getHours() === dateB.getHours() &&
                dateA.getMinutes() === dateB.getMinutes()
            )
        }
        case "second": {
            return (
                dateA.getFullYear() === dateB.getFullYear() &&
                dateA.getMonth() === dateB.getMonth() &&
                dateA.getDay() === dateB.getDay() &&
                dateA.getHours() === dateB.getHours() &&
                dateA.getMinutes() === dateB.getMinutes() &&
                dateA.getSeconds() === dateB.getSeconds()
            )
        }
        default: throw new Error("unhandle case")
    }
}

export function isDateBefore(
    dateA: Date,
    dateB: Date,
    according: "year" | "month" | "day" | "hour" | "minute" | "second" | undefined = undefined
) {
    switch (according) {
        case undefined: {
            return (dateA.getTime() < dateB.getTime());
        }
        case "year": {
            return (dateA.getFullYear() < dateB.getFullYear());
        }
        case "month": {

            return (
                dateA.getFullYear() < dateB.getFullYear() ||
                (
                    dateA.getFullYear() === dateB.getFullYear() &&
                    dateA.getMonth() < dateB.getMonth()
                )
            );
        }
        case "day": {
            return (
                dateA.getFullYear() < dateB.getFullYear() ||
                (
                    dateA.getFullYear() === dateB.getFullYear() &&
                    dateA.getMonth() < dateB.getMonth()
                ) ||
                (
                    dateA.getFullYear() === dateB.getFullYear() &&
                    dateA.getMonth() === dateB.getMonth() &&
                    dateA.getDate() < dateB.getDate()
                )
            );
        }
        case "hour": {
            return (
                dateA.getFullYear() < dateB.getFullYear() ||
                (
                    dateA.getFullYear() === dateB.getFullYear() &&
                    dateA.getMonth() < dateB.getMonth()
                ) ||
                (
                    dateA.getFullYear() === dateB.getFullYear() &&
                    dateA.getMonth() === dateB.getMonth() &&
                    dateA.getDate() < dateB.getDate()
                ) ||
                (
                    dateA.getFullYear() === dateB.getFullYear() &&
                    dateA.getMonth() === dateB.getMonth() &&
                    dateA.getDate() === dateB.getDate() &&
                    dateA.getHours() < dateB.getHours()
                )
            );
        }
        case "minute": {
            return (
                dateA.getFullYear() < dateB.getFullYear() ||
                (
                    dateA.getFullYear() === dateB.getFullYear() &&
                    dateA.getMonth() < dateB.getMonth()
                ) ||
                (
                    dateA.getFullYear() === dateB.getFullYear() &&
                    dateA.getMonth() === dateB.getMonth() &&
                    dateA.getDate() < dateB.getDate()
                ) ||
                (
                    dateA.getFullYear() === dateB.getFullYear() &&
                    dateA.getMonth() === dateB.getMonth() &&
                    dateA.getDate() === dateB.getDate() &&
                    dateA.getHours() < dateB.getHours()
                ) ||
                (
                    dateA.getFullYear() === dateB.getFullYear() &&
                    dateA.getMonth() === dateB.getMonth() &&
                    dateA.getDate() === dateB.getDate() &&
                    dateA.getHours() === dateB.getHours() &&
                    dateA.getMinutes() < dateB.getMinutes()
                )
            );
        }
        case "second": {
            return (
                dateA.getFullYear() < dateB.getFullYear() ||
                (
                    dateA.getFullYear() === dateB.getFullYear() &&
                    dateA.getMonth() < dateB.getMonth()
                ) ||
                (
                    dateA.getFullYear() === dateB.getFullYear() &&
                    dateA.getMonth() === dateB.getMonth() &&
                    dateA.getDate() < dateB.getDate()
                ) ||
                (
                    dateA.getFullYear() === dateB.getFullYear() &&
                    dateA.getMonth() === dateB.getMonth() &&
                    dateA.getDate() === dateB.getDate() &&
                    dateA.getHours() < dateB.getHours()
                ) ||
                (
                    dateA.getFullYear() === dateB.getFullYear() &&
                    dateA.getMonth() === dateB.getMonth() &&
                    dateA.getDate() === dateB.getDate() &&
                    dateA.getHours() === dateB.getHours() &&
                    dateA.getMinutes() < dateB.getMinutes()
                ) ||
                (
                    dateA.getFullYear() === dateB.getFullYear() &&
                    dateA.getMonth() === dateB.getMonth() &&
                    dateA.getDate() === dateB.getDate() &&
                    dateA.getHours() === dateB.getHours() &&
                    dateA.getMinutes() === dateB.getMinutes() &&
                    dateA.getSeconds() < dateB.getSeconds()
                )
            );
        }
        default: throw new Error("unhandle case")
    }
}

export function isDateAfter(
    dateA: Date,
    dateB: Date,
    according: "year" | "month" | "day" | "hour" | "minute" | "second" | undefined = undefined
) {
    switch (according) {
        case undefined: {
            return (dateA.getTime() > dateB.getTime());
        }
        case "year": {
            return (dateA.getFullYear() > dateB.getFullYear());
        }
        case "month": {

            return (
                dateA.getFullYear() > dateB.getFullYear() ||
                (
                    dateA.getFullYear() === dateB.getFullYear() &&
                    dateA.getMonth() > dateB.getMonth()
                )
            );
        }
        case "day": {
            return (
                dateA.getFullYear() > dateB.getFullYear() ||
                (
                    dateA.getFullYear() === dateB.getFullYear() &&
                    dateA.getMonth() > dateB.getMonth()
                ) ||
                (
                    dateA.getFullYear() === dateB.getFullYear() &&
                    dateA.getMonth() === dateB.getMonth() &&
                    dateA.getDate() > dateB.getDate()
                )
            );
        }
        case "hour": {
            return (
                dateA.getFullYear() > dateB.getFullYear() ||
                (
                    dateA.getFullYear() === dateB.getFullYear() &&
                    dateA.getMonth() > dateB.getMonth()
                ) ||
                (
                    dateA.getFullYear() === dateB.getFullYear() &&
                    dateA.getMonth() === dateB.getMonth() &&
                    dateA.getDate() > dateB.getDate()
                ) ||
                (
                    dateA.getFullYear() === dateB.getFullYear() &&
                    dateA.getMonth() === dateB.getMonth() &&
                    dateA.getDate() === dateB.getDate() &&
                    dateA.getHours() > dateB.getHours()
                )
            );
        }
        case "minute": {
            return (
                dateA.getFullYear() > dateB.getFullYear() ||
                (
                    dateA.getFullYear() === dateB.getFullYear() &&
                    dateA.getMonth() > dateB.getMonth()
                ) ||
                (
                    dateA.getFullYear() === dateB.getFullYear() &&
                    dateA.getMonth() === dateB.getMonth() &&
                    dateA.getDate() > dateB.getDate()
                ) ||
                (
                    dateA.getFullYear() === dateB.getFullYear() &&
                    dateA.getMonth() === dateB.getMonth() &&
                    dateA.getDate() === dateB.getDate() &&
                    dateA.getHours() > dateB.getHours()
                ) ||
                (
                    dateA.getFullYear() === dateB.getFullYear() &&
                    dateA.getMonth() === dateB.getMonth() &&
                    dateA.getDate() === dateB.getDate() &&
                    dateA.getHours() === dateB.getHours() &&
                    dateA.getMinutes() > dateB.getMinutes()
                )
            );
        }
        case "second": {
            return (
                dateA.getFullYear() > dateB.getFullYear() ||
                (
                    dateA.getFullYear() === dateB.getFullYear() &&
                    dateA.getMonth() > dateB.getMonth()
                ) ||
                (
                    dateA.getFullYear() === dateB.getFullYear() &&
                    dateA.getMonth() === dateB.getMonth() &&
                    dateA.getDate() > dateB.getDate()
                ) ||
                (
                    dateA.getFullYear() === dateB.getFullYear() &&
                    dateA.getMonth() === dateB.getMonth() &&
                    dateA.getDate() === dateB.getDate() &&
                    dateA.getHours() > dateB.getHours()
                ) ||
                (
                    dateA.getFullYear() === dateB.getFullYear() &&
                    dateA.getMonth() === dateB.getMonth() &&
                    dateA.getDate() === dateB.getDate() &&
                    dateA.getHours() === dateB.getHours() &&
                    dateA.getMinutes() > dateB.getMinutes()
                ) ||
                (
                    dateA.getFullYear() === dateB.getFullYear() &&
                    dateA.getMonth() === dateB.getMonth() &&
                    dateA.getDate() === dateB.getDate() &&
                    dateA.getHours() === dateB.getHours() &&
                    dateA.getMinutes() === dateB.getMinutes() &&
                    dateA.getSeconds() > dateB.getSeconds()
                )
            );
        }
        default: throw new Error("unhandle case")
    }
}
