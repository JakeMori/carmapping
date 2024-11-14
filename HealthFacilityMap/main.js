// Initialize the map
 const map = L.map("map").setView([17.290332,121.050110], 9) .setMinZoom(6);

// Add a tile layer
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
}).addTo(map);


const osmLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
});

const satelliteLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Tiles &copy; <a href="https://www.esri.com/">Esri</a>',
});
// Add default layer to map (OpenStreetMap)
satelliteLayer.addTo(map);

// Define the locations array
const hLocations = [
  //BAGUIO CITY HOSPITALS
  {
    lat: 16.401964,lng: 120.597543,
    title: "Baguio Medical Hospital",
    description: "<p>Private | Level 1 | BEDS: 17</p> <p>Dr. Dionisio Claridad III, MD <br> Medical Director</p> <center><a href='https://www.google.com/maps/dir/?api=1&destination=Baguio+Medical+Center,+Baguio+Medical+Centre,+Kennon+Rd,+Baguio,+Benguet'target='_blank'><p>Click to here Get directions</p></a><center><a href='https://hfpa.doh.gov.ph/facility/DOH000000000003285'target='_blank'><p>Click for Health Services</p></a>",
    category: "Hospital"
  },
  {
    lat: 16.401084,lng: 120.596138,
    title: "Baguio General Hospital and Medical Center",
    description: "<p> Government | Level 3 | BEDS: 600</p> <p>Dr. Larry C. Haya Jr., MD, DPCP, MBA <br> OIC-Medical Center Chief II</p> <center><a href='https://www.google.com/maps/dir/?api=1&destination=Baguio+General+Hospital+and+Medical+Center'target='_blank'><p>Click here to Get directions</p></a><center><a href='https://hfpa.doh.gov.ph/facility/DOH000000000000274'target='_blank'><p>Click for Health Services</p></a>",
    category: "Hospital"
  },
  {
    lat: 16.415346,lng: 120.598659,
    title: "Notre Dame de Chartres Hospital",
    description: "<p> Private | Level 2 | BEDS: 125</p><p>Dr. Edwin M. Cosalan <br> Hospital Adminstrator</p> <center><a href='https://www.google.com/maps/dir/?api=1&destination=Notre+Dame+de+Chartres+Hospital'target='_blank'><p>Get directions</p></a><center><a href='https://hfpa.doh.gov.ph/facility/DOH000000000004003'target='_blank'><p>Click for Health Services</p></a>",
    category: "Hospital"
  },
  {
    lat: 16.426926,lng: 120.594631,
    title: "Pines City Doctors Hospital",
    description: "<p> Private | Level 2 | BEDS: 110</p><p>Dr Goerge J. Pangwi <br> Medical Director</p> <center><a href='https://www.google.com/maps/dir/?api=1&destination=Pines+City+Doctor'target='_blank'><p>Get directions</p></a><center><a href='https://hfpa.doh.gov.ph/facility/DOH000000000002113'target='_blank'><p>Click for Health Services</p></a>",
    category: "Hospital"
  },
  {
    lat: 16.417333,lng: 120.597932,
    title: "SLU Sacred Health Medical Hospital",
    description: "<p> Private | Level 3 | BEDS: 120</p><p>Atty. Arnulfo Soriano, MsPsych, RP <br> Vice President for Hospital Affairs</p> <center><a href='https://www.google.com/maps/dir/?api=1&destination=Saint+Louis+University+Hospital+of+the+Sacred+Heart'target='_blank'><p>Get directions</p></a><center><a href='https://hfpa.doh.gov.ph/facility/DOH000000000006689'target='_blank'><p>Click for Health Services</p></a>",
    category: "Hospital"
  },
  { lat: 16.3652452,lng: 120.6200068,
    title: "Fort del Pilar Station Hospital", 
    description: "<p> Private | Infirmary | BEDS: 12</p> <p>COL Nealon Eugene P. Batalla <br> Commanding Officer</p> <center><a href='https://www.google.com/maps/dir/?api=1&destination=Fort+Del+Pilar+Station+Hospital'target='_blank'><p>Get directions</p></a><center><a href='https://hfpa.doh.gov.ph/facility/DOH000000000003493'target='_blank'><p>Click here for Health Services</p></a", 
    category: "Infirmary"
  },
// BENGUET HOSPITALS
  { lat:  16.627171,  lng: 120.766932,
    title:"Atok District Hospital",
    description:"<p> Government | Level 1 | BEDS: 15</p> <p>Dr. Joseph Giovanni C. Frias <br> Chief of Hospital I</p> <center><a href='https://www.google.com/maps/dir/?api=1&destination=Atok+District+Hospital,+Atok,+Benguet'target='_blank'><p>Get directions</p></a><center><a href='https://hfpa.doh.gov.ph/facility/DOH000000000004461'target='_blank'><p>Click here for Health Services</p></a",
    category:"Hospital"
  },

  { lat:  16.4507651, lng: 120.5891329,
    title:"Benguet General Hospital",
    description:"<p> Government | Level 2 | BEDS: 150</p> <p>Dr. Maria Imelda C. Ulep, MD, MHA, FPCHA <br> Chief of Hospital III</p> <center><a href='https://www.google.com/maps/dir/?api=1&destination=Benguet+General+Hospital,+Halsema+Highway,+La+Trinidad,+2601+Benguet'target='_blank'><p>Get directions</p></a><center><a href='https://hfpa.doh.gov.ph/facility/DOH000000000001916'target='_blank'><p>Click here for Health Services</p></a",
    category:"Hospital"
  },

  { lat:  16.4656624, lng: 120.5982063,
    title:"Camp Bado Dangwa Hospital",
    description:"<p> Government | Infirmary | BEDS: 10</p> <p>Pcol Alex Manlangit <br> Chief RMDU-Cordillera</p> <center><a href='https://www.google.com/maps/dir/?api=1&destination=Camp+Dangwa+Hospital,+Camp+Dangwa+Community,+La+Trinidad,+Benguet'target='_blank'><p>Get directions</p></a><center><a href='https://hfpa.doh.gov.ph/facility/DOH000000000033714'target='_blank'><p>Click here for Health Services</p></a",
    category:"Infirmary"
  },

  { lat:  16.45267, lng: 120.57467,
    title:"Cordillera Hospital of the Divine Grace",
    description:"<p> Private | Level 2 | BEDS: 110</p> <p>Edgar A. Biteng, MD, FPSGS, FPCS <br> Chief of Hospital</p> <center><a href='https://www.google.com/maps/dir/?api=1&destination=FH3F%2B2QM+Cordillera+Hospital+of+the+Divine+Grace+(CHDG),+La+Trinidad,+2601+Bengue'target='_blank'><p>Get directions</p></a><center><a href='https://hfpa.doh.gov.ph/facility/DOH000000000033716'target='_blank'><p>Click here for Health Services</p></a",
    category:"Hospital"
  },

  { lat:  16.512309, lng: 120.82404,
    title:"Dennis Molintas District Hospital",
    description:"<p> Government | Level 1 | BEDS: 10</p> <p>Dr. Tricia Hazelle S. Panangwe  <br> Chief of Hospital </p> <center><a href='https://www.google.com/maps/dir/?api=1&destination=GR6F%2BWJP+Dennis+Molintas+Municipal+Hospital,+Bokod,+Benguet'target='_blank'><p>Get directions</p></a><center><a href='https://hfpa.doh.gov.ph/facility/DOH000000000000262'target='_blank'><p>Click here for Health Services</p></a",
    category:"Hospital"
  },

  { lat:  16.4746594, lng: 120.6323264,
    title:"Devine Providence Infirmary & Diagnostic Center",
    description:"<p> Private | Infirmary | BEDS: 4</p> <p>Dr. Arlene Mae P. Bayubay <br>Medical Director I</p> <center><a href='https://www.google.com/maps/dir/?api=1&destination=Divene+Providence+Infirmary+and+Diagnostic+Center,+ALS+Building,+Halsema+Highway,+Tublay,+Benguet'target='_blank'><p>Get directions</p></a><center><a href='https://hfpa.doh.gov.ph/facility/DOH0000000000038663'target='_blank'><p>Click here for Health Services</p></a",
    category:"Infirmary"
  },

  { lat:  16.356198, lng: 120.716501,
    title:"Itogon District Hospital",
    description:"<p> Government | Infirmary | BEDS: 10</p> <p>Dr. Eden B. Dangwa <br> OIC Chief of Hospital </p> <center><a href='https://www.google.com/maps/dir/?api=1&destination=Itogon+District+Hospital,+Itogon,+Benguet'target='_blank'><p>Get directions</p></a><center><a href='https://hfpa.doh.gov.ph/facility/DOH000000000005733'target='_blank'><p>Click here for Health Services</p></a",
    category:"Infirmary"
  },

  { lat: 16.574921,  lng: 120.592468,
    title:"Kapangan District Hospital",
    description:"<p> Government | Infirmary | BEDS: 15</p> <p>Dr. Reynelle C. Del Amor <br> Chief of Hospital </p> <center><a href='https://www.google.com/maps/dir/?api=1&destination=Kapangan+District+Hospital,+161+Central,+Kapangan,+2613+Benguet'target='_blank'><p>Get directions</p></a><center><a href='https://hfpa.doh.gov.ph/facility/DOH000000000005734'target='_blank'><p>Click here for Health Services</p></a",
    category:"Infirmary"
  },

  { lat: 16.864235, lng: 120.780237 ,
    title:"Lepanto Consilidated Mining Company Hospital",
    description:"<p> Private | Infirmary | BEDS: 12</p> <p>Dr. Zerubabel D. Patena <br> Chief of Hospital </p> <center><a href='https://www.google.com/maps/dir/?api=1&destination=Lepanto+Hospital,+Lepanto,+Barangay+Paco,+Mankayan,+2609+Benguet'target='_blank'><p>Get directions</p></a><center><a href='https://hfpa.doh.gov.ph/facility/DOH000000000000368'target='_blank'><p>Click here for Health Services</p></a",
    category:"Infirmary"
  },

  { lat:  16.8061356, lng: 120.8239138,
    title:"Lutheran Hospital Incorporated",
    description:"<p> Private | Level 1 | BEDS: 18</p> <p>Dr. Miriam B. Lasegan <br> Chief of Hospital </p> <center><a href='https://www.google.com/maps/dir/?api=1&destination=Atok+District+Hospital,+Atok,+Benguet'target='_blank'><p>Get directions</p></a><center><a href='https://hfpa.doh.gov.ph/facility/DOH000000000004461'target='_blank'><p>Click here for Health Services</p></a",
    category:"Hospital"
  },

  { lat:  16.796636, lng: 120.8112974,
    title:"Northern Benguet District Hospital",
    description:"<p> Government | Infirmary | BEDS: 15</p> <p>Dr. Alma A. Ged-ang, MO IV <br> Chief of Hospital I</p> <center><a href='https://www.google.com/maps/dir/?api=1&destination=NORTHERN+BENGUET+DISTRICT+HOSPITAL,+Halsema+Highway,+Buguias,+Benguet'target='_blank'><p>Get directions</p></a><center><a href='https://hfpa.doh.gov.ph/facility/DOH000000000001787'target='_blank'><p>Click here for Health Services</p></a",
    category:"Infirmary"
  },

  { lat:  16.2662477, lng: 120.6395414,
    title:"Sto. Nino Hospital of Philex Mining Corporation",
    description:"<p>Parivate | Infirmary | BEDS: 17</p> <p>Dr. Mariele L. Ventenilla <br> Chief of Hospital I</p> <center><a href='https://www.google.com/maps/dir/?api=1&destination=Sto.+Niño+Hospital+Of+Philex+Mining+Corporation,+Poblacion+Padcal,+Tuba,+2603'target='_blank'><p>Get directions</p></a><center><a href='https://hfpa.doh.gov.ph/facility/DOH000000000007493'target='_blank'><p>Click here for Health Services</p></a",
    category:"Infirmary"
  },
//IFUGAO HOSPITALS
  { lat:  16.8330792, lng: 121.1710389,
    title:"Aguinaldo People's Hospital",
    description:"<p> Government | Infirmary | BEDS: 10</p> <p> Dr. Bernardo B. Bulintao <br> Chief of Hospital I</p> <center><a href='https://www.google.com/maps/dir/?api=1&destination=Aguinaldo+Peoples+Hospital,+Talite,+Aguinaldo,+Ifugao,+Lagawe,+Ifugao'target='_blank'><p>Get directions</p></a><center><a href='https://hfpa.doh.gov.ph/facility/DOH000000000005519'target='_blank'><p>Click here for Health Services</p></a",
    category:"Infirmary"
  },

  { lat:  16.806114, lng: 121.119455,
    title:"Ifugao General Hospital",
    description:"<p> Government | Infirmary | BEDS: 45</p> <p> Dr. Joseph Bulayungan  <br> Chief of Hospital </p> <center><a href='https://www.google.com/maps/dir/?api=1&destination=Ifugao+General+Hospital,+Lagawe,+Ifugao'target='_blank'><p>Get directions</p></a><center><a href='https://hfpa.doh.gov.ph/facility/DOH000000000002714'target='_blank'><p>Click here for Health Services</p></a",
    category:"Infirmary"
  },

  { lat:  16.652022, lng: 121.217131,
    title:"Dr Tomas Sr & Maria Quilang Medical and Maternity Clinic",
    description:"<p> Private | Infirmary | BEDS: 8</p> <p> Dr. Vilma Quilang-Dela Cruz  <br> Medical Administrator(Owner)</p> <center><a href='https://www.google.com/maps/dir/?api=1&destination=DR.+TOMAS+SR.+AND+MARIA+QUILANG+MEDICAL+AND+MATERNITY+CLINIC,+POB.+WEST,+Lamut,+3605+Ifugao'target='_blank'><p>Get directions</p></a><center><a href='https://hfpa.doh.gov.ph/facility/DOH000000000038664'target='_blank'><p>Click here for Health Services</p></a",
    category:"Infirmary"
  },
  
  { lat:  16.9079432, lng: 121.0628706,
    title:"Good News Clinic and Hospital",
    description:"<p> Private | Infirmary | BEDS: 5</p> <p> Dr. Joash Pio C. Ruiz <br> Chief of Hospital </p> <center><a href='https://www.google.com/maps/dir/?api=1&destination=Good+News+Clinic+And+Hospital,+Banaue,+Ifugao'target='_blank'><p>Get directions</p></a><center><a href='https://hfpa.doh.gov.ph/facility/DOH000000000001811'target='_blank'><p>Click here for Health Services</p></a",
    category:"Infirmary"
  },

  { lat:  16.83333, lng: 121.000004,
    title:"Hungduan Municipal Hospital",
    description:"<p> Government | Infirmary | BEDS: 10</p> <p> Dr. Gina A. Buyucan <br> Chief of Hospital </p> <center><a href='https://www.google.com/maps/dir/?api=1&destination=V2F6%2BC5C+Hungduan+Municipal+Hospital,+Banaue+Road,+Hungduan,+Ifuga'target='_blank'><p>Get directions</p></a><center><a href='https://hfpa.doh.gov.ph/facility/DOH000000000003223'target='_blank'><p>Click here for Health Services</p></a",
    category:"Infirmary"
  },

  { lat:  16.9708785, lng: 121.2190685,
    title:"Mayoyao District Hospital",
    description:"<p> Government | Infirmary | BEDS: 18</p> <p> Dr. Cyrrel Gay H. Bangachon  <br> Chief of Hospital </p> <center><a href='https://www.google.com/maps/dir/?api=1&destination=Mayoyao+District+Hospital,+Mayoyao,+Ifugao'target='_blank'><p>Get directions</p></a><center><a href='https://hfpa.doh.gov.ph/facility/DOH000000000003874'target='_blank'><p>Click here for Health Services</p></a",
    category:"Infirmary"
  },

  { lat: 16.6777021, lng: 121.2021106,
    title:"Panopdopan District Hospital",
    description:"<p> Government | Level 1 | BEDS: 25</p> <p> Dr. Aloha Marcia B. Kalaw, FPOGS <br> OIC-Chief of Hospital </p> <center><a href='https://www.google.com/maps/dir/?api=1&destination=M6H2%2B3VC+Panopdopan+District+Hospital,+Nueva+Vizcaya+-+Ifugao+-+Mountain+Province+Rd,+Lamut,+Ifugao'target='_blank'><p>Get directions</p></a><center><a href='https://hfpa.doh.gov.ph/facility/DOH000000000004094'target='_blank'><p>Click here for Health Services</p></a",
    category:"Hospital"
  },

  { lat:  16.927026, lng: 121.4896226,
    title:"Potia District Hospital",
    description:"<p> Government | Level 1 | BEDS: 25</p> <p> Dr. Jocelyn D. Bumidang <br> OIC-Chief of Hospital </p> <center><a href='https://www.google.com/maps/dir/?api=1&destination=Potia+District+Hospital,+Poblacion+,+3608+Alfonso+Lista+(Potia)+,+Ifugao'target='_blank'><p>Get directions</p></a><center><a href='https://hfpa.doh.gov.ph/facility/DOH000000000003870'target='_blank'><p>Click here for Health Services</p></a",
    category:"Hospital"
  },

  { lat:  16.6930193, lng: 120.9163506,
    title:"Tinoc District Hospital",
    description:"<p> Government | Infirmary | BEDS: 18</p> <p> Dr. Hector U. Pugong <br> Chief of Hospital </p> <center><a href='https://www.google.com/maps/dir/?api=1&destination=MWMH%2B256+Tinoc+District+Hospital,+Tinoc,+Ifugao'target='_blank'><p>Get directions</p></a><center><a href='https://hfpa.doh.gov.ph/facility/DOH000000000005230'target='_blank'><p>Click here for Health Services</p></a",
    category:"Infirmary"
  },

  //MT PROVINCE HOSPITALS
  { lat: 17.109872, lng:  121.279428,
    title:"Anastacia-Rafael Sagel Memorial Hospital",
    description:"<p> Government | Infirmary | BEDS: 10</p> <p> Dr. Babilyne G. Agagon- Pogloy <br> Chief of Hospital </p> <center><a href='https://www.google.com/maps/dir/?api=1&destination=Aguinaldo+Peoples+Hospital,+Talite,+Aguinaldo,+Ifugao,+Lagawe,+Ifugao'target='_blank'><p>Get directions</p></a><center><a href='https://hfpa.doh.gov.ph/facility/DOH000000000002296'target='_blank'><p>Click here for Health Services</p></a",
    category:"Infirmary"
  },

  { lat:  17.044743, lng: 121.097059,
    title:" Barlig District Hospital ",
    description:"<p> Government | Infirmary | BEDS: 17</p> <p> Dr. Janice Ann Maris Sepulchre <br> Chief of Hospital </p> <center><a href='https://www.google.com/maps/dir/?api=1&destination=Aguinaldo+Peoples+Hospital,+Talite,+Aguinaldo,+Ifugao,+Lagawe,+Ifugao'target='_blank'><p>Get directions</p></a><center><a href='https://hfpa.doh.gov.ph/facility/DOH000000000005946'target='_blank'><p>Click here for Health Services</p></a",
    category:"Infirmary"
  },

  { lat:  17.095272, lng:  120.855446,
    title:" Besao District Hospital ",
    description:"<p> Government | Level 1 | BEDS: 17</p> <p> Dr. Dolores D. Dicdican  <br> Chief of Hospital </p> <center><a href='https://www.google.com/maps/dir/?api=1&destination=Aguinaldo+Peoples+Hospital,+Talite,+Aguinaldo,+Ifugao,+Lagawe,+Ifugao'target='_blank'><p>Get directions</p></a><center><a href='https://hfpa.doh.gov.ph/facility/DOH000000000005448'target='_blank'><p>Click here for Health Services</p></a",
    category:"Hospital"
  },

  { lat:  17.093871, lng:  120.97691,
    title:" Bontoc General Hospital ",
    description:"<p> Government | Level 1 | BEDS: 100</p> <p> Dr. Raquel Tannao S. Kanongkong <br> Chief of Hospital </p> <center><a href='https://www.google.com/maps/dir/?api=1&destination=Aguinaldo+Peoples+Hospital,+Talite,+Aguinaldo,+Ifugao,+Lagawe,+Ifugao'target='_blank'><p>Get directions</p></a><center><a href='https://hfpa.doh.gov.ph/facility/DOH000000000006557'target='_blank'><p>Click here for Health Services</p></a",
    category:"Hospital"
  },

  { lat: 16.981156, lng: 120.853796,
    title:" Luis Hora Memorial Regional Hospital",
    description:"<p> Government | Level 2 | BEDS: 200</p> <p> Dr. Eduardo B. Calpito <br> Medical Center Chief I </p> <center><a href='https://www.google.com/maps/dir/?api=1&destination=Aguinaldo+Peoples+Hospital,+Talite,+Aguinaldo,+Ifugao,+Lagawe,+Ifugao'target='_blank'><p>Get directions</p></a><center><a href='https://hfpa.doh.gov.ph/facility/DOH000000000003179'target='_blank'><p>Click here for Health Services</p></a",
    category:"Hospital"
  },

  { lat:  17.17932, lng: 121.403534,
    title:" Paracelis District Hospital ",
    description:"<p> Government | Level 1 | BEDS: 17</p> <p> Dr. Tifannygail E. Damoking <br> Chief of Hospital </p> <center><a href='https://www.google.com/maps/dir/?api=1&destination=Aguinaldo+Peoples+Hospital,+Talite,+Aguinaldo,+Ifugao,+Lagawe,+Ifugao'target='_blank'><p>Get directions</p></a><center><a href='https://hfpa.doh.gov.ph/facility/DOH000000000004073'target='_blank'><p>Click here for Health Services</p></a",
    category:"Hospital"
  },

  { lat:  17.085122, lng: 120.902114,
    title:" St. Theodore of Tarsus Hospital Foundation Inc. ",
    description:"<p> Private | Level 1 | BEDS: 17</p> <p> Dr.Robert Capuyan <br> Medical Directorl </p> <center><a href='https://www.google.com/maps/dir/?api=1&destination=Aguinaldo+Peoples+Hospital,+Talite,+Aguinaldo,+Ifugao,+Lagawe,+Ifugao'target='_blank'><p>Get directions</p></a><center><a href='https://hfpa.doh.gov.ph/facility/DOH000000000000321'target='_blank'><p>Click here for Health Services</p></a",
    category:"Hospital"
  },

  { lat:  17.109916, lng: 121.279826,
    title:" Natonin Community Hospital ",
    description:"<p> Private | Infirmary | BEDS: --</p> <p> Dr. Babilyne G. Agagon- Pogloy <br> Chief of Hospital </p> <center><a href='https://www.google.com/maps/dir/?api=1&destination=Natonin+Community+Hospital'target='_blank'><p>Get directions</p></a><center><a href='https://hfpa.doh.gov.ph/facility/DOH00000000000'target='_blank'><p>Click here for Health Services</p></a",
    category:"Infirmary"
  },

  //KALINGA HOSPITALS
  { lat:  17.416340, lng: 121.442359,
    title:" Almora General Hospital ",
    description:"<p> Private | Level 1 | BEDS: 50</p> <p> Dr. Jaime A. Almora <br> Chief of Hospital </p> <center><a href='https://www.google.com/maps/dir/?api=1&destination=Almora+General+Hospital'target='_blank'><p>Get directions</p></a><center><a href='https://hfpa.doh.gov.ph/facility/DOH000000000004633'target='_blank'><p>Click here for Health Services</p></a",
    category:"Hospital"
  },

  { lat:  17.411964, lng: 121.447141,
    title:" Holy Trinity Medical Clinic ",
    description:"<p> Private | Level 1| BEDS: 30</p> <p> Dr. George C. Taclobao <br> Chief of Hospital </p> <center><a href='https://www.google.com/maps/dir/?api=1&destination=Holy+Trinity+Medical+Clinic,+Tabuk,+Kalinga'target='_blank'><p>Get directions</p></a><center><a href='https://hfpa.doh.gov.ph/facility/DOH000000000005562'target='_blank'><p>Click here for Health Services</p></a",
    category:"Hospital"
  },

  { lat:  17.518578, lng: 121.582406,
    title:" Juan M. Duyan Memorial District Hospital ",
    description:"<p> Goverment | Infirmary | BEDS: 18</p> <p> Dr. Beda Malecdan Jr. <br> Chief of Hospital </p> <center><a href='https://www.google.com/maps/dir/?api=1&destination=Juan+M.+Duyan+Memorial+District+Hospital'target='_blank'><p>Get directions</p></a><center><a href='https://hfpa.doh.gov.ph/facility/DOH000000000006854'target='_blank'><p>Click here for Health Services</p></a",
    category:"Infirmary"
  },

  { lat:  17.351918, lng: 121.175208,
    title:" Kalinga District Hospital ",
    description:"<p> Goverment | Infirmary | BEDS: 18</p> <p> Dr. Reicha Jan O. Dickpus <br> Chief of Hospital </p> <center><a href='https://www.google.com/maps/dir/?api=1&destination=Kalinga+District+Hospital,+Lubuagan,+Kalinga'target='_blank'><p>Get directions</p></a><center><a href='https://hfpa.doh.gov.ph/facility/DOH000000000002987'target='_blank'><p>Click here for Health Services</p></a",
    category:"Infirmary"
  },

  { lat:  17.374091, lng: 121.548947,
    title:" Kalinga-Gabriel Mija Kim Medical Center ",
    description:"<p> Government | Infirmary | BEDS: 12</p> <p> Dr. Ruth B. Duguiang <br> Chief of Hospital </p> <center><a href='https://www.google.com/maps/dir/?api=1&destination=Kalinga+Gabriel+Mija+Kim+Medical+Center+‐+Mcp'target='_blank'><p>Get directions</p></a><center><a href='https://hfpa.doh.gov.ph/facility/DOH000000000033717'target='_blank'><p>Click here for Health Services</p></a",
    category:"Infirmary"
  },
  { lat:  17.409830, lng: 121.439985,
    title:" Kalinga Provincial Hospital ",
    description:"<p> Government | Level 1 | BEDS: 100</p> <p> Dr. Reynaldo Aranca <br> Chief of Hospital </p> <center><a href='https://www.google.com/maps/dir/?api=1&destination=Kalinga+Provincial+Hospital,+CC5Q%2BVXQ,+Kalinga+-+Cagayan+Rd,+Tabuk,+Kalinga'target='_blank'><p>Get directions</p></a><center><a href='https://hfpa.doh.gov.ph/facility/DOH000000000005634'target='_blank'><p>Click here for Health Services</p></a",
    category:"Hospital"
  },

  { lat:  17.613061, lng: 121.409891,
    title:" Pinukpuk District Hospital ",
    description:"<p> Government | Infirmary | BEDS: </p> <p> Dr. Veronica D. Bayong <br> Chief of Hospital </p> <center><a href='https://www.google.com/maps/dir/?api=1&destination=Pinukpuk+District+Hospital,+Pinukpuk,+Kalinga'target='_blank'><p>Get directions</p></a><center><a href='https://hfpa.doh.gov.ph/facility/DOH000000000003869'target='_blank'><p>Click here for Health Services</p></a",
    category:"Infirmary"
  },

  { lat:  17.429889, lng: 121.446728,
    title:" San Juan General Hospital ",
    description:"<p> Private | Level 1 | BEDS: 18</p> <p> Dr. John V. Akia- Pogloy <br> Medical Officer </p> <center><a href='https://www.google.com/maps/dir/?api=1&destination=San+Juan+General+Hospital,+Purok+5,+Barangay+San+Juan,+3800,+Tabuk,+Kalinga'target='_blank'><p>Get directions</p></a><center><a href='https://hfpa.doh.gov.ph/facility/DOH000000000038398'target='_blank'><p>Click here for Health Services</p></a",
    category:"Hospital"
  },

  { lat:  17.476043, lng: 121.465316,
    title:" St. Jude's Multispecialty Hospital Inc. ",
    description:"<p> Private | Infirmary | BEDS: 12</p> <p> Dr. Lilian B. Gacuyan <br> Chief of Hospital </p> <center><a href='https://www.google.com/maps/dir/?api=1&destination=St.+Jude+Hospital,+FFG8%2B844,+Tabuk,+Kalinga+google+map'target='_blank'><p>Get directions</p></a><center><a href='https://hfpa.doh.gov.ph/facility/DOH000000000038665'target='_blank'><p>Click here for Health Services</p></a",
    category:"Infirmary"
  },

  { lat:  17.468184, lng: 121.466560,
    title:" St. Peter Claver Hospital ",
    description:"<p> Private | Level 1 | BEDS: 18</p> <p> Dr. Jane A. Claver <br> Owner </p> <center><a href='https://www.google.com/maps/dir/?api=1&destination=St+Peter+Claver+Hospital,+FF98%2B7H9,+Gen.+Luna,+Tabuk,+Kalinga'target='_blank'><p>Get directions</p></a><center><a href='https://hfpa.doh.gov.ph/facility/DOH000000000000349'target='_blank'><p>Click here for Health Services</p></a",
    category:"Hospital"
  },

  { lat:  17.495019, lng: 121.208914,
    title:" Western Kalinga District Hospital ",
    description:"<p> Government | Infirmary | BEDS: 25</p> <p> Dr. Claire P. Bawalan <br> Chief of Hospital </p> <center><a href='https://www.google.com/maps/dir/?api=1&destination=Western+Kalinga+District+Hospital,+F6W5%2B2J2,+Cadamayan,+Abra+-+Kalinga+Rd,+Balbalan,+Kalinga'target='_blank'><p>Get directions</p></a><center><a href='https://hfpa.doh.gov.ph/facility/DOH000000000003871'target='_blank'><p>Click here for Health Services</p></a",
    category:"Infirmary"
  },

  { lat:  17.476678, lng: 121.466968,
    title:" Annah Kaliyah BAAC Hospital ",
    description:"<p> Private | Infirmary | BEDS: 18</p> <p> Dr. Elena L. Co <br> Chief of Hospital </p> <center><a href='https://www.google.com/maps/dir/?api=1&destination=ANNAH+KALIYAH+BAAC+HOSPITAL,+Provincial+Road,+Tabuk,+Kalinga'target='_blank'><p>Get directions</p></a><center><a href='https://hfpa.doh.gov.ph/facility/DOH00000000000'target='_blank'><p>Click here for Health Services</p></a",
    category:"Infirmary"
  },

  { lat:  17.281411, lng: 121.230767,
    title:" Tanudan Municipal Hospital ",
    description:"<p> Government | No LTO | BEDS: 10</p> <p> Dr. Tatcha Kinao-Codiam <br> Owner - Chief of Hospital </p> <center><a href='https://www.google.com/maps/dir/?api=1&destination=Tanudan+Municipàl+Hall,+76JJ%2BH3X,+Tanudan,+Kalinga'target='_blank'><p>Get directions</p></a><center><a href='https://hfpa.doh.gov.ph/facility/DOH000000000003051'target='_blank'><p>Click here for Health Services</p></a",
    category:"Hospital"
  },

  { lat:  17.459016, lng: 121.459951,
    title:" Abundant Grace of God  Maternity Center Inc. ",
    description:"<p> Private | Infirmary | BEDS: 2</p> <p> Dr. Gerogia Leigh B. Macad <br> Owner-Chief of Hospital </p> <center><a href='https://www.google.com/maps/dir/?api=1&destination=Abundant+Grace+of+God+Maternity+Center,+Inc.,+FF55%2BGX5,+Provincial+Road,+Tabuk,+Kalinga'target='_blank'><p>Get directions</p></a><center><a href='https://hfpa.doh.gov.ph/facility/DOH000000000033792'target='_blank'><p>Click here for Health Services</p></a",
    category:"Infirmary"
  },

  //ABRA HOSPITALS
  { lat:  17.459016, lng: 120.618024,
    title:" Abra Provincial Hospital ",
    description:"<p> Government | Level 1 | BEDS: 50</p> <p> Dr. Antonio Valera <br> Chief of Hospital </p> <center><a href='https://www.google.com/maps/dir/?api=1&destination=JJ88%2B8XF+New+Abra+Provincial+Hospital,+Ilocos+Norte+-+Abra+Rd,+Bangued,+Abra'target='_blank'><p>Get directions</p></a><center><a href='https://hfpa.doh.gov.ph/facility/DOH000000000006566'target='_blank'><p>Click here for Health Services</p></a",
    category:"Hospital"
  },

  { lat:  17.595770, lng: 120.621192,
    title:" Bangued Christian Hospital ",
    description:"<p> Private | Level 1 | BEDS: 17</p> <p> Dr. Julieta Joy B. Figueras <br> Medical Director </p> <center><a href='https://www.google.com/maps/dir/?api=1&destination=Bangued+Christian+Hospital,+HJWC%2B8FF,+Torrijos+St,+Bangued,+2800+Abra'target='_blank'><p>Get directions</p></a><center><a href='https://hfpa.doh.gov.ph/facility/DOH000000000000320'target='_blank'><p>Click here for Health Services</p></a",
    category:"Hospital"
  },

  { lat:  17.540624, lng: 120.714710,
    title:" Bucay Municipal Hospital ",
    description:"<p> Government | Infirmary | BEDS: 10</p> <p> Dr. Conchitina C. Beronia <br> Chief of Hospital </p> <center><a href='https://www.google.com/maps/dir/?api=1&destination=Bucay+Municipal+Hospital,+GPR7%2B6VC,+Dispensary,+Bucay,+Abra'target='_blank'><p>Get directions</p></a><center><a href='https://hfpa.doh.gov.ph/facility/DOH000000000002120'target='_blank'><p>Click here for Health Services</p></a",
    category:"Infirmary"
  },

  { lat:  17.649666, lng: 120.711915,
    title:" Dolores Medicare and Community Hospital ",
    description:"<p> Government | PCF | BEDS: 10</p> <p> Dr. Catalino B. Bigornia <br> OIC-Chief of Hospital </p> <center><a href='https://www.google.com/maps/dir/?api=1&destination=Dolores+Medicare+and+Community+Hospital,+JPX6%2BRQM,+Dolores,+Abra'target='_blank'><p>Get directions</p></a><center><a href='https://hfpa.doh.gov.ph/facility/DOH000000000002630'target='_blank'><p>Click here for Health Services</p></a",
    category:"Primary"
  },

  { lat:  17.598608, lng: 120.615479,
    title:" Dr. Petronilo V. Seares Sr. Memorial Hospital ",
    description:"<p> Private | Level 1 | BEDS: 24</p> <p> Dr. Aristeo Cesar  Voltaire L. Seares <br> Medical Director </p> <center><a href='https://www.google.com/maps/dir/?api=1&destination=Dr.+Petronilo+V.+Seares,+Sr.+Memorial+Hospital,+HJX8%2BC6R,+Penarrubia+St,+Bangued,+2800+Abra'target='_blank'><p>Get directions</p></a><center><a href='https://hfpa.doh.gov.ph/facility/DOH000000000000356'target='_blank'><p>Click here for Health Services</p></a",
    category:"Hospital"
  },

  { lat:  17.679027, lng: 120.688911,
    title:" La Paz District Hospital ",
    description:"<p> Government | Infirmary | BEDS: 12</p> <p> Dr. Louie Jon B. Enerva <br> Chief of Hospital </p> <center><a href='https://www.google.com/maps/dir/?api=1&destination=La+Paz+District+Hospital,+MMHQ%2B3GF,+La+Paz,+Abra+2800,+La+Paz,+Abra'target='_blank'><p>Get directions</p></a><center><a href='https://hfpa.doh.gov.ph/facility/DOH000000000000248'target='_blank'><p>Click here for Health Services</p></a",
    category:"Infirmary"
  },

  { lat:  17.629145, lng: 120.739435,
    title:" Sta. Theresa Wellness Center ",
    description:"<p> Private | Infirmary | BEDS: 12</p> <p> Dr. Gene Bede Barbero <br> Head of Facility </p> <center><a href='https://www.google.com/maps/dir/?api=1&destination=St.+Theresa+Wellness+Center,+N%2FA,+Dolores,+2801+Abra'target='_blank'><p>Get directions</p></a><center><a href='https://hfpa.doh.gov.ph/facility/DOH000000000004577'target='_blank'><p>Click here for Health Services</p></a",
    category:"Infirmary"
  },

  { lat:  17.599291, lng: 120.621630,
    title:" Valera Medical Hospital ",
    description:"<p> Private | Infirmary | BEDS: 15</p> <p> Dr. Milagros F. ALzate <br> Medical Director </p> <center><a href='https://www.google.com/maps/dir/?api=1&destination=Valera+Medical+Hospital,+Zone+7,+Rizal+St,+Bangued,+Abra'target='_blank'><p>Get directions</p></a><center><a href='https://hfpa.doh.gov.ph/facility/DOH000000000002214'target='_blank'><p>Click here for Health Services</p></a",
    category:"Infirmary"
  },

  { lat:  17.449516, lng: 120.621933,
    title:" Villavisciosa Medicare and Community Hospital ",
    description:"<p> Gorvernment | Infirmary | BEDS: 10</p> <p> Dr. Christian Euclid Einstein B. Azurin <br> Chief of Hospital </p> <center><a href='https://www.google.com/maps/dir/?api=1&destination=Villaviciosa+Medicare+and+Community+Hospital,+CJXC%2BGGF,+Pidigan+-+San+Isidro+-+Villaviciosa+-+Pilar+Provincial+Rd,+Villaviciosa,+2811+Abra'target='_blank'><p>Get directions</p></a><center><a href='https://hfpa.doh.gov.ph/facility/DOH000000000002730'target='_blank'><p>Click here for Health Services</p></a",
    category:"Infirmary"
  },

  { lat:  17.596601, lng: 120.619540,
    title:" Assumpta Family Hospital ",
    description:"<p> Private | Level 1 | BEDS: 17</p> <p> Dr. Milagros Cardenas-Burgos <br> Medical Director  </p> <center><a href='https://www.google.com/maps/dir/?api=1&destination=Assumpta+Family+Hospital,+Magallanes+St,+Bangued,+2800+Abra'target='_blank'><p>Get directions</p></a><center><a href='https://hfpa.doh.gov.ph/facility/DOH0000000000000'target='_blank'><p>Click here for Health Services</p></a",
    category:"Hospital"
  },

  //APAYAO HOSPITAL
  { lat:  18.236800, lng: 121.372072,
    title:" Amma Jadsac District Hospital ",
    description:"<p> Government | Infirmary | BEDS: 18 </p> <p> Dr. Mary Elisa S. Galleon  <br> Chief of Hospital </p> <center><a href='https://www.google.com/maps/dir/?api=1&destination=69PC%2B6Q4+Amma+Jadsac+District+Hospital,+Abulug-Luna-Pudtol-Kabugao+Rd,+Pudtol,+Apayao'target='_blank'><p>Get directions</p></a><center><a href='https://hfpa.doh.gov.ph/facility/DOH000000000004453'target='_blank'><p>Click here for Health Services</p></a",
    category:"Infirmary"
  },

  { lat:  18.254199, lng: 121.042586,
    title:" Apayao District Hospital ",
    description:"<p> Government | Infirmary | BEDS: 12</p> <p> Dr. Ruben Rullan E. Delos Reyes <br> Chief of Hospital </p> <center><a href='https://www.google.com/maps/dir/?api=1&destination=Apayao+District+Hospital,+Sabangan+,+3814,+Calanasan'target='_blank'><p>Get directions</p></a><center><a href='https://hfpa.doh.gov.ph/facility/DOH000000000006685'target='_blank'><p>Click here for Health Services</p></a",
    category:"Infirmary"
  },

  { lat:  18.017668, lng: 121.184065,
    title:" Apayao Provincial Hospital ",
    description:"<p> Government | Infirmary | BEDS: 12</p> <p> Dr. Jarette Bermejo-Agana <br> Chief of Hospital </p> <center><a href='https://www.google.com/maps/dir/?api=1&destination=JJ88%2B8XF,+Ilocos+Norte+-+Abra+Rd,+Bangued,+Abra'target='_blank'><p>Get directions</p></a><center><a href='https://hfpa.doh.gov.ph/facility/DOH000000000000255'target='_blank'><p>Click here for Health Services</p></a",
    category:"Infirmary"
  },

  { lat:  17.800646, lng: 121.322448,
    title:" Conner District Hospital ",
    description:"<p> Government | Level 2 | BEDS: 100</p> <p> Dr. Nelson O. Rigor <br> Medical Center Chief I </p> <center><a href='https://www.google.com/maps/dir/?api=1&destination=Conner+District+Hospital,+Conner,+Apayao'target='_blank'><p>Get directions</p></a><center><a href='https://hfpa.doh.gov.ph/facility/DOH000000000001788'target='_blank'><p>Click here for Health Services</p></a",
    category:"Hospital"
  },

  { lat:  18.33919, lng: 121.384001,
    title:" Far North Luzon General Hospital & Training Center ",
    description:"<p> Government | Level 2 | BEDS: 200</p> <p> Dr. Marlene Libatique-Lubo <br> Medical Center Chief I </p> <center><a href='https://www.google.com/maps/dir/?api=1&destination=89QM%2BRG8,+Abulug-Luna-Pudtol-Kabugao+Rd,+Luna,+Apayao'target='_blank'><p>Get directions</p></a><center><a href='https://hfpa.doh.gov.ph/facility/DOH000000000003376'target='_blank'><p>Click here for Health Services</p></a",
    category:"Hospital"
  },

  { lat:  18.222913, lng: 121.418407,
    title:" Flora District Hospital ",
    description:"<p> Government | Infirmary | BEDS: 12</p> <p> Dr. Amy Liza V. Maruquin <br> Chief of Hospital </p> <center><a href='https://www.google.com/maps/dir/?api=1&destination=Flora+District+Provincial+Government+Hospital,+6CF9%2B583,+Santa+Marcela+-+Flora+Rd,+Flora,+Apayao'target='_blank'><p>Get directions</p></a><center><a href='https://hfpa.doh.gov.ph/facility/DOH000000000004477'target='_blank'><p>Click here for Health Services</p></a",
    category:"Infirmary"
  },

  { lat:  18.290167, lng: 121.431788,
    title:" Santa Mercela District ",
    description:"<p> Government | Infirmary | BEDS: 12</p> <p> Dr. Roy C. Julian  <br> Chief of Hospital </p> <center><a href='https://www.google.com/maps/dir/?api=1&destination=18.2900178,121.431414/Santa+Marcela,+Apayao'target='_blank'><p>Get directions</p></a><center><a href='https://hfpa.doh.gov.ph/facility/DOH000000000004590'target='_blank'><p>Click here for Health Services</p></a",
    category:"Infirmary"
  },

//BAGUIO CITY RHU
  { lat: 16.4044463, lng: 120.5714601, 
    title: "Asin District Health Center", 
    description: " <p> Dr. CELIA FLOR C. BRILLANTES  <br> Acting CHO </p> <center><a href='https://www.google.com/maps/dir/?api=1&destination='target='_blank'><p>Get directions</p></a><center><a href='https://hfpa.doh.gov.ph/facility/DOH000000000023507'target='_blank'><p>Click here for Health Services</p></a", 
    category: "Rural"},

  { lat: 16.4074357, lng: 120.5425309, 
    title: "Atab District Health Center", 
    description: "", 
    category: "Rural"},

  { lat: 16.3970253, lng: 120.5475587, 
    title: "Atok Trail District Health Center", 
    description: "", 
    category: "Rural"},

  { lat: 16.4243167, lng: 120.6024012, 
    title: "Aurora Hill District Health Center", 
    description: "", 
    category: "Rural"},

  { lat: 16.4193502, lng: 120.5881719, 
    title: "Camp Filipino District Health Center", 
    description: "", 
    category: "Rural"},

  { lat: 16.4111582, lng: 120.5861208, 
    title: "City Camp Health Center", 
    description: "", 
    category: "Rural"},

  { lat:16.4060718, lng: 120.5845132, 
    title: "Engineers'Hill District Health Center", 
    description: "", 
    category: "Rural"},

  { lat: 16.4180113, lng: 120.5582515, 
    title: "Irisan District Health Center", 
    description: "", 
    category: "Rural"},
    
  { lat: 16.4036261, lng: 120.6177187, 
    title: "Loakan District Health Center", 
    description: "", 
    category: "Rural"}, 

  { lat: 16.4216953, lng: 120.5957455, 
    title: "Lucban District Health Center", 
    description: "", 
    category: "Rural"}, 

  { lat: 16.4176033, lng: 120.6247116, 
    title: "Mines View District Health Center", 
    description: "", 
    category: "Rural"}, 

  { lat: 16.4176879, lng: 120.5918808, 
    title: "Pacdal District Health Center", 
    description: "", 
    category: "Rural"}, 
    
  { lat: 16.4178118, lng: 120.5423002, 
    title: "Pinsao District Health Center", 
    description: "", 
    category: "Rural"},   
  
  { lat: 16.4163904, lng: 120.5756737, 
    title: "Quezon Hill District Health Center", 
    description: "", 
    category: "Rural"},   

  { lat: 16.4289566, lng: 120.5736446, 
    title: "Quirino Hill District Health Center", 
    description: "", 
    category: "Rural"}, 

  { lat: 16.3967301, lng: 120.5910908, 
    title: "Scout Barrio District Health Center", 
    description: "", 
    category: "Rural"}, 

  //BENGUET RHU  
  { lat: 16.4176033, lng: 120.6247116, 
    title: "", 
    description: "", 
    category: "Rural"}, 

  //BLOOD CENTERS
  { lat: 16.450967, lng:  120.588341, 
    title: "PRC-Benguet Chapter", 
    description: "<center> <p> Private </p> <center> <br> | KM 5, LA TRINIDAD </p> </center> <center><a href='https://www.google.com/maps/dir/?api=1&destination=Philippine+Red+Cross+-+Benguet+Chapter,+BeGH+Compound,+Km5,+La+Trinidad,+2601+Benguet'target='_blank'><p>Get directions</p></a><center><a href='https://hfpa.doh.gov.ph/facility/DOH000000000044545'target='_blank'><p>Click here for Health Services</p></a", 
    category: "Blood"},

  { lat: 16.413318, lng:  120.597423, 
    title: "Assumption Medical Diagnostic Center, Inc.", 
    description: "<center> <p> Private <br> | Assumption Rd. </p> </center> <center><a href='https://www.google.com/maps/dir/?api=1&destination=Assumption+Medical+Diagnostic+Center,+Inc.,+VFM+Building,+10+Assumption+Road,+Baguio,+2600+Benguet'target='_blank'><p>Get directions</p></a><center><a href='https://hfpa.doh.gov.ph/facility/DOH000000000023482'target='_blank'><p>Click here for Health Services</p></a", 
    category: "Blood"},

  { lat: 16.412202, lng:  120.596334,
    title: "Philippine Red Cross Baguio City", 
    description: "<center> <p> Private </p> <center> <br> | Assumption Rd. </p> </center> <center><a href='https://www.google.com/maps/dir/?api=1&destination=Philippine+Red+Cross,+39+Harrison+Rd,+Baguio,+2600+Benguet'target='_blank'><p>Get directions</p></a><center><a href='https://hfpa.doh.gov.ph/facility/DOH000000000044545'target='_blank'><p>Click here for Health Services</p></a", 
    category: "Blood"},

  { lat: 16.412202, lng:  120.596334,
    title: "TABUK CITY HEALTH OFFICE BLOOD COLLECTING UNIT/BLOOD STATION", 
    description: "<center> <p> Private </p> <center> <br> | Assumption Rd. </p> </center> <center><a href='https://www.google.com/maps/dir/?api=1&destination=Philippine+Red+Cross,+39+Harrison+Rd,+Baguio,+2600+Benguet'target='_blank'><p>Get directions</p></a><center><a href='https://hfpa.doh.gov.ph/facility/DOH000000000044545'target='_blank'><p>Click here for Health Services</p></a", 
    category: "Blood"},
      
  { lat: 16.412202, lng:  120.596334,
    title: "PHILIPPINE RED CROSS - KALINGA CHAPTER", 
    description: "<center> <p> Private </p> <center> <br> | Assumption Rd. </p> </center> <center><a href='https://www.google.com/maps/dir/?api=1&destination=Philippine+Red+Cross,+39+Harrison+Rd,+Baguio,+2600+Benguet'target='_blank'><p>Get directions</p></a><center><a href='https://hfpa.doh.gov.ph/facility/DOH000000000044545'target='_blank'><p>Click here for Health Services</p></a", 
    category: "Blood"},

  { lat: 16.412202, lng:  120.596334,
    title: "PHILIPPINE RED CROSS - IFUGAO CHAPTER", 
    description: "<center> <p> Private </p> <center> <br> | Assumption Rd. </p> </center> <center><a href='https://www.google.com/maps/dir/?api=1&destination=Philippine+Red+Cross,+39+Harrison+Rd,+Baguio,+2600+Benguet'target='_blank'><p>Get directions</p></a><center><a href='https://hfpa.doh.gov.ph/facility/DOH000000000044545'target='_blank'><p>Click here for Health Services</p></a", 
    category: "Blood"},

  { lat: 16.412202, lng:  120.596334,
    title: "PHILIPPINE RED CROSS - ABRA CHAPTER", 
    description: "<center> <p> Private </p> <center> <br> | Assumption Rd. </p> </center> <center><a href='https://www.google.com/maps/dir/?api=1&destination=Philippine+Red+Cross,+39+Harrison+Rd,+Baguio,+2600+Benguet'target='_blank'><p>Get directions</p></a><center><a href='https://hfpa.doh.gov.ph/facility/DOH000000000044545'target='_blank'><p>Click here for Health Services</p></a", 
    category: "Blood"}
];

