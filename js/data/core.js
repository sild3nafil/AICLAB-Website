/*
  AICLAB core/static content.
  一般日常更新 News / Members / Courses / Publications 不需要改這個檔案。
*/
window.AICLAB_DATA = {
  "settings": {
    "showFunded": false,
    "showDissertation": false,
    "labTitle": "Analog & Mixed-Signal Integrated Circuit Laboratory",
    "labShort": "AICLAB",
    "contactEmail": "nctuaiclab@gmail.com",
    "contactPhone": "+886-3-5712121 ext. 54615",
    "rooms": [
      "ED718 Analog and Mixed-Signal Integrated Circuit Laboratory",
      "ES710 Analog and Mixed-Signal Integrated Circuit Laboratory"
    ]
  },
  "professor": {
    "name": "Prof. Chung-Chih Hung",
    "department": "Department of Electronics and Electrical Engineering",
    "university": "National Chiao Tung University",
    "address": "1001 University Road, Hsinchu, 30010, Taiwan",
    "office": "ED836",
    "phone": "+886-3-5712121 ext. 54535",
    "fax": "+886-3-5710116",
    "email": "cchung@nycu.edu.tw",
    "image": "assets/professor_avatar.jpg"
  },
  "advisor": {
    "bio": [
      "Chung-Chih Hung (M'98-SM'07) received the B.S. degree in electrical engineering from National Taiwan University, Taipei, Taiwan, in 1989, and the M.S. and Ph.D. degrees in electrical engineering from The Ohio State University, Columbus, Ohio in 1993 and 1997, respectively.",
      "From 1997 to 2003, he worked for several IC design companies in San Jose, CA and San Diego, CA, where he held analog circuit design manager and director positions and successfully designed many chips in mass production. Since 2003, he has been with National Chiao Tung University (NCTU), Hsinchu, Taiwan, where he is currently a Professor in the Department of Electrical and Computer Engineering. He is the Co-Director of the Biomedical Electronics Translational Research Center (BETRC) , where several highlighted bio-electronics papers were published in recent ISSCC and VLSI Circuit Symposiums. Dr. Hung was the Chairman of Electrical Engineering and Computer Science Undergraduate Honors Program (EECSHP) in NCTU. He has served on the Steering Committees of the IEEE MWSCAS and technical program committees of several IEEE conferences. He and his students have won 3 Best Paper Awards at international conferences in 2010, 2013, and 2015. He has been the Deputy Editor-In-Chief of Analog Integrated Circuits and Signal Processing since 2013. Dr. Hung has authored/co-authored over 100 peer-reviewed papers and book chapters and holds several US patents. His research interests include the design of analog and mixed-signal integrated circuits for biomedical, power management, and communication applications."
    ],
    "education": [
        {
            "degree": "Ph.D.",
            "school": "The Ohio State University, Columbus, Ohio",
            "details": [
                "Ph.D. Dissertation ： “Low Voltage, Low Power CMOS Analog Circuit Design Techniques for Mobile, Portable VLSI Applications”",
                "Dissertation Advisor ： Prof. Mohammed Ismail (Sep.1993 - Mar.1997)"
            ]
        },
        {
            "degree": "M.S.E.E.",
            "school": "The Ohio State University, Columbus, Ohio",
            "details": [
                "M.S. Thesis ： “Electrical Characteristics of Polycrystalline Diamond Films” (Sep.1991 - Aug.1993)"
            ]
        },
        {
            "degree": "B.S.E.E.",
            "school": "National Taiwan University, Taipei, Taiwan (Sep.1985 - Jun.1989)",
            "details": []
        }
    ],

    "experience": [
        {
            "title": "Professor",
            "details": [
                "Department of Electrical and Computer Engineering, National Chiao Tung University, Hsinchu, Taiwan (Aug.2003- present)"
            ]
        },
        {
            "title": "Analog Design Director",
            "details": [
                "Analog Design Director Analog Group, Qualmaker, Inc., Fremont, California (Jul.2002- Jul.2003)"
            ]
        },
        {
            "title": "Analog Design Director",
            "details": [
                "Analog Design Group, Pixelworks, Inc., San Jose, California (Panstera, Inc. was acquired by Pixelworks, Inc.) (Feb.2001- Jun.2002)"
            ]
        },
        {
            "title": "Analog Design Manager",
            "details": [
                "Analog Design Group, Panstera, Inc., San Jose, California (Nov.1999- Jan.2001)"
            ]
        },
        {
            "title": "Analog Design Engineer, Staff Engineer",
            "details": [
                "ASIC Group, Prominent Communications, Inc., San Diego, California (Aug.1998- Oct.1999)"
            ]
        },
        {
            "title": "Analog Design Engineer, Sr. MTS",
            "details": [
                "Analog Technology Group, S3 Incorporated, Santa Clara, California (May.1997- Aug.1998)"
            ]
        },
        {
            "title": "Visiting Research Associate",
            "details": [
                "Electronic Circuit Design Lab, Helsinki University of Technology, Espoo, Finland (Nov.1995 - Jul.1996)"
            ]
        },
        {
            "title": "Analog Design Engineer (Summer Internship)",
            "details": [
                "Analog Integrated Circuit Design Group, Cirrus Logic Inc., Fremont, California (Jul.1995 - Oct.1995)"
            ]
        }
    ]
  },
  "researchCards": [
    {
      "id": "OTA",
      "title": "High-Linearity Operational Transconductance Amplifier (OTA)",
      "image": "assets/1-OTA.png"
    },
    {
      "id": "Filter",
      "title": "Wide Tuning Range Continuous-Time Gm-C Filter",
      "image": "assets/2-filter.jpg"
    },
    {
      "id": "PLL",
      "title": "Low-Spur Frequency Synthesizer / Phase-Locked Loop",
      "image": "assets/3-PLL.JPG"
    },
    {
      "id": "PIC",
      "title": "Power Management Integrated Circuit",
      "image": "assets/4-PIC.jpg"
    },
    {
      "id": "DSM",
      "title": "Wide-Bandwidth Continuous-Time Delta-Sigma Modulator",
      "image": "assets/5-ADC.png"
    },
    {
      "id": "DAC",
      "title": "Low-Glitch Current-Steering Digital-to-Analog Converter",
      "image": "assets/6-DAC.jpg"
    },
    {
      "id": "Sensor",
      "title": "Low-Power Temperature Sensor",
      "image": "assets/7-sensor2.png"
    },
    {
      "id": "SAR",
      "title": "High-Resolution Successive Approximation Register (SAR) ADC",
      "image": "assets/8-SAR2.jpg"
    }
  ],
  "interests": [
    {
      "id": "OTA",
      "title": "High-Linearity Operational Transconductance Amplifier (OTA)",
      "image": "assets/1-OTA2.jpg",
      "paragraphs": [
        "The operational transconductance amplifier (OTA), or transconductor, is one of the most important building blocks in analog circuits. The transconductor can be used for voltage-controlled oscillator (VCO), Gm-C filter, continuous-time sigma-delta modulator, and multiplier. In modern nanometer technology, short channel effects will degrade the ideal square law equation of the saturation–region operation, affect the linearity performance of the transconductor, and thus more suitable solutions should be investigated.",
        "The transconductor linearity is best enhanced with different operation regions of the MOS device, especially when operating from a low supply. The MOSFETs working in different operation regions with suitable parameters have been used to achieve the cancellation of second order terms of the transconductance for high linearity. Also, by using two cross coupling pseudo-differential pairs and the source degeneration structure, the nonlinearity caused by short channel effect from small feature size can be minimized. The short channel effect was compensated and minimized for several different architectures with high linearity performance under low supply voltage. The speed of the transconductors has also been enhanced while still maintaining its excellent linearity performance."
      ]
    },
    {
      "id": "Filter",
      "title": "Wide Tuning Range Continuous-Time Gm-C Filter",
      "image": "assets/2-filter2.jpg",
      "paragraphs": [
        "The continuous-time Gm-C filters have been widely used in various high speed applications, such as high data-rate read channel hard disks, wireline and wireless communications. For wireless communication application, recent demand for multi-standard transceivers calls for adopting direct-conversion architectures to achieve the highest level of integration and for ease of system design. However, an array or a stack of channel selection filters in a multi-standard radio design may not be power-efficient and would need large chip areas. Therefore, there is a strong motivation to realize a single baseband channel select filter such that it meets the requirements of multi-mode applications.",
        "Several multi-mode channel selection filters under advanced CMOS process have been proposed for the system-on-a-chip strategy, based on the high-performance transconductors. The circuit design not only combines several standards in a wireless communication system, but also reduces the required chip area. The filter designs with low supply voltage introduces a very wide tuning range channel selection filter compared with previous works. Besides, a 1GHz 4th-order equiripple linear-phase Gm-C low-pass filter, exhibiting the widest bandwidth reported in 0.18um CMOS process, has also been proposed. A high speed OTA based on the inverter structure is realized. Transconductance tuning can be achieved by adjusting the bulk voltage using the Deep-NWELL technology. The automatic tuning circuit was also designed to compensate for the process and temperature variation and relaxes the speed requirement of the tuning blocks."
      ]
    },
    {
      "id": "PLL",
      "title": "Low-Spur Frequency Synthesizer/Phase-Locked Loop",
      "image": "assets/3-PLL.JPG",
      "paragraphs": [
        "Phase-locked loops (PLLs) are widely used to generate high-accuracy clocks on chip. A clock with high spectral purity is required in many applications, such as in communication systems to up-convert and down-convert the wanted signals, and in analog-to-digital converts (ADCs) to accurately define the sampling moments. One of the major sources of noise reducing the spurious-free dynamic range (SFDR) is the switching noise from the charge pump (CP) at the reference frequency. The switching noise modulates the control voltage and hence the output frequency of the voltage-controlled oscillator (VCO). Two tones that reduce the system performance appears at the upper and lower sidebands around the carrier. A narrow loop bandwidth can be used to suppress the ripple, thereby reducing the VCO spur level. However, the PLL needs more locking time and a larger LPF area, which is difficult to implement in the SOC design. A large bandwidth can offer a fast locking time and reduce the on-chip filter area, but it also reduces the sensitivity of the VCO output.",
        "In order to alleviate the tradeoff between low spur and large bandwidth, several novel architectures has been proposed by exploiting randomly selected PFD, random pulsewidth matching (RPWM), and sub-sampling charge pump (SSCP) to achieve low-reference-spur PLLs. Multiple PFDs are utilized to be randomly selected so as to randomize the CP output ripples. The RPWM is used to generate the matched CP pulsewidth, and randomize and average the ripples on the control voltage of the VCO. An SSCP is also utilized to reduce ripples on the control voltage in order to achieve a low spur level and relatively smooth spectrum. Through the randomization and average of the pulsewidth and the reduction of current mismatch, the frequency synthesizer can reduce the ripples on the control voltage of the voltage-controlled oscillator in order to reduce the reference spur at the output of the phase-locked loop."
      ]
    },
    {
      "id": "PIC",
      "title": "Power Management Integrated Circuit",
      "image": "assets/4-PIC.jpg",
      "paragraphs": [
        "Smart handheld devices are becoming increasingly popular. Different types of power management circuits are placed in handheld devices to provide system circuits with stable power supply. Integrated circuits, such as multimedia, consumer electronics, processor chips, and SOCs, require supplies from power management circuits with various structures based on the circuit specifications of each sub-block. Several types of power management circuits have been proposed, including capacitor-less low-dropout (LDO) regulators, single-inductor multiple-output boost converters, dual-output switched-capacitor DC–DC converters, and so on.",
        "An output-capacitorless LDO voltage regulator that achieves fast transient responses by hybrid dynamic biasing is proposed. The hybrid dynamic biasing in the proposed transient improvement circuit is activated through capacitive coupling. The proposed transient improvement circuit senses the LDO output change so as to increase the bias current instantly. A freewheel-charge-pump-controlled (FCPC) design is introduced for a single-inductor multiple-output (SIMO) DC–DC converter. By applying the FCPC technique, the freewheel switching time is reused, and two extra charge-pump outputs are provided by time recycling, with no cost in time sequences. The converter has two step-up outputs and two charge-pump outputs that can be higher than the input supply. An inductorless dual-output switched-capacitor DC–DC converter employing pseudo-three-phase swap-and-cross control (PTPSCC) and an amplitude modulation mechanism (AMM) is presented. The AMM circuit scales the amplitudes of the driving signals for the switches according to the loading conditions in order to minimize switching losses. To reduce output ripples, average charge distribution, and improve load regulation, the PTPSCC circuit continuously switches power transistors to deliver enough charge to the outputs by keeping at least one flying capacitor connected to each output."
      ]
    },
    {
      "id": "DSM",
      "title": "Wide-Bandwidth Continuous-Time Delta-Sigma Modulator",
      "image": "assets/5-ADC.png",
      "paragraphs": [
        "Recently, the demands for analog-to-digital converters (ADCs) in wireless standards, such as LTE-A, have increased, which has pushed ADC bandwidth up to a few tens of megahertz (MHz) and resolution to more than 10 bits. As compared with Nyquist rate ADCs, continuous-time delta-sigma (CT-ΔΣ) modulators are particularly suited in wireless receivers due to several attractive features, like implicit anti-aliasing filter and resistive input impedance. Applying CT circuits in the loop filter can relax the speed and power requirements of the analog circuits in ΔΣ modulators, as compared with discrete-time (DT) counterparts. CT-ΔΣ modulators can also operate at high speed with low power consumption.",
        "A power-efficient realization of a third-order continuous-time delta-sigma modulator with 3-bit time-domain flash quantizer (TDFQ) and data-weighted averaging (DWA) based on the shifter output and input is presented. Using the time-domain quantizer can overcome design issues in low voltage supply during CMOS downscaling. The CT-ΔΣ modulator uses the proposed TDFQ instead of a voltage-domain quantizer to reduce power consumption. The proposed TDFQ solves the linearity problem of the delay-based voltage-to-time converter (VTC) without calibration circuit while also increasing the quantizer input range and saving energy. Moreover, in order to reduce the mismatch effects of a multibit DAC and achieve low power consumption, implementation of a low-power DWA circuit is proposed without using a digital adder to calculate pointer for controlling barrel shift circuit."
      ]
    },
    {
      "id": "DAC",
      "title": "Low-Glitch Current-Steering Digtal-to-Analog Converter",
      "image": "assets/6-DAC.jpg",
      "paragraphs": [
        "The Current-steering digital-to-analog converter (DAC) is a good candidate for high-speed DAC applications because it can drive low impedance directly with good linearity, and without needing high-speed buffers. Current-steering DACs are based on an array of current sources that are switched to the output which is connected with 50 ohm resistor, and the differential architecture has often been used because even-orders errors could be eliminated. Unary and segmented DAC architectures need binary-to-thermometer decoders and delay cells, which increase circuit complexity and digital power consumption, so they come at cost (area, power, complexity, …) for high-speed and high-resolution DACs. Accounting for power consumption, chip size, and circuit complexity, the binary-weighted architecture is still a good candidate for medium-to-high resolution and sampling rate. It achieves both static and dynamic specifications at low cost.",
        "A 10-bit high-speed and low-glitch pure binary-weighted current-steering DAC is proposed. In general, the largest glitch is generated during major carry transitions (011...1 à 100...0) because all bits are switched and timing skews exist among different current switches for binary-weighted DACs. The proposed converter uses variable-delay buffers to compensate for the delay difference among different bits, and to reduce glitch energy and improve spurious-free dynamic range (SFDR). The other method of reducing timing-skew among different bits is also proposed. The calculation method of dynamic capacitance was used to estimate the input capacitance of the current switches more precisely, and capacitance compensation was made for the input capacitance among different bits. Because the area of current-steering DAC is dominated by the size of current source arrays, a new architecture of current source arrays was designed to reduce the chip area without digital calibration. A new architecture of 12-bit binary-weighted current-steering DAC with dual reference currents is presented. Instead of 4096 unit current cells required for conventional 12-bit DAC, the proposed design uses only 192 unit current sources, and the silicon area of the generation circuit of two reference currents is very compact as well. The core area of the 12-bit DAC is almost the same as that of a conventional 10-bit DAC. Besides, the output impedance of the unit current-source transistor can be reduced to 1/32 that of the conventional DAC. This architecture has the advantages of compact area and low power."
      ]
    },
    {
      "id": "Sensor",
      "title": "Low-Power Temperature Sensor",
      "image": "assets/7-sensor2.png",
      "paragraphs": [
        "Along with the demand from consumer electronic products, portable devices industries, and internet of things (IoT), temperature monitoring and thermal management systems have been developed rapidly, which can be used for environment temperature monitoring, risk control of thermal damage, and manufacture yield control. For these applications, the temperature sensor is one of the very important elements, especially that on-chip temperature sensors can gain the advantages of low fabrication cost, small dimension, low power dissipation, and elimination of the off-chip thermocouple.",
        "A current-mode dual-slope CMOS temperature sensor is presented. It employs a proportional-to-absolute-temperature (PTAT) current generator, which operates in the sub-threshold region, and a novel temperature-insensitive CMOS inverter, replacing a traditional voltage comparator for power saving, to create PTAT pulse width. A binary counter is then utilized to quantize the pulse to a digital output value. It achieves good temperature accuracy over the common industrial temperature range by utilizing second-order curvature correction, and great temperature resolution. The utilized dual-slope architecture has the advantages of compactness, power-saving, and high design flexibility."
      ]
    },
    {
      "id": "SAR",
      "title": "High-Resolution Successive Approximation Register (SAR) ADC",
      "image": "assets/8-SAR2.jpg",
      "paragraphs": [
        "With the progress of the process technology, SAR ADCs achieving lower power dissipation can be applied to wide bandwidth system with medium resolution. The primary sources of power consumption in SAR ADCs are the capacitive digital-to-analog converter (DAC), comparator, and SAR logic control circuit, among which the capacitive DAC dominates the overall power dissipation. To improve the power dissipation, many techniques were investigated by improving the power efficiency of the capacitive DAC. The Vcm-based charge recovery technique achieves 33.4% reduction in switching energy compared with the monotonic switching technique, whereas 50.1% reduction is achieved by the method of switchback switching. The split-capacitor Vcm-based capacitor-switching scheme reduces the switching energy by 58.27%. A high energy-efficient switching scheme is proposed. The proposed switching scheme reduces the energy dissipation by 75% compared with the monotonic switching technique. In addition, the total capacitance in the capacitive DAC is reduced by 50%.",
        "At the resolution of 10 bits and beyond, the precision of the SAR ADC is limited by the accuracy of the comparator. There were many methods to improve the accuracy of the comparator, such as auto zeroing, offset storage, and digital cancellation. In our study, an offset calibration technique is proposed to enhance the resolution of the SAR ADC."
      ]
    }
  ],
  "dissertations": [
    {
      "title": "Ph.D. Dissertation",
      "items": [
        "Tien-Yu Lo, “High Performance CMOS Transconductors and Gm-C Filters for Wireless Communications and Wireline Systems,” National Chiao Tung University, Ph.D. Dissertation, 2007.",
        "Te-Wen Liao, “Low Reference-Spur and Low Phase-Noise Frequency Synthesizers for Wireless Communication Systems,” National Chiao Tung University, Ph.D. Dissertation, 2012.",
        "Chia-Min Chen, “Integrated Power Management Circuits for Smart Handheld Devices,” National Chiao Tung University, Ph.D. Dissertation, 2012.",
        "Jun-Ren Su, “All-Digital Fast-Locking Pulsewidth Controlled Circuits with Programmable Duty Cycle,” National Chiao Tung University, Ph.D. Dissertation, 2013.",
        "Fang-Ting Chou, “High-Performance Binary-Weighted Digital-to-Analog Converters,” National Chiao Tung University, Ph.D. Dissertation, 2014.",
        "Zong-Yi Chen, “A Continuous-Time Delta-Sigma Modulator Using Time-Domain Flash Quantizer and Modified DWA Implementation,” National Chiao Tung University, Ph.D. Dissertation, 2015.",
        "Zhe-Yang Huang, “RF Receivers for Ultra-Wideband Communication Systems,” National Chiao Tung University, Ph.D. Dissertation, 2016.",
        "Hsing-Chien Chu, \"A Low-Power Current-Mode Dual-Slope CMOS Temperature Sensor,\" National Chiao Tung University, Ph.D. Dissertation, 2017.",
        "Shih-Hsing Wang, \"Ultra-Low-Voltage Frequency Synthesizer and Successive-Approximation Analog-to-Digital Converter for Biomedical Applications,\" National Chiao Tung University, Ph.D. Dissertation, 2019.",
        "Chung-Cheng Su, \"Design of Power Management Circuits for Portable Products,\" National Chiao Tung University, Ph.D. Dissertation, 2019."
      ]
    },
    {
      "title": "M.S. Thesis",
      "items": [
        "Chun-Yueh Yang, “1.5V Wide-Band Low Distortion Channel Selection Filter,” National Chiao Tung University, M.S. Thesis , 2005.",
        "Chun-Hong Chiu, “10Gb/s Clock and Data recovery circuit with improved MCML latch,” National Chiao Tung University, M.S. Thesis, 2005.",
        "Chia-Wei Chang, “10-Bit 80MHz Pipelined Analog-to-Digital Converter and CMOS Bandgap Reference Circuit,” National Chiao Tung University, M.S. Thesis, 2005.",
        "San-Yi Lee, “A fifth-order gm-C filter with large differential input signals and wide common-mode voltage ranges,” National Chiao Tung University, M.S. Thesis, 2005.",
        "Chih-Lun Chuang, “A 1V 3GHz Spread Spectrum Clock Generator for Serial ATA II,” National Chiao Tung University, M.S. Thesis, 2005.",
        "Po-Hsuan Huang, “A Low-Dropout Regulator with Negative Active-Feedback Frequency Compensation,” National Chiao Tung University, M.S. Thesis, 2006.",
        "Chia-Tai Yang, “Low Power Low Distortion Audio Delta-Sigma DAC,” National Chiao Tung University, M.S. Thesis, 2006.",
        "Cheng-Han Lin, “The Design and Implementation of Low Power Third-Order Continuout-Time Sigma-Delta Modulator,” National Chiao Tung University, M.S. Thesis, 2006.",
        "Tsung-Yen Tsai, “A 12-bit 500-MSamples/s Current-Steering CMOS D/A Converter,” National Chiao Tung University, M.S. Thesis, 2006.",
        "Chun-Ta Ho, “10-Bit 200MHz Double-Sampling Pipelined Analog-to-Digital Converter,” National Chiao Tung University, M.S. Thesis, 2006.",
        "Lin-Chia Huang, “Delta-Sigma Frequency Synthesizer for DTV Broadband RF Tuner,” National Chiao Tung University, M.S. Thesis, 2006.",
        "Chien-Ping Hsueh, “A GM-C filter Design Methodology for Mass Production,” National Chiao Tung University, M.S. Thesis, 2006.",
        "Ming-Tze Lin, “Configurable Dual-mode Low-distortion A/D Converter,” National Chiao Tung University, M.S. Thesis, 2007.",
        "Cheng-Sheng Kao, “Third-Order GM-C Filter with rail-to-rail input common-mode voltage,” National Chiao Tung University, M.S. Thesis, 2007.",
        "Chien-Hao Chiu, “A CMOS Pipelined Analog-to-Digital Converter with Capacitor-Mismatch Calibration Technique,” National Chiao Tung University, M.S. Thesis, 2007.",
        "Kuo-Hsi Wu, “Implementation of the Continuous-Time Transconductor-Capacitor Delta-Sigma modulator,” National Chiao Tung University, M.S. Thesis, 2007.",
        "Chung-Sian Fu, “Low Power and Low Distortion Filterless Class D Power Amplifier,” National Chiao Tung University, M.S. Thesis, 2007.",
        "Hsu-Yu Huang, “High Output-Power High Linearity CMOS Class AB Audio Amplifier with Quiescent Current Control,” National Chiao Tung University, M.S. Thesis, 2007.",
        "Chia-Min Chen, “A New Frequency Compensated Low-Dropout Voltage Regulator with Wide Stable Range and High Precision,” National Chiao Tung University, M.S. Thesis , 2007.",
        "Chu-Wei Hsia, “An 8-bit 100MS/s CMOS Pipelined ADC with Improved Loading-Free Architecture,” National Chiao Tung University, M.S. Thesis, 2008.",
        "Chih-Lung Kuo, “High Speed Transconductance-C Continuous-Time Filters for UWB and HDD Systems,” National Chiao Tung University, M.S. Thesis, 2008.",
        "Wen-Lin Yang, “Hybrid Sigma-Delta Modulator with Digital Error Truncation,” National Chiao Tung University, M.S. Thesis, 2008.",
        "Yung-Chou Ling, “A Continuous-Time DSM Using Improved Zero-Order loop Compensation with Semi-Uniform Quantization,” National Chiao Tung University, M.S. Thesis, 2008.",
        "Feng-Hsiang Chiu, “Design and Analysis of A DLL-based Clock Generator for Dynamic Frequency Scaling,” National Chiao Tung University, M.S. Thesis, 2008.",
        "Chieh-Jen Huang, “A 3rd-order Delta-Sigma Digital to Analog Converter for Audio Application,” National Chiao Tung University, M.S. Thesis, 2008.",
        "Wei-Shin Chang, “12-bit 500MSample/s Current-Steering CMOS D/A Converter with Dual-Segment Thermometer-Code Architecture,” National Chiao Tung University, M.S. Thesis, 2008.",
        "Yi-Wei Pai, “12-bit 250MSample/s Current-Steering CMOS D/A Converters with Partial Random Element Matching,” National Chiao Tung University, M.S. Thesis, 2008.",
        "De-Wen Liao, “Low-Noise Delta-Sigma Frequency Synthesizers for DTV and WIMAX Applications,” National Chiao Tung University, M.S. Thesis, 2008.",
        "Shin-Jye Hsu, “High linearity Transconductance-C Continuous-Time Filter for IEEE 802.11 Wireless Local Area Networks,” National Chiao Tung University, M.S. Thesis , 2009.",
        "Chao-Liang Chien, “CMOS Operational Transconductor Amplifiers with Linearity Improving by HD3 Feedforward,” National Chiao Tung University, M.S. Thesis, 2009.",
        "Sheng-Wen Huang, “A Fourth-Order Feedforward Continuous-Time Delta-Sigma ADC with 3MHz Bandwidth,” National Chiao Tung University, M.S. Thesis, 2009.",
        "Shang-Shiun Li, “Data converters for Bluetooth and LCD column driver applications,” National Chiao Tung University, M.S. Thesis, 2009.",
        "Kai-Ping Ou, “High Voltage Current-Mode Buck DC-DC Converter with Wide Load Range,” National Chiao Tung University, M.S. Thesis, 2009.",
        "Shih-Tung Cheng, “High linearity CMOS transconductors with triode-region pseudo-differential input pair,” National Chiao Tung University, M.S. Thesis, 2010.",
        "Jun-Ye Lin, “High-Speed Linear Operational Transconductance Amplifiers for wireless and HDD systems,” National Chiao Tung University, M.S. Thesis, 2010.",
        "Chia-Wei Chen, “CMOS Operational Transconductance Amplifiers with Linearity Improving by Flipped Voltage Follower,” National Chiao Tung University, M.S. Thesis, 2010.",
        "Kai- Hsiu Hsu, “Freewheel Charge-Pump Controlled Single-Inductor Multiple-Output Step-Up DC-DC Converter,” National Chiao Tung University, M.S. Thesis, 2010.",
        "Ren-Wei Li, “Data Converters for PRML Read Channel and LCD Column Driver Applications,” National Chiao Tung University, M.S. Thesis, 2010.",
        "Jui-Ming Chen, “1.5Gb/s Clock and Data Recovery Circuit,” National Chiao Tung University, M.S. Thesis , 2011.",
        "Wei-Hsiu Chang, “High-Speed High-Linearity Operational Transconductance Amplifiers,” National Chiao Tung University, M.S. Thesis , 2011.",
        "Chi-Jen Su, “High Performance DC-DC Converters for Portable Application,” National Chiao Tung University, M.S. Thesis, 2011.",
        "Jin-Yi Kuo, “A Discrete-time Complex Delta-Sigma A/D Converter with Time Division and Programmable Full-Scale for Wireline Application,” National Chiao Tung University, M.S. Thesis, 2011.",
        "Tung-Wei Tsai, “Slew-Rate Enhancement Low-Dropout Regulators with Low Quiescent Current and Wide Stable Range,” National Chiao Tung University, M.S. Thesis, 2011.",
        "Che-Yu Lu, “Linearity-Improved Operational Transconductance Amplifiers,” National Chiao Tung University, M.S. Thesis , 2012.",
        "Mu-lee Huang, “Full-Custom All-Digital Phase-Locked Loops for Clock Generator Application,” National Chiao Tung University, M.S. Thesis , 2012.",
        "Yi-An Chen, “Lithium Battery Charger with Accurate Control and Switched-Capacitor DC-DC Converter by Threshold Voltage Switching For Portable Application,” National Chiao Tung University, M.S. Thesis , 2012.",
        "Kuo-Chih Lin, “A 12-bit 200MSample/s Current-Steering CMOS D/A Converter with Partial Random Matching,” National Chiao Tung University, M.S. Thesis , 2012.",
        "Teh-Lun Wu, “A Correlation-Based Digital Background Calibrated ADC with Wide Input Range,” National Chiao Tung University, M.S. Thesis , 2012.",
        "Chi-Che Lee, “All-Digital Wide-Range Pulsewidth Controlled Circuits with Programmable Duty Cycle,” National Chiao Tung University, M.S. Thesis , 2013.",
        "Chun-Yen Chiang, “High-efficiency lithium battery switching charger with current-mode smooth transition circuit,” National Chiao Tung University, M.S. Thesis , 2013.",
        "Yen-Hsu Chen, “Design of Continuous-time Delta-Sigma A/D Converters for Bluetooth System and Cochlear Prosthesis,” National Chiao Tung University, M.S. Thesis , 2013.",
        "Yu-Hua Huang, “Low-Power CMOS BandPass Filter for Application of Cochlear Prosthesis,” National Chiao Tung University, M.S. Thesis , 2013.",
        "Yan-Bang Xiao, “An All-Digital Phase-Locked Loop Using a Time-Amplifier TDC with Calibration mechanism,” National Chiao Tung University, M.S. Thesis , 2014.",
        "Chen-Cheng Tu, “A High Efficiency Non-inverting Buck-Boost Converter with Dynamic Ramp Generator for Fast Transient Response,” National Chiao Tung University, M.S. Thesis , 2014.",
        "Ju-Han Cheng, “An All-Digital Phase-Locked Loop Using Multi-Stage TDC with 1ps Minimum Resolution,” National Chiao Tung University, M.S. Thesis , 2014.",
        "Jui-Yu Hsu, “Low Power Continuous-time Sigma-Delta A/D Converters for Cochlear Prosthesis System,” National Chiao Tung University, M.S. Thesis , 2014.",
        "Chung-Hsuan Wei, “A Wide Load-Range Synchronous Dual-Mode Boost Regulator with enhanced Light-Load Efficiency and Suppressed Output Ripple,” National Chiao Tung University, M.S. Thesis , 2015.",
        "Ya-Jen Hsieh, “Low-Power Low-Distortion Preamplifier Systems for Cochlear Prosthesis Application,” National Chiao Tung University, M.S. Thesis , 2015.",
        "Yi-Hsiang Hua, “A Fast-Locking All-Digital PLL with 1ps resolution TDC using Calibrated Time Amplifier and Interpolation DCO,” National Chiao Tung University, M.S. Thesis , 2015.",
        "Yen-Wei Liu, “A Dual-Input and Charging-Time Improvement Lithium Battery Switching Charger with Current-Mode Smooth Transition,” National Chiao Tung University, M.S. Thesis , 2015.",
        "Jia-Ni Lin, “A Delta-Sigma A/D Converter with Novel Data-Weighted Averaging Algorithm for Cochlear Prosthesis System,” National Chiao Tung University, M.S. Thesis , 2015.",
        "Tzu-Chieh Lin, “High-Linearity Low-Power CMOS Bandpass Filter for Cochlear Application,” National Chiao Tung University, M.S. Thesis , 2016.",
        "Yu-Hsiang Lin, “A High-PSRR Low-Dropout Voltage Regulator,” National Chiao Tung University, M.S. Thesis , 2016.",
        "Chien-Hsun Lee, “Wide-Range Low-Power CMOS BandPass Filter for ECG Application,” National Chiao Tung University, M.S. Thesis , 2016.",
        "Yu-Kai Chen, “Efficiency-Improved Low Input-Voltage Boost Converter with Pulse Frequency Modulation Control for Thermoelectric Energy,” National Chiao Tung University, M.S. Thesis , 2016.",
        "Po-Han Chen, “Area-Efficient Fast-Locking All Digital Phase-Locked Loops,” National Chiao Tung University, M.S. Thesis , 2016.",
        "Cheng-Chung Lin, “All-Digital Phase-Locked Loops with Multiple-Delay Switching TDC,” National Chiao Tung University, M.S. Thesis , 2016.",
        "You-Te Chiu, “A Limited Maximum On-Time Switching Based Li-ion Battery Charger with Dual-Loop Mixed-Mode Smooth Transition,” National Chiao Tung University, M.S. Thesis , 2017.",
        "Hong-Chang Liu, “20MHz Oscillator Independent of Supply Voltage and Temperature,” National Chiao Tung University, M.S. Thesis , 2017.",
        "Yu-Hsuan Liu, “A Novel High-Performance Current-Voltage Dual-Mode DC-DC Buck Converter with Adaptive Clock Control Technique,” National Chiao Tung University, M.S. Thesis , 2017.",
        "Yi-Cheng Hsieh, “12-bit SAR ADC with Mixed Switching and Background Offset Calibration,” National Chiao Tung University, M.S. Thesis , 2017.",
        "Cheng-Ting Jiang, “Low-noise and low-power Analog Front End of Local Field Potential Acquisition for Parkinson’s disease treatment,” National Chiao Tung University, M.S. Thesis , 2017.",
        "Sheng-Kai Fan, “Fast-Locking All-Digital Phase-Locked Loop with Parallel Processing TDC and Interpolated DCO,” National Chiao Tung University, M.S. Thesis , 2017.",
        "Ming-Rui Tsai, “A Current-Mode DC-DC Buck Converter with Fast-Transient Response Mechanism,” National Chiao Tung University, M.S. Thesis , 2018.",
        "Chi-Fa Huang, “A Current-Mode DC-DC Buck-Boost Converter with Fast Transient Technique,” National Chiao Tung University, M.S. Thesis , 2018.",
        "Shing-Yun Chang, “A Seventh-Order Low-Noise Discrete-Time Delta-Sigma Modulator for Audio Applications,” National Chiao Tung University, M.S. Thesis , 2018.",
        "Ke-Wei Chang, “Low-Power, Low-Noise, and High-Gain Analog Front-End Amplifier for Parkinson’s Disease Treatment,” National Chiao Tung University, M.S. Thesis , 2018.",
        "Bo-You Wu, “An All-Digital Phase-Locked Loop with Dual-Mode Low-Power TDC,” National Chiao Tung University, M.S. Thesis , 2018.",
        "Pai-Hsiang Hsu, “Design of High-Performance ADCs with Digital Calibration Technique,” National Chiao Tung University, M.S. Thesis , 2019.",
        "Chia-Hsun Li,“Design of Forth-Order 4-bit Discrete-Time Sigma-Delta Modulator for Audio Application,” National Chiao Tung University, M.S. Thesis , 2019.",
        "Cheng-Ting Hsieh,“Design of the Low-Power Low-Noise Analog Front End for Biomedical Application,” National Chiao Tung University, M.S. Thesis , 2019.",
        "Yueh-Ru Lee,“Design of 12-bit SAR ADCs with Analog Background Calibration Technique,” National Chiao Tung University, M.S. Thesis , 2019.",
        "Kun-Ming Cheng,“A Variable Power-Supply DC-DC Buck Converter With Fixed Switching Frequency By Time-Based Control Techniques,” National Chiao Tung University, M.S. Thesis , 2020."
      ]
    }
  ],
  "funded": [
    "“Design and Automation for Low-Power Systems,” NTD$18,692,500 from National Science and Technology Program for System-on-Chip, 2003~2006.",
    "“Low-Voltage Analog Filter Design in Nano-Meter Technology,” NTD$2,386,000 from National Science and Technology Program for System-on-Chip, 2003~2006.",
    "“SoC designs and technologies for reconfigurable cognitive radios,” NTD$3,000,000 from Ministry of Education, 2006.",
    "“SiP/SoC Design for G-bps Wireless Transceiving,” NTD$6,767,000 from National Science and Technology Program for System-on-Chip , 2006~2009.",
    "“Design of CMOS analog digital conversion circuits for G-bps wireless network, ” NTD$2,517,000 from National Science and Technology Program for System-on-Chip , 2006~2009.",
    "“Wireless Sensing,” NTD$3,000,000 from Ministry of Education, 2007.",
    "“Advanced SOC Course Project: Mixed-Signal and RF Integrated Circuits,” from Ministry of Education, 2007~2011.",
    "“Digital Input Multi Bit Delta Sigma DAC for Class D Audio Amplifier,” NTD$800,000 from Lyontek Inc., 2008~2009.",
    "“Gm-C Analog Filter Design Techniques in Nanoscale CMOS ICs,” NTD$743,000 from National Science Council, 2009~2010.",
    "“Advanced Research of High-Performance Low-Power DAC Circuit of Column Driver for Application of LCD Display,” NTD$600,000 from Novatek Inc., 2009~2010.",
    "“Mixed-Signal Circuit Techniques in Nanoscale CMOS Technology,” NTD$4,792,000 from National Science Council, 2009~2011.",
    "“Advanced Research of High-Performance Clock and Data Recovery Circuit for Application of LCD Display Interface,” NTD$600,000 from Novatek Inc., 2010~2011.",
    "“Development of High-Speed PC Boards,” NTD$100,000 from Industrial Technology Research Institute (ITRI), 2011.",
    "“Development of Low-Power Wireless Transmission Techniques for Smart Meter System,” NTD$200,000 from Industrial Technology Research Institute (ITRI), 2011.",
    "“Smart Battery Management Integrated Circuits/Systems on DC Power-Line Control Bus,” NTD$7,381,000 form National Program for Intelligent Electronics, 2011~2014.",
    "“Battery Management Integrated Circuit Techniques for Smart Battery Management Systems,” NTD$3,332,000 from National Program for Intelligent Electronics, 2011~2014.",
    "“Development of Novel Bone-Guided Cochlear Prosthesis,” NTD$5,501,000 from National Program for Intelligent Electronics, 2012~2015.",
    "“Development of Programmable Mixed-Signal Integrated Circuits and Radio-Frequency Integrated Circuits in Medical Telemetry Radio Bands for Bone-Guided Cochlear Prosthesis,” NTD$7,969,000 from National Program for Intelligent Electronics, 2012~2015.",
    "“High-Voltage ESD Protection Techniques,” NTD$800,000 from Metal Industries Research and Development Centre (MIRDC), 2014.",
    "“Multiple-Input Multiple-Output High-Efficiency Smart DC-DC Charger System,” NTD$7,711,000 from National Program for Intelligent Electronics, 2014~2016",
    "“Multiple-Input Multiple-Output Smart Reconfigurable Battery Management System,” NTD$1,821,000 from National Program for Intelligent Electronics, 2014~2016.",
    "“Switching Power IC for Radio Frequency Power Amplifier Application,” NTD$1,100,000 from Richwave Inc., 2016.",
    "“Research of Multi-mode Gm-C CMOS Integrated Filter Design,” NTD$250,000 from Industrial Technology Research Institute (ITRI), 2016.",
    "“Design of Low-Power Audio-Band Mixed-Signal Integrated Circuits and Wireless Power & Data Transmission Integrated Circuits in Medical Telemetry Radio Bands for SoC Platform of Cochlear Implant,” NTD$729,000 from Ministry of Science and Technology, 2016~2017.",
    "\"0.9V Analog Microphone Front-End Design,\" NTD$1,800,000 from GoerTek Electronics Inc., 2017~2018.",
    "“Productization and Validation of Implantable Closed-Loop Parkinson Deep Brain Stimulation System,” NTD$40,000,000 from Ministry of Science and Technology, 2017~2018.",
    "“Research of SOC Design of Optical Camera Communication Module,” NTD$300,000 from Industrial Technology Research Institute (ITRI), 2017.",
    "\"High SNR SDM ADC Design,\" NTD$2,400,000 from GoerTek Electronics Inc., 2017~2019.",
    "\"Column-Parallel ADC Design,\" NTD$1,300,000 from Nova Tech Inc., 2017~2019.",
    "\"Analog Voice Activity Detection,\" NTD$3,000,000 from GoerTek Electronics Inc., 2017~2019.",
    "“Design and Application of Novel Extracochlear Prosthesis for SoC Platform of Cochlear Implant,” NTD$9,845,000 from Ministry of Science and Technology, 2017~2019.",
    "“Design of Low-Power Audio-Band Mixed-Signal Integrated Circuits for a Design and Application of Novel Extracochlear Prosthesis for SoC Platform of Cochlear Implant,” NTD$1,507,000 from Ministry of Science and Technology, 2017~2019."
  ]
};
