"use client";

import HelloCardComponent from "insan/components/hello-card.component";
import StatCardComponent from "insan/components/stat-card.component";
import WorkCardComponent from "insan/components/work-card.component";

const posts = [
  {
    url: "https://t.me/insan_rostov161/85",
    image: "/post1.jpeg",
    text: "Спасибо всем ,кто принял участие в данном богоугодном деле. Пусть Всевышний примет, и приумножит. Амин !",
  },
  {
    url: "https://t.me/insan_rostov161/83",
    image: "/post2.jpeg",
    text: "СБОР ЗАВЕРШЕН ! Выражаем слова благодарности всем,кто не остался равнодушным к семье Магомедовых. Общими усилиями было собрано 181,400 тысяча рублей,которые были переданы в руки к хозяину семьи.",
  },
  {
    url: "https://t.me/insan_rostov161/80",
    image: "/post3.png",
    text: "Спасибо всем кто принял участие в данном Богоугодном деле. Пусть Всевышний примет, и приумножит. Амин !",
  },
];

const Home = () => {
  return (
    <div className="app-content">
      <HelloCardComponent />
      <div className="stat-card-list">
        <StatCardComponent
          numberStat={"С 2018 года"}
          textStat={"Помогаем людям"}
        />
        <StatCardComponent
          numberStat={"26 967 266"}
          textStat={"Рублей было собрано на благотворительность"}
        />
        <StatCardComponent
          numberStat={"746"}
          textStat={"Человек получили помощь"}
        />
      </div>
      <h1 className="title-text">Завершенные сборы</h1>
      <div className="work-card-list">
        {posts.map((el) => (
          <WorkCardComponent
            key={el.url}
            url={el.url}
            image={el.image}
            text={el.text}
          />
        ))}
      </div>
      <h1 className="title-text">Руководство</h1>
      <div className="management">
        <div className="management-head">
          <h1>
            РОСТОВСКИЙ РЕГИОНАЛЬНЫЙ БЛАГОТВОРИТЕЛЬНЫЙ ФОНД "ИНСАН" (ЧЕЛОВЕК) -
            РОСТОВ
          </h1>
          <h3>ПРЕЗИДЕНТ</h3>
          <h2>Джаватханов Закарияв Гаджимагомедович</h2>
        </div>
        <div className="management-info">
          <h2>ОГРН 1186196033176</h2>
          <h2>ИНН 6150097063</h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