// Define marks as an array of Leaflet marker objects
let marks = [];

// Function to filter markers by category
function filterMarkers(category) {
  // Remove all markers from the map
  marks.forEach((marker) => {
    marker.remove();
  });

  // Clear the marks array
  marks = [];

  // Define the icon URLs for each category
  const iconUrls = {
    "all":"",
    "Infirmary":"C:/HealthFacilityMap/images/infirmary.png",
    "Rural": "C:/HealthFacilityMap/images/rural.png",
    "Hospital": "C:/HealthFacilityMap/images/hospital.png",
    "Blood": "C:/HealthFacilityMap/images/birth.png",
    "Primary": "C:/HealthFacilityMap/images/pcf.png"
  };

  // Loop through each location and add markers that match the category
  hLocations.forEach((location) => {
    if (location.category === category) {
      const marker = L.marker([location.lat, location.lng], {
        icon: L.icon({
          iconUrl: iconUrls[category],
          iconSize: [21, 23],
          iconAnchor: [3, 21],
        }),
      }).addTo(map);

      // Create the popup content
      const popupContent = `
        <div class="location-details">
          <h2>${location.title}</h2>
          <p>${location.description}</p>
        </div>
      `;

      // Bind the popup to the marker
      marker.bindPopup(popupContent);

       // Add the marker to the marks array
       marks.push(marker);
    }
    });
  }
