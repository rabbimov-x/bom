import {useEffect} from 'react'
import AfterCarousel from '../components/AfterCarousel'
import Footer from '../components/Footer'
import Header from '../components/HeaderCarousel'
import Models from '../components/ModelsCarousel'
import Navbar from '../components/Navbar'
import Ordered from '../components/Order'
import AdminModal from '../components/AdminModal'
import Vedio from '../components/Vedio'
import styles from '../styles/Home.module.scss'
import OrderModal from '../components/OrderModal'
import Services from '../components/Services'
import Head from 'next/head'
import PhoneButton from "../components/PhoneButton";
import {useSelector} from "react-redux";
import Aos from "aos";
import CallCard from '../components/CallModall'
// import Script from 'next/script'
// import Yandex from "../yandex";



export default function Home() {
    const {sevice, languages, controLanguages} = useSelector(state => state.home);
    useEffect(() => {
        Aos.init({
            duration: 1000
        });
    }, []);
    return (
        <div className={styles.home}>
            <Head>
                <title>Carto-go Прокат премиум авто в Ташкенте</title>
                {/*<script*/}
                {/*    src={Yandex}*/}
                {/*/>*/}
                <meta property="og:url" content="https://www.carto-go.com"/>
                <meta name="title" content="Car To-Go - Rental of Premium Cars in Tashkent"/>
                <meta name="description"
                      content="A service which presents you premium cars to rent in Tashkent. No any mileage restrictions. Travel limitless."/>
                <link rel="shortcut icon" href="/car.ico"/>
                <meta name="keywords" content="car rental,rent car prices,car rentals,
                        luxury car rental,rent car tashkent,best car rental,electric car rent,
                        rent a car,limitless car run rent,rent in uzbekistan,
                        car rent service tashkent,car rent service,take car for rent,
                        rent auto,rent premium auto,premium cars rentals in tashkent,
                        premium cars rentals,get premium cars for rent,car for rent,
                        auto for rent,rent automobiles,skoda rent tashkent,rent kia,
                        kia rent tashkent,xpeng rent uzb,cheap rent,mercedec rent tashkent,
                        malibu 2 rent tashkent,kiak5 rent,skoda kodiaq rent,merc rental,
                        rentcartogo,car rent for day,weekend car rent,how to get a car for rent,
                        car for rent,car to rent,car togo,premium cars rent,
                        skoda kodiaq rent tashkent, take skoda for rent,rentcar tashkent,
                        car togo tashkent,car to go, car togo uz, carto go ru,lux car rent,
                        best rental tashkent,rent a car in,rent a car for,car rent in,car rent for,
                        cheap rent car uzbekistan,rent a car uzb,car uzb,kia k5 uzbekistan,
                        merc uzbekistan,premium cars uzbek,russia rent car"/>
                <meta name="language" content="English"/>
                <meta name="author" content="carto-go"/>
                <meta name="google-site-verification"
                      content="gA4het2igHRBmEaKIJVsxNZvDyTB0-JDc4mGqA4CJRc"/>
                <meta name="title" content="Car To-Go - Прокат Премиум Авто в Ташкенте"/>
                <meta name="description" content="Сервис дающий в прокат премиум автомобили в Ташкенте без никаких
                    ограничений по пробегу. Путишествуйте сколько хотите"/>
                <meta name="keywords" content="киак5,киа к5 аренда,киа к5 прокат,к5 гтлайн,прокат киа,скода,
                        скода кодиак аренда ташкент,киа прокат ташкент,прокат узб,ташкент авто прокат,взять в аренду авто ташкент,
                        взять авто прокат,дешевый прокат,прокат в ташкент,автопрокат,каталог авто прокат,аренда авто цены,
                        гараж авто прокат,дадим авто в прокат,получить аренду авто,ташкент авто аренда,мерс аренда ташкент,
                        как получить авто в прокат,как взять авто в прокат,дешевая аренда авто,премиум авто в аренда,
                        что взять в аренду,какую машину вять в аренду,какой авто взять в прокат,какой авто взять в аренду,
                        где взять авто аренду,где взять авто прокат,заказ авто прокат,автоаренда,автопрокат,
                        где можно взять авто в прокат,прокат автомобилей в ташкенте,аренда автомобилей,
                        Кунлик ижарага мошина,мошина ижара,ижара авто,малибу ижарага,арзон ижарага мошина олиш,
                        люкс мошина олиш ижара,в аренду машину,аренда авто на день,прокат автомобилей в,
                        авто в аренду ташкент,машины на прокат в ташкенте,аренда авто с,аренда kia k5 ташкент,прокат"/>
                <meta name="robots" content="index, follow"/>
                <meta httpEquiv="Content-Type" content="text/html; charset=utf-8"/>
                <meta name="language" content="Russian"/>
                <meta name="yandex-verification" content="e55a9e478c660a37"/>
                <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
                <link rel="canonical" href="https://carto-go.com/"/>


            </Head>

            <Navbar id="navbar"/>
            <Header/>
            <Models id="models" data-aos="fade-up"
                    data-aos-anchor="#example-anchor"
                    data-aos-offset="500"
                    data-aos-duration="500"/>
            <Ordered homeOrder id="booking" data-aos="fade-up"
                     data-aos-anchor-placement="bottom-bottom"/>
            <Vedio data-aos="zoom-in-left"/>
            <div className={styles.ServicesTitle}>
                <h1 data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500" className='title88  cl-black' id='sevices'>
                    {languages.servise[controLanguages].title}
                </h1>
            </div>
            {
                sevice.map((value) => {
                    return <Services key={value.id} index={value.id} value={value}/>
                })
            }
            <div className={styles.AfterTitle}>
                <h1 data-aos="zoom-in"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1500" className='title88 cl-black '>
                    {languages.worldOfCars[controLanguages].title}
                </h1>
            </div>
            <AfterCarousel data-aos="zoom-in"/>
            <Footer id="contact"/>
            <OrderModal inhome/>
            <PhoneButton/>
            <AdminModal simple>
                <CallCard/>
            </AdminModal>
        </div>
)
}
export async function getServerSideProps({ req, res }) {
    res.setHeader(
      'Cache-Control',
      'public, s-maxage=10, stale-while-revalidate=59'
    )
  
    return {
      props: {},
    }
  }
