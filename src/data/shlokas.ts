export interface Shloka {
  chapter: number;
  verse: number | string;
  sanskrit: string;
  kannada: string;
  meaning: string;
  application: string;
  keyword: string;
}

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

export const shlokas: Shloka[] = [
  // Chapter 1
  {
    chapter: 1, verse: 1,
    sanskrit: 'dharmakshetre kurukshetre samavetaa yuyutsavah | mamakah pandavashchaiva kimakurvata sanjaya ||',
    kannada: 'ಧರ್ಮಕ್ಷೇತ್ರೇ ಕುರುಕ್ಷೇತ್ರೇ ಸಮವೇತಾ ಯುಯುತ್ಸವಃ |\nಮಾಮಕಾಃ ಪಾಂಡವಾಶ್ಚೈವ ಕಿಮಕುರ್ವತ ಸಂಜಯ ||',
    meaning: 'ಧರ್ಮದ ಭೂಮಿಯಾದ ಕುರುಕ್ಷೇತ್ರದಲ್ಲಿ ಯುದ್ಧಾಸಕ್ತರಾಗಿ ಒಟ್ಟುಗೂಡಿದ ನನ್ನ ಪುತ್ರರು ಮತ್ತು ಪಾಂಡವರು ಏನು ಮಾಡಿದರು, ಓ ಸಂಜಯ?',
    application: 'ನಮ್ಮ ಜೀವನದ ಪ್ರತಿ ಕ್ಷೇತ್ರ — office, ಮನೆ, ಸಮಾಜ — ಇವೆಲ್ಲವೂ ಧರ್ಮಕ್ಷೇತ್ರ. ನ್ಯಾಯ-ನೀತಿಯ ನಿರ್ಧಾರ ತೆಗೆಯಿರಿ; ಮಕ್ಕಳಿಗೆ ಮಾದರಿಯಾಗಿ ಇರಿ. ಪ್ರತಿ ಕ್ಷಣ ನಾವು ಮಾಡುವ ಆಯ್ಕೆ ನಮ್ಮ ಧರ್ಮ ವ್ಯಕ್ತಪಡಿಸುತ್ತದೆ.',
    keyword: 'ಧರ್ಮ',
  },
  {
    chapter: 1, verse: 47,
    sanskrit: 'evamuktvaarjunah sankhye rathopastha upavishat | visrjya sasaram chapam shokasanvignamanasah ||',
    kannada: 'ಏವಮುಕ್ತ್ವಾ ಅರ್ಜುನಃ ಸಂಖ್ಯೇ ರಥೋಪಸ್ಥ ಉಪಾವಿಶತ್ |\nವಿಸೃಜ್ಯ ಸಶರಂ ಚಾಪಂ ಶೋಕಸಂವಿಗ್ನಮಾನಸಃ ||',
    meaning: 'ಹೀಗೆ ಹೇಳಿ ಅರ್ಜುನನು ಬಿಲ್ಲು-ಬಾಣಗಳನ್ನು ಕೆಳಗಿಟ್ಟು, ಶೋಕದಿಂದ ಮನಸ್ಸು ತುಂಬಿ ರಥದ ಮೇಲೆ ಕುಳಿತನು.',
    application: 'ಕಷ್ಟದ ಸಮಯದಲ್ಲಿ ಭಾವನೆಗಳು ಮುಳುಗಿಸುತ್ತವೆ — ಇದು ಮಾನವ ಸ್ವಭಾವ. ಕಷ್ಟ ಬಂದಾಗ ಒಂದು ಕ್ಷಣ ನಿಂತು ಉಸಿರಾಡಿ. ಶೋಕ ಜ್ಞಾನದ ಪ್ರಾರಂಭ. ಪ್ರಶ್ನಿಸಿದವನಿಗೇ ಉತ್ತರ ಸಿಗುತ್ತದೆ.',
    keyword: 'ಶೋಕ ಮತ್ತು ಪ್ರಾರಂಭ',
  },
  // Chapter 2
  {
    chapter: 2, verse: 47,
    sanskrit: 'karmanyevadhikaraste ma phaleshu kadachana | ma karmaphalaheturbhur ma te sango akarmanī ||',
    kannada: 'ಕರ್ಮಣ್ಯೇವಾಧಿಕಾರಸ್ತೇ ಮಾ ಫಲೇಷು ಕದಾಚನ |\nಮಾ ಕರ್ಮಫಲಹೇತುರ್ಭೂ ಮಾ ತೇ ಸಂಗೋsಸ್ತ್ವಕರ್ಮಣಿ ||',
    meaning: 'ಕರ್ಮ ಮಾಡುವ ಅಧಿಕಾರ ಮಾತ್ರ ನಿನ್ನದು, ಫಲದಲ್ಲಿ ಎಂದೂ ಅಲ್ಲ. ಕರ್ಮಫಲಕ್ಕಾಗಿ ಕಾರಣನಾಗಬೇಡ; ಕರ್ಮ ಮಾಡದಿರುವಲ್ಲೂ ಆಸಕ್ತಿ ಬೇಡ.',
    application: 'Result ಬಗ್ಗೆ ಚಿಂತಿಸದೆ best effort ಕೊಡಿ. ಫಲ ನಿಯಂತ್ರಿಸಲಾಗದು — ಪ್ರಯತ್ನ ನಿಯಂತ್ರಿಸಬಹುದು. ಮಕ್ಕಳಿಗೆ ಒಳ್ಳೆಯ ಸಂಸ್ಕಾರ ಕೊಡಿ — ಫಲ ಅವರ ಜೀವನ ನಿರ್ಧರಿಸುತ್ತದೆ. ಪ್ರಕ್ರಿಯೆಯಲ್ಲಿ ತಲ್ಲೀನರಾಗಿ.',
    keyword: 'ನಿಷ್ಕಾಮ ಕರ್ಮ',
  },
  {
    chapter: 2, verse: 20,
    sanskrit: 'na jayate mriyate va kadachin nayam bhutva bhavita va na bhuyah | ajo nityah shashvato ayam purano na hanyate hanyamane sharire ||',
    kannada: 'ನ ಜಾಯತೇ ಮ್ರಿಯತೇ ವಾ ಕದಾಚಿತ್\nನಾಯಂ ಭೂತ್ವಾ ಭವಿತಾ ವಾ ನ ಭೂಯಃ |\nಅಜೋ ನಿತ್ಯಃ ಶಾಶ್ವತೋsಯಂ ಪುರಾಣೋ\nನ ಹನ್ಯತೇ ಹನ್ಯಮಾನೇ ಶರೀರೇ ||',
    meaning: 'ಆತ್ಮ ಎಂದಿಗೂ ಜನಿಸದು, ಸಾಯದು. ಇದು ಅಜ, ನಿತ್ಯ, ಶಾಶ್ವತ. ಶರೀರ ಕೊಲ್ಲಲ್ಪಟ್ಟರೂ ಆತ್ಮ ಕೊಲ್ಲಲ್ಪಡದು.',
    application: 'ಯಾವ ಸೋಲೂ ಶರೀರದ ಅನುಭವ — ನಿಮ್ಮ ಅಂತರಾತ್ಮ ಅದಕ್ಕಿಂತ ದೊಡ್ಡದು. ಮಕ್ಕಳಿಗೆ ಹೇಳಿ: ಪರೀಕ್ಷೆ ಸೋತರೂ ನೀನು ಸೋಲಲಿಲ್ಲ. ನಿಮ್ಮ ಆತ್ಮ ಅಜರಾಮರ.',
    keyword: 'ಆತ್ಮ ಅಮರತ್ವ',
  },
  {
    chapter: 2, verse: 14,
    sanskrit: 'matra-sparshas tu kaunteya shitoshna-sukha-duhkha-dah | agamapayino anityaas tams titikshasva bharata ||',
    kannada: 'ಮಾತ್ರಾಸ್ಪರ್ಶಾಸ್ತು ಕೌಂತೇಯ ಶೀತೋಷ್ಣಸುಖದುಃಖದಾಃ |\nಆಗಮಾಪಾಯಿನೋsನಿತ್ಯಾಸ್ತಾಂಸ್ತಿತಿಕ್ಷಸ್ವ ಭಾರತ ||',
    meaning: 'ಶೀತ-ಉಷ್ಣ, ಸುಖ-ದುಃಖ ಇಂದ್ರಿಯ ಸ್ಪರ್ಶಗಳಿಂದ ಬರುತ್ತವೆ. ಇವು ಬಂದು ಹೋಗುವ ಅನಿತ್ಯ — ಇವನ್ನು ಸಹಿಸಿಕೋ.',
    application: '"This too shall pass" ಗೀತೆಯ ಸಾರ. ಯಶ ಮತ್ತು ಸೋಲು ಎರಡೂ ಅನಿತ್ಯ. ಒತ್ತಡಕ್ಕೆ ಅಳೆದುಕೊಳ್ಳದಿರಿ. Equanimity cultivate ಮಾಡಿ.',
    keyword: 'ಅನಿತ್ಯ ಮತ್ತು ಸ್ಥಿರತೆ',
  },
  // Chapter 3
  {
    chapter: 3, verse: 21,
    sanskrit: 'yadyadacharati shreshthas tattadevetaro janah | sa yat pramanam kurute lokastadanuvartate ||',
    kannada: 'ಯದ್ಯದಾಚರತಿ ಶ್ರೇಷ್ಠಸ್ತತ್ತದೇವೇತರೋ ಜನಃ |\nಸ ಯತ್ಪ್ರಮಾಣಂ ಕುರುತೇ ಲೋಕಸ್ತದನುವರ್ತತೇ ||',
    meaning: 'ಶ್ರೇಷ್ಠ ಮನುಷ್ಯ ಯಾವ ಆಚಾರ ಮಾಡುತ್ತಾನೋ, ಇತರರು ಅದನ್ನೇ ಅನುಸರಿಸುತ್ತಾರೆ. ಅವನು ಸ್ಥಾಪಿಸುವ ಮಾನದಂಡ ಜಗತ್ತು ಅನುಸರಿಸುತ್ತದೆ.',
    application: 'ನೀವು ಮಾಡುವ ಪ್ರತಿ ನಿರ್ಧಾರ ನಿಮ್ಮ ತಂಡ ಮತ್ತು ಮಕ್ಕಳನ್ನು ಪ್ರಭಾವಿಸುತ್ತದೆ. ನಿಮ್ಮ ಮೌಲ್ಯಗಳು ಸಮಾಜ ನಿರ್ಮಿಸುತ್ತವೆ. "Be the change" — ಇದೇ ಗೀತೆ ಹೇಳಿದ್ದು.',
    keyword: 'ನಾಯಕತ್ವ',
  },
  {
    chapter: 3, verse: 35,
    sanskrit: 'shreyan svadharmo vigunah paradharmat svanushtitat | svadharme nidhanam shreyah paradharmo bhayavahah ||',
    kannada: 'ಶ್ರೇಯಾನ್ ಸ್ವಧರ್ಮೋ ವಿಗುಣಃ ಪರಧರ್ಮಾತ್ ಸ್ವನುಷ್ಠಿತಾತ್ |\nಸ್ವಧರ್ಮೇ ನಿಧನಂ ಶ್ರೇಯಃ ಪರಧರ್ಮೋ ಭಯಾವಹಃ ||',
    meaning: 'ಚೆನ್ನಾಗಿ ನಿರ್ವಹಿಸಿದ ಪರಧರ್ಮಕ್ಕಿಂತ ದೋಷಪೂರಿತ ಸ್ವಧರ್ಮ ಶ್ರೇಯಸ್ಕರ. ಸ್ವಧರ್ಮದಲ್ಲಿ ಸಾಯುವುದು ಉತ್ತಮ — ಪರಧರ್ಮ ಭಯಕರ.',
    application: 'ಬೇರೆಯವರ ಜೀವನ ನೋಡಿ ಅನುಕರಿಸಬೇಡಿ. ನಿಮ್ಮ ನಿಜ ಸ್ವಭಾವವನ್ನು ಪೂರ್ಣ ಬದುಕಿರಿ. Comparison trap ತಪ್ಪಿಸಿ. Authenticity first.',
    keyword: 'ಸ್ವಧರ್ಮ',
  },
  // Chapter 4
  {
    chapter: 4, verse: 7,
    sanskrit: 'yada yada hi dharmasya glanir bhavati bharata | abhyutthanam adharmasya tadatmanam srjamy aham ||',
    kannada: 'ಯದಾ ಯದಾ ಹಿ ಧರ್ಮಸ್ಯ ಗ್ಲಾನಿರ್ಭವತಿ ಭಾರತ |\nಅಭ್ಯುತ್ಥಾನಮಧರ್ಮಸ್ಯ ತದಾತ್ಮಾನಂ ಸೃಜಾಮ್ಯಹಮ್ ||',
    meaning: 'ಎಲ್ಲಿ ಎಲ್ಲಿ ಧರ್ಮದ ಅವನತಿ ಮತ್ತು ಅಧರ್ಮದ ಉದ್ಭವ ಆಗುತ್ತದೆಯೋ, ಅಲ್ಲಿ ಅಲ್ಲಿ ನಾನು ನನ್ನನ್ನು ಸೃಷ್ಟಿಸಿಕೊಳ್ಳುತ್ತೇನೆ.',
    application: 'ಅನ್ಯಾಯ ಕಂಡಾಗ ಮಾತನಾಡಿ, ಮನೆಯಲ್ಲಿ ತಿದ್ದಿ. ಸಮಾಜದಲ್ಲಿ ಧರ್ಮ ರಕ್ಷಿಸಲು ನೀವೂ ಕೃಷ್ಣನ ಒಂದು ರೂಪ. Speak up — ಇದೇ ನಿಮ್ಮ ಅವತಾರ.',
    keyword: 'ಧರ್ಮ ರಕ್ಷಣೆ',
  },
  {
    chapter: 4, verse: 8,
    sanskrit: 'paritranaya sadhunam vinashaya cha dushkrtam | dharma-samsthapanarthaya sambhavami yuge yuge ||',
    kannada: 'ಪರಿತ್ರಾಣಾಯ ಸಾಧೂನಾಂ ವಿನಾಶಾಯ ಚ ದುಷ್ಕೃತಾಮ್ |\nಧರ್ಮಸಂಸ್ಥಾಪನಾರ್ಥಾಯ ಸಂಭವಾಮಿ ಯುಗೇ ಯುಗೇ ||',
    meaning: 'ಸಾಧುಗಳ ರಕ್ಷಣೆಗಾಗಿ, ದುಷ್ಟರ ನಾಶಕ್ಕಾಗಿ, ಧರ್ಮ ಸ್ಥಾಪನೆಗಾಗಿ ನಾನು ಯುಗ ಯುಗದಲ್ಲೂ ಅವತರಿಸುತ್ತೇನೆ.',
    application: 'ಒಳ್ಳೆಯ ಜನರನ್ನು support ಮಾಡಿ, ಅನ್ಯಾಯ ಎದುರಿಸಿ. ಸಣ್ಣ ಮಕ್ಕಳನ್ನು mentor ಮಾಡಿ — ಅದೂ ಧರ್ಮ ಸ್ಥಾಪನೆ. ಪ್ರತಿ ಒಳ್ಳೆಯ ಕ್ರಿಯೆ ಒಂದು ಅವತಾರ.',
    keyword: 'ರಕ್ಷಣೆ ಮತ್ತು ನ್ಯಾಯ',
  },
  // Chapter 5
  {
    chapter: 5, verse: 18,
    sanskrit: 'vidya-vinaya-sampanne brahmane gavi hastini | shuni chaiva shvapake cha panditah samadarsinah ||',
    kannada: 'ವಿದ್ಯಾವಿನಯಸಂಪನ್ನೇ ಬ್ರಾಹ್ಮಣೇ ಗವಿ ಹಸ್ತಿನಿ |\nಶುನಿ ಚೈವ ಶ್ವಪಾಕೇ ಚ ಪಂಡಿತಾಃ ಸಮದರ್ಶಿನಃ ||',
    meaning: 'ಜ್ಞಾನ-ವಿನಯ ಸಂಪನ್ನ ಬ್ರಾಹ್ಮಣ, ಗೋವು, ಆನೆ, ನಾಯಿ ಮತ್ತು ಚಾಂಡಾಲ — ಎಲ್ಲರಲ್ಲೂ ಜ್ಞಾನಿಗಳು ಸಮಭಾವ ಕಾಣುತ್ತಾರೆ.',
    application: 'Title, salary ನೋಡಿ ತಾರತಮ್ಯ ಮಾಡಬೇಡಿ. ಎಲ್ಲರಲ್ಲೂ ಒಂದೇ ಆತ್ಮ. ಮಕ್ಕಳಿಗೆ ಎಲ್ಲರೊಂದಿಗೆ ಗೌರವದಿಂದ ನಡೆಯಲು ಕಲಿಸಿ. True inclusion.',
    keyword: 'ಸಮಭಾವ',
  },
  {
    chapter: 5, verse: 29,
    sanskrit: 'bhoktaram yajna-tapasam sarva-loka-maheshvaram | suhridam sarva-bhutanam jnatva mam shantim rcchati ||',
    kannada: 'ಭೋಕ್ತಾರಂ ಯಜ್ಞತಪಸಾಂ ಸರ್ವಲೋಕಮಹೇಶ್ವರಮ್ |\nಸುಹೃದಂ ಸರ್ವಭೂತಾನಾಂ ಜ್ಞಾತ್ವಾ ಮಾಂ ಶಾಂತಿಮೃಚ್ಛತಿ ||',
    meaning: 'ನಾನು ಎಲ್ಲ ಯಜ್ಞ-ತಪಸ್ಸಿನ ಭೋಕ್ತ, ಸರ್ವಲೋಕದ ಮಹೇಶ್ವರ ಮತ್ತು ಎಲ್ಲ ಜೀವಿಗಳ ಹಿತೈಷಿ — ತಿಳಿದವನು ಶಾಂತಿ ಪಡೆಯುತ್ತಾನೆ.',
    application: 'ಎಲ್ಲ ಕೆಲಸ ಭಗವಂತನಿಗೆ ಅರ್ಪಿಸಿ ಮಾಡಿದಾಗ ಮಾನಸಿಕ ಶಾಂತಿ ಸಿಗುತ್ತದೆ. ಕೆಲಸ, ಕುಟುಂಬ, ಪೂಜೆ ಎಲ್ಲವೂ ಭಗವಂತನ ಸೇವೆ ಎಂದು ಭಾವಿಸಿ.',
    keyword: 'ಶಾಂತಿ',
  },
  // Chapter 6
  {
    chapter: 6, verse: 5,
    sanskrit: 'uddhared atmanatmanam natmanam avasadayet | atmaiva hyatmano bandhur atmaiva ripur atmanah ||',
    kannada: 'ಉದ್ಧರೇದಾತ್ಮನಾ ಆತ್ಮಾನಂ ನಾತ್ಮಾನಮವಸಾದಯೇತ್ |\nಆತ್ಮೈವ ಹ್ಯಾತ್ಮನೋ ಬಂಧುರಾತ್ಮೈವ ರಿಪುರಾತ್ಮನಃ ||',
    meaning: 'ತನ್ನನ್ನು ತಾನೇ ಉದ್ಧರಿಸಿಕೋ, ತನ್ನನ್ನು ತಾನೇ ಅಧೋಗತಿಗೆ ದೂಡಬೇಡ. ಆತ್ಮವೇ ತನ್ನ ಬಂಧು, ಆತ್ಮವೇ ತನ್ನ ಶತ್ರು.',
    application: 'Self-doubt, burnout — ಇವು ನಿಮ್ಮ ಅಂತರ ಶತ್ರುಗಳು. ನಿಮ್ಮ ಶಕ್ತಿ ಗುರುತಿಸಿ, daily habits build ಮಾಡಿ, self-care ಮಾಡಿ. ನೀವೇ ನಿಮ್ಮ greatest asset.',
    keyword: 'ಆತ್ಮ ವಿಕಾಸ',
  },
  {
    chapter: 6, verse: 34,
    sanskrit: 'chanchalam hi manah krishna pramathi balavad drdham | tasyaham nigraham manye vayor iva sudushkaram ||',
    kannada: 'ಚಂಚಲಂ ಹಿ ಮನಃ ಕೃಷ್ಣ ಪ್ರಮಾಥಿ ಬಲವದ್ ದೃಢಮ್ |\nತಸ್ಯಾಹಂ ನಿಗ್ರಹಂ ಮನ್ಯೇ ವಾಯೋರಿವ ಸುದುಷ್ಕರಮ್ ||',
    meaning: 'ಹೇ ಕೃಷ್ಣ, ಮನಸ್ಸು ಚಂಚಲ, ಕ್ಷುಬ್ಧ, ಬಲಿಷ್ಠ ಮತ್ತು ದೃಢ. ಗಾಳಿಯನ್ನು ನಿಯಂತ್ರಿಸುವಷ್ಟೇ ಕಷ್ಟ ಅದನ್ನು ನಿಯಂತ್ರಿಸುವುದು.',
    application: 'Notification addiction, social media — ಆಧುನಿಕ "ಚಂಚಲ ಮನಸ್ಸು". 10 ನಿಮಿಷ meditation, phone-free time ಪ್ರಾರಂಭಿಸಿ. ಮನೋ ನಿಯಂತ್ರಣ = life control.',
    keyword: 'ಮನೋ ನಿಯಂತ್ರಣ',
  },
  // Chapter 7
  {
    chapter: 7, verse: 19,
    sanskrit: 'bahunam janmanam ante jnanavaan mam prapadyate | vasudevah sarvam iti sa mahatma sudurlabhah ||',
    kannada: 'ಬಹೂನಾಂ ಜನ್ಮನಾಮಂತೇ ಜ್ಞಾನವಾನ್ ಮಾಂ ಪ್ರಪದ್ಯತೇ |\nವಾಸುದೇವಃ ಸರ್ವಮಿತಿ ಸ ಮಹಾತ್ಮಾ ಸುದುರ್ಲಭಃ ||',
    meaning: 'ಅನೇಕ ಜನ್ಮಗಳ ಕೊನೆಯಲ್ಲಿ ಜ್ಞಾನಿಯು "ವಾಸುದೇವನೇ ಸರ್ವಸ್ವ" ಎಂದು ತಿಳಿದು ನನ್ನಲ್ಲಿ ಶರಣಾಗುತ್ತಾನೆ. ಅಂತಹ ಮಹಾತ್ಮ ಅತ್ಯಂತ ದುರ್ಲಭ.',
    application: 'ಪ್ರತಿ ಅನುಭವದಲ್ಲೂ ಭಗವಂತನ ದರ್ಶನ ಇದೆ. ಈ ಜ್ಞಾನ ಬಂದಾಗ ಜೀವನ ಸಂಪೂರ್ಣ ಬದಲಾಗುತ್ತದೆ. ಈ app ಬಳಸುತ್ತಿರುವ ನೀವು ಆ ಅಪರೂಪದ ಜ್ಞಾನಿ.',
    keyword: 'ಸರ್ವದಲ್ಲಿ ದೇವ',
  },
  {
    chapter: 7, verse: 3,
    sanskrit: 'manushyanam sahasreshu kashchid yatati siddhaye | yatatam api siddhanam kashchin mam vetti tattvatah ||',
    kannada: 'ಮನುಷ್ಯಾಣಾಂ ಸಹಸ್ರೇಷು ಕಶ್ಚಿದ್ಯತತಿ ಸಿದ್ಧಯೇ |\nಯತತಾಮಪಿ ಸಿದ್ಧಾನಾಂ ಕಶ್ಚಿನ್ಮಾಂ ವೇತ್ತಿ ತತ್ತ್ವತಃ ||',
    meaning: 'ಸಾವಿರ ಮನುಷ್ಯರಲ್ಲಿ ಒಬ್ಬನು ಸಿದ್ಧಿಗಾಗಿ ಪ್ರಯತ್ನಿಸುತ್ತಾನೆ; ಪ್ರಯತ್ನಿಸುವ ಸಿದ್ಧರಲ್ಲಿಯೂ ಒಬ್ಬನೇ ನನ್ನ ತತ್ತ್ವ ತಿಳಿಯುತ್ತಾನೆ.',
    application: 'ಆಧ್ಯಾತ್ಮಿಕ ಪ್ರಯಾಣ ಅಪರೂಪ, ಆದರೆ ನೀವು ಈ ದಾರಿ ಆಯ್ದಿದ್ದೀರಿ — ಮಹಾ ಭಾಗ್ಯ. ಪ್ರತಿ ದಿನ ಓದಿ, ಧ್ಯಾನಿಸಿ, ಸ್ವಯಂ ಪ್ರಶ್ನಿಸಿ.',
    keyword: 'ವಿರಳ ಸಾಧನೆ',
  },
  // Chapter 8
  {
    chapter: 8, verse: 7,
    sanskrit: 'tasmat sarveshu kaleshu mam anusmara yudhya cha | mayy arpita-mano-buddhir mam evaishyasy asamsayam ||',
    kannada: 'ತಸ್ಮಾತ್ ಸರ್ವೇಷು ಕಾಲೇಷು ಮಾಮನುಸ್ಮರ ಯುಧ್ಯ ಚ |\nಮಯ್ಯರ್ಪಿತಮನೋಬುದ್ಧಿರ್ಮಾಮೇವೈಷ್ಯಸ್ಯಸಂಶಯಮ್ ||',
    meaning: 'ಆದ್ದರಿಂದ ಎಲ್ಲ ಸಮಯದಲ್ಲೂ ನನ್ನನ್ನು ಸ್ಮರಿಸು ಮತ್ತು ಯುದ್ಧ ಮಾಡು. ಮನಸ್ಸು ಮತ್ತು ಬುದ್ಧಿ ನನ್ನಲ್ಲಿ ಅರ್ಪಿಸಿ — ನಿಸ್ಸಂದೇಹವಾಗಿ ನನ್ನನ್ನು ಸೇರುತ್ತೀ.',
    application: 'ಕೆಲಸ ಮಾಡುತ್ತಾ, ಮಕ್ಕಳೊಂದಿಗೆ ಆಟವಾಡುತ್ತಾ — ಭಗವಂತ ನೆನಪಿರಲಿ. "ಕೃಷ್ಣ" ಎಂಬ ಒಂದು ಶ್ವಾಸ ಸ್ಮರಣೆ ಸಾಕು. ಕೆಲಸ ಮಾಡುತ್ತಾ ದೇವರ ಸ್ಮರಣೆ — ಇದೇ ಯೋಗ.',
    keyword: 'ನಿರಂತರ ಸ್ಮರಣೆ',
  },
  // Chapter 9
  {
    chapter: 9, verse: 22,
    sanskrit: 'ananyash chintayanto mam ye janah paryupasate | tesham nityabhiyuktanam yoga-kshenam vahamy aham ||',
    kannada: 'ಅನನ್ಯಾಶ್ಚಿಂತಯಂತೋ ಮಾಂ ಯೇ ಜನಾಃ ಪರ್ಯುಪಾಸತೇ |\nತೇಷಾಂ ನಿತ್ಯಾಭಿಯುಕ್ತಾನಾಂ ಯೋಗಕ್ಷೇಮಂ ವಹಾಮ್ಯಹಮ್ ||',
    meaning: 'ಅನನ್ಯ ಭಕ್ತಿಯಿಂದ ನನ್ನ ಚಿಂತನೆ ಮಾಡುವ ಭಕ್ತರ ಯೋಗ-ಕ್ಷೇಮವನ್ನು ನಾನೇ ನೋಡಿಕೊಳ್ಳುತ್ತೇನೆ.',
    application: 'ಭಗವಂತನ ಮೇಲೆ ನಂಬಿಕೆ ಇಟ್ಟಾಗ ಚಿಂತೆ ಕಡಿಮೆ. ನಿಮ್ಮ ಕರ್ತವ್ಯ ಮಾಡಿ — ಬಾಕಿ ಅವನ ಜವಾಬ್ದಾರಿ. ಇದು ಸ್ವಾರ್ಥವಲ್ಲ, ಸಮರ್ಪಣೆ.',
    keyword: 'ಭಕ್ತ ರಕ್ಷಣೆ',
  },
  {
    chapter: 9, verse: 27,
    sanskrit: 'yat karoshi yad ashnasi yaj juhoshi dadasi yat | yat tapasyasi kaunteya tat kurusva mad-arpanam ||',
    kannada: 'ಯತ್ಕರೋಷಿ ಯದಶ್ನಾಸಿ ಯಜ್ಜುಹೋಷಿ ದದಾಸಿ ಯತ್ |\nಯತ್ತಪಸ್ಯಸಿ ಕೌಂತೇಯ ತತ್ಕುರುಷ್ವ ಮದರ್ಪಣಮ್ ||',
    meaning: 'ಯಾವುದನ್ನು ಮಾಡುತ್ತೀ, ತಿನ್ನುತ್ತೀ, ದಾನ ಮಾಡುತ್ತೀ, ತಪಸ್ಸು ಮಾಡುತ್ತೀ — ಅದನ್ನೆಲ್ಲ ನನಗೆ ಅರ್ಪಿಸು.',
    application: 'ಕೆಲಸ ಪ್ರಾರಂಭಿಸುವ ಮೊದಲು "ಈ ಕೆಲಸ ಭಗವಂತನಿಗೆ" ಎಂದು ಭಾವಿಸಿ. ಊಟ, ಕೆಲಸ, ಸೇವೆ — ಎಲ್ಲ ಅರ್ಪಣೆ. ಈ ಒಂದು ಬದಲಾವಣೆ ಇಡೀ ದಿನದ ಗುಣಮಟ್ಟ ಬದಲಿಸುತ್ತದೆ.',
    keyword: 'ಸರ್ವ ಅರ್ಪಣೆ',
  },
  // Chapter 10
  {
    chapter: 10, verse: 20,
    sanskrit: 'aham atma gudakesha sarva-bhutashaya-sthitah | aham adish cha madhyam cha bhutanam anta eva cha ||',
    kannada: 'ಅಹಮಾತ್ಮಾ ಗುಡಾಕೇಶ ಸರ್ವಭೂತಾಶಯಸ್ಥಿತಃ |\nಅಹಮಾದಿಶ್ಚ ಮಧ್ಯಂ ಚ ಭೂತಾನಾಮಂತ ಏವ ಚ ||',
    meaning: 'ಹೇ ಗುಡಾಕೇಶ, ನಾನು ಎಲ್ಲ ಜೀವಿಗಳ ಹೃದಯದಲ್ಲಿ ನೆಲೆಸಿರುವ ಆತ್ಮ. ನಾನೇ ಎಲ್ಲ ಭೂತಗಳ ಆದಿ, ಮಧ್ಯ ಮತ್ತು ಅಂತ.',
    application: 'ನಿಮ್ಮ ಪ್ರತಿ colleague, ಮಗು, ದೇಶಬಾಂಧವ — ಎಲ್ಲರಲ್ಲೂ ಆ ಒಂದೇ ಆತ್ಮ. ಈ ದೃಷ್ಟಿ ಬಂದಾಗ conflicts ಕಡಿಮೆ, empathy ಹೆಚ್ಚುತ್ತದೆ.',
    keyword: 'ಸರ್ವಾಂತರ್ಯಾಮಿ',
  },
  // Chapter 11
  {
    chapter: 11, verse: 33,
    sanskrit: 'tasmat tvam uttishtha yasho labhasva jitva shatrun bhunksva rajyam samrddham | mayaivaite nihatah purvam eva nimitta-matram bhava savyasachin ||',
    kannada: 'ತಸ್ಮಾತ್ ತ್ವಮುತ್ತಿಷ್ಠ ಯಶೋ ಲಭಸ್ವ\nಜಿತ್ವಾ ಶತ್ರೂನ್ ಭುಂಕ್ಷ್ವ ರಾಜ್ಯಂ ಸಮೃದ್ಧಮ್ |\nಮಯೈವೈತೇ ನಿಹತಾಃ ಪೂರ್ವಮೇವ\nನಿಮಿತ್ತಮಾತ್ರಂ ಭವ ಸವ್ಯಸಾಚಿನ್ ||',
    meaning: 'ಎದ್ದೇಳು, ಯಶ ಪಡೆ. ಶತ್ರುಗಳನ್ನು ಜಯಿಸಿ ಸಮೃದ್ಧ ರಾಜ್ಯ ಅನುಭವಿಸು. ಇವರೆಲ್ಲ ನನ್ನಿಂದ ಈಗಾಗಲೇ ಕೊಲ್ಲಲ್ಪಟ್ಟಿದ್ದಾರೆ — ನೀನು ನಿಮಿತ್ತ ಮಾತ್ರ.',
    application: 'ನೀವು ಕೇವಲ ಒಂದು instrument. ಇದು ಗೊತ್ತಾದಾಗ ಅಹಂಕಾರ ಕಡಿಮೆ, stress ಕಡಿಮೆ. Effort ನಿಮ್ಮದು — result ಭಗವಂತನದು.',
    keyword: 'ನಿಮಿತ್ತ',
  },
  // Chapter 12
  {
    chapter: 12, verse: 15,
    sanskrit: 'yasman nodvijate loko lokan nodvijate cha yah | harsha-amarsha-bhayodvegair mukto yah sa cha me priyah ||',
    kannada: 'ಯಸ್ಮಾನ್ನೋದ್ವಿಜತೇ ಲೋಕೋ ಲೋಕಾನ್ನೋದ್ವಿಜತೇ ಚ ಯಃ |\nಹರ್ಷಾಮರ್ಷಭಯೋದ್ವೇಗೈರ್ಮುಕ್ತೋ ಯಃ ಸ ಚ ಮೇ ಪ್ರಿಯಃ ||',
    meaning: 'ಯಾರಿಂದ ಜಗತ್ತು ಉದ್ವಿಗ್ನಗೊಳ್ಳುವುದಿಲ್ಲ, ಯಾರು ಜಗತ್ತಿನಿಂದ ಉದ್ವಿಗ್ನಗೊಳ್ಳುವುದಿಲ್ಲ — ಅವನು ನನಗೆ ಪ್ರಿಯ.',
    application: 'ಯಾರನ್ನೂ hurt ಮಾಡದವನು, ಯಾರಿಂದಲೂ hurt ಆಗದವನು — ಇದೇ ಭಕ್ತ ಲಕ್ಷಣ. Emotional maturity ಬೆಳೆಸಿ.',
    keyword: 'ಭಕ್ತ ಲಕ್ಷಣ',
  },
  // Chapter 13
  {
    chapter: 13, verse: 28,
    sanskrit: 'samam sarveshu bhuteshu tishthantam parameshvaram | vinashyatsv avinashyantam yah pashyati sa pashyati ||',
    kannada: 'ಸಮಂ ಸರ್ವೇಷು ಭೂತೇಷು ತಿಷ್ಠಂತಂ ಪರಮೇಶ್ವರಮ್ |\nವಿನಶ್ಯತ್ಸ್ವವಿನಶ್ಯಂತಂ ಯಃ ಪಶ್ಯತಿ ಸ ಪಶ್ಯತಿ ||',
    meaning: 'ನಾಶ ಆಗುತ್ತಿರುವ ಸರ್ವ ಜೀವಿಗಳಲ್ಲಿ ನಾಶರಹಿತ ಪರಮೇಶ್ವರ ಸಮನಾಗಿ ನೆಲೆಸಿರುವನು ಎಂದು ಕಾಣುವವನೇ ನಿಜ ದ್ರಷ್ಟ.',
    application: 'ಪ್ರತಿ ಮನುಷ್ಯನಲ್ಲಿ ದಿವ್ಯ ಆತ್ಮ ಇದೆ. ಈ ದೃಷ್ಟಿ ಬಂದಾಗ ಹೇಗೆ treat ಮಾಡುತ್ತೀರಿ ಎಂಬುದು ಸ್ವತಃ ಬದಲಾಗುತ್ತದೆ.',
    keyword: 'ದಿವ್ಯ ದೃಷ್ಟಿ',
  },
  // Chapter 14
  {
    chapter: 14, verse: 6,
    sanskrit: 'tatra sattvam nirmalatvat prakashakam anamayam | sukha-sangena badhnati jnana-sangena chanagha ||',
    kannada: 'ತತ್ರ ಸತ್ತ್ವಂ ನಿರ್ಮಲತ್ವಾತ್ ಪ್ರಕಾಶಕಮನಾಮಯಮ್ |\nಸುಖಸಂಗೇನ ಬಧ್ನಾತಿ ಜ್ಞಾನಸಂಗೇನ ಚಾನಘ ||',
    meaning: 'ಸತ್ತ್ವ ನಿರ್ಮಲವಾಗಿರುವುದರಿಂದ ಪ್ರಕಾಶ ಮತ್ತು ನಿರೋಗ ಕೊಡುತ್ತದೆ. ಸುಖ ಮತ್ತು ಜ್ಞಾನದ ಆಸಕ್ತಿಯಿಂದ ಬಂಧಿಸುತ್ತದೆ.',
    application: 'Sattvic ಆಹಾರ, ಸಾತ್ವಿಕ ವಿಚಾರ choose ಮಾಡಿ. ರಾತ್ರಿ ಚಿಂತಿಸಿ ಮಲಗದಿರಿ — ತಮಸ್ಸು. ಸಿಟ್ಟಿನಿಂದ ಕೆಲಸ ಮಾಡದಿರಿ — ರಜಸ್ಸು. Early sleep, healthy food — ಸಾತ್ವಿಕ ಜೀವನ.',
    keyword: 'ಗುಣ ತ್ರಯ',
  },
  // Chapter 15
  {
    chapter: 15, verse: 7,
    sanskrit: 'mamaivamsho jiva-loke jiva-bhutah sanatanah | manah-shashthaniindriyani prakrti-sthani karshati ||',
    kannada: 'ಮಮೈವಾಂಶೋ ಜೀವಲೋಕೇ ಜೀವಭೂತಃ ಸನಾತನಃ |\nಮನಃ ಷಷ್ಠಾನೀಂದ್ರಿಯಾಣಿ ಪ್ರಕೃತಿಸ್ಥಾನಿ ಕರ್ಷತಿ ||',
    meaning: 'ಜೀವಲೋಕದಲ್ಲಿ ಜೀವಿಗಳಾಗಿ ಇರುವ ಸನಾತನ ಜೀವಾತ್ಮಗಳು ನನ್ನದೇ ಅಂಶ.',
    application: 'ನೀವು ಭಗವಂತನ ಅಂಶ — ಈ ಅರಿವು ಬಂದಾಗ self-worth ಬದಲಾಗುತ್ತದೆ. ಮಕ್ಕಳಿಗೆ ಹೇಳಿ: ನೀನು divine. ಯಾವ ಕಷ್ಟ ಬಂದಾಗ "ನಾನು divine spark" ಎಂಬ ಸ್ಮರಣೆ ಶಕ್ತಿ ಕೊಡುತ್ತದೆ.',
    keyword: 'ದಿವ್ಯ ಅಂಶ',
  },
  // Chapter 16
  {
    chapter: 16, verse: 3,
    sanskrit: 'tejah ksama dhrtih shaucam adroho natimitata | bhavanti sampadam daivim abhijatasya bharata ||',
    kannada: 'ತೇಜಃ ಕ್ಷಮಾ ಧೃತಿಃ ಶೌಚಮದ್ರೋಹೋ ನಾತಿಮಾನಿತಾ |\nಭವಂತಿ ಸಂಪದಂ ದೈವೀಮಭಿಜಾತಸ್ಯ ಭಾರತ ||',
    meaning: 'ತೇಜಸ್ಸು, ಕ್ಷಮೆ, ಧೈರ್ಯ, ಶುದ್ಧತೆ, ದ್ರೋಹವಿಲ್ಲದಿರುವಿಕೆ ಮತ್ತು ಅಹಂಕಾರವಿಲ್ಲದಿರುವಿಕೆ — ಇವು ದೈವೀ ಸಂಪತ್ತಿನ ಲಕ್ಷಣ.',
    application: 'ಸ್ಪಷ್ಟ ನಿರ್ಧಾರ (ತೇಜ), ತಪ್ಪು ಕ್ಷಮಿಸು (ಕ್ಷಮಾ), ಕಠಿಣ ನಿರ್ಧಾರ ತಕ್ಕೋ (ಧೃತಿ), ಶುದ್ಧ ಆಚಾರ ಕಾಪಾಡು (ಶೌಚ) — ಇವೇ ದೈವೀ ಗುಣ.',
    keyword: 'ದೈವೀ ಸಂಪತ್ತು',
  },
  // Chapter 17
  {
    chapter: 17, verse: 15,
    sanskrit: 'anudvega-karam vakyam satyam priya-hitam cha yat | svadhyayabhyasanam chaiva van-mayam tapa uchyate ||',
    kannada: 'ಅನುದ್ವೇಗಕರಂ ವಾಕ್ಯಂ ಸತ್ಯಂ ಪ್ರಿಯಹಿತಂ ಚ ಯತ್ |\nಸ್ವಾಧ್ಯಾಯಾಭ್ಯಸನಂ ಚೈವ ವಾಙ್ಮಯಂ ತಪ ಉಚ್ಯತೇ ||',
    meaning: 'ಉದ್ವೇಗ ಉಂಟುಮಾಡದ, ಸತ್ಯ, ಪ್ರಿಯ ಮತ್ತು ಹಿತಕರ ಮಾತು ಮತ್ತು ಸ್ವಾಧ್ಯಾಯ — ಇವನ್ನು ವಾಕ್ ತಪಸ್ಸು ಎನ್ನುತ್ತಾರೆ.',
    application: 'ಯಾರಿಗೆ ಮಾತನಾಡಿದರೂ — ಮಾತು ಸತ್ಯ, ಪ್ರಿಯ, ಹಿತಕರ ಆಗಿರಲಿ. Feedback ಕೊಡಬಹುದು ಆದರೆ kindly. ಇದೇ ವಾಕ್ ತಪಸ್ಸು.',
    keyword: 'ವಾಕ್ ತಪಸ್ಸು',
  },
  // Chapter 18
  {
    chapter: 18, verse: 66,
    sanskrit: 'sarva-dharman parityajya mam ekam sharanam vraja | aham tvam sarva-papebhyo mokshayishyami ma shuchah ||',
    kannada: 'ಸರ್ವಧರ್ಮಾನ್ ಪರಿತ್ಯಜ್ಯ ಮಾಮೇಕಂ ಶರಣಂ ವ್ರಜ |\nಅಹಂ ತ್ವಾಂ ಸರ್ವಪಾಪೇಭ್ಯೋ ಮೋಕ್ಷಯಿಷ್ಯಾಮಿ ಮಾ ಶುಚಃ ||',
    meaning: 'ಎಲ್ಲ ಧರ್ಮಗಳನ್ನೂ ಬಿಟ್ಟು ನನ್ನೊಬ್ಬನ ಶರಣು ಹೋಗು. ನಾನು ನಿನ್ನನ್ನು ಎಲ್ಲ ಪಾಪಗಳಿಂದ ಮುಕ್ತಗೊಳಿಸುತ್ತೇನೆ — ಶೋಕಪಡಬೇಡ.',
    application: 'ಎಲ್ಲ anxiety, guilt, past mistakes — "ಕೃಷ್ಣ ನೀನೇ ನೋಡಿಕೋ" ಎಂದು ಬಿಟ್ಟುಬಿಡಿ. ಪ್ರಯತ್ನ ಮಾಡಿ — ಫಲ ಅವನಿಗೆ ಬಿಡಿ. ಗೀತೆಯ ಸಾರ: ಶರಣಾಗತಿ.',
    keyword: 'ಶರಣಾಗತಿ',
  },
  {
    chapter: 18, verse: 78,
    sanskrit: 'yatra yogeshvarah krishno yatra partho dhanur-dharah | tatra shreer vijayo bhutir dhruva neetir matir mama ||',
    kannada: 'ಯತ್ರ ಯೋಗೇಶ್ವರಃ ಕೃಷ್ಣೋ ಯತ್ರ ಪಾರ್ಥೋ ಧನುರ್ಧರಃ |\nತತ್ರ ಶ್ರೀರ್ವಿಜಯೋ ಭೂತಿರ್ಧ್ರುವಾ ನೀತಿರ್ಮತಿರ್ಮಮ ||',
    meaning: 'ಎಲ್ಲಿ ಯೋಗೇಶ್ವರ ಕೃಷ್ಣ ಮತ್ತು ಎಲ್ಲಿ ಬಿಲ್ಲು ಹಿಡಿದ ಅರ್ಜುನ ಇರುವನೋ — ಅಲ್ಲಿ ಸಂಪತ್ತು, ವಿಜಯ, ವೈಭವ ಮತ್ತು ಧ್ರುವ ನೀತಿ ಇದೆ.',
    application: 'ನೀವೂ ಅರ್ಜುನ — ಭಗವಂತನ ಮಾರ್ಗದರ್ಶನದಲ್ಲಿ ಕರ್ಮ ಮಾಡಿ. ಪ್ರಾರ್ಥನೆ + ಪ್ರಯತ್ನ = ವಿಜಯ. ಗೀತೆಯ ಕೊನೆ ಸಂದೇಶ: ನಂಬಿಕೆ ಮತ್ತು ಕರ್ಮ ಒಟ್ಟಾದಾಗ ಜಯ ಖಚಿತ.',
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
