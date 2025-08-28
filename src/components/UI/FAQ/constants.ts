type FAQItem = {
  question: string;
  answer: string;
};

export const desktopHeaderPhrase = ['Frequently asked', 'questions'];
export const mobileHeaderPhrase = ['Frequently', 'asked', 'questions'];
export const animate = {
  initial: {
    y: '100%',
    opacity: 0,
  },
  open: (i: number) => ({
    y: '0%',
    opacity: 1,
    transition: { duration: 1, delay: 0.1 * i, ease: [0.33, 1, 0.68, 1] },
  }),
};

export const faqData: FAQItem[] = [
  {
    question: 'Is hasabTech Education and Career Accelerator Program the same?',
    answer:
      'No. hasabTech Education is a bigger umbrella initiative that includes various educational resources and programs, while the Career Accelerator Program is a specific program under this initiative designed to help individuals kickstart their careers and get their first in tech.',
  },
  {
    question: 'Why do you charge fee for your programs if this is a non-profit initiative?',
    answer:
      'The fees collected from the Career Accelerator Program are reinvested to cover essential operational costs such as learning materials, resources, platform development, and hosting. This allows us to maintain the quality of education and support provided to learners while ensuring the sustainability of the program. Being a non-profit means all funds are used for the initiative—not that it is personally funded.',
  },
  {
    question: 'How much Career Accelerator Program will cost me?',
    answer:
      'The fee of Career Accelerator Program is PKR 1000 per month. This fee covers all the resources, mentorship, and support provided throughout the program. However, we also offer financial aid options for those who may not be able to afford the full fee. Read more about our financial aid options on the Career Accelerator Program page.',
  },
  {
    question: 'Do you provide certifications?',
    answer:
      'Providing certifications depends on the specific program. For the Career Accelerator Program, we do provide a certificate of completion for each track that the participants successfully complete. However, for the study abroad guide programs, we do not provide any certifications as they are more informational and guidance-based.',
  },
  {
    question: 'How do I join the hasabTech Education community?',
    answer: 'You can join via our official Discord/WhatsApp group (insert your preferred platform). All announcements, discussions, and Q&A sessions happen there.'
  },
  {
    question: 'Can I contribute to hasabTech Education?',
    answer: 'Absolutely! If you’re an experienced developer or educator, you can volunteer as a mentor, create learning content for the community, or help us in building our internal products. Additionaly, you can also provide financial contributions by funding the fee of learners who cannot afford the monthly cost of our tracks.',
  },
  {
    question: 'How can I contribute to hasabTech Education with my skillset?',
    answer: 'In order for you to contribute, you can join our community on Discord/WhatsApp and share your ideas. We are always looking for volunteers to help with content creation, mentorship, and community engagement. Furthermore, you can also email us at contact@hasab.tech',
  },
];
