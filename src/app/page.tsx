"use client"

import HelloCardComponent from "insan/components/hello-card.component";
import StatCardComponent from "insan/components/stat-card.component";
import WorkCardComponent from "insan/components/work-card.component";

const Home = () => {

    return (
        <div className='p-10'>
            <HelloCardComponent/>
            <div className='stat-card-list'>
                <StatCardComponent numberStat={'1 023 997 221'} textStat={'Рублей было собрано на благотворительность'} />
                <StatCardComponent numberStat={'203 737'} textStat={'Человек получили помощь'} />
                <StatCardComponent numberStat={'152 252'} textStat={'Человек поддержали работу фонда'} />
            </div>
            <h1 className='title-text'>Наша работа</h1>
            <div className='work-card-list'>
                <WorkCardComponent url={''} image='/hello-card-bg.jpg' text={"Спасибо всем ,кто принял участие в данном богоугодном деле. Пусть Всевышний примет, и приумножит. Амин !"}/>
                <WorkCardComponent url={''} image='/hello-card-bg.jpg' text={`СБОР ЗАВЕРШЕН!
                    Выражаем слова благодарности всем,кто не остался равнодушным к семье Магомедовых.\n
                    Общими усилиями было собрано 181,400 тысяча рублей,которые были Общими усилиями было собрано 181,400 тысяча рублей,которые были Общими усилиями было собрано 181,400 тысяча рублей,которые были Общими усилиями было собрано 181,400 тысяча рублей,которые были`}/>
                <WorkCardComponent url={''} image='/hello-card-bg.jpg' />
            </div>
            <h1 className='title-text'>Руководство</h1>
            <div className='management'>
                <div className='management-head'>
                    <div className='management-head_img'/>
                    <h3>ПРЕЗИДЕНТ</h3>
                    <h2>Джаватханов Закарияв Гаджимагомедович</h2>
                </div>
                <div className='management-info'>
                    <h2>ОГРН 1186196033176</h2>
                    <h2>ИНН 6150097063</h2>
                </div>
            </div>
        </div>
    );
}

export default Home