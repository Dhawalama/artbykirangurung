export type SiteLanguage = 'en' | 'ne';

export const siteContent = {
  en: {
    lang: 'en',
    htmlLang: 'en',
    title: 'Art by Kiran Gurung — Fine Art Portfolio',
    description: 'Editorial portfolio website for Kiran Gurung: artworks, calendars, commissions, classes and selected prints.',
    alternateHref: 'ne/',
    alternateLabel: 'ने',
    nav: [
      { label: 'Portraits', href: '#portraits' },
      { label: 'Murals', href: '#murals' },
      { label: 'Digital Art', href: '#digital-art' },
      { label: 'Calendars', href: '#calendars' },
      { label: 'Commissions', href: '#commissions' },
      { label: 'Classes', href: '#classes' },
      { label: 'Shop', href: '#shop' }
    ],
    headerCta: 'Enquire',
    hero: {
      eyebrow: 'Portraits · Murals · Digital Art',
      firstName: 'Kiran',
      lastName: 'Gurung',
      copy: 'Art by Kiran Gurung is a quiet editorial portfolio for illustrated works, Nepali landscapes, animals, calendars, commissions and selected collectable prints.',
      linkLabel: 'View the work',
      caption: 'The artwork leads. The interface stays quiet — ivory space, ink typography, and one restrained signal.',
      image: 'images/artworks/sunflower-a4.jpg'
    },
    gallery: {
      label: 'Selected works',
      heading: 'A portfolio arranged like a gallery wall.',
      lead: 'Images bleed to their edges. No cards, no heavy frames, no noisy effects. Hover only reveals a small title and a quiet lightbox cue.',
      quote: '“The work should feel discovered, not displayed too loudly.”',
      items: [
        { title: 'Bound in Thought', category: 'Portraits', span: 'tall', image: 'images/artworks/book-a4.jpg' },
        { title: 'Himalayan Monal', category: 'Animals', span: '', image: 'images/artworks/danphe-a4.jpg' },
        { title: 'Kathmandu House', category: 'Places', span: 'wide', image: 'images/artworks/gurung-house-a4.jpg' },
        { title: 'Mountain Path', category: 'Landscapes', span: '', image: 'images/artworks/kailash-a4.jpg' },
        { title: 'Smoke and Prayer', category: 'Culture', span: '', image: 'images/artworks/puja-a4.jpg' },
        { title: 'Yak Study', category: 'Animals', span: '', image: 'images/artworks/yak-a4.jpg' },
        { title: 'Mustang Memory', category: 'Landscapes', span: 'wide', image: 'images/artworks/mustang-a4.jpg' }
      ]
    },
    marquee: ['Portraits', 'Murals', 'Digital Art', 'Calendars', 'Commissions', 'Classes', 'Shop'],
    calendar: {
      label: 'Calendars',
      heading: 'A year of artworks, gathered for the desk.',
      lead: 'The calendar section behaves like an editorial feature, not a product push. It can link to Etsy now and become a native shop later.',
      pills: ['2083 BS / 2026–27', 'Desk calendar', 'Nepal inspired', 'Etsy ready'],
      cta: 'Open Etsy listing',
      ctaUrl: 'https://www.etsy.com/au/listing/4488991432/desk-calendar-2083-bs-2026-27-nepal',
      images: ['images/artworks/gurung-house-a4.jpg', 'images/artworks/kailash-a4.jpg', 'images/artworks/mustang-2-a4.jpg']
    },
    commissions: {
      label: 'Commissions',
      heading: 'Begin with a story, not a checkout.',
      lead: 'A warm enquiry flow for portraits, murals, and custom digital artworks. The form should feel like opening a conversation with the artist.',
      note: 'For homes, public walls, gifts, milestones, memories and places that need a human hand.',
      formAction: 'https://formspree.io/f/your-form-id',
      fields: {
        name: 'Name',
        email: 'Email',
        type: 'Commission type',
        typePlaceholder: 'Portrait, mural, digital artwork...',
        timeline: 'Timeline / occasion',
        message: 'Tell Kiran about the piece',
        submit: 'Send enquiry'
      }
    },
    classes: {
      label: 'Classes',
      heading: 'Learn through patient observation.',
      linkLabel: 'View all classes',
      items: [
        { title: 'Portrait Foundations', meta: 'Beginner friendly · Online', desc: 'Learn proportion, tone, and observation through calm, practical sessions.' },
        { title: 'Watercolour Nature Studies', meta: 'All levels · Online/studio', desc: 'Birds, flowers, animals and living forms approached through patient looking and gentle colour.' },
        { title: 'Places & Memory', meta: 'Intermediate · Studio/online', desc: 'Sketch homes, lanes, mountain paths and personal landmarks with clarity and feeling.' }
      ]
    },
    shop: {
      label: 'Shop',
      heading: 'Objects to collect, not products to scroll.',
      lead: 'The shop remains calm and editorial: small product sets, clear details, generous spacing, and no aggressive commerce language.',
      products: [
        { name: 'Desk Calendar 2083 BS', type: 'Limited calendar edition', price: 'Etsy', image: 'images/artworks/gurung-house-a4.jpg', url: 'https://www.etsy.com/au/listing/4488991432/desk-calendar-2083-bs-2026-27-nepal' },
        { name: 'Himalayan Monal Print', type: 'Fine art print', price: 'Enquire', image: 'images/artworks/danphe-a4.jpg', url: '#commissions' },
        { name: 'Sunflower Quiet', type: 'Portrait print', price: 'Enquire', image: 'images/artworks/sunflower-a4.jpg', url: '#commissions' }
      ]
    },
    footer: {
      heading: 'Art by Kiran Gurung',
      copy: 'Illustrated works, Nepali landscapes, animals, calendars, commissions, classes, and selected prints.'
    }
  },
  ne: {
    lang: 'ne',
    htmlLang: 'ne',
    title: 'आर्ट बाइ किरन गुरुङ — कला पोर्टफोलियो',
    description: 'किरन गुरुङको कला पोर्टफोलियो: चित्रकला, क्यालेन्डर, विशेष अर्डर, कक्षा र चयनित प्रिन्टहरू।',
    alternateHref: 'en/',
    alternateLabel: 'EN',
    nav: [
      { label: 'पोर्ट्रेट', href: '#portraits' },
      { label: 'म्युरल', href: '#murals' },
      { label: 'डिजिटल कला', href: '#digital-art' },
      { label: 'क्यालेन्डर', href: '#calendars' },
      { label: 'विशेष अर्डर', href: '#commissions' },
      { label: 'कक्षा', href: '#classes' },
      { label: 'शप', href: '#shop' }
    ],
    headerCta: 'सोधपुछ',
    hero: {
      eyebrow: 'पोर्ट्रेट · म्युरल · डिजिटल कला',
      firstName: 'Kiran',
      lastName: 'Gurung',
      copy: 'आर्ट बाइ किरन गुरुङ चित्रकला, नेपाली भू-दृश्य, जनावर, क्यालेन्डर, विशेष अर्डर, कक्षा र चयनित प्रिन्टहरूको शान्त editorial पोर्टफोलियो हो।',
      linkLabel: 'कामहरू हेर्नुहोस्',
      caption: 'कला अगाडि रहन्छ। इन्टरफेस शान्त रहन्छ — आइभरी स्पेस, इन्क टाइपोग्राफी, र एक संयमित संकेत।',
      image: 'images/artworks/sunflower-a4.jpg'
    },
    gallery: {
      label: 'चयनित कामहरू',
      heading: 'ग्यालरी भित्ताजस्तो मिलाइएको पोर्टफोलियो।',
      lead: 'तस्बिरहरू किनारासम्म फैलिन्छन्। भारी कार्ड, फ्रेम र अनावश्यक प्रभाव छैन। होभर गर्दा सानो शीर्षक र lightbox संकेत मात्र देखिन्छ।',
      quote: '“काम ठूलो स्वरमा प्रदर्शन भएको होइन, शान्त रूपमा भेटिएको जस्तो महसुस हुनुपर्छ।”',
      items: [
        { title: 'विचारमा डुबेको', category: 'पोर्ट्रेट', span: 'tall', image: 'images/artworks/book-a4.jpg' },
        { title: 'डाँफे', category: 'जनावर', span: '', image: 'images/artworks/danphe-a4.jpg' },
        { title: 'काठमाडौंको घर', category: 'ठाउँ', span: 'wide', image: 'images/artworks/gurung-house-a4.jpg' },
        { title: 'हिमाली बाटो', category: 'भू-दृश्य', span: '', image: 'images/artworks/kailash-a4.jpg' },
        { title: 'धुवाँ र प्रार्थना', category: 'संस्कृति', span: '', image: 'images/artworks/puja-a4.jpg' },
        { title: 'याक अध्ययन', category: 'जनावर', span: '', image: 'images/artworks/yak-a4.jpg' },
        { title: 'मुस्ताङ सम्झना', category: 'भू-दृश्य', span: 'wide', image: 'images/artworks/mustang-a4.jpg' }
      ]
    },
    marquee: ['पोर्ट्रेट', 'म्युरल', 'डिजिटल कला', 'क्यालेन्डर', 'विशेष अर्डर', 'कक्षा', 'शप'],
    calendar: {
      label: 'क्यालेन्डर',
      heading: 'डेस्कका लागि संकलित एक वर्षका कला-काम।',
      lead: 'क्यालेन्डर सेक्सन कुनै कडा बिक्री होइन, एक editorial feature जस्तो महसुस हुन्छ। अहिले Etsy लिंक गर्न सकिन्छ, पछि आफ्नै शप बनाउन सकिन्छ।',
      pills: ['२०८३ बि.सं. / २०२६–२७', 'डेस्क क्यालेन्डर', 'नेपाल प्रेरित', 'Etsy तयार'],
      cta: 'Etsy लिस्टिङ खोल्नुहोस्',
      ctaUrl: 'https://www.etsy.com/au/listing/4488991432/desk-calendar-2083-bs-2026-27-nepal',
      images: ['images/artworks/gurung-house-a4.jpg', 'images/artworks/kailash-a4.jpg', 'images/artworks/mustang-2-a4.jpg']
    },
    commissions: {
      label: 'विशेष अर्डर',
      heading: 'चेकआउट होइन, कथाबाट सुरु गरौँ।',
      lead: 'पोर्ट्रेट, म्युरल र custom digital artwork का लागि न्यानो enquiry flow। फारम कलाकारसँग संवाद सुरु गरेको जस्तो लाग्नुपर्छ।',
      note: 'घर, सार्वजनिक भित्ता, उपहार, milestone, सम्झना र मानवीय हात चाहिने ठाउँहरूको लागि।',
      formAction: 'https://formspree.io/f/your-form-id',
      fields: {
        name: 'नाम',
        email: 'इमेल',
        type: 'अर्डर प्रकार',
        typePlaceholder: 'पोर्ट्रेट, म्युरल, डिजिटल कला...',
        timeline: 'समय / अवसर',
        message: 'किरनलाई कामबारे बताउनुहोस्',
        submit: 'सोधपुछ पठाउनुहोस्'
      }
    },
    classes: {
      label: 'कक्षा',
      heading: 'धैर्यपूर्वक अवलोकन गर्दै सिक्ने।',
      linkLabel: 'सबै कक्षा हेर्नुहोस्',
      items: [
        { title: 'पोर्ट्रेट आधार', meta: 'सुरुआती मैत्री · अनलाइन', desc: 'शान्त, व्यावहारिक सत्रहरू मार्फत proportion, tone र observation सिक्ने।' },
        { title: 'वाटरकलर प्रकृति अध्ययन', meta: 'सबै स्तर · अनलाइन/स्टुडियो', desc: 'चराचुरुङ्गी, फूल, जनावर र जीवित रूपहरूलाई धैर्यपूर्वक हेरेर कोमल रङ्गसँग चित्रण गर्ने।' },
        { title: 'ठाउँ र सम्झना', meta: 'मध्यम स्तर · स्टुडियो/अनलाइन', desc: 'घर, गल्ली, हिमाली बाटो र व्यक्तिगत स्मृतिका ठाउँहरूलाई संवेदनशील रूपमा स्केच गर्ने।' }
      ]
    },
    shop: {
      label: 'शप',
      heading: 'स्क्रोल गर्ने उत्पादन होइन, संकलन गर्ने वस्तु।',
      lead: 'शप शान्त र editorial रहन्छ: साना product set, स्पष्ट जानकारी, खुला spacing, र aggressive commerce भाषा बिना।',
      products: [
        { name: 'डेस्क क्यालेन्डर २०८३', type: 'सीमित क्यालेन्डर संस्करण', price: 'Etsy', image: 'images/artworks/gurung-house-a4.jpg', url: 'https://www.etsy.com/au/listing/4488991432/desk-calendar-2083-bs-2026-27-nepal' },
        { name: 'डाँफे प्रिन्ट', type: 'Fine art print', price: 'सोधपुछ', image: 'images/artworks/danphe-a4.jpg', url: '#commissions' },
        { name: 'सूर्यमुखी शान्ति', type: 'पोर्ट्रेट प्रिन्ट', price: 'सोधपुछ', image: 'images/artworks/sunflower-a4.jpg', url: '#commissions' }
      ]
    },
    footer: {
      heading: 'Art by Kiran Gurung',
      copy: 'चित्रकला, नेपाली भू-दृश्य, जनावर, क्यालेन्डर, विशेष अर्डर, कक्षा र चयनित प्रिन्टहरू।'
    }
  }
} as const;
