const app = {
  main: ''
}

const home = {
  box: '',
  logo: 'fixed z-10 w-1/2 right-1/4 top-7',
  circles: 'fixed z-0 w-content -top-40',
  chart: 'absolute w-1/3 top-1/4'
};

const formPage = {
  blue: 'w-1/5 h-screen right-0 bg-custom-dark absolute z-0',
  info: 'p-3',
  countdown: 'p-3',
  form: 'w-7/12 bg-white rounded-xl shadow-2xl'
};

const info = {
  heading: 'font-kuhbm text-5xl text-custom-grey-dk font-bold',
  blurb: 'font-kuhbm text-custom-grey-dk text-sm py-3 w-10/12 leading-6 tracking-wide',
};

const signup = {
  form: 'py-3 px-4 flex flex-col justify-center content-center',
  input: 'p-2 font-kuhbm text-sm w-full',
  select: 'p-2 font-kuhbm text-sm w-full text-gray-400',
  option: 'font-kuhbm',
  button: 'font-kuhbm m-3 py-2 w-11/12 rounded-2xl text-sm text-white bg-custom-blue-dk'
};

const countdown = {
  time: 'p-1 bg-custom-blue-lt bg-opacity-40 rounded-lg text-custom-blue-dk text-5xl font-bold text-center w-20 py-3 px-2 mx-1.5',
  span: 'text-sm text-custom-grey font-normal'
};

export {
  app, 
  home,
  formPage,
  info,
  signup,
  countdown
}