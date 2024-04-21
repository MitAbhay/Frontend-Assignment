"use Client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter, useParams } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();
  const [selectedTime, setSelectedTime] = useState(
    `Last ${params.timestamp / 60000} minutes`
  );

  return (
    <div className="bg-white fixed w-full top-0 left-0 z-10">
      <div className="mx-auto flex h-20 items-center gap-12 px-4 sm:px-6 lg:px-8 p-2 border-gray-200 border-b-2">
        <Link className="block text-teal-600" href="/">
          <svg
            width="191"
            height="34"
            viewBox="0 0 191 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_5_8392)">
              <path
                d="M28.7642 8.20393C28.7838 8.31151 28.8203 8.41925 28.8203 8.52683C28.8231 13.0004 28.8208 17.474 28.8282 21.9474C28.8287 22.1893 28.7368 22.3048 28.542 22.4134C26.7427 23.4167 24.9482 24.4291 23.1526 25.4394C23.0548 25.4944 22.9592 25.5537 22.8627 25.6109C22.8372 25.4684 22.7896 25.326 22.7893 25.1834C22.7845 23.141 22.7864 21.0985 22.7851 19.0561C22.7851 18.9245 22.7738 18.7928 22.7665 18.6356C22.6761 18.6703 22.6287 18.682 22.5872 18.7054C20.6642 19.7872 18.7416 20.8702 16.819 21.953C16.795 21.946 16.7709 21.9388 16.747 21.9317C16.7476 19.7961 16.7465 17.6607 16.7521 15.5253C16.7526 15.3251 16.7963 15.1249 16.8199 14.9248C17.474 14.5603 18.1292 14.1975 18.7823 13.8309C21.4817 12.3155 24.1807 10.7999 26.8789 9.28212C27.51 8.92712 28.136 8.56354 28.7642 8.20393Z"
                fill="#1F009D"
              />
              <path
                d="M16.7475 21.9317C16.7714 21.9388 16.7955 21.9458 16.8195 21.953C16.7938 22.1012 16.7508 22.2489 16.7463 22.3976C16.7354 22.7521 16.7425 23.1073 16.7425 23.4623C16.7425 25.1354 16.7438 26.8086 16.7405 28.4817C16.7402 28.6518 16.7896 28.8464 16.5952 28.9585C14.7128 27.8985 12.8313 26.8374 10.9481 25.7789C9.32617 24.8674 7.70157 23.961 6.08038 23.0479C5.62413 22.7909 5.17597 22.5185 4.72423 22.2533C4.72641 22.0501 4.7303 21.8468 4.73045 21.6436C4.73061 17.3877 4.73061 13.132 4.73061 8.87611C4.73061 8.76169 4.72377 8.6468 4.73403 8.53334C4.74133 8.45277 4.77211 8.37459 4.80258 8.25557C5.01959 8.37745 5.20193 8.48042 5.38459 8.58244C6.27842 9.08142 7.17335 9.57816 8.06579 10.0794C8.94734 10.5744 9.82672 11.0738 10.707 11.5714C10.7047 13.8189 10.7014 16.0665 10.7038 18.3143C10.7039 18.4209 10.7552 18.5276 10.7826 18.6342C12.668 19.6957 14.5533 20.7578 16.4402 21.8168C16.5347 21.8697 16.6448 21.894 16.7475 21.9317Z"
                fill="#6DCAFF"
              />
              <path
                d="M10.7825 18.634C10.755 18.5274 10.7039 18.4208 10.7037 18.3141C10.7014 16.0665 10.7048 13.8189 10.707 11.5712C12.0079 10.8528 13.3104 10.137 14.6095 9.41512C15.2746 9.0455 15.9338 8.66492 16.5956 8.28942C16.7302 8.22617 16.8689 8.17039 16.999 8.09873C18.8031 7.10555 20.6082 6.11428 22.4068 5.11077C22.6474 4.9765 22.8333 4.95647 23.0876 5.09615C24.8599 6.06915 26.6426 7.02228 28.421 7.98399C28.5399 8.04835 28.6499 8.13019 28.764 8.20392C28.1359 8.56353 27.5099 8.92712 26.879 9.28196C24.1811 10.7997 21.4818 12.3154 18.7824 13.8307C18.1294 14.1973 17.4742 14.5601 16.82 14.9246C16.6797 14.8774 16.5287 14.8504 16.4009 14.7799C15.5272 14.2965 14.658 13.8039 13.7874 13.3144C12.9276 12.831 12.0684 12.3465 11.2071 11.866C11.0931 11.8024 10.9681 11.7597 10.8424 11.7045C10.7486 12.0786 10.7175 16.5288 10.7825 18.634Z"
                fill="#5429FF"
              />
              <path
                d="M16.5949 28.9585C16.7893 28.8464 16.74 28.6518 16.7403 28.4817C16.7436 26.8086 16.7423 25.1354 16.7423 23.4623C16.7423 23.1075 16.7352 22.7523 16.746 22.3976C16.7507 22.2487 16.7938 22.1011 16.8193 21.953C18.7419 20.8702 20.6645 19.7872 22.5875 18.7054C22.6289 18.6822 22.6765 18.6703 22.7668 18.6356C22.7741 18.7928 22.7853 18.9244 22.7854 19.0561C22.7865 21.0985 22.7847 23.141 22.7896 25.1834C22.7899 25.326 22.8373 25.4684 22.863 25.6109C21.7134 26.2548 20.5639 26.8982 19.4147 27.5426C18.6012 27.9987 17.7888 28.4568 16.9749 28.9121C16.8566 28.9782 16.7349 29.0579 16.5949 28.9585Z"
                fill="#B9E5FF"
              />
              <path
                d="M16.942 8.28942C16.2801 8.66508 15.621 9.04551 14.9559 9.41513C13.6569 10.137 12.3545 10.8529 11.0534 11.5712C10.1731 11.0737 9.29384 10.5742 8.41213 10.0792C7.51954 9.57801 6.62461 9.08126 5.73093 8.58229C5.54828 8.48027 5.36594 8.37746 5.14893 8.25542C5.11846 8.37444 5.08768 8.45262 5.08037 8.53319C5.07011 8.64681 5.07695 8.76186 5.07695 8.87611C5.07695 13.132 5.07695 17.3877 5.07664 21.6436C5.07664 21.8468 5.0726 22.0501 5.07043 22.2533C5.04757 22.1049 5.00483 21.9563 5.00467 21.8079C5.00125 17.4117 5.00467 13.0155 4.99612 8.61948C4.9955 8.29673 5.10307 8.11971 5.38443 7.97018C7.13729 7.03897 8.88346 6.09411 10.6242 5.13954C10.9188 4.97793 11.1415 4.98048 11.4434 5.15416C13.0781 6.09458 14.7304 7.00322 16.3747 7.92648C16.57 8.03612 16.7533 8.16802 16.942 8.28942Z"
                fill="#99DAFF"
              />
              <path
                d="M10.7825 18.634C10.7175 16.5288 10.7486 12.0784 10.8422 11.7044C10.9681 11.7595 11.0931 11.8022 11.2069 11.8658C12.0682 12.3464 12.9274 12.8309 13.7872 13.3143C14.6579 13.8037 15.527 14.2963 16.4009 14.7797C16.5287 14.8504 16.6798 14.8773 16.82 14.9245C16.7964 15.1247 16.7529 15.3248 16.7523 15.525C16.7467 17.6604 16.7478 19.796 16.7471 21.9314C16.6444 21.8937 16.5345 21.8694 16.44 21.8163C14.5533 20.7578 12.6681 19.6955 10.7825 18.634Z"
                fill="#2900CE"
              />
            </g>
            <path
              d="M46.297 21.0861L46.7905 24.576C45.5713 24.9444 44.4198 25.1286 43.336 25.1286C41.7297 25.1286 40.5685 24.7796 39.8524 24.0816C39.1557 23.3836 38.8074 22.2688 38.8074 20.7371V12.8848H36.1657V9.62757H38.8074V5.20701H43.1618V9.62757H46.5583V12.8848H43.1618V19.9519C43.1618 20.456 43.2779 20.8147 43.5102 21.028C43.7424 21.2218 44.1005 21.3188 44.5843 21.3188C44.952 21.3188 45.5229 21.2412 46.297 21.0861Z"
              fill="#010202"
            />
            <path
              d="M55.8315 9.36582C56.4315 9.36582 57.254 9.54032 58.299 9.88931L57.4862 13.7282C56.5766 13.5149 55.9186 13.4083 55.5122 13.4083C54.5445 13.4083 53.7801 13.7864 53.2188 14.5425C52.6576 15.2793 52.377 16.2972 52.377 17.5962V24.7505H48.0225V9.62757H52.0576V11.7797C52.8705 10.1704 54.1284 9.36582 55.8315 9.36582Z"
              fill="#010202"
            />
            <path
              d="M68.3472 9.62757H72.7016V24.7505H68.7246V23.151C67.815 24.547 66.3538 25.2449 64.3411 25.2449C62.5606 25.2449 61.2252 24.8184 60.335 23.9653C59.4641 23.1122 59.0286 21.8907 59.0286 20.3009V9.62757H63.3831V19.1376C63.3831 20.6693 64.1282 21.4351 65.6184 21.4351C67.4376 21.4351 68.3472 20.4754 68.3472 18.5559V9.62757Z"
              fill="#010202"
            />
            <path
              d="M82.3175 21.5514C83.111 21.5514 83.8174 21.4157 84.4367 21.1443C85.056 20.8535 85.7914 20.3494 86.643 19.632L89.0234 22.3658C87.03 24.2852 84.756 25.2449 82.2014 25.2449C79.7242 25.2449 77.7502 24.5179 76.2793 23.0637C74.8278 21.6096 74.1021 19.6708 74.1021 17.2472C74.1021 14.8624 74.7988 12.9139 76.1922 11.4016C77.5857 9.86992 79.4629 9.10408 81.824 9.10408C84.127 9.10408 85.8979 9.77298 87.1365 11.1108C88.3944 12.4486 89.0234 14.3293 89.0234 16.7528C89.0234 17.2957 89.004 17.858 88.9653 18.4396H78.3114C78.7759 20.5142 80.1113 21.5514 82.3175 21.5514ZM81.766 12.5067C80.0048 12.5067 78.8823 13.4665 78.3985 15.3859H84.8721C84.6593 13.4665 83.6239 12.5067 81.766 12.5067Z"
              fill="#010202"
            />
            <path
              d="M97.6861 7.09738C97.1248 7.09738 96.7281 7.2234 96.4958 7.47545C96.2636 7.70812 96.1475 8.12497 96.1475 8.72601V9.62757H99.3117V12.8848H96.1475V24.7505H91.793V12.8848H89.2674V9.62757H91.793V8.55151C91.793 5.2167 93.4767 3.5493 96.8442 3.5493C97.8893 3.5493 98.9924 3.7238 100.154 4.07279L99.3988 7.30096C98.8376 7.16524 98.2666 7.09738 97.6861 7.09738Z"
              fill="#010202"
            />
            <path
              d="M107.134 9.10408C109.456 9.10408 111.362 9.86023 112.853 11.3725C114.343 12.8654 115.088 14.7946 115.088 17.16C115.088 19.5447 114.343 21.4933 112.853 23.0056C111.362 24.4985 109.456 25.2449 107.134 25.2449C104.792 25.2449 102.876 24.4985 101.386 23.0056C99.8956 21.4933 99.1505 19.5447 99.1505 17.16C99.1505 14.7946 99.8956 12.8654 101.386 11.3725C102.876 9.86023 104.792 9.10408 107.134 9.10408ZM107.134 12.7976C106.069 12.7976 105.208 13.195 104.55 13.99C103.892 14.7849 103.563 15.8416 103.563 17.16C103.563 18.4978 103.892 19.5641 104.55 20.3591C105.208 21.154 106.069 21.5514 107.134 21.5514C108.198 21.5514 109.05 21.154 109.688 20.3591C110.346 19.5641 110.675 18.4978 110.675 17.16C110.675 15.8416 110.346 14.7849 109.688 13.99C109.03 13.195 108.179 12.7976 107.134 12.7976Z"
              fill="#010202"
            />
            <path
              d="M125.73 9.62757H130.084V24.7505H126.107V23.151C125.198 24.547 123.736 25.2449 121.724 25.2449C119.943 25.2449 118.608 24.8184 117.717 23.9653C116.847 23.1122 116.411 21.8907 116.411 20.3009V9.62757H120.766V19.1376C120.766 20.6693 121.511 21.4351 123.001 21.4351C124.82 21.4351 125.73 20.4754 125.73 18.5559V9.62757Z"
              fill="#010202"
            />
            <path
              d="M140.745 9.10408C142.429 9.10408 143.745 9.5791 144.693 10.5291C145.661 11.4792 146.145 12.7685 146.145 14.3971V24.7505H141.79V15.6186C141.79 14.7461 141.568 14.0772 141.123 13.6119C140.697 13.1272 140.077 12.8848 139.265 12.8848C138.452 12.8848 137.803 13.1369 137.32 13.641C136.836 14.1451 136.594 14.8334 136.594 15.7058V24.7505H132.239V9.62757H136.275V11.2562C137.3 9.82145 138.79 9.10408 140.745 9.10408Z"
              fill="#010202"
            />
            <path
              d="M158.629 4.10187H162.984V24.7505H158.948V22.9183C157.884 24.45 156.307 25.2159 154.217 25.2159C152.262 25.2159 150.656 24.4888 149.398 23.0347C148.159 21.5611 147.54 19.6223 147.54 17.2181C147.54 14.7946 148.159 12.8557 149.398 11.4016C150.656 9.92809 152.272 9.19133 154.246 9.19133C156.123 9.19133 157.584 9.79237 158.629 10.9945V4.10187ZM155.349 21.5224C156.355 21.5224 157.178 21.1249 157.816 20.33C158.455 19.535 158.774 18.4978 158.774 17.2181C158.774 15.9385 158.455 14.9109 157.816 14.1354C157.178 13.3405 156.365 12.943 155.378 12.943C154.352 12.943 153.52 13.3308 152.881 14.1063C152.243 14.8818 151.923 15.9191 151.923 17.2181C151.923 18.5172 152.233 19.5641 152.852 20.3591C153.471 21.1346 154.304 21.5224 155.349 21.5224Z"
              fill="#010202"
            />
            <path
              d="M172.95 9.36582C173.55 9.36582 174.372 9.54032 175.417 9.88931L174.604 13.7282C173.695 13.5149 173.037 13.4083 172.63 13.4083C171.663 13.4083 170.898 13.7864 170.337 14.5425C169.776 15.2793 169.495 16.2972 169.495 17.5962V24.7505H165.141V9.62757H169.176V11.7797C169.989 10.1704 171.246 9.36582 172.95 9.36582Z"
              fill="#010202"
            />
            <path
              d="M186.378 9.62757H190.848L185.101 26.2628C184.597 27.7557 183.91 28.8221 183.039 29.4619C182.169 30.1211 181.007 30.4507 179.556 30.4507C178.337 30.4507 177.292 30.3053 176.421 30.0145L177.146 26.7863C177.727 26.9026 178.337 26.9608 178.975 26.9608C180.04 26.9608 180.785 26.5149 181.211 25.623L175.521 9.62757H180.107L181.269 13.1466C182.256 16.0742 182.933 18.2166 183.301 19.5738C183.726 18.0421 184.375 15.8997 185.246 13.1466L186.378 9.62757Z"
              fill="#010202"
            />
            <defs>
              <clipPath id="clip0_5_8392">
                <rect
                  width="24.1785"
                  height="24.005"
                  fill="white"
                  transform="translate(4.64972 5.00034)"
                />
              </clipPath>
            </defs>
          </svg>
        </Link>

        <div className="flex flex-1 items-center justify-end md:justify-between px-4">
          <nav aria-label="Global" className="hidden md:block">
            <div className="flex items-center gap-6 text-sm">
              <Link
                className={`flex hover:border-b-4 border-blue-800 cursor-pointer ${
                  pathname.includes("metrics") &&
                  "font-bold border-blue-800 border-b-4"
                }`}
                href="/metrics/300000"
              >
                <Image
                  width={32}
                  height={32}
                  src={
                    pathname.includes("metrics")
                      ? "/metrics.png"
                      : "/metrics-gray.png"
                  }
                  className="object-contain h-8 w-5 mt-1"
                  alt="metrics"
                />
                <h1 className="text-gray-800 transition hover:text-black p-2">
                  Metrics
                </h1>
              </Link>

              <Link
                className={`flex hover:border-b-4 border-blue-800 cursor-pointer ${
                  pathname.includes("logs") &&
                  "font-bold border-blue-800 border-b-4"
                }`}
                href="/logs/300000"
              >
                <Image
                  width={32}
                  height={32}
                  src={
                    pathname.includes("logs") ? "/list-active.png" : "/list.png"
                  }
                  className="object-contain h-4 w-4 mt-3"
                  alt="logs"
                />
                <h1 className="text-gray-800 transition hover:text-black p-2 ">
                  Logs
                </h1>
              </Link>
            </div>
          </nav>

          <div className="flex items-center justify-center">
            <div className="sm:flex sm:gap-4 border-gray-700">
              <select
                defaultValue={selectedTime}
                onChange={(e) => {
                  setSelectedTime(e.target.value);
                  console.log(selectedTime);
                }}
                name="dropdown"
                id=""
                className="bg-white border-2 border-slate-300 rounded-md p-1"
              >
                <option
                  onClick={() => {
                    pathname.includes("logs")
                      ? router.push(`/logs/${300000}`)
                      : router.push(`/metrics/${300000}`);
                  }}
                  value="Last 5 minutes"
                  className="text-sm p-1"
                >
                  Last 5 minutes
                </option>
                <hr className="text-slate-400" />
                <option
                  onClick={() => {
                    pathname.includes("logs")
                      ? router.push(`/logs/${900000}`)
                      : router.push(`/metrics/${900000}`);
                  }}
                  value="Last 15 minutes"
                  className="text-sm p-1"
                >
                  Last 15 minutes
                </option>
                <hr className="text-slate-400" />

                <option
                  onClick={() => {
                    pathname.includes("logs")
                      ? router.push(`/logs/${1800000}`)
                      : router.push(`/metrics/${1800000}`);
                  }}
                  value="Last 30 minutes"
                  className="text-sm p-1"
                >
                  Last 30 minutes
                </option>
                <hr className="text-slate-400" />
                <option
                  onClick={() => {
                    pathname.includes("logs")
                      ? router.push(`/logs/${3600000}`)
                      : router.push(`/metrics/${3600000}`);
                  }}
                  value="Last 1 hour"
                  className="text-sm p-1"
                >
                  Last 1 hour
                </option>
                <hr className="text-slate-400" />
                <option
                  onClick={() => {
                    pathname.includes("logs")
                      ? router.push(`/logs/${10800000}`)
                      : router.push(`/metrics/${10800000}`);
                  }}
                  value="Last 3 hours"
                  className="text-sm p-1"
                >
                  Last 3 hours
                </option>
                <hr className="text-slate-400" />
                <option
                  onClick={() => {
                    pathname.includes("logs")
                      ? router.push(`/logs/${21600000}`)
                      : router.push(`/metrics/${21600000}`);
                  }}
                  value="Last 6 hours"
                  className="text-sm p-1"
                >
                  Last 6 hours
                </option>
              </select>
            </div>

            <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
              <span className="sr-only">Toggle menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
