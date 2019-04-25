const DIAL_NUMERALS = [
  'I',
  'II',
  'III',
  'IV',
  'V',
  'VI',
  'VII',
  'VIII',
  'IX',
  'X',
  'XI',
  'XII'
];

const hourHand = document.getElementById('hours');
const minuteHand = document.getElementById('minutes');
const secondHand = document.getElementById('seconds');
const clockFace = document.getElementById('face');

const createDials = () => {
  for (let i = 0; i < 12; i++) {
    const dial = document.createElement('div');
    dial.className = 'dial';
    dial.style.transform = `translate(-50%, -50%) rotate(${30 * (i+1)}deg)`;
    const numeralContent = document.createTextNode(DIAL_NUMERALS[i]);
    dial.appendChild(numeralContent);
    clockFace.appendChild(dial);
  }
};

/**
 * Returns the exact angle from noon that the hour hand should be rotated by.
 * @param {Date} dateObj The date object representing the current date.
 */
const getHourAngleFromDate = (dateObj) => {
  return (dateObj.getHours() + (dateObj.getMinutes() / 60)) * 360 / 12;
};

/**
 * Returns the exact angle from noon that the minute hand should be rotated by.
 * @param {Date} dateObj The date object representing the current date.
 */
const getMinuteAngleFromDate = (dateObj) => {
  return (dateObj.getMinutes() + (dateObj.getSeconds() / 60)) * 360 / 60; 
};

/**
 * Returns the exact angle from noon that the second hand should be rotated by.
 * @param {Date} dateObj The date object representing the current date.
 */
const getSecondAngleFromDate = (dateObj) => {
  return dateObj.getSeconds() * 360 / 60;
};

/**
 * Updates the transform of the clock hands to represent the current time.
 */
const updateTime = () => {
  const now = new Date();
  secondHand.style.transform = `translate(-50%, -50%) rotate(${getSecondAngleFromDate(now)}deg)`;
  minuteHand.style.transform = `translate(-50%, -50%) rotate(${getMinuteAngleFromDate(now)}deg)`;
  hourHand.style.transform = `translate(-50%, -50%) rotate(${getHourAngleFromDate(now)}deg)`;
};

createDials();
updateTime();

// We want the clock to update at every passing second
window.setInterval(() => {
  updateTime();
}, 1000);

