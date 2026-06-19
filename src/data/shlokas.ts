export interface Shloka {
  chapter: number;
  verse: number | string;
  sanskrit: string;
  kannada: string;
  meaning: string;
  application: string;
  keyword: string;
}

// Total verse count per chapter (used to populate the verse dropdown)
export const CHAPTER_VERSE_COUNTS: Record<number, number> = {
  1: 47, 2: 72, 3: 43, 4: 42, 5: 29,
  6: 47, 7: 30, 8: 28, 9: 34, 10: 42,
  11: 55, 12: 20, 13: 34, 14: 27, 15: 20,
  16: 24, 17: 28, 18: 78,
};

export const CHAPTER_NAMES: Record<number, string> = {
  1: 'ಅರ್ಜುನ ವಿಷಾದ ಯೋಗ',
  2: 'ಸಾಂಖ್ಯ ಯೋಗ',
  3: 'ಕರ್ಮ ಯೋಗ',
  4: 'ಜ್ಞಾನ ಕರ್ಮ ಸಂನ್ಯಾಸ ಯೋಗ',
  5: 'ಕರ್ಮ ಸಂನ್ಯಾಸ ಯೋಗ',
  6: 'ಆತ್ಮ ಸಂಯಮ ಯೋಗ',
  7: 'ಜ್ಞಾನ ವಿಜ್ಞಾನ ಯೋಗ',
  8: 'ಅಕ್ಷರ ಬ್ರಹ್ಮ ಯೋಗ',
  9: 'ರಾಜ ವಿದ್ಯಾ ರಾಜ ಗುಹ್ಯ ಯೋಗ',
  10: 'ವಿಭೂತಿ ಯೋಗ',
  11: 'ವಿಶ್ವರೂಪ ದರ್ಶನ ಯೋಗ',
  12: 'ಭಕ್ತಿ ಯೋಗ',
  13: 'ಕ್ಷೇತ್ರ ಕ್ಷೇತ್ರಜ್ಞ ವಿಭಾಗ ಯೋಗ',
  14: 'ಗುಣತ್ರಯ ವಿಭಾಗ ಯೋಗ',
  15: 'ಪುರುಷೋತ್ತಮ ಯೋಗ',
  16: 'ದೈವಾಸುರ ಸಂಪದ್ ವಿಭಾಗ ಯೋಗ',
  17: 'ಶ್ರದ್ಧಾತ್ರಯ ವಿಭಾಗ ಯೋಗ',
  18: 'ಮೋಕ್ಷ ಸಂನ್ಯಾಸ ಯೋಗ',
};

import { shlokasCh1to2 } from './gita-ch1-2'
import { shlokasCh3to4 } from './gita-ch3-4'
import { shlokasCh5to6 } from './gita-ch5-6'
import { shlokasCh7to9 } from './gita-ch7-9'
import { shlokasCh10to11 } from './gita-ch10-11'
import { shlokasCh12to15 } from './gita-ch12-15'
import { shlokasCh16to18 } from './gita-ch16-18'

export const shlokas: Shloka[] = [
  ...shlokasCh1to2,
  ...shlokasCh3to4,
  ...shlokasCh5to6,
  ...shlokasCh7to9,
  ...shlokasCh10to11,
  ...shlokasCh12to15,
  ...shlokasCh16to18,
]