// Add event listeners to the checkboxes
document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
  checkbox.addEventListener('change', (e) => {
    const category = e.target.value;
    const isChecked = e.target.checked;

    let markersToAdd = [];
    let markersToRemove = [];

    // If the "all" category is checked, toggle all markers
    if (category === "all") {
      if (isChecked) {
        marks.forEach((marker) => {
          marker.addTo(map);
          markersToAdd.push(marker);
        });
      } else {
        marks.forEach((marker) => {
          markersToRemove.push(marker);
          map.removeLayer(marker);
        });
      }
    } else {
      // Otherwise, toggle markers in the selected category
      if (isChecked) {
        marks.forEach((marker) => {
          if (marker.options.category === category) {
            markersToAdd.push(marker);
            marker.addTo(map);
          }
        });
      } else {
        marks.forEach((marker) => {
          if (marker.options.category === category) {
            markersToRemove.push(marker);
            map.removeLayer(marker);
          }
        });
      }

      // If all checkboxes are checked, show all markers
      if (document.querySelectorAll('input[type="checkbox"]:checked').length === document.querySelectorAll('input[type="checkbox"]').length - 1) {
        marks.forEach((marker) => {
          if (!markersToRemove.includes(marker)) {
            marker.addTo(map);
          }
        });
      }
    }
  });
});
    
