# Звіт: Інтерактивний світлофор з StatsBar (React + Vite)

## Мета
Реалізувати інтерактивний світлофор з можливістю:

- Підрахунку кліків по кожному кольору
- Перемикання напрямку світлофора (вертикальний ↔ горизонтальний)
- Відображення статистики кліків у зручному форматі

---

## Структура компонентів

1. **App.jsx** — головний компонент, зберігає стан лічильників та напрямок світлофора.
2. **TrafficLights.jsx** — контейнер світлофора, який відображає три кольори.
3. **Light.jsx** — окремий світловий елемент (кружок), обробляє клік.
4. **StatsBar.jsx** — панель управління та відображення статистики кліків.

---

## Реалізація

### 1. Light.jsx

Відповідає за один колір світлофора та обробку кліку.

import PropTypes from "prop-types";

function Light({ tlColor, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        backgroundColor: tlColor,
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        margin: 5,
        cursor: "pointer"
      }}
    ></div>
  );
}

Light.propTypes = {
  tlColor: PropTypes.string,
  onClick: PropTypes.func
};

export default Light;

---

### 2. TrafficLights.jsx

Відповідає за відображення світлофора та передачу подій кліку в App.

import Light from "./Light";

const TrafficLights = ({ direction = "vertical", onLightClick }) => {
  const style = {
    display: "flex",
    flexDirection: direction === "vertical" ? "column" : "row",
    backgroundColor: "#333",
    padding: 10,
    width: "fit-content",
    borderRadius: 8
  };

  return (
    <div style={style}>
      <Light tlColor="red" onClick={() => onLightClick("red")} />
      <Light tlColor="yellow" onClick={() => onLightClick("yellow")} />
      <Light tlColor="green" onClick={() => onLightClick("green")} />
    </div>
  );
};

export default TrafficLights;


---

### 3. StatsBar.jsx

Компонент, який відображає статистику кліків та кнопку перемикання напрямку світлофора.


import PropTypes from "prop-types";

const StatsBar = ({ counts, direction, onToggleDirection }) => {
  return (
    <div style={{
      marginTop: 20,
      padding: 10,
      border: "1px solid #ccc",
      borderRadius: 8,
      backgroundColor: "#f9f9f9",
      maxWidth: 300
    }}>
      <button onClick={onToggleDirection} style={{ marginBottom: 10, padding: "5px 10px" }}>
        Змінити напрямок світлофора ({direction})
      </button>
      <div>
        <strong>Статистика кліків:</strong>
        <p>Червоний - {counts.red}</p>
        <p>Жовтий - {counts.yellow}</p>
        <p>Зелений - {counts.green}</p>
      </div>
    </div>
  );
};

StatsBar.propTypes = {
  counts: PropTypes.shape({
    red: PropTypes.number,
    yellow: PropTypes.number,
    green: PropTypes.number
  }).isRequired,
  direction: PropTypes.string.isRequired,
  onToggleDirection: PropTypes.func.isRequired
};

export default StatsBar;

---

### 4. App.jsx

Головний компонент:

- Зберігає стан кліків (`counts`) та напрямок світлофора (`direction`)
- Передає callback-и у `TrafficLights` та `StatsBar`


import { useState } from "react";
import TrafficLights from "./TrafficLight";
import StatsBar from "./StatsBar";

function App() {
  const [counts, setCounts] = useState({ red: 0, yellow: 0, green: 0 });
  const [direction, setDirection] = useState("vertical");

  const handleLightClick = (color) => {
    setCounts(prev => ({ ...prev, [color]: prev[color] + 1 }));
  };

  const toggleDirection = () => {
    setDirection(prev => (prev === "vertical" ? "horizontal" : "vertical"));
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Світлофор</h1>

      <TrafficLights
        direction={direction}
        onLightClick={handleLightClick}
      />

      <StatsBar
        counts={counts}
        direction={direction}
        onToggleDirection={toggleDirection}
      />
    </div>
  );
}

export default App;


---

## Принцип роботи

1. Користувач натискає на світло (`Light`)  
2. `TrafficLights` передає колір в `App` через `onLightClick`  
3. `App` оновлює стан лічильників кліків  
4. `StatsBar` показує актуальну статистику  
5. Кнопка в `StatsBar` змінює напрямок світлофора (vertical ↔ horizontal)  
6. Інтерфейс перерендерюється автоматично

---

## Результат

- Підрахунок кліків по кожному кольору  
- Кнопка перемикання напрямку світлофора  
- Відображення статистики у зручному форматі: "Червоний - X, Жовтий - Y, Зелений - Z"  
- Один компонент світлофора використовується повторно  
- Модульна структура, легке масштабування

---

## Висновок

В ході роботи було реалізовано модульний React-застосунок з інтерактивним світлофором, який дозволяє підраховувати кліки по кожному кольору та змінювати напрямок відображення (вертикальний ↔ горизонтальний). Компонент StatsBar забезпечує зручне відображення статистики та керування напрямком, що робить інтерфейс зрозумілим та наочним. Використання підняття стану, універсальних callback-ів і модульної структури демонструє сучасні підходи розробки в React і дозволяє легко масштабувати додаток та додавати нові функції.