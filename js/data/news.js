/*
  NEWS 資料（由舊到新排列）。
  新增消息時，把新物件加在陣列「最下面」。
  site.js 會自動反轉顯示，所以最後新增的消息會出現在 NEWS 最上方。

  欄位順序：
  1. title       ：News 大標題
  2. authors     ：作者
  3. paperTitle  ：論文 / 作品 / 獎項名稱
  4. venue       ：時間、地點、會議 / 單位
  5. translation ：中文翻譯或中文補充

  沒有的欄位留空字串 "" 即可。
*/

window.AICLAB_DATA = window.AICLAB_DATA || {};

window.AICLAB_DATA.news = [
  {
    title: "Good Performance Award",
    authors: "Jun-Ren Su and Te-Wen Liao,",
    paperTitle: "",
    venue: "2010 Nationwide Graduate-School-Level Full Custom Integrated Circuit Design Contest by Ministry of Education",
    translation: "(教育部全國大學校院積體電路設計競賽研究所全客戶設計組佳作，得獎學生：蘇俊仁、廖德文)"
  },
  {
    title: "Best Paper Award",
    authors: "T.-W. Liao, J.-R. Su, and C.-C. Hung,",
    paperTitle: "“A Low-Noise Wide Range Delta-Sigma Frequency Synthesizer for DTV Broadband,”",
    venue: "2010 IEEE International Conference on Electronics, Circuits, and Systems (ICECS), Athens, Greece, Dec. 12-15, 2010.",
    translation: ""
  },
  {
    title: "First-Place Award",
    authors: "Jun-Ren Su and Jin-Yi Kuo,",
    paperTitle: "",
    venue: "2011 Nationwide Graduate-School-Level Full Custom Integrated Circuit Design Contest by Ministry of Education.",
    translation: "(教育部全國大學校院積體電路設計競賽研究所全客戶設計組特優，得獎學生：蘇俊仁、郭駿逸)"
  },
  {
    title: "Best Paper Award",
    authors: "Te-Wen Liao, Jun-Ren Su, and Chung-Chih Hung,",
    paperTitle: "“Sub-Sampling Charge Pump and Random Pulsewidth Matching Technique for Frequency Synthesizer,”",
    venue: "2013 IEEE Midwest Symposium on Circuits and Systems (MWSCAS), Columbus, Ohio, USA, August 4~7, 2013.",
    translation: ""
  },
  {
    title: "Outstanding Paper Award",
    authors: "Chia-Min Chen, Yen-Wei Liu, and Chung-Chih Hung,",
    paperTitle: "“Fast Transient and High Current Efficiency Voltage Regulator with Hybrid Dynamic Biasing Technique,”",
    venue: "2015 Workshop on Synthesis And System Integration of Mixed Information Technologies (SASIMI), Yilan, Taiwan, March 16~17, 2015.",
    translation: ""
  },
  {
    title: "Golden Silicon Award",
    authors: "Z.-Y. Chen and C.-C. Hung,",
    paperTitle: "“A High Efficiency Continuous-Time Delta-Sigma Modulator with New Time-Domain Flash Quantizer,”",
    venue: "Macronix Educational Foundation, July 2015.",
    translation: "(陳宗益，“使用新型的時域快閃式量化器之高效率連續時間三角積分調變器，” 第十五屆旺宏金矽獎優勝獎，2015.)"
  },
  {
    title: "Excellent Design Award (Analog IC)",
    authors: "",
    paperTitle: "“A High Efficiency Continuous-Time Delta-Sigma Modulator with New Time-Domain Flash Quantizer,”",
    venue: "Chip Implementation Center (CIC), 2016.",
    translation: "(優等設計獎（類比），“使用新型的「時域快閃式量化器」之高效率連續時間三角積分調變器，” 國家晶片系統設計中心，2016.)"
  },
  {
    title: "Golden Silicon Award",
    authors: "H.-C. Chu and C.-C. Hung,",
    paperTitle: "“A Low-Cost Low-Power Dual-Slope Temperature Sensor,”",
    venue: "Macronix Educational Foundation, July 2016.",
    translation: "(朱行健，“一個低成本低功率雙斜率式溫度感測器，” 第十六屆旺宏金矽獎優勝獎，2016.)"
  },
  {
    title: "Extraordinary Excellence Award",
    authors: "",
    paperTitle: "“Multiple-Input Multiple-Output Smart Reconfigurable Battery Management System,”",
    venue: "National Program for Intelligent Electronics, Ministry of Science and Technology (MOST), September 2016.",
    translation: "(特優獎，“多輸入多輸出智慧型可重組態之電池管理系統，” 科技部智慧電子國家型科技計畫，2016.)"
  },
  {
    title: "Highlighted Paper in 2017 VLSI Circuit Symposium",
    authors: "",
    paperTitle: "“A Bone-Guided Cochlear Implant CMOS Microsystem Preserving Acoustic Hearing,”",
    venue: "2017 Symposium on VLSI Circuits, Kyoto, Japan, June 2017.",
    translation: ""
  },
  {
    title: "Paper in IEEE Transactions on Biomedical Engineering",
    authors: "",
    paperTitle: "“Design and In-Vivo Verification of a CMOS Bone-Guided Cochlear Implant Microsystem,”",
    venue: "",
    translation: ""
  },
  {
    title: "Paper in IEEE 2019 Transactions on Biomedical Circuits and Systems",
    authors: "",
    paperTitle: "“A 0.35-V 240-uW Fast-Lock and Low-Phase-Noise Frequency Synthesizer for Implantable Biomedical Applications,”",
    venue: "",
    translation: ""
  },
  {
    title: "Outstanding Paper Award",
    authors: "Yueh-Ru Lee, Chung-Chih Hung,",
    paperTitle: "“Design of 12-bit SAR ADCs with Analog Background Calibration Technique,”",
    venue: "2020 Symposium on Engineering, Medicine, and Biology Applications (SEMBA), Online, 2020.",
    translation: ""
  },
  {
    title: "Paper in IEEE 2020 Transactions on Biomedical Circuits and Systems",
    authors: "",
    paperTitle: "“A 0.3V 10b 3MS/s SAR ADC with Comparator Calibration and Kickback Noise Reduction for Biomedical Applications,”",
    venue: "",
    translation: ""
  },
  {
    title: "Best Paper Award",
    authors: "Shih-Hsing Wang, and Chung-Chih Hung,",
    paperTitle: "“Ultra-Low-Voltage Frequency Synthesizer and Successive-Approximation Analog-to-Digital Converter for Biomedical Applications,”",
    venue: "2021 IEEE Taipei Section.",
    translation: ""
  },
  {
    title: "Best Paper Award",
    authors: "Shih-Hsing Wang, and Chung-Chih Hung,",
    paperTitle: "“Ultra-Low-Voltage Frequency Synthesizer and Successive-Approximation Analog-to-Digital Converter for Biomedical Applications,”",
    venue: "2021 Symposium on Engineering, Medicine, and Biology Applications (SEMBA), Online, 2021.",
    translation: ""
  },
  {
    title: "Paper in IEEE 2021 Journal of Solid-State Circuits",
    authors: "",
    paperTitle: "“Design of a Bone-Guided Cochlear Implant Microsystem with Monopolar Biphasic Multiple Stimulation and Evoked Compound Action Potential Acquisition and Its In Vivo Verification,”",
    venue: "",
    translation: ""
  }
];
