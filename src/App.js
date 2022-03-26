import './App.css';
import Header from "./components/header/Header"
import Card from "./components/card/Card"
import Footer from "./components/footer/Footer"


function App() {
  const carsArray = [
    {
      title:"Продаю Audi",
      price: 5000,
      description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores beatae ab cum qui molestiae iusto quis alias natus enim minus eveniet recusandae inventore sint repellat, rem omnis molestias! Ducimus, dignissimos!",
      img: "https://www.allcarz.ru/wp-content/uploads/2015/08/foto-c63-coupe_07.jpg"
    },
    {
      title:"Продаю BMW",
      price: 3000,
      description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores beatae ab cum qui molestiae iusto quis alias natus enim minus eveniet recusandae inventore sint repellat, rem omnis molestias! Ducimus, dignissimos!",
      img: "https://www.allcarz.ru/wp-content/uploads/2015/08/foto-c63-coupe_07.jpg"
    },
    {
      title:"Продаю Honda",
      price: 8000,
      description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores beatae ab cum qui molestiae iusto quis alias natus enim minus eveniet recusandae inventore sint repellat, rem omnis molestias! Ducimus, dignissimos!",
      img: "https://www.allcarz.ru/wp-content/uploads/2015/08/foto-c63-coupe_07.jpg"
    }
  ]
  
  return (
    <div className="App">
      <Header />
      <h2>Hello world</h2>
      
      <div className='container mt-5'>
        <div className='row justify-content-between'>
          {
            carsArray.map((item) => <Card 
            title={item.title} 
            price={item.price}
            img={item.img}
            description={item.description}
            />)
          }
          {/* <Card img="https://www.allcarz.ru/wp-content/uploads/2015/08/foto-c63-coupe_07.jpg" name="Машину" description="AMG (сокращение от Aufrecht Melcher Grossaspach) - это тюнинг-ателье подразделения Mercedes-Benz, в составе концерна Daimler AG. ... В настоящее время AMG преобразована во внутреннее тюнинг-ателье Mercedes."/>
          <Card img="https://softech.kg/image/cache/d154e4a4a782c26d9134a9acc9704b6b.jpg" name="Телефон" description="Слово «Самсунг» (кор. 삼성, 三星, более правильная передача слова по нормам практической транскрипции [самсон]) в корейском языке означает «три звезды»."/>
          <Card img="https://www.purinaone.ru/dog/sites/default/files/2021-11/shutterstock_1155759124_OG_1.jpg" name="Собаку" description="Домашнее животное из сем. хищных млекопитающих, к к-рому относятся также волк, лисица и др.Дворовая с.Вот где собака зарыта вот в чём суть дела заключается."/>
          <Card img="https://cdnn21.img.ria.ru/images/07e5/0a/0f/1754777085_0:0:2500:2000_600x0_80_0_0_96e74009be120c6d0b9188a442764ba0.jpg" name="Дом" description="Жилое (или для учреждения) здание, а также (собир.) люди, живущие в нём.Каменные д. Дойти до до́ма.Квартира, а также семья, люди, живущие вместе, их хозяйство.На дому́ у себя дома"/> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