const abraBorder = [
  [17.23923, 120.912928], [17.243165, 120.912652],[17.246397, 120.913344], [17.259346, 120.91675],[17.260099, 120.917217], [17.263895, 120.916858],
  [17.265235, 120.917193], [17.26722, 120.918188],[17.268316, 120.919272], [17.27185, 120.924239],[17.275177, 120.925677], [17.280999, 120.925682],
  [17.284841, 120.925299], [17.289625, 120.927458],[17.291622, 120.929775], [17.2932, 120.930312],[17.296498, 120.931792], [17.302993, 120.932736],
  [17.306865, 120.935161], [17.308524, 120.935569],[17.309139, 120.935955], [17.32016, 120.941792],[17.322823, 120.945439], [17.32524, 120.946813],
  [17.326715, 120.9484], [17.327616, 120.950546], [17.333065, 120.952349], [17.339865, 120.956383], [17.342364, 120.958786],[17.345067, 120.963507],
  [17.348017, 120.964451], [17.350638, 120.96797], [17.370791, 120.974064], [17.377098, 120.987797], [17.379965, 120.991659], [17.38144, 120.995092],
  [17.387992, 120.999899], [17.393071, 121.001616],[17.398313, 120.999556], [17.416576, 121.001015],[17.425748, 120.992775],[17.479379, 120.996208],
  [17.486584, 121.008224], [17.509832, 121.03569],[17.542898, 121.104355],[17.555009, 121.111908],[17.585449, 121.117744],[17.647948, 121.088562],
  [17.655473, 121.090193],[17.66406, 121.106672],[17.666759, 121.119633],[17.668395, 121.121092],[17.677554, 121.121607],//boundary kalinga
  [17.723834, 121.118431],[17.792497, 121.105728],[17.83123, 121.076975],[17.831149, 121.062727],[17.82118, 121.027279],[17.821098, 121.023073],
  [17.824612, 121.016808], [17.854352, 120.994921], [17.859009, 120.993633], [17.929743, 120.988312], [17.960282, 120.925655],//boundary abra
  [17.940522, 120.921364], [17.934316, 120.913982],[17.941501, 120.878448],[17.942032, 120.83107], [17.937255, 120.82077],[17.912756, 120.788498],
  [17.904752, 120.771332], [17.900505, 120.768929], [17.883679, 120.73082], [17.837604, 120.695801], [17.831067, 120.67915], [17.822569, 120.626793],
  [17.795929, 120.597267], [17.784161, 120.592117], [17.706828, 120.534782], [17.698488, 120.534267],[17.690802, 120.529461], [17.661934, 120.510321],
  [17.639442, 120.503197], [17.627663, 120.50251], [17.614574, 120.494614],[17.591667, 120.487232], [17.56352, 120.473499], [17.537005, 120.471268], 
  [17.508849, 120.459595],[17.490841, 120.463715], [17.483637, 120.469551], [17.483637, 120.479851],[17.48863, 120.487232],[17.500173, 120.498905],
  [17.502055, 120.506287],[17.500909, 120.531263],[17.486993, 120.559072],[17.484864, 120.573235],[17.484946, 120.580101],[17.482654, 120.582762],
  [17.478561, 120.58362],[17.463251, 120.580187],[17.45318, 120.579586],[17.44884, 120.578728],[17.435985, 120.571089],[17.426813, 120.569029],
  [17.405192, 120.551434],[17.400688, 120.542336],[17.39864, 120.541048],[17.38619, 120.540447],[17.35539, 120.529804],[17.347771, 120.526457],
  [17.343347, 120.526628], [17.326438, 120.541799], [17.311704, 120.548446], [17.309548, 120.5477], [17.308258, 120.548], [17.307336, 120.548944], 
  [17.306578, 120.552464],[17.306189, 120.561819], [17.30709, 120.567312], [17.307459, 120.57847], [17.311105, 120.596752],[17.309466, 120.599113], 
  [17.305697, 120.600829], [17.276727, 120.627909], [17.272957, 120.632801], [17.265089, 120.65649], [17.262056, 120.673227], [17.259515, 120.675373], 
  [17.252958, 120.675116],[17.247138, 120.671768], [17.244679, 120.672798], [17.244924, 120.680094], [17.244269, 120.682755],[17.242629, 120.682755], 
  [17.238121, 120.67872], [17.236973, 120.678978], [17.231645, 120.684471],[17.208935, 120.674429], [17.202622, 120.679235], [17.201474, 120.678892], 
  [17.196391, 120.670996],[17.194833, 120.67091], [17.193685, 120.672884], [17.193029, 120.676489], [17.192127, 120.678635],[17.185895, 120.686188], 
  [17.184501, 120.693655], [17.182287, 120.698547], [17.171955, 120.710349],[17.153995, 120.724983], [17.150878, 120.72876], [17.149648, 120.733824], 
  [17.151042, 120.748587],[17.152765, 120.754251], [17.160064, 120.765066], [17.183845, 120.776095], [17.204672, 120.789957],[17.217708, 120.805149], 
  [17.218528, 120.80781], [17.214264, 120.816479], [17.20295, 120.83107], [17.186674, 120.875831], [17.184624, 120.87862], [17.182492, 120.889478], 
  [17.183312, 120.893126],[17.185936, 120.896645], [17.188683, 120.897846], [17.190979, 120.899649], [17.192783, 120.902267],[17.197579, 120.905528], 
  [17.198481, 120.906601], [17.200982, 120.907288], [17.203811, 120.907159],[17.208443, 120.911107], [17.210739, 120.911665], [17.213321, 120.910077], 
  [17.215084, 120.910378],[17.219183, 120.91218], [17.22689, 120.909519], [17.228857, 120.91085], [17.234473, 120.91085],[17.23923, 120.912928]
];
L.polygon(abraBorder, {
  color: "#ff6961",
  weight: 5,
  opacity: 0.5,
}).bindTooltip("ABRA", {
  permanent: false,
  direction: "top",
  offset: [0, -20]
}).addTo(map);

