"use client"; 
import React, { useState } from 'react'
import "./faq.css";
import Image from 'next/image';
const FaqsPage = () => {
    const [activeAccordion, setActiveAccordion] = useState(null);

    const toggleAccordion = (index) => {
        setActiveAccordion(activeAccordion === index ? null : index);
    };

    const faqs = [
        {
            question: "What is AT Online?",
            answer: "AT Online is an online platform that provides a wide range of laptops from top brands. We offer laptops for students, professionals, and gamers. Our collection includes models from HP, Dell, Lenovo, Apple, Asus, and Acer. We also have a variety of gaming laptops that are perfect for gaming enthusiasts.",
        },
        {
            question: "Are the laptops at AT Online brand new?",
            answer: "AT Online primarily offers certified pre-owned laptops. Each product listing specifies whether the laptop is brand new or certified pre-owned, so you can choose according to your preference.",
        },
        {
            question: "Do you provide warranties on your laptops?",
            answer: "Yes, we provide local warranties on many of our laptops, with coverage for up to 1 year. Specific warranty details are available on individual product pages.",
        },
        {
            question: "Can I return a product if I'm not satisfied?",
            answer: "Absolutely! Tech Up offers a 7-day money-back guarantee. If you're not completely satisfied with your purchase, you can return it within 7 days of receipt, no questions asked.",
        }
    ];
    return (
        <>
            <div className='faq-main'>
                <h1>
                    Why Us ?
                </h1>
                <p className='opacity-75 ftSize-16'>
                    Whether you’re a student, professional, or gamer, we have the perfect laptop for you.
                    Our collection includes top brands known for their reliability and performance.
                    From sleek and lightweight models to powerful gaming laptops, we have it all.
                </p>
            </div>
            <Image src="/images/faqImg.png" width={100} height={400} alt="" className='w-100 h-100' />

            <div className='my-2'>
                <h1 className='text-center'>
                    FAQS
                </h1>
                <div className="accordion acc-main-style" id="accordionExample">
                    {faqs.map((faq, index) => (
                        <div className="accordion-item" key={index}>
                            <h2 className="accordion-header" id={`heading${index}`}>
                                <button
                                    className={`accordion-button faq-que ${activeAccordion === index ? 'active' : ''}`}
                                    type="button"
                                    onClick={() => toggleAccordion(index)}
                                    aria-expanded={activeAccordion === index ? "true" : "false"}
                                    aria-controls={`collapse${index}`}
                                >
                                    <svg className="icon icon-accordion mx-2" aria-hidden="true" focusable="false"
                                        xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                                        <path
                                            d="M9.56285 11.959C9.36021 11.959 9.19593 11.7947 9.19593 11.5921V11.4654C9.19266 10.9745 9.27959 10.5556 9.51194 10.162C9.73885 9.77751 10.0875 9.44653 10.5519 9.09905C10.9668 8.78804 11.2183 8.53255 11.3688 8.28844C11.5132 8.05415 11.577 7.80994 11.577 7.49433V7.48101C11.577 6.58737 10.9199 5.94963 10.0093 5.94963C9.14693 5.94963 8.48176 6.556 8.39691 7.55858C8.38999 7.64041 8.35581 7.71754 8.29986 7.77765L8.29366 7.78431C8.22548 7.85755 8.13034 7.89977 8.03028 7.90119L7.55903 7.90785C7.43278 7.90963 7.31449 7.84638 7.24586 7.7404C7.19061 7.65507 7.1738 7.55171 7.19715 7.45492C7.30916 5.93601 8.41577 4.74287 10.0217 4.74287C11.6246 4.74287 12.8131 5.91906 12.8131 7.46103V7.47435C12.8131 7.98614 12.6995 8.4388 12.4473 8.86135C12.199 9.27731 11.8283 9.64397 11.3455 10.0059L11.3431 10.0077C10.929 10.313 10.7058 10.5344 10.5791 10.746C10.4596 10.9455 10.4072 11.1677 10.4072 11.5174V11.5921C10.4072 11.7947 10.2429 11.959 10.0403 11.959H9.56285ZM10.7049 14.3815C10.7049 14.8554 10.3695 15.2613 9.86668 15.2613C9.36996 15.2613 9.02231 14.862 9.02231 14.3815C9.02231 13.9045 9.37305 13.5084 9.86668 13.5084C10.3665 13.5084 10.7049 13.911 10.7049 14.3815Z">
                                        </path>
                                        <path
                                            d="M18.5 10C18.5 14.6944 14.6944 18.5 10 18.5C5.30558 18.5 1.5 14.6944 1.5 10C1.5 5.30558 5.30558 1.5 10 1.5C14.6944 1.5 18.5 5.30558 18.5 10ZM10 17.4967C14.1403 17.4967 17.4967 14.1403 17.4967 10C17.4967 5.85971 14.1403 2.50335 10 2.50335C5.85971 2.50335 2.50335 5.85971 2.50335 10C2.50335 14.1403 5.85971 17.4967 10 17.4967Z">
                                        </path>
                                    </svg>
                                    <span className='ftSize-16'>{faq.question}</span>
                                </button>
                            </h2>
                            <div
                                id={`collapse${index}`}
                                className={`accordion-collapse collapse ${activeAccordion === index ? 'show' : ''}`}
                                aria-labelledby={`heading${index}`}
                                data-bs-parent="#accordionExample"
                            >
                                <div className="accordion-body">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default FaqsPage