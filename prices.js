// Generated from prices3.xlsx
// All companies + all services
// BRS NB and BRS WB are MTOW-based exactly as provided in the Excel file.

const iraqiAirlines = ["UR", "Fly Baghdad", "Global"];

const basicMtowBuckets = [
  "MTOW up to 25,000 kgs",
  "MTOW – From 25,001 to 60,000 kgs",
  "MTOW – From 60,001 to 100,000 kgs",
  "MTOW – From 100,001 to 200,000 kgs",
  "MTOW – From 200,001 to 300,000 kgs",
  "Above 300,000 kgs"
];

const brsNBMtowBuckets = [
  "MTOW up to 25,000 kgs",
  "MTOW – From 25,001 to 60,000 kgs",
  "MTOW – From 60,001 to 100,000 kgs"
];

const brsWBMtowBuckets = [
  "MTOW – From 100,001 to 200,000 kgs",
  "MTOW – From 200,001 to 300,000 kgs",
  "Above 300,000 kgs"
];

const basicHandlingTable = {
  "Air Arabia": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 182,
      "Charter": 285
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 352,
      "Charter": 415
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 506,
      "Charter": 580
    },
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 572,
      "Charter": 640
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 787,
      "Charter": 835
    },
    "Above 300,000 kgs": {
      "Schedule": 869,
      "Charter": 910
    }
  },
  "Fly cham": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 182,
      "Charter": 285
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 352,
      "Charter": 415
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 506,
      "Charter": 580
    },
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 572,
      "Charter": 640
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 787,
      "Charter": 835
    },
    "Above 300,000 kgs": {
      "Schedule": 869,
      "Charter": 910
    }
  },
  "Egypt Air": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 182,
      "Charter": 285
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 352,
      "Charter": 415
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 506,
      "Charter": 580
    },
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 572,
      "Charter": 640
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 787,
      "Charter": 835
    },
    "Above 300,000 kgs": {
      "Schedule": 869,
      "Charter": 910
    }
  },
  "Emirates": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 182,
      "Charter": 285
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 352,
      "Charter": 415
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 506,
      "Charter": 580
    },
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 572,
      "Charter": 640
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 787,
      "Charter": 835
    },
    "Above 300,000 kgs": {
      "Schedule": 869,
      "Charter": 910
    }
  },
  "Fly Dubai": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 182,
      "Charter": 285
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 352,
      "Charter": 415
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 506,
      "Charter": 580
    },
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 572,
      "Charter": 640
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 787,
      "Charter": 835
    },
    "Above 300,000 kgs": {
      "Schedule": 869,
      "Charter": 910
    }
  },
  "Middle East airline": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 182,
      "Charter": 285
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 352,
      "Charter": 415
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 506,
      "Charter": 580
    },
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 572,
      "Charter": 640
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 787,
      "Charter": 835
    },
    "Above 300,000 kgs": {
      "Schedule": 869,
      "Charter": 910
    }
  },
  "Pegasus Airine": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 182,
      "Charter": 285
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 352,
      "Charter": 415
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 506,
      "Charter": 580
    },
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 572,
      "Charter": 640
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 787,
      "Charter": 835
    },
    "Above 300,000 kgs": {
      "Schedule": 869,
      "Charter": 910
    }
  },
  "QATAR AIRWAYS": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 182,
      "Charter": 285
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 352,
      "Charter": 415
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 506,
      "Charter": 580
    },
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 572,
      "Charter": 640
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 787,
      "Charter": 835
    },
    "Above 300,000 kgs": {
      "Schedule": 869,
      "Charter": 910
    }
  },
  "Syrian Air": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 182,
      "Charter": 285
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 352,
      "Charter": 415
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 506,
      "Charter": 580
    },
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 572,
      "Charter": 640
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 787,
      "Charter": 835
    },
    "Above 300,000 kgs": {
      "Schedule": 869,
      "Charter": 910
    }
  },
  "Turkish Airlines": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 182,
      "Charter": 285
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 352,
      "Charter": 415
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 506,
      "Charter": 580
    },
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 572,
      "Charter": 640
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 787,
      "Charter": 835
    },
    "Above 300,000 kgs": {
      "Schedule": 869,
      "Charter": 910
    }
  },
  "Meraj": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 182,
      "Charter": 285
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 352,
      "Charter": 415
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 506,
      "Charter": 580
    },
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 572,
      "Charter": 640
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 787,
      "Charter": 835
    },
    "Above 300,000 kgs": {
      "Schedule": 869,
      "Charter": 910
    }
  },
  "Royal Jordanian": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 182,
      "Charter": 285
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 352,
      "Charter": 415
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 506,
      "Charter": 580
    },
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 572,
      "Charter": 640
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 787,
      "Charter": 835
    },
    "Above 300,000 kgs": {
      "Schedule": 869,
      "Charter": 910
    }
  },
  "UR": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 273000,
      "Charter": 428000
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 488000,
      "Charter": 623000
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 759000,
      "Charter": 870000
    },
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 858000,
      "Charter": 960000
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 1181000,
      "Charter": 1253000
    },
    "Above 300,000 kgs": {
      "Schedule": 1304000,
      "Charter": 1365000
    }
  },
  "ItlalaAlsharq-YZD": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 182,
      "Charter": 285
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 352,
      "Charter": 415
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 506,
      "Charter": 580
    },
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 572,
      "Charter": 640
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 787,
      "Charter": 835
    },
    "Above 300,000 kgs": {
      "Schedule": 869,
      "Charter": 910
    }
  },
  "Fly Baghdad": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 273000,
      "Charter": 428000
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 488000,
      "Charter": 623000
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 759000,
      "Charter": 870000
    },
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 858000,
      "Charter": 960000
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 1181000,
      "Charter": 1253000
    },
    "Above 300,000 kgs": {
      "Schedule": 1304000,
      "Charter": 1365000
    }
  },
  "Avia Traffic": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 182,
      "Charter": 285
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 352,
      "Charter": 415
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 506,
      "Charter": 580
    },
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 572,
      "Charter": 640
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 787,
      "Charter": 835
    },
    "Above 300,000 kgs": {
      "Schedule": 869,
      "Charter": 910
    }
  },
  "Tail wind": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 182,
      "Charter": 285
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 352,
      "Charter": 415
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 506,
      "Charter": 580
    },
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 572,
      "Charter": 640
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 787,
      "Charter": 835
    },
    "Above 300,000 kgs": {
      "Schedule": 869,
      "Charter": 910
    }
  },
  "Mahan Air": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 182,
      "Charter": 285
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 352,
      "Charter": 415
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 506,
      "Charter": 580
    },
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 572,
      "Charter": 640
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 787,
      "Charter": 835
    },
    "Above 300,000 kgs": {
      "Schedule": 869,
      "Charter": 910
    }
  },
  "Armenia Air": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 182,
      "Charter": 285
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 352,
      "Charter": 415
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 506,
      "Charter": 580
    },
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 572,
      "Charter": 640
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 787,
      "Charter": 835
    },
    "Above 300,000 kgs": {
      "Schedule": 869,
      "Charter": 910
    }
  },
  "Jordan aviation": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 182,
      "Charter": 285
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 352,
      "Charter": 415
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 506,
      "Charter": 580
    },
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 572,
      "Charter": 640
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 787,
      "Charter": 835
    },
    "Above 300,000 kgs": {
      "Schedule": 869,
      "Charter": 910
    }
  },
  "TABAN AIR": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 182,
      "Charter": 285
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 352,
      "Charter": 415
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 506,
      "Charter": 580
    },
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 572,
      "Charter": 640
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 787,
      "Charter": 835
    },
    "Above 300,000 kgs": {
      "Schedule": 869,
      "Charter": 910
    }
  },
  "Jet Magic Airline": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 182,
      "Charter": 285
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 352,
      "Charter": 415
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 506,
      "Charter": 580
    },
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 572,
      "Charter": 640
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 787,
      "Charter": 835
    },
    "Above 300,000 kgs": {
      "Schedule": 869,
      "Charter": 910
    }
  },
  "Klas Jet Airline": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 182,
      "Charter": 285
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 352,
      "Charter": 415
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 506,
      "Charter": 580
    },
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 572,
      "Charter": 640
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 787,
      "Charter": 835
    },
    "Above 300,000 kgs": {
      "Schedule": 869,
      "Charter": 910
    }
  },
  "RED WINGS": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 182,
      "Charter": 285
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 352,
      "Charter": 415
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 506,
      "Charter": 580
    },
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 572,
      "Charter": 640
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 787,
      "Charter": 835
    },
    "Above 300,000 kgs": {
      "Schedule": 869,
      "Charter": 910
    }
  },
  "PAKISTAN AIR": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 182,
      "Charter": 285
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 352,
      "Charter": 415
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 506,
      "Charter": 580
    },
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 572,
      "Charter": 640
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 787,
      "Charter": 835
    },
    "Above 300,000 kgs": {
      "Schedule": 869,
      "Charter": 910
    }
  },
  "QESHM AIR": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 182,
      "Charter": 285
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 352,
      "Charter": 415
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 506,
      "Charter": 580
    },
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 572,
      "Charter": 640
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 787,
      "Charter": 835
    },
    "Above 300,000 kgs": {
      "Schedule": 869,
      "Charter": 910
    }
  },
  "Cash Customers": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 182,
      "Charter": 285
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 352,
      "Charter": 415
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 506,
      "Charter": 580
    },
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 572,
      "Charter": 640
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 787,
      "Charter": 835
    },
    "Above 300,000 kgs": {
      "Schedule": 869,
      "Charter": 910
    }
  },
  "ATA  air": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 182,
      "Charter": 285
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 352,
      "Charter": 415
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 506,
      "Charter": 580
    },
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 572,
      "Charter": 640
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 787,
      "Charter": 835
    },
    "Above 300,000 kgs": {
      "Schedule": 869,
      "Charter": 910
    }
  },
  "Aseman air": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 182,
      "Charter": 285
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 352,
      "Charter": 415
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 506,
      "Charter": 580
    },
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 572,
      "Charter": 640
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 787,
      "Charter": 835
    },
    "Above 300,000 kgs": {
      "Schedule": 869,
      "Charter": 910
    }
  },
  "Nile Air": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 182,
      "Charter": 285
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 352,
      "Charter": 415
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 506,
      "Charter": 580
    },
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 572,
      "Charter": 640
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 787,
      "Charter": 835
    },
    "Above 300,000 kgs": {
      "Schedule": 869,
      "Charter": 910
    }
  },
  "ASA": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 182,
      "Charter": 285
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 352,
      "Charter": 415
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 506,
      "Charter": 580
    },
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 572,
      "Charter": 640
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 787,
      "Charter": 835
    },
    "Above 300,000 kgs": {
      "Schedule": 869,
      "Charter": 910
    }
  },
  "Sama Al Iraq - UT Air": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 182,
      "Charter": 285
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 352,
      "Charter": 415
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 506,
      "Charter": 580
    },
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 572,
      "Charter": 640
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 787,
      "Charter": 835
    },
    "Above 300,000 kgs": {
      "Schedule": 869,
      "Charter": 910
    }
  },
  "SAHA Air": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 182,
      "Charter": 285
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 352,
      "Charter": 415
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 506,
      "Charter": 580
    },
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 572,
      "Charter": 640
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 787,
      "Charter": 835
    },
    "Above 300,000 kgs": {
      "Schedule": 869,
      "Charter": 910
    }
  },
  "Pars Air": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 182,
      "Charter": 285
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 352,
      "Charter": 415
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 506,
      "Charter": 580
    },
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 572,
      "Charter": 640
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 787,
      "Charter": 835
    },
    "Above 300,000 kgs": {
      "Schedule": 869,
      "Charter": 910
    }
  },
  "Zagros Air": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 182,
      "Charter": 285
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 352,
      "Charter": 415
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 506,
      "Charter": 580
    },
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 572,
      "Charter": 640
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 787,
      "Charter": 835
    },
    "Above 300,000 kgs": {
      "Schedule": 869,
      "Charter": 910
    }
  },
  "AEROFLOT Airline": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 182,
      "Charter": 285
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 352,
      "Charter": 415
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 506,
      "Charter": 580
    },
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 572,
      "Charter": 640
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 787,
      "Charter": 835
    },
    "Above 300,000 kgs": {
      "Schedule": 869,
      "Charter": 910
    }
  },
  "Fly Arna": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 182,
      "Charter": 285
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 352,
      "Charter": 415
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 506,
      "Charter": 580
    },
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 572,
      "Charter": 640
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 787,
      "Charter": 835
    },
    "Above 300,000 kgs": {
      "Schedule": 869,
      "Charter": 910
    }
  },
  "Fly Nas": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 182,
      "Charter": 285
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 352,
      "Charter": 415
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 506,
      "Charter": 580
    },
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 572,
      "Charter": 640
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 787,
      "Charter": 835
    },
    "Above 300,000 kgs": {
      "Schedule": 869,
      "Charter": 910
    }
  },
  "Flyadeal": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 182,
      "Charter": 285
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 352,
      "Charter": 415
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 506,
      "Charter": 580
    },
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 572,
      "Charter": 640
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 787,
      "Charter": 835
    },
    "Above 300,000 kgs": {
      "Schedule": 869,
      "Charter": 910
    }
  },
  "Fly Sepehran": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 182,
      "Charter": 285
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 352,
      "Charter": 415
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 506,
      "Charter": 580
    },
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 572,
      "Charter": 640
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 787,
      "Charter": 835
    },
    "Above 300,000 kgs": {
      "Schedule": 869,
      "Charter": 910
    }
  },
  "VIP Terminal": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 182,
      "Charter": 285
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 352,
      "Charter": 415
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 506,
      "Charter": 580
    },
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 572,
      "Charter": 640
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 787,
      "Charter": 835
    },
    "Above 300,000 kgs": {
      "Schedule": 869,
      "Charter": 910
    }
  },
  "Salam Air": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 182,
      "Charter": 285
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 352,
      "Charter": 415
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 506,
      "Charter": 580
    },
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 572,
      "Charter": 640
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 787,
      "Charter": 835
    },
    "Above 300,000 kgs": {
      "Schedule": 869,
      "Charter": 910
    }
  },
  "ASL Group": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 182,
      "Charter": 285
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 352,
      "Charter": 415
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 506,
      "Charter": 580
    },
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 572,
      "Charter": 640
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 787,
      "Charter": 835
    },
    "Above 300,000 kgs": {
      "Schedule": 869,
      "Charter": 910
    }
  },
  "Baghdad Lounge": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 182,
      "Charter": 285
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 352,
      "Charter": 415
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 506,
      "Charter": 580
    },
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 572,
      "Charter": 640
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 787,
      "Charter": 835
    },
    "Above 300,000 kgs": {
      "Schedule": 869,
      "Charter": 910
    }
  },
  "Caspian Air": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 182,
      "Charter": 285
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 352,
      "Charter": 415
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 506,
      "Charter": 580
    },
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 572,
      "Charter": 640
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 787,
      "Charter": 835
    },
    "Above 300,000 kgs": {
      "Schedule": 869,
      "Charter": 910
    }
  },
  "Farish Air": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 182,
      "Charter": 285
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 352,
      "Charter": 415
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 506,
      "Charter": 580
    },
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 572,
      "Charter": 640
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 787,
      "Charter": 835
    },
    "Above 300,000 kgs": {
      "Schedule": 869,
      "Charter": 910
    }
  },
  "ItlalaAlsharq-ARN": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 182,
      "Charter": 285
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 352,
      "Charter": 415
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 506,
      "Charter": 580
    },
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 572,
      "Charter": 640
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 787,
      "Charter": 835
    },
    "Above 300,000 kgs": {
      "Schedule": 869,
      "Charter": 910
    }
  },
  "freebird": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 182,
      "Charter": 285
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 352,
      "Charter": 415
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 506,
      "Charter": 580
    },
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 572,
      "Charter": 640
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 787,
      "Charter": 835
    },
    "Above 300,000 kgs": {
      "Schedule": 869,
      "Charter": 910
    }
  },
  "Iran Tour": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 182,
      "Charter": 285
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 352,
      "Charter": 415
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 506,
      "Charter": 580
    },
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 572,
      "Charter": 640
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 787,
      "Charter": 835
    },
    "Above 300,000 kgs": {
      "Schedule": 869,
      "Charter": 910
    }
  },
  "Air Arabia-Abo Dhabi": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 182,
      "Charter": 285
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 352,
      "Charter": 415
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 506,
      "Charter": 580
    },
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 572,
      "Charter": 640
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 787,
      "Charter": 835
    },
    "Above 300,000 kgs": {
      "Schedule": 869,
      "Charter": 910
    }
  },
  "A Jet": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 182,
      "Charter": 285
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 352,
      "Charter": 415
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 506,
      "Charter": 580
    },
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 572,
      "Charter": 640
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 787,
      "Charter": 835
    },
    "Above 300,000 kgs": {
      "Schedule": 869,
      "Charter": 910
    }
  },
  "Gulf Air": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 182,
      "Charter": 285
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 352,
      "Charter": 415
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 506,
      "Charter": 580
    },
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 572,
      "Charter": 640
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 787,
      "Charter": 835
    },
    "Above 300,000 kgs": {
      "Schedule": 869,
      "Charter": 910
    }
  },
  "Sama terminal": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 182,
      "Charter": 285
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 352,
      "Charter": 415
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 506,
      "Charter": 580
    },
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 572,
      "Charter": 640
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 787,
      "Charter": 835
    },
    "Above 300,000 kgs": {
      "Schedule": 869,
      "Charter": 910
    }
  },
  "Global": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 273000,
      "Charter": 428000
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 488000,
      "Charter": 623000
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 759000,
      "Charter": 870000
    },
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 858000,
      "Charter": 960000
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 1181000,
      "Charter": 1253000
    },
    "Above 300,000 kgs": {
      "Schedule": 1304000,
      "Charter": 1365000
    }
  },
  "Simor": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 182,
      "Charter": 285
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 352,
      "Charter": 415
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 506,
      "Charter": 580
    },
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 572,
      "Charter": 640
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 787,
      "Charter": 835
    },
    "Above 300,000 kgs": {
      "Schedule": 869,
      "Charter": 910
    }
  },
  "AlRawdatain": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 182,
      "Charter": 285
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 352,
      "Charter": 415
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 506,
      "Charter": 580
    },
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 572,
      "Charter": 640
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 787,
      "Charter": 835
    },
    "Above 300,000 kgs": {
      "Schedule": 869,
      "Charter": 910
    }
  },
  "AlMarbad Company": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 182,
      "Charter": 285
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 352,
      "Charter": 415
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 506,
      "Charter": 580
    },
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 572,
      "Charter": 640
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 787,
      "Charter": 835
    },
    "Above 300,000 kgs": {
      "Schedule": 869,
      "Charter": 910
    }
  },
  "ItlalaAlsharq-AN": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 182,
      "Charter": 285
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 352,
      "Charter": 415
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 506,
      "Charter": 580
    },
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 572,
      "Charter": 640
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 787,
      "Charter": 835
    },
    "Above 300,000 kgs": {
      "Schedule": 869,
      "Charter": 910
    }
  },
  "ItlalaAlsharq-QM": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 182,
      "Charter": 285
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 352,
      "Charter": 415
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 506,
      "Charter": 580
    },
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 572,
      "Charter": 640
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 787,
      "Charter": 835
    },
    "Above 300,000 kgs": {
      "Schedule": 869,
      "Charter": 910
    }
  },
  "ItlalaAlsharq-SR": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 182,
      "Charter": 285
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 352,
      "Charter": 415
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 506,
      "Charter": 580
    },
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 572,
      "Charter": 640
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 787,
      "Charter": 835
    },
    "Above 300,000 kgs": {
      "Schedule": 869,
      "Charter": 910
    }
  },
  "Al Jazeera": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 182,
      "Charter": 285
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 352,
      "Charter": 415
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 506,
      "Charter": 580
    },
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 572,
      "Charter": 640
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 787,
      "Charter": 835
    },
    "Above 300,000 kgs": {
      "Schedule": 869,
      "Charter": 910
    }
  },
  "ItlalaAlsharq-SN": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 182,
      "Charter": 285
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 352,
      "Charter": 415
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 506,
      "Charter": 580
    },
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 572,
      "Charter": 640
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 787,
      "Charter": 835
    },
    "Above 300,000 kgs": {
      "Schedule": 869,
      "Charter": 910
    }
  },
  "ItlalaAlsharq-MJ": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 182,
      "Charter": 285
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 352,
      "Charter": 415
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 506,
      "Charter": 580
    },
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 572,
      "Charter": 640
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 787,
      "Charter": 835
    },
    "Above 300,000 kgs": {
      "Schedule": 869,
      "Charter": 910
    }
  },
  "AzerbaijanAirlines": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 182,
      "Charter": 285
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 352,
      "Charter": 415
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 506,
      "Charter": 580
    },
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 572,
      "Charter": 640
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 787,
      "Charter": 835
    },
    "Above 300,000 kgs": {
      "Schedule": 869,
      "Charter": 910
    }
  },
  "Akitu Aviation": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 182,
      "Charter": 285
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 352,
      "Charter": 415
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 506,
      "Charter": 580
    },
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 572,
      "Charter": 640
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 787,
      "Charter": 835
    },
    "Above 300,000 kgs": {
      "Schedule": 869,
      "Charter": 910
    }
  },
  "AlRawdatain-MJ": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 182,
      "Charter": 285
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 352,
      "Charter": 415
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 506,
      "Charter": 580
    },
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 572,
      "Charter": 640
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 787,
      "Charter": 835
    },
    "Above 300,000 kgs": {
      "Schedule": 869,
      "Charter": 910
    }
  },
  "AlRawdatain-AVA": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 182,
      "Charter": 285
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 352,
      "Charter": 415
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 506,
      "Charter": 580
    },
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 572,
      "Charter": 640
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 787,
      "Charter": 835
    },
    "Above 300,000 kgs": {
      "Schedule": 869,
      "Charter": 910
    }
  },
  "Oman Air": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 182,
      "Charter": 285
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 352,
      "Charter": 415
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 506,
      "Charter": 580
    },
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 572,
      "Charter": 640
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 787,
      "Charter": 835
    },
    "Above 300,000 kgs": {
      "Schedule": 869,
      "Charter": 910
    }
  },
  "AlRawdatain-VRS": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 182,
      "Charter": 285
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 352,
      "Charter": 415
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 506,
      "Charter": 580
    },
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 572,
      "Charter": 640
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 787,
      "Charter": 835
    },
    "Above 300,000 kgs": {
      "Schedule": 869,
      "Charter": 910
    }
  },
  "ItlalaAlsharq-Kich": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 182,
      "Charter": 285
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 352,
      "Charter": 415
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 506,
      "Charter": 580
    },
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 572,
      "Charter": 640
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 787,
      "Charter": 835
    },
    "Above 300,000 kgs": {
      "Schedule": 869,
      "Charter": 910
    }
  },
  "Sama Najaf-TBN": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 182,
      "Charter": 285
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 352,
      "Charter": 415
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 506,
      "Charter": 580
    },
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 572,
      "Charter": 640
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 787,
      "Charter": 835
    },
    "Above 300,000 kgs": {
      "Schedule": 869,
      "Charter": 910
    }
  },
  "Aegean Air": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 182,
      "Charter": 285
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 352,
      "Charter": 415
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 506,
      "Charter": 580
    },
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 572,
      "Charter": 640
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 787,
      "Charter": 835
    },
    "Above 300,000 kgs": {
      "Schedule": 869,
      "Charter": 910
    }
  },
  "Arab Wings": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 182,
      "Charter": 285
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 352,
      "Charter": 415
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 506,
      "Charter": 580
    },
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 572,
      "Charter": 640
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 787,
      "Charter": 835
    },
    "Above 300,000 kgs": {
      "Schedule": 869,
      "Charter": 910
    }
  },
  "Spice Jet": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 182,
      "Charter": 285
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 352,
      "Charter": 415
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 506,
      "Charter": 580
    },
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 572,
      "Charter": 640
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 787,
      "Charter": 835
    },
    "Above 300,000 kgs": {
      "Schedule": 869,
      "Charter": 910
    }
  }
};