const apayaoBorder = [
  [17.677636, 121.121564], [17.62935, 121.225537], [17.658744, 121.273956], [17.646251, 121.354101], [17.628971, 121.377983], [17.638583, 121.391673], 
  [17.661504, 121.398454], [17.678919, 121.43711], [17.686611, 121.439674], [17.690086, 121.443579], [17.693418, 121.441154], [17.693827, 121.440125], 
  [17.69996, 121.437078], [17.700982, 121.43579], [17.706705, 121.432486], [17.71061, 121.432507], [17.715495, 121.43182], [17.718745, 121.431863], 
  [17.721198, 121.432164], [17.724223, 121.432185], [17.727391, 121.430383], [17.734646, 121.43122], [17.738816, 121.42813], [17.74323, 121.424181], 
  [17.749075, 121.419826], [17.754327, 121.415555], [17.788513, 121.397939], [17.794499, 121.396565], [17.804306, 121.393089], [17.808902, 121.390579], 
  [17.811824, 121.386395], [17.811701, 121.38309], [17.810986, 121.376867], [17.810353, 121.369572], [17.810394, 121.364057], [17.809903, 121.35792], 
  [17.808943, 121.349573], [17.808433, 121.337214], [17.807329, 121.324103], [17.807105, 121.316292], [17.808126, 121.31331], [17.810435, 121.311529], 
  [17.812907, 121.307645], [17.816482, 121.306851], [17.818933, 121.306872], [17.820629, 121.30816], [17.820833, 121.311378], [17.820669, 121.314254], 
  [17.820874, 121.315842], [17.82214, 121.316421], [17.837032, 121.313696], [17.841362, 121.309233], [17.846999, 121.310735], [17.849818, 121.312001], 
  [17.853127, 121.314061], [17.859397, 121.320863], [17.868199, 121.334167], [17.878492, 121.347127], [17.878768, 121.347427], [17.880504, 121.348886],//Leeg apayao 
  [17.88275, 121.349981], [17.886129, 121.35041], [17.891194, 121.351376], [17.906549, 121.353006], [17.911735, 121.353006], [17.923944, 121.357427], 
  [17.934805, 121.364551], [17.94289, 121.368971], [17.952076, 121.372576], [17.976774, 121.387596], [17.983795, 121.390343], [17.992979, 121.396694], 
  [18.004856, 121.396437], [18.012039, 121.399162], [18.016406, 121.399934], [18.027628, 121.403646], [18.030771, 121.405857], [18.039259, 121.407037], 
  [18.04387, 121.408753], [18.066066, 121.43446], [18.068595, 121.436391], [18.081977, 121.439781], [18.096459, 121.445832], [18.109063, 121.450038], 
  [18.127051, 121.456861], [18.164121, 121.464844], [18.199348, 121.466045], [18.204689, 121.466861], [18.216348, 121.471109], [18.220587, 121.471968], 
  [18.228495, 121.471667], [18.249812, 121.473341], [18.256985, 121.47686], [18.263262, 121.477375], [18.293498, 121.46493], [18.306374, 121.451883], 
  [18.311752, 121.444073], [18.325074, 121.413345], [18.326255, 121.409311], [18.421639, 121.256104], [18.456814, 121.16684], [18.477655, 121.105728], 
  [18.487749, 121.099033], [18.537071, 121.104355], [18.542605, 121.078949], [18.542117, 121.072254], [18.539513, 121.067276], [18.532351, 121.062984], 
  [18.530235, 121.057148], [18.526004, 121.050625], [18.523888, 121.045647], [18.521121, 121.043415], [18.503215, 121.039982], [18.501424, 121.040068], 
  [18.500244, 121.037664], [18.500163, 121.031699], [18.498697, 121.027236], [18.491901, 121.021099], [18.48547, 121.018009], [18.460966, 121.001444], 
  [18.458605, 120.998011], [18.457628, 120.991488], [18.452906, 120.974922], [18.445416, 120.958357], [18.438088, 120.956726], [18.421965, 120.950375], 
  [18.413495, 120.950289], [18.400872, 120.947371], [18.361368, 120.942307], [18.349393, 120.944967], [18.343446, 120.94986], [18.333018, 120.954409], 
  [18.32927, 120.954838], [18.314929, 120.948572], [18.305151, 120.947714], [18.303684, 120.946341], [18.300017, 120.945911], [18.272064, 120.935955],
  [18.267337, 120.935955], [18.262854, 120.936985], [18.260001, 120.934582], [18.258942, 120.930805], [18.25829, 120.924196], [18.254948, 120.904884], 
  [18.253317, 120.902481], [18.251117, 120.902224], [18.245981, 120.903425],  [18.238726, 120.906687], [18.231879, 120.912008], [18.219487, 120.924797], 
  [18.217286, 120.924282], [18.212964, 120.92411], [18.20954, 120.9272], [18.203262, 120.944109], [18.202121, 120.95767], [18.200734, 120.960932],  
  [18.198614, 120.964279], [18.185731, 120.972776], [18.176109, 120.97518], [18.169177, 120.97887], [18.165099, 120.9793], [18.162816, 120.977755],  
  [18.147932, 120.960803], [18.140061, 120.952649], [18.136676, 120.949731], [18.124114, 120.943422], [18.114611, 120.939989], [18.104291, 120.934582], 
  [18.099151, 120.933423], [18.088749, 120.933809], [18.074552, 120.935783], [18.060191, 120.936127], [18.053989, 120.9375], [18.041421, 120.935612], 
  [18.033423, 120.935955], [18.021507, 120.938873], [18.0171, 120.941277], [18.007141, 120.943508], [18.00355, 120.94574],[17.998489, 120.94368], 
  [17.993999, 120.943809], [17.992121, 120.943422], [17.990121, 120.941877], [17.987917, 120.942049],[17.986121, 120.941105], [17.980448, 120.941362], 
  [17.976774, 120.937328], [17.975182, 120.932136], [17.974733, 120.928059],[17.974733, 120.923424], [17.973222, 120.922866], [17.970855, 120.923338], 
  [17.967956, 120.924239], [17.962527, 120.924969], [17.960527, 120.925398], [17.957506, 120.938358], [17.954648, 120.944538], [17.950157, 120.955052],
  [17.944931, 120.963807],[17.94387, 120.965309], [17.93848, 120.976253], [17.934969, 120.982475], [17.93256, 120.986552], [17.929008, 120.98887],
  [17.921004, 120.990286], [17.909979, 120.990629], [17.897238, 120.992603], [17.881964, 120.992346], [17.865544, 120.992861],[17.858845, 120.993462], 
  [17.854434, 120.994835], [17.830332, 121.011572], [17.824612, 121.016808], [17.82167, 121.021614],[17.821262, 121.022987], [17.82118, 121.027451], 
  [17.821916, 121.03097], [17.825266, 121.044102], [17.831149, 121.062641],[17.831802, 121.074057], [17.831067, 121.076975], [17.82976, 121.078606],
  [17.822406, 121.083841], [17.80688, 121.096029],[17.799688, 121.101608], [17.793314, 121.1059], [17.779911, 121.108818], [17.762092, 121.11268], 
  [17.751956, 121.114569], [17.73062, 121.117487], [17.714269, 121.119375], [17.707482, 121.119804], [17.687531, 121.120491], [17.677636, 121.121564]
];
L.polygon(apayaoBorder, {
  color: "#c780e8",
  weight: 5,
  opacity: 0.5,
}).bindTooltip("APAYAO", {
  permanent: false,
  direction: "top",
  offset: [0, -20]
}).addTo(map);

