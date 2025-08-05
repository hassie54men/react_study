import Button from "../Button/Button.jsx";
import { useState } from "react";
import Header from "../Header.jsx";

export default function AddTodo() {
  const [value, setValue] = useState('');
  const [items, setItems] = useState([]);

  function handleInputChange(e) {
    setValue(e.target.value);
  }

  function addItem() {
    if (value.trim() !== '') {
      setItems([...items, {
        text: value,
        checked: false // Добавляем состояние для каждого элемента
      }]);
      setValue('');
    }
  }

  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      addItem();
    }
  }

  function deleteItem(index) {
    setItems(items.filter((item, i) => i !== index));
  }

  function toggleCheck(index) {
    setItems(items.map((item, i) =>
      i === index ? { ...item, checked: !item.checked } : item
    ));
  }

  return (
    <div className="todo" onKeyPress={handleKeyPress}>
      <Header/>
      <input
        onChange={handleInputChange}
        type="text"
        className="todo__input"
        value={value}
      />
      <Button onClick={addItem}>Добавить Todo</Button>
      <ul className="todo__list">
        {items.map((item, index) => (
          <li key={index} className="todo__item">
            <label>
              <input
                onChange={() => toggleCheck(index)}
                checked={item.checked}
                type="checkbox"
              />
              <span className={item.checked ? "completed" : ""}>
                {item.text}
              </span>
            </label>
            <Button onClick={() => deleteItem(index)}>Удалить</Button>
          </li>
        ))}
      </ul>
    </div>
  );
}