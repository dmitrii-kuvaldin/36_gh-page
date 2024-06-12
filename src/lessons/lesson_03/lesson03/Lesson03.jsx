import './lesson03.css';
// при импорте вы можете выбрать удобное для вас имя
import car from '../../../assets/future-supercars.webp';
import MyButton from '../button/Button';
import ParentComponent from '../../lesson_04/ParentComponent/ParentComponent';

function Lesson03() {
  return (
    <main className="App">
      <h1>Hello, React!</h1>
      <img width={200} src={car} alt="" />
      <img width={150} src={'images/car-race.jpeg'} alt="" />
      <p>first react lesson</p>
      <MyButton />
      <ParentComponent>
        <p>Дочерний компонент</p>
        <button>Кнопка</button>
      </ParentComponent>
    </main>
  );
}

export default Lesson03;
