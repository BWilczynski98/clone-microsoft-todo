import React from 'react';

const now = new Date();
const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const date = {
    dayOfMonth: now.getDate(),
    dayName: dayNames[now.getDay()],
    monthName: monthNames[now.getMonth()],
    year: now.getFullYear(),
}