const benguetBorder = [
  [16.24041, 120.512456], [16.238625, 120.516879], [16.236442, 120.519547], [16.235713, 120.520003],[16.234868, 120.520915], [16.233557, 120.522924],
  [16.232012, 120.52739], [16.227042, 120.54756],[16.206927, 120.6001],[16.189598, 120.63617],[16.182408, 120.656162],[16.180963, 120.662284],
  [16.181025, 120.667605],[16.185579, 120.682025],[16.1883, 120.693634],[16.191864, 120.721421],[16.197531, 120.744381],[16.22543, 120.739832],
  [16.248792, 120.745068],[16.280267, 120.76335],[16.311758, 120.787318],[16.320551, 120.796373],[16.324201, 120.803454],[16.316227, 120.813003],
  [16.31392, 120.823045],[16.315073, 120.826006],[16.338837, 120.842743],[16.395743, 120.868149],[16.412539, 120.8745],[16.43872, 120.889435],
  [16.451397, 120.88789],[16.46539, 120.89098],[16.49576, 120.884714],[16.53024, 120.888748],[16.595809, 120.894756],[16.597618, 120.899048],
  [16.615724, 120.884285],[16.630751, 120.878424],[16.635917, 120.877802],[16.651323, 120.87759],[16.664994, 120.875981],[16.670857, 120.874613],
  [16.675456, 120.875595],[16.687378, 120.874704],[16.699936, 120.874758],[16.707315, 120.873878],[16.725949, 120.870574],[16.744058, 120.871925],
  [16.746277, 120.871239],[16.809471, 120.862656],[16.840362, 120.846519],[16.842087, 120.84034],[16.853259, 120.83416],[16.863855, 120.823946],
  [16.870262, 120.810814],[16.870837, 120.807123],[16.878393, 120.793905],[16.920195, 120.762577],[16.910505, 120.747814],[16.909684, 120.689449],
  [16.892109, 120.641556],[16.881597, 120.632458],[16.855477, 120.633659],[16.807499, 120.619755],[16.7554, 120.620613],[16.750304, 120.623188],
  [16.66448, 120.598297],[16.496913, 120.461826],[16.464526, 120.464852],[16.437207, 120.473145],[16.433832, 120.470409],[16.429829, 120.469733],
  [16.423844, 120.469683],[16.390843, 120.473596], [16.240346, 120.512445],[16.24041, 120.512456],
];
L.polygon(benguetBorder, {
  
  color: "#ffb480",
  weight: 5,
  opacity: 0.5,
}).bindTooltip("BENGUET", {
  permanent: false,
  direction: "top",
  offset: [0, -20]
}).addTo(map);

