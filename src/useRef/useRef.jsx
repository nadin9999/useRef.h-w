import React, { useRef, useState, useEffect } from 'react';

const UseRef = () => {
  // 1 Счетчик кликов без перерендера
  const clickCount = useRef(0);

  const handleClick = () => {
    clickCount.current += 1;
    console.log(clickCount.current);
  };

  // 2 Управление видео-плеером
  const videoRef = useRef(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  // 3 Обратный отсчет с предупреждением
  const [time, setTime] = useState(100);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (time === 0) {
      alert("Время вышло!");
      return;
    }

    intervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, [time]);

  return (
    <div>
      {/* 1 Счетчик кликов */}
      <h2>Счетчик кликов</h2>
      <button onClick={handleClick}>Click me!</button>

      <hr />

      {/* 2 Видео-плеер */}
      <h2>Видео-плеер</h2>
      <video ref={videoRef} width="320" height="240" controls>
        <source src="https://www.w3schools.com/html/movie.mp4" />
      </video>
      <br />
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>

      <hr />

      {/* 3 Обратный отсчет */}
      <h2>Обратный отсчет</h2>
      <h3>Оставшееся время: {time} секунд</h3>
    </div>
  );
};

export default UseRef;