const brsNBTable = {
  "Air Arabia": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    }
  },
  "Fly cham": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    }
  },
  "Egypt Air": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    }
  },
  "Emirates": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    }
  },
  "Fly Dubai": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    }
  },
  "Middle East airline": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    }
  },
  "Pegasus Airine": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    }
  },
  "QATAR AIRWAYS": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    }
  },
  "Syrian Air": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    }
  },
  "Turkish Airlines": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    }
  },
  "Meraj": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    }
  },
  "Royal Jordanian": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    }
  },
  "UR": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 60000,
      "Charter": 68000
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 60000,
      "Charter": 68000
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 60000,
      "Charter": 68000
    }
  },
  "ItlalaAlsharq-YZD": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    }
  },
  "Fly Baghdad": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 60000,
      "Charter": 68000
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 60000,
      "Charter": 68000
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 60000,
      "Charter": 68000
    }
  },
  "Avia Traffic": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    }
  },
  "Tail wind": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    }
  },
  "Mahan Air": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    }
  },
  "Armenia Air": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    }
  },
  "Jordan aviation": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    }
  },
  "TABAN AIR": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    }
  },
  "Jet Magic Airline": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    }
  },
  "Klas Jet Airline": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    }
  },
  "RED WINGS": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    }
  },
  "PAKISTAN AIR": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    }
  },
  "QESHM AIR": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    }
  },
  "Cash Customers": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    }
  },
  "ATA  air": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    }
  },
  "Aseman air": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    }
  },
  "Nile Air": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    }
  },
  "ASA": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    }
  },
  "Sama Al Iraq - UT Air": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    }
  },
  "SAHA Air": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    }
  },
  "Pars Air": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    }
  },
  "Zagros Air": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    }
  },
  "AEROFLOT Airline": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    }
  },
  "Fly Arna": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    }
  },
  "Fly Nas": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    }
  },
  "Flyadeal": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    }
  },
  "Fly Sepehran": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    }
  },
  "VIP Terminal": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    }
  },
  "Salam Air": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    }
  },
  "ASL Group": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    }
  },
  "Baghdad Lounge": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    }
  },
  "Caspian Air": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    }
  },
  "Farish Air": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    }
  },
  "ItlalaAlsharq-ARN": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    }
  },
  "freebird": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    }
  },
  "Iran Tour": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    }
  },
  "Air Arabia-Abo Dhabi": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    }
  },
  "A Jet": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    }
  },
  "Gulf Air": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    }
  },
  "Sama terminal": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    }
  },
  "Global": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 60000,
      "Charter": 68000
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 60000,
      "Charter": 68000
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 60000,
      "Charter": 68000
    }
  },
  "Simor": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    }
  },
  "AlRawdatain": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    }
  },
  "AlMarbad Company": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    }
  },
  "ItlalaAlsharq-AN": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    }
  },
  "ItlalaAlsharq-QM": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    }
  },
  "ItlalaAlsharq-SR": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    }
  },
  "Al Jazeera": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    }
  },
  "ItlalaAlsharq-SN": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    }
  },
  "ItlalaAlsharq-MJ": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    }
  },
  "AzerbaijanAirlines": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    }
  },
  "Akitu Aviation": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    }
  },
  "AlRawdatain-MJ": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    }
  },
  "AlRawdatain-AVA": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    }
  },
  "Oman Air": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    }
  },
  "AlRawdatain-VRS": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    }
  },
  "ItlalaAlsharq-Kich": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    }
  },
  "Sama Najaf-TBN": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    }
  },
  "Aegean Air": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    }
  },
  "Arab Wings": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    }
  },
  "Spice Jet": {
    "MTOW up to 25,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 25,001 to 60,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    },
    "MTOW – From 60,001 to 100,000 kgs": {
      "Schedule": 40,
      "Charter": 45
    }
  }
};

const brsWBTable = {
  "Air Arabia": {
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "Above 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    }
  },
  "Fly cham": {
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "Above 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    }
  },
  "Egypt Air": {
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "Above 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    }
  },
  "Emirates": {
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "Above 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    }
  },
  "Fly Dubai": {
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "Above 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    }
  },
  "Middle East airline": {
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "Above 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    }
  },
  "Pegasus Airine": {
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "Above 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    }
  },
  "QATAR AIRWAYS": {
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "Above 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    }
  },
  "Syrian Air": {
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "Above 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    }
  },
  "Turkish Airlines": {
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "Above 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    }
  },
  "Meraj": {
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "Above 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    }
  },
  "Royal Jordanian": {
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "Above 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    }
  },
  "UR": {
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 90000,
      "Charter": 98000
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 90000,
      "Charter": 98000
    },
    "Above 300,000 kgs": {
      "Schedule": 90000,
      "Charter": 98000
    }
  },
  "ItlalaAlsharq-YZD": {
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "Above 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    }
  },
  "Fly Baghdad": {
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 90000,
      "Charter": 98000
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 90000,
      "Charter": 98000
    },
    "Above 300,000 kgs": {
      "Schedule": 90000,
      "Charter": 98000
    }
  },
  "Avia Traffic": {
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "Above 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    }
  },
  "Tail wind": {
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "Above 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    }
  },
  "Mahan Air": {
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "Above 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    }
  },
  "Armenia Air": {
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "Above 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    }
  },
  "Jordan aviation": {
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "Above 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    }
  },
  "TABAN AIR": {
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "Above 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    }
  },
  "Jet Magic Airline": {
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "Above 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    }
  },
  "Klas Jet Airline": {
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "Above 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    }
  },
  "RED WINGS": {
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "Above 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    }
  },
  "PAKISTAN AIR": {
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "Above 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    }
  },
  "QESHM AIR": {
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "Above 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    }
  },
  "Cash Customers": {
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "Above 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    }
  },
  "ATA  air": {
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "Above 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    }
  },
  "Aseman air": {
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "Above 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    }
  },
  "Nile Air": {
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "Above 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    }
  },
  "ASA": {
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "Above 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    }
  },
  "Sama Al Iraq - UT Air": {
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "Above 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    }
  },
  "SAHA Air": {
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "Above 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    }
  },
  "Pars Air": {
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "Above 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    }
  },
  "Zagros Air": {
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "Above 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    }
  },
  "AEROFLOT Airline": {
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "Above 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    }
  },
  "Fly Arna": {
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "Above 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    }
  },
  "Fly Nas": {
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "Above 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    }
  },
  "Flyadeal": {
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "Above 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    }
  },
  "Fly Sepehran": {
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "Above 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    }
  },
  "VIP Terminal": {
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "Above 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    }
  },
  "Salam Air": {
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "Above 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    }
  },
  "ASL Group": {
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "Above 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    }
  },
  "Baghdad Lounge": {
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "Above 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    }
  },
  "Caspian Air": {
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "Above 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    }
  },
  "Farish Air": {
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "Above 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    }
  },
  "ItlalaAlsharq-ARN": {
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "Above 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    }
  },
  "freebird": {
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "Above 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    }
  },
  "Iran Tour": {
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "Above 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    }
  },
  "Air Arabia-Abo Dhabi": {
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "Above 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    }
  },
  "A Jet": {
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "Above 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    }
  },
  "Gulf Air": {
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "Above 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    }
  },
  "Sama terminal": {
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "Above 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    }
  },
  "Global": {
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 90000,
      "Charter": 98000
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 90000,
      "Charter": 98000
    },
    "Above 300,000 kgs": {
      "Schedule": 90000,
      "Charter": 98000
    }
  },
  "Simor": {
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "Above 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    }
  },
  "AlRawdatain": {
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "Above 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    }
  },
  "AlMarbad Company": {
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "Above 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    }
  },
  "ItlalaAlsharq-AN": {
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "Above 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    }
  },
  "ItlalaAlsharq-QM": {
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "Above 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    }
  },
  "ItlalaAlsharq-SR": {
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "Above 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    }
  },
  "Al Jazeera": {
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "Above 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    }
  },
  "ItlalaAlsharq-SN": {
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "Above 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    }
  },
  "ItlalaAlsharq-MJ": {
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "Above 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    }
  },
  "AzerbaijanAirlines": {
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "Above 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    }
  },
  "Akitu Aviation": {
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "Above 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    }
  },
  "AlRawdatain-MJ": {
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "Above 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    }
  },
  "AlRawdatain-AVA": {
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "Above 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    }
  },
  "Oman Air": {
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "Above 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    }
  },
  "AlRawdatain-VRS": {
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "Above 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    }
  },
  "ItlalaAlsharq-Kich": {
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "Above 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    }
  },
  "Sama Najaf-TBN": {
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "Above 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    }
  },
  "Aegean Air": {
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "Above 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    }
  },
  "Arab Wings": {
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "Above 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    }
  },
  "Spice Jet": {
    "MTOW – From 100,001 to 200,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "MTOW – From 200,001 to 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    },
    "Above 300,000 kgs": {
      "Schedule": 45,
      "Charter": 65
    }
  }
};

