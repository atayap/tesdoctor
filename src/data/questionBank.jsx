export const questionBank = [
  {
    id: 1,
    category: 'Kardiologi',
    icon: '❤️',
    question: 'Seorang pria 55 tahun datang dengan nyeri dada substernal yang menjalar ke lengan kiri dan rahang sejak 2 jam yang lalu. Nyeri tidak berkurang dengan istirahat. TD 90/60 mmHg, nadi 110x/menit, berkeringat dingin. Pemeriksaan penunjang prioritas pertama adalah...',
    options: [
      'Ekokardiografi transtorakal',
      'EKG 12 lead segera',
      'Rontgen thorax AP',
      'Pemeriksaan enzim jantung serial'
    ],
    answer: 1,
    level: 'Sedang',
    explanation: 'EKG 12 lead harus dilakukan dalam 10 menit pertama untuk mendeteksi STEMI dan menentukan tatalaksana reperfusi segera.'
  },
  {
    id: 2,
    category: 'Pulmonologi',
    icon: '🫁',
    question: 'Wanita 45 tahun post operasi hip replacement 5 hari lalu, tiba-tiba sesak napas berat, nyeri dada pleuritik, SpO2 85%. D-dimer sangat tinggi. Tatalaksana awal yang paling tepat adalah...',
    options: [
      'Nebulizer bronkodilator + kortikosteroid',
      'Antikoagulan segera (heparin/LMWH)',
      'Antibiotik spektrum luas IV',
      'Diuretik loop IV'
    ],
    answer: 1,
    level: 'Sulit',
    explanation: 'Emboli paru masif memerlukan antikoagulan segera. Pada kasus masif dengan hemodinamik tidak stabil, pertimbangkan trombolitik.'
  },
  {
    id: 3,
    category: 'Neurologi',
    icon: '🧠',
    question: 'Pria 68 tahun dibawa keluarga dengan kelemahan mendadak separuh tubuh kanan dan bicara pelo sejak 1 jam. Pemeriksaan skrining cepat yang tepat adalah...',
    options: [
      'FAST (Face Arm Speech Time) test',
      'Mini Mental State Examination',
      'Glasgow Coma Scale',
      'Romberg test'
    ],
    answer: 0,
    level: 'Mudah',
    explanation: 'FAST test adalah skrining cepat untuk stroke: Face drooping, Arm weakness, Speech difficulty, Time to call emergency.'
  },
  {
    id: 4,
    category: 'Trauma & Emergency',
    icon: '🚨',
    question: 'Pria 30 tahun korban kecelakaan motor, GCS 13, TD 80/50 mmHg, nadi 130x/menit, JVP meningkat, suara jantung redup. Diagnosis paling mungkin dan tindakan segera adalah...',
    options: [
      'Tension pneumothorax - Needle decompression',
      'Cardiac tamponade - Pericardiocentesis',
      'Massive hemothorax - Chest tube',
      'Flail chest - Intubasi segera'
    ],
    answer: 1,
    level: 'Sulit',
    explanation: 'Trias Beck (hipotensi, JVP meningkat, suara jantung redup) menunjukkan tamponade jantung. Pericardiocentesis adalah tindakan life-saving.'
  },
  {
    id: 5,
    category: 'Pediatri',
    icon: '👶',
    question: 'Bayi 8 bulan dengan demam tinggi 5 hari, ruam makulopapular, konjungtivitis bilateral, bibir merah dan pecah-pecah, limfadenopati servikal unilateral >1.5cm. Diagnosis dan risiko komplikasi utama adalah...',
    options: [
      'Campak - Ensefalitis',
      'Kawasaki Disease - Aneurisma koroner',
      'Scarlet fever - Glomerulonefritis',
      'Roseola infantum - Kejang demam'
    ],
    answer: 1,
    level: 'Sedang',
    explanation: 'Kriteria Kawasaki: demam ≥5 hari + 4 dari 5 kriteria. Komplikasi utama adalah aneurisma arteri koroner jika tidak diterapi IVIG.'
  },
  {
    id: 6,
    category: 'Obstetri & Ginekologi',
    icon: '🤰',
    question: 'Wanita hamil 32 minggu dengan TD 170/110 mmHg, proteinuria +3, nyeri kepala hebat, dan pandangan kabur. Tatalaksana prioritas adalah...',
    options: [
      'Observasi dan bed rest total',
      'MgSO4 + antihipertensi + terminasi kehamilan',
      'Antihipertensi oral saja',
      'Rujuk ke RS tersier tanpa tatalaksana awal'
    ],
    answer: 1,
    level: 'Sulit',
    explanation: 'Preeklampsia berat dengan impending eklampsia memerlukan MgSO4 sebagai profilaksis kejang, antihipertensi, dan pertimbangan terminasi.'
  },
  {
    id: 7,
    category: 'Endokrinologi',
    icon: '🔬',
    question: 'Pasien DM tipe 2, GDS 450 mg/dL, pH 7.1, keton urin +3, napas Kussmaul, kesadaran somnolen. Diagnosis dan cairan resusitasi awal adalah...',
    options: [
      'Hiperglikemia hiperosmolar - Dextrose 5%',
      'Ketoasidosis diabetik - NaCl 0.9%',
      'Laktat asidosis - Ringer laktat',
      'Hipoglikemia berat - Dextrose 40%'
    ],
    answer: 1,
    level: 'Sedang',
    explanation: 'KAD ditandai hiperglikemia, ketonemia, asidosis metabolik. Resusitasi cairan NaCl 0.9% 1-1.5L jam pertama + insulin drip.'
  },
  {
    id: 8,
    category: 'Infeksi & Tropis',
    icon: '🦠',
    question: 'Pria 25 tahun demam 7 hari, nyeri perut kanan bawah, lidah kotor, hepatosplenomegali, bradikardia relatif. Pemeriksaan penunjang paling spesifik adalah...',
    options: [
      'Widal test',
      'Kultur darah Salmonella typhi',
      'Hitung jenis leukosit',
      'USG abdomen'
    ],
    answer: 1,
    level: 'Mudah',
    explanation: 'Kultur darah adalah gold standard diagnosis demam tifoid. Widal kurang spesifik terutama di daerah endemis.'
  }
];

export const categoryColors = {
  'Kardiologi': 'from-red-500 to-pink-500',
  'Pulmonologi': 'from-blue-500 to-cyan-500',
  'Neurologi': 'from-purple-500 to-violet-500',
  'Trauma & Emergency': 'from-orange-500 to-amber-500',
  'Pediatri': 'from-green-500 to-emerald-500',
  'Obstetri & Ginekologi': 'from-pink-500 to-rose-500',
  'Endokrinologi': 'from-yellow-500 to-orange-500',
  'Infeksi & Tropis': 'from-teal-500 to-cyan-500'
};

export const difficultyColors = {
  'Mudah': 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
  'Sedang': 'bg-amber-500/20 text-amber-400 border-amber-500/30',
  'Sulit': 'bg-red-500/20 text-red-400 border-red-500/30'
};
