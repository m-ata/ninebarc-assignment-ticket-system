export const getTime = (timStamp: Date, durationType: string) => {
    const time = new Date(timStamp).getTime();
    const randomMiliseconds = Math.floor(Math.random() * 5 * 60 * 1000) + 5 * 60 * 1000;
    const inputTime = new Date(time + randomMiliseconds);
    const randomDuration = Math.floor(Math.random() * 45 * 60 * 1000) + 45 * 60 * 1000;
    const departure = durationType === 'departure' ? inputTime : new Date(time - randomDuration);
    const arrival = durationType === 'arrival' ? inputTime :  new Date(time + randomDuration);
    const duration = new Date(arrival).getTime() - new Date(departure).getTime();
    const hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((duration / (1000 * 60)) % 60)
    return {
        departure: departure.toLocaleTimeString(),
        arrival: arrival.toLocaleTimeString(),
        duration: `${(hours < 10) ? '0' + hours : hours}:${(minutes < 10) ? "0" + minutes : minutes}`
    }
}