const ifugaoBorder =[
  [16.597731, 120.898798],[16.597937, 120.901312],[16.59878, 120.907416],[16.599428, 120.91291],[16.603027, 120.92749],[16.608599, 120.958325],
  [16.611149, 120.983205],[16.61458, 120.994033],[16.621635, 121.049337],[16.628708, 121.069937],[16.635041, 121.114483],[16.648527, 121.19173],
  [16.646101, 121.193726],[16.64641, 121.196043],[16.648404, 121.201172],[16.647602, 121.206021],[16.646358, 121.208307],[16.645264, 121.209084],
  [16.644672, 121.209272],[16.644035, 121.209723],[16.644066, 121.210238],[16.644703, 121.211938],[16.644652, 121.213993],[16.645125, 121.214897],
  [16.645888, 121.215551],[16.648059, 121.216187],[16.649015, 121.216884],[16.649519, 121.217743],[16.64991, 121.218885],[16.650285, 121.220481],
  [16.650953, 121.228681],[16.650233, 121.230848],[16.653564, 121.233938],[16.653482, 121.236277],[16.653852, 121.238315],[16.658683, 121.242456],
  [16.659238, 121.244645],[16.652294, 121.262922],[16.653502, 121.26327],[16.65407, 121.263836],[16.654443, 121.263863],[16.654823, 121.263565],
  [16.655075, 121.263539],[16.656277, 121.263957],[16.658179, 121.263742], [16.659053, 121.263227],[16.660235, 121.263582],[16.659402, 121.266897],
  [16.658683, 121.268914],[16.659084, 121.269557],[16.664562, 121.271811],[16.668509, 121.277046],[16.666782, 121.279621],[16.662753, 121.280587],
  [16.657264, 121.288376],[16.664151, 121.294212],[16.669249, 121.290865],[16.679814, 121.294384],[16.685939, 121.288118],[16.687378, 121.28829],
  [16.693544, 121.296015],[16.691941, 121.30331],[16.694736, 121.311722],[16.707232, 121.316185],[16.716933, 121.31361],[16.732222, 121.325283],
  [16.737975, 121.336613],[16.751784, 121.339703],[16.755235, 121.336613],[16.753263, 121.330948],[16.761975, 121.329231], [16.763454, 121.331549],
  [16.767892, 121.343994], [16.769618, 121.344595], [16.774384, 121.343908], [16.776767, 121.342192], [16.780712, 121.336699], [16.785067, 121.335926], 
  [16.787368, 121.338158], [16.788354, 121.342192], [16.786546, 121.351118], [16.784985, 121.352577], [16.781698, 121.35335], [16.775699, 121.352491], 
  [16.774548, 121.354809], [16.776192, 121.356955], [16.778822, 121.358328], [16.784163, 121.358414], [16.788025, 121.359615], [16.788847, 121.363134], 
  [16.787696, 121.37455], [16.7886, 121.375923], [16.790819, 121.376095], [16.796242, 121.371202], [16.797064, 121.371202], [16.797803, 121.373348], 
  [16.796242, 121.379871], [16.796242, 121.38545], [16.797146, 121.388111], [16.798379, 121.38957], [16.802672, 121.390686], [16.803925, 121.391973], 
  [16.804685, 121.393991], [16.805096, 121.396115], [16.806184, 121.403389], [16.806924, 121.40517], [16.809122, 121.408131], [16.810786, 121.40959],
  [16.815838, 121.41283], [16.817749, 121.41444], [16.819803, 121.416821], [16.82122, 121.418967], [16.823068, 121.423388], [16.825492, 121.432571], 
  [16.828203, 121.444201], [16.830545, 121.453857], [16.828409, 121.462612], [16.828409, 121.463213], [16.830894, 121.471721], [16.831982, 121.477311], 
  [16.83227, 121.481023], [16.832865, 121.483684], [16.834447, 121.487181], [16.834817, 121.489413], [16.834467, 121.492867], [16.834344, 121.50454], 
  [16.834601, 121.506461], [16.834611, 121.506557], [16.837733, 121.513832], [16.84336, 121.523831], [16.843576, 121.524067], [16.844089, 121.524239], 
  [16.846728, 121.524239], [16.847386, 121.524625], [16.847837, 121.525462], [16.849501, 121.529313], [16.850168, 121.530461], [16.850712, 121.531094], 
  [16.851585, 121.531717], [16.853423, 121.532092], [16.855343, 121.532092], [16.859461, 121.53162], [16.860744, 121.531684], [16.862356, 121.531974], 
  [16.864143, 121.532489], [16.867572, 121.534324], [16.86825, 121.534946], [16.870241, 121.538197], [16.88018, 121.547263], [16.880791, 121.547493], 
  [16.881366, 121.547542], [16.88346, 121.546882], [16.884728, 121.545932], [16.889563, 121.543121], [16.892356, 121.542993], [16.894327, 121.544452], 
  [16.895271, 121.545653], [16.898104, 121.547799], [16.900322, 121.549687], [16.902211, 121.552048], [16.903648, 121.555052], [16.903689, 121.557498], 
  [16.902416, 121.559258], [16.901471, 121.561017], [16.901471, 121.56312], [16.90217, 121.565995], [16.903483, 121.568828], [16.907877, 121.573849], 
  [16.909027, 121.575308], [16.909889, 121.577368], [16.911572, 121.578441], [16.912968, 121.578484], [16.915062, 121.578012], [16.916787, 121.577969], 
  [16.919332, 121.578698], [16.925943, 121.579514], [16.927051, 121.580114], [16.927144, 121.580822], [16.926497, 121.583848], [16.926538, 121.584234], 
  [16.926938, 121.585243], [16.927472, 121.585983], [16.928355, 121.589009], [16.928488, 121.589824],[17.032495, 121.587067],[17.097316, 121.571059],[17.028596, 121.147399],
  [17.017384, 121.141251],[17.013454, 121.082575], [17.006498, 121.06616],[17.003749, 121.06307],[16.988174, 121.033437],[16.98801, 121.025605],
  [16.990246, 121.020434],[17.003277, 121.011915], [17.006888, 121.004877],[17.001799, 120.993032],[17.003687, 120.987368],[17.009351, 120.978699],
  [17.008119, 120.972948],[16.973726, 120.957928], [16.943206, 120.96267],[16.9422, 120.962192],[16.937623, 120.957541],[16.90685, 120.95561],
  [16.893177, 120.943208],[16.853505, 120.932822], [16.844141, 120.917716],[16.843976, 120.894842],[16.852479, 120.866432],[16.851657, 120.859308],
  [16.841427, 120.845774],[16.827176, 120.856583],[16.82027, 120.860097],[16.79201, 120.866904],[16.786957, 120.867977],[16.761029, 120.871325],
  [16.746523, 120.871196],[16.744017, 120.872011], [16.725934, 120.870552],[16.707613, 120.873814],[16.699885, 120.874715],[16.675374, 120.875595],
  [16.670842, 120.874618],[16.665076, 120.87597],[16.651405, 120.877547],[16.630887, 120.878363],[16.615631, 120.884285],[16.605638, 120.892997],[16.597731, 120.898798], 
];
L.polygon(ifugaoBorder, {
  color: "#42d6a4",
  weight: 5,
  opacity: 0.5,
}).bindTooltip("IFUGAO", {
  permanent: false,
  direction: "top",
  offset: [0, -20]
}).addTo(map);

