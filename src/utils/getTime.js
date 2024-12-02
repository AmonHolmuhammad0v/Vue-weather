export default function getTime(dt, type) {
    const millisec = dt * 1000;
    const time = new Date(millisec);
    let result = 
        type == 'week' ? time.toLocaleString('ru-RU', {weekday: "short"}) : 
        type == 'day' ? time.toLocaleString('ru-RU', {day: "numeric"}) : 
        type == 'month' ? time.toLocaleString('ru-RU', {month: "short"}) : 
        type == 'hours' ? time.getHours() : 
        time.getMinutes();
    return result
}