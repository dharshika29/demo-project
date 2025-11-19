import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import rose from '../image/rose.png';
import rose1 from '../image/rose1.png';
import one from '../image/flower1.png';
import two from '../image/flower2.png';
import three from '../image/flower3.png';
import styles from '../styles/Supscription.module.css';

export default function Subscription() {
    const Cards = [
        {
            title: "Classic",
            image: one,
            l1: "Price $45",
            l2: "Free Delivery",
            l3: "Best for a budget",
            l4: "Glass vase with first delivery",
            l5: "Save up to 25%",
            l6: "Premium Arrangement"
        },
        {
            title: "Seasonal",
            image: two,
            l1: "Price $65",
            l2: "Free Delivery",
            l3: "Best seasonal selections",
            l4: "Glass vase with first delivery",
            l5: "Luxury candle included",
            l6: "Save up to 28%"
        },
        {
            title: "Luxe",
            image: three,
            l1: "Price $95",
            l2: "Free Delivery",
            l3: "Premium arrangement",
            l4: "Premium vase with first delivery",
            l5: "Luxury candle included",
            l6: "Save up to 30%"

        }
    ]

    //flower -form
    const [selected, setSelected] = useState("MONTHLY");
    const [count, setCount] = useState(1);
    const frequencies = ["MONTHLY", "BI-WEEKLY", "WEEKLY"];

    const Accordian = [
        {
            id: "flush-collapseOne",
            heading: "flush-headingOne",
            expanded: true,
            title: "How often will I get a new bouquet?",
        },
        {
            id: "flush-collapseTwo",
            heading: "flush-headingTwo",
            expanded: false,
            title: "Can I send subscription like as a gift?",
        },
        {
            id: "flush-collapseThree",
            heading: "flush-headingThree",
            expanded: false,
            title: "Can I choose which bouquet I get?",
        },
        {
            id: "flush-collapseFour",
            heading: "flush-headingFour",
            expanded: false,
            title: "Can I change the shipping address?",
        },
        {
            id: "flush-collapseFive",
            heading: "flush-headingFive",
            expanded: false,
            title: "What day will the subscription bouquet come?",
        },
        {
            id: "flush-collapseSix",
            heading: "flush-headingSix",
            expanded: false,
            title: "Can I suspend my subscription to flowers?",
        }
    ];

    return (
        <div>
            <div className={styles.Subscription}>
                <div className={styles.left}>
                    <div className={styles.rose}>
                        <img src={rose} alt="" width={'100%'} />
                    </div>


                </div>
                <div className={styles.right}>
                    <div className={styles.flower}>
                        <h1>Flower Subscription</h1>
                        <div className={styles.list}>
                            <p>For Yourself</p>
                            <ul>
                                <li>The perfect way to keep your home fresh and beautiful. Get a regular delivery of stunning bouquets straight to your doorstep without lifting a finger. Enjoy the beauty and fragrance of fresh flowers hassle-free!</li>
                            </ul>
                        </div>
                        <div className={styles.list}>
                            <p>As a gift</p>
                            <ul style={{ paddingTop: "0px" }}>
                                <li>Simply provide us with their address and let us take care of the rest, delivering beautiful blooms straight to their doorstep at the frequency and duration of your choosing.</li>
                            </ul>
                        </div>
                        <div className={styles.list}>
                            <p>For Business</p>
                            <ul>
                                <li>Is a great way to create a pleasant atmosphere and leave a good impression on your guests and customers. Fresh floral arrangements will improve the aesthetic image of your business, and our service guarantees timely replacement without extra care or effort on your part.</li>
                            </ul>
                        </div>
                        <button>EXPLORE PLANS</button>
                    </div>
                    
                        <h6></h6>

                </div>
            </div>
            <div className={styles.Subscription}>
                <div className={styles.left} style={{ border: "none" }}>
                    <div className={styles.queries}>
                        <h1>How Does It Works?</h1>

                    </div>
                </div>
                <div className={styles.right} style={{ border: "none" }}>
                    <div className={styles.choose}  >
                        <div className={styles.plan}>
                            <h1>Choose a Plan</h1>
                            <p>Select the subscription plan that suits you best from our three bouquet designs: classic, seasonal, and deluxe. Each plan comes with a designer vase, free delivery, and a discount of up to 30%. Our seasonal and deluxe plans also include a luxurious scented candle to enhance the ambiance.</p>
                        </div>
                        <div className={styles.plan}>
                            <h1>Frequency and Duration</h1>
                            <p>Choose delivery frequency: once a week, every two weeks, or once a month. Then, select your subscription duration from 3 to 12 months. Enjoy savings with a longer subscription. We understand that every customer has different needs, and we aim to provide flexible subscription options that cater to your specific preferences.</p>
                        </div>
                        <div className={styles.plan} >
                            <h1>Pay once</h1>
                            <p>After entering your contact and delivery information and paying for your subscription, you can sit back and relax, knowing that you have secured a regular supply of fresh, stunning flowers for yourself or your loved ones.</p>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.Subscription} style={{ marginBottom: "2rem" }}>
                <div className={styles.left}>
                    <div className={styles.rose}>
                        <img src={rose1} alt="" width={'100%'} />
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.selectives}>
                        <p>BUILD YOUR SUBSCRIPTION</p>
                        <h1>Selecting a Plan</h1>
                        <p class="subtitle">
                            Enjoy free shipping on every order and save up to 30%.
                            Every bouquet we deliver is carefully curated to ensure it arrives fresh and stunning. To modify, pause, or cancel your subscription, simply log in to your account dashboard. You're in complete control of your flower delivery experience.
                        </p>

                        <div className={styles.flowerCards}>
                            {
                                Cards.map((item) => (
                                    <div className={styles.selectParent}>
                                        <div class={styles.selectCard}>
                                            <img src={item.image} alt="" />
                                            <div class={styles.planDetails}>
                                                <h3>{item.title}</h3>
                                                <ul>
                                                    <li>{item.l1}</li>
                                                    <li>{item.l2}</li>
                                                    <li>{item.l3}</li>
                                                    <li>{item.l4}</li>
                                                    <li>{item.l5}</li>
                                                    <li>{item.l6}</li>

                                                </ul>
                                            </div>
                                        </div>
                                        <button class={styles.selectBtn}>SELECT</button>

                                    </div>
                                ))
                            }
                        </div>

                        <div className={styles.flowerForms}>
                            <div className={styles.formContainer}>
                                <h2>How often do you want flowers delivered ?</h2>
                                <p className={styles.subtitle}>Select the delivery frequency</p>


                                <div className={styles.frequencyBox}>
                                    {frequencies.map((item) => (
                                        <button
                                            key={item}
                                            className={`${styles.freqButton} ${selected === item ? styles.active : ""}`}
                                            onClick={() => setSelected(item)}
                                        >
                                            {item}
                                        </button>
                                    ))}
                                </div>


                                <hr className={styles.line} />


                                <h2>How many deliveries would you like ?</h2>
                                <p className={styles.subtitle}>
                                    Pay once and do not worry about flowers, our bouquets will be beautiful and on time,
                                    as many times as you need
                                </p>


                                <div className={styles.counterBox}>
                                    <button onClick={() => count > 1 && setCount(count - 1)} className={styles.counterBtn}>−</button>
                                    <span className={styles.count}>{count}</span>
                                    <button onClick={() => setCount(count + 1)} className={styles.counterBtn}>+</button>
                                </div>


                                <hr className={styles.line} />


                                <button className={styles.checkout}>CHECKOUT</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            {/* <hr /> */}
            <div className={styles.Subfaq}>
                <div className={styles.Faq}>
                    <div className={styles.faqTitle}>
                        <h1>Subscription FAQ</h1>
                    </div>

                    <div className={styles.Accordian}>

                        <div className="accordion accordion-flush mb-5" id="accordionFlushExample">
                            {
                            Accordian.map((item, index) => (
                                <div className="accordion-item" key={index}>
                                    <h2 className="accordion-header" id={item.heading}>
                                        <button
                                            className={`accordion-button ${item.expanded ? "" : "collapsed"}`}
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target={`#${item.id}`}
                                            aria-expanded={item.expanded}
                                            aria-controls={item.id}
                                            id={styles.ab}
                                         >
                                            {item.title}
                                        </button>
                                    </h2>

                                    <div
                                        id={item.id}
                                        className={`accordion-collapse collapse ${item.expanded ? "show" : ""}`}
                                        aria-labelledby={item.heading}
                                        data-bs-parent="#accordionFlushExample"
                                    >
                                        <div className="accordion-body">
                                            Our subscriptions allow you to select a delivery frequency that best suits your needs - either weekly, bi-weekly, or monthly. You can also choose the number of deliveries for your subscription. Choose any combination that works for you!                                        </div>
                                    </div>
                                </div>
                            ))
                            }
                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}
