export const timeFormat = (time, format) => {
    const date = new Date(time);
    if (date.toString() === 'Invalid Date') {
        throw new Error('The first params is not a valid value');
    }
    const y = date.getFullYear();
    const m = date.getMonth() + 1;
    const d = date.getDate();
    const h = date.getHours();
    const M = date.getMinutes();
    let result = todayOrYesterday(new Date(), time);
    if (result) {
        if (result === 'today') {
            return `${addCharacter(h)}:${addCharacter(M)}`;
        }
        if (result === 'yesterday') {
            return `昨天 ${addCharacter(h)}:${addCharacter(M)}`;
        }
    }
    let list = {
        YYYY: y,
        MM: addCharacter(m),
        DD: addCharacter(d),
        hh: addCharacter(h),
        mm: addCharacter(M)
    };
    for (let key in list) {
        format = format.replace(key, list[key]);
    }
    return format;
};

export function todayOrYesterday(initDate = new Date(), param) {
    initDate = new Date(initDate);
    const date = new Date(param);
    const y = date.getFullYear();
    const m = date.getMonth() + 1;
    const d = date.getDate();
    const h = date.getHours();
    const M = date.getMinutes();
    const year = initDate.getFullYear();
    const month = initDate.getMonth() + 1;
    const today = initDate.getDate();
    if (year === y && month === m && today === d) {
        return 'today';
    }
    if (year === y && month === m && today - d === 1) {
        return 'yesterday';
    }
    if (year === y && month - m === 1 && today === 1 && d === getDays(y, m)) {
        return 'yesterday';
    }
    if (year - y === 1 && m - month === 11 && d - today === 30) {
        return 'yesterday';
    }
    return '';
}

function addCharacter(v) {
    return (v + '').padStart(2, '0');
}

function getDays(year, month) {
    return new Date(year, month, 0).getDate();
}