// Legacy inline shlokas (kept for reference – NOT exported separately)
const _legacyShlokas: Shloka[] = [

  // ═══════════════════════════════════════════
  // CHAPTER 1 — ಅರ್ಜುನ ವಿಷಾದ ಯೋಗ (47 ಶ್ಲೋಕಗಳು)
  // ═══════════════════════════════════════════
  {
    chapter: 1, verse: 1,
    sanskrit: 'dharmakshetre kurukshetre samavetaa yuyutsavah | mamakah pandavashchaiva kimakurvata sanjaya ||',
    kannada: 'ಧರ್ಮಕ್ಷೇತ್ರೇ ಕುರುಕ್ಷೇತ್ರೇ ಸಮವೇತಾ ಯುಯುತ್ಸವಃ |\nಮಾಮಕಾಃ ಪಾಂಡವಾಶ್ಚೈವ ಕಿಮಕುರ್ವತ ಸಂಜಯ ||',
    meaning: 'ಧರ್ಮದ ಭೂಮಿಯಾದ ಕುರುಕ್ಷೇತ್ರದಲ್ಲಿ ಯುದ್ಧಾಸಕ್ತರಾಗಿ ಒಟ್ಟುಗೂಡಿದ ನನ್ನ ಪುತ್ರರು ಮತ್ತು ಪಾಂಡವರು ಏನು ಮಾಡಿದರು, ಓ ಸಂಜಯ?',
    application: 'ನಮ್ಮ ಜೀವನದ ಪ್ರತಿ ಕ್ಷೇತ್ರ — ಕೆಲಸ, ಮನೆ, ಸಮಾಜ — ಇವೆಲ್ಲವೂ ಧರ್ಮಕ್ಷೇತ್ರ. ನ್ಯಾಯ-ನೀತಿಯ ನಿರ್ಧಾರ ತೆಗೆಯಿರಿ. ಪ್ರತಿ ಕ್ಷಣ ನಾವು ಮಾಡುವ ಆಯ್ಕೆ ನಮ್ಮ ಧರ್ಮ ವ್ಯಕ್ತಪಡಿಸುತ್ತದೆ.',
    keyword: 'ಧರ್ಮ',
  },
  {
    chapter: 1, verse: 2,
    sanskrit: 'sanjaya uvaacha | drishtvaa tu paandavaanikam vyoodham duryodhanas tadaa | aachaarya mupasamgamya raajaa vachanam abraveet ||',
    kannada: 'ಸಂಜಯ ಉವಾಚ |\nದೃಷ್ಟ್ವಾ ತು ಪಾಂಡವಾನೀಕಂ ವ್ಯೂಢಂ ದುರ್ಯೋಧನಸ್ತದಾ |\nಆಚಾರ್ಯಮುಪಸಂಗಮ್ಯ ರಾಜಾ ವಚನಮಬ್ರವೀತ್ ||',
    meaning: 'ಸಂಜಯ ಹೇಳಿದ: ಪಾಂಡವ ಸೈನ್ಯವನ್ನು ವ್ಯೂಹರಚನೆಯಲ್ಲಿ ನೋಡಿ ದುರ್ಯೋಧನ ರಾಜ ಆಚಾರ್ಯ ದ್ರೋಣರ ಬಳಿ ಹೋಗಿ ಮಾತನಾಡಿದ.',
    application: 'ಸ್ಪರ್ಧೆ ಬಂದಾಗ ಗುರುಗಳ ಸಲಹೆ ಪಡೆಯಿರಿ. Mentor ಮತ್ತು senior ಅನುಭವ ಬಳಸಿಕೊಳ್ಳಿ. ಹಿರಿಯರ ಜ್ಞಾನ ದೊಡ್ಡ ಆಸ್ತಿ.',
    keyword: 'ಗುರು ಸಲಹೆ',
  },
  {
    chapter: 1, verse: 28,
    sanskrit: 'drishtvemam svajanam krishna yuyutsum samupasthitam | seedanti mama gatraani mukham cha parisushyati ||',
    kannada: 'ದೃಷ್ಟ್ವೇಮಂ ಸ್ವಜನಂ ಕೃಷ್ಣ ಯುಯುತ್ಸುಂ ಸಮುಪಸ್ಥಿತಮ್ |\nಸೀದಂತಿ ಮಮ ಗಾತ್ರಾಣಿ ಮುಖಂ ಚ ಪರಿಶುಷ್ಯತಿ ||',
    meaning: 'ಹೇ ಕೃಷ್ಣ, ಯುದ್ಧಕ್ಕೆ ಬಂದ ನನ್ನ ಸ್ವಂತ ಜನರನ್ನು ನೋಡಿ ನನ್ನ ಅಂಗಗಳು ಶಿಥಿಲಗೊಳ್ಳುತ್ತಿವೆ, ಬಾಯಿ ಒಣಗುತ್ತಿದೆ.',
    application: 'ಕಷ್ಟ ಕಾಲದಲ್ಲಿ ದೈಹಿಕ ಲಕ್ಷಣಗಳು ಕಾಣಿಸಿಕೊಳ್ಳುವುದು ಸಹಜ. Stress physical ಆಗಿ ತೋರಿಸಿಕೊಳ್ಳುತ್ತದೆ. ಅದನ್ನು ಗುರುತಿಸಿ, ಕೃಷ್ಣನ ಬಳಿ ಮಾತಾಡಿದಂತೆ ಪ್ರಾರ್ಥಿಸಿ.',
    keyword: 'ಒತ್ತಡ ನಿರ್ವಹಣೆ',
  },
  {
    chapter: 1, verse: 36,
    sanskrit: 'nihatya dhaartaraashtraan nah kaa preetih syaaj janaardana | paapam evaashrayeddasmaan hatvaitaanaatatataavinah ||',
    kannada: 'ನಿಹತ್ಯ ಧಾರ್ತರಾಷ್ಟ್ರಾನ್ ನಃ ಕಾ ಪ್ರೀತಿಃ ಸ್ಯಾಜ್ ಜನಾರ್ದನ |\nಪಾಪಮೇವಾಶ್ರಯೇದಸ್ಮಾನ್ ಹತ್ವೈತಾನಾತತಾಯಿನಃ ||',
    meaning: 'ಹೇ ಜನಾರ್ದನ, ಧೃತರಾಷ್ಟ್ರ ಪುತ್ರರನ್ನು ಕೊಂದ ಮೇಲೆ ನಮಗೇನು ಸಂತೋಷ ಸಿಗುತ್ತದೆ? ಇವರನ್ನು ಕೊಲ್ಲುವುದರಿಂದ ನಮಗೇ ಪಾಪ ತಟ್ಟುತ್ತದೆ.',
    application: 'ಭಾವನಾತ್ಮಕ ಗೊಂದಲ ನಮ್ಮ ತರ್ಕವನ್ನು ಮೋಸಗೊಳಿಸುತ್ತದೆ. ಕಷ್ಟ ನಿರ್ಧಾರ ತೆಗೆಯಬೇಕಾದಾಗ ಭಗವಂತನ ಬಳಿ ಮಾರ್ಗದರ್ಶನ ಕೇಳಿ.',
    keyword: 'ನೈತಿಕ ಗೊಂದಲ',
  },
  {
    chapter: 1, verse: 40,
    sanskrit: 'kulakshaye pranashyanti kuladharmaah sanaatanah | dharme nashte kulam kritsnam adharmo abhibhavatyuta ||',
    kannada: 'ಕುಲಕ್ಷಯೇ ಪ್ರಣಶ್ಯಂತಿ ಕುಲಧರ್ಮಾಃ ಸನಾತನಾಃ |\nಧರ್ಮೇ ನಷ್ಟೇ ಕುಲಂ ಕೃತ್ಸ್ನಮಧರ್ಮೋsಭಿಭವತ್ಯುತ ||',
    meaning: 'ಕುಲ ನಾಶವಾದಾಗ ಸನಾತನ ಕುಲಧರ್ಮ ನಾಶವಾಗುತ್ತದೆ. ಧರ್ಮ ನಾಶವಾದಾಗ ಇಡೀ ಕುಲವನ್ನು ಅಧರ್ಮ ಆವರಿಸುತ್ತದೆ.',
    application: 'ಕುಟುಂಬದ ಸಂಸ್ಕಾರ, ಸಂಪ್ರದಾಯ ಉಳಿಸಿ. ಮಕ್ಕಳಿಗೆ ಮೌಲ್ಯಗಳು ಕಲಿಸಿ. ಒಂದು ತಲೆಮಾರಿನ ನಿರ್ಲಕ್ಷ ಮುಂದಿನ ಪೀಳಿಗೆಯ ನಾಶಕ್ಕೆ ಕಾರಣ.',
    keyword: 'ಕುಲ ಧರ್ಮ',
  },
  {
    chapter: 1, verse: 45,
    sanskrit: 'aho bata mahat paapam kartum vyavasitaa vayam | yadraajyasukhalobhena hantum svajanam udyatah ||',
    kannada: 'ಅಹೋ ಬತ ಮಹತ್ಪಾಪಂ ಕರ್ತುಂ ವ್ಯವಸಿತಾ ವಯಮ್ |\nಯದ್ರಾಜ್ಯಸುಖಲೋಭೇನ ಹಂತುಂ ಸ್ವಜನಮುದ್ಯತಾಃ ||',
    meaning: 'ಅಯ್ಯೋ, ರಾಜ್ಯ ಸುಖದ ಆಸೆಗಾಗಿ ಸ್ವಂತ ಜನರನ್ನು ಕೊಲ್ಲಲು ನಿರ್ಧರಿಸಿರುವ ನಾವು ಮಹಾ ಪಾಪ ಮಾಡಲು ಹೊರಟಿದ್ದೇವೆ.',
    application: 'ಲೋಭ ನಮ್ಮನ್ನು ತಪ್ಪು ದಾರಿಗೆ ಕರೆದೊಯ್ಯಬಹುದು. ಯಾವ ನಿರ್ಧಾರ ತೆಗೆಯುವ ಮೊದಲೂ — ಇದರಿಂದ ಯಾರಿಗೆ ನೋವಾಗುತ್ತದೆ ಎಂದು ಯೋಚಿಸಿ.',
    keyword: 'ಲೋಭ ವಿರುದ್ಧ',
  },
  {
    chapter: 1, verse: 47,
    sanskrit: 'evamuktvaarjunah sankhye rathopastha upavishat | visrjya sasaram chapam shokasanvignamanasah ||',
    kannada: 'ಏವಮುಕ್ತ್ವಾ ಅರ್ಜುನಃ ಸಂಖ್ಯೇ ರಥೋಪಸ್ಥ ಉಪಾವಿಶತ್ |\nವಿಸೃಜ್ಯ ಸಶರಂ ಚಾಪಂ ಶೋಕಸಂವಿಗ್ನಮಾನಸಃ ||',
    meaning: 'ಹೀಗೆ ಹೇಳಿ ಅರ್ಜುನನು ಬಿಲ್ಲು-ಬಾಣಗಳನ್ನು ಕೆಳಗಿಟ್ಟು, ಶೋಕದಿಂದ ಮನಸ್ಸು ತುಂಬಿ ರಥದ ಮೇಲೆ ಕುಳಿತನು.',
    application: 'ಕಷ್ಟದ ಸಮಯದಲ್ಲಿ ಭಾವನೆಗಳು ಮುಳುಗಿಸುತ್ತವೆ — ಇದು ಮಾನವ ಸ್ವಭಾವ. ಶೋಕ ಜ್ಞಾನದ ಪ್ರಾರಂಭ. ಪ್ರಶ್ನಿಸಿದವನಿಗೇ ಉತ್ತರ ಸಿಗುತ್ತದೆ.',
    keyword: 'ಶೋಕ ಮತ್ತು ಪ್ರಾರಂಭ',
  },

  // ═══════════════════════════════════════════
  // CHAPTER 2 — ಸಾಂಖ್ಯ ಯೋಗ (72 ಶ್ಲೋಕಗಳು)
  // ═══════════════════════════════════════════
  {
    chapter: 2, verse: 3,
    sanskrit: 'klaibyam maa sma gamah paartha naitatvayyupapadyate | kshudram hridayadaurbalyam tyaktvottishtha parantapa ||',
    kannada: 'ಕ್ಲೈಬ್ಯಂ ಮಾ ಸ್ಮ ಗಮಃ ಪಾರ್ಥ ನೈತತ್ತ್ವಯ್ಯುಪಪದ್ಯತೇ |\nಕ್ಷುದ್ರಂ ಹೃದಯದೌರ್ಬಲ್ಯಂ ತ್ಯಕ್ತ್ವೋತ್ತಿಷ್ಠ ಪರಂತಪ ||',
    meaning: 'ಹೇ ಪಾರ್ಥ, ಕಾಪುರುಷತ್ವಕ್ಕೆ ಜಾರಬೇಡ — ಇದು ನಿನಗೆ ಸರಿಹೊಂದದು. ಹೃದಯದ ಕ್ಷುದ್ರ ದೌರ್ಬಲ್ಯ ಬಿಟ್ಟು ಎದ್ದೇಳು, ಹೇ ಶತ್ರುಂಜಯ!',
    application: 'ಸೋಲಿನ ಭಯ, ಹಿಂಜರಿಕೆ ನಿನ್ನನ್ನು ಕ್ಷುದ್ರ ಮಾಡುತ್ತದೆ. "Arise" — ಎದ್ದೇಳು. ನಿನ್ನ ಸಾಮರ್ಥ್ಯ ನಿನ್ನ ಭಯಕ್ಕಿಂತ ದೊಡ್ಡದು.',
    keyword: 'ಧೈರ್ಯ',
  },
  {
    chapter: 2, verse: 11,
    sanskrit: 'ashochyaan anvashoches tvam prajnaavaadaamsh cha bhaashase | gataasoon agataasoomsh cha naanushochanti panditaah ||',
    kannada: 'ಅಶೋಚ್ಯಾನನ್ವಶೋಚಸ್ತ್ವಂ ಪ್ರಜ್ಞಾವಾದಾಂಶ್ಚ ಭಾಷಸೇ |\nಗತಾಸೂನಗತಾಸೂಂಶ್ಚ ನಾನುಶೋಚಂತಿ ಪಂಡಿತಾಃ ||',
    meaning: 'ಶೋಕಿಸಬಾರದವರ ಬಗ್ಗೆ ಶೋಕಿಸುತ್ತೀ, ಜ್ಞಾನಿ ಮಾತು ಆಡುತ್ತೀ. ಸತ್ತವರ ಬಗ್ಗೆ ಮತ್ತು ಬದುಕಿರುವವರ ಬಗ್ಗೆ ಜ್ಞಾನಿಗಳು ಶೋಕಿಸುವುದಿಲ್ಲ.',
    application: 'ಅನಗತ್ಯ ಚಿಂತೆ ಮತ್ತು ಶೋಕ ಬಿಡಿ. ಗೀತೆಯ ಮೊದಲ ಉಪದೇಶ — ಯಾರೂ ನಿಜವಾಗಿ ನಾಶ ಆಗುವುದಿಲ್ಲ. ಈ ಅರಿವಿನಿಂದ ಭಯ ಕಡಿಮೆ ಆಗುತ್ತದೆ.',
    keyword: 'ಶೋಕ ತ್ಯಾಗ',
  },
  {
    chapter: 2, verse: 14,
    sanskrit: 'matra-sparshas tu kaunteya shitoshna-sukha-duhkha-dah | agamapayino anityaas tams titikshasva bharata ||',
    kannada: 'ಮಾತ್ರಾಸ್ಪರ್ಶಾಸ್ತು ಕೌಂತೇಯ ಶೀತೋಷ್ಣಸುಖದುಃಖದಾಃ |\nಆಗಮಾಪಾಯಿನೋsನಿತ್ಯಾಸ್ತಾಂಸ್ತಿತಿಕ್ಷಸ್ವ ಭಾರತ ||',
    meaning: 'ಶೀತ-ಉಷ್ಣ, ಸುಖ-ದುಃಖ ಇಂದ್ರಿಯ ಸ್ಪರ್ಶಗಳಿಂದ ಬರುತ್ತವೆ. ಇವು ಬಂದು ಹೋಗುವ ಅನಿತ್ಯ — ಇವನ್ನು ಸಹಿಸಿಕೋ.',
    application: '"This too shall pass" — ಗೀತೆಯ ಸಾರ. ಯಶ ಮತ್ತು ಸೋಲು ಎರಡೂ ಅನಿತ್ಯ. Equanimity ಬೆಳೆಸಿ. ಒತ್ತಡಕ್ಕೆ ಅಳೆದುಕೊಳ್ಳದಿರಿ.',
    keyword: 'ಅನಿತ್ಯ ಮತ್ತು ಸ್ಥಿರತೆ',
  },
  {
    chapter: 2, verse: 17,
    sanskrit: 'avinaashi tu tad viddhi yena sarvam idam tatam | vinaasham avyayasyaasya na kashchit kartum arhati ||',
    kannada: 'ಅವಿನಾಶಿ ತು ತದ್ವಿದ್ಧಿ ಯೇನ ಸರ್ವಮಿದಂ ತತಮ್ |\nವಿನಾಶಮವ್ಯಯಸ್ಯಾಸ್ಯ ನ ಕಶ್ಚಿತ್ ಕರ್ತುಮರ್ಹತಿ ||',
    meaning: 'ಈ ಇಡೀ ಜಗತ್ತನ್ನು ವ್ಯಾಪಿಸಿರುವ ಆ ಶಕ್ತಿ ಅವಿನಾಶಿ — ಅದರ ನಾಶ ಯಾರಿಂದಲೂ ಮಾಡಲಾಗದು.',
    application: 'ನಿಮ್ಮೊಳಗಿರುವ ಆ ಶಾಶ್ವತ ಚೇತನ ಎಂದೂ ನಾಶ ಆಗದು. ಯಾವ ಸಂಕಷ್ಟ ಬಂದರೂ ನಿಮ್ಮ ಆತ್ಮಶಕ್ತಿ ಅದರ ಮೇಲಿದೆ.',
    keyword: 'ಅವಿನಾಶಿ ಆತ್ಮ',
  },
  {
    chapter: 2, verse: 19,
    sanskrit: 'ya enam vetti hantaaram yashchainam manyate hatam | ubhau tau na vijaaniito naayam hanti na hanyate ||',
    kannada: 'ಯ ಏನಂ ವೇತ್ತಿ ಹಂತಾರಂ ಯಶ್ಚೈನಂ ಮನ್ಯತೇ ಹತಮ್ |\nಉಭೌ ತೌ ನ ವಿಜಾನೀತೋ ನಾಯಂ ಹಂತಿ ನ ಹನ್ಯತೇ ||',
    meaning: 'ಇದು ಕೊಲ್ಲುತ್ತದೆ ಎಂದು ಯಾರು ತಿಳಿಯುತ್ತಾರೋ, ಕೊಲ್ಲಲ್ಪಡುತ್ತದೆ ಎಂದು ಯಾರು ಭಾವಿಸುತ್ತಾರೋ — ಇಬ್ಬರೂ ತಿಳಿದಿಲ್ಲ. ಆತ್ಮ ಕೊಲ್ಲದು, ಕೊಲ್ಲಲ್ಪಡದು.',
    application: 'ನಿಮ್ಮ ಆತ್ಮ ಯಾವ ಸಂದರ್ಭದಲ್ಲೂ ಹಾನಿ ಹೊಂದದು. ಭಯ ಬಂದಾಗ ಈ ಸತ್ಯ ನೆನಪಿಸಿಕೊಳ್ಳಿ — ನಾನು ಅಮರ ಆತ್ಮ.',
    keyword: 'ಆತ್ಮ ಅಮರ',
  },
  {
    chapter: 2, verse: 20,
    sanskrit: 'na jayate mriyate va kadachin nayam bhutva bhavita va na bhuyah | ajo nityah shashvato ayam purano na hanyate hanyamane sharire ||',
    kannada: 'ನ ಜಾಯತೇ ಮ್ರಿಯತೇ ವಾ ಕದಾಚಿತ್\nನಾಯಂ ಭೂತ್ವಾ ಭವಿತಾ ವಾ ನ ಭೂಯಃ |\nಅಜೋ ನಿತ್ಯಃ ಶಾಶ್ವತೋsಯಂ ಪುರಾಣೋ\nನ ಹನ್ಯತೇ ಹನ್ಯಮಾನೇ ಶರೀರೇ ||',
    meaning: 'ಆತ್ಮ ಎಂದಿಗೂ ಜನಿಸದು, ಸಾಯದು. ಇದು ಅಜ, ನಿತ್ಯ, ಶಾಶ್ವತ. ಶರೀರ ಕೊಲ್ಲಲ್ಪಟ್ಟರೂ ಆತ್ಮ ಕೊಲ್ಲಲ್ಪಡದು.',
    application: 'ಯಾವ ಸೋಲೂ ಶರೀರದ ಅನುಭವ — ನಿಮ್ಮ ಅಂತರಾತ್ಮ ಅದಕ್ಕಿಂತ ದೊಡ್ಡದು. ಮಕ್ಕಳಿಗೆ ಹೇಳಿ: ಪರೀಕ್ಷೆ ಸೋತರೂ ನೀನು ಸೋಲಲಿಲ್ಲ.',
    keyword: 'ಆತ್ಮ ಅಮರತ್ವ',
  },
  {
    chapter: 2, verse: 22,
    sanskrit: 'vaasaamsi jeernaani yathaa vihaaya navaani grihnaati naroparaani | tathaa shareeraani vihaaya jeernaani anyaani samyaati navaani dehee ||',
    kannada: 'ವಾಸಾಂಸಿ ಜೀರ್ಣಾನಿ ಯಥಾ ವಿಹಾಯ\nನವಾನಿ ಗೃಹ್ಣಾತಿ ನರೋsಪರಾಣಿ |\nತಥಾ ಶರೀರಾಣಿ ವಿಹಾಯ ಜೀರ್ಣಾನ್ಯ\nನ್ಯಾನಿ ಸಂಯಾತಿ ನವಾನಿ ದೇಹೀ ||',
    meaning: 'ಮನುಷ್ಯ ಹಳೆ ಬಟ್ಟೆ ಬಿಟ್ಟು ಹೊಸ ಬಟ್ಟೆ ತೊಟ್ಟಂತೆ, ಆತ್ಮ ಹಳೆ ಶರೀರ ಬಿಟ್ಟು ಹೊಸ ಶರೀರ ತಾಳುತ್ತದೆ.',
    application: 'ಬದಲಾವಣೆ ಭಯಪಡಬೇಡಿ. Job change, city change, life change — ಹಳೆ ಬಟ್ಟೆ ಬಿಟ್ಟು ಹೊಸ ತೊಡುವಂತೆ. ಆತ್ಮ ಅನುಭವ ಮಾತ್ರ ಒಯ್ಯುತ್ತದೆ.',
    keyword: 'ಬದಲಾವಣೆ',
  },
  {
    chapter: 2, verse: 38,
    sanskrit: 'sukha-dukhe same kritvaa laabhaalaabhau jayaajayau | tato yuddhhaaya yujyasva naivam paapam avaapsyasi ||',
    kannada: 'ಸುಖದುಃಖೇ ಸಮೇ ಕೃತ್ವಾ ಲಾಭಾಲಾಭೌ ಜಯಾಜಯೌ |\nತತೋ ಯುದ್ಧಾಯ ಯುಜ್ಯಸ್ವ ನೈವಂ ಪಾಪಮವಾಪ್ಸ್ಯಸಿ ||',
    meaning: 'ಸುಖ-ದುಃಖ, ಲಾಭ-ನಷ್ಟ, ಜಯ-ಪರಾಜಯಗಳನ್ನು ಸಮಾನವಾಗಿ ಸ್ವೀಕರಿಸಿ ಯುದ್ಧ ಮಾಡು — ಹೀಗೆ ಮಾಡಿದರೆ ಪಾಪ ಹೊಂದದು.',
    application: 'Win/loss, profit/loss ಎರಡನ್ನೂ equanimity ಯಿಂದ ನೋಡಿ. ದಿನ ಒಳ್ಳೆಯದಾದರೂ, ಕೆಟ್ಟದಾದರೂ — ಮನೋಸ್ಥಿರತೆ ಕಾಪಾಡಿ.',
    keyword: 'ಮನೋ ಸ್ಥಿರತೆ',
  },
  {
    chapter: 2, verse: 47,
    sanskrit: 'karmanyevadhikaraste ma phaleshu kadachana | ma karmaphalaheturbhur ma te sango akarmanī ||',
    kannada: 'ಕರ್ಮಣ್ಯೇವಾಧಿಕಾರಸ್ತೇ ಮಾ ಫಲೇಷು ಕದಾಚನ |\nಮಾ ಕರ್ಮಫಲಹೇತುರ್ಭೂ ಮಾ ತೇ ಸಂಗೋsಸ್ತ್ವಕರ್ಮಣಿ ||',
    meaning: 'ಕರ್ಮ ಮಾಡುವ ಅಧಿಕಾರ ಮಾತ್ರ ನಿನ್ನದು, ಫಲದಲ್ಲಿ ಎಂದೂ ಅಲ್ಲ. ಕರ್ಮಫಲಕ್ಕಾಗಿ ಕಾರಣನಾಗಬೇಡ; ಕರ್ಮ ಮಾಡದಿರುವಲ್ಲೂ ಆಸಕ್ತಿ ಬೇಡ.',
    application: 'Result ಬಗ್ಗೆ ಚಿಂತಿಸದೆ best effort ಕೊಡಿ. ಫಲ ನಿಯಂತ್ರಿಸಲಾಗದು — ಪ್ರಯತ್ನ ನಿಯಂತ್ರಿಸಬಹುದು. ಪ್ರಕ್ರಿಯೆಯಲ್ಲಿ ತಲ್ಲೀನರಾಗಿ.',
    keyword: 'ನಿಷ್ಕಾಮ ಕರ್ಮ',
  },
  {
    chapter: 2, verse: 48,
    sanskrit: 'yogasthah kuru karmaani sangam tyaktvaa dhananjaya | siddhyasiddhyoh samo bhootvaa samatvam yoga uchyate ||',
    kannada: 'ಯೋಗಸ್ಥಃ ಕುರು ಕರ್ಮಾಣಿ ಸಂಗಂ ತ್ಯಕ್ತ್ವಾ ಧನಂಜಯ |\nಸಿದ್ಧ್ಯಸಿದ್ಧ್ಯೋಃ ಸಮೋ ಭೂತ್ವಾ ಸಮತ್ವಂ ಯೋಗ ಉಚ್ಯತೇ ||',
    meaning: 'ಹೇ ಧನಂಜಯ, ಆಸಕ್ತಿ ತ್ಯಜಿಸಿ ಯೋಗಸ್ಥನಾಗಿ ಕರ್ಮ ಮಾಡು. ಯಶ-ಅಪಯಶದಲ್ಲಿ ಸಮಭಾವ ಇಡು — ಈ ಸಮತ್ವವೇ ಯೋಗ.',
    application: 'Promotion ಬಂದರೂ ಬರದಿದ್ದರೂ ಮನಸ್ಸು ಶಾಂತವಾಗಿರಲಿ. Equanimity in outcomes — ಇದೇ ಯೋಗ. ಇದನ್ನು daily practice ಮಾಡಿ.',
    keyword: 'ಯೋಗ',
  },
  {
    chapter: 2, verse: 56,
    sanskrit: 'duhkheshwanudvignamanah sukheshu vigatasprihah | vitaraagabhayakrodhah sthitadheer muniruchyate ||',
    kannada: 'ದುಃಖೇಷ್ವನುದ್ವಿಗ್ನಮನಾಃ ಸುಖೇಷು ವಿಗತಸ್ಪೃಹಃ |\nವೀತರಾಗಭಯಕ್ರೋಧಃ ಸ್ಥಿತಧೀರ್ಮುನಿರುಚ್ಯತೇ ||',
    meaning: 'ದುಃಖದಲ್ಲಿ ಮನಸ್ಸು ಕ್ಷೋಭೆ ಪಡದ, ಸುಖದಲ್ಲಿ ಆಸೆ ಪಡದ, ರಾಗ-ಭಯ-ಕ್ರೋಧ ರಹಿತ — ಅವನೇ ಸ್ಥಿತಪ್ರಜ್ಞ ಮುನಿ.',
    application: 'Stable, calm leadership under all conditions. ಒಳ್ಳೆ ಸುದ್ದಿಗೆ ಹಿಗ್ಗಬೇಡ, ಕೆಟ್ಟ ಸುದ್ದಿಗೆ ಕುಗ್ಗಬೇಡ. ಸ್ಥಿತಪ್ರಜ್ಞ ಆಗುವ ಗುರಿ ಇರಲಿ.',
    keyword: 'ಸ್ಥಿತಪ್ರಜ್ಞ',
  },
  {
    chapter: 2, verse: 62,
    sanskrit: 'dhyaayato vishayaan pumsah sangas teshupajaayate | sangaat sanjaayate kaamah kaamaatkrodhobhijaayate ||',
    kannada: 'ಧ್ಯಾಯತೋ ವಿಷಯಾನ್ಪುಂಸಃ ಸಂಗಸ್ತೇಷೂಪಜಾಯತೇ |\nಸಂಗಾತ್ಸಂಜಾಯತೇ ಕಾಮಃ ಕಾಮಾತ್ ಕ್ರೋಧೋsಭಿಜಾಯತೇ ||',
    meaning: 'ವಿಷಯಗಳ ಚಿಂತನೆಯಿಂದ ಅವುಗಳಲ್ಲಿ ಆಸಕ್ತಿ ಹುಟ್ಟುತ್ತದೆ. ಆಸಕ್ತಿಯಿಂದ ಕಾಮ, ಕಾಮದಿಂದ ಕ್ರೋಧ ಉಂಟಾಗುತ್ತದೆ.',
    application: 'Social media scroll → FOMO → anger. ಇದು ಗೀತೆ ಹೇಳಿದ chain. ನೀವು ಏನರ್ಥಿಸುತ್ತೀರೋ ಅದೇ ನೀವಾಗುತ್ತೀರಿ. Input quality ನಿಯಂತ್ರಿಸಿ.',
    keyword: 'ಚಿಂತನ ಶ್ರೃಂಖಲೆ',
  },
  {
    chapter: 2, verse: 63,
    sanskrit: 'krodhad bhavati sammohah sammohaatsmritivibhramah | smritibhramshaad buddhinaasho buddhinaashaat pranashyati ||',
    kannada: 'ಕ್ರೋಧಾದ್ಭವತಿ ಸಮ್ಮೋಹಃ ಸಮ್ಮೋಹಾತ್ ಸ್ಮೃತಿವಿಭ್ರಮಃ |\nಸ್ಮೃತಿಭ್ರಂಶಾದ್ ಬುದ್ಧಿನಾಶೋ ಬುದ್ಧಿನಾಶಾತ್ ಪ್ರಣಶ್ಯತಿ ||',
    meaning: 'ಕ್ರೋಧದಿಂದ ಮೋಹ, ಮೋಹದಿಂದ ಸ್ಮೃತಿ ಭ್ರಮ, ಸ್ಮೃತಿ ಭ್ರಮದಿಂದ ಬುದ್ಧಿ ನಾಶ, ಬುದ್ಧಿ ನಾಶದಿಂದ ಸರ್ವನಾಶ.',
    application: 'Anger kills decision making. ಕೋಪದಲ್ಲಿ ಮಾತು, email, decision — ಇಳಿದ ಮೇಲೆ ನೋಡಿ. 10 ನಿಮಿಷ ತಡೆದರೆ ತಪ್ಪು ನಿರ್ಧಾರ ತಪ್ಪುತ್ತದೆ.',
    keyword: 'ಕ್ರೋಧ ವಿನಾಶ',
  },
  {
    chapter: 2, verse: 70,
    sanskrit: 'aapuryamaanam achala-pratishtham samudram apah pravishanti yadvat | tadvat kaamaa yam pravishanti sarve sa shaantim aapnoti na kaamakaami ||',
    kannada: 'ಆಪೂರ್ಯಮಾಣಮಚಲಪ್ರತಿಷ್ಠಂ ಸಮುದ್ರಮಾಪಃ ಪ್ರವಿಶಂತಿ ಯದ್ವತ್ |\nತದ್ವತ್ ಕಾಮಾ ಯಂ ಪ್ರವಿಶಂತಿ ಸರ್ವೇ ಸ ಶಾಂತಿಮಾಪ್ನೋತಿ ನ ಕಾಮಕಾಮೀ ||',
    meaning: 'ನದಿಗಳು ಸಮುದ್ರ ಸೇರಿದರೂ ಅದು ಚಂಚಲಗೊಳ್ಳದಂತೆ, ಕಾಮನೆಗಳು ಯಾರ ಮನಸ್ಸಿಗೆ ಸೇರಿದರೂ ಅದು ಶಾಂತವಾಗಿದ್ದರೆ ಅವನಿಗೆ ಶಾಂತಿ. ಕಾಮನೆ ಅರಸುವವನಿಗಲ್ಲ.',
    application: 'ಬೇಕೆಂಬ ಆಸೆ ಪೂರೈಸುವುದರಿಂದ ಶಾಂತಿ ಸಿಗದು. ಒಳಗಿನ stability ಬೆಳೆಸಿ. ಸಮುದ್ರದಂತೆ ವಿಶಾಲ ಮನಸ್ಸು — ಏನೂ ಕಲಕಲಾರದು.',
    keyword: 'ಶಾಂತಿ',
  },
  {
    chapter: 2, verse: 72,
    sanskrit: 'esha braahmi sthitih paartha nainam praapya vimuhyati | sthitvaasyaantakaalepy aina brahma-nirvaanamarichhati ||',
    kannada: 'ಏಷಾ ಬ್ರಾಹ್ಮೀ ಸ್ಥಿತಿಃ ಪಾರ್ಥ ನೈನಾಂ ಪ್ರಾಪ್ಯ ವಿಮುಹ್ಯತಿ |\nಸ್ಥಿತ್ವಾsಸ್ಯಾಮಂತಕಾಲೇsಪಿ ಬ್ರಹ್ಮನಿರ್ವಾಣಮೃಚ್ಛತಿ ||',
    meaning: 'ಇದೇ ಬ್ರಾಹ್ಮೀ ಸ್ಥಿತಿ. ಇದನ್ನು ಪಡೆದವನು ಮೋಹಕ್ಕೆ ಒಳಗಾಗದು. ಅಂತ್ಯಕಾಲದಲ್ಲೂ ಇದರಲ್ಲಿ ನೆಲೆ ನಿಂತವನು ಬ್ರಹ್ಮನಿರ್ವಾಣ ಪಡೆಯುತ್ತಾನೆ.',
    application: 'ಸ್ಥಿತಪ್ರಜ್ಞ ಸ್ಥಿತಿ ಇಡೀ ಜೀವನದ ಗುರಿ. ಪ್ರತಿ ದಿನ ಧ್ಯಾನ, ಗೀತಾ ಓದು ಆ ಸ್ಥಿತಿಯ ಕಡೆ ಕೊಂಡೊಯ್ಯುತ್ತದೆ.',
    keyword: 'ಬ್ರಾಹ್ಮೀ ಸ್ಥಿತಿ',
  },

  // ═══════════════════════════════════════════
  // CHAPTER 3 — ಕರ್ಮ ಯೋಗ (43 ಶ್ಲೋಕಗಳು)
  // ═══════════════════════════════════════════
  {
    chapter: 3, verse: 5,
    sanskrit: 'na hi kashchit kshanamapi jaatu tishthatyakarmaakrit | kaaryate hyavashah karma sarvah prakritijairgunaih ||',
    kannada: 'ನ ಹಿ ಕಶ್ಚಿತ್ ಕ್ಷಣಮಪಿ ಜಾತು ತಿಷ್ಠತ್ಯಕರ್ಮಕೃತ್ |\nಕಾರ್ಯತೇ ಹ್ಯವಶಃ ಕರ್ಮ ಸರ್ವಃ ಪ್ರಕೃತಿಜೈರ್ಗುಣೈಃ ||',
    meaning: 'ಯಾರೂ ಒಂದು ಕ್ಷಣವೂ ಕರ್ಮ ಮಾಡದೇ ಇರಲಾರರು. ಪ್ರಕೃತಿ ಗುಣಗಳು ಎಲ್ಲರನ್ನೂ ಅನಿವಾರ್ಯವಾಗಿ ಕರ್ಮ ಮಾಡಿಸುತ್ತವೆ.',
    application: 'ಸೋಮಾರಿತನ ಎಂದರೆ ಕರ್ಮ ಮಾಡದಿರುವುದು — ಇದು ಅಸಾಧ್ಯ. ನಿದ್ದೆ, ಉಸಿರಾಟ ಸಹ ಕರ್ಮ. ಆದ್ದರಿಂದ conscious choice ಮಾಡಿ ಕರ್ಮ ಆರಿಸಿ.',
    keyword: 'ಕರ್ಮ ಅನಿವಾರ್ಯ',
  },
  {
    chapter: 3, verse: 9,
    sanskrit: 'yajnaarthaatkarmanonyo lokoyam karmabandhanah | tadartham karma kaunteya muktasangah samaachara ||',
    kannada: 'ಯಜ್ಞಾರ್ಥಾತ್ ಕರ್ಮಣೋsನ್ಯತ್ರ ಲೋಕೋsಯಂ ಕರ್ಮಬಂಧನಃ |\nತದರ್ಥಂ ಕರ್ಮ ಕೌಂತೇಯ ಮುಕ್ತಸಂಗಃ ಸಮಾಚರ ||',
    meaning: 'ಯಜ್ಞಕ್ಕಾಗಿ ಮಾಡಿದ ಕರ್ಮ ಹೊರತು ಇತರ ಕರ್ಮ ಬಂಧನ. ಆದ್ದರಿಂದ ಆಸಕ್ತಿ ರಹಿತನಾಗಿ ಕರ್ಮ ಮಾಡು.',
    application: 'ಸ್ವಾರ್ಥ ಉದ್ದೇಶ ರಹಿತ ಸೇವೆ — ಯಜ್ಞ. ಕೆಲಸ, ಮನೆ, ಸಮಾಜ — ಸೇವೆ ಮನೋಭಾವದಿಂದ ಮಾಡಿದಾಗ ಬಂಧನ ಇಲ್ಲ.',
    keyword: 'ಯಜ್ಞ ಭಾವನೆ',
  },
  {
    chapter: 3, verse: 16,
    sanskrit: 'evam pravartitam chakram naanuvartayatiha yah | aghaayu rindriyaaramo mogham paartha sa jeevati ||',
    kannada: 'ಏವಂ ಪ್ರವರ್ತಿತಂ ಚಕ್ರಂ ನಾನುವರ್ತಯತೀಹ ಯಃ |\nಅಘಾಯುರಿಂದ್ರಿಯಾರಾಮೋ ಮೋಘಂ ಪಾರ್ಥ ಸ ಜೀವತಿ ||',
    meaning: 'ಈ ರೀತಿ ತಿರುಗುವ ಜಗದ ಚಕ್ರದಲ್ಲಿ ಯಾರು ಭಾಗ ತೆಗೆದುಕೊಳ್ಳಲ್ಲವೋ, ಅವನು ಪಾಪಜೀವನ, ಇಂದ್ರಿಯ ಸುಖ ಮಾತ್ರ ಅರಸುವವನು — ವ್ಯರ್ಥ ಜೀವಿಸುತ್ತಾನೆ.',
    application: 'ಸಮಾಜಕ್ಕೆ ಕೊಡುಗೆ ಕೊಡದ ಜೀವನ ವ್ಯರ್ಥ. ಕೆಲಸ, ಸಮಾಜ, ಮನೆ — ಎಲ್ಲದಕ್ಕೂ ಪ್ರಾಮಾಣಿಕ ಕೊಡುಗೆ ಕೊಡಿ.',
    keyword: 'ಸಮಾಜ ಕೊಡುಗೆ',
  },
  {
    chapter: 3, verse: 19,
    sanskrit: 'tasmaadasaktah satatam kaaryam karma samaachara | asakto hyaacharan karma paramapnoti poorushah ||',
    kannada: 'ತಸ್ಮಾದಸಕ್ತಃ ಸತತಂ ಕಾರ್ಯಂ ಕರ್ಮ ಸಮಾಚರ |\nಅಸಕ್ತೋ ಹ್ಯಾಚರನ್ ಕರ್ಮ ಪರಮಾಪ್ನೋತಿ ಪೂರುಷಃ ||',
    meaning: 'ಆದ್ದರಿಂದ ಯಾವಾಗಲೂ ಆಸಕ್ತಿ ರಹಿತನಾಗಿ ಕರ್ತವ್ಯ ಕರ್ಮ ಮಾಡು. ಆಸಕ್ತಿ ರಹಿತನಾಗಿ ಕರ್ಮ ಮಾಡುವ ಮನುಷ್ಯ ಪರಮ ಪಡೆಯುತ್ತಾನೆ.',
    application: 'ಫಲದ ಅಪೇಕ್ಷೆ ಇಲ್ಲದೆ ಕೆಲಸ ಮಾಡಿ. ಇದು ಕಷ್ಟ ಆದರೆ ಸಾಧ್ಯ. ಪ್ರತಿ ದಿನ ಒಂದು ಕೆಲಸ detachment ಯಿಂದ ಮಾಡಿ ನೋಡಿ.',
    keyword: 'ಅಸಕ್ತ ಕರ್ಮ',
  },
  {
    chapter: 3, verse: 21,
    sanskrit: 'yadyadacharati shreshthas tattadevetaro janah | sa yat pramanam kurute lokastadanuvartate ||',
    kannada: 'ಯದ್ಯದಾಚರತಿ ಶ್ರೇಷ್ಠಸ್ತತ್ತದೇವೇತರೋ ಜನಃ |\nಸ ಯತ್ಪ್ರಮಾಣಂ ಕುರುತೇ ಲೋಕಸ್ತದನುವರ್ತತೇ ||',
    meaning: 'ಶ್ರೇಷ್ಠ ಮನುಷ್ಯ ಯಾವ ಆಚಾರ ಮಾಡುತ್ತಾನೋ, ಇತರರು ಅದನ್ನೇ ಅನುಸರಿಸುತ್ತಾರೆ. ಅವನು ಸ್ಥಾಪಿಸುವ ಮಾನದಂಡ ಜಗತ್ತು ಅನುಸರಿಸುತ್ತದೆ.',
    application: 'ನೀವು ಮಾಡುವ ಪ್ರತಿ ನಿರ್ಧಾರ ನಿಮ್ಮ ತಂಡ ಮತ್ತು ಮಕ್ಕಳನ್ನು ಪ್ರಭಾವಿಸುತ್ತದೆ. "Be the change" — ಇದೇ ಗೀತೆ ಹೇಳಿದ್ದು.',
    keyword: 'ನಾಯಕತ್ವ',
  },
  {
    chapter: 3, verse: 27,
    sanskrit: 'prakriteh kriyamaanaani gunaih karmaani sarvashah | ahankaaravimoodhaatmaa kartaahamiti manyate ||',
    kannada: 'ಪ್ರಕೃತೇಃ ಕ್ರಿಯಮಾಣಾನಿ ಗುಣೈಃ ಕರ್ಮಾಣಿ ಸರ್ವಶಃ |\nಅಹಂಕಾರವಿಮೂಢಾತ್ಮಾ ಕರ್ತಾಹಮಿತಿ ಮನ್ಯತೇ ||',
    meaning: 'ಪ್ರಕೃತಿಯ ಗುಣಗಳು ಎಲ್ಲ ಕರ್ಮಗಳನ್ನು ಮಾಡುತ್ತಿವೆ. ಅಹಂಕಾರದಿಂದ ಮೋಹಗೊಂಡ ಮೂರ್ಖ "ನಾನೇ ಮಾಡುತ್ತಿದ್ದೇನೆ" ಎಂದು ಭಾವಿಸುತ್ತಾನೆ.',
    application: 'ಅಹಂಕಾರ ಬಿಡಿ. Success ನಿಮ್ಮೊಬ್ಬರ ಕೃತಿ ಅಲ್ಲ — ತಂಡ, ಅವಕಾಶ, ಭಗವಂತ ಎಲ್ಲದರ ಫಲ. Gratitude ಬೆಳೆಸಿ.',
    keyword: 'ಅಹಂಕಾರ ತ್ಯಾಗ',
  },
  {
    chapter: 3, verse: 35,
    sanskrit: 'shreyan svadharmo vigunah paradharmat svanushtitat | svadharme nidhanam shreyah paradharmo bhayavahah ||',
    kannada: 'ಶ್ರೇಯಾನ್ ಸ್ವಧರ್ಮೋ ವಿಗುಣಃ ಪರಧರ್ಮಾತ್ ಸ್ವನುಷ್ಠಿತಾತ್ |\nಸ್ವಧರ್ಮೇ ನಿಧನಂ ಶ್ರೇಯಃ ಪರಧರ್ಮೋ ಭಯಾವಹಃ ||',
    meaning: 'ಚೆನ್ನಾಗಿ ನಿರ್ವಹಿಸಿದ ಪರಧರ್ಮಕ್ಕಿಂತ ದೋಷಪೂರಿತ ಸ್ವಧರ್ಮ ಶ್ರೇಯಸ್ಕರ. ಸ್ವಧರ್ಮದಲ್ಲಿ ಸಾಯುವುದು ಉತ್ತಮ.',
    application: 'ಬೇರೆಯವರ ಜೀವನ ನೋಡಿ ಅನುಕರಿಸಬೇಡಿ. ನಿಮ್ಮ ನಿಜ ಸ್ವಭಾವವನ್ನು ಪೂರ್ಣ ಬದುಕಿರಿ. Comparison trap ತಪ್ಪಿಸಿ. Authenticity first.',
    keyword: 'ಸ್ವಧರ್ಮ',
  },
  {
    chapter: 3, verse: 42,
    sanskrit: 'indriyaani paraanyaahur indriyebhyah param manah | manasastu paraa buddhir yo buddheh paratastu sah ||',
    kannada: 'ಇಂದ್ರಿಯಾಣಿ ಪರಾಣ್ಯಾಹುರಿಂದ್ರಿಯೇಭ್ಯಃ ಪರಂ ಮನಃ |\nಮನಸಸ್ತು ಪರಾ ಬುದ್ಧಿರ್ಯೋ ಬುದ್ಧೇಃ ಪರತಸ್ತು ಸಃ ||',
    meaning: 'ಇಂದ್ರಿಯಗಳು ದೇಹಕ್ಕಿಂತ ಮೇಲು, ಮನಸ್ಸು ಇಂದ್ರಿಯಕ್ಕಿಂತ ಮೇಲು, ಬುದ್ಧಿ ಮನಸ್ಸಿಗಿಂತ ಮೇಲು, ಆತ್ಮ ಬುದ್ಧಿಗಿಂತ ಮೇಲು.',
    application: 'ಇಂದ್ರಿಯ ಸುಖ ಕಡಿಮೆ level. ಮನಸ್ಸು higher. ಬುದ್ಧಿ ಇನ್ನು higher. ಆತ್ಮ — highest. Higher levels cultivate ಮಾಡಿ. ಆಧ್ಯಾತ್ಮಿಕ ಉನ್ನತಿ ಇದರ ಮಾರ್ಗ.',
    keyword: 'ಆತ್ಮ ಶ್ರೇಷ್ಠತೆ',
  },

  // ═══════════════════════════════════════════
  // CHAPTER 4 — ಜ್ಞಾನ ಕರ್ಮ ಸಂನ್ಯಾಸ ಯೋಗ
  // ═══════════════════════════════════════════
  {
    chapter: 4, verse: 7,
    sanskrit: 'yada yada hi dharmasya glanir bhavati bharata | abhyutthanam adharmasya tadatmanam srjamy aham ||',
    kannada: 'ಯದಾ ಯದಾ ಹಿ ಧರ್ಮಸ್ಯ ಗ್ಲಾನಿರ್ಭವತಿ ಭಾರತ |\nಅಭ್ಯುತ್ಥಾನಮಧರ್ಮಸ್ಯ ತದಾತ್ಮಾನಂ ಸೃಜಾಮ್ಯಹಮ್ ||',
    meaning: 'ಎಲ್ಲಿ ಎಲ್ಲಿ ಧರ್ಮದ ಅವನತಿ ಮತ್ತು ಅಧರ್ಮದ ಉದ್ಭವ ಆಗುತ್ತದೆಯೋ, ಅಲ್ಲಿ ಅಲ್ಲಿ ನಾನು ನನ್ನನ್ನು ಸೃಷ್ಟಿಸಿಕೊಳ್ಳುತ್ತೇನೆ.',
    application: 'ಅನ್ಯಾಯ ಕಂಡಾಗ ಮಾತನಾಡಿ. ಸಮಾಜದಲ್ಲಿ ಧರ್ಮ ರಕ್ಷಿಸಲು ನೀವೂ ಕೃಷ್ಣನ ಒಂದು ರೂಪ. Speak up — ಇದೇ ನಿಮ್ಮ ಅವತಾರ.',
    keyword: 'ಧರ್ಮ ರಕ್ಷಣೆ',
  },
  {
    chapter: 4, verse: 8,
    sanskrit: 'paritranaya sadhunam vinashaya cha dushkrtam | dharma-samsthapanarthaya sambhavami yuge yuge ||',
    kannada: 'ಪರಿತ್ರಾಣಾಯ ಸಾಧೂನಾಂ ವಿನಾಶಾಯ ಚ ದುಷ್ಕೃತಾಮ್ |\nಧರ್ಮಸಂಸ್ಥಾಪನಾರ್ಥಾಯ ಸಂಭವಾಮಿ ಯುಗೇ ಯುಗೇ ||',
    meaning: 'ಸಾಧುಗಳ ರಕ್ಷಣೆಗಾಗಿ, ದುಷ್ಟರ ನಾಶಕ್ಕಾಗಿ, ಧರ್ಮ ಸ್ಥಾಪನೆಗಾಗಿ ನಾನು ಯುಗ ಯುಗದಲ್ಲೂ ಅವತರಿಸುತ್ತೇನೆ.',
    application: 'ಒಳ್ಳೆಯ ಜನರನ್ನು support ಮಾಡಿ, ಅನ್ಯಾಯ ಎದುರಿಸಿ. ಸಣ್ಣ ಮಕ್ಕಳನ್ನು mentor ಮಾಡಿ. ಪ್ರತಿ ಒಳ್ಳೆಯ ಕ್ರಿಯೆ ಒಂದು ಅವತಾರ.',
    keyword: 'ರಕ್ಷಣೆ ಮತ್ತು ನ್ಯಾಯ',
  },
  {
    chapter: 4, verse: 11,
    sanskrit: 'ye yathaa maam prapadyante taams tathaivaahum bhajaami | mama vartmaanuvartante manushyaah paartha sarvashah ||',
    kannada: 'ಯೇ ಯಥಾ ಮಾಂ ಪ್ರಪದ್ಯಂತೇ ತಾಂಸ್ತಥೈವ ಭಜಾಮ್ಯಹಮ್ |\nಮಮ ವರ್ತ್ಮಾನುವರ್ತಂತೇ ಮನುಷ್ಯಾಃ ಪಾರ್ಥ ಸರ್ವಶಃ ||',
    meaning: 'ಯಾರು ಯಾವ ರೀತಿ ನನ್ನ ಶರಣಾಗುತ್ತಾರೋ, ನಾನು ಅವರನ್ನು ಅದೇ ರೀತಿ ಅನುಗ್ರಹಿಸುತ್ತೇನೆ. ಎಲ್ಲ ಜನರು ಎಲ್ಲ ದಾರಿಗಳಲ್ಲಿ ನನ್ನ ದಾರಿ ಅನುಸರಿಸುತ್ತಾರೆ.',
    application: 'ಭಗವಂತ ಎಲ್ಲ ಭಕ್ತಿ ಮಾರ್ಗ ಸ್ವೀಕರಿಸುತ್ತಾನೆ. ನಿಮ್ಮ ದಾರಿ — ಕರ್ಮ, ಜ್ಞಾನ, ಭಕ್ತಿ — ಯಾವುದಾದರೂ ಸರಿ, sincere ಆಗಿರಿ.',
    keyword: 'ಎಲ್ಲ ಮಾರ್ಗ ಸ್ವೀಕಾರ',
  },
  {
    chapter: 4, verse: 18,
    sanskrit: 'karmannyakarma yah pashyed akarmanyi cha karma yah | sa buddhimaan manushyeshu sa yuktah kritshnakarmakrit ||',
    kannada: 'ಕರ್ಮಣ್ಯಕರ್ಮ ಯಃ ಪಶ್ಯೇದಕರ್ಮಣಿ ಚ ಕರ್ಮ ಯಃ |\nಸ ಬುದ್ಧಿಮಾನ್ ಮನುಷ್ಯೇಷು ಸ ಯುಕ್ತಃ ಕೃತ್ಸ್ನಕರ್ಮಕೃತ್ ||',
    meaning: 'ಕರ್ಮದಲ್ಲಿ ಅಕರ್ಮ ಮತ್ತು ಅಕರ್ಮದಲ್ಲಿ ಕರ್ಮ ಕಾಣುವವನು ಮನುಷ್ಯರಲ್ಲಿ ಬುದ್ಧಿವಂತ ಮತ್ತು ಯೋಗಿ.',
    application: 'ಶಾಂತವಾಗಿ ಕುಳಿತಿದ್ದರೂ ಮನಸ್ಸು ಕೆಲಸ ಮಾಡಬಹುದು. Active ಇದ್ದರೂ detached ಆಗಿರಬಹುದು. ಈ ವಿವೇಕ ಬೆಳೆಸಿ.',
    keyword: 'ವಿವೇಕ',
  },
  {
    chapter: 4, verse: 38,
    sanskrit: 'na hi jnaanena sadrisham pavitram iha vidyate | tat svayam yoga-samsiddhah kaalenaat mani vindati ||',
    kannada: 'ನ ಹಿ ಜ್ಞಾನೇನ ಸದೃಶಂ ಪವಿತ್ರಮಿಹ ವಿದ್ಯತೇ |\nತತ್ ಸ್ವಯಂ ಯೋಗಸಂಸಿದ್ಧಃ ಕಾಲೇನಾತ್ಮನಿ ವಿಂದತಿ ||',
    meaning: 'ಜ್ಞಾನಕ್ಕಿಂತ ಪವಿತ್ರ ಬೇರೆ ಏನೂ ಇಲ್ಲ. ಯೋಗದಿಂದ ಸಿದ್ಧಿ ಪಡೆದವನು ಕಾಲಕ್ರಮದಲ್ಲಿ ಅದನ್ನು ತನ್ನಲ್ಲೇ ಕಂಡುಕೊಳ್ಳುತ್ತಾನೆ.',
    application: 'ಕಲಿಯುವ ಆಸಕ್ತಿ ಇರಿಸಿ. ಪ್ರತಿ ದಿನ ಒಂದು ವಿಷಯ ಕಲಿಯಿರಿ. ಜ್ಞಾನ ಶ್ರೇಷ್ಠ ಸಂಪತ್ತು — ಇದನ್ನು ಯಾರೂ ಕಸಿದುಕೊಳ್ಳಲಾಗದು.',
    keyword: 'ಜ್ಞಾನ ಶ್ರೇಷ್ಠತೆ',
  },
  {
    chapter: 4, verse: 42,
    sanskrit: 'tasmad ajnaana-sambhutam hrit-stham jnaanaasinaatmanah | chittvainam samshayam yogam aatishtthotishtha bharata ||',
    kannada: 'ತಸ್ಮಾದಜ್ಞಾನಸಂಭೂತಂ ಹೃತ್ಸ್ಥಂ ಜ್ಞಾನಾಸಿನಾತ್ಮನಃ |\nಛಿತ್ತ್ವೈನಂ ಸಂಶಯಂ ಯೋಗಮಾತಿಷ್ಠೋತ್ತಿಷ್ಠ ಭಾರತ ||',
    meaning: 'ಅಜ್ಞಾನದಿಂದ ಹುಟ್ಟಿದ ಹೃದಯದ ಸಂಶಯ ಜ್ಞಾನ ಕತ್ತಿಯಿಂದ ಕತ್ತರಿಸಿ ಯೋಗದಲ್ಲಿ ನಿಲ್ಲು — ಎದ್ದೇಳು, ಭಾರತ!',
    application: 'Doubt kills action. ಸಂಶಯ ಜ್ಞಾನದಿಂದ ಕತ್ತರಿಸಲ್ಪಡಬೇಕು. ಓದಿ, ಕಲಿತು, ಮೇಲೇಳು. Analysis paralysis ಬಿಟ್ಟು ಮುಂದೆ ಹೆಜ್ಜೆ ಇಡಿ.',
    keyword: 'ಸಂಶಯ ತ್ಯಾಗ',
  },

  // ═══════════════════════════════════════════
  // CHAPTER 5 — ಕರ್ಮ ಸಂನ್ಯಾಸ ಯೋಗ
  // ═══════════════════════════════════════════
  {
    chapter: 5, verse: 10,
    sanskrit: 'brahmanyadhaya karmaani sangam tyaktvaa karoti yah | lipyate na sa paapena padmapatramivambhasaa ||',
    kannada: 'ಬ್ರಹ್ಮಣ್ಯಾಧಾಯ ಕರ್ಮಾಣಿ ಸಂಗಂ ತ್ಯಕ್ತ್ವಾ ಕರೋತಿ ಯಃ |\nಲಿಪ್ಯತೇ ನ ಸ ಪಾಪೇನ ಪದ್ಮಪತ್ರಮಿವಾಂಭಸಾ ||',
    meaning: 'ಭಗವಂತನಲ್ಲಿ ಕರ್ಮ ಅರ್ಪಿಸಿ ಆಸಕ್ತಿ ಬಿಟ್ಟು ಮಾಡುವವನಿಗೆ ಪಾಪ ಅಂಟದು — ತಾವರೆ ಎಲೆಗೆ ನೀರು ಅಂಟದಂತೆ.',
    application: 'ಕೆಲಸ ಮಾಡಿ ಆದರೆ ಅದರ ಫಲ ನಿಮ್ಮದಲ್ಲ ಎಂಬ ಭಾವ. Lotus leaf attitude — ಎಲ್ಲದರಲ್ಲೂ ಇದ್ದರೂ ಅಂಟದಿರಿ.',
    keyword: 'ತಾವರೆ ಭಾವ',
  },
  {
    chapter: 5, verse: 18,
    sanskrit: 'vidya-vinaya-sampanne brahmane gavi hastini | shuni chaiva shvapake cha panditah samadarsinah ||',
    kannada: 'ವಿದ್ಯಾವಿನಯಸಂಪನ್ನೇ ಬ್ರಾಹ್ಮಣೇ ಗವಿ ಹಸ್ತಿನಿ |\nಶುನಿ ಚೈವ ಶ್ವಪಾಕೇ ಚ ಪಂಡಿತಾಃ ಸಮದರ್ಶಿನಃ ||',
    meaning: 'ಜ್ಞಾನ-ವಿನಯ ಸಂಪನ್ನ ಬ್ರಾಹ್ಮಣ, ಗೋವು, ಆನೆ, ನಾಯಿ ಮತ್ತು ಚಾಂಡಾಲ — ಎಲ್ಲರಲ್ಲೂ ಜ್ಞಾನಿಗಳು ಸಮಭಾವ ಕಾಣುತ್ತಾರೆ.',
    application: 'Title, salary ನೋಡಿ ತಾರತಮ್ಯ ಮಾಡಬೇಡಿ. ಎಲ್ಲರಲ್ಲೂ ಒಂದೇ ಆತ್ಮ. ಮಕ್ಕಳಿಗೆ ಎಲ್ಲರೊಂದಿಗೆ ಗೌರವದಿಂದ ನಡೆಯಲು ಕಲಿಸಿ.',
    keyword: 'ಸಮಭಾವ',
  },
  {
    chapter: 5, verse: 22,
    sanskrit: 'ye hi samsparshajaa bhogaa duhkhayonaya eva te | aadyantavantah kaunteya na teshu ramate budhah ||',
    kannada: 'ಯೇ ಹಿ ಸಂಸ್ಪರ್ಶಜಾ ಭೋಗಾ ದುಃಖಯೋನಯ ಏವ ತೇ |\nಆದ್ಯಂತವಂತಃ ಕೌಂತೇಯ ನ ತೇಷು ರಮತೇ ಬುಧಃ ||',
    meaning: 'ಇಂದ್ರಿಯ ಸ್ಪರ್ಶದಿಂದ ಹುಟ್ಟುವ ಭೋಗಗಳು ದುಃಖದ ಕಾರಣ. ಇವು ಆದಿ-ಅಂತ ಉಳ್ಳವು — ಜ್ಞಾನಿ ಇವುಗಳಲ್ಲಿ ಖುಷಿ ಪಡದು.',
    application: 'ಭೌತಿಕ ಸುಖ temporary. ಅದರ ಹಿಂದೆ ಬೀಳಬೇಡಿ. Inner joy cultivate ಮಾಡಿ. ಅದು ಯಾರೂ ಕೊಳ್ಳಲಾಗದ ಸ್ಥಾಯಿ ಸುಖ.',
    keyword: 'ಭೋಗ ಮಿಥ್ಯ',
  },
  {
    chapter: 5, verse: 29,
    sanskrit: 'bhoktaram yajna-tapasam sarva-loka-maheshvaram | suhridam sarva-bhutanam jnatva mam shantim rcchati ||',
    kannada: 'ಭೋಕ್ತಾರಂ ಯಜ್ಞತಪಸಾಂ ಸರ್ವಲೋಕಮಹೇಶ್ವರಮ್ |\nಸುಹೃದಂ ಸರ್ವಭೂತಾನಾಂ ಜ್ಞಾತ್ವಾ ಮಾಂ ಶಾಂತಿಮೃಚ್ಛತಿ ||',
    meaning: 'ನಾನು ಎಲ್ಲ ಯಜ್ಞ-ತಪಸ್ಸಿನ ಭೋಕ್ತ, ಸರ್ವಲೋಕದ ಮಹೇಶ್ವರ ಮತ್ತು ಎಲ್ಲ ಜೀವಿಗಳ ಹಿತೈಷಿ — ತಿಳಿದವನು ಶಾಂತಿ ಪಡೆಯುತ್ತಾನೆ.',
    application: 'ಎಲ್ಲ ಕೆಲಸ ಭಗವಂತನಿಗೆ ಅರ್ಪಿಸಿ ಮಾಡಿದಾಗ ಮಾನಸಿಕ ಶಾಂತಿ ಸಿಗುತ್ತದೆ. ಕೆಲಸ, ಕುಟುಂಬ — ಎಲ್ಲವೂ ಭಗವಂತನ ಸೇವೆ.',
    keyword: 'ಶಾಂತಿ',
  },

  // ═══════════════════════════════════════════
  // CHAPTER 6 — ಆತ್ಮ ಸಂಯಮ ಯೋಗ
  // ═══════════════════════════════════════════
  {
    chapter: 6, verse: 5,
    sanskrit: 'uddhared atmanatmanam natmanam avasadayet | atmaiva hyatmano bandhur atmaiva ripur atmanah ||',
    kannada: 'ಉದ್ಧರೇದಾತ್ಮನಾ ಆತ್ಮಾನಂ ನಾತ್ಮಾನಮವಸಾದಯೇತ್ |\nಆತ್ಮೈವ ಹ್ಯಾತ್ಮನೋ ಬಂಧುರಾತ್ಮೈವ ರಿಪುರಾತ್ಮನಃ ||',
    meaning: 'ತನ್ನನ್ನು ತಾನೇ ಉದ್ಧರಿಸಿಕೋ, ತನ್ನನ್ನು ತಾನೇ ಅಧೋಗತಿಗೆ ದೂಡಬೇಡ. ಆತ್ಮವೇ ತನ್ನ ಬಂಧು, ಆತ್ಮವೇ ತನ್ನ ಶತ್ರು.',
    application: 'Self-doubt, burnout — ಇವು ನಿಮ್ಮ ಅಂತರ ಶತ್ರುಗಳು. ನಿಮ್ಮ ಶಕ್ತಿ ಗುರುತಿಸಿ, daily habits build ಮಾಡಿ. ನೀವೇ ನಿಮ್ಮ greatest asset.',
    keyword: 'ಆತ್ಮ ವಿಕಾಸ',
  },
  {
    chapter: 6, verse: 17,
    sanskrit: 'yuktahara-viharasya yukta-cheshthashya karmasu | yukta-svapnaavabodhasya yogo bhavati duhkhaha ||',
    kannada: 'ಯುಕ್ತಾಹಾರವಿಹಾರಸ್ಯ ಯುಕ್ತಚೇಷ್ಟಸ್ಯ ಕರ್ಮಸು |\nಯುಕ್ತಸ್ವಪ್ನಾವಬೋಧಸ್ಯ ಯೋಗೋ ಭವತಿ ದುಃಖಹಾ ||',
    meaning: 'ಸರಿಯಾಗಿ ತಿನ್ನುವ, ವಿಶ್ರಮಿಸುವ, ಕೆಲಸ ಮಾಡುವ, ಮಲಗುವ ಮತ್ತು ಎಚ್ಚರವಾಗುವ ಅಭ್ಯಾಸ ಉಳ್ಳವನಿಗೆ ಯೋಗ ದುಃಖ ನಾಶ ಮಾಡುತ್ತದೆ.',
    application: 'Work-life balance — ಗೀತೆ ೬ ಸಾವಿರ ವರ್ಷ ಮೊದಲೇ ಹೇಳಿತು. ಸರಿಯಾದ ಆಹಾರ, ನಿದ್ದೆ, ವ್ಯಾಯಾಮ, ಕೆಲಸ — ಯೋಗ ಜೀವನ.',
    keyword: 'ಸಮತೋಲನ ಜೀವನ',
  },
  {
    chapter: 6, verse: 20,
    sanskrit: 'yatroparamate chittam niruddham yoga-sevayaa | yatra chaivaatmanaa aatmaanam pashyann aatmani tushyati ||',
    kannada: 'ಯತ್ರೋಪರಮತೇ ಚಿತ್ತಂ ನಿರುದ್ಧಂ ಯೋಗಸೇವಯಾ |\nಯತ್ರ ಚೈವಾತ್ಮನಾ ಆತ್ಮಾನಂ ಪಶ್ಯನ್ನಾತ್ಮನಿ ತುಷ್ಯತಿ ||',
    meaning: 'ಯೋಗ ಅಭ್ಯಾಸದಿಂದ ಚಿತ್ತ ನಿರುದ್ಧವಾದಾಗ ಎಲ್ಲಿ ನಿಲ್ಲುತ್ತದೆಯೋ, ಎಲ್ಲಿ ಆತ್ಮ ತನ್ನಲ್ಲೇ ಸಂತೋಷ ಕಾಣುತ್ತದೆಯೋ — ಅದೇ ಯೋಗ ಸ್ಥಿತಿ.',
    application: 'Meditation ಅಭ್ಯಾಸ ಮಾಡಿ. ಮನಸ್ಸು ಒಳಗೆ ತಿರುಗಿ ಶಾಂತವಾಗಿ ನಿಲ್ಲಬೇಕು. ಆ ಶಾಂತಿ — ಹೊರಗಿನ ಯಾವ ವಸ್ತುವೂ ಕೊಡಲಾರದು.',
    keyword: 'ಧ್ಯಾನ',
  },
  {
    chapter: 6, verse: 34,
    sanskrit: 'chanchalam hi manah krishna pramathi balavad drdham | tasyaham nigraham manye vayor iva sudushkaram ||',
    kannada: 'ಚಂಚಲಂ ಹಿ ಮನಃ ಕೃಷ್ಣ ಪ್ರಮಾಥಿ ಬಲವದ್ ದೃಢಮ್ |\nತಸ್ಯಾಹಂ ನಿಗ್ರಹಂ ಮನ್ಯೇ ವಾಯೋರಿವ ಸುದುಷ್ಕರಮ್ ||',
    meaning: 'ಹೇ ಕೃಷ್ಣ, ಮನಸ್ಸು ಚಂಚಲ, ಕ್ಷುಬ್ಧ, ಬಲಿಷ್ಠ ಮತ್ತು ದೃಢ. ಗಾಳಿಯನ್ನು ನಿಯಂತ್ರಿಸುವಷ್ಟೇ ಕಷ್ಟ ಅದನ್ನು ನಿಯಂತ್ರಿಸುವುದು.',
    application: 'Phone addiction, distraction — ಆಧುನಿಕ "ಚಂಚಲ ಮನಸ್ಸು". 10 ನಿಮಿಷ meditation ಪ್ರಾರಂಭಿಸಿ. ಮನೋ ನಿಯಂತ್ರಣ = life control.',
    keyword: 'ಮನೋ ನಿಯಂತ್ರಣ',
  },
  {
    chapter: 6, verse: 35,
    sanskrit: 'asamshaayam mahaabaaho mano durnigraham chalam | abhyaasena tu kaunteya vairaagyena cha grihyate ||',
    kannada: 'ಅಸಂಶಯಂ ಮಹಾಬಾಹೋ ಮನೋ ದುರ್ನಿಗ್ರಹಂ ಚಲಮ್ |\nಅಭ್ಯಾಸೇನ ತು ಕೌಂತೇಯ ವೈರಾಗ್ಯೇಣ ಚ ಗೃಹ್ಯತೇ ||',
    meaning: 'ನಿಸ್ಸಂದೇಹವಾಗಿ ಮನಸ್ಸು ಚಂಚಲ ಮತ್ತು ನಿಯಂತ್ರಿಸಲು ಕಷ್ಟ. ಆದರೆ ಅಭ್ಯಾಸ ಮತ್ತು ವೈರಾಗ್ಯದಿಂದ ಇದನ್ನು ಸಾಧಿಸಬಹುದು.',
    application: 'ಮನಸ್ಸು ಕಷ್ಟ ಹಿಡಿಯಲು — ಆದರೆ ಅಸಾಧ್ಯ ಅಲ್ಲ. Daily practice + detachment. ಒಂದು ದಿನದಲ್ಲಿ ಆಗದು — ತಿಂಗಳ ಅಭ್ಯಾಸ ಬೇಕು.',
    keyword: 'ಅಭ್ಯಾಸ',
  },
  {
    chapter: 6, verse: 47,
    sanskrit: 'yoginaamapi sarveshaam madgatenaantaraatmanaa | shraddhaavanmajaate yo maam sa me yuktatamo matah ||',
    kannada: 'ಯೋಗಿನಾಮಪಿ ಸರ್ವೇಷಾಂ ಮದ್ಗತೇನಾಂತರಾತ್ಮನಾ |\nಶ್ರದ್ಧಾವಾನ್ ಭಜತೇ ಯೋ ಮಾಂ ಸ ಮೇ ಯುಕ್ತತಮೋ ಮತಃ ||',
    meaning: 'ಎಲ್ಲ ಯೋಗಿಗಳಲ್ಲಿ ಶ್ರದ್ಧೆಯಿಂದ ಮನ ತನ್ನಲ್ಲಿ ಸ್ಥಾಪಿಸಿ ನನ್ನ ಭಜಿಸುವವನೇ ಅತ್ಯುತ್ತಮ ಯೋಗಿ ಎಂದು ನನ್ನ ಮತ.',
    application: 'ಭಕ್ತಿ ಮಾರ್ಗ ಸರ್ವೋತ್ತಮ. ಕೃಷ್ಣನ ಮೇಲೆ ಶ್ರದ್ಧೆ ಇಟ್ಟು ಭಜಿಸುವವನು ಅತ್ಯುತ್ತಮ ಯೋಗಿ. Devotion beats all technique.',
    keyword: 'ಭಕ್ತಿ ಯೋಗ',
  },

  // ═══════════════════════════════════════════
  // CHAPTER 7 — ಜ್ಞಾನ ವಿಜ್ಞಾನ ಯೋಗ
  // ═══════════════════════════════════════════
  {
    chapter: 7, verse: 3,
    sanskrit: 'manushyanam sahasreshu kashchid yatati siddhaye | yatatam api siddhanam kashchin mam vetti tattvatah ||',
    kannada: 'ಮನುಷ್ಯಾಣಾಂ ಸಹಸ್ರೇಷು ಕಶ್ಚಿದ್ಯತತಿ ಸಿದ್ಧಯೇ |\nಯತತಾಮಪಿ ಸಿದ್ಧಾನಾಂ ಕಶ್ಚಿನ್ಮಾಂ ವೇತ್ತಿ ತತ್ತ್ವತಃ ||',
    meaning: 'ಸಾವಿರ ಮನುಷ್ಯರಲ್ಲಿ ಒಬ್ಬನು ಸಿದ್ಧಿಗಾಗಿ ಪ್ರಯತ್ನಿಸುತ್ತಾನೆ; ಪ್ರಯತ್ನಿಸುವ ಸಿದ್ಧರಲ್ಲಿಯೂ ಒಬ್ಬನೇ ನನ್ನ ತತ್ತ್ವ ತಿಳಿಯುತ್ತಾನೆ.',
    application: 'ಆಧ್ಯಾತ್ಮಿಕ ಪ್ರಯಾಣ ಅಪರೂಪ. ನೀವು ಈ ದಾರಿ ಆಯ್ದಿದ್ದೀರಿ — ಮಹಾ ಭಾಗ್ಯ. ಪ್ರತಿ ದಿನ ಓದಿ, ಧ್ಯಾನಿಸಿ, ಸ್ವಯಂ ಪ್ರಶ್ನಿಸಿ.',
    keyword: 'ವಿರಳ ಸಾಧನೆ',
  },
  {
    chapter: 7, verse: 14,
    sanskrit: 'daivi hyeshaa gunamayee mama maayaa duratyayaa | maam eva ye prapadyante maayaam etaam taranti te ||',
    kannada: 'ದೈವೀ ಹ್ಯೇಷಾ ಗುಣಮಯೀ ಮಮ ಮಾಯಾ ದುರತ್ಯಯಾ |\nಮಾಮೇವ ಯೇ ಪ್ರಪದ್ಯಂತೇ ಮಾಯಾಮೇತಾಂ ತರಂತಿ ತೇ ||',
    meaning: 'ಈ ಗುಣಮಯ ದೈವೀ ಮಾಯೆ ದಾಟಲು ಕಷ್ಟ. ಆದರೆ ನನ್ನ ಶರಣಾದವರು ಈ ಮಾಯೆ ದಾಟುತ್ತಾರೆ.',
    application: 'ಜಗತ್ತಿನ ಆಕರ್ಷಣೆ (ಮಾಯೆ) ಪ್ರಬಲ. ಆದರೆ ಭಗವಂತನ ಶರಣಾಗತಿ ಅದನ್ನು ಮೀರಿಸುತ್ತದೆ. ದಿನದ ಆರಂಭ ಪ್ರಾರ್ಥನೆಯಿಂದ ಮಾಡಿ.',
    keyword: 'ಮಾಯಾ ತರಣ',
  },
  {
    chapter: 7, verse: 19,
    sanskrit: 'bahunam janmanam ante jnanavaan mam prapadyate | vasudevah sarvam iti sa mahatma sudurlabhah ||',
    kannada: 'ಬಹೂನಾಂ ಜನ್ಮನಾಮಂತೇ ಜ್ಞಾನವಾನ್ ಮಾಂ ಪ್ರಪದ್ಯತೇ |\nವಾಸುದೇವಃ ಸರ್ವಮಿತಿ ಸ ಮಹಾತ್ಮಾ ಸುದುರ್ಲಭಃ ||',
    meaning: 'ಅನೇಕ ಜನ್ಮಗಳ ಕೊನೆಯಲ್ಲಿ ಜ್ಞಾನಿಯು "ವಾಸುದೇವನೇ ಸರ್ವಸ್ವ" ಎಂದು ತಿಳಿದು ನನ್ನಲ್ಲಿ ಶರಣಾಗುತ್ತಾನೆ. ಅಂತಹ ಮಹಾತ್ಮ ಅತ್ಯಂತ ದುರ್ಲಭ.',
    application: 'ಪ್ರತಿ ಅನುಭವದಲ್ಲೂ ಭಗವಂತನ ದರ್ಶನ ಇದೆ. ಈ ಜ್ಞಾನ ಬಂದಾಗ ಜೀವನ ಸಂಪೂರ್ಣ ಬದಲಾಗುತ್ತದೆ.',
    keyword: 'ಸರ್ವದಲ್ಲಿ ದೇವ',
  },
  {
    chapter: 7, verse: 30,
    sanskrit: 'sadhibhootadhidaivam maam sadhiyajnam cha ye viduh | prayaanakaale api cha maam te vidur yuktachetasah ||',
    kannada: 'ಸಾಧಿಭೂತಾಧಿದೈವಂ ಮಾಂ ಸಾಧಿಯಜ್ಞಂ ಚ ಯೇ ವಿದುಃ |\nಪ್ರಯಾಣಕಾಲೇsಪಿ ಚ ಮಾಂ ತೇ ವಿದುರ್ಯುಕ್ತಚೇತಸಃ ||',
    meaning: 'ಅಧಿಭೂತ, ಅಧಿದೈವ, ಅಧಿಯಜ್ಞ ಸಹಿತ ನನ್ನ ತಿಳಿದವರು ಅಂತ್ಯ ಕಾಲದಲ್ಲೂ ಏಕಾಗ್ರ ಚಿತ್ತದಿಂದ ನನ್ನ ತಿಳಿಯುತ್ತಾರೆ.',
    application: 'ಜೀವನದ ಎಲ್ಲ ಅನುಭವದಲ್ಲೂ ಭಗವಂತನ ಸ್ಮರಣೆ ಇರಲಿ. ಅಂತ್ಯ ಕಾಲದಲ್ಲಿ ಏನು ನೆನಪಾಗುತ್ತದೆ — ಅದೇ ನಾವು.',
    keyword: 'ಸ್ಮರಣ',
  },

  // ═══════════════════════════════════════════
  // CHAPTER 8 — ಅಕ್ಷರ ಬ್ರಹ್ಮ ಯೋಗ
  // ═══════════════════════════════════════════
  {
    chapter: 8, verse: 5,
    sanskrit: 'antakale cha maameva smaran muktva kalevaram | yah prayaati sa madbhaavam yaati naastyatra samshayah ||',
    kannada: 'ಅಂತಕಾಲೇ ಚ ಮಾಮೇವ ಸ್ಮರನ್ ಮುಕ್ತ್ವಾ ಕಲೇವರಮ್ |\nಯಃ ಪ್ರಯಾತಿ ಸ ಮದ್ಭಾವಂ ಯಾತಿ ನಾಸ್ತ್ಯತ್ರ ಸಂಶಯಃ ||',
    meaning: 'ಅಂತ್ಯ ಕಾಲದಲ್ಲಿ ನನ್ನ ಮಾತ್ರ ಸ್ಮರಿಸುತ್ತಾ ಶರೀರ ತ್ಯಜಿಸುವವನು ನನ್ನ ಭಾವ ಪಡೆಯುತ್ತಾನೆ — ಇದರಲ್ಲಿ ಸಂದೇಹ ಇಲ್ಲ.',
    application: 'ಜೀವನದ ಕೊನೆಯಲ್ಲಿ ಯಾರ ಹೆಸರು ಬಾಯಲ್ಲಿ ಬರುತ್ತದೆ — ಅದೇ ನಿಜ ಭಕ್ತಿ. ಈಗಿನಿಂದ ಭಗವಂತನ ಸ್ಮರಣೆ ಅಭ್ಯಾಸ ಮಾಡಿ.',
    keyword: 'ಅಂತ್ಯ ಸ್ಮರಣ',
  },
  {
    chapter: 8, verse: 7,
    sanskrit: 'tasmat sarveshu kaleshu mam anusmara yudhya cha | mayy arpita-mano-buddhir mam evaishyasy asamsayam ||',
    kannada: 'ತಸ್ಮಾತ್ ಸರ್ವೇಷು ಕಾಲೇಷು ಮಾಮನುಸ್ಮರ ಯುಧ್ಯ ಚ |\nಮಯ್ಯರ್ಪಿತಮನೋಬುದ್ಧಿರ್ಮಾಮೇವೈಷ್ಯಸ್ಯಸಂಶಯಮ್ ||',
    meaning: 'ಆದ್ದರಿಂದ ಎಲ್ಲ ಸಮಯದಲ್ಲೂ ನನ್ನನ್ನು ಸ್ಮರಿಸು ಮತ್ತು ಯುದ್ಧ ಮಾಡು. ಮನಸ್ಸು ಮತ್ತು ಬುದ್ಧಿ ನನ್ನಲ್ಲಿ ಅರ್ಪಿಸಿ — ನಿಸ್ಸಂದೇಹವಾಗಿ ನನ್ನನ್ನು ಸೇರುತ್ತೀ.',
    application: 'ಕೆಲಸ ಮಾಡುತ್ತಾ ಭಗವಂತ ನೆನಪಿರಲಿ. "ಕೃಷ್ಣ" ಎಂಬ ಒಂದು ಶ್ವಾಸ ಸ್ಮರಣೆ ಸಾಕು. ಕೆಲಸ ಮಾಡುತ್ತಾ ದೇವರ ಸ್ಮರಣೆ — ಇದೇ ಯೋಗ.',
    keyword: 'ನಿರಂತರ ಸ್ಮರಣೆ',
  },
  {
    chapter: 8, verse: 9,
    sanskrit: 'kavim puraanamaanushaasiitaaramaanoraniyaamsam anusmared yah | sarvasya dhaataaramachintyaroopamaadityavarnam tamasah parastat ||',
    kannada: 'ಕವಿಂ ಪುರಾಣಮನುಶಾಸಿತಾರಮಣೋರಣೀಯಾಂಸಮನುಸ್ಮರೇದ್ಯಃ |\nಸರ್ವಸ್ಯ ಧಾತಾರಮಚಿಂತ್ಯರೂಪಮಾದಿತ್ಯವರ್ಣಂ ತಮಸಃ ಪರಸ್ತಾತ್ ||',
    meaning: 'ಜ್ಞಾನಿ, ಪ್ರಾಚೀನ, ಅಣುವಿಗಿಂತ ಸೂಕ್ಷ್ಮ, ಸರ್ವ ಧಾರಕ, ಅಚಿಂತ್ಯ ರೂಪ, ಸೂರ್ಯ ತೇಜಸ್ವಿ, ಅಂಧಕಾರದ ಆಚೆ — ಆ ಪರಮಾತ್ಮ ಸ್ಮರಿಸು.',
    application: 'ಭಗವಂತ ಅಣುವಿಗಿಂತ ಸೂಕ್ಷ್ಮ, ಬ್ರಹ್ಮಾಂಡಕ್ಕಿಂತ ದೊಡ್ಡ. ಈ ಅಗಾಧತೆ ಅರ್ಥ ಮಾಡಿಕೊಂಡಾಗ ಅಹಂಕಾರ ಕರಗುತ್ತದೆ.',
    keyword: 'ಪರಮಾತ್ಮ ಸ್ಮರಣ',
  },
  {
    chapter: 8, verse: 16,
    sanskrit: 'aabrahmabhuvanaallokaah punaravartino arjuna | maamupetyatu kaunteya punarjanma na vidyate ||',
    kannada: 'ಆಬ್ರಹ್ಮಭುವನಾಲ್ ಲೋಕಾಃ ಪುನರಾವರ್ತಿನೋsರ್ಜುನ |\nಮಾಮುಪೇತ್ಯ ತು ಕೌಂತೇಯ ಪುನರ್ಜನ್ಮ ನ ವಿದ್ಯತೇ ||',
    meaning: 'ಬ್ರಹ್ಮ ಲೋಕ ತನಕ ಎಲ್ಲ ಲೋಕಗಳು ಪುನರಾವೃತ್ತಿ ಉಳ್ಳವು. ಆದರೆ ನನ್ನ ಪಡೆದವನಿಗೆ ಮತ್ತೆ ಜನ್ಮ ಇಲ್ಲ.',
    application: 'ಮೋಕ್ಷ ಗುರಿ ಇರಲಿ. ಪ್ರತಿ ಜನ್ಮ ಭಗವಂತನ ಹತ್ತಿರ ಹೋಗುವ ಪ್ರಯಾಣ. ಈ ಜನ್ಮ ಉಪಯೋಗಿಸಿ ಉನ್ನತಿ ಸಾಧಿಸಿ.',
    keyword: 'ಮೋಕ್ಷ',
  },

  // ═══════════════════════════════════════════
  // CHAPTER 9 — ರಾಜ ವಿದ್ಯಾ ರಾಜ ಗುಹ್ಯ ಯೋಗ
  // ═══════════════════════════════════════════
  {
    chapter: 9, verse: 4,
    sanskrit: 'mayaa tatamidam sarvam jagad avyaktamoortinaa | matsthaani sarvabhootaani na chaaham teshvavasthitah ||',
    kannada: 'ಮಯಾ ತತಮಿದಂ ಸರ್ವಂ ಜಗದವ್ಯಕ್ತಮೂರ್ತಿನಾ |\nಮತ್ಸ್ಥಾನಿ ಸರ್ವಭೂತಾನಿ ನ ಚಾಹಂ ತೇಷ್ವವಸ್ಥಿತಃ ||',
    meaning: 'ಅವ್ಯಕ್ತ ರೂಪದ ನನ್ನಿಂದ ಈ ಇಡೀ ಜಗತ್ತು ವ್ಯಾಪ್ತ. ಎಲ್ಲ ಜೀವಿಗಳು ನನ್ನಲ್ಲಿ ನೆಲೆಸಿವೆ — ಆದರೆ ನಾನು ಅವುಗಳಲ್ಲಿ ಇಲ್ಲ.',
    application: 'ಭಗವಂತ ಎಲ್ಲದರಲ್ಲೂ ಇದ್ದರೂ ಯಾವುದಕ್ಕೂ ಬದ್ಧ ಅಲ್ಲ. ನೀವೂ ಕೆಲಸದಲ್ಲಿ ತಲ್ಲೀನ ಆದರೂ detached ಇರಿ.',
    keyword: 'ವ್ಯಾಪಕತ್ವ',
  },
  {
    chapter: 9, verse: 22,
    sanskrit: 'ananyash chintayanto mam ye janah paryupasate | tesham nityabhiyuktanam yoga-kshenam vahamy aham ||',
    kannada: 'ಅನನ್ಯಾಶ್ಚಿಂತಯಂತೋ ಮಾಂ ಯೇ ಜನಾಃ ಪರ್ಯುಪಾಸತೇ |\nತೇಷಾಂ ನಿತ್ಯಾಭಿಯುಕ್ತಾನಾಂ ಯೋಗಕ್ಷೇಮಂ ವಹಾಮ್ಯಹಮ್ ||',
    meaning: 'ಅನನ್ಯ ಭಕ್ತಿಯಿಂದ ನನ್ನ ಚಿಂತನೆ ಮಾಡುವ ಭಕ್ತರ ಯೋಗ-ಕ್ಷೇಮವನ್ನು ನಾನೇ ನೋಡಿಕೊಳ್ಳುತ್ತೇನೆ.',
    application: 'ಭಗವಂತನ ಮೇಲೆ ನಂಬಿಕೆ ಇಟ್ಟಾಗ ಚಿಂತೆ ಕಡಿಮೆ. ನಿಮ್ಮ ಕರ್ತವ್ಯ ಮಾಡಿ — ಬಾಕಿ ಅವನ ಜವಾಬ್ದಾರಿ.',
    keyword: 'ಭಕ್ತ ರಕ್ಷಣೆ',
  },
  {
    chapter: 9, verse: 26,
    sanskrit: 'patram pushpam phalam toyam yo me bhaktyaa prayacchati | tadaham bhaktyupahritam ashnaami prayataatmanah ||',
    kannada: 'ಪತ್ರಂ ಪುಷ್ಪಂ ಫಲಂ ತೋಯಂ ಯೋ ಮೇ ಭಕ್ತ್ಯಾ ಪ್ರಯಚ್ಛತಿ |\nತದಹಂ ಭಕ್ತ್ಯುಪಹೃತಮಶ್ನಾಮಿ ಪ್ರಯತಾತ್ಮನಃ ||',
    meaning: 'ಎಲೆ, ಹೂ, ಹಣ್ಣು, ನೀರು — ಯಾರು ಭಕ್ತಿಯಿಂದ ಅರ್ಪಿಸುತ್ತಾರೋ, ಶುದ್ಧ ಮನಸ್ಸಿನಿಂದ ಭಕ್ತಿ ಅರ್ಪಿಸಿದ್ದನ್ನು ನಾನು ಸ್ವೀಕರಿಸುತ್ತೇನೆ.',
    application: 'ದೇವರಿಗೆ ಅರ್ಥವಾಗುವುದು ಭಾವ, ಬೆಲೆ ಅಲ್ಲ. ಸರಳ ಭಕ್ತಿ ಭಗವಂತನಿಗೆ ಪ್ರಿಯ. ಪ್ರತಿ ದಿನ ಒಂದು ಹೂ, ಒಂದು ನಮಸ್ಕಾರ — ಸಾಕು.',
    keyword: 'ಸರಳ ಭಕ್ತಿ',
  },
  {
    chapter: 9, verse: 27,
    sanskrit: 'yat karoshi yad ashnasi yaj juhoshi dadasi yat | yat tapasyasi kaunteya tat kurusva mad-arpanam ||',
    kannada: 'ಯತ್ಕರೋಷಿ ಯದಶ್ನಾಸಿ ಯಜ್ಜುಹೋಷಿ ದದಾಸಿ ಯತ್ |\nಯತ್ತಪಸ್ಯಸಿ ಕೌಂತೇಯ ತತ್ಕುರುಷ್ವ ಮದರ್ಪಣಮ್ ||',
    meaning: 'ಯಾವುದನ್ನು ಮಾಡುತ್ತೀ, ತಿನ್ನುತ್ತೀ, ದಾನ ಮಾಡುತ್ತೀ, ತಪಸ್ಸು ಮಾಡುತ್ತೀ — ಅದನ್ನೆಲ್ಲ ನನಗೆ ಅರ್ಪಿಸು.',
    application: 'ಕೆಲಸ ಪ್ರಾರಂಭಿಸುವ ಮೊದಲು "ಈ ಕೆಲಸ ಭಗವಂತನಿಗೆ" ಎಂದು ಭಾವಿಸಿ. ಊಟ, ಕೆಲಸ, ಸೇವೆ — ಎಲ್ಲ ಅರ್ಪಣೆ.',
    keyword: 'ಸರ್ವ ಅರ್ಪಣೆ',
  },
  {
    chapter: 9, verse: 34,
    sanskrit: 'manmana bhava madbhakto madyaji mam namaskuru | mamevaishyasi yuktvaivam atmanam matparayanah ||',
    kannada: 'ಮನ್ಮನಾ ಭವ ಮದ್ಭಕ್ತೋ ಮದ್ಯಾಜೀ ಮಾಂ ನಮಸ್ಕುರು |\nಮಾಮೇವೈಷ್ಯಸಿ ಯುಕ್ತ್ವೈವಮಾತ್ಮಾನಂ ಮತ್ಪರಾಯಣಃ ||',
    meaning: 'ನನ್ನ ಮನಸ್ಸಾಗು, ನನ್ನ ಭಕ್ತನಾಗು, ನನ್ನ ಪೂಜಿಸು, ನನಗೆ ನಮಸ್ಕರಿಸು. ನನ್ನ ಪರಾಯಣನಾಗಿ ಆತ್ಮ ಸಮರ್ಪಿಸಿ — ನನ್ನನ್ನೇ ಸೇರುತ್ತೀ.',
    application: 'ಭಕ್ತಿ ಮಾರ್ಗ ಸರಳ: ನೆನೆ, ಭಜಿಸು, ಪೂಜಿಸು, ನಮಸ್ಕರಿಸು. ಈ ನಾಲ್ಕು ಮಾಡಿದರೆ ಭಗವಂತ ತಾನಾಗಿ ಬರುತ್ತಾನೆ.',
    keyword: 'ಭಕ್ತಿ ಮಾರ್ಗ',
  },

  // ═══════════════════════════════════════════
  // CHAPTER 10 — ವಿಭೂತಿ ಯೋಗ
  // ═══════════════════════════════════════════
  {
    chapter: 10, verse: 8,
    sanskrit: 'aham sarvasya prabhavo mattah sarvam pravartate | iti matva bhajante mam budha bhava-samanvitah ||',
    kannada: 'ಅಹಂ ಸರ್ವಸ್ಯ ಪ್ರಭವೋ ಮತ್ತಃ ಸರ್ವಂ ಪ್ರವರ್ತತೇ |\nಇತಿ ಮತ್ವಾ ಭಜಂತೇ ಮಾಂ ಬುಧಾ ಭಾವಸಮನ್ವಿತಾಃ ||',
    meaning: 'ನಾನು ಎಲ್ಲದರ ಮೂಲ, ನನ್ನಿಂದ ಎಲ್ಲವೂ ನಡೆಯುತ್ತಿದೆ — ತಿಳಿದ ಜ್ಞಾನಿಗಳು ಭಾವದಿಂದ ನನ್ನ ಭಜಿಸುತ್ತಾರೆ.',
    application: 'ಎಲ್ಲ ಸಫಲತೆ, ಅವಕಾಶ, ಶಕ್ತಿ — ಭಗವಂತನಿಂದ. ಈ ಅರಿವು ಅಹಂಕಾರ ಕಡಿಮೆ ಮಾಡಿ gratitude ಹೆಚ್ಚಿಸುತ್ತದೆ.',
    keyword: 'ಕೃತಜ್ಞತೆ',
  },
  {
    chapter: 10, verse: 20,
    sanskrit: 'aham atma gudakesha sarva-bhutashaya-sthitah | aham adish cha madhyam cha bhutanam anta eva cha ||',
    kannada: 'ಅಹಮಾತ್ಮಾ ಗುಡಾಕೇಶ ಸರ್ವಭೂತಾಶಯಸ್ಥಿತಃ |\nಅಹಮಾದಿಶ್ಚ ಮಧ್ಯಂ ಚ ಭೂತಾನಾಮಂತ ಏವ ಚ ||',
    meaning: 'ಹೇ ಗುಡಾಕೇಶ, ನಾನು ಎಲ್ಲ ಜೀವಿಗಳ ಹೃದಯದಲ್ಲಿ ನೆಲೆಸಿರುವ ಆತ್ಮ. ನಾನೇ ಎಲ್ಲ ಭೂತಗಳ ಆದಿ, ಮಧ್ಯ ಮತ್ತು ಅಂತ.',
    application: 'ಪ್ರತಿ colleague, ಮಗು, ದೇಶಬಾಂಧವ — ಎಲ್ಲರಲ್ಲೂ ಆ ಒಂದೇ ಆತ್ಮ. ಈ ದೃಷ್ಟಿ ಬಂದಾಗ conflicts ಕಡಿಮೆ, empathy ಹೆಚ್ಚುತ್ತದೆ.',
    keyword: 'ಸರ್ವಾಂತರ್ಯಾಮಿ',
  },
  {
    chapter: 10, verse: 41,
    sanskrit: 'yadyad vibhootimat sattvam shreemadoorjitameva vaa | tattad evaavagaccha tvam mama tejo amsha sambhavam ||',
    kannada: 'ಯದ್ಯದ್ ವಿಭೂತಿಮತ್ ಸತ್ತ್ವಂ ಶ್ರೀಮದೂರ್ಜಿತಮೇವ ವಾ |\nತತ್ತದೇವಾವಗಚ್ಛ ತ್ವಂ ಮಮ ತೇಜೋsಂಶಸಂಭವಮ್ ||',
    meaning: 'ಯಾವ ಯಾವ ಮಹಿಮಾನ್ವಿತ, ಐಶ್ವರ್ಯ ಮತ್ತು ಶಕ್ತಿ ಉಳ್ಳ ವಸ್ತು ಇದೆಯೋ — ಅದನ್ನೆಲ್ಲ ನನ್ನ ತೇಜಸ್ಸಿನ ಒಂದು ಅಂಶ ತಿಳಿ.',
    application: 'ಜಗತ್ತಿನ ಅದ್ಭುತ ವ್ಯಕ್ತಿಗಳಲ್ಲಿ — Einstein, Gandhi, ಅಮ್ಮ ಯಾರಲ್ಲಾದರೂ — ಭಗವಂತನ ತೇಜ ಕಾಣಿ. Inspiration ಎಲ್ಲೂ ಭಗವದ್ ಶಕ್ತಿ.',
    keyword: 'ದಿವ್ಯ ವಿಭೂತಿ',
  },

  // ═══════════════════════════════════════════
  // CHAPTER 11 — ವಿಶ್ವರೂಪ ದರ್ಶನ ಯೋಗ
  // ═══════════════════════════════════════════
  {
    chapter: 11, verse: 32,
    sanskrit: 'kalosmi lokakshayakrit pravruddho lokaan samaahartum iha pravruddah | rte api tvaam na bhavishyanti sarve yevastitha pratyanikeeshu yodhah ||',
    kannada: 'ಕಾಲೋsಸ್ಮಿ ಲೋಕಕ್ಷಯಕೃತ್ ಪ್ರವೃದ್ಧೋ\nಲೋಕಾನ್ ಸಮಾಹರ್ತುಮಿಹ ಪ್ರವೃತ್ತಃ |\nಋತೇsಪಿ ತ್ವಾಂ ನ ಭವಿಷ್ಯಂತಿ ಸರ್ವೇ\nಯೇsವಸ್ಥಿತಾಃ ಪ್ರತ್ಯನೀಕೇಷು ಯೋಧಾಃ ||',
    meaning: 'ನಾನು ಲೋಕಕ್ಷಯ ಮಾಡಲು ಬಂದ ಪ್ರಬಲ ಕಾಲ. ಇಲ್ಲಿ ಎದುರು ನಿಂತ ಯೋಧರೆಲ್ಲ ನೀನಿಲ್ಲದೆಯೂ ನಾಶ ಆಗುತ್ತಾರೆ.',
    application: 'ಕಾಲ ಸರ್ವ ಶ್ರೇಷ್ಠ. Time management ಮಾಡಿ. ಒಂದು ದಿನ ಎಲ್ಲವೂ ಹೋಗುತ್ತದೆ — ಆದ್ದರಿಂದ ಇಂದು meaningfully ಬದುಕಿ.',
    keyword: 'ಕಾಲ',
  },
  {
    chapter: 11, verse: 33,
    sanskrit: 'tasmat tvam uttishtha yasho labhasva jitva shatrun bhunksva rajyam samrddham | mayaivaite nihatah purvam eva nimitta-matram bhava savyasachin ||',
    kannada: 'ತಸ್ಮಾತ್ ತ್ವಮುತ್ತಿಷ್ಠ ಯಶೋ ಲಭಸ್ವ\nಜಿತ್ವಾ ಶತ್ರೂನ್ ಭುಂಕ್ಷ್ವ ರಾಜ್ಯಂ ಸಮೃದ್ಧಮ್ |\nಮಯೈವೈತೇ ನಿಹತಾಃ ಪೂರ್ವಮೇವ\nನಿಮಿತ್ತಮಾತ್ರಂ ಭವ ಸವ್ಯಸಾಚಿನ್ ||',
    meaning: 'ಎದ್ದೇಳು, ಯಶ ಪಡೆ. ಶತ್ರುಗಳನ್ನು ಜಯಿಸಿ ಸಮೃದ್ಧ ರಾಜ್ಯ ಅನುಭವಿಸು. ನೀನು ನಿಮಿತ್ತ ಮಾತ್ರ.',
    application: 'ನೀವು ಕೇವಲ ಒಂದು instrument. ಇದು ಗೊತ್ತಾದಾಗ ಅಹಂಕಾರ ಕಡಿಮೆ, stress ಕಡಿಮೆ. Effort ನಿಮ್ಮದು — result ಭಗವಂತನದು.',
    keyword: 'ನಿಮಿತ್ತ',
  },
  {
    chapter: 11, verse: 54,
    sanskrit: 'bhaktyaa tvananyayaa shakyam ahamevamvidho arjuna | jnaatum drashtum cha tattvena praveshttum cha parantapa ||',
    kannada: 'ಭಕ್ತ್ಯಾ ತ್ವನನ್ಯಯಾ ಶಕ್ಯ ಅಹಮೇವಂವಿಧೋsರ್ಜುನ |\nಜ್ಞಾತುಂ ದ್ರಷ್ಟುಂ ಚ ತತ್ತ್ವೇನ ಪ್ರವೇಷ್ಟುಂ ಚ ಪರಂತಪ ||',
    meaning: 'ಅನನ್ಯ ಭಕ್ತಿಯಿಂದ ಮಾತ್ರ ನನ್ನ ತಿಳಿಯಲು, ನೋಡಲು ಮತ್ತು ನನ್ನಲ್ಲಿ ಪ್ರವೇಶಿಸಲು ಸಾಧ್ಯ.',
    application: 'ಭಕ್ತಿ ಮಾರ್ಗ ಅತ್ಯಂತ ಸರಳ ಮತ್ತು ಶ್ರೇಷ್ಠ. ಯಾವ ಜ್ಞಾನ, ತಪಸ್ಸು ಭಕ್ತಿಗಿಂತ ದೊಡ್ಡದಲ್ಲ.',
    keyword: 'ಅನನ್ಯ ಭಕ್ತಿ',
  },

  // ═══════════════════════════════════════════
  // CHAPTER 12 — ಭಕ್ತಿ ಯೋಗ
  // ═══════════════════════════════════════════
  {
    chapter: 12, verse: 2,
    sanskrit: 'mayyaaveshya mano ye maam nityayuktaa upaasate | shraddhayaa parayopetaaste me yuktatamaa mataah ||',
    kannada: 'ಮಯ್ಯಾವೇಶ್ಯ ಮನೋ ಯೇ ಮಾಂ ನಿತ್ಯಯುಕ್ತಾ ಉಪಾಸತೇ |\nಶ್ರದ್ಧಯಾ ಪರಯೋಪೇತಾಸ್ತೇ ಮೇ ಯುಕ್ತತಮಾ ಮತಾಃ ||',
    meaning: 'ಮನ ನನ್ನಲ್ಲಿ ಸ್ಥಾಪಿಸಿ, ಶ್ರದ್ಧೆಯಿಂದ ನಿತ್ಯ ಉಪಾಸನೆ ಮಾಡುವವರು — ನನ್ನ ಮತೆ ಅತ್ಯುತ್ತಮ ಯೋಗಿಗಳು.',
    application: 'ದಿನದ ಆರಂಭ ಮತ್ತು ಅಂತ್ಯ ಭಗವಂತನ ಧ್ಯಾನದಿಂದ ಮಾಡಿ. ಶ್ರದ್ಧೆ + ನಿತ್ಯ ಅಭ್ಯಾಸ = ಯೋಗ.',
    keyword: 'ನಿತ್ಯ ಉಪಾಸನೆ',
  },
  {
    chapter: 12, verse: 13,
    sanskrit: 'adveshta sarva-bhutanam maitrih karuna eva cha | nirmamo nirahankarah sama-duhkha-sukhah kshami ||',
    kannada: 'ಅದ್ವೇಷ್ಟಾ ಸರ್ವಭೂತಾನಾಂ ಮೈತ್ರಃ ಕರುಣ ಏವ ಚ |\nನಿರ್ಮಮೋ ನಿರಹಂಕಾರಃ ಸಮದುಃಖಸುಖಃ ಕ್ಷಮೀ ||',
    meaning: 'ಯಾರ ಮೇಲೂ ದ್ವೇಷ ಇಲ್ಲ, ಎಲ್ಲರಲ್ಲೂ ಮಿತ್ರ ಭಾವ, ಕರುಣೆ, ಮಮತೆ ರಹಿತ, ಅಹಂಕಾರ ರಹಿತ, ಸುಖ-ದುಃಖ ಸಮ, ಕ್ಷಮಾಶೀಲ.',
    application: 'ಭಕ್ತನ ಲಕ್ಷಣ ಪಟ್ಟಿ. ಪ್ರತಿ ದಿನ ಒಂದು ಗುಣ practice ಮಾಡಿ. ದ್ವೇಷ ಬಿಡಿ, ಕ್ಷಮಿಸಿ, ಅಹಂಕಾರ ತ್ಯಜಿಸಿ.',
    keyword: 'ಭಕ್ತ ಗುಣ',
  },
  {
    chapter: 12, verse: 15,
    sanskrit: 'yasman nodvijate loko lokan nodvijate cha yah | harsha-amarsha-bhayodvegair mukto yah sa cha me priyah ||',
    kannada: 'ಯಸ್ಮಾನ್ನೋದ್ವಿಜತೇ ಲೋಕೋ ಲೋಕಾನ್ನೋದ್ವಿಜತೇ ಚ ಯಃ |\nಹರ್ಷಾಮರ್ಷಭಯೋದ್ವೇಗೈರ್ಮುಕ್ತೋ ಯಃ ಸ ಚ ಮೇ ಪ್ರಿಯಃ ||',
    meaning: 'ಯಾರಿಂದ ಜಗತ್ತು ಉದ್ವಿಗ್ನಗೊಳ್ಳುವುದಿಲ್ಲ, ಯಾರು ಜಗತ್ತಿನಿಂದ ಉದ್ವಿಗ್ನಗೊಳ್ಳುವುದಿಲ್ಲ — ಅವನು ನನಗೆ ಪ್ರಿಯ.',
    application: 'ಯಾರನ್ನೂ hurt ಮಾಡದವನು, ಯಾರಿಂದಲೂ hurt ಆಗದವನು — ಇದೇ ಭಕ್ತ ಲಕ್ಷಣ. Emotional maturity ಬೆಳೆಸಿ.',
    keyword: 'ಭಕ್ತ ಲಕ್ಷಣ',
  },

  // ═══════════════════════════════════════════
  // CHAPTER 13 — ಕ್ಷೇತ್ರ ಕ್ಷೇತ್ರಜ್ಞ ವಿಭಾಗ ಯೋಗ
  // ═══════════════════════════════════════════
  {
    chapter: 13, verse: 8,
    sanskrit: 'amanitvam adambhitvam ahimsa ksantir arjavam | acharyopasanam shaucam sthairyam atmavinigrahah ||',
    kannada: 'ಅಮಾನಿತ್ವಮದಂಭಿತ್ವಮಹಿಂಸಾ ಕ್ಷಾಂತಿರಾರ್ಜವಮ್ |\nಆಚಾರ್ಯೋಪಾಸನಂ ಶೌಚಂ ಸ್ಥೈರ್ಯಮಾತ್ಮವಿನಿಗ್ರಹಃ ||',
    meaning: 'ನಮ್ರತೆ, ಡಂಭ ರಾಹಿತ್ಯ, ಅಹಿಂಸೆ, ಕ್ಷಮೆ, ಸರಳತೆ, ಗುರು ಸೇವೆ, ಶುದ್ಧತೆ, ಸ್ಥಿರತೆ, ಆತ್ಮ ನಿಯಂತ್ರಣ — ಇವು ಜ್ಞಾನ ಲಕ್ಷಣ.',
    application: 'ಜ್ಞಾನ ಅಂದರೆ information ಅಲ್ಲ — ಇವೆಲ್ಲ ಗುಣ. ನಮ್ರತೆ, ಅಹಿಂಸೆ, ಕ್ಷಮೆ — ಇದು ನಿಜ ಜ್ಞಾನ. ಒಂದೊಂದೇ ಅಳವಡಿಸಿ.',
    keyword: 'ಜ್ಞಾನ ಲಕ್ಷಣ',
  },
  {
    chapter: 13, verse: 28,
    sanskrit: 'samam sarveshu bhuteshu tishthantam parameshvaram | vinashyatsv avinashyantam yah pashyati sa pashyati ||',
    kannada: 'ಸಮಂ ಸರ್ವೇಷು ಭೂತೇಷು ತಿಷ್ಠಂತಂ ಪರಮೇಶ್ವರಮ್ |\nವಿನಶ್ಯತ್ಸ್ವವಿನಶ್ಯಂತಂ ಯಃ ಪಶ್ಯತಿ ಸ ಪಶ್ಯತಿ ||',
    meaning: 'ನಾಶ ಆಗುತ್ತಿರುವ ಸರ್ವ ಜೀವಿಗಳಲ್ಲಿ ನಾಶರಹಿತ ಪರಮೇಶ್ವರ ಸಮನಾಗಿ ನೆಲೆಸಿರುವನು ಎಂದು ಕಾಣುವವನೇ ನಿಜ ದ್ರಷ್ಟ.',
    application: 'ಪ್ರತಿ ಮನುಷ್ಯನಲ್ಲಿ ದಿವ್ಯ ಆತ್ಮ ಇದೆ. ಈ ದೃಷ್ಟಿ ಬಂದಾಗ ವ್ಯವಹರಿಸುವ ರೀತಿ ಸ್ವತಃ ಬದಲಾಗುತ್ತದೆ.',
    keyword: 'ದಿವ್ಯ ದೃಷ್ಟಿ',
  },
  {
    chapter: 13, verse: 33,
    sanskrit: 'yathaa sarva-gatam saukshmyaad aakaasham nopalipyate | sarvatraavasthito dehe tathaa aatmaa nopalipyate ||',
    kannada: 'ಯಥಾ ಸರ್ವಗತಂ ಸೌಕ್ಷ್ಮ್ಯಾದಾಕಾಶಂ ನೋಪಲಿಪ್ಯತೇ |\nಸರ್ವತ್ರಾವಸ್ಥಿತೋ ದೇಹೇ ತಥಾsತ್ಮಾ ನೋಪಲಿಪ್ಯತೇ ||',
    meaning: 'ಆಕಾಶ ಎಲ್ಲೆಡೆ ಇದ್ದರೂ ಸೂಕ್ಷ್ಮತೆಯಿಂದ ಅಂಟದಂತೆ, ಶರೀರದಲ್ಲಿ ಎಲ್ಲೆಡೆ ಇರುವ ಆತ್ಮ ಅಂಟುವುದಿಲ್ಲ.',
    application: 'ಎಲ್ಲ ಅನುಭವ ಪಡೆಯಿರಿ ಆದರೆ ಅಂಟಬೇಡಿ. ಆಕಾಶ ಭಾವ — ಎಲ್ಲದರಲ್ಲೂ ಇದ್ದರೂ untouched. ಇದೇ ಯೋಗ.',
    keyword: 'ಅಸಂಗ',
  },

  // ═══════════════════════════════════════════
  // CHAPTER 14 — ಗುಣತ್ರಯ ವಿಭಾಗ ಯೋಗ
  // ═══════════════════════════════════════════
  {
    chapter: 14, verse: 5,
    sanskrit: 'sattvam rajas tama iti gunah prakriti-sambhavah | nibadhnanti mahaabaho dehe dehinam avyayam ||',
    kannada: 'ಸತ್ತ್ವಂ ರಜಸ್ತಮ ಇತಿ ಗುಣಾಃ ಪ್ರಕೃತಿಸಂಭವಾಃ |\nನಿಬಧ್ನಂತಿ ಮಹಾಬಾಹೋ ದೇಹೇ ದೇಹಿನಮವ್ಯಯಮ್ ||',
    meaning: 'ಸತ್ತ್ವ, ರಜಸ್, ತಮಸ್ — ಪ್ರಕೃತಿಯಿಂದ ಹುಟ್ಟಿದ ಈ ಮೂರು ಗುಣಗಳು ಶರೀರದಲ್ಲಿ ಅವಿನಾಶಿ ಆತ್ಮವನ್ನು ಬಂಧಿಸುತ್ತವೆ.',
    application: 'ನಮ್ಮ ಮನಸ್ಸಿನ ಸ್ಥಿತಿ ಈ ಮೂರು ಗುಣಗಳ ಮಿಶ್ರಣ. Sattvic state ಹೆಚ್ಚಿಸಲು ಕೆಲಸ ಮಾಡಿ — ಒಳ್ಳೆ ಆಹಾರ, ವಿಚಾರ, ಸಂಗ.',
    keyword: 'ತ್ರಿಗುಣ',
  },
  {
    chapter: 14, verse: 6,
    sanskrit: 'tatra sattvam nirmalatvat prakashakam anamayam | sukha-sangena badhnati jnana-sangena chanagha ||',
    kannada: 'ತತ್ರ ಸತ್ತ್ವಂ ನಿರ್ಮಲತ್ವಾತ್ ಪ್ರಕಾಶಕಮನಾಮಯಮ್ |\nಸುಖಸಂಗೇನ ಬಧ್ನಾತಿ ಜ್ಞಾನಸಂಗೇನ ಚಾನಘ ||',
    meaning: 'ಸತ್ತ್ವ ನಿರ್ಮಲವಾಗಿರುವುದರಿಂದ ಪ್ರಕಾಶ ಮತ್ತು ನಿರೋಗ ಕೊಡುತ್ತದೆ. ಸುಖ ಮತ್ತು ಜ್ಞಾನದ ಆಸಕ್ತಿಯಿಂದ ಬಂಧಿಸುತ್ತದೆ.',
    application: 'Sattvic ಆಹಾರ, ಸಾತ್ವಿಕ ವಿಚಾರ choose ಮಾಡಿ. ರಾತ್ರಿ ಚಿಂತಿಸಿ ಮಲಗದಿರಿ — ತಮಸ್ಸು. Early sleep, healthy food — ಸಾತ್ವಿಕ ಜೀವನ.',
    keyword: 'ಗುಣ ತ್ರಯ',
  },
  {
    chapter: 14, verse: 19,
    sanskrit: 'naanyam gunebhyah kartaaram yadaa drashhtaanupashyati | gunebhyash cha param vetti mad-bhaavam sodhigacchati ||',
    kannada: 'ನಾನ್ಯಂ ಗುಣೇಭ್ಯಃ ಕರ್ತಾರಂ ಯದಾ ದ್ರಷ್ಟಾನುಪಶ್ಯತಿ |\nಗುಣೇಭ್ಯಶ್ಚ ಪರಂ ವೇತ್ತಿ ಮದ್ಭಾವಂ ಸೋsಧಿಗಚ್ಛತಿ ||',
    meaning: 'ಗುಣಗಳ ಹೊರತು ಬೇರೆ ಕರ್ತ ಇಲ್ಲ ಎಂದು ಕಂಡವನು ಮತ್ತು ಗುಣಗಳ ಆಚೆ ಇರುವ ನನ್ನ ತಿಳಿದವನು ನನ್ನ ಭಾವ ಪಡೆಯುತ್ತಾನೆ.',
    application: 'ನಮ್ಮ ಕೋಪ, ಪ್ರೀತಿ, ಆಲಸ್ಯ — ಇವೆಲ್ಲ ಗುಣ. ನಾವು ಗುಣಗಳ ಆಚೆ ಇರುವ ಆತ್ಮ. ಈ ಅರಿವು ಜ್ಞಾನ.',
    keyword: 'ಗುಣಾತೀತ',
  },
  {
    chapter: 14, verse: 27,
    sanskrit: 'brahmano hi pratishthaaham amritasyavyayasya cha | shaashvatasya cha dharmasya sukhasyaikantikasya cha ||',
    kannada: 'ಬ್ರಹ್ಮಣೋ ಹಿ ಪ್ರತಿಷ್ಠಾಹಮಮೃತಸ್ಯಾವ್ಯಯಸ್ಯ ಚ |\nಶಾಶ್ವತಸ್ಯ ಚ ಧರ್ಮಸ್ಯ ಸುಖಸ್ಯೈಕಾಂತಿಕಸ್ಯ ಚ ||',
    meaning: 'ಅಮೃತ, ಅವ್ಯಯ, ಶಾಶ್ವತ ಧರ್ಮ ಮತ್ತು ಏಕಾಂತಿಕ ಸುಖ — ಇವೆಲ್ಲದರ ಆಧಾರ ನಾನು (ಬ್ರಹ್ಮ).',
    application: 'ಎಲ್ಲ ಸ್ಥಾಯಿ ಶಾಂತಿ, ಸುಖ, ಧರ್ಮ ಭಗವಂತನಿಂದ. ಹೊರಗಿನ ಸುಖ ತಾತ್ಕಾಲಿಕ. ಭಗವಂತನ ಶರಣ — ಶಾಶ್ವತ ಸುಖ.',
    keyword: 'ಶಾಶ್ವತ ಸುಖ',
  },

  // ═══════════════════════════════════════════
  // CHAPTER 15 — ಪುರುಷೋತ್ತಮ ಯೋಗ
  // ═══════════════════════════════════════════
  {
    chapter: 15, verse: 7,
    sanskrit: 'mamaivamsho jiva-loke jiva-bhutah sanatanah | manah-shashthaniindriyani prakrti-sthani karshati ||',
    kannada: 'ಮಮೈವಾಂಶೋ ಜೀವಲೋಕೇ ಜೀವಭೂತಃ ಸನಾತನಃ |\nಮನಃ ಷಷ್ಠಾನೀಂದ್ರಿಯಾಣಿ ಪ್ರಕೃತಿಸ್ಥಾನಿ ಕರ್ಷತಿ ||',
    meaning: 'ಜೀವಲೋಕದಲ್ಲಿ ಜೀವಿಗಳಾಗಿ ಇರುವ ಸನಾತನ ಜೀವಾತ್ಮಗಳು ನನ್ನದೇ ಅಂಶ.',
    application: 'ನೀವು ಭಗವಂತನ ಅಂಶ — ಈ ಅರಿವಿನಿಂದ self-worth ಬದಲಾಗುತ್ತದೆ. ಮಕ್ಕಳಿಗೆ ಹೇಳಿ: ನೀನು divine.',
    keyword: 'ದಿವ್ಯ ಅಂಶ',
  },
  {
    chapter: 15, verse: 12,
    sanskrit: 'yad aditya-gatam tejo jagad bhaasayate akhilam | yach chandramasi yach chaagnau tat tejo viddhi maamakam ||',
    kannada: 'ಯದಾದಿತ್ಯಗತಂ ತೇಜೋ ಜಗದ್ಭಾಸಯತೇsಖಿಲಮ್ |\nಯಚ್ಚಂದ್ರಮಸಿ ಯಚ್ಚಾಗ್ನೌ ತತ್ತೇಜೋ ವಿದ್ಧಿ ಮಾಮಕಮ್ ||',
    meaning: 'ಸೂರ್ಯನ ತೇಜ, ಚಂದ್ರನ ಬೆಳಕು, ಅಗ್ನಿಯ ಶಾಖ — ಇವೆಲ್ಲ ನನ್ನ ತೇಜ ಎಂದು ತಿಳಿ.',
    application: 'ನೀವು ಕಾಣುವ ಪ್ರತಿ ಸೌಂದರ್ಯ — ಸೂರ್ಯೋದಯ, ನಕ್ಷತ್ರ, ಬೆಂಕಿ — ಭಗವಂತನ ತೇಜ. ಪ್ರಕೃತಿ ದರ್ಶನ ಭಗವದ್ ದರ್ಶನ.',
    keyword: 'ಭಗವದ್ ತೇಜ',
  },
  {
    chapter: 15, verse: 16,
    sanskrit: 'dvav imau purushau loke ksharash chakshara eva cha | ksharah sarvaani bhootaani kootastho akshara uchyate ||',
    kannada: 'ದ್ವಾವಿಮೌ ಪುರುಷೌ ಲೋಕೇ ಕ್ಷರಶ್ಚಾಕ್ಷರ ಏವ ಚ |\nಕ್ಷರಃ ಸರ್ವಾಣಿ ಭೂತಾನಿ ಕೂಟಸ್ಥೋsಕ್ಷರ ಉಚ್ಯತೇ ||',
    meaning: 'ಜಗತ್ತಿನಲ್ಲಿ ಎರಡು ಪುರುಷ — ಕ್ಷರ (ನಾಶ ಉಳ್ಳ) ಮತ್ತು ಅಕ್ಷರ (ನಾಶ ರಹಿತ). ಎಲ್ಲ ಜೀವಿಗಳು ಕ್ಷರ, ನಿರ್ಲಿಪ್ತ ಅಕ್ಷರ.',
    application: 'ನಮ್ಮ ದೇಹ, ಸಂಪತ್ತು — ಕ್ಷರ. ಆತ್ಮ — ಅಕ್ಷರ. Transient ಗಿಂತ Eternal ಮೇಲೆ ಗಮನ ಕೊಡಿ.',
    keyword: 'ಕ್ಷರ ಅಕ್ಷರ',
  },
  {
    chapter: 15, verse: 20,
    sanskrit: 'iti guhyatamam shaastram idamuktam mayaa anagha | etad buddhvaa buddhimaan syaat kritakrtyash cha bharata ||',
    kannada: 'ಇತಿ ಗುಹ್ಯತಮಂ ಶಾಸ್ತ್ರಮಿದಮುಕ್ತಂ ಮಯಾsನಘ |\nಏತದ್ಬುದ್ಧ್ವಾ ಬುದ್ಧಿಮಾನ್ ಸ್ಯಾತ್ ಕೃತಕೃತ್ಯಶ್ಚ ಭಾರತ ||',
    meaning: 'ಈ ಅತ್ಯಂತ ಗುಪ್ತ ಶಾಸ್ತ್ರ ನಾನು ನಿನಗೆ ಹೇಳಿದೆ. ಇದನ್ನು ತಿಳಿದವನು ಬುದ್ಧಿವಂತ ಮತ್ತು ಕೃತಕೃತ್ಯ.',
    application: 'ಗೀತೆ ಓದಿದ ನೀವು ಅದೃಷ್ಟಶಾಲಿ. ಈ ಜ್ಞಾನ ಅಳವಡಿಸಿ — ಜೀವನ ಪೂರ್ಣ ಆಗುತ್ತದೆ.',
    keyword: 'ಜ್ಞಾನ ಸಂಪೂರ್ಣ',
  },

  // ═══════════════════════════════════════════
  // CHAPTER 16 — ದೈವಾಸುರ ಸಂಪದ್ ವಿಭಾಗ ಯೋಗ
  // ═══════════════════════════════════════════
  {
    chapter: 16, verse: 1,
    sanskrit: 'abhayam sattva-samshuddhir jnana-yoga-vyavasthitih | danam damash cha yajnash cha svadhyayas tapa arjavam ||',
    kannada: 'ಅಭಯಂ ಸತ್ತ್ವಸಂಶುದ್ಧಿರ್ಜ್ಞಾನಯೋಗವ್ಯವಸ್ಥಿತಿಃ |\nದಾನಂ ದಮಶ್ಚ ಯಜ್ಞಶ್ಚ ಸ್ವಾಧ್ಯಾಯಸ್ತಪ ಆರ್ಜವಮ್ ||',
    meaning: 'ಅಭಯ, ಸತ್ತ್ವ ಶುದ್ಧಿ, ಜ್ಞಾನ ಯೋಗ, ದಾನ, ದಮ, ಯಜ್ಞ, ಸ್ವಾಧ್ಯಾಯ, ತಪಸ್, ಸರಳತೆ — ದೈವೀ ಸಂಪತ್ತು.',
    application: 'ಭಯ ಬಿಡಿ, ದಾನ ಮಾಡಿ, ಓದಿ, ತಪಸ್ಸು ಮಾಡಿ — ದೈವೀ ಜೀವನ ಇಷ್ಟೇ ಸರಳ. ಒಂದೊಂದೇ ಗುಣ ಬೆಳೆಸಿ.',
    keyword: 'ದೈವೀ ಸಂಪತ್ತು',
  },
  {
    chapter: 16, verse: 3,
    sanskrit: 'tejah ksama dhrtih shaucam adroho natimitata | bhavanti sampadam daivim abhijatasya bharata ||',
    kannada: 'ತೇಜಃ ಕ್ಷಮಾ ಧೃತಿಃ ಶೌಚಮದ್ರೋಹೋ ನಾತಿಮಾನಿತಾ |\nಭವಂತಿ ಸಂಪದಂ ದೈವೀಮಭಿಜಾತಸ್ಯ ಭಾರತ ||',
    meaning: 'ತೇಜಸ್ಸು, ಕ್ಷಮೆ, ಧೈರ್ಯ, ಶುದ್ಧತೆ, ದ್ರೋಹವಿಲ್ಲದಿರುವಿಕೆ ಮತ್ತು ಅಹಂಕಾರವಿಲ್ಲದಿರುವಿಕೆ — ಇವು ದೈವೀ ಸಂಪತ್ತಿನ ಲಕ್ಷಣ.',
    application: 'ಸ್ಪಷ್ಟ ನಿರ್ಧಾರ (ತೇಜ), ತಪ್ಪು ಕ್ಷಮಿಸು, ಕಠಿಣ ನಿರ್ಧಾರ ತಕ್ಕೋ, ಶುದ್ಧ ಆಚಾರ — ಇವೇ ದೈವೀ ಗುಣ.',
    keyword: 'ದೈವ ಗುಣ',
  },
  {
    chapter: 16, verse: 21,
    sanskrit: 'tri-vidham narakasyedam dvaaram naashanam aatmanah | kaamah krodhastathaa lobhas tasmad etat trayam tyajet ||',
    kannada: 'ತ್ರಿವಿಧಂ ನರಕಸ್ಯೇದಂ ದ್ವಾರಂ ನಾಶನಮಾತ್ಮನಃ |\nಕಾಮಃ ಕ್ರೋಧಸ್ತಥಾ ಲೋಭಸ್ತಸ್ಮಾದೇತತ್ ತ್ರಯಂ ತ್ಯಜೇತ್ ||',
    meaning: 'ಕಾಮ, ಕ್ರೋಧ, ಲೋಭ — ಇವು ನರಕದ ಮೂರು ದ್ವಾರ, ಆತ್ಮ ನಾಶಕ. ಇವು ಮೂರನ್ನೂ ತ್ಯಜಿಸಿ.',
    application: 'ಈ ಮೂರು ದೊಡ್ಡ ಶತ್ರು: ಲೋಭ (greed), ಕ್ರೋಧ (anger), ಕಾಮ (lust). ಪ್ರತಿ ನಿರ್ಧಾರ ತೆಗೆಯುವ ಮೊದಲು — ಇವು ಪ್ರಭಾವಿಸುತ್ತಿದೆಯೇ ಪರೀಕ್ಷಿಸಿ.',
    keyword: 'ಮೂರು ಶತ್ರು',
  },

  // ═══════════════════════════════════════════
  // CHAPTER 17 — ಶ್ರದ್ಧಾತ್ರಯ ವಿಭಾಗ ಯೋಗ
  // ═══════════════════════════════════════════
  {
    chapter: 17, verse: 3,
    sanskrit: 'sattvanurupaa sarvasya shraddhaa bhavati bhaarata | shraddhaamayo ayam purushoh yo yacchraddhah sa eva sah ||',
    kannada: 'ಸತ್ತ್ವಾನುರೂಪಾ ಸರ್ವಸ್ಯ ಶ್ರದ್ಧಾ ಭವತಿ ಭಾರತ |\nಶ್ರದ್ಧಾಮಯೋsಯಂ ಪುರುಷೋ ಯೋ ಯಚ್ಛ್ರದ್ಧಃ ಸ ಏವ ಸಃ ||',
    meaning: 'ಪ್ರತಿಯೊಬ್ಬನ ಶ್ರದ್ಧೆ ತನ್ನ ಸ್ವಭಾವಕ್ಕೆ ಅನುರೂಪ. ಮನುಷ್ಯ ಶ್ರದ್ಧಾಮಯ — ಯಾವ ಶ್ರದ್ಧೆ ಉಳ್ಳವನೋ ಅವನು ಅದೇ.',
    application: 'You are what you believe. ನಿಮ್ಮ belief system ಪರೀಕ್ಷಿಸಿ. Positive beliefs cultivate ಮಾಡಿ. ನೀವು ನಂಬುವಂತೆ ಆಗುತ್ತೀರಿ.',
    keyword: 'ಶ್ರದ್ಧೆ',
  },
  {
    chapter: 17, verse: 15,
    sanskrit: 'anudvega-karam vakyam satyam priya-hitam cha yat | svadhyayabhyasanam chaiva van-mayam tapa uchyate ||',
    kannada: 'ಅನುದ್ವೇಗಕರಂ ವಾಕ್ಯಂ ಸತ್ಯಂ ಪ್ರಿಯಹಿತಂ ಚ ಯತ್ |\nಸ್ವಾಧ್ಯಾಯಾಭ್ಯಸನಂ ಚೈವ ವಾಙ್ಮಯಂ ತಪ ಉಚ್ಯತೇ ||',
    meaning: 'ಉದ್ವೇಗ ಉಂಟುಮಾಡದ, ಸತ್ಯ, ಪ್ರಿಯ ಮತ್ತು ಹಿತಕರ ಮಾತು ಮತ್ತು ಸ್ವಾಧ್ಯಾಯ — ಇವನ್ನು ವಾಕ್ ತಪಸ್ಸು ಎನ್ನುತ್ತಾರೆ.',
    application: 'ಮಾತು ಸತ್ಯ, ಪ್ರಿಯ, ಹಿತಕರ ಆಗಿರಲಿ. Feedback ಕೊಡಬಹುದು ಆದರೆ kindly. ಇದೇ ವಾಕ್ ತಪಸ್ಸು.',
    keyword: 'ವಾಕ್ ತಪಸ್ಸು',
  },
  {
    chapter: 17, verse: 20,
    sanskrit: 'daatavyam iti yad daanam deeyate anupakaarinne | deshe kaale cha paatre cha tad daanam saattvikam smritam ||',
    kannada: 'ದಾತವ್ಯಮಿತಿ ಯದ್ದಾನಂ ದೀಯತೇsನುಪಕಾರಿಣೇ |\nದೇಶೇ ಕಾಲೇ ಚ ಪಾತ್ರೇ ಚ ತದ್ದಾನಂ ಸಾತ್ತ್ವಿಕಂ ಸ್ಮೃತಮ್ ||',
    meaning: 'ಕೊಡಬೇಕು ಎಂಬ ಭಾವದಿಂದ, ಪ್ರತ್ಯುಪಕಾರ ಬಯಸದೆ, ಸರಿಯಾದ ಸ್ಥಳ-ಕಾಲ-ಪಾತ್ರದಲ್ಲಿ ಕೊಡುವ ದಾನ ಸಾತ್ವಿಕ.',
    application: 'ದಾನ ಮಾಡಿ — ಪ್ರತಿಫಲ ಅಪೇಕ್ಷೆ ಇಲ್ಲದೆ. ಸರಿಯಾದ ಜನರಿಗೆ, ಸರಿಯಾದ ಸಮಯದಲ್ಲಿ. Anonymous giving ಅತ್ಯುತ್ತಮ.',
    keyword: 'ಸಾತ್ವಿಕ ದಾನ',
  },

  // ═══════════════════════════════════════════
  // CHAPTER 18 — ಮೋಕ್ಷ ಸಂನ್ಯಾಸ ಯೋಗ
  // ═══════════════════════════════════════════
  {
    chapter: 18, verse: 5,
    sanskrit: 'yajna-dana-tapah-karma na tyajyam karyam eva tat | yajno danam tapash chaiva paavanaani manisinam ||',
    kannada: 'ಯಜ್ಞದಾನತಪಃಕರ್ಮ ನ ತ್ಯಾಜ್ಯಂ ಕಾರ್ಯಮೇವ ತತ್ |\nಯಜ್ಞೋ ದಾನಂ ತಪಶ್ಚೈವ ಪಾವನಾನಿ ಮನೀಷಿಣಾಮ್ ||',
    meaning: 'ಯಜ್ಞ, ದಾನ, ತಪ ಕರ್ಮ ತ್ಯಜಿಸಬಾರದು — ಮಾಡಲೇಬೇಕು. ಇವು ಜ್ಞಾನಿಗಳನ್ನು ಪವಿತ್ರಗೊಳಿಸುತ್ತವೆ.',
    application: 'Charity, ಪ್ರಾರ್ಥನೆ, ಸಂಯಮ — ಇವು ಸನ್ಯಾಸಿಗಳಿಗಾಗಿ ಅಲ್ಲ, ಎಲ್ಲರಿಗಾಗಿ. ದಿನದಲ್ಲಿ ಒಂದು — ದಾನ, ಪ್ರಾರ್ಥನೆ, ಉಪವಾಸ.',
    keyword: 'ಪವಿತ್ರ ಕರ್ಮ',
  },
  {
    chapter: 18, verse: 20,
    sanskrit: 'sarva-bhuteshu yenaikam bhaavam avyayam ikshate | avibhaktam vibhakteshu taj jnanam viddhi saattvikam ||',
    kannada: 'ಸರ್ವಭೂತೇಷು ಯೇನೈಕಂ ಭಾವಮವ್ಯಯಮೀಕ್ಷತೇ |\nಅವಿಭಕ್ತಂ ವಿಭಕ್ತೇಷು ತಜ್ಜ್ಞಾನಂ ವಿದ್ಧಿ ಸಾತ್ತ್ವಿಕಮ್ ||',
    meaning: 'ಎಲ್ಲ ಜೀವಿಗಳಲ್ಲಿ ಒಂದೇ ಅವಿನಾಶಿ ಭಾವ ಕಾಣುವ ಜ್ಞಾನ — ಭೇದ ತೋರಿದರೂ ಅಭೇದ ಕಾಣುವ ಜ್ಞಾನ — ಸಾತ್ವಿಕ.',
    application: 'ಧರ್ಮ, ಜಾತಿ, ದೇಶ ಭೇದ ತೋರಿದರೂ ಎಲ್ಲರಲ್ಲಿ ಒಂದೇ ಆತ್ಮ. ಈ ದೃಷ್ಟಿ ಭಾರತದ ವಸುಧೈಕ ಕುಟುಂಬ ಭಾವನೆ.',
    keyword: 'ಏಕತ್ವ',
  },
  {
    chapter: 18, verse: 45,
    sanskrit: 'sve sve karmanyabhiratah samsiddhim labhate narah | svakarma-niratah siddhim yathaa vindati tach chrunu ||',
    kannada: 'ಸ್ವೇ ಸ್ವೇ ಕರ್ಮಣ್ಯಭಿರತಃ ಸಂಸಿದ್ಧಿಂ ಲಭತೇ ನರಃ |\nಸ್ವಕರ್ಮನಿರತಃ ಸಿದ್ಧಿಂ ಯಥಾ ವಿಂದತಿ ತಚ್ಛೃಣು ||',
    meaning: 'ತನ್ನ ಕರ್ಮದಲ್ಲಿ ನಿರತನಾಗಿ ಮನುಷ್ಯ ಸಿದ್ಧಿ ಪಡೆಯುತ್ತಾನೆ. ಸ್ವಕರ್ಮ ಮಾಡುತ್ತಾ ಸಿದ್ಧಿ ಹೇಗೆ ಪಡೆಯುತ್ತಾನೆ — ಕೇಳು.',
    application: 'ನಿಮ್ಮ ಕೆಲಸದಲ್ಲಿ excellence ಸಾಧಿಸಿ. ಅದೇ ಭಗವದ್ ಸೇವೆ. ಯಾರ ಕೆಲಸ ಶ್ರೇಷ್ಠ ಅಲ್ಲ — ಹೇಗೆ ಮಾಡುತ್ತೀರಿ ಅದು ಶ್ರೇಷ್ಠ.',
    keyword: 'ಸ್ವ ಕರ್ಮ',
  },
  {
    chapter: 18, verse: 54,
    sanskrit: 'brahma-bhutah prasannaatmaa na shochati na kaankshati | samah sarveshu bhuteshu madbhaktim labhate paraam ||',
    kannada: 'ಬ್ರಹ್ಮಭೂತಃ ಪ್ರಸನ್ನಾತ್ಮಾ ನ ಶೋಚತಿ ನ ಕಾಂಕ್ಷತಿ |\nಸಮಃ ಸರ್ವೇಷು ಭೂತೇಷು ಮದ್ಭಕ್ತಿಂ ಲಭತೇ ಪರಾಮ್ ||',
    meaning: 'ಬ್ರಹ್ಮಭೂತ ಸ್ಥಿತಿಯಲ್ಲಿ ಪ್ರಸನ್ನ, ಶೋಕ ಇಲ್ಲ, ಆಸೆ ಇಲ್ಲ, ಎಲ್ಲ ಜೀವಿಗಳಲ್ಲಿ ಸಮ — ಅಂಥವನಿಗೆ ಪರಮ ಭಕ್ತಿ ಸಿಗುತ್ತದೆ.',
    application: 'ಶೋಕ-ಆಸೆ-ಭೇದ ರಹಿತ ಸ್ಥಿತಿ — ಇದೇ ಬ್ರಹ್ಮಭೂತ. ಈ ಗುರಿ ಇಟ್ಟು ಬದುಕಿ. ಪ್ರಸನ್ನ ಮನಸ್ಸು ಭಕ್ತಿಗೆ ಸೇತುವೆ.',
    keyword: 'ಬ್ರಹ್ಮಭೂತ',
  },
  {
    chapter: 18, verse: 61,
    sanskrit: 'ishvarah sarva-bhutanam hrid-deshe arjuna tishthati | bhramayan sarva-bhutani yantrarudhaani mayaya ||',
    kannada: 'ಈಶ್ವರಃ ಸರ್ವಭೂತಾನಾಂ ಹೃದ್ದೇಶೇsರ್ಜುನ ತಿಷ್ಠತಿ |\nಭ್ರಾಮಯನ್ ಸರ್ವಭೂತಾನಿ ಯಂತ್ರಾರೂಢಾನಿ ಮಾಯಯಾ ||',
    meaning: 'ಹೇ ಅರ್ಜುನ, ಈಶ್ವರ ಎಲ್ಲ ಜೀವಿಗಳ ಹೃದಯದಲ್ಲಿ ನೆಲೆಸಿ, ಮಾಯೆಯಿಂದ ಯಂತ್ರದಂತೆ ಎಲ್ಲರನ್ನೂ ತಿರುಗಿಸುತ್ತಾನೆ.',
    application: 'ಭಗವಂತ ನಿಮ್ಮ ಹೃದಯದಲ್ಲೇ ಇದ್ದಾನೆ. Gut feeling = ಭಗವದ್ ಧ್ವನಿ. Inner voice ಕೇಳಿ. ಅಂತರ್ಮನ ಮಾರ್ಗದರ್ಶನ ಮಾಡುತ್ತದೆ.',
    keyword: 'ಅಂತರ್ಯಾಮಿ',
  },
  {
    chapter: 18, verse: 65,
    sanskrit: 'man-manaa bhava mad-bhakto mad-yaajee maam namaskuru | maam evaishyasi satyam te pratijaane priyo asi me ||',
    kannada: 'ಮನ್ಮನಾ ಭವ ಮದ್ಭಕ್ತೋ ಮದ್ಯಾಜೀ ಮಾಂ ನಮಸ್ಕುರು |\nಮಾಮೇವೈಷ್ಯಸಿ ಸತ್ಯಂ ತೇ ಪ್ರತಿಜಾನೇ ಪ್ರಿಯೋsಸಿ ಮೇ ||',
    meaning: 'ನನ್ನ ಮನಸ್ಸಾಗು, ಭಕ್ತನಾಗು, ಪೂಜಿಸು, ನಮಸ್ಕರಿಸು. ನೀನು ನನ್ನನ್ನೇ ಸೇರುತ್ತೀ — ಸತ್ಯ ಪ್ರತಿಜ್ಞೆ. ನೀನು ನನಗೆ ಪ್ರಿಯ.',
    application: 'ಕೃಷ್ಣ ಭರವಸೆ ಕೊಡುತ್ತಾನೆ — "ನೀನು ನನಗೆ ಪ್ರಿಯ." ಇದನ್ನು ಅನುಭವಿಸಿ. ಭಕ್ತಿ ಮಾಡಿ — ಭಗವಂತ ಎಂದೂ ತ್ಯಜಿಸದು.',
    keyword: 'ದೈವ ಭರವಸೆ',
  },
  {
    chapter: 18, verse: 66,
    sanskrit: 'sarva-dharman parityajya mam ekam sharanam vraja | aham tvam sarva-papebhyo mokshayishyami ma shuchah ||',
    kannada: 'ಸರ್ವಧರ್ಮಾನ್ ಪರಿತ್ಯಜ್ಯ ಮಾಮೇಕಂ ಶರಣಂ ವ್ರಜ |\nಅಹಂ ತ್ವಾಂ ಸರ್ವಪಾಪೇಭ್ಯೋ ಮೋಕ್ಷಯಿಷ್ಯಾಮಿ ಮಾ ಶುಚಃ ||',
    meaning: 'ಎಲ್ಲ ಧರ್ಮಗಳನ್ನೂ ಬಿಟ್ಟು ನನ್ನೊಬ್ಬನ ಶರಣು ಹೋಗು. ನಾನು ನಿನ್ನನ್ನು ಎಲ್ಲ ಪಾಪಗಳಿಂದ ಮುಕ್ತಗೊಳಿಸುತ್ತೇನೆ — ಶೋಕಪಡಬೇಡ.',
    application: 'ಎಲ್ಲ anxiety, guilt, past mistakes — "ಕೃಷ್ಣ ನೀನೇ ನೋಡಿಕೋ" ಎಂದು ಬಿಟ್ಟುಬಿಡಿ. ಗೀತೆಯ ಸಾರ: ಶರಣಾಗತಿ.',
    keyword: 'ಶರಣಾಗತಿ',
  },
  {
    chapter: 18, verse: 70,
    sanskrit: 'adhyeshyate cha ya imam dharmyam samvaadam aavayoh | jnaana-yajnena tenaham ishtah syaam iti me matih ||',
    kannada: 'ಅಧ್ಯೇಷ್ಯತೇ ಚ ಯ ಇಮಂ ಧರ್ಮ್ಯಂ ಸಂವಾದಮಾವಯೋಃ |\nಜ್ಞಾನಯಜ್ಞೇನ ತೇನಾಹಮಿಷ್ಟಃ ಸ್ಯಾಮಿತಿ ಮೇ ಮತಿಃ ||',
    meaning: 'ಈ ನಮ್ಮ ಧರ್ಮ ಸಂವಾದ ಯಾರು ಅಧ್ಯಯನ ಮಾಡುತ್ತಾರೋ, ಅವರು ಜ್ಞಾನ ಯಜ್ಞದಿಂದ ನನ್ನ ಪೂಜಿಸಿದಂತೆ — ನನ್ನ ಮತ.',
    application: 'ನೀವು ಈ ಗೀತೆ ಓದಿ ಅಧ್ಯಯನ ಮಾಡುವುದೇ ಕೃಷ್ಣನ ಪೂಜೆ. Daily reading = ಯಜ್ಞ. ಪ್ರತಿ ಶ್ಲೋಕ ಒಂದು ಅಹುತಿ.',
    keyword: 'ಜ್ಞಾನ ಯಜ್ಞ',
  },
  {
    chapter: 18, verse: 73,
    sanskrit: 'arjuna uvaacha | nashto mohah smritir labdhaa tvatprasaadaan mayaachyuta | sthito asmi gata-sandehah karishye vachanam tava ||',
    kannada: 'ಅರ್ಜುನ ಉವಾಚ |\nನಷ್ಟೋ ಮೋಹಃ ಸ್ಮೃತಿರ್ಲಬ್ಧಾ ತ್ವತ್ಪ್ರಸಾದಾನ್ಮಯಾಚ್ಯುತ |\nಸ್ಥಿತೋsಸ್ಮಿ ಗತಸಂದೇಹಃ ಕರಿಷ್ಯೇ ವಚನಂ ತವ ||',
    meaning: 'ಅರ್ಜುನ ಹೇಳಿದ: ಹೇ ಅಚ್ಯುತ, ನಿನ್ನ ಕೃಪೆಯಿಂದ ನನ್ನ ಮೋಹ ನಾಶ, ಸ್ಮೃತಿ ಪ್ರಾಪ್ತ. ಸಂದೇಹ ಇಲ್ಲ. ನಿನ್ನ ಮಾತು ಮಾಡುತ್ತೇನೆ.',
    application: 'ಗೀತೆ ಕೇಳಿದ ಅರ್ಜುನ ಸಿದ್ಧ ಆದ. ನೀವೂ ಓದಿ, ಅರ್ಥ ಮಾಡಿ, ಮೋಹ ಕಡಿಮೆ ಮಾಡಿ, ಕ್ರಿಯೆಗೆ ಇಳಿಯಿರಿ.',
    keyword: 'ಮೋಹ ನಾಶ',
  },
  {
    chapter: 18, verse: 78,
    sanskrit: 'yatra yogeshvarah krishno yatra partho dhanur-dharah | tatra shreer vijayo bhutir dhruva neetir matir mama ||',
    kannada: 'ಯತ್ರ ಯೋಗೇಶ್ವರಃ ಕೃಷ್ಣೋ ಯತ್ರ ಪಾರ್ಥೋ ಧನುರ್ಧರಃ |\nತತ್ರ ಶ್ರೀರ್ವಿಜಯೋ ಭೂತಿರ್ಧ್ರುವಾ ನೀತಿರ್ಮತಿರ್ಮಮ ||',
    meaning: 'ಎಲ್ಲಿ ಯೋಗೇಶ್ವರ ಕೃಷ್ಣ ಮತ್ತು ಎಲ್ಲಿ ಬಿಲ್ಲು ಹಿಡಿದ ಅರ್ಜುನ ಇರುವನೋ — ಅಲ್ಲಿ ಸಂಪತ್ತು, ವಿಜಯ, ವೈಭವ ಮತ್ತು ಧ್ರುವ ನೀತಿ ಇದೆ.',
    application: 'ನೀವೂ ಅರ್ಜುನ — ಭಗವಂತನ ಮಾರ್ಗದರ್ಶನದಲ್ಲಿ ಕರ್ಮ ಮಾಡಿ. ಪ್ರಾರ್ಥನೆ + ಪ್ರಯತ್ನ = ವಿಜಯ. ಗೀತೆಯ ಕೊನೆ ಸಂದೇಶ.',
    keyword: 'ವಿಜಯ',
  },
];

export function groupByChapter(list: Shloka[]): Record<number, Shloka[]> {
  const grouped: Record<number, Shloka[]> = {};
  list.forEach((s) => {
    if (!grouped[s.chapter]) grouped[s.chapter] = [];
    grouped[s.chapter].push(s);
  });
  return grouped;
}

export function getTodaysShloka(list: Shloka[]): Shloka {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 0);
  const dayOfYear = Math.floor((now.getTime() - start.getTime()) / 86400000);
  return list[dayOfYear % list.length];
}