const mtprBorder =[
  [16.841427, 120.845774],[16.865457, 120.820985],[16.87036, 120.810648],[16.871001, 120.807239],[16.915278, 120.768481],
  [16.915144, 120.768542],[16.921303, 120.763548],[16.936263, 120.776938],[16.940024, 120.778949],[16.942713, 120.779786],
  [16.984398, 120.783863],[17.024452, 120.780087],[17.096331, 120.786266],[17.118152, 120.794334],[17.130784, 120.801544],[17.159818, 120.82798],
  [17.174743, 120.847034],[17.184747, 120.878792],[17.182451, 120.889564],[17.18324, 120.893061],[17.184645, 120.895314],[17.185821, 120.896519],
  [17.186761, 120.897087],[17.188747, 120.897876],[17.191061, 120.899692],[17.192793, 120.902267],[17.197651, 120.905603],[17.198558, 120.906692],
  [17.201013, 120.907266],[17.203065, 120.906998],[17.203847, 120.907194],[17.2045, 120.90798],[17.205128, 120.908441],[17.206183, 120.908859],
  [17.208556, 120.911163],[17.209914, 120.911568],[17.210923, 120.911665],[17.213288, 120.910144],[17.215238, 120.910426],[17.219183, 120.912137],
  [17.226877, 120.909533],[17.228983, 120.910866],[17.232208, 120.910656],[17.234516, 120.910887],[17.236432, 120.911971],[17.239222, 120.912926],
  [17.238869, 120.916471],[17.237913, 120.92292],[17.178556, 121.134567],[17.171135, 121.201859],[17.171463, 121.210785],[17.178597, 121.252584],
  [17.292995, 121.41916],[17.295146, 121.432121],[17.294695, 121.438107],[17.292606, 121.44315],[17.287689, 121.450317],[17.283365, 121.461571],
  [17.280907, 121.47553],[17.280169, 121.528444],[17.274596, 121.545353],[17.268859, 121.554623],[17.251498, 121.5732],[17.235477, 121.574965],
  [17.215771, 121.583869],[17.132404, 121.587705],[17.129918, 121.586911],[17.125227, 121.584545],[17.086958, 121.573312],[17.097316, 121.571059],
  [17.028725, 121.147329],[17.017381, 121.141241],[17.015804, 121.119662],[17.015575, 121.105425],[17.014862, 121.094267],[17.013498, 121.08254],
  [17.009097, 121.071189],[17.006468, 121.066096],[17.003669, 121.06295],[16.99078, 121.041591],[16.988153, 121.033373],[16.987989, 121.025498],
  [16.988892, 121.022687],[16.990226, 121.020434],[16.992124, 121.018798],[16.993827, 121.017746],[16.997223, 121.016424],[16.999527, 121.014951],
  [17.003377, 121.011786],[17.006868, 121.005907],[17.007004, 121.004775],[17.006065, 121.002313],[17.00497, 121.000712],[17.002474, 120.995015],
  [17.002053, 120.992998],[17.002453, 120.989838],[17.003959, 120.987067],[17.008284, 120.982186],[17.009474, 120.979037],[17.009443, 120.976076],
  [17.008214, 120.973018],[17.005011, 120.969424],[17.002305, 120.967404],[16.999629, 120.966133],[16.995071, 120.965264],[16.988689, 120.961495],
  [16.983685, 120.959371],[16.981899, 120.95885],[16.977605, 120.958014],[16.974013, 120.957799],[16.965853, 120.958864],[16.942857, 120.962563],
  [16.94023, 120.959473],[16.937643, 120.95752],[16.936535, 120.957327],[16.926558, 120.958464],[16.906969, 120.955594],[16.904659, 120.954098],
  [16.897068, 120.945718],[16.893279, 120.943165],[16.890754, 120.942403],[16.87325, 120.942433],[16.857592, 120.935676],[16.853454, 120.932645],
  [16.850294, 120.928563],[16.844161, 120.917716],[16.843052, 120.911],[16.842724, 120.903307],[16.844038, 120.894982],[16.852419, 120.866389],
  [16.851729, 120.859319],[16.850476, 120.856492],[16.848792, 120.854118],[16.841034, 120.845331],[16.84105, 120.842392],[16.842179, 120.840463],
  [16.844254, 120.838974],[16.853115, 120.834283],[16.858773, 120.82963],[16.861476, 120.826781],[16.86422, 120.823482],[16.87036, 120.81064],
  [16.871001, 120.807241],[16.874176, 120.800707],[16.878696, 120.793809],[16.896639, 120.779679],[16.900966, 120.776179],[16.909406, 120.7716],
  [16.911865, 120.770468],[16.915275, 120.768481],[16.918037, 120.765868],[16.921288, 120.763521]
];
L.polygon(mtprBorder, {
  color: "#08cad1",
  weight: 5,
  opacity: 0.5,
}).bindTooltip("MOUNTAIN PROVINCE", {
  permanent: false,
  direction: "top",
  offset: [0, -20]
}).addTo(map);

const kalingaBorder = [
  [17.23923, 120.912928], [17.243165, 120.912652],[17.246397, 120.913344], [17.259346, 120.91675],[17.260099, 120.917217], [17.263895, 120.916858],
  [17.265235, 120.917193], [17.26722, 120.918188],[17.268316, 120.919272], [17.27185, 120.924239],[17.275177, 120.925677], [17.280999, 120.925682],
  [17.284841, 120.925299], [17.289625, 120.927458],[17.291622, 120.929775], [17.2932, 120.930312],[17.296498, 120.931792], [17.302993, 120.932736],
  [17.306865, 120.935161], [17.308524, 120.935569],[17.309139, 120.935955], [17.32016, 120.941792],[17.322823, 120.945439], [17.32524, 120.946813],
  [17.326715, 120.9484], [17.327616, 120.950546], [17.333065, 120.952349], [17.339865, 120.956383], [17.342364, 120.958786],[17.345067, 120.963507],
  [17.348017, 120.964451], [17.350638, 120.96797], [17.370791, 120.974064], [17.377098, 120.987797], [17.379965, 120.991659], [17.38144, 120.995092],
  [17.387992, 120.999899], [17.393071, 121.001616],[17.398313, 120.999556], [17.416576, 121.001015],[17.425748, 120.992775],[17.479379, 120.996208],
  [17.486584, 121.008224], [17.509832, 121.03569],[17.542898, 121.104355],[17.555009, 121.111908],[17.585449, 121.117744],[17.647948, 121.088562],
  [17.655473, 121.090193],[17.66406, 121.106672],[17.666759, 121.119633],[17.668395, 121.121092],[17.677554, 121.121607],[17.629135, 121.225376], 
  [17.658581, 121.273956], [17.646149, 121.354122], [17.629135, 121.377983], [17.638542, 121.391716], [17.66128, 121.398411], [17.678781, 121.436949],
  [17.686549, 121.43961], [17.690025, 121.443558], [17.68197, 121.440125], [17.677309, 121.450381], [17.670603, 121.460552], [17.66357, 121.468878],
  [17.646476, 121.482868], [17.635106, 121.489048], [17.567611, 121.542778], [17.532094, 121.614189], [17.506885, 121.648607], [17.503447, 121.652985], 
  [17.501892, 121.653585], [17.46235, 121.65659], [17.400606, 121.63084], [17.398395, 121.62921], [17.350679, 121.608095], [17.347607, 121.607709], 
  [17.343347, 121.606464], [17.338677, 121.604018], [17.333474, 121.597795], [17.329787, 121.59565], [17.267875, 121.573677], [17.252794, 121.574106], 
  [17.251318, 121.573162], [17.268859, 121.554623], [17.274801, 121.545267], [17.279288, 121.53265], [17.28019, 121.528316], [17.281153, 121.509562], 
  [17.280825, 121.500206], [17.281317, 121.490593], [17.280825, 121.475616], [17.283365, 121.461368], [17.28775, 121.450167], [17.292626, 121.443086], 
  [17.294634, 121.438065], [17.295126, 121.432164], [17.294757, 121.427701], [17.293015, 121.419246], [17.289696, 121.411371], [17.285087, 121.40326], 
  [17.266236, 121.379356], [17.253204, 121.36116], [17.243285, 121.346998], [17.238572, 121.341634], [17.231112, 121.329188], [17.222955, 121.317472], 
  [17.207828, 121.297603], [17.197046, 121.284342], [17.190241, 121.27533], [17.181631, 121.260052], [17.178515, 121.252155], [17.172775, 121.221085], 
  [17.171381, 121.21027], [17.171135, 121.201773], [17.178597, 121.134481], [17.182062, 121.11901], [17.184071, 121.110063], [17.189421, 121.091094], 
  [17.211046, 121.014748], [17.237895, 120.922844], [17.23923, 120.912928], 
];

L.polygon(kalingaBorder, {
  color: "#59adf6",
  weight: 5,
  opacity: 0.5,
}).bindTooltip("KALINGA", {
  permanent: false,
  direction: "top",
  offset: [0, -20]
}).addTo(map);

const baguioBorder = [
  [16.434253, 120.54491],[16.372068, 120.568342],[16.360621, 120.632125],
  [16.380092, 120.635491],[16.415117, 120.630497],[16.428519, 120.630462],
  [16.42847, 120.621552],[16.431835, 120.598552],[16.43174, 120.597959],
  [16.432041, 120.581753], [16.434284, 120.545007],

];

L.polygon(baguioBorder, {
  color: "#f8f38d",
  weight: 5,
  opacity: 0.5,
}).bindTooltip("BAGUIO CITY", {
  permanent: false,
  direction: "top",
  offset: [0, -20]
}).addTo(map);

const baseLayers = {
  "OpenStreetMap": osmLayer,
  "Satellite View": satelliteLayer
};
// Add the Layer Control to the map (allowing users to toggle layers)
L.control.layers(baseLayers).addTo(map);