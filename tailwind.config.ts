export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ,],
  prefix: "",
  theme: {
    screens: {
      ss: '320px',
      sm: '375px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
      xx: '2560px',
    },
    colors: {
      'white': '#ffffff',
      'blue': '#1b3664',
      'blue-two': '#5C87BA',
      'blue-deep': '#252A40',
      'blue-deeper': '#1E2237',
      'blue-faint': '#EFF6FC',
      'red': '#cf0d0d',
      'light-blue': '#001266',
      'fade-blue': '#074A8C80',
      'dark': '#000000',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#70bf4c',
      'leaf-green': '#8F8A03',
      'green-light': '#E8FFDD',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#f0f0f0',
      'gray-lighter': '#f8f8f8',
      'gray-deep': '#EBF2FF',
      'gray-disabled': '#C1C1C1',
      'ash': '#d9d9d9',
      'sky-blue': '#009BD6',
      'dark-midnight-blue': '#00d95f',
      'ash-deep': '#c4c4c4',
      'brown-dark': '#343434',
    },
    fontFamily: {
      'sans': ['Poppins', 'ui-sans-serif'],
      'serif': ['Poppins', 'ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular',],
      'display': ['Oswald',],
      'body': ['"Open Sans"',],
    },
    fontSize: {
      xs: '0.5rem',
      x: '0.65rem',
      xxs: '0.7rem',
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
      '6xl': '3.501rem',
    },
    spacing: {
      '0.1': '1px',
      '0.2': '2px',
      '0.3': '3px',
      '0.5': '4px',
      '0.6': '6px',
      '1': '8px',
      '1.2': '9px',
      '1.5': '10px',
      '1.7': '11px',
      '1.8': '11.5px',
      '2': '12px',
      '2.5': '13px',
      '3': '14px',
      '3.3': '14.5px',
      '3.5': '15px',
      '4': '16px',
      '4.4': '17px',
      '4.5': '18px',
      '4.51': '20px',
      '4.6': '22px',
      '4.7': '23px',
      '5': '24px',
      '5.1': '26px',
      '5.2': '28px',
      '5.3': '30px',
      '5.4': '31px',
      '6': '32px',
      '6.1': '34px',
      '6.2': '36px',
      '6.25': '38px',
      '6.3': '40px',
      '6.5': '43px',
      '6.6': '45px',
      '7': '48px',
      '7.2': '50px',
      '7.5': '53px',
      '7.6': '56px',
      '7.7': '58px',
      '8': '60px',
      '8.1': '62px',
      '8.5': '65px',
      '8.6': '67px',
      '9': '70px',
      '9.5': '75px',
      '9.6': '77px',
      '9.7': '79px',
      '10': '80px',
      '10.2': '82px',
      '10.5': '90px',
      '10.6': '95px',
      '10.7': '98px',
      '11': '100px',
      '11.5': '105px',
      '11.6': '110px',
      '11.7': '112px',
      '12': '120px',
      '12.2': '123px',
      '12.5': '130px',
      '12.6': '135px',
      '12.7': '137px',
      '13': '140px',
      '13.5': '145px',
      '14': '150px',
      '14.5': '155px',
      '15': '160px',
      '15.1': '167px',
      '15.2': '169px',
      '15.3': '172px',
      '15.5': '175px',
      '15.6': '180px',
      '15.8': '183px',
      '15.9': '184px',
      '15.7': '188px',
      '16': '195px',
      '16.2': '202px',
      '16.3': '206px',
      '16.5': '208px',
      '16.6': '215px',
      '17': '220px',
      '17.5': '225px',
      '17.6': '230px',
      '17.60': '233px',
      '17.7': '235px',
      '17.8': '238px',
      '18': '240px',
      '18.5': '235px',
      '19': '240px',
      '19.1': '250px',
      '19.2': '260px',
      '19.25': '265px',
      '19.26': '268px',
      '19.27': '270px',
      '19.28': '273px',
      '19.29': '276px',
      '19.30': '280px',
      '19.3': '283px',
      '19.4': '288px',
      '19.5': '290px',
      '19.51': '295px',
      '19.6': '300px',
      '19.7': '305px',
      '19.8': '308px',
      '19.9': '313px',
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#003366", // Dark blue
          light: "#4D88CC", // Light blue (soft variation)
          dark: "#001A33", // Darker blue (deep shade)
        },
        secondary: {
          DEFAULT: "#A7F432", // Bright lemon green
          light: "#C4FF66", // Lighter lemon green
          dark: "#85C327", // Darker lemon green
        },
      },
      spacing: {
        '20': '20rem',
        '20.3': '20.3rem',
        '20.4': '20.4rem',
        '20.41': '20.5rem',
        '20.5': '20.6rem',
        '20.8': '20.8rem',
        '21': '21rem',
        '21.2': '21.2rem',
        '21.5': '21.5rem',
        '21.6': '21.6rem',
        '21.7': '21.7rem',
        '21.8': '21.8rem',
        '21.9': '21.9rem',
        '22': '22rem',
        '22.2': '22.2rem',
        '22.5': '22.5rem',
        '22.7': '22.7rem',
        '22.9': '22.9rem',
        '23': '23rem',
        '23.1': '23.1rem',
        '23.2': '23.2rem',
        '23.5': '23.5rem',
        "24": '24rem',
        "24.2": '24.2rem',
        "24.5": '24.5rem',
        '25': '25rem',
        '25.1': '25.1rem',
        '25.2': '25.2rem',
        '25.3': '25.3rem',
        '25.5': '25.5rem',
        '25.7': '25.7rem',
        '26': '26rem',
        '26.5': '26.5rem',
        '27': '27rem',
        '27.1': '27.1rem',
        '27.2': '27.2rem',
        '27.3': '27.3rem',
        '27.5': '27.5rem',
        '27.6': '27.6rem',
        '27.7': '27.7rem',
        '27.9': '27.9rem',
        '28': '28rem',
        '28.2': '28.2rem',
        '28.3': '28.3rem',
        '28.4': '28.4rem',
        '28.5': '28.5rem',
        '28.7': '28.7rem',
        '29': '29rem',
        '29.5': '29.5rem',
        '29.7': '29.7rem',
        '29.8': '29.8rem',
        '29.9': '29.9rem',
        '30': '30rem',
        '30.2': '30.2rem',
        '30.3': '30.3rem',
        '30.4': '30.4rem',
        '30.5': '30.5rem',
        '30.6': '30.6rem',
        '30.7': '30.7rem',
        '31': '31rem',
        '31.2': '31.2rem',
        '31.5': '31.5rem',
        '32': '32rem',
        '32.5': '32.5rem',
        '32.7': '32.7rem',
        '33': '33rem',
        '33.5': '33.5rem',
        '34': '34rem',
        '34.3': '34.3rem',
        '34.5': '34.5rem',
        '35': '35rem',
        '35.2': '35.2rem',
        '35.5': '35.5rem',
        '35.7': '35.7rem',
        '36': '36rem',
        '36.5': '36.5rem',
        '36.6': '36.6rem',
        '36.7': '36.7rem',
        '36.8': '36.8rem',
        '36.9': '36.9rem',
        '37': '37rem',
        '37.1': '37.1rem',
        '37.2': '37.2rem',
        '37.3': '37.3rem',
        '37.4': '37.4rem',
        '37.5': '37.5rem',
        '37.6': '37.6rem',
        '38': '38rem',
        '38.5': '38.5rem',
        '39': '39rem',
        '39.5': '39.5rem',
        '40': '40rem',
        '40.9': '40.9rem',
        '41': '41rem',
        '41.2': '41.2rem',
        '41.5': '41.5rem',
        '42': '42rem',
        '43': '43rem',
        '44': '44rem',
        '44.2': '44.2rem',
        '45': '45rem',
        '45.5': '45.5rem',
        '45.6': '45.6rem',
        '45.7': '45.7rem',
        '45.9': '45.9rem',
        '46': '46rem',
        '47': '47rem',
        '47.4': '47.4rem',
        '47.5': '47.5rem',
        '47.6': '47.6rem',
        '48': '48rem',
        '49': '49rem',
        '49.5': '49.5rem',
        '50': '50rem',
        '50.5': '50.5rem',
        '51': '51rem',
        '51.5': '51.5rem',
        '51.8': '51.8rem',
        '52': '52rem',
        '53': '53rem',
        '53.5': '53.5rem',
        '53.6': '53.6rem',
        '53.7': '53.7rem',
        '54': '54rem',
        '54.5': '54.5rem',
        '55': '55rem',
        '55.2': '55.2rem',
        '55.5': '55.5rem',
        '55.7': '55.7rem',
        '55.8': '55.8rem',
        '55.9': '55.9rem',
        '56': '56rem',
        '57': '56.5rem',
        '57.5': '57rem',
        '57.53': '57.3rem',
        '57.6': '57.6rem',
        '58': '58rem',
        '58.5': '58.5rem',
        '59': '59rem',
        '59.2': '59.2rem',
        '59.4': '59.4rem',
        '59.5': '59.5rem',
        '59.6': '59.6rem',
        '60': '60rem',
        '60.2': '60.2rem',
        '60.5': '60.5rem',
        '61': '61rem',
        '61.5': '61.5rem',
        '62': '62rem',
        '62.5': '62.5rem',
        '63': '63rem',
        '63.2': '63.2rem',
        '63.3': '63.3rem',
        '63.5': '63.5rem',
        '64': '64rem',
        '65': '65rem',
        '66': '66rem',
        '67': '67rem',
        '67.5': '67.3rem',
        '68': '68rem',
        '68.5': '68.5rem',
        '69': '69rem',
        '70': '70rem',
        '71': '71rem',
        '72': '72rem',
        '74': '74rem',
        '75': '75rem',
        '75.5': '75.5rem',
        '76': '76rem',
        '76.5': '76.5rem',
        '78': '78rem',
        '79': '79rem',
        '80': '80rem',
        '80.5': '80.5rem',
        '81': '81rem',
        '82': '82rem',
        '83.5': '83rem',
        '83': '84rem',
        '83.6': '86.6rem',
        '84': '87rem',
        '88': '88rem',
        '90': '90rem',
        '95': '95rem',
        '96': '96rem',
        '97': '97rem',
        '98': '98rem',
        '100': '100rem',
        '103': '103rem',
        '104': '104rem',
        '105': '105rem',
        '107': '107rem',
        '108': '108rem',
        '109': '109rem',
        '110': '110rem',
        '115': '115rem',
        '120': '120rem',
        '121': '121rem',
        '122': '122rem',
        '123': '123rem',
        '124': '124rem',
        '126': '126rem',
        '128': '128rem',
        '129': '129rem',
        '130': '130rem',
        '131': '131rem',
        '132': '132rem',
        '135': '135rem',
        '138': '138rem',
        '140': '140rem',
        '141': '141rem',
        '142': '142rem',
        '144': '144rem',
        '158': '158rem',
        '170': '170rem',
        '180': '180rem',
        '182': '182rem',
        '184': '184rem',
        '185': '185rem',
        '186': '186rem',
        '190': '190rem',
        '192': '192rem',
        '195': '195rem',
        '196': '196rem',
        '198': '198rem',
        '199': '199rem',
        '200': '200rem',
        '201': '201rem',
        '202': '202rem',
        '205': '205rem',
        '207': '207rem',
        '214': '214rem',
        '220': '220rem',
        '225': '225rem',
        '227': '227rem',
        '230': '230rem',
        '231': '231rem',
        '233': '233rem',
        '235': '235rem',
        '240': '240rem',
        '242': '242rem',
        '245': '245rem',
        '314': '314rem',
        '324': '324rem',
        '334': '334rem',
        '344': '344rem',
        '354': '354rem',
        '356': '356rem',
        '358': '358rem',
        '380': '380rem',
        '390': '390rem',
        '395': '395rem',
        '400': '400rem',
        '414': '414rem',
      }
    },
  },
  plugins: [],
}
