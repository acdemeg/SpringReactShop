import React from 'react';
import styles from '../../scenes/Registration/Registration.scss'

const SelectInput = ({ labelName, labelId, nameForm }) => {
  const attributeTypes = (
    <div className={styles.inputForm}>
      <div className={styles.inputTitles}>
          <p>Выбирете категорию</p> 
      </div>
      <div className="select"
        style={{ width: "100%"}}>
        <select name={nameForm}
          style={{ width: "100%"}}>
          <option>Все товары&emsp;&emsp;&emsp;&emsp;</option>
          <option>Мониторы</option>
          <option>Ноутбуки</option>
          <option>Платы</option>
          <option>Видеокарты</option>
          <option>Охлаждение</option>
          <option>Блоки питания</option>
          <option>Процессоры</option>
          <option>Корпуса</option>
          <option>Оперативная память</option>
          <option>Программное обеспечение</option>
          <option>Накопители</option>
          <option>Аксессурары</option>
        </select>
      </div>
    </div>
  );


  return (
    <label
      htmlFor={labelId}
    >
      {labelName}
      <div id={labelId}>{attributeTypes}</div>
    </label>
  );
};

export default SelectInput;
