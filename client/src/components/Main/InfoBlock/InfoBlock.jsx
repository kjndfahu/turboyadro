import React from 'react';
import styles from './InfoBlock.module.scss';
import firstlogo from '../../../assets/listlogos/firstlogo.svg'
import secondlogo from '../../../assets/listlogos/secondlogo.svg'
import thirdlogo from '../../../assets/listlogos/thirdlogo.svg'
import fourthlogo from '../../../assets/listlogos/fouthlogo.svg'
import fifthlogo from '../../../assets/listlogos/fifthlogo.svg'
import mainimage from '../../../assets/mainimage.svg'

function InfoBlock() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.textsandlogo}>
                <div className={styles.allcontent}>
                    <div className={styles.texts}>
                        <h1>Готовая семантика за 1 минуту</h1>
                        <h3>Сервис <span>автоматического</span> сбора очищенных запросов для любой страницы сайта</h3>
                    </div>
                    <div className={styles.buttonandtext}>
                        <button className={styles.trybutton}>ПОПРОБОВАТЬ</button>
                        <div className={styles.paragraph}>
                            <p className={styles.akcia}>При регистрации 500 руб.,<br/> хватит чтобы влюбиться</p>
                            <svg width="18" height="15" viewBox="0 0 18 15" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M3.94972 7.5L0.349996 2.77032C0.0640145 2.39444 -0.0534308 1.9295 0.0226027 1.47424C0.0986361 1.01899 0.362159 0.609279 0.757204 0.332129C0.951093 0.197839 1.17194 0.101173 1.40666 0.0478598C1.64139 -0.00545352 1.88521 -0.0143308 2.12368 0.0217554C2.36215 0.0578417 2.59042 0.138157 2.79497 0.257942C2.99951 0.377726 3.17617 0.534544 3.31447 0.719103L3.93615 1.53857L4.56053 0.719103C4.69883 0.534544 4.87549 0.377726 5.08003 0.257942C5.28458 0.138157 5.51285 0.0578417 5.75132 0.0217554C5.9898 -0.0143308 6.23362 -0.00545352 6.46834 0.0478598C6.70306 0.101173 6.92391 0.197839 7.1178 0.332129C7.51284 0.609279 7.77636 1.01899 7.8524 1.47424C7.92843 1.9295 7.81099 2.39444 7.525 2.77032L3.94972 7.5Z"
                                    fill="#F35A05"/>
                                <path
                                    d="M14.0747 7.5L10.475 2.77032C10.189 2.39444 10.0716 1.9295 10.1476 1.47424C10.2236 1.01899 10.4872 0.609279 10.8822 0.332129C11.0761 0.197839 11.2969 0.101173 11.5317 0.0478598C11.7664 -0.00545352 12.0102 -0.0143308 12.2487 0.0217554C12.4871 0.0578417 12.7154 0.138157 12.92 0.257942C13.1245 0.377726 13.3012 0.534544 13.4395 0.719103L14.0611 1.53857L14.6855 0.719103C14.8238 0.534544 15.0005 0.377726 15.205 0.257942C15.4096 0.138157 15.6379 0.0578417 15.8763 0.0217554C16.1148 -0.0143308 16.3586 -0.00545352 16.5933 0.0478598C16.8281 0.101173 17.0489 0.197839 17.2428 0.332129C17.6378 0.609279 17.9014 1.01899 17.9774 1.47424C18.0534 1.9295 17.936 2.39444 17.65 2.77032L14.0747 7.5Z"
                                    fill="#F35A05"/>
                                <path
                                    d="M7.55786 14.9961C7.8485 14.9961 8.12702 14.9961 8.41766 14.9961C11.1832 14.7157 13.7339 13.5255 15.5747 11.6563C15.6872 11.5513 15.75 11.4114 15.75 11.2659C15.75 11.1204 15.6872 10.9806 15.5747 10.8756C15.4589 10.7723 15.3021 10.7143 15.1387 10.7143C14.9753 10.7143 14.8185 10.7723 14.7028 10.8756C13.0686 12.538 10.8026 13.597 8.345 13.8467C7.42062 13.9904 6.46985 13.9024 5.59786 13.5923C4.72586 13.2823 3.96662 12.7624 3.40412 12.09C3.36229 12.0243 3.30586 11.967 3.23831 11.9216C3.17077 11.8762 3.09354 11.8437 3.01142 11.8261C2.92929 11.8085 2.84401 11.8062 2.76083 11.8193C2.67765 11.8323 2.59834 11.8605 2.52782 11.9021C2.4573 11.9437 2.39706 11.9979 2.35081 12.0611C2.30457 12.1244 2.27332 12.1955 2.25898 12.27C2.24463 12.3445 2.2475 12.4209 2.26742 12.4944C2.28734 12.5679 2.32388 12.6369 2.37478 12.6973C2.95596 13.4372 3.73465 14.0351 4.63994 14.4366C5.54522 14.8382 6.54833 15.0305 7.55786 14.9961Z"
                                    fill="#07040C"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <img className={styles.mainimage} src={mainimage} alt=""/>
            </div>
            <div className={styles.advantageList}>
                <div className={styles.advantageblock}>
                    <img className={styles.logos} src={firstlogo} alt=""/>
                    <h2 className={styles.listhead}>Избави<br/>от рутины</h2>
                    <p className={styles.listparagraphs}>Долой чистку, парсинг, группировку</p>
                </div>
                <div className={styles.advantageblock}>
                    <img className={styles.logos} src={secondlogo} alt=""/>
                    <h2 className={styles.listhead}>Легко<br/>разобраться</h2>
                    <p className={styles.listparagraphs}>Всего 2 кнопки</p>
                </div>
                <div className={styles.advantageblock}>
                    <img className={styles.logos} src={thirdlogo} alt=""/>
                    <h2 className={styles.listhead}>Больше<br/> заработаешь</h2>
                    <p className={styles.listparagraphs}>Высвободится много<br/> времени на новых<br/>
                        клиентов</p>
                </div>
                <div className={styles.advantageblock}>
                    <img className={styles.logos} src={fourthlogo} alt=""/>
                    <h2 className={styles.listhead}>Экономия<br/> времени</h2>
                    <p className={styles.listparagraphs}>Не надо обучать<br/> сотрудников сбору<br/> семантики и сложным<br/>
                        действиям</p>
                </div>
                <div className={styles.advantageblock}>
                    <img className={styles.logos} src={fifthlogo} alt=""/>
                    <h2 className={styles.listhead}>Отсутствие<br/> ошибок</h2>
                    <p className={styles.listparagraphs}>Человеческий фактор<br/> и лень никто не
                        отменял, <br/>влияющие на полноту<br/> их сбора</p>
                </div>
            </div>
        </div>
    )
}

export default InfoBlock;