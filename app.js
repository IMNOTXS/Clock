const secondHandle = document.querySelector(".handle__second");
const minuteHandle = document.querySelector(".handle__minute");
const hourHandle = document.querySelector(".handle__hour");

setInterval(setHandles, 1000);

function setHandles() {
  const d = new Date();

  const hours = d.getHours();
  const minutes = d.getMinutes();
  const seconds = d.getSeconds();

  // Increment second hand `6` degrees every second
  // 6 degrees = 360 degrees / 60 seconds
  const secondsAngle = seconds * 6;

  // Gradually increment minute hand `0.1` degrees every second
  // 0.1 degree per second = 6 degrees / 60 seconds
  const extraMinutesAngle = seconds * 0.1;
  const minutesAngle = minutes * 6 + extraMinutesAngle;

  // Gradually increment hour hand `0.5` degrees every minute
  // 0.5 degree per minute = 30 degrees / 60 minutes
  const extraHoursAngle = minutes * 0.5;
  const hoursAngle = hours * 30 + extraHoursAngle;

  secondHandle.style.transform = `translateX(-50%) rotate(${secondsAngle}deg)`;
  hourHandle.style.transform = `translateX(-50%) rotate(${hoursAngle}deg)`;
  minuteHandle.style.transform = `translateX(-50%) rotate(${minutesAngle}deg)`;
}
