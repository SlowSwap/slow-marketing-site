import React, { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { ScaleIcon, CashIcon, ClockIcon } from '@heroicons/react/outline'
import tw from 'twin.macro'
import { Helmet } from "react-helmet"
import {
  helmetProps,
  structuredData,
  youtubeUrl,
  twitterUrl,
  discordUrl,
  telegramUrl,
  githubUrl,
  hackerlinkUrl,
  appUrl
} from '../helmetProps'
import '../styles/index.css'
import { disconnect } from 'process'

const navigation = [
  { name: 'Vote for us', href: hackerlinkUrl },  // update thisTODO
  // { name: 'How it works', href: '#how-it-works' },
  // { nam: 'Github',  href: ""},
  // { name: 'News', href: '#' },
]
const faqs = [
  {
    id: 1,
    question: 'What\'s a VDF?',
    answer:
      'A Varifiable Delayed Function. You do some calculations that are included with your transaction, and the AMM has to do the same calculation.',
  },
  {
    id: 2,
    question: "What's the downside?",
    answer:
      "It costs more gas, and wont work with sawp-aggregators.",
  },
]
const footerNavigation = {
  social: [
    {
      name: 'Twitter',
      href: twitterUrl,
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: 'GitHub',
      href: githubUrl,
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Telegram',
      href: telegramUrl,
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>

          <path
            fillRule="evenodd"
            d="M22.05 1.577c-.393-.016-.784.08-1.117.235-.484.186-4.92 1.902-9.41 3.64-2.26.873-4.518 1.746-6.256 2.415-1.737.67-3.045 1.168-3.114 1.192-.46.16-1.082.362-1.61.984-.133.155-.267.354-.335.628s-.038.622.095.895c.265.547.714.773 1.244.976 1.76.564 3.58 1.102 5.087 1.608.556 1.96 1.09 3.927 1.618 5.89.174.394.553.54.944.544l-.002.02s.307.03.606-.042c.3-.07.677-.244 1.02-.565.377-.354 1.4-1.36 1.98-1.928l4.37 3.226.035.02s.484.34 1.192.388c.354.024.82-.044 1.22-.337.403-.294.67-.767.795-1.307.374-1.63 2.853-13.427 3.276-15.38l-.012.046c.296-1.1.187-2.108-.496-2.705-.342-.297-.736-.427-1.13-.444zm-.118 1.874c.027.025.025.025.002.027-.007-.002.08.118-.09.755l-.007.024-.005.022c-.432 1.997-2.936 13.9-3.27 15.356-.046.196-.065.182-.054.17-.1-.015-.285-.094-.3-.1l-7.48-5.525c2.562-2.467 5.182-4.7 7.827-7.08.468-.235.39-.96-.17-.972-.594.14-1.095.567-1.64.84-3.132 1.858-6.332 3.492-9.43 5.406-1.59-.553-3.177-1.012-4.643-1.467 1.272-.51 2.283-.886 3.278-1.27 1.738-.67 3.996-1.54 6.256-2.415 4.522-1.748 9.07-3.51 9.465-3.662l.032-.013.03-.013c.11-.05.173-.055.202-.057 0 0-.01-.033-.002-.026zM10.02 16.016l1.234.912c-.532.52-1.035 1.01-1.398 1.36z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Discord',
      href: discordUrl,
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 71 55" {...props}>
          <path
            fillRule="evenodd"
            d="M60.1045 4.8978C55.5792 2.8214 50.7265 1.2916 45.6527 0.41542C45.5603 0.39851 45.468 0.440769 45.4204 0.525289C44.7963 1.6353 44.105 3.0834 43.6209 4.2216C38.1637 3.4046 32.7345 3.4046 27.3892 4.2216C26.905 3.0581 26.1886 1.6353 25.5617 0.525289C25.5141 0.443589 25.4218 0.40133 25.3294 0.41542C20.2584 1.2888 15.4057 2.8186 10.8776 4.8978C10.8384 4.9147 10.8048 4.9429 10.7825 4.9795C1.57795 18.7309 -0.943561 32.1443 0.293408 45.3914C0.299005 45.4562 0.335386 45.5182 0.385761 45.5576C6.45866 50.0174 12.3413 52.7249 18.1147 54.5195C18.2071 54.5477 18.305 54.5139 18.3638 54.4378C19.7295 52.5728 20.9469 50.6063 21.9907 48.5383C22.0523 48.4172 21.9935 48.2735 21.8676 48.2256C19.9366 47.4931 18.0979 46.6 16.3292 45.5858C16.1893 45.5041 16.1781 45.304 16.3068 45.2082C16.679 44.9293 17.0513 44.6391 17.4067 44.3461C17.471 44.2926 17.5606 44.2813 17.6362 44.3151C29.2558 49.6202 41.8354 49.6202 53.3179 44.3151C53.3935 44.2785 53.4831 44.2898 53.5502 44.3433C53.9057 44.6363 54.2779 44.9293 54.6529 45.2082C54.7816 45.304 54.7732 45.5041 54.6333 45.5858C52.8646 46.6197 51.0259 47.4931 49.0921 48.2228C48.9662 48.2707 48.9102 48.4172 48.9718 48.5383C50.038 50.6034 51.2554 52.5699 52.5959 54.435C52.6519 54.5139 52.7526 54.5477 52.845 54.5195C58.6464 52.7249 64.529 50.0174 70.6019 45.5576C70.6551 45.5182 70.6887 45.459 70.6943 45.3942C72.1747 30.0791 68.2147 16.7757 60.1968 4.9823C60.1772 4.9429 60.1437 4.9147 60.1045 4.8978ZM23.7259 37.3253C20.2276 37.3253 17.3451 34.1136 17.3451 30.1693C17.3451 26.225 20.1717 23.0133 23.7259 23.0133C27.308 23.0133 30.1626 26.2532 30.1066 30.1693C30.1066 34.1136 27.28 37.3253 23.7259 37.3253ZM47.3178 37.3253C43.8196 37.3253 40.9371 34.1136 40.9371 30.1693C40.9371 26.225 43.7636 23.0133 47.3178 23.0133C50.9 23.0133 53.7545 26.2532 53.6986 30.1693C53.6986 34.1136 50.9 37.3253 47.3178 37.3253Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },

  ],
}
const metrics = [
  { id: 1, stat: 'Better Execution', emphasis: 'Pay more gas', rest: 'to get less slippage.' },
  { id: 2, stat: 'Earn more', emphasis: 'LPs earn more', rest: 'than AMMs gamed by MEV' },
  { id: 3, stat: '30 second wait', emphasis: 'VDF generation', rest: 'takes roughly 30 seconds' },
  { id: 4, stat: 'Based on Uniswap v2', emphasis: 'At worst,', rest: "you'll get the UniV2 experience." },
]
const features = [
  {
    name: 'Better Execution',
    description:
      'Pay more gas to get less slippage.',
    icon: ScaleIcon,
  },
  {
    name: 'Earn more',
    description: 'Less of the LP fees will go to MEV transactions - more for you.',
    icon: CashIcon,
  },
  // {
  //   name: '30 second wait',
  //   description:
  //     'The VDF required to transact takes roughly 30 seconds to generate.',
  //   icon: ClockIcon,
  // },
  // {
  //   name: 'Based on Uniswap v2',
  //   description:
  //     "At worst, you'll get the UniV2 experience.",
  //   icon: (props: React.ComponentProps<'svg'>) => <svg {...props} fill="white" viewBox="0 0 14 15" xmlns="http://www.w3.org/2000/svg"><path d="M4.152 1.551c-.188-.029-.196-.032-.107-.045.17-.026.57.009.846.074.644.152 1.23.542 1.856 1.235l.166.184.238-.038c1.002-.16 2.02-.033 2.873.358.235.108.605.322.65.377.016.018.043.13.06.251.064.418.033.737-.096.976-.07.13-.074.171-.027.283a.274.274 0 0 0 .246.154c.212 0 .44-.34.545-.814l.042-.189.083.094c.457.514.815 1.214.876 1.712l.016.13-.076-.118a1.462 1.462 0 0 0-.435-.453c-.306-.201-.63-.27-1.486-.315-.774-.04-1.212-.106-1.646-.247-.739-.24-1.111-.558-1.989-1.702-.39-.509-.63-.79-.87-1.016-.545-.515-1.08-.785-1.765-.89Z"></path><path d="M10.85 2.686c.019-.34.065-.565.159-.77a.825.825 0 0 1 .077-.148c.005 0-.011.06-.036.133-.068.2-.08.472-.032.789.06.402.093.46.52.894.201.204.434.46.519.571l.154.2-.154-.143c-.188-.175-.62-.517-.716-.566-.064-.032-.074-.032-.113.007-.037.036-.044.09-.05.346-.007.399-.062.655-.194.91-.071.14-.082.11-.018-.047.048-.116.053-.168.053-.554 0-.775-.094-.962-.637-1.28a5.971 5.971 0 0 0-.504-.26 1.912 1.912 0 0 1-.246-.12c.015-.015.545.139.758.22.318.122.37.137.409.123.025-.01.038-.085.05-.305ZM4.517 4.013c-.381-.522-.618-1.323-.566-1.922l.015-.185.087.015c.164.03.445.134.577.214.361.218.518.505.677 1.243.047.216.108.46.136.544.045.133.217.444.356.646.1.146.034.215-.188.195-.339-.03-.798-.345-1.094-.75ZM10.386 7.9c-1.784-.713-2.412-1.333-2.412-2.378 0-.154.005-.28.012-.28.006 0 .075.05.153.113.362.288.767.411 1.889.574.66.096 1.03.173 1.373.286 1.09.359 1.763 1.087 1.924 2.08.046.288.02.828-.057 1.113-.06.225-.242.63-.29.646-.014.005-.027-.046-.03-.116-.018-.372-.208-.735-.526-1.007-.362-.309-.848-.555-2.036-1.03ZM9.134 8.197a3.133 3.133 0 0 0-.086-.375l-.046-.135.085.095c.117.13.21.297.288.52.06.17.066.22.066.496 0 .271-.008.328-.064.48a1.518 1.518 0 0 1-.376.596c-.326.33-.745.512-1.35.588-.105.013-.411.035-.68.049-.679.035-1.126.108-1.527.248a.324.324 0 0 1-.115.027c-.016-.016.258-.178.483-.286.318-.153.635-.236 1.345-.353.35-.058.713-.129.805-.157.868-.264 1.315-.947 1.172-1.793Z"></path><path d="M9.952 9.641c-.237-.506-.292-.995-.162-1.451.014-.05.036-.089.05-.089.013 0 .07.03.124.067.11.073.328.196.912.512.728.395 1.144.7 1.426 1.05.247.305.4.654.474 1.078.042.24.017.82-.045 1.062-.196.764-.65 1.364-1.3 1.714-.095.051-.18.093-.19.093-.009 0 .026-.087.077-.194.219-.454.244-.895.079-1.386-.102-.301-.308-.668-.724-1.289-.484-.72-.602-.913-.721-1.167ZM3.25 12.374c.663-.556 1.486-.95 2.237-1.072a3.51 3.51 0 0 1 1.161.045c.48.122.91.396 1.133.721.218.319.312.596.41 1.214.038.243.08.488.092.543.073.32.216.576.392.704.28.204.764.217 1.239.033a.618.618 0 0 1 .155-.048c.017.017-.222.176-.39.26a1.334 1.334 0 0 1-.648.156c-.435 0-.796-.22-1.098-.668a5.3 5.3 0 0 1-.296-.588c-.318-.721-.475-.94-.844-1.181-.322-.21-.737-.247-1.049-.095-.41.2-.524.72-.23 1.05a.911.911 0 0 0 .512.266.545.545 0 0 0 .619-.544c0-.217-.084-.34-.295-.436-.289-.129-.598.022-.597.291 0 .115.051.187.167.24.074.033.076.035.015.023-.264-.055-.326-.372-.114-.582.256-.252.784-.141.965.204.076.145.085.433.019.607-.15.39-.582.595-1.022.483-.3-.076-.421-.158-.782-.527-.627-.642-.87-.767-1.774-.907l-.174-.027.197-.165Z"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M.308.884C2.402 3.41 3.845 4.452 4.005 4.672c.132.182.082.346-.144.474a1.381 1.381 0 0 1-.515.143c-.147 0-.198-.056-.198-.056-.085-.08-.133-.066-.57-.837A132.96 132.96 0 0 0 1.45 2.67c-.032-.03-.031-.03 1.067 1.923.177.407.035.556.035.614 0 .118-.033.18-.179.343-.244.27-.353.574-.432 1.203-.088.705-.336 1.203-1.024 2.056-.402.499-.468.59-.57.792-.128.253-.163.395-.177.714-.015.339.014.557.118.88.09.284.186.47.429.844.21.323.33.563.33.657 0 .074.014.074.34.001.776-.174 1.407-.48 1.762-.857.22-.233.271-.361.273-.68.001-.208-.006-.252-.063-.372-.092-.195-.26-.358-.63-.61-.486-.33-.694-.595-.75-.96-.048-.3.007-.511.275-1.07.278-.58.347-.827.394-1.41.03-.377.071-.526.18-.646.114-.124.216-.166.498-.204.459-.063.75-.18.99-.4a.853.853 0 0 0 .31-.652l.01-.21-.117-.134C4.098 4.004.026.5 0 .5-.005.5.133.673.308.884Zm.976 9.815a.37.37 0 0 0-.115-.489c-.15-.1-.385-.052-.385.077 0 .04.022.069.072.094.084.043.09.091.024.19-.067.099-.061.186.015.246.123.095.297.043.389-.118ZM4.925 5.999c-.215.065-.424.292-.49.53-.039.145-.016.4.043.478.096.127.188.16.439.159.49-.003.916-.212.966-.474.04-.214-.147-.51-.405-.641a.965.965 0 0 0-.553-.052Zm.574.445c.075-.107.042-.222-.087-.3-.244-.149-.615-.026-.615.204 0 .115.193.24.37.24.118 0 .28-.07.332-.144Z"></path></svg>
  // },
]

export default function Index() {
  return (
    <>
      <Helmet {...helmetProps}>
        {/* ld+json is structured data for machines parsing the page */}
        <script type="application/ld+json">{JSON.stringify(structuredData, undefined, 4)}</script>
      </Helmet>
      <div className="bg-white">

        <header className="relative bg-gray-50 overflow-hidden">

          <div className="relative pt-6 pb-16 sm:pb-24">
            <Popover>
              <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <nav className="relative flex items-center justify-between sm:h-10 md:justify-center" aria-label="Global">
                  <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
                    <div className="flex items-center justify-between w-full md:w-auto">
                      <a href="#">
                        <span className="sr-only">SlowStop</span>
                        <img
                          className="h-8 w-auto sm:h-10"
                          src="https://slowswap.io/logo.svg"
                          alt=""
                        />
                      </a>
                      <div className="-mr-2 flex items-center sm:hidden">
                        <Popover.Button className="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-purple-400">
                          <span className="sr-only">Open main menu</span>
                          <MenuIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:flex md:space-x-10">
                    {navigation.map((item) => (
                      <a key={item.name} href={item.href} className="font-medium text-gray-500 hover:text-gray-900" target="_blank">
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="hidden sm:absolute sm:flex sm:items-center sm:justify-end sm:inset-y-0 sm:right-0">
                    <span className="inline-flex rounded-md shadow">
                      <a
                        href={appUrl}
                        className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-purple-500 hover:bg-blue-purple-600"
                      >
                        Launch App
                      </a>
                    </span>
                  </div>
                </nav>
              </div>

              <Transition
                as={Fragment}
                enter="duration-150 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Popover.Panel
                  focus
                  className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                >
                  <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                    <div className="px-5 pt-4 flex items-center justify-between">
                      <div>
                        <img
                          className="h-8 w-auto"
                          src="https://slowswap.io/logo.svg"
                          alt=""
                        />
                      </div>
                      <div className="-mr-2">
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-purple-500">
                          <span className="sr-only">Close menu</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                    <div className="px-2 pt-2 pb-3">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                    <a
                      href={appUrl}
                      className="hidden sm:block w-full px-5 py-3 text-center font-medium text-white bg-blue-purple-500 hover:bg-blue-purple-600"
                    >
                      Launch App
                    </a>
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>

            <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
              <div className="text-center">
                <h1 className="text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Get more with</span>{' '}
                  <span className="block text-blue-purple-500 xl:inline">SlowSwap</span>
                </h1>
                <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                  AMMs with VDFs discourage MEV front-running and sandwiching.
                </p>
                <br></br>
                <img
                    className="mx-auto h-full w-full"
                    src="https://slowswap.io/drunk-morning.gif"
                    alt=""
                  />
                <div className="sm:hidden">
                  <div className="mt-5 max-w-md  mx-auto flex justify-center ">
                    <div className="rounded-md shadow ">
                      <a
                        href={appUrl}
                        className="w-full max-w-[200px] flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-purple-500 hover:bg-blue-purple-600"
                      >
                        Launch App
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </header>

        <main>




          <div className="relative bg-blue-purple-700" id="how-it-works">
            <div className="h-full w-full absolute bottom-0 xl:inset-0 xl:h-full">
              <div className="h-full w-full xl:grid xl:grid-cols-2">
                <div className="h-full xl:relative xl:col-start-2">
                  <img
                    className="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0"
                    src="https://slowswap.io/sloth-pattern-1.jpeg"
                    alt="People working on laptops"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-full bg-gradient-to-b from-blue-purple-700 xl:inset-y-0 xl:left-0 xl:h-full xl:w-full xl:bg-gradient-to-r"
                  />
                </div>
              </div>
            </div>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8">
              <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24 ">
                <h2 className="text-sm font-semibold text-blue-purple-200 tracking-wide uppercase">dont show your cards</h2>
                <p className="mt-3 text-3xl font-bold text-white">
                  Hide your trade from the mempool
                </p>
                <p className="mt-5 text-lg text-gray-300">
                  Submitting a VDF with your swap prevents mempool-watchers from reacting to your trade.
                </p>
                <div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
                  {metrics.map((item) => (
                    <p key={item.id}>
                      <span className="block text-2xl font-bold text-white">{item.stat}</span>
                      <span className="mt-1 block text-base text-gray-300">
                        <span className="font-medium text-white">{item.emphasis}</span> {item.rest}
                      </span>
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>



          <div className="bg-white" >
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-12 lg:px-8">
              <div className="lg:grid lg:grid-cols-3 lg:gap-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">How it works</h2>
                  <p className="mt-4 text-lg text-gray-500">
                    We forked Uniswap v2 and added a VDF.
                  </p>
                </div>
                <div className="mt-12 lg:mt-0 lg:col-span-2">
                  <dl className="space-y-12">
                    {faqs.map((faq) => (
                      <div key={faq.question}>
                        <dt className="text-lg leading-6 font-medium text-gray-900">{faq.question}</dt>
                        <dd className="mt-2 text-base text-gray-500">{faq.answer}</dd>
                      </div>
                    ))}
                    <div>
                      <dt className="text-lg leading-6 font-medium text-gray-900">How did the project start?</dt>
                      <dd className="mt-2 text-base text-gray-500">
                        As a hackthon project for{' '}
                        <a href="https://hackerlink.io/buidl/2070" className="font-medium text-blue-purple-500 hover:text-blue-purple-400">
                          EthDenver 2022
                        </a>
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          {/*
          <div className="bg-blue-purple-700 overflow-hidden">
            <div className="relative max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
              <svg
                className="absolute top-0 left-full transform -translate-x-1/2 -translate-y-3/4 lg:left-auto lg:right-full lg:translate-x-2/3 lg:translate-y-1/4"
                width={404}
                height={784}
                fill="none"
                viewBox="0 0 404 784"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="8b1b5f72-e944-4457-af67-0c6d15a99f38"
                    x={0}
                    y={0}
                    width={20}
                    height={20}
                    patternUnits="userSpaceOnUse"
                  >
                    <rect x={0} y={0} width={4} height={4} className="text-gray-700" fill="currentColor" />
                  </pattern>
                </defs>
                <rect width={404} height={784} fill="url(#8b1b5f72-e944-4457-af67-0c6d15a99f38)" />
              </svg>

              <div className="relative lg:grid lg:grid-cols-3 lg:gap-x-8">
                <div className="lg:col-span-1">
                  <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                    more for your swap,<br />more for LPs.
                  </h2>
                </div>
                <dl className="mt-10 space-y-10 sm:space-y-0 sm:grid sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:mt-0 lg:col-span-2">
                  {features.map((feature) => (
                    <div key={feature.name}>
                      <dt>
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-purple-400 text-white">
                          <feature.icon className="h-6 w-6" aria-hidden="true" />
                        </div>
                        <p className="mt-5 text-lg leading-6 font-medium text-white">{feature.name}</p>
                      </dt>
                      <dd className="mt-2 text-base text-white">{feature.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div> */}

        </main>

        <footer className="bg-white" aria-labelledby="footer-heading">
          <h2 id="footer-heading" className="sr-only">
            Footer
          </h2>
          <div className="max-w-2xl mx-auto py-12 px-4 sm:px-6 sm:py-24 lg:py-12 lg:px-8">
            <div className="xl:grid xl:grid-cols-3 xl:gap-8">
              <div className="space-y-8 xl:col-span-1">
                <div className="flex items-end gap-2">
                  <img
                    className="h-10"
                    src="https://slowswap.io/logo.svg"
                    alt="SlowSwap"
                  />
                  <span className="text-blue-purple-400 inline text-5xl tracking-tight font-bold">SlowSwap</span>
                </div>
                <div className="flex space-x-6">
                  {footerNavigation.social.map((item) => (
                    <a key={item.name} href={item.href} className="text-stone-400 hover:text-stone-500" target="_blank">
                      <span className="sr-only">{item.name}</span>
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                    </a>
                  ))}
                </div>
                <p className="text-base text-stone-400">
                  &copy; {new Date().getFullYear()} SlowSwap
                </p>
              </div>
            </div>
          </div>

        </footer>
      </div >
    </>
  )
}
