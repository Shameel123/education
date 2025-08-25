import ic_document_duplicate from '../../../../public/svgs/ic_document_duplicate.svg';
import ic_identification from '../../../../public/svgs/ic_identification.svg';
import ic_lock_closed from '../../../../public/svgs/ic_lock_closed.svg';

// For desktop
export const desktopHeaderPhrase = ["We are currently intaking", 'registrations for Batch # 02'];
export const desktopParagraphPhrase = [
  "Are you a final year student, a recent graduate, or a masters student looking to",
  'kickstart your career in tech? Join our Career Accelerator program designed to equip you with the skills and knowledge needed to thrive in the industry.',
];

// For mobile
export const mobileHeaderPhrase = ["We are currently", 'intaking registrations for Batch # 02'];
export const mobileParagraphPhrase = [
  "Are you a final year student, a recent graduate, or a masters student looking to",
  'kickstart your career in tech? Join our Career Accelerator program designed to equip you with the skills and knowledge needed to thrive in the industry.',
];

export const edges = [
  {
    point: 'Fill the registration form',
    details:
      'We have a simple and straightforward registration process. Fill out the form with your details to get started and wait for our follow up email.',
    icon: ic_document_duplicate,
  },
  {
    point: 'Pass the entry criteria',
    details:
      'The form defines the entry criteria for the program. Make sure to meet the requirements to secure your spot in our next batch.',
    icon: ic_identification,
  },
  {
    point: 'Subimt the fees',
    details: "We charge PKR 1000/month to maintain program quality and provide top resources. Financial sponsorships are available for deserving candidates.",
    icon: ic_lock_closed,
  },
];