const serviceTables = {
  "Air Arabia": {
    "CUPPS Service": {
      "Schedule": 3.5,
      "Charter": 4
    },
    "DCS Service": {
      "Schedule": 4,
      "Charter": 4.5
},
    "Excess Baggage": {
      "Schedule": 7,
      "Charter": 7
    },
    "WHCHN": {
      "Schedule": 35,
      "Charter": 35
    },
    "VIP": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP system": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP assistance (MAAS)": {
      "Schedule": 1,
      "Charter": 1
    },
    "Travel Form": {
      "Schedule": 1,
      "Charter": 1
    },
    "Insurance": {
      "Schedule": 1,
      "Charter": 1
    },
    "Manual PNL": {
      "Schedule": 100,
      "Charter": 150
    },
    "Load sheet": {
      "Schedule": 100,
      "Charter": 150
    },
    "Flight creation": {
      "Schedule": 100,
      "Charter": 150
    },
    "Seat Map": {
      "Schedule": 100,
      "Charter": 150
    },
    "Station Management": {
      "Schedule": 200,
      "Charter": 235
    },
    "Cancel/Overflies in short notif.": {
      "Schedule": 0,
      "Charter": 0
    },
    "other": {
      "Schedule": null,
      "Charter": null
    },
    "Delay Above 60 minute up to 4 Hours": {
      "Schedule": 0.25,
      "Charter": 0.25
    },
    "Delay Above 4 Hours": {
      "Schedule": 0.35,
      "Charter": 0.35
    },
    "Delay Above 8 Hours": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "service between 22:00 to 06:00": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "Ferry In": {
      "Schedule": 0.75,
      "Charter": 0.75
    },
    "ferry out": {
      "Schedule": 0.5,
      "Charter": 0.5
    }
  },
  "Fly cham": {
    "CUPPS Service": {
      "Schedule": 3.5,
      "Charter": 4
    },
    "DCS Service": {
      "Schedule": 4,
      "Charter": 4.5
},
    "Excess Baggage": {
      "Schedule": 7,
      "Charter": 7
    },
    "WHCHN": {
      "Schedule": 35,
      "Charter": 35
    },
    "VIP": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP system": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP assistance (MAAS)": {
      "Schedule": 1,
      "Charter": 1
    },
    "Travel Form": {
      "Schedule": 1,
      "Charter": 1
    },
    "Insurance": {
      "Schedule": 1,
      "Charter": 1
    },
    "Manual PNL": {
      "Schedule": 100,
      "Charter": 150
    },
    "Load sheet": {
      "Schedule": 100,
      "Charter": 150
    },
    "Flight creation": {
      "Schedule": 100,
      "Charter": 150
    },
    "Seat Map": {
      "Schedule": 100,
      "Charter": 150
    },
    "Station Management": {
      "Schedule": 200,
      "Charter": 235
    },
    "Cancel/Overflies in short notif.": {
      "Schedule": 0,
      "Charter": 0
    },
    "other": {
      "Schedule": null,
      "Charter": null
    },
    "Delay Above 60 minute up to 4 Hours": {
      "Schedule": 0.25,
      "Charter": 0.25
    },
    "Delay Above 4 Hours": {
      "Schedule": 0.35,
      "Charter": 0.35
    },
    "Delay Above 8 Hours": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "service between 22:00 to 06:00": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "Ferry In": {
      "Schedule": 0.75,
      "Charter": 0.75
    },
    "ferry out": {
      "Schedule": 0.5,
      "Charter": 0.5
    }
  },
  "Egypt Air": {
    "CUPPS Service": {
      "Schedule": 3.5,
      "Charter": 4
},
    "Excess Baggage": {
      "Schedule": 7,
      "Charter": 7
    },
    "DCS Service": {
      "Schedule": 4,
      "Charter": 4.5
    },
    "WHCHN": {
      "Schedule": 35,
      "Charter": 35
    },
    "VIP": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP system": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP assistance (MAAS)": {
      "Schedule": 1,
      "Charter": 1
    },
    "Travel Form": {
      "Schedule": 1,
      "Charter": 1
    },
    "Insurance": {
      "Schedule": 1,
      "Charter": 1
    },
    "Manual PNL": {
      "Schedule": 100,
      "Charter": 150
    },
    "Load sheet": {
      "Schedule": 100,
      "Charter": 150
    },
    "Flight creation": {
      "Schedule": 100,
      "Charter": 150
    },
    "Seat Map": {
      "Schedule": 100,
      "Charter": 150
    },
    "Station Management": {
      "Schedule": 200,
      "Charter": 235
    },
    "Cancel/Overflies in short notif.": {
      "Schedule": 0,
      "Charter": 0
    },
    "other": {
      "Schedule": null,
      "Charter": null
    },
    "Delay Above 60 minute up to 4 Hours": {
      "Schedule": 0.25,
      "Charter": 0.25
    },
    "Delay Above 4 Hours": {
      "Schedule": 0.35,
      "Charter": 0.35
    },
    "Delay Above 8 Hours": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "service between 22:00 to 06:00": {
      "Schedule": 0.25,
      "Charter": 0.25
    },
    "Ferry In": {
      "Schedule": 0.75,
      "Charter": 0.75
    },
    "ferry out": {
      "Schedule": 0.5,
      "Charter": 0.5
    }
  },
  "Emirates": {
    "CUPPS Service": {
      "Schedule": 3.5,
      "Charter": 4
},
    "Excess Baggage": {
      "Schedule": 7,
      "Charter": 7
    },
    "DCS Service": {
      "Schedule": 4,
      "Charter": 4.5
    },
    "WHCHN": {
      "Schedule": 35,
      "Charter": 35
    },
    "VIP": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP system": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP assistance (MAAS)": {
      "Schedule": 1,
      "Charter": 1
    },
    "Travel Form": {
      "Schedule": 1,
      "Charter": 1
    },
    "Insurance": {
      "Schedule": 1,
      "Charter": 1
    },
    "Manual PNL": {
      "Schedule": 100,
      "Charter": 150
    },
    "Load sheet": {
      "Schedule": 100,
      "Charter": 150
    },
    "Flight creation": {
      "Schedule": 100,
      "Charter": 150
    },
    "Seat Map": {
      "Schedule": 100,
      "Charter": 150
    },
    "Station Management": {
      "Schedule": 200,
      "Charter": 235
    },
    "Cancel/Overflies in short notif.": {
      "Schedule": 0,
      "Charter": 0
    },
    "other": {
      "Schedule": null,
      "Charter": null
    },
    "Delay Above 60 minute up to 4 Hours": {
      "Schedule": 0.25,
      "Charter": 0.25
    },
    "Delay Above 4 Hours": {
      "Schedule": 0.35,
      "Charter": 0.35
    },
    "Delay Above 8 Hours": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "service between 22:00 to 06:00": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "Ferry In": {
      "Schedule": 0.75,
      "Charter": 0.75
    },
    "ferry out": {
      "Schedule": 0.5,
      "Charter": 0.5
    }
  },
  "Fly Dubai": {
    "CUPPS Service": {
      "Schedule": 3.5,
      "Charter": 4
    },
    "DCS Service": {
      "Schedule": 4,
      "Charter": 4.5
},
    "Excess Baggage": {
      "Schedule": 7,
      "Charter": 7
    },
    "WHCHN": {
      "Schedule": 35,
      "Charter": 35
    },
    "VIP": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP system": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP assistance (MAAS)": {
      "Schedule": 1,
      "Charter": 1
    },
    "Travel Form": {
      "Schedule": 1,
      "Charter": 1
    },
    "Insurance": {
      "Schedule": 1,
      "Charter": 1
    },
    "Manual PNL": {
      "Schedule": 100,
      "Charter": 150
    },
    "Load sheet": {
      "Schedule": 100,
      "Charter": 150
    },
    "Flight creation": {
      "Schedule": 100,
      "Charter": 150
    },
    "Seat Map": {
      "Schedule": 100,
      "Charter": 150
    },
    "Station Management": {
      "Schedule": 200,
      "Charter": 235
    },
    "Cancel/Overflies in short notif.": {
      "Schedule": 0,
      "Charter": 0
    },
    "other": {
      "Schedule": null,
      "Charter": null
    },
    "Delay Above 60 minute up to 4 Hours": {
      "Schedule": 0.25,
      "Charter": 0.25
    },
    "Delay Above 4 Hours": {
      "Schedule": 0.35,
      "Charter": 0.35
    },
    "Delay Above 8 Hours": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "service between 22:00 to 06:00": {
      "Schedule": 0.25,
      "Charter": 0.25
    },
    "Ferry In": {
      "Schedule": 0.75,
      "Charter": 0.75
    },
    "ferry out": {
      "Schedule": 0.5,
      "Charter": 0.5
    }
  },
  "Middle East airline": {
    "CUPPS Service": {
      "Schedule": 3.5,
      "Charter": 4
    },
    "DCS Service": {
      "Schedule": 4,
      "Charter": 4.5
},
    "Excess Baggage": {
      "Schedule": 7,
      "Charter": 7
    },
    "WHCHN": {
      "Schedule": 35,
      "Charter": 35
    },
    "VIP": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP system": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP assistance (MAAS)": {
      "Schedule": 1,
      "Charter": 1
    },
    "Travel Form": {
      "Schedule": 1,
      "Charter": 1
    },
    "Insurance": {
      "Schedule": 1,
      "Charter": 1
    },
    "Manual PNL": {
      "Schedule": 100,
      "Charter": 150
    },
    "Load sheet": {
      "Schedule": 100,
      "Charter": 150
    },
    "Flight creation": {
      "Schedule": 100,
      "Charter": 150
    },
    "Seat Map": {
      "Schedule": 100,
      "Charter": 150
    },
    "Station Management": {
      "Schedule": 200,
      "Charter": 235
    },
    "Cancel/Overflies in short notif.": {
      "Schedule": 0,
      "Charter": 0
    },
    "other": {
      "Schedule": null,
      "Charter": null
    },
    "Delay Above 60 minute up to 4 Hours": {
      "Schedule": 0.25,
      "Charter": 0.25
    },
    "Delay Above 4 Hours": {
      "Schedule": 0.35,
      "Charter": 0.35
    },
    "Delay Above 8 Hours": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "service between 22:00 to 06:00": {
      "Schedule": 0.25,
      "Charter": 0.25
    },
    "Ferry In": {
      "Schedule": 0.75,
      "Charter": 0.75
    },
    "ferry out": {
      "Schedule": 0.5,
      "Charter": 0.5
    }
  },
  "Pegasus Airine": {
    "CUPPS Service": {
      "Schedule": 3.5,
      "Charter": 4
    },
    "DCS Service": {
      "Schedule": 4,
      "Charter": 4.5
},
    "Excess Baggage": {
      "Schedule": 7,
      "Charter": 7
    },
    "WHCHN": {
      "Schedule": 35,
      "Charter": 35
    },
    "VIP": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP system": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP assistance (MAAS)": {
      "Schedule": 1,
      "Charter": 1
    },
    "Travel Form": {
      "Schedule": 1,
      "Charter": 1
    },
    "Insurance": {
      "Schedule": 1,
      "Charter": 1
    },
    "Manual PNL": {
      "Schedule": 100,
      "Charter": 150
    },
    "Load sheet": {
      "Schedule": 100,
      "Charter": 150
    },
    "Flight creation": {
      "Schedule": 100,
      "Charter": 150
    },
    "Seat Map": {
      "Schedule": 100,
      "Charter": 150
    },
    "Station Management": {
      "Schedule": 200,
      "Charter": 235
    },
    "Cancel/Overflies in short notif.": {
      "Schedule": 0,
      "Charter": 0
    },
    "other": {
      "Schedule": null,
      "Charter": null
    },
    "Delay Above 60 minute up to 4 Hours": {
      "Schedule": 0.25,
      "Charter": 0.25
    },
    "Delay Above 4 Hours": {
      "Schedule": 0.35,
      "Charter": 0.35
    },
    "Delay Above 8 Hours": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "service between 22:00 to 06:00": {
      "Schedule": 0.25,
      "Charter": 0.25
    },
    "Ferry In": {
      "Schedule": 0.75,
      "Charter": 0.75
    },
    "ferry out": {
      "Schedule": 0.5,
      "Charter": 0.5
    }
  },
  "QATAR AIRWAYS": {
    "CUPPS Service": {
      "Schedule": 3.5,
      "Charter": 4
    },
    "DCS Service": {
      "Schedule": 4,
      "Charter": 4.5
},
    "Excess Baggage": {
      "Schedule": 7,
      "Charter": 7
    },
    "WHCHN": {
      "Schedule": 35,
      "Charter": 35
    },
    "VIP": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP system": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP assistance (MAAS)": {
      "Schedule": 1,
      "Charter": 1
    },
    "Travel Form": {
      "Schedule": 1,
      "Charter": 1
    },
    "Insurance": {
      "Schedule": 1,
      "Charter": 1
    },
    "Manual PNL": {
      "Schedule": 100,
      "Charter": 150
    },
    "Load sheet": {
      "Schedule": 100,
      "Charter": 150
    },
    "Flight creation": {
      "Schedule": 100,
      "Charter": 150
    },
    "Seat Map": {
      "Schedule": 100,
      "Charter": 150
    },
    "Station Management": {
      "Schedule": 200,
      "Charter": 235
    },
    "Cancel/Overflies in short notif.": {
      "Schedule": 0,
      "Charter": 0
    },
    "other": {
      "Schedule": null,
      "Charter": null
    },
    "Delay Above 60 minute up to 4 Hours": {
      "Schedule": 0.25,
      "Charter": 0.25
    },
    "Delay Above 4 Hours": {
      "Schedule": 0.35,
      "Charter": 0.35
    },
    "Delay Above 8 Hours": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "service between 22:00 to 06:00": {
      "Schedule": 0.25,
      "Charter": 0.25
    },
    "Ferry In": {
      "Schedule": 0.75,
      "Charter": 0.75
    },
    "ferry out": {
      "Schedule": 0.5,
      "Charter": 0.5
    }
  },
  "Syrian Air": {
    "CUPPS Service": {
      "Schedule": 3.5,
      "Charter": 4
},
    "Excess Baggage": {
      "Schedule": 7,
      "Charter": 7
    },
    "DCS Service": {
      "Schedule": 4,
      "Charter": 4.5
    },
    "WHCHN": {
      "Schedule": 35,
      "Charter": 35
    },
    "VIP": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP system": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP assistance (MAAS)": {
      "Schedule": 1,
      "Charter": 1
    },
    "Travel Form": {
      "Schedule": 1,
      "Charter": 1
    },
    "Insurance": {
      "Schedule": 1,
      "Charter": 1
    },
    "Manual PNL": {
      "Schedule": 100,
      "Charter": 150
    },
    "Load sheet": {
      "Schedule": 100,
      "Charter": 150
    },
    "Flight creation": {
      "Schedule": 100,
      "Charter": 150
    },
    "Seat Map": {
      "Schedule": 100,
      "Charter": 150
    },
    "Station Management": {
      "Schedule": 200,
      "Charter": 235
    },
    "Cancel/Overflies in short notif.": {
      "Schedule": 0,
      "Charter": 0
    },
    "other": {
      "Schedule": null,
      "Charter": null
    },
    "Delay Above 60 minute up to 4 Hours": {
      "Schedule": 0.25,
      "Charter": 0.25
    },
    "Delay Above 4 Hours": {
      "Schedule": 0.35,
      "Charter": 0.35
    },
    "Delay Above 8 Hours": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "service between 22:00 to 06:00": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "Ferry In": {
      "Schedule": 0.75,
      "Charter": 0.75
    },
    "ferry out": {
      "Schedule": 0.5,
      "Charter": 0.5
    }
  },
  "Turkish Airlines": {
    "CUPPS Service": {
      "Schedule": 3.5,
      "Charter": 4
    },
    "DCS Service": {
      "Schedule": 4,
      "Charter": 4.5
},
    "Excess Baggage": {
      "Schedule": 7,
      "Charter": 7
    },
    "WHCHN": {
      "Schedule": 35,
      "Charter": 35
    },
    "VIP": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP system": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP assistance (MAAS)": {
      "Schedule": 1,
      "Charter": 1
    },
    "Travel Form": {
      "Schedule": 1,
      "Charter": 1
    },
    "Insurance": {
      "Schedule": 1,
      "Charter": 1
    },
    "Manual PNL": {
      "Schedule": 100,
      "Charter": 150
    },
    "Load sheet": {
      "Schedule": 100,
      "Charter": 150
    },
    "Flight creation": {
      "Schedule": 100,
      "Charter": 150
    },
    "Seat Map": {
      "Schedule": 100,
      "Charter": 150
    },
    "Station Management": {
      "Schedule": 200,
      "Charter": 235
    },
    "Cancel/Overflies in short notif.": {
      "Schedule": 0,
      "Charter": 0
    },
    "other": {
      "Schedule": null,
      "Charter": null
    },
    "Delay Above 60 minute up to 4 Hours": {
      "Schedule": 0.25,
      "Charter": 0.25
    },
    "Delay Above 4 Hours": {
      "Schedule": 0.35,
      "Charter": 0.35
    },
    "Delay Above 8 Hours": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "service between 22:00 to 06:00": {
      "Schedule": 0.25,
      "Charter": 0.25
    },
    "Ferry In": {
      "Schedule": 0.75,
      "Charter": 0.75
    },
    "ferry out": {
      "Schedule": 0.5,
      "Charter": 0.5
    }
  },
  "Meraj": {
    "CUPPS Service": {
      "Schedule": 3.5,
      "Charter": 4
    },
    "DCS Service": {
      "Schedule": 4,
      "Charter": 4.5
},
    "Excess Baggage": {
      "Schedule": 7,
      "Charter": 7
    },
    "WHCHN": {
      "Schedule": 35,
      "Charter": 35
    },
    "VIP": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP system": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP assistance (MAAS)": {
      "Schedule": 1,
      "Charter": 1
    },
    "Travel Form": {
      "Schedule": 1,
      "Charter": 1
    },
    "Insurance": {
      "Schedule": 1,
      "Charter": 1
    },
    "Manual PNL": {
      "Schedule": 100,
      "Charter": 150
    },
    "Load sheet": {
      "Schedule": 100,
      "Charter": 150
    },
    "Flight creation": {
      "Schedule": 100,
      "Charter": 150
    },
    "Seat Map": {
      "Schedule": 100,
      "Charter": 150
    },
    "Station Management": {
      "Schedule": 200,
      "Charter": 235
    },
    "Cancel/Overflies in short notif.": {
      "Schedule": 0,
      "Charter": 0
    },
    "other": {
      "Schedule": null,
      "Charter": null
    },
    "Delay Above 60 minute up to 4 Hours": {
      "Schedule": 0.25,
      "Charter": 0.25
    },
    "Delay Above 4 Hours": {
      "Schedule": 0.35,
      "Charter": 0.35
    },
    "Delay Above 8 Hours": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "service between 22:00 to 06:00": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "Ferry In": {
      "Schedule": 0.75,
      "Charter": 0.75
    },
    "ferry out": {
      "Schedule": 0.5,
      "Charter": 0.5
    }
  },
  "Royal Jordanian": {
    "CUPPS Service": {
      "Schedule": 3.5,
      "Charter": 4
    },
    "DCS Service": {
      "Schedule": 4,
      "Charter": 4.5
},
    "Excess Baggage": {
      "Schedule": 7,
      "Charter": 7
    },
    "WHCHN": {
      "Schedule": 40.15,
      "Charter": 35
    },
    "VIP": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP system": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP assistance (MAAS)": {
      "Schedule": 1,
      "Charter": 1
    },
    "Travel Form": {
      "Schedule": 1,
      "Charter": 1
    },
    "Insurance": {
      "Schedule": 1,
      "Charter": 1
    },
    "Manual PNL": {
      "Schedule": 100,
      "Charter": 150
    },
    "Load sheet": {
      "Schedule": 100,
      "Charter": 150
    },
    "Flight creation": {
      "Schedule": 100,
      "Charter": 150
    },
    "Seat Map": {
      "Schedule": 100,
      "Charter": 150
    },
    "Station Management": {
      "Schedule": 200,
      "Charter": 235
    },
    "Cancel/Overflies in short notif.": {
      "Schedule": 0,
      "Charter": 0
    },
    "other": {
      "Schedule": null,
      "Charter": null
    },
    "Delay Above 60 minute up to 4 Hours": {
      "Schedule": 0.25,
      "Charter": 0.25
    },
    "Delay Above 4 Hours": {
      "Schedule": 0.35,
      "Charter": 0.35
    },
    "Delay Above 8 Hours": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "service between 22:00 to 06:00": {
      "Schedule": 0.25,
      "Charter": 0.25
    },
    "Ferry In": {
      "Schedule": 0.75,
      "Charter": 0.75
    },
    "ferry out": {
      "Schedule": 0.5,
      "Charter": 0.5
    }
  },
  "UR": {
    "CUPPS Service": {
      "Schedule": 6000,
      "Charter": 6000
    },
    "DCS Service": {
      "Schedule": 6000,
      "Charter": 7000
},
    "Excess Baggage": {
      "Schedule": 7,
      "Charter": 7
    },
    "WHCHN": {
      "Schedule": 53000,
      "Charter": 53000
    },
    "VIP": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP system": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP assistance (MAAS)": {
      "Schedule": 1,
      "Charter": 1
    },
    "Travel Form": {
      "Schedule": 1,
      "Charter": 1
    },
    "Insurance": {
      "Schedule": 1,
      "Charter": 1
    },
    "Manual PNL": {
      "Schedule": 150000,
      "Charter": 225000
    },
    "Load sheet": {
      "Schedule": 150000,
      "Charter": 225000
    },
    "Flight creation": {
      "Schedule": 150000,
      "Charter": 225000
    },
    "Seat Map": {
      "Schedule": 150000,
      "Charter": 225000
    },
    "Station Management": {
      "Schedule": 300000,
      "Charter": 353000
    },
    "Cancel/Overflies in short notif.": {
      "Schedule": 0,
      "Charter": 0
    },
    "other": {
      "Schedule": null,
      "Charter": null
    },
    "Delay Above 60 minute up to 4 Hours": {
      "Schedule": 0.25,
      "Charter": 0.25
    },
    "Delay Above 4 Hours": {
      "Schedule": 0.35,
      "Charter": 0.35
    },
    "Delay Above 8 Hours": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "service between 22:00 to 06:00": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "Ferry In": {
      "Schedule": 0.75,
      "Charter": 0.75
    },
    "ferry out": {
      "Schedule": 0.5,
      "Charter": 0.5
    }
  },
  "ItlalaAlsharq-YZD": {
    "CUPPS Service": {
      "Schedule": 4,
      "Charter": 4
    },
    "DCS Service": {
      "Schedule": 4,
      "Charter": 4.5
},
    "Excess Baggage": {
      "Schedule": 7,
      "Charter": 7
    },
    "WHCHN": {
      "Schedule": 35,
      "Charter": 35
    },
    "VIP": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP system": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP assistance (MAAS)": {
      "Schedule": 1,
      "Charter": 1
    },
    "Travel Form": {
      "Schedule": 1,
      "Charter": 1
    },
    "Insurance": {
      "Schedule": 1,
      "Charter": 1
    },
    "Manual PNL": {
      "Schedule": 100,
      "Charter": 150
    },
    "Load sheet": {
      "Schedule": 100,
      "Charter": 150
    },
    "Flight creation": {
      "Schedule": 100,
      "Charter": 150
    },
    "Seat Map": {
      "Schedule": 100,
      "Charter": 150
    },
    "Station Management": {
      "Schedule": 200,
      "Charter": 235
    },
    "Cancel/Overflies in short notif.": {
      "Schedule": 0,
      "Charter": 0
    },
    "other": {
      "Schedule": null,
      "Charter": null
    },
    "Delay Above 60 minute up to 4 Hours": {
      "Schedule": 0.2,
      "Charter": 0.2
    },
    "Delay Above 4 Hours": {
      "Schedule": 0.35,
      "Charter": 0.35
    },
    "Delay Above 8 Hours": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "service between 22:00 to 06:00": {
      "Schedule": 0.25,
      "Charter": 0.25
    },
    "Ferry In": {
      "Schedule": 0.75,
      "Charter": 0.75
    },
    "ferry out": {
      "Schedule": 0.5,
      "Charter": 0.5
    }
  },
  "Fly Baghdad": {
    "CUPPS Service": {
      "Schedule": 6000,
      "Charter": 6000
    },
    "DCS Service": {
      "Schedule": 6000,
      "Charter": 7000
},
    "Excess Baggage": {
      "Schedule": 7,
      "Charter": 7
    },
    "WHCHN": {
      "Schedule": 53000,
      "Charter": 53000
    },
    "VIP": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP system": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP assistance (MAAS)": {
      "Schedule": 1,
      "Charter": 1
    },
    "Travel Form": {
      "Schedule": 1,
      "Charter": 1
    },
    "Insurance": {
      "Schedule": 1,
      "Charter": 1
    },
    "Manual PNL": {
      "Schedule": 150000,
      "Charter": 150
    },
    "Load sheet": {
      "Schedule": 150000,
      "Charter": 150
    },
    "Flight creation": {
      "Schedule": 150000,
      "Charter": 150
    },
    "Seat Map": {
      "Schedule": 150000,
      "Charter": 150
    },
    "Station Management": {
      "Schedule": 300000,
      "Charter": 235
    },
    "Cancel/Overflies in short notif.": {
      "Schedule": 0,
      "Charter": 0
    },
    "other": {
      "Schedule": null,
      "Charter": null
    },
    "Delay Above 60 minute up to 4 Hours": {
      "Schedule": 0.25,
      "Charter": 0.25
    },
    "Delay Above 4 Hours": {
      "Schedule": 0.35,
      "Charter": 0.35
    },
    "Delay Above 8 Hours": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "service between 22:00 to 06:00": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "Ferry In": {
      "Schedule": 0.75,
      "Charter": 0.75
    },
    "ferry out": {
      "Schedule": 0.5,
      "Charter": 0.5
    }
  },
  "Avia Traffic": {
    "CUPPS Service": {
      "Schedule": 3.5,
      "Charter": 4
    },
    "DCS Service": {
      "Schedule": 4,
      "Charter": 4.5
},
    "Excess Baggage": {
      "Schedule": 7,
      "Charter": 7
    },
    "WHCHN": {
      "Schedule": 35,
      "Charter": 35
    },
    "VIP": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP system": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP assistance (MAAS)": {
      "Schedule": 1,
      "Charter": 1
    },
    "Travel Form": {
      "Schedule": 1,
      "Charter": 1
    },
    "Insurance": {
      "Schedule": 1,
      "Charter": 1
    },
    "Manual PNL": {
      "Schedule": 100,
      "Charter": 150
    },
    "Load sheet": {
      "Schedule": 100,
      "Charter": 150
    },
    "Flight creation": {
      "Schedule": 100,
      "Charter": 150
    },
    "Seat Map": {
      "Schedule": 100,
      "Charter": 150
    },
    "Station Management": {
      "Schedule": 200,
      "Charter": 235
    },
    "Cancel/Overflies in short notif.": {
      "Schedule": 0,
      "Charter": 0
    },
    "other": {
      "Schedule": null,
      "Charter": null
    },
    "Delay Above 60 minute up to 4 Hours": {
      "Schedule": 0.25,
      "Charter": 0.25
    },
    "Delay Above 4 Hours": {
      "Schedule": 0.35,
      "Charter": 0.35
    },
    "Delay Above 8 Hours": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "service between 22:00 to 06:00": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "Ferry In": {
      "Schedule": 0.75,
      "Charter": 0.75
    },
    "ferry out": {
      "Schedule": 0.5,
      "Charter": 0.5
    }
  },
  "Tail wind": {
    "CUPPS Service": {
      "Schedule": 3,
      "Charter": 4
    },
    "DCS Service": {
      "Schedule": 4,
      "Charter": 4.5
},
    "Excess Baggage": {
      "Schedule": 7,
      "Charter": 7
    },
    "WHCHN": {
      "Schedule": 35,
      "Charter": 35
    },
    "VIP": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP system": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP assistance (MAAS)": {
      "Schedule": 1,
      "Charter": 1
    },
    "Travel Form": {
      "Schedule": 1,
      "Charter": 1
    },
    "Insurance": {
      "Schedule": 1,
      "Charter": 1
    },
    "Manual PNL": {
      "Schedule": 100,
      "Charter": 150
    },
    "Load sheet": {
      "Schedule": 100,
      "Charter": 150
    },
    "Flight creation": {
      "Schedule": 100,
      "Charter": 150
    },
    "Seat Map": {
      "Schedule": 100,
      "Charter": 150
    },
    "Station Management": {
      "Schedule": 200,
      "Charter": 235
    },
    "Cancel/Overflies in short notif.": {
      "Schedule": 0,
      "Charter": 0
    },
    "other": {
      "Schedule": null,
      "Charter": null
    },
    "Delay Above 60 minute up to 4 Hours": {
      "Schedule": 0.25,
      "Charter": 0.25
    },
    "Delay Above 4 Hours": {
      "Schedule": 0.35,
      "Charter": 0.35
    },
    "Delay Above 8 Hours": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "service between 22:00 to 06:00": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "Ferry In": {
      "Schedule": 0.75,
      "Charter": 0.75
    },
    "ferry out": {
      "Schedule": 0.5,
      "Charter": 0.5
    }
  },
  "Mahan Air": {
    "CUPPS Service": {
      "Schedule": 3,
      "Charter": 4
    },
    "DCS Service": {
      "Schedule": 3,
      "Charter": 4
},
    "Excess Baggage": {
      "Schedule": 7,
      "Charter": 7
    },
    "WHCHN": {
      "Schedule": 35,
      "Charter": 35
    },
    "VIP": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP system": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP assistance (MAAS)": {
      "Schedule": 1,
      "Charter": 1
    },
    "Travel Form": {
      "Schedule": 1,
      "Charter": 1
    },
    "Insurance": {
      "Schedule": 1,
      "Charter": 1
    },
    "Manual PNL": {
      "Schedule": 100,
      "Charter": 150
    },
    "Load sheet": {
      "Schedule": 100,
      "Charter": 150
    },
    "Flight creation": {
      "Schedule": 100,
      "Charter": 150
    },
    "Seat Map": {
      "Schedule": 100,
      "Charter": 150
    },
    "Station Management": {
      "Schedule": 200,
      "Charter": 235
    },
    "Cancel/Overflies in short notif.": {
      "Schedule": 0,
      "Charter": 0
    },
    "other": {
      "Schedule": null,
      "Charter": null
    },
    "Delay Above 60 minute up to 4 Hours": {
      "Schedule": 0.25,
      "Charter": 0.25
    },
    "Delay Above 4 Hours": {
      "Schedule": 0.35,
      "Charter": 0.35
    },
    "Delay Above 8 Hours": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "service between 22:00 to 06:00": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "Ferry In": {
      "Schedule": 0.75,
      "Charter": 0.75
    },
    "ferry out": {
      "Schedule": 0.5,
      "Charter": 0.5
    }
  },
  "Armenia Air": {
    "CUPPS Service": {
      "Schedule": 4,
      "Charter": 4.5
    },
    "DCS Service": {
      "Schedule": 4,
      "Charter": 4.5
},
    "Excess Baggage": {
      "Schedule": 7,
      "Charter": 7
    },
    "WHCHN": {
      "Schedule": 35,
      "Charter": 35
    },
    "VIP": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP system": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP assistance (MAAS)": {
      "Schedule": 1,
      "Charter": 1
    },
    "Travel Form": {
      "Schedule": 1,
      "Charter": 1
    },
    "Insurance": {
      "Schedule": 1,
      "Charter": 1
    },
    "Manual PNL": {
      "Schedule": 100,
      "Charter": 150
    },
    "Load sheet": {
      "Schedule": 100,
      "Charter": 150
    },
    "Flight creation": {
      "Schedule": 100,
      "Charter": 150
    },
    "Seat Map": {
      "Schedule": 100,
      "Charter": 150
    },
    "Station Management": {
      "Schedule": 200,
      "Charter": 235
    },
    "Cancel/Overflies in short notif.": {
      "Schedule": 0,
      "Charter": 0
    },
    "other": {
      "Schedule": null,
      "Charter": null
    },
    "Delay Above 60 minute up to 4 Hours": {
      "Schedule": 0.25,
      "Charter": 0.25
    },
    "Delay Above 4 Hours": {
      "Schedule": 0.35,
      "Charter": 0.35
    },
    "Delay Above 8 Hours": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "service between 22:00 to 06:00": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "Ferry In": {
      "Schedule": 0.75,
      "Charter": 0.75
    },
    "ferry out": {
      "Schedule": 0.5,
      "Charter": 0.5
    }
  },
  "Jordan aviation": {
    "CUPPS Service": {
      "Schedule": 3.5,
      "Charter": 4
    },
    "DCS Service": {
      "Schedule": 4,
      "Charter": 4.5
},
    "Excess Baggage": {
      "Schedule": 7,
      "Charter": 7
    },
    "WHCHN": {
      "Schedule": 35,
      "Charter": 35
    },
    "VIP": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP system": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP assistance (MAAS)": {
      "Schedule": 1,
      "Charter": 1
    },
    "Travel Form": {
      "Schedule": 1,
      "Charter": 1
    },
    "Insurance": {
      "Schedule": 1,
      "Charter": 1
    },
    "Manual PNL": {
      "Schedule": 100,
      "Charter": 150
    },
    "Load sheet": {
      "Schedule": 100,
      "Charter": 150
    },
    "Flight creation": {
      "Schedule": 100,
      "Charter": 150
    },
    "Seat Map": {
      "Schedule": 100,
      "Charter": 150
    },
    "Station Management": {
      "Schedule": 200,
      "Charter": 235
    },
    "Cancel/Overflies in short notif.": {
      "Schedule": 0,
      "Charter": 0
    },
    "other": {
      "Schedule": null,
      "Charter": null
    },
    "Delay Above 60 minute up to 4 Hours": {
      "Schedule": 0.25,
      "Charter": 0.25
    },
    "Delay Above 4 Hours": {
      "Schedule": 0.35,
      "Charter": 0.35
    },
    "Delay Above 8 Hours": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "service between 22:00 to 06:00": {
      "Schedule": 0.25,
      "Charter": 0.25
    },
    "Ferry In": {
      "Schedule": 0.75,
      "Charter": 0.75
    },
    "ferry out": {
      "Schedule": 0.5,
      "Charter": 0.5
    }
  },
  "TABAN AIR": {
    "CUPPS Service": {
      "Schedule": 3.5,
      "Charter": 4
    },
    "DCS Service": {
      "Schedule": 4,
      "Charter": 4.5
},
    "Excess Baggage": {
      "Schedule": 7,
      "Charter": 7
    },
    "WHCHN": {
      "Schedule": 35,
      "Charter": 35
    },
    "VIP": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP system": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP assistance (MAAS)": {
      "Schedule": 1,
      "Charter": 1
    },
    "Travel Form": {
      "Schedule": 1,
      "Charter": 1
    },
    "Insurance": {
      "Schedule": 1,
      "Charter": 1
    },
    "Manual PNL": {
      "Schedule": 100,
      "Charter": 150
    },
    "Load sheet": {
      "Schedule": 100,
      "Charter": 150
    },
    "Flight creation": {
      "Schedule": 100,
      "Charter": 150
    },
    "Seat Map": {
      "Schedule": 100,
      "Charter": 150
    },
    "Station Management": {
      "Schedule": 200,
      "Charter": 235
    },
    "Cancel/Overflies in short notif.": {
      "Schedule": 0,
      "Charter": 0
    },
    "other": {
      "Schedule": null,
      "Charter": null
    },
    "Delay Above 60 minute up to 4 Hours": {
      "Schedule": 0.25,
      "Charter": 0.25
    },
    "Delay Above 4 Hours": {
      "Schedule": 0.35,
      "Charter": 0.35
    },
    "Delay Above 8 Hours": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "service between 22:00 to 06:00": {
      "Schedule": 0.25,
      "Charter": 0.25
    },
    "Ferry In": {
      "Schedule": 0.75,
      "Charter": 0.75
    },
    "ferry out": {
      "Schedule": 0.5,
      "Charter": 0.5
    }
  },
  "Jet Magic Airline": {
    "CUPPS Service": {
      "Schedule": 3.5,
      "Charter": 4
    },
    "DCS Service": {
      "Schedule": 4,
      "Charter": 4.5
},
    "Excess Baggage": {
      "Schedule": 7,
      "Charter": 7
    },
    "WHCHN": {
      "Schedule": 35,
      "Charter": 35
    },
    "VIP": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP system": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP assistance (MAAS)": {
      "Schedule": 1,
      "Charter": 1
    },
    "Travel Form": {
      "Schedule": 1,
      "Charter": 1
    },
    "Insurance": {
      "Schedule": 1,
      "Charter": 1
    },
    "Manual PNL": {
      "Schedule": 100,
      "Charter": 150
    },
    "Load sheet": {
      "Schedule": 100,
      "Charter": 150
    },
    "Flight creation": {
      "Schedule": 100,
      "Charter": 150
    },
    "Seat Map": {
      "Schedule": 100,
      "Charter": 150
    },
    "Station Management": {
      "Schedule": 200,
      "Charter": 235
    },
    "Cancel/Overflies in short notif.": {
      "Schedule": 0,
      "Charter": 0
    },
    "other": {
      "Schedule": null,
      "Charter": null
    },
    "Delay Above 60 minute up to 4 Hours": {
      "Schedule": 0.25,
      "Charter": 0.25
    },
    "Delay Above 4 Hours": {
      "Schedule": 0.35,
      "Charter": 0.35
    },
    "Delay Above 8 Hours": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "service between 22:00 to 06:00": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "Ferry In": {
      "Schedule": 0.75,
      "Charter": 0.75
    },
    "ferry out": {
      "Schedule": 0.5,
      "Charter": 0.5
    }
  },
  "Klas Jet Airline": {
    "CUPPS Service": {
      "Schedule": 3.5,
      "Charter": 4
    },
    "DCS Service": {
      "Schedule": 4,
      "Charter": 4.5
},
    "Excess Baggage": {
      "Schedule": 7,
      "Charter": 7
    },
    "WHCHN": {
      "Schedule": 35,
      "Charter": 35
    },
    "VIP": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP system": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP assistance (MAAS)": {
      "Schedule": 1,
      "Charter": 1
    },
    "Travel Form": {
      "Schedule": 1,
      "Charter": 1
    },
    "Insurance": {
      "Schedule": 1,
      "Charter": 1
    },
    "Manual PNL": {
      "Schedule": 100,
      "Charter": 150
    },
    "Load sheet": {
      "Schedule": 100,
      "Charter": 150
    },
    "Flight creation": {
      "Schedule": 100,
      "Charter": 150
    },
    "Seat Map": {
      "Schedule": 100,
      "Charter": 150
    },
    "Station Management": {
      "Schedule": 200,
      "Charter": 235
    },
    "Cancel/Overflies in short notif.": {
      "Schedule": 0,
      "Charter": 0
    },
    "other": {
      "Schedule": null,
      "Charter": null
    },
    "Delay Above 60 minute up to 4 Hours": {
      "Schedule": 0.25,
      "Charter": 0.25
    },
    "Delay Above 4 Hours": {
      "Schedule": 0.35,
      "Charter": 0.35
    },
    "Delay Above 8 Hours": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "service between 22:00 to 06:00": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "Ferry In": {
      "Schedule": 0.75,
      "Charter": 0.75
    },
    "ferry out": {
      "Schedule": 0.5,
      "Charter": 0.5
    }
  },
  "RED WINGS": {
    "CUPPS Service": {
      "Schedule": 3.5,
      "Charter": 4
    },
    "DCS Service": {
      "Schedule": 4,
      "Charter": 4.5
    },
    "WHCHN": {
      "Schedule": 35,
      "Charter": 35
    },
    "VIP": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP system": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP assistance (MAAS)": {
      "Schedule": 1,
      "Charter": 1
    },
    "Travel Form": {
      "Schedule": 1,
      "Charter": 1
    },
    "Insurance": {
      "Schedule": 1,
      "Charter": 1
    },
    "Manual PNL": {
      "Schedule": 100,
      "Charter": 150
    },
    "Load sheet": {
      "Schedule": 100,
      "Charter": 150
    },
    "Flight creation": {
      "Schedule": 100,
      "Charter": 150
    },
    "Seat Map": {
      "Schedule": 100,
      "Charter": 150
    },
    "Station Management": {
      "Schedule": 200,
      "Charter": 235
    },
    "Cancel/Overflies in short notif.": {
      "Schedule": 0,
      "Charter": 0
    },
    "other": {
      "Schedule": null,
      "Charter": null
    },
    "Delay Above 60 minute up to 4 Hours": {
      "Schedule": 0.25,
      "Charter": 0.25
    },
    "Delay Above 4 Hours": {
      "Schedule": 0.35,
      "Charter": 0.35
    },
    "Delay Above 8 Hours": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "service between 22:00 to 06:00": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "Ferry In": {
      "Schedule": 0.75,
      "Charter": 0.75
    },
    "ferry out": {
      "Schedule": 0.5,
      "Charter": 0.5
    }
  },
  "PAKISTAN AIR": {
    "CUPPS Service": {
      "Schedule": 3.5,
      "Charter": 4
    },
    "DCS Service": {
      "Schedule": 4,
      "Charter": 4.5
},
    "Excess Baggage": {
      "Schedule": 7,
      "Charter": 7
    },
    "WHCHN": {
      "Schedule": 35,
      "Charter": 35
    },
    "VIP": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP system": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP assistance (MAAS)": {
      "Schedule": 1,
      "Charter": 1
    },
    "Travel Form": {
      "Schedule": 1,
      "Charter": 1
    },
    "Insurance": {
      "Schedule": 1,
      "Charter": 1
    },
    "Manual PNL": {
      "Schedule": 100,
      "Charter": 150
    },
    "Load sheet": {
      "Schedule": 100,
      "Charter": 150
    },
    "Flight creation": {
      "Schedule": 100,
      "Charter": 150
    },
    "Seat Map": {
      "Schedule": 100,
      "Charter": 150
    },
    "Station Management": {
      "Schedule": 200,
      "Charter": 235
    },
    "Cancel/Overflies in short notif.": {
      "Schedule": 0,
      "Charter": 0
    },
    "other": {
      "Schedule": null,
      "Charter": null
    },
    "Delay Above 60 minute up to 4 Hours": {
      "Schedule": 0.25,
      "Charter": 0.25
    },
    "Delay Above 4 Hours": {
      "Schedule": 0.35,
      "Charter": 0.35
    },
    "Delay Above 8 Hours": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "service between 22:00 to 06:00": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "Ferry In": {
      "Schedule": 0.75,
      "Charter": 0.75
    },
    "ferry out": {
      "Schedule": 0.5,
      "Charter": 0.5
    }
  },
  "QESHM AIR": {
    "CUPPS Service": {
      "Schedule": 3.5,
      "Charter": 4
    },
    "DCS Service": {
      "Schedule": 4,
      "Charter": 4.5
},
    "Excess Baggage": {
      "Schedule": 7,
      "Charter": 7
    },
    "WHCHN": {
      "Schedule": 35,
      "Charter": 35
    },
    "VIP": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP system": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP assistance (MAAS)": {
      "Schedule": 1,
      "Charter": 1
    },
    "Travel Form": {
      "Schedule": 1,
      "Charter": 1
    },
    "Insurance": {
      "Schedule": 1,
      "Charter": 1
    },
    "Manual PNL": {
      "Schedule": 100,
      "Charter": 150
    },
    "Load sheet": {
      "Schedule": 100,
      "Charter": 150
    },
    "Flight creation": {
      "Schedule": 100,
      "Charter": 150
    },
    "Seat Map": {
      "Schedule": 100,
      "Charter": 150
    },
    "Station Management": {
      "Schedule": 200,
      "Charter": 235
    },
    "Cancel/Overflies in short notif.": {
      "Schedule": 0,
      "Charter": 0
    },
    "other": {
      "Schedule": null,
      "Charter": null
    },
    "Delay Above 60 minute up to 4 Hours": {
      "Schedule": 0.25,
      "Charter": 0.25
    },
    "Delay Above 4 Hours": {
      "Schedule": 0.35,
      "Charter": 0.35
    },
    "Delay Above 8 Hours": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "service between 22:00 to 06:00": {
      "Schedule": 0.25,
      "Charter": 0.25
    },
    "Ferry In": {
      "Schedule": 0.75,
      "Charter": 0.75
    },
    "ferry out": {
      "Schedule": 0.5,
      "Charter": 0.5
    }
  },
  "Cash Customers": {
    "CUPPS Service": {
      "Schedule": 3.5,
      "Charter": 4
    },
    "DCS Service": {
      "Schedule": 4,
      "Charter": 4.5
},
    "Excess Baggage": {
      "Schedule": 7,
      "Charter": 7
    },
    "WHCHN": {
      "Schedule": 35,
      "Charter": 35
    },
    "VIP": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP system": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP assistance (MAAS)": {
      "Schedule": 1,
      "Charter": 1
    },
    "Travel Form": {
      "Schedule": 1,
      "Charter": 1
    },
    "Insurance": {
      "Schedule": 1,
      "Charter": 1
    },
    "Manual PNL": {
      "Schedule": 100,
      "Charter": 150
    },
    "Load sheet": {
      "Schedule": 100,
      "Charter": 150
    },
    "Flight creation": {
      "Schedule": 100,
      "Charter": 150
    },
    "Seat Map": {
      "Schedule": 100,
      "Charter": 150
    },
    "Station Management": {
      "Schedule": 200,
      "Charter": 235
    },
    "Cancel/Overflies in short notif.": {
      "Schedule": 0,
      "Charter": 0
    },
    "other": {
      "Schedule": null,
      "Charter": null
    },
    "Delay Above 60 minute up to 4 Hours": {
      "Schedule": 0.25,
      "Charter": 0.25
    },
    "Delay Above 4 Hours": {
      "Schedule": 0.35,
      "Charter": 0.35
    },
    "Delay Above 8 Hours": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "service between 22:00 to 06:00": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "Ferry In": {
      "Schedule": 0.75,
      "Charter": 0.75
    },
    "ferry out": {
      "Schedule": 0.5,
      "Charter": 0.5
    }
  },
  "ATA  air": {
    "CUPPS Service": {
      "Schedule": 3.5,
      "Charter": 4
    },
    "DCS Service": {
      "Schedule": 4,
      "Charter": 4.5
},
    "Excess Baggage": {
      "Schedule": 7,
      "Charter": 7
    },
    "WHCHN": {
      "Schedule": 35,
      "Charter": 35
    },
    "VIP": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP system": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP assistance (MAAS)": {
      "Schedule": 1,
      "Charter": 1
    },
    "Travel Form": {
      "Schedule": 1,
      "Charter": 1
    },
    "Insurance": {
      "Schedule": 1,
      "Charter": 1
    },
    "Manual PNL": {
      "Schedule": 100,
      "Charter": 150
    },
    "Load sheet": {
      "Schedule": 100,
      "Charter": 150
    },
    "Flight creation": {
      "Schedule": 100,
      "Charter": 150
    },
    "Seat Map": {
      "Schedule": 100,
      "Charter": 150
    },
    "Station Management": {
      "Schedule": 200,
      "Charter": 235
    },
    "Cancel/Overflies in short notif.": {
      "Schedule": 0,
      "Charter": 0
    },
    "other": {
      "Schedule": null,
      "Charter": null
    },
    "Delay Above 60 minute up to 4 Hours": {
      "Schedule": 0.25,
      "Charter": 0.25
    },
    "Delay Above 4 Hours": {
      "Schedule": 0.35,
      "Charter": 0.35
    },
    "Delay Above 8 Hours": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "service between 22:00 to 06:00": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "Ferry In": {
      "Schedule": 0.75,
      "Charter": 0.75
    },
    "ferry out": {
      "Schedule": 0.5,
      "Charter": 0.5
    }
  },
  "Aseman air": {
    "CUPPS Service": {
      "Schedule": 3.5,
      "Charter": 4
    },
    "DCS Service": {
      "Schedule": 4,
      "Charter": 4.5
},
    "Excess Baggage": {
      "Schedule": 7,
      "Charter": 7
    },
    "WHCHN": {
      "Schedule": 35,
      "Charter": 35
    },
    "VIP": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP system": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP assistance (MAAS)": {
      "Schedule": 1,
      "Charter": 1
    },
    "Travel Form": {
      "Schedule": 1,
      "Charter": 1
    },
    "Insurance": {
      "Schedule": 1,
      "Charter": 1
    },
    "Manual PNL": {
      "Schedule": 100,
      "Charter": 150
    },
    "Load sheet": {
      "Schedule": 100,
      "Charter": 150
    },
    "Flight creation": {
      "Schedule": 100,
      "Charter": 150
    },
    "Seat Map": {
      "Schedule": 100,
      "Charter": 150
    },
    "Station Management": {
      "Schedule": 200,
      "Charter": 235
    },
    "Cancel/Overflies in short notif.": {
      "Schedule": 0,
      "Charter": 0
    },
    "other": {
      "Schedule": null,
      "Charter": null
    },
    "Delay Above 60 minute up to 4 Hours": {
      "Schedule": 0.25,
      "Charter": 0.25
    },
    "Delay Above 4 Hours": {
      "Schedule": 0.35,
      "Charter": 0.35
    },
    "Delay Above 8 Hours": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "service between 22:00 to 06:00": {
      "Schedule": 0.25,
      "Charter": 0.25
    },
    "Ferry In": {
      "Schedule": 0.75,
      "Charter": 0.75
    },
    "ferry out": {
      "Schedule": 0.5,
      "Charter": 0.5
    }
  },
  "Nile Air": {
    "CUPPS Service": {
      "Schedule": 3.5,
      "Charter": 4
    },
    "DCS Service": {
      "Schedule": 4,
      "Charter": 4.5
},
    "Excess Baggage": {
      "Schedule": 7,
      "Charter": 7
    },
    "WHCHN": {
      "Schedule": 35,
      "Charter": 35
    },
    "VIP": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP system": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP assistance (MAAS)": {
      "Schedule": 1,
      "Charter": 1
    },
    "Travel Form": {
      "Schedule": 1,
      "Charter": 1
    },
    "Insurance": {
      "Schedule": 1,
      "Charter": 1
    },
    "Manual PNL": {
      "Schedule": 100,
      "Charter": 150
    },
    "Load sheet": {
      "Schedule": 100,
      "Charter": 150
    },
    "Flight creation": {
      "Schedule": 100,
      "Charter": 150
    },
    "Seat Map": {
      "Schedule": 100,
      "Charter": 150
    },
    "Station Management": {
      "Schedule": 200,
      "Charter": 235
    },
    "Cancel/Overflies in short notif.": {
      "Schedule": 0,
      "Charter": 0
    },
    "other": {
      "Schedule": null,
      "Charter": null
    },
    "Delay Above 60 minute up to 4 Hours": {
      "Schedule": 0.25,
      "Charter": 0.25
    },
    "Delay Above 4 Hours": {
      "Schedule": 0.35,
      "Charter": 0.35
    },
    "Delay Above 8 Hours": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "service between 22:00 to 06:00": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "Ferry In": {
      "Schedule": 0.75,
      "Charter": 0.75
    },
    "ferry out": {
      "Schedule": 0.5,
      "Charter": 0.5
    }
  },
  "ASA": {
    "CUPPS Service": {
      "Schedule": 3.5,
      "Charter": 4
    },
    "DCS Service": {
      "Schedule": 4,
      "Charter": 4.5
},
    "Excess Baggage": {
      "Schedule": 7,
      "Charter": 7
    },
    "WHCHN": {
      "Schedule": 35,
      "Charter": 35
    },
    "VIP": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP system": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP assistance (MAAS)": {
      "Schedule": 1,
      "Charter": 1
    },
    "Travel Form": {
      "Schedule": 1,
      "Charter": 1
    },
    "Insurance": {
      "Schedule": 1,
      "Charter": 1
    },
    "Manual PNL": {
      "Schedule": 100,
      "Charter": 150
    },
    "Load sheet": {
      "Schedule": 100,
      "Charter": 150
    },
    "Flight creation": {
      "Schedule": 100,
      "Charter": 150
    },
    "Seat Map": {
      "Schedule": 100,
      "Charter": 150
    },
    "Station Management": {
      "Schedule": 200,
      "Charter": 235
    },
    "Cancel/Overflies in short notif.": {
      "Schedule": 0,
      "Charter": 0
    },
    "other": {
      "Schedule": null,
      "Charter": null
    },
    "Delay Above 60 minute up to 4 Hours": {
      "Schedule": 0.25,
      "Charter": 0.25
    },
    "Delay Above 4 Hours": {
      "Schedule": 0.35,
      "Charter": 0.35
    },
    "Delay Above 8 Hours": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "service between 22:00 to 06:00": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "Ferry In": {
      "Schedule": 0.75,
      "Charter": 0.75
    },
    "ferry out": {
      "Schedule": 0.5,
      "Charter": 0.5
    }
  },
  "Sama Al Iraq - UT Air": {
    "CUPPS Service": {
      "Schedule": 3.5,
      "Charter": 4
    },
    "DCS Service": {
      "Schedule": 4,
      "Charter": 4.5
},
    "Excess Baggage": {
      "Schedule": 7,
      "Charter": 7
    },
    "WHCHN": {
      "Schedule": 35,
      "Charter": 35
    },
    "VIP": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP system": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP assistance (MAAS)": {
      "Schedule": 1,
      "Charter": 1
    },
    "Travel Form": {
      "Schedule": 1,
      "Charter": 1
    },
    "Insurance": {
      "Schedule": 1,
      "Charter": 1
    },
    "Manual PNL": {
      "Schedule": 100,
      "Charter": 150
    },
    "Load sheet": {
      "Schedule": 100,
      "Charter": 150
    },
    "Flight creation": {
      "Schedule": 100,
      "Charter": 150
    },
    "Seat Map": {
      "Schedule": 100,
      "Charter": 150
    },
    "Station Management": {
      "Schedule": 200,
      "Charter": 235
    },
    "Cancel/Overflies in short notif.": {
      "Schedule": 0,
      "Charter": 0
    },
    "other": {
      "Schedule": null,
      "Charter": null
    },
    "Delay Above 60 minute up to 4 Hours": {
      "Schedule": 0.25,
      "Charter": 0.25
    },
    "Delay Above 4 Hours": {
      "Schedule": 0.35,
      "Charter": 0.35
    },
    "Delay Above 8 Hours": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "service between 22:00 to 06:00": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "Ferry In": {
      "Schedule": 0.75,
      "Charter": 0.75
    },
    "ferry out": {
      "Schedule": 0.5,
      "Charter": 0.5
    }
  },
  "SAHA Air": {
    "CUPPS Service": {
      "Schedule": 3.5,
      "Charter": 4
    },
    "DCS Service": {
      "Schedule": 4,
      "Charter": 4.5
},
    "Excess Baggage": {
      "Schedule": 7,
      "Charter": 7
    },
    "WHCHN": {
      "Schedule": 35,
      "Charter": 35
    },
    "VIP": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP system": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP assistance (MAAS)": {
      "Schedule": 1,
      "Charter": 1
    },
    "Travel Form": {
      "Schedule": 1,
      "Charter": 1
    },
    "Insurance": {
      "Schedule": 1,
      "Charter": 1
    },
    "Manual PNL": {
      "Schedule": 100,
      "Charter": 150
    },
    "Load sheet": {
      "Schedule": 100,
      "Charter": 150
    },
    "Flight creation": {
      "Schedule": 100,
      "Charter": 150
    },
    "Seat Map": {
      "Schedule": 100,
      "Charter": 150
    },
    "Station Management": {
      "Schedule": 200,
      "Charter": 235
    },
    "Cancel/Overflies in short notif.": {
      "Schedule": 0,
      "Charter": 0
    },
    "other": {
      "Schedule": null,
      "Charter": null
    },
    "Delay Above 60 minute up to 4 Hours": {
      "Schedule": 0.25,
      "Charter": 0.25
    },
    "Delay Above 4 Hours": {
      "Schedule": 0.35,
      "Charter": 0.35
    },
    "Delay Above 8 Hours": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "service between 22:00 to 06:00": {
      "Schedule": 0.25,
      "Charter": 0.25
    },
    "Ferry In": {
      "Schedule": 0.75,
      "Charter": 0.75
    },
    "ferry out": {
      "Schedule": 0.5,
      "Charter": 0.5
    }
  },
  "Pars Air": {
    "CUPPS Service": {
      "Schedule": 3.5,
      "Charter": 4
    },
    "DCS Service": {
      "Schedule": 4,
      "Charter": 4.5
},
    "Excess Baggage": {
      "Schedule": 7,
      "Charter": 7
    },
    "WHCHN": {
      "Schedule": 35,
      "Charter": 35
    },
    "VIP": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP system": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP assistance (MAAS)": {
      "Schedule": 1,
      "Charter": 1
    },
    "Travel Form": {
      "Schedule": 1,
      "Charter": 1
    },
    "Insurance": {
      "Schedule": 1,
      "Charter": 1
    },
    "Manual PNL": {
      "Schedule": 100,
      "Charter": 150
    },
    "Load sheet": {
      "Schedule": 100,
      "Charter": 150
    },
    "Flight creation": {
      "Schedule": 100,
      "Charter": 150
    },
    "Seat Map": {
      "Schedule": 100,
      "Charter": 150
    },
    "Station Management": {
      "Schedule": 200,
      "Charter": 235
    },
    "Cancel/Overflies in short notif.": {
      "Schedule": 0,
      "Charter": 0
    },
    "other": {
      "Schedule": null,
      "Charter": null
    },
    "Delay Above 60 minute up to 4 Hours": {
      "Schedule": 0.25,
      "Charter": 0.25
    },
    "Delay Above 4 Hours": {
      "Schedule": 0.35,
      "Charter": 0.35
    },
    "Delay Above 8 Hours": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "service between 22:00 to 06:00": {
      "Schedule": 0.25,
      "Charter": 0.25
    },
    "Ferry In": {
      "Schedule": 0.75,
      "Charter": 0.75
    },
    "ferry out": {
      "Schedule": 0.5,
      "Charter": 0.5
    }
  },
  "Zagros Air": {
    "CUPPS Service": {
      "Schedule": 3.5,
      "Charter": 4
    },
    "DCS Service": {
      "Schedule": 4,
      "Charter": 4.5
},
    "Excess Baggage": {
      "Schedule": 7,
      "Charter": 7
    },
    "WHCHN": {
      "Schedule": 35,
      "Charter": 35
    },
    "VIP": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP system": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP assistance (MAAS)": {
      "Schedule": 1,
      "Charter": 1
    },
    "Travel Form": {
      "Schedule": 1,
      "Charter": 1
    },
    "Insurance": {
      "Schedule": 1,
      "Charter": 1
    },
    "Manual PNL": {
      "Schedule": 100,
      "Charter": 150
    },
    "Load sheet": {
      "Schedule": 100,
      "Charter": 150
    },
    "Flight creation": {
      "Schedule": 100,
      "Charter": 150
    },
    "Seat Map": {
      "Schedule": 100,
      "Charter": 150
    },
    "Station Management": {
      "Schedule": 200,
      "Charter": 235
    },
    "Cancel/Overflies in short notif.": {
      "Schedule": 0,
      "Charter": 0
    },
    "other": {
      "Schedule": null,
      "Charter": null
    },
    "Delay Above 60 minute up to 4 Hours": {
      "Schedule": 0.25,
      "Charter": 0.25
    },
    "Delay Above 4 Hours": {
      "Schedule": 0.35,
      "Charter": 0.35
    },
    "Delay Above 8 Hours": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "service between 22:00 to 06:00": {
      "Schedule": 0.25,
      "Charter": 0.25
    },
    "Ferry In": {
      "Schedule": 0.75,
      "Charter": 0.75
    },
    "ferry out": {
      "Schedule": 0.5,
      "Charter": 0.5
    }
  },
  "AEROFLOT Airline": {
    "CUPPS Service": {
      "Schedule": 3.5,
      "Charter": 4
    },
    "DCS Service": {
      "Schedule": 4,
      "Charter": 4.5
},
    "Excess Baggage": {
      "Schedule": 7,
      "Charter": 7
    },
    "WHCHN": {
      "Schedule": 35,
      "Charter": 35
    },
    "VIP": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP system": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP assistance (MAAS)": {
      "Schedule": 1,
      "Charter": 1
    },
    "Travel Form": {
      "Schedule": 1,
      "Charter": 1
    },
    "Insurance": {
      "Schedule": 1,
      "Charter": 1
    },
    "Manual PNL": {
      "Schedule": 100,
      "Charter": 150
    },
    "Load sheet": {
      "Schedule": 100,
      "Charter": 150
    },
    "Flight creation": {
      "Schedule": 100,
      "Charter": 150
    },
    "Seat Map": {
      "Schedule": 100,
      "Charter": 150
    },
    "Station Management": {
      "Schedule": 200,
      "Charter": 235
    },
    "Cancel/Overflies in short notif.": {
      "Schedule": 0,
      "Charter": 0
    },
    "other": {
      "Schedule": null,
      "Charter": null
    },
    "Delay Above 60 minute up to 4 Hours": {
      "Schedule": 0.25,
      "Charter": 0.25
    },
    "Delay Above 4 Hours": {
      "Schedule": 0.35,
      "Charter": 0.35
    },
    "Delay Above 8 Hours": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "service between 22:00 to 06:00": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "Ferry In": {
      "Schedule": 0.75,
      "Charter": 0.75
    },
    "ferry out": {
      "Schedule": 0.5,
      "Charter": 0.5
    }
  },
  "Fly Arna": {
    "CUPPS Service": {
      "Schedule": 3.5,
      "Charter": 4
    },
    "DCS Service": {
      "Schedule": 4,
      "Charter": 4.5
    },
    "WHCHN": {
      "Schedule": 35,
      "Charter": 35
    },
    "VIP": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP system": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP assistance (MAAS)": {
      "Schedule": 1,
      "Charter": 1
    },
    "Travel Form": {
      "Schedule": 1,
      "Charter": 1
    },
    "Insurance": {
      "Schedule": 1,
      "Charter": 1
    },
    "Manual PNL": {
      "Schedule": 100,
      "Charter": 150
    },
    "Load sheet": {
      "Schedule": 100,
      "Charter": 150
    },
    "Flight creation": {
      "Schedule": 100,
      "Charter": 150
    },
    "Seat Map": {
      "Schedule": 100,
      "Charter": 150
    },
    "Station Management": {
      "Schedule": 200,
      "Charter": 235
    },
    "Cancel/Overflies in short notif.": {
      "Schedule": 0,
      "Charter": 0
    },
    "other": {
      "Schedule": null,
      "Charter": null
    },
    "Delay Above 60 minute up to 4 Hours": {
      "Schedule": 0.25,
      "Charter": 0.25
    },
    "Delay Above 4 Hours": {
      "Schedule": 0.35,
      "Charter": 0.35
    },
    "Delay Above 8 Hours": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "service between 22:00 to 06:00": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "Ferry In": {
      "Schedule": 0.75,
      "Charter": 0.75
    },
    "ferry out": {
      "Schedule": 0.5,
      "Charter": 0.5
    }
  },
  "Fly Nas": {
    "CUPPS Service": {
      "Schedule": 3.5,
      "Charter": 4
    },
    "DCS Service": {
      "Schedule": 4,
      "Charter": 4.5
},
    "Excess Baggage": {
      "Schedule": 7,
      "Charter": 7
    },
    "WHCHN": {
      "Schedule": 35,
      "Charter": 35
    },
    "VIP": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP system": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP assistance (MAAS)": {
      "Schedule": 1,
      "Charter": 1
    },
    "Travel Form": {
      "Schedule": 1,
      "Charter": 1
    },
    "Insurance": {
      "Schedule": 1,
      "Charter": 1
    },
    "Manual PNL": {
      "Schedule": 100,
      "Charter": 150
    },
    "Load sheet": {
      "Schedule": 100,
      "Charter": 150
    },
    "Flight creation": {
      "Schedule": 100,
      "Charter": 150
    },
    "Seat Map": {
      "Schedule": 100,
      "Charter": 150
    },
    "Station Management": {
      "Schedule": 350,
      "Charter": 350
    },
    "Cancel/Overflies in short notif.": {
      "Schedule": 0,
      "Charter": 0
    },
    "other": {
      "Schedule": null,
      "Charter": null
    },
    "Delay Above 60 minute up to 4 Hours": {
      "Schedule": 0.25,
      "Charter": 0.25
    },
    "Delay Above 4 Hours": {
      "Schedule": 0.35,
      "Charter": 0.35
    },
    "Delay Above 8 Hours": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "service between 22:00 to 06:00": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "Ferry In": {
      "Schedule": 0.75,
      "Charter": 0.75
    },
    "ferry out": {
      "Schedule": 0.5,
      "Charter": 0.5
    }
  },
  "Flyadeal": {
    "CUPPS Service": {
      "Schedule": 3.5,
      "Charter": 4
    },
    "DCS Service": {
      "Schedule": 4,
      "Charter": 4.5
},
    "Excess Baggage": {
      "Schedule": 7,
      "Charter": 7
    },
    "WHCHN": {
      "Schedule": 35,
      "Charter": 35
    },
    "VIP": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP system": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP assistance (MAAS)": {
      "Schedule": 1,
      "Charter": 1
    },
    "Travel Form": {
      "Schedule": 1,
      "Charter": 1
    },
    "Insurance": {
      "Schedule": 1,
      "Charter": 1
    },
    "Manual PNL": {
      "Schedule": 100,
      "Charter": 150
    },
    "Load sheet": {
      "Schedule": 100,
      "Charter": 150
    },
    "Flight creation": {
      "Schedule": 100,
      "Charter": 150
    },
    "Seat Map": {
      "Schedule": 100,
      "Charter": 150
    },
    "Station Management": {
      "Schedule": 200,
      "Charter": 235
    },
    "Cancel/Overflies in short notif.": {
      "Schedule": 0,
      "Charter": 0
    },
    "other": {
      "Schedule": null,
      "Charter": null
    },
    "Delay Above 60 minute up to 4 Hours": {
      "Schedule": 0.25,
      "Charter": 0.25
    },
    "Delay Above 4 Hours": {
      "Schedule": 0.35,
      "Charter": 0.35
    },
    "Delay Above 8 Hours": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "service between 22:00 to 06:00": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "Ferry In": {
      "Schedule": 0.75,
      "Charter": 0.75
    },
    "ferry out": {
      "Schedule": 0.5,
      "Charter": 0.5
    }
  },
  "Fly Sepehran": {
    "CUPPS Service": {
      "Schedule": 3.5,
      "Charter": 4
    },
    "DCS Service": {
      "Schedule": 4,
      "Charter": 4.5
},
    "Excess Baggage": {
      "Schedule": 7,
      "Charter": 7
    },
    "WHCHN": {
      "Schedule": 35,
      "Charter": 35
    },
    "VIP": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP system": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP assistance (MAAS)": {
      "Schedule": 1,
      "Charter": 1
    },
    "Travel Form": {
      "Schedule": 1,
      "Charter": 1
    },
    "Insurance": {
      "Schedule": 1,
      "Charter": 1
    },
    "Manual PNL": {
      "Schedule": 100,
      "Charter": 150
    },
    "Load sheet": {
      "Schedule": 100,
      "Charter": 150
    },
    "Flight creation": {
      "Schedule": 100,
      "Charter": 150
    },
    "Seat Map": {
      "Schedule": 100,
      "Charter": 150
    },
    "Station Management": {
      "Schedule": 200,
      "Charter": 235
    },
    "Cancel/Overflies in short notif.": {
      "Schedule": 0,
      "Charter": 0
    },
    "other": {
      "Schedule": null,
      "Charter": null
    },
    "Delay Above 60 minute up to 4 Hours": {
      "Schedule": 0.25,
      "Charter": 0.25
    },
    "Delay Above 4 Hours": {
      "Schedule": 0.35,
      "Charter": 0.35
    },
    "Delay Above 8 Hours": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "service between 22:00 to 06:00": {
      "Schedule": 0.25,
      "Charter": 0.25
    },
    "Ferry In": {
      "Schedule": 0.75,
      "Charter": 0.75
    },
    "ferry out": {
      "Schedule": 0.5,
      "Charter": 0.5
    }
  },
  "VIP Terminal": {
    "CUPPS Service": {
      "Schedule": 3.5,
      "Charter": 4
    },
    "DCS Service": {
      "Schedule": 4,
      "Charter": 4.5
    },
    "WHCHN": {
      "Schedule": 35,
      "Charter": 35
    },
    "VIP": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP system": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP assistance (MAAS)": {
      "Schedule": 1,
      "Charter": 1
    },
    "Travel Form": {
      "Schedule": 1,
      "Charter": 1
    },
    "Insurance": {
      "Schedule": 1,
      "Charter": 1
    },
    "Manual PNL": {
      "Schedule": 100,
      "Charter": 150
    },
    "Load sheet": {
      "Schedule": 100,
      "Charter": 150
    },
    "Flight creation": {
      "Schedule": 100,
      "Charter": 150
    },
    "Seat Map": {
      "Schedule": 100,
      "Charter": 150
    },
    "Station Management": {
      "Schedule": 200,
      "Charter": 235
    },
    "Cancel/Overflies in short notif.": {
      "Schedule": 0,
      "Charter": 0
    },
    "other": {
      "Schedule": null,
      "Charter": null
    },
    "Delay Above 60 minute up to 4 Hours": {
      "Schedule": 0.25,
      "Charter": 0.25
    },
    "Delay Above 4 Hours": {
      "Schedule": 0.35,
      "Charter": 0.35
    },
    "Delay Above 8 Hours": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "service between 22:00 to 06:00": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "Ferry In": {
      "Schedule": 0.75,
      "Charter": 0.75
    },
    "ferry out": {
      "Schedule": 0.5,
      "Charter": 0.5
    }
  },
  "Salam Air": {
    "CUPPS Service": {
      "Schedule": 3.5,
      "Charter": 4
    },
    "DCS Service": {
      "Schedule": 4,
      "Charter": 4.5
},
    "Excess Baggage": {
      "Schedule": 7,
      "Charter": 7
    },
    "WHCHN": {
      "Schedule": 35,
      "Charter": 35
    },
    "VIP": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP system": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP assistance (MAAS)": {
      "Schedule": 1,
      "Charter": 1
    },
    "Travel Form": {
      "Schedule": 1,
      "Charter": 1
    },
    "Insurance": {
      "Schedule": 1,
      "Charter": 1
    },
    "Manual PNL": {
      "Schedule": 100,
      "Charter": 150
    },
    "Load sheet": {
      "Schedule": 100,
      "Charter": 150
    },
    "Flight creation": {
      "Schedule": 100,
      "Charter": 150
    },
    "Seat Map": {
      "Schedule": 100,
      "Charter": 150
    },
    "Station Management": {
      "Schedule": 200,
      "Charter": 235
    },
    "Cancel/Overflies in short notif.": {
      "Schedule": 0,
      "Charter": 0
    },
    "other": {
      "Schedule": null,
      "Charter": null
    },
    "Delay Above 60 minute up to 4 Hours": {
      "Schedule": 0.25,
      "Charter": 0.25
    },
    "Delay Above 4 Hours": {
      "Schedule": 0.35,
      "Charter": 0.35
    },
    "Delay Above 8 Hours": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "service between 22:00 to 06:00": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "Ferry In": {
      "Schedule": 0.75,
      "Charter": 0.75
    },
    "ferry out": {
      "Schedule": 0.5,
      "Charter": 0.5
    }
  },
  "ASL Group": {
    "CUPPS Service": {
      "Schedule": 3.5,
      "Charter": 4
    },
    "DCS Service": {
      "Schedule": 4,
      "Charter": 4.5
},
    "Excess Baggage": {
      "Schedule": 7,
      "Charter": 7
    },
    "WHCHN": {
      "Schedule": 35,
      "Charter": 35
    },
    "VIP": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP system": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP assistance (MAAS)": {
      "Schedule": 1,
      "Charter": 1
    },
    "Travel Form": {
      "Schedule": 1,
      "Charter": 1
    },
    "Insurance": {
      "Schedule": 1,
      "Charter": 1
    },
    "Manual PNL": {
      "Schedule": 100,
      "Charter": 150
    },
    "Load sheet": {
      "Schedule": 100,
      "Charter": 150
    },
    "Flight creation": {
      "Schedule": 100,
      "Charter": 150
    },
    "Seat Map": {
      "Schedule": 100,
      "Charter": 150
    },
    "Station Management": {
      "Schedule": 200,
      "Charter": 235
    },
    "Cancel/Overflies in short notif.": {
      "Schedule": 0,
      "Charter": 0
    },
    "other": {
      "Schedule": null,
      "Charter": null
    },
    "Delay Above 60 minute up to 4 Hours": {
      "Schedule": 0.25,
      "Charter": 0.25
    },
    "Delay Above 4 Hours": {
      "Schedule": 0.35,
      "Charter": 0.35
    },
    "Delay Above 8 Hours": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "service between 22:00 to 06:00": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "Ferry In": {
      "Schedule": 0.75,
      "Charter": 0.75
    },
    "ferry out": {
      "Schedule": 0.5,
      "Charter": 0.5
    }
  },
  "Baghdad Lounge": {
    "CUPPS Service": {
      "Schedule": 0,
      "Charter": 4
    },
    "DCS Service": {
      "Schedule": 4,
      "Charter": 4.5
    },
    "WHCHN": {
      "Schedule": 35,
      "Charter": 35
    },
    "VIP": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP system": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP assistance (MAAS)": {
      "Schedule": 1,
      "Charter": 1
    },
    "Travel Form": {
      "Schedule": 1,
      "Charter": 1
    },
    "Insurance": {
      "Schedule": 1,
      "Charter": 1
    },
    "Manual PNL": {
      "Schedule": 100,
      "Charter": 150
    },
    "Load sheet": {
      "Schedule": 100,
      "Charter": 150
    },
    "Flight creation": {
      "Schedule": 100,
      "Charter": 150
    },
    "Seat Map": {
      "Schedule": 100,
      "Charter": 150
    },
    "Station Management": {
      "Schedule": 200,
      "Charter": 235
    },
    "Cancel/Overflies in short notif.": {
      "Schedule": 0,
      "Charter": 0
    },
    "other": {
      "Schedule": null,
      "Charter": null
    },
    "Delay Above 60 minute up to 4 Hours": {
      "Schedule": 0.25,
      "Charter": 0.25
    },
    "Delay Above 4 Hours": {
      "Schedule": 0.35,
      "Charter": 0.35
    },
    "Delay Above 8 Hours": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "service between 22:00 to 06:00": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "Ferry In": {
      "Schedule": 0.75,
      "Charter": 0.75
    },
    "ferry out": {
      "Schedule": 0.5,
      "Charter": 0.5
    }
  },
  "Caspian Air": {
    "CUPPS Service": {
      "Schedule": 3.5,
      "Charter": 4
    },
    "DCS Service": {
      "Schedule": 4,
      "Charter": 4.5
},
    "Excess Baggage": {
      "Schedule": 7,
      "Charter": 7
    },
    "WHCHN": {
      "Schedule": 35,
      "Charter": 35
    },
    "VIP": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP system": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP assistance (MAAS)": {
      "Schedule": 1,
      "Charter": 1
    },
    "Travel Form": {
      "Schedule": 1,
      "Charter": 1
    },
    "Insurance": {
      "Schedule": 1,
      "Charter": 1
    },
    "Manual PNL": {
      "Schedule": 100,
      "Charter": 150
    },
    "Load sheet": {
      "Schedule": 100,
      "Charter": 150
    },
    "Flight creation": {
      "Schedule": 100,
      "Charter": 150
    },
    "Seat Map": {
      "Schedule": 100,
      "Charter": 150
    },
    "Station Management": {
      "Schedule": 200,
      "Charter": 235
    },
    "Cancel/Overflies in short notif.": {
      "Schedule": 0,
      "Charter": 0
    },
    "other": {
      "Schedule": null,
      "Charter": null
    },
    "Delay Above 60 minute up to 4 Hours": {
      "Schedule": 0.25,
      "Charter": 0.25
    },
    "Delay Above 4 Hours": {
      "Schedule": 0.35,
      "Charter": 0.35
    },
    "Delay Above 8 Hours": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "service between 22:00 to 06:00": {
      "Schedule": 0.25,
      "Charter": 0.25
    },
    "Ferry In": {
      "Schedule": 0.75,
      "Charter": 0.75
    },
    "ferry out": {
      "Schedule": 0.5,
      "Charter": 0.5
    }
  },
  "Farish Air": {
    "CUPPS Service": {
      "Schedule": 3.5,
      "Charter": 4
    },
    "DCS Service": {
      "Schedule": 4,
      "Charter": 4.5
},
    "Excess Baggage": {
      "Schedule": 7,
      "Charter": 7
    },
    "WHCHN": {
      "Schedule": 35,
      "Charter": 35
    },
    "VIP": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP system": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP assistance (MAAS)": {
      "Schedule": 1,
      "Charter": 1
    },
    "Travel Form": {
      "Schedule": 1,
      "Charter": 1
    },
    "Insurance": {
      "Schedule": 1,
      "Charter": 1
    },
    "Manual PNL": {
      "Schedule": 100,
      "Charter": 150
    },
    "Load sheet": {
      "Schedule": 100,
      "Charter": 150
    },
    "Flight creation": {
      "Schedule": 100,
      "Charter": 150
    },
    "Seat Map": {
      "Schedule": 100,
      "Charter": 150
    },
    "Station Management": {
      "Schedule": 200,
      "Charter": 235
    },
    "Cancel/Overflies in short notif.": {
      "Schedule": 0,
      "Charter": 0
    },
    "other": {
      "Schedule": null,
      "Charter": null
    },
    "Delay Above 60 minute up to 4 Hours": {
      "Schedule": 0.25,
      "Charter": 0.25
    },
    "Delay Above 4 Hours": {
      "Schedule": 0.35,
      "Charter": 0.35
    },
    "Delay Above 8 Hours": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "service between 22:00 to 06:00": {
      "Schedule": 0.25,
      "Charter": 0.25
    },
    "Ferry In": {
      "Schedule": 0.75,
      "Charter": 0.75
    },
    "ferry out": {
      "Schedule": 0.5,
      "Charter": 0.5
    }
  },
  "ItlalaAlsharq-ARN": {
    "CUPPS Service": {
      "Schedule": 3.5,
      "Charter": 4
    },
    "DCS Service": {
      "Schedule": 4,
      "Charter": 4.5
},
    "Excess Baggage": {
      "Schedule": 7,
      "Charter": 7
    },
    "WHCHN": {
      "Schedule": 35,
      "Charter": 35
    },
    "VIP": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP system": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP assistance (MAAS)": {
      "Schedule": 1,
      "Charter": 1
    },
    "Travel Form": {
      "Schedule": 1,
      "Charter": 1
    },
    "Insurance": {
      "Schedule": 1,
      "Charter": 1
    },
    "Manual PNL": {
      "Schedule": 100,
      "Charter": 150
    },
    "Load sheet": {
      "Schedule": 100,
      "Charter": 150
    },
    "Flight creation": {
      "Schedule": 100,
      "Charter": 150
    },
    "Seat Map": {
      "Schedule": 100,
      "Charter": 150
    },
    "Station Management": {
      "Schedule": 200,
      "Charter": 235
    },
    "Cancel/Overflies in short notif.": {
      "Schedule": 0,
      "Charter": 0
    },
    "other": {
      "Schedule": null,
      "Charter": null
    },
    "Delay Above 60 minute up to 4 Hours": {
      "Schedule": 0.25,
      "Charter": 0.25
    },
    "Delay Above 4 Hours": {
      "Schedule": 0.35,
      "Charter": 0.35
    },
    "Delay Above 8 Hours": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "service between 22:00 to 06:00": {
      "Schedule": 0.25,
      "Charter": 0.25
    },
    "Ferry In": {
      "Schedule": 0.75,
      "Charter": 0.75
    },
    "ferry out": {
      "Schedule": 0.5,
      "Charter": 0.5
    }
  },
  "freebird": {
    "CUPPS Service": {
      "Schedule": 3.5,
      "Charter": 4
    },
    "DCS Service": {
      "Schedule": 4,
      "Charter": 4.5
},
    "Excess Baggage": {
      "Schedule": 7,
      "Charter": 7
    },
    "WHCHN": {
      "Schedule": 35,
      "Charter": 35
    },
    "VIP": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP system": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP assistance (MAAS)": {
      "Schedule": 1,
      "Charter": 1
    },
    "Travel Form": {
      "Schedule": 1,
      "Charter": 1
    },
    "Insurance": {
      "Schedule": 1,
      "Charter": 1
    },
    "Manual PNL": {
      "Schedule": 100,
      "Charter": 150
    },
    "Load sheet": {
      "Schedule": 100,
      "Charter": 150
    },
    "Flight creation": {
      "Schedule": 100,
      "Charter": 150
    },
    "Seat Map": {
      "Schedule": 100,
      "Charter": 150
    },
    "Station Management": {
      "Schedule": 200,
      "Charter": 235
    },
    "Cancel/Overflies in short notif.": {
      "Schedule": 0,
      "Charter": 0
    },
    "other": {
      "Schedule": null,
      "Charter": null
    },
    "Delay Above 60 minute up to 4 Hours": {
      "Schedule": 0.25,
      "Charter": 0.25
    },
    "Delay Above 4 Hours": {
      "Schedule": 0.35,
      "Charter": 0.35
    },
    "Delay Above 8 Hours": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "service between 22:00 to 06:00": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "Ferry In": {
      "Schedule": 0.75,
      "Charter": 0.75
    },
    "ferry out": {
      "Schedule": 0.5,
      "Charter": 0.5
    }
  },
  "Iran Tour": {
    "CUPPS Service": {
      "Schedule": 3.5,
      "Charter": 4
    },
    "DCS Service": {
      "Schedule": 4,
      "Charter": 4.5
},
    "Excess Baggage": {
      "Schedule": 7,
      "Charter": 7
    },
    "WHCHN": {
      "Schedule": 35,
      "Charter": 35
    },
    "VIP": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP system": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP assistance (MAAS)": {
      "Schedule": 1,
      "Charter": 1
    },
    "Travel Form": {
      "Schedule": 1,
      "Charter": 1
    },
    "Insurance": {
      "Schedule": 1,
      "Charter": 1
    },
    "Manual PNL": {
      "Schedule": 100,
      "Charter": 150
    },
    "Load sheet": {
      "Schedule": 100,
      "Charter": 150
    },
    "Flight creation": {
      "Schedule": 100,
      "Charter": 150
    },
    "Seat Map": {
      "Schedule": 100,
      "Charter": 150
    },
    "Station Management": {
      "Schedule": 200,
      "Charter": 235
    },
    "Cancel/Overflies in short notif.": {
      "Schedule": 0,
      "Charter": 0
    },
    "other": {
      "Schedule": null,
      "Charter": null
    },
    "Delay Above 60 minute up to 4 Hours": {
      "Schedule": 0.25,
      "Charter": 0.25
    },
    "Delay Above 4 Hours": {
      "Schedule": 0.35,
      "Charter": 0.35
    },
    "Delay Above 8 Hours": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "service between 22:00 to 06:00": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "Ferry In": {
      "Schedule": 0.75,
      "Charter": 0.75
    },
    "ferry out": {
      "Schedule": 0.5,
      "Charter": 0.5
    }
  },
  "Air Arabia-Abo Dhabi": {
    "CUPPS Service": {
      "Schedule": 3.5,
      "Charter": 4
    },
    "DCS Service": {
      "Schedule": 4,
      "Charter": 4.5
},
    "Excess Baggage": {
      "Schedule": 7,
      "Charter": 7
    },
    "WHCHN": {
      "Schedule": 35,
      "Charter": 35
    },
    "VIP": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP system": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP assistance (MAAS)": {
      "Schedule": 1,
      "Charter": 1
    },
    "Travel Form": {
      "Schedule": 1,
      "Charter": 1
    },
    "Insurance": {
      "Schedule": 1,
      "Charter": 1
    },
    "Manual PNL": {
      "Schedule": 100,
      "Charter": 150
    },
    "Load sheet": {
      "Schedule": 100,
      "Charter": 150
    },
    "Flight creation": {
      "Schedule": 100,
      "Charter": 150
    },
    "Seat Map": {
      "Schedule": 100,
      "Charter": 150
    },
    "Station Management": {
      "Schedule": 200,
      "Charter": 235
    },
    "Cancel/Overflies in short notif.": {
      "Schedule": 0,
      "Charter": 0
    },
    "other": {
      "Schedule": null,
      "Charter": null
    },
    "Delay Above 60 minute up to 4 Hours": {
      "Schedule": 0.25,
      "Charter": 0.25
    },
    "Delay Above 4 Hours": {
      "Schedule": 0.35,
      "Charter": 0.35
    },
    "Delay Above 8 Hours": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "service between 22:00 to 06:00": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "Ferry In": {
      "Schedule": 0.75,
      "Charter": 0.75
    },
    "ferry out": {
      "Schedule": 0.5,
      "Charter": 0.5
    }
  },
  "A Jet": {
    "CUPPS Service": {
      "Schedule": 3.5,
      "Charter": 4
    },
    "DCS Service": {
      "Schedule": 4,
      "Charter": 4.5
},
    "Excess Baggage": {
      "Schedule": 7,
      "Charter": 7
    },
    "WHCHN": {
      "Schedule": 35,
      "Charter": 35
    },
    "VIP": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP system": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP assistance (MAAS)": {
      "Schedule": 1,
      "Charter": 1
    },
    "Travel Form": {
      "Schedule": 1,
      "Charter": 1
    },
    "Insurance": {
      "Schedule": 1,
      "Charter": 1
    },
    "Manual PNL": {
      "Schedule": 100,
      "Charter": 150
    },
    "Load sheet": {
      "Schedule": 100,
      "Charter": 150
    },
    "Flight creation": {
      "Schedule": 100,
      "Charter": 150
    },
    "Seat Map": {
      "Schedule": 100,
      "Charter": 150
    },
    "Station Management": {
      "Schedule": 200,
      "Charter": 235
    },
    "Cancel/Overflies in short notif.": {
      "Schedule": 0,
      "Charter": 0
    },
    "other": {
      "Schedule": null,
      "Charter": null
    },
    "Delay Above 60 minute up to 4 Hours": {
      "Schedule": 0.25,
      "Charter": 0.25
    },
    "Delay Above 4 Hours": {
      "Schedule": 0.35,
      "Charter": 0.35
    },
    "Delay Above 8 Hours": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "service between 22:00 to 06:00": {
      "Schedule": 0.25,
      "Charter": 0.25
    },
    "Ferry In": {
      "Schedule": 0.75,
      "Charter": 0.75
    },
    "ferry out": {
      "Schedule": 0.5,
      "Charter": 0.5
    }
  },
  "Gulf Air": {
    "CUPPS Service": {
      "Schedule": 3.5,
      "Charter": 4
    },
    "DCS Service": {
      "Schedule": 4,
      "Charter": 4.5
},
    "Excess Baggage": {
      "Schedule": 7,
      "Charter": 7
    },
    "WHCHN": {
      "Schedule": 35,
      "Charter": 35
    },
    "VIP": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP system": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP assistance (MAAS)": {
      "Schedule": 1,
      "Charter": 1
    },
    "Travel Form": {
      "Schedule": 1,
      "Charter": 1
    },
    "Insurance": {
      "Schedule": 1,
      "Charter": 1
    },
    "Manual PNL": {
      "Schedule": 100,
      "Charter": 150
    },
    "Load sheet": {
      "Schedule": 100,
      "Charter": 150
    },
    "Flight creation": {
      "Schedule": 100,
      "Charter": 150
    },
    "Seat Map": {
      "Schedule": 100,
      "Charter": 150
    },
    "Station Management": {
      "Schedule": 200,
      "Charter": 235
    },
    "Cancel/Overflies in short notif.": {
      "Schedule": 0,
      "Charter": 0
    },
    "other": {
      "Schedule": null,
      "Charter": null
    },
    "Delay Above 60 minute up to 4 Hours": {
      "Schedule": 0.25,
      "Charter": 0.25
    },
    "Delay Above 4 Hours": {
      "Schedule": 0.35,
      "Charter": 0.35
    },
    "Delay Above 8 Hours": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "service between 22:00 to 06:00": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "Ferry In": {
      "Schedule": 0.75,
      "Charter": 0.75
    },
    "ferry out": {
      "Schedule": 0.5,
      "Charter": 0.5
    }
  },
  "Sama terminal": {
    "CUPPS Service": {
      "Schedule": 3.5,
      "Charter": 4
    },
    "DCS Service": {
      "Schedule": 4,
      "Charter": 4.5
},
    "Excess Baggage": {
      "Schedule": 7,
      "Charter": 7
    },
    "WHCHN": {
      "Schedule": 40.15,
      "Charter": 35
    },
    "VIP": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP system": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP assistance (MAAS)": {
      "Schedule": 1,
      "Charter": 1
    },
    "Travel Form": {
      "Schedule": 1,
      "Charter": 1
    },
    "Insurance": {
      "Schedule": 1,
      "Charter": 1
    },
    "Manual PNL": {
      "Schedule": 100,
      "Charter": 150
    },
    "Load sheet": {
      "Schedule": 100,
      "Charter": 150
    },
    "Flight creation": {
      "Schedule": 100,
      "Charter": 150
    },
    "Seat Map": {
      "Schedule": 100,
      "Charter": 150
    },
    "Station Management": {
      "Schedule": 200,
      "Charter": 235
    },
    "Cancel/Overflies in short notif.": {
      "Schedule": 0,
      "Charter": 0
    },
    "other": {
      "Schedule": null,
      "Charter": null
    },
    "Delay Above 60 minute up to 4 Hours": {
      "Schedule": 0.25,
      "Charter": 0.25
    },
    "Delay Above 4 Hours": {
      "Schedule": 0.35,
      "Charter": 0.35
    },
    "Delay Above 8 Hours": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "service between 22:00 to 06:00": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "Ferry In": {
      "Schedule": 0.75,
      "Charter": 0.75
    },
    "ferry out": {
      "Schedule": 0.5,
      "Charter": 0.5
    }
  },
  "Global": {
    "CUPPS Service": {
      "Schedule": 6000,
      "Charter": 6000
    },
    "DCS Service": {
      "Schedule": 6000,
      "Charter": 7000
},
    "Excess Baggage": {
      "Schedule": 7,
      "Charter": 7
    },
    "WHCHN": {
      "Schedule": 53000,
      "Charter": 53000
    },
    "VIP": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP system": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP assistance (MAAS)": {
      "Schedule": 1,
      "Charter": 1
    },
    "Travel Form": {
      "Schedule": 1,
      "Charter": 1
    },
    "Insurance": {
      "Schedule": 1,
      "Charter": 1
    },
    "Manual PNL": {
      "Schedule": 150000,
      "Charter": 150
    },
    "Load sheet": {
      "Schedule": 150000,
      "Charter": 150
    },
    "Flight creation": {
      "Schedule": 150000,
      "Charter": 150
    },
    "Seat Map": {
      "Schedule": 150000,
      "Charter": 150
    },
    "Station Management": {
      "Schedule": 300000,
      "Charter": 235
    },
    "Cancel/Overflies in short notif.": {
      "Schedule": 0,
      "Charter": 0
    },
    "other": {
      "Schedule": null,
      "Charter": null
    },
    "Delay Above 60 minute up to 4 Hours": {
      "Schedule": 0.25,
      "Charter": 20
    },
    "Delay Above 4 Hours": {
      "Schedule": 0.35,
      "Charter": 0.35
    },
    "Delay Above 8 Hours": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "service between 22:00 to 06:00": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "Ferry In": {
      "Schedule": 0.75,
      "Charter": 0.75
    },
    "ferry out": {
      "Schedule": 0.5,
      "Charter": 0.5
    }
  },
  "Simor": {
    "CUPPS Service": {
      "Schedule": 3.5,
      "Charter": 4
    },
    "DCS Service": {
      "Schedule": 4,
      "Charter": 4.5
},
    "Excess Baggage": {
      "Schedule": 7,
      "Charter": 7
    },
    "WHCHN": {
      "Schedule": 35,
      "Charter": 35
    },
    "VIP": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP system": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP assistance (MAAS)": {
      "Schedule": 1,
      "Charter": 1
    },
    "Travel Form": {
      "Schedule": 1,
      "Charter": 1
    },
    "Insurance": {
      "Schedule": 1,
      "Charter": 1
    },
    "Manual PNL": {
      "Schedule": 100,
      "Charter": 150
    },
    "Load sheet": {
      "Schedule": 100,
      "Charter": 150
    },
    "Flight creation": {
      "Schedule": 100,
      "Charter": 150
    },
    "Seat Map": {
      "Schedule": 100,
      "Charter": 150
    },
    "Station Management": {
      "Schedule": 200,
      "Charter": 235
    },
    "Cancel/Overflies in short notif.": {
      "Schedule": 0,
      "Charter": 0
    },
    "other": {
      "Schedule": null,
      "Charter": null
    },
    "Delay Above 60 minute up to 4 Hours": {
      "Schedule": 0.25,
      "Charter": 0.25
    },
    "Delay Above 4 Hours": {
      "Schedule": 0.35,
      "Charter": 0.35
    },
    "Delay Above 8 Hours": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "service between 22:00 to 06:00": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "Ferry In": {
      "Schedule": 0.75,
      "Charter": 0.75
    },
    "ferry out": {
      "Schedule": 0.5,
      "Charter": 0.5
    }
  },
  "AlRawdatain": {
    "CUPPS Service": {
      "Schedule": 3.5,
      "Charter": 4
    },
    "DCS Service": {
      "Schedule": 4,
      "Charter": 4.5
},
    "Excess Baggage": {
      "Schedule": 7,
      "Charter": 7
    },
    "WHCHN": {
      "Schedule": 35,
      "Charter": 35
    },
    "VIP": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP system": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP assistance (MAAS)": {
      "Schedule": 1,
      "Charter": 1
    },
    "Travel Form": {
      "Schedule": 1,
      "Charter": 1
    },
    "Insurance": {
      "Schedule": 1,
      "Charter": 1
    },
    "Manual PNL": {
      "Schedule": 100,
      "Charter": 150
    },
    "Load sheet": {
      "Schedule": 100,
      "Charter": 150
    },
    "Flight creation": {
      "Schedule": 100,
      "Charter": 150
    },
    "Seat Map": {
      "Schedule": 100,
      "Charter": 150
    },
    "Station Management": {
      "Schedule": 200,
      "Charter": 235
    },
    "Cancel/Overflies in short notif.": {
      "Schedule": 0,
      "Charter": 0
    },
    "other": {
      "Schedule": null,
      "Charter": null
    },
    "Delay Above 60 minute up to 4 Hours": {
      "Schedule": 0.25,
      "Charter": 0.25
    },
    "Delay Above 4 Hours": {
      "Schedule": 0.35,
      "Charter": 0.35
    },
    "Delay Above 8 Hours": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "service between 22:00 to 06:00": {
      "Schedule": 0.25,
      "Charter": 0.25
    },
    "Ferry In": {
      "Schedule": 0.75,
      "Charter": 0.75
    },
    "ferry out": {
      "Schedule": 0.5,
      "Charter": 0.5
    }
  },
  "AlMarbad Company": {
    "CUPPS Service": {
      "Schedule": 3.5,
      "Charter": 4
    },
    "DCS Service": {
      "Schedule": 4,
      "Charter": 4.5
},
    "Excess Baggage": {
      "Schedule": 7,
      "Charter": 7
    },
    "WHCHN": {
      "Schedule": 35,
      "Charter": 35
    },
    "VIP": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP system": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP assistance (MAAS)": {
      "Schedule": 1,
      "Charter": 1
    },
    "Travel Form": {
      "Schedule": 1,
      "Charter": 1
    },
    "Insurance": {
      "Schedule": 1,
      "Charter": 1
    },
    "Manual PNL": {
      "Schedule": 100,
      "Charter": 150
    },
    "Load sheet": {
      "Schedule": 100,
      "Charter": 150
    },
    "Flight creation": {
      "Schedule": 100,
      "Charter": 150
    },
    "Seat Map": {
      "Schedule": 100,
      "Charter": 150
    },
    "Station Management": {
      "Schedule": 200,
      "Charter": 235
    },
    "Cancel/Overflies in short notif.": {
      "Schedule": 0,
      "Charter": 0
    },
    "other": {
      "Schedule": null,
      "Charter": null
    },
    "Delay Above 60 minute up to 4 Hours": {
      "Schedule": 0.25,
      "Charter": 0.25
    },
    "Delay Above 4 Hours": {
      "Schedule": 0.35,
      "Charter": 0.35
    },
    "Delay Above 8 Hours": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "service between 22:00 to 06:00": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "Ferry In": {
      "Schedule": 0.75,
      "Charter": 0.75
    },
    "ferry out": {
      "Schedule": 0.5,
      "Charter": 0.5
    }
  },
  "ItlalaAlsharq-AN": {
    "CUPPS Service": {
      "Schedule": 3.5,
      "Charter": 4
    },
    "DCS Service": {
      "Schedule": 4,
      "Charter": 4.5
},
    "Excess Baggage": {
      "Schedule": 7,
      "Charter": 7
    },
    "WHCHN": {
      "Schedule": 35,
      "Charter": 35
    },
    "VIP": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP system": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP assistance (MAAS)": {
      "Schedule": 1,
      "Charter": 1
    },
    "Travel Form": {
      "Schedule": 1,
      "Charter": 1
    },
    "Insurance": {
      "Schedule": 1,
      "Charter": 1
    },
    "Manual PNL": {
      "Schedule": 100,
      "Charter": 150
    },
    "Load sheet": {
      "Schedule": 100,
      "Charter": 150
    },
    "Flight creation": {
      "Schedule": 100,
      "Charter": 150
    },
    "Seat Map": {
      "Schedule": 100,
      "Charter": 150
    },
    "Station Management": {
      "Schedule": 200,
      "Charter": 235
    },
    "Cancel/Overflies in short notif.": {
      "Schedule": 0,
      "Charter": 0
    },
    "other": {
      "Schedule": null,
      "Charter": null
    },
    "Delay Above 60 minute up to 4 Hours": {
      "Schedule": 0.25,
      "Charter": 0.25
    },
    "Delay Above 4 Hours": {
      "Schedule": 0.35,
      "Charter": 0.35
    },
    "Delay Above 8 Hours": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "service between 22:00 to 06:00": {
      "Schedule": 0.25,
      "Charter": 0.25
    },
    "Ferry In": {
      "Schedule": 0.75,
      "Charter": 0.75
    },
    "ferry out": {
      "Schedule": 0.5,
      "Charter": 0.5
    }
  },
  "ItlalaAlsharq-QM": {
    "CUPPS Service": {
      "Schedule": 3.5,
      "Charter": 4
    },
    "DCS Service": {
      "Schedule": 4,
      "Charter": 4.5
},
    "Excess Baggage": {
      "Schedule": 7,
      "Charter": 7
    },
    "WHCHN": {
      "Schedule": 35,
      "Charter": 35
    },
    "VIP": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP system": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP assistance (MAAS)": {
      "Schedule": 1,
      "Charter": 1
    },
    "Travel Form": {
      "Schedule": 1,
      "Charter": 1
    },
    "Insurance": {
      "Schedule": 1,
      "Charter": 1
    },
    "Manual PNL": {
      "Schedule": 100,
      "Charter": 150
    },
    "Load sheet": {
      "Schedule": 100,
      "Charter": 150
    },
    "Flight creation": {
      "Schedule": 100,
      "Charter": 150
    },
    "Seat Map": {
      "Schedule": 100,
      "Charter": 150
    },
    "Station Management": {
      "Schedule": 200,
      "Charter": 235
    },
    "Cancel/Overflies in short notif.": {
      "Schedule": 0,
      "Charter": 0
    },
    "other": {
      "Schedule": null,
      "Charter": null
    },
    "Delay Above 60 minute up to 4 Hours": {
      "Schedule": 0.25,
      "Charter": 0.25
    },
    "Delay Above 4 Hours": {
      "Schedule": 0.35,
      "Charter": 0.35
    },
    "Delay Above 8 Hours": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "service between 22:00 to 06:00": {
      "Schedule": 0.25,
      "Charter": 0.25
    },
    "Ferry In": {
      "Schedule": 0.75,
      "Charter": 0.75
    },
    "ferry out": {
      "Schedule": 0.5,
      "Charter": 0.5
    }
  },
  "ItlalaAlsharq-SR": {
    "CUPPS Service": {
      "Schedule": 3.5,
      "Charter": 4
    },
    "DCS Service": {
      "Schedule": 4,
      "Charter": 4.5
},
    "Excess Baggage": {
      "Schedule": 7,
      "Charter": 7
    },
    "WHCHN": {
      "Schedule": 35,
      "Charter": 35
    },
    "VIP": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP system": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP assistance (MAAS)": {
      "Schedule": 1,
      "Charter": 1
    },
    "Travel Form": {
      "Schedule": 1,
      "Charter": 1
    },
    "Insurance": {
      "Schedule": 1,
      "Charter": 1
    },
    "Manual PNL": {
      "Schedule": 100,
      "Charter": 150
    },
    "Load sheet": {
      "Schedule": 100,
      "Charter": 150
    },
    "Flight creation": {
      "Schedule": 100,
      "Charter": 150
    },
    "Seat Map": {
      "Schedule": 100,
      "Charter": 150
    },
    "Station Management": {
      "Schedule": 200,
      "Charter": 235
    },
    "Cancel/Overflies in short notif.": {
      "Schedule": 0,
      "Charter": 0
    },
    "other": {
      "Schedule": null,
      "Charter": null
    },
    "Delay Above 60 minute up to 4 Hours": {
      "Schedule": 0.25,
      "Charter": 0.25
    },
    "Delay Above 4 Hours": {
      "Schedule": 0.35,
      "Charter": 0.35
    },
    "Delay Above 8 Hours": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "service between 22:00 to 06:00": {
      "Schedule": 0.25,
      "Charter": 0.25
    },
    "Ferry In": {
      "Schedule": 0.75,
      "Charter": 0.75
    },
    "ferry out": {
      "Schedule": 0.5,
      "Charter": 0.5
    }
  },
  "Al Jazeera": {
    "CUPPS Service": {
      "Schedule": 3.5,
      "Charter": 4
    },
    "DCS Service": {
      "Schedule": 4,
      "Charter": 4.5
},
    "Excess Baggage": {
      "Schedule": 7,
      "Charter": 7
    },
    "WHCHN": {
      "Schedule": 35,
      "Charter": 35
    },
    "VIP": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP system": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP assistance (MAAS)": {
      "Schedule": 1,
      "Charter": 1
    },
    "Travel Form": {
      "Schedule": 1,
      "Charter": 1
    },
    "Insurance": {
      "Schedule": 1,
      "Charter": 1
    },
    "Manual PNL": {
      "Schedule": 100,
      "Charter": 150
    },
    "Load sheet": {
      "Schedule": 100,
      "Charter": 150
    },
    "Flight creation": {
      "Schedule": 100,
      "Charter": 150
    },
    "Seat Map": {
      "Schedule": 100,
      "Charter": 150
    },
    "Station Management": {
      "Schedule": 200,
      "Charter": 235
    },
    "Cancel/Overflies in short notif.": {
      "Schedule": 0,
      "Charter": 0
    },
    "other": {
      "Schedule": null,
      "Charter": null
    },
    "Delay Above 60 minute up to 4 Hours": {
      "Schedule": 0.3,
      "Charter": 0.3
    },
    "Delay Above 4 Hours": {
      "Schedule": 0.35,
      "Charter": 0.35
    },
    "Delay Above 8 Hours": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "service between 22:00 to 06:00": {
      "Schedule": 0.25,
      "Charter": 0.25
    },
    "Ferry In": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "ferry out": {
      "Schedule": 0.5,
      "Charter": 0.5
    }
  },
  "ItlalaAlsharq-SN": {
    "CUPPS Service": {
      "Schedule": 3.5,
      "Charter": 4
    },
    "DCS Service": {
      "Schedule": 4,
      "Charter": 4.5
},
    "Excess Baggage": {
      "Schedule": 7,
      "Charter": 7
    },
    "WHCHN": {
      "Schedule": 35,
      "Charter": 35
    },
    "VIP": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP system": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP assistance (MAAS)": {
      "Schedule": 1,
      "Charter": 1
    },
    "Travel Form": {
      "Schedule": 1,
      "Charter": 1
    },
    "Insurance": {
      "Schedule": 1,
      "Charter": 1
    },
    "Manual PNL": {
      "Schedule": 100,
      "Charter": 150
    },
    "Load sheet": {
      "Schedule": 100,
      "Charter": 150
    },
    "Flight creation": {
      "Schedule": 100,
      "Charter": 150
    },
    "Seat Map": {
      "Schedule": 100,
      "Charter": 150
    },
    "Station Management": {
      "Schedule": 200,
      "Charter": 235
    },
    "Cancel/Overflies in short notif.": {
      "Schedule": 0,
      "Charter": 0
    },
    "other": {
      "Schedule": null,
      "Charter": null
    },
    "Delay Above 60 minute up to 4 Hours": {
      "Schedule": 0.2,
      "Charter": 0.2
    },
    "Delay Above 4 Hours": {
      "Schedule": 0.35,
      "Charter": 0.35
    },
    "Delay Above 8 Hours": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "service between 22:00 to 06:00": {
      "Schedule": 0.25,
      "Charter": 0.25
    },
    "Ferry In": {
      "Schedule": 0.75,
      "Charter": 0.75
    },
    "ferry out": {
      "Schedule": 0.5,
      "Charter": 0.5
    }
  },
  "ItlalaAlsharq-MJ": {
    "CUPPS Service": {
      "Schedule": 3.5,
      "Charter": 4
    },
    "DCS Service": {
      "Schedule": 4,
      "Charter": 4.5
},
    "Excess Baggage": {
      "Schedule": 7,
      "Charter": 7
    },
    "WHCHN": {
      "Schedule": 35,
      "Charter": 35
    },
    "VIP": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP system": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP assistance (MAAS)": {
      "Schedule": 1,
      "Charter": 1
    },
    "Travel Form": {
      "Schedule": 1,
      "Charter": 1
    },
    "Insurance": {
      "Schedule": 1,
      "Charter": 1
    },
    "Manual PNL": {
      "Schedule": 100,
      "Charter": 150
    },
    "Load sheet": {
      "Schedule": 100,
      "Charter": 150
    },
    "Flight creation": {
      "Schedule": 100,
      "Charter": 150
    },
    "Seat Map": {
      "Schedule": 100,
      "Charter": 150
    },
    "Station Management": {
      "Schedule": 200,
      "Charter": 235
    },
    "Cancel/Overflies in short notif.": {
      "Schedule": 0,
      "Charter": 0
    },
    "other": {
      "Schedule": null,
      "Charter": null
    },
    "Delay Above 60 minute up to 4 Hours": {
      "Schedule": 0.25,
      "Charter": 0.25
    },
    "Delay Above 4 Hours": {
      "Schedule": 0.35,
      "Charter": 0.35
    },
    "Delay Above 8 Hours": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "service between 22:00 to 06:00": {
      "Schedule": 0.25,
      "Charter": 0.25
    },
    "Ferry In": {
      "Schedule": 0.75,
      "Charter": 0.75
    },
    "ferry out": {
      "Schedule": 0.5,
      "Charter": 0.5
    }
  },
  "AzerbaijanAirlines": {
    "CUPPS Service": {
      "Schedule": 3.5,
      "Charter": 4
    },
    "DCS Service": {
      "Schedule": 4,
      "Charter": 4.5
},
    "Excess Baggage": {
      "Schedule": 7,
      "Charter": 7
    },
    "WHCHN": {
      "Schedule": 35,
      "Charter": 35
    },
    "VIP": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP system": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP assistance (MAAS)": {
      "Schedule": 1,
      "Charter": 1
    },
    "Travel Form": {
      "Schedule": 1,
      "Charter": 1
    },
    "Insurance": {
      "Schedule": 1,
      "Charter": 1
    },
    "Manual PNL": {
      "Schedule": 100,
      "Charter": 150
    },
    "Load sheet": {
      "Schedule": 100,
      "Charter": 150
    },
    "Flight creation": {
      "Schedule": 100,
      "Charter": 150
    },
    "Seat Map": {
      "Schedule": 100,
      "Charter": 150
    },
    "Station Management": {
      "Schedule": 200,
      "Charter": 235
    },
    "Cancel/Overflies in short notif.": {
      "Schedule": 0,
      "Charter": 0
    },
    "other": {
      "Schedule": null,
      "Charter": null
    },
    "Delay Above 60 minute up to 4 Hours": {
      "Schedule": 0.25,
      "Charter": 0.25
    },
    "Delay Above 4 Hours": {
      "Schedule": 0.35,
      "Charter": 0.35
    },
    "Delay Above 8 Hours": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "service between 22:00 to 06:00": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "Ferry In": {
      "Schedule": 0.75,
      "Charter": 0.75
    },
    "ferry out": {
      "Schedule": 0.5,
      "Charter": 0.5
    }
  },
  "Akitu Aviation": {
    "CUPPS Service": {
      "Schedule": 3.5,
      "Charter": 4
    },
    "DCS Service": {
      "Schedule": 4,
      "Charter": 4.5
},
    "Excess Baggage": {
      "Schedule": 7,
      "Charter": 7
    },
    "WHCHN": {
      "Schedule": 35,
      "Charter": 35
    },
    "VIP": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP system": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP assistance (MAAS)": {
      "Schedule": 1,
      "Charter": 1
    },
    "Travel Form": {
      "Schedule": 1,
      "Charter": 1
    },
    "Insurance": {
      "Schedule": 1,
      "Charter": 1
    },
    "Manual PNL": {
      "Schedule": 100,
      "Charter": 150
    },
    "Load sheet": {
      "Schedule": 100,
      "Charter": 150
    },
    "Flight creation": {
      "Schedule": 100,
      "Charter": 150
    },
    "Seat Map": {
      "Schedule": 100,
      "Charter": 150
    },
    "Station Management": {
      "Schedule": 200,
      "Charter": 235
    },
    "Cancel/Overflies in short notif.": {
      "Schedule": 0,
      "Charter": 0
    },
    "other": {
      "Schedule": null,
      "Charter": null
    },
    "Delay Above 60 minute up to 4 Hours": {
      "Schedule": 0.25,
      "Charter": 0.25
    },
    "Delay Above 4 Hours": {
      "Schedule": 0.35,
      "Charter": 0.35
    },
    "Delay Above 8 Hours": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "service between 22:00 to 06:00": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "Ferry In": {
      "Schedule": 0.75,
      "Charter": 0.75
    },
    "ferry out": {
      "Schedule": 0.5,
      "Charter": 0.5
    }
  },
  "AlRawdatain-MJ": {
    "CUPPS Service": {
      "Schedule": 3.5,
      "Charter": 4
    },
    "DCS Service": {
      "Schedule": 4,
      "Charter": 4.5
},
    "Excess Baggage": {
      "Schedule": 7,
      "Charter": 7
    },
    "WHCHN": {
      "Schedule": 35,
      "Charter": 35
    },
    "VIP": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP system": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP assistance (MAAS)": {
      "Schedule": 1,
      "Charter": 1
    },
    "Travel Form": {
      "Schedule": 1,
      "Charter": 1
    },
    "Insurance": {
      "Schedule": 1,
      "Charter": 1
    },
    "Manual PNL": {
      "Schedule": 100,
      "Charter": 150
    },
    "Load sheet": {
      "Schedule": 100,
      "Charter": 150
    },
    "Flight creation": {
      "Schedule": 100,
      "Charter": 150
    },
    "Seat Map": {
      "Schedule": 100,
      "Charter": 150
    },
    "Station Management": {
      "Schedule": 200,
      "Charter": 235
    },
    "Cancel/Overflies in short notif.": {
      "Schedule": 0,
      "Charter": 0
    },
    "other": {
      "Schedule": null,
      "Charter": null
    },
    "Delay Above 60 minute up to 4 Hours": {
      "Schedule": 0.25,
      "Charter": 0.25
    },
    "Delay Above 4 Hours": {
      "Schedule": 0.35,
      "Charter": 0.35
    },
    "Delay Above 8 Hours": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "service between 22:00 to 06:00": {
      "Schedule": 0.25,
      "Charter": 0.25
    },
    "Ferry In": {
      "Schedule": 0.75,
      "Charter": 0.75
    },
    "ferry out": {
      "Schedule": 0.5,
      "Charter": 0.5
    }
  },
  "AlRawdatain-AVA": {
    "CUPPS Service": {
      "Schedule": 3.5,
      "Charter": 4
    },
    "DCS Service": {
      "Schedule": 4,
      "Charter": 4.5
},
    "Excess Baggage": {
      "Schedule": 7,
      "Charter": 7
    },
    "WHCHN": {
      "Schedule": 35,
      "Charter": 35
    },
    "VIP": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP system": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP assistance (MAAS)": {
      "Schedule": 1,
      "Charter": 1
    },
    "Travel Form": {
      "Schedule": 1,
      "Charter": 1
    },
    "Insurance": {
      "Schedule": 1,
      "Charter": 1
    },
    "Manual PNL": {
      "Schedule": 100,
      "Charter": 150
    },
    "Load sheet": {
      "Schedule": 100,
      "Charter": 150
    },
    "Flight creation": {
      "Schedule": 100,
      "Charter": 150
    },
    "Seat Map": {
      "Schedule": 100,
      "Charter": 150
    },
    "Station Management": {
      "Schedule": 200,
      "Charter": 235
    },
    "Cancel/Overflies in short notif.": {
      "Schedule": 0,
      "Charter": 0
    },
    "other": {
      "Schedule": null,
      "Charter": null
    },
    "Delay Above 60 minute up to 4 Hours": {
      "Schedule": 0.2,
      "Charter": 0.2
    },
    "Delay Above 4 Hours": {
      "Schedule": 0.35,
      "Charter": 0.35
    },
    "Delay Above 8 Hours": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "service between 22:00 to 06:00": {
      "Schedule": 0.25,
      "Charter": 0.25
    },
    "Ferry In": {
      "Schedule": 0.75,
      "Charter": 0.75
    },
    "ferry out": {
      "Schedule": 0.5,
      "Charter": 0.5
    }
  },
  "Oman Air": {
    "CUPPS Service": {
      "Schedule": 3.5,
      "Charter": 4
    },
    "DCS Service": {
      "Schedule": 4,
      "Charter": 4.5
},
    "Excess Baggage": {
      "Schedule": 7,
      "Charter": 7
    },
    "WHCHN": {
      "Schedule": 35,
      "Charter": 35
    },
    "VIP": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP system": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP assistance (MAAS)": {
      "Schedule": 1,
      "Charter": 1
    },
    "Travel Form": {
      "Schedule": 1,
      "Charter": 1
    },
    "Insurance": {
      "Schedule": 1,
      "Charter": 1
    },
    "Manual PNL": {
      "Schedule": 100,
      "Charter": 150
    },
    "Load sheet": {
      "Schedule": 100,
      "Charter": 150
    },
    "Flight creation": {
      "Schedule": 100,
      "Charter": 150
    },
    "Seat Map": {
      "Schedule": 100,
      "Charter": 150
    },
    "Station Management": {
      "Schedule": 200,
      "Charter": 235
    },
    "Cancel/Overflies in short notif.": {
      "Schedule": 0,
      "Charter": 0
    },
    "other": {
      "Schedule": null,
      "Charter": null
    },
    "Delay Above 60 minute up to 4 Hours": {
      "Schedule": 0.25,
      "Charter": 0.25
    },
    "Delay Above 4 Hours": {
      "Schedule": 0.35,
      "Charter": 0.35
    },
    "Delay Above 8 Hours": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "service between 22:00 to 06:00": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "Ferry In": {
      "Schedule": 0.75,
      "Charter": 0.75
    },
    "ferry out": {
      "Schedule": 0.5,
      "Charter": 0.5
    }
  },
  "AlRawdatain-VRS": {
    "CUPPS Service": {
      "Schedule": 3.5,
      "Charter": 4
    },
    "DCS Service": {
      "Schedule": 4,
      "Charter": 4.5
},
    "Excess Baggage": {
      "Schedule": 7,
      "Charter": 7
    },
    "WHCHN": {
      "Schedule": 35,
      "Charter": 35
    },
    "VIP": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP system": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP assistance (MAAS)": {
      "Schedule": 1,
      "Charter": 1
    },
    "Travel Form": {
      "Schedule": 1,
      "Charter": 1
    },
    "Insurance": {
      "Schedule": 1,
      "Charter": 1
    },
    "Manual PNL": {
      "Schedule": 100,
      "Charter": 150
    },
    "Load sheet": {
      "Schedule": 100,
      "Charter": 150
    },
    "Flight creation": {
      "Schedule": 100,
      "Charter": 150
    },
    "Seat Map": {
      "Schedule": 100,
      "Charter": 150
    },
    "Station Management": {
      "Schedule": 200,
      "Charter": 235
    },
    "Cancel/Overflies in short notif.": {
      "Schedule": 0,
      "Charter": 0
    },
    "other": {
      "Schedule": null,
      "Charter": null
    },
    "Delay Above 60 minute up to 4 Hours": {
      "Schedule": 0.2,
      "Charter": 0.2
    },
    "Delay Above 4 Hours": {
      "Schedule": 0.35,
      "Charter": 0.35
    },
    "Delay Above 8 Hours": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "service between 22:00 to 06:00": {
      "Schedule": 0.25,
      "Charter": 0.25
    },
    "Ferry In": {
      "Schedule": 0.75,
      "Charter": 0.75
    },
    "ferry out": {
      "Schedule": 0.5,
      "Charter": 0.5
    }
  },
  "ItlalaAlsharq-Kich": {
    "CUPPS Service": {
      "Schedule": 3.5,
      "Charter": 4
    },
    "DCS Service": {
      "Schedule": 4,
      "Charter": 4.5
},
    "Excess Baggage": {
      "Schedule": 7,
      "Charter": 7
    },
    "WHCHN": {
      "Schedule": 35,
      "Charter": 35
    },
    "VIP": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP system": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP assistance (MAAS)": {
      "Schedule": 1,
      "Charter": 1
    },
    "Travel Form": {
      "Schedule": 1,
      "Charter": 1
    },
    "Insurance": {
      "Schedule": 1,
      "Charter": 1
    },
    "Manual PNL": {
      "Schedule": 100,
      "Charter": 150
    },
    "Load sheet": {
      "Schedule": 100,
      "Charter": 150
    },
    "Flight creation": {
      "Schedule": 100,
      "Charter": 150
    },
    "Seat Map": {
      "Schedule": 100,
      "Charter": 150
    },
    "Station Management": {
      "Schedule": 200,
      "Charter": 235
    },
    "Cancel/Overflies in short notif.": {
      "Schedule": 0,
      "Charter": 0
    },
    "other": {
      "Schedule": null,
      "Charter": null
    },
    "Delay Above 60 minute up to 4 Hours": {
      "Schedule": 0.25,
      "Charter": 0.25
    },
    "Delay Above 4 Hours": {
      "Schedule": 0.35,
      "Charter": 0.35
    },
    "Delay Above 8 Hours": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "service between 22:00 to 06:00": {
      "Schedule": 0.25,
      "Charter": 0.25
    },
    "Ferry In": {
      "Schedule": 0.75,
      "Charter": 0.75
    },
    "ferry out": {
      "Schedule": 0.5,
      "Charter": 0.5
    }
  },
  "Sama Najaf-TBN": {
    "CUPPS Service": {
      "Schedule": 3.5,
      "Charter": 4
    },
    "DCS Service": {
      "Schedule": 4,
      "Charter": 4.5
},
    "Excess Baggage": {
      "Schedule": 7,
      "Charter": 7
    },
    "WHCHN": {
      "Schedule": 35,
      "Charter": 35
    },
    "VIP": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP system": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP assistance (MAAS)": {
      "Schedule": 1,
      "Charter": 1
    },
    "Travel Form": {
      "Schedule": 1,
      "Charter": 1
    },
    "Insurance": {
      "Schedule": 1,
      "Charter": 1
    },
    "Manual PNL": {
      "Schedule": 100,
      "Charter": 150
    },
    "Load sheet": {
      "Schedule": 100,
      "Charter": 150
    },
    "Flight creation": {
      "Schedule": 100,
      "Charter": 150
    },
    "Seat Map": {
      "Schedule": 100,
      "Charter": 150
    },
    "Station Management": {
      "Schedule": 200,
      "Charter": 235
    },
    "Cancel/Overflies in short notif.": {
      "Schedule": 0,
      "Charter": 0
    },
    "other": {
      "Schedule": null,
      "Charter": null
    },
    "Delay Above 60 minute up to 4 Hours": {
      "Schedule": 0.25,
      "Charter": 0.25
    },
    "Delay Above 4 Hours": {
      "Schedule": 0.35,
      "Charter": 0.35
    },
    "Delay Above 8 Hours": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "service between 22:00 to 06:00": {
      "Schedule": 0.25,
      "Charter": 0.25
    },
    "Ferry In": {
      "Schedule": 0.75,
      "Charter": 0.75
    },
    "ferry out": {
      "Schedule": 0.5,
      "Charter": 0.5
    }
  },
  "Aegean Air": {
    "CUPPS Service": {
      "Schedule": 3.5,
      "Charter": 4
    },
    "DCS Service": {
      "Schedule": 4,
      "Charter": 4.5
},
    "Excess Baggage": {
      "Schedule": 7,
      "Charter": 7
    },
    "WHCHN": {
      "Schedule": 35,
      "Charter": 35
    },
    "VIP": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP system": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP assistance (MAAS)": {
      "Schedule": 1,
      "Charter": 1
    },
    "Travel Form": {
      "Schedule": 1,
      "Charter": 1
    },
    "Insurance": {
      "Schedule": 1,
      "Charter": 1
    },
    "Manual PNL": {
      "Schedule": 100,
      "Charter": 150
    },
    "Load sheet": {
      "Schedule": 100,
      "Charter": 150
    },
    "Flight creation": {
      "Schedule": 100,
      "Charter": 150
    },
    "Seat Map": {
      "Schedule": 100,
      "Charter": 150
    },
    "Station Management": {
      "Schedule": 200,
      "Charter": 235
    },
    "Cancel/Overflies in short notif.": {
      "Schedule": 0,
      "Charter": 0
    },
    "other": {
      "Schedule": null,
      "Charter": null
    },
    "Delay Above 60 minute up to 4 Hours": {
      "Schedule": 0.25,
      "Charter": 0.25
    },
    "Delay Above 4 Hours": {
      "Schedule": 0.35,
      "Charter": 0.35
    },
    "Delay Above 8 Hours": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "service between 22:00 to 06:00": {
      "Schedule": 0.35,
      "Charter": 0.35
    },
    "Ferry In": {
      "Schedule": 0.6,
      "Charter": 0.6
    },
    "ferry out": {
      "Schedule": 0.5,
      "Charter": 0.5
    }
  },
  "Arab Wings": {
    "CUPPS Service": {
      "Schedule": 3.5,
      "Charter": 4
    },
    "DCS Service": {
      "Schedule": 4,
      "Charter": 4.5
},
    "Excess Baggage": {
      "Schedule": 7,
      "Charter": 7
    },
    "WHCHN": {
      "Schedule": 35,
      "Charter": 35
    },
    "VIP": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP system": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP assistance (MAAS)": {
      "Schedule": 1,
      "Charter": 1
    },
    "Travel Form": {
      "Schedule": 1,
      "Charter": 1
    },
    "Insurance": {
      "Schedule": 1,
      "Charter": 1
    },
    "Manual PNL": {
      "Schedule": 100,
      "Charter": 150
    },
    "Load sheet": {
      "Schedule": 100,
      "Charter": 150
    },
    "Flight creation": {
      "Schedule": 100,
      "Charter": 150
    },
    "Seat Map": {
      "Schedule": 100,
      "Charter": 150
    },
    "Station Management": {
      "Schedule": 200,
      "Charter": 235
    },
    "Cancel/Overflies in short notif.": {
      "Schedule": 0,
      "Charter": 0
    },
    "other": {
      "Schedule": null,
      "Charter": null
    },
    "Delay Above 60 minute up to 4 Hours": {
      "Schedule": 0.25,
      "Charter": 0.25
    },
    "Delay Above 4 Hours": {
      "Schedule": 0.35,
      "Charter": 0.35
    },
    "Delay Above 8 Hours": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "service between 22:00 to 06:00": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "Ferry In": {
      "Schedule": 0.75,
      "Charter": 0.75
    },
    "ferry out": {
      "Schedule": 0.5,
      "Charter": 0.5
    }
  },
  "Spice Jet": {
    "CUPPS Service": {
      "Schedule": 3.5,
      "Charter": 4
    },
    "DCS Service": {
      "Schedule": 4,
      "Charter": 4.5
},
    "Excess Baggage": {
      "Schedule": 7,
      "Charter": 7
    },
    "WHCHN": {
      "Schedule": 35,
      "Charter": 35
    },
    "VIP": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP system": {
      "Schedule": 1,
      "Charter": 1
    },
    "VIP assistance (MAAS)": {
      "Schedule": 1,
      "Charter": 1
    },
    "Travel Form": {
      "Schedule": 1,
      "Charter": 1
    },
    "Insurance": {
      "Schedule": 1,
      "Charter": 1
    },
    "Manual PNL": {
      "Schedule": 100,
      "Charter": 150
    },
    "Load sheet": {
      "Schedule": 100,
      "Charter": 150
    },
    "Flight creation": {
      "Schedule": 100,
      "Charter": 150
    },
    "Seat Map": {
      "Schedule": 100,
      "Charter": 150
    },
    "Station Management": {
      "Schedule": 200,
      "Charter": 235
    },
    "Cancel/Overflies in short notif.": {
      "Schedule": 1,
      "Charter": 1
    },
    "other": {
      "Schedule": 1,
      "Charter": 1,
    },
    "Delay Above 60 minute up to 4 Hours": {
      "Schedule": 0.25,
      "Charter": 0.25
    },
    "Delay Above 4 Hours": {
      "Schedule": 0.35,
      "Charter": 0.35
    },
    "Delay Above 8 Hours": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "service between 22:00 to 06:00": {
      "Schedule": 0.5,
      "Charter": 0.5
    },
    "Ferry In": {
      "Schedule": 0.75,
      "Charter": 0.75
        },
    "ferry out": {
      "Schedule": 0.5,
      "Charter": 0.5
    }
  }
};

// Optional helper:
// use getServicePrice("UR", "VIP", "Schedule")
// use getBasicHandlingPrice("UR", "MTOW up to 25,000 kgs", "Charter")
// use getBRSNBPrice("UR", "MTOW up to 25,000 kgs", "Schedule")
// use getBRSWBPrice("UR", "MTOW – From 100,001 to 200,000 kgs", "Charter")

function getServicePrice(airline, service, flightType) {
  return serviceTables?.[airline]?.[service]?.[flightType] ?? null;
}

function getBasicHandlingPrice(airline, mtowBucket, flightType) {
  return basicHandlingTable?.[airline]?.[mtowBucket]?.[flightType] ?? null;
}

function getBRSNBPrice(airline, mtowBucket, flightType) {
  return brsNBTable?.[airline]?.[mtowBucket]?.[flightType] ?? null;
}

function getBRSWBPrice(airline, mtowBucket, flightType) {
  return brsWBTable?.[airline]?.[mtowBucket]?.[flightType] ?? null;
}
