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

const hourHand = document.getElementById('hours');
const minuteHand = document.getElementById('minutes');
const secondHand = document.getElementById('seconds');
const clockFace = document.getElementById('face');

createDials();
