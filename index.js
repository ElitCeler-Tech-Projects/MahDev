const allServicesBox = document.querySelector('.all__services');

const services = [
    {
        id: 1,
        title: 'DESIGN',
        subTitle: 'Comprehensive creative design proficiency',
        description: 'Graphic Design, 3D Photorealistic Design, Logo Creation, Website Design, Application Design, and UI/UX Design',
        image: '/assets/S-Design.svg'
    },
    {
        id: 2,
        title: 'DEVELOPMENT',
        subTitle: 'Extensive advanced technological development expertise',
        description: 'Web and Mobile Application Development, Cloud Solutions, Software Advisory, System Integration, API Crafting, Artificial Intelligence and Machine Learning Solutions, DevOps, Quality Assurance and Testing, and Ongoing Maintenance and Support.',
        image: '/assets/S-Development.svg'
    },
    {
        id: 3,
        title: 'CYBER SECURITY',
        subTitle: 'All-encompassing cyber security for your enterprise',
        description: 'Creating a secure environment for your business in harmony with all stakeholders to ensure compliance. Strategic services covering Applications, Network and cloud security, Firewall Management, Malware Protection, Data Encryption, Disaster Recovery, Regulatory Compliance, Incident Response and more',
        image: '/assets/S-Cyber.svg'
    },
    {
        id: 4,
        title: 'AI SERVICES',
        subTitle: 'The AI-Way',
        description: 'Embrace new directions for growth while also sustaining long-term technological evolution with our AI services. Expertise in ML solutions, NLPs, Predictive Analytics, Recommendation Engines, Data mining, Bots and Virtual Assistance, RPAs, Speech Recognition, and Generative solutions',
        image: '/assets/S-AIServices.svg'
    },
    {
        id: 5,
        title: 'ERP',
        subTitle: 'Tailored AI-driven ERP via SaaS',
        description: 'a specialized B2B enterprise resource planning super app powered by AI, designed to streamline and centralize all business operations in one place as a SaaS.',
        image: '/assets/S-ERP.svg'
    },
    {
        id: 6,
        title: 'DOOH',
        subTitle: 'Bespoke outdoor digital advertising SaaS',
        description: "Experience the fusion of the outdoors’s allure and the digital realm's prowess through programmatic Digital Out-of-Home advertising software as SaaS.",
        image: '/assets/S-DOOH.svg'
    }
]

services.forEach((service) => {

    const serviceBox = document.createElement('div');
    serviceBox.classList.add('service__box');
    
    const serviceImage = document.createElement('img');
    serviceImage.src = service.image;
    serviceImage.alt = service.title;

    const serviceContent = document.createElement('div');
    serviceContent.classList.add('service__content');
    const serviceTitle = document.createElement('h3');
    serviceTitle.textContent = service.title;
    const serviceSubTitle = document.createElement('h4');
    serviceSubTitle.textContent = service.subTitle;
    const serviceDescription = document.createElement('p');
    serviceDescription.textContent = service.description;

    serviceContent.append(serviceTitle, serviceSubTitle, serviceDescription);

    serviceBox.append(serviceImage, serviceContent);

    allServicesBox.append(serviceBox);

})

const contactPopup = document.querySelector('.contact__popup');

function toggleMyPopup() {
    contactPopup.classList.toggle('show__popup');
}

// EmailJS Setup

const EMAILJS_SERVICE = 'service_ugbi33j';
const EMAILJS_TEMPLATE = 'template_hce746l';
const EMAILJS_ACCOUNT = 'Qv2px0HQRJ6yBcNmH';

emailjs.init(EMAILJS_ACCOUNT);

const contactForm = document.querySelector('#contact__form');
const submitMsg = document.querySelector('.submit__msg');

function handleContactForm(e) {

    e.preventDefault();
    emailjs.sendForm(EMAILJS_SERVICE, EMAILJS_TEMPLATE, contactForm).then((res) => {
        console.log(res);
        contactFormSubmitResponse = 'We got you! Will reach you ASAP.';
        submitMsg.classList.add('submit__msg-success');
        submitMsg.textContent = contactFormSubmitResponse;
    }).catch(() => {
        console.log('Not Done');
        contactFormSubmitResponse = 'Failed! Try again';
        submitMsg.classList.add('submit__msg-failed');
        submitMsg.textContent = contactFormSubmitResponse;
    })

    
    setTimeout(() => {
        e.target.reset();
        submitMsg.textContent = '';
        contactPopup.classList.remove('show__popup');
    }, 8000);
}

// EmailJS Setup

// Menu Bar

const menuBarButton = document.querySelector('.app__header button');
const menu = document.querySelector('.app__nav');

const toggleMenuBar = () => {
    menu.classList.toggle('active__menu');
    menuBarButton.classList.toggle('active__menu');
}

// Menu Bar