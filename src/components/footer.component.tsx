"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const FooterComponent = () => {
  const pathname = usePathname();

  return (
    <div className="footer">
      <div className="footer_info">
        <img src={"./logo.svg"} alt={"Инсан"} />
        <a href="tel:89660722221">
          <h3>8 (966) 072-22-21</h3>
        </a>
        <div className="footer_info_links">
          <a href={"https://t.me/insan_rostov161"} target={"_blank"}>
            <img src={"/tg.svg"} alt={"Telegram"} />
          </a>
          <a href={"https://yandex.ru/maps/-/CHqHBU4q"} target={"_blank"}>
            <img src={"/geo.svg"} alt={"Местоположение"} />
          </a>
        </div>
        <h4>Мечеть Аманат Туркестанская ул., 1Б, Ростов-на-Дону</h4>
      </div>
      <div className="footer_links">
        <Link
          className={
            pathname === "/programs" ? "footer-link active" : "footer-link"
          }
          href={"/programs"}
        >
          Программы фонда
        </Link>
        <Link
          className={
            pathname === "/zakat" ? "footer-link active" : "footer-link"
          }
          href={"/zakat"}
        >
          Выплата закята
        </Link>
        <Link
          className={
            pathname === "/help-me" ? "footer-link active" : "footer-link"
          }
          href={"/help-me"}
        >
          Мне нужна помощь
        </Link>
      </div>
      <div className="footer_creators">
        <h2>Разработка сайта</h2>
        <a href={"https://vk.com/concept_tag"} target={"_blank"}>
          <img src={"/concept-logo.svg"} alt={"CONCEPT"} />
        </a>
        <h2>© 2025, «БФ Инсан»</h2>
      </div>
    </div>
  );
};

export default FooterComponent;
