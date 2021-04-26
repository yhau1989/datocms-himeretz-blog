import Container from "./container";
import { INSTAGRAM_URL, FACEBOOK_URL, TIKTOK_URL } from "../lib/constants";
import FooterLogo from './footer-logo'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-800 via-gray-900 to-black">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center ">
          <h3 className="topLabel text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2 ">
            <FooterLogo className="w-64"></FooterLogo>
            {/* Síguenos en nuetras redes */}
          </h3>
          <div className="flex flex-row justify-center items-center lg:pl-4 lg:w-1/2 ">
            <a
              href={`${INSTAGRAM_URL}`}
              className="mx-3 font-bold hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="h-6 w-6 link_social"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7ZM9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12Z"
                  fill="currentColor"
                />
                <path
                  d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z"
                  fill="currentColor"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5 1C2.79086 1 1 2.79086 1 5V19C1 21.2091 2.79086 23 5 23H19C21.2091 23 23 21.2091 23 19V5C23 2.79086 21.2091 1 19 1H5ZM19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
                  fill="currentColor"
                />
              </svg>
            </a>

            <a
              href={`${FACEBOOK_URL}`}
              className="mx-3 font-bold hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                className="h-6 w-6 link_social"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.19795 21.5H13.198V13.4901H16.8021L17.198 9.50977H13.198V7.5C13.198 6.94772 13.6457 6.5 14.198 6.5H17.198V2.5H14.198C11.4365 2.5 9.19795 4.73858 9.19795 7.5V9.50977H7.19795L6.80206 13.4901H9.19795V21.5Z"
                  fill="currentColor"
                />
              </svg>
            </a>

            <a
              href={`${TIKTOK_URL}`}
              className="mx-3 font-bold hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                width="1.5rem"
                height="1.5rem"
                x="0"
                y="0"
                viewBox="0 0 512 512"
              >
                <g>
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="m432.734375 112.464844c-53.742187 0-97.464844-43.722656-97.464844-97.464844 0-8.285156-6.71875-15-15-15h-80.335937c-8.285156 0-15 6.714844-15 15v329.367188c0 31.59375-25.703125 57.296874-57.300782 57.296874-31.59375 0-57.296874-25.703124-57.296874-57.296874 0-31.597657 25.703124-57.300782 57.296874-57.300782 8.285157 0 15-6.714844 15-15v-80.335937c0-8.28125-6.714843-15-15-15-92.433593 0-167.632812 75.203125-167.632812 167.636719 0 92.433593 75.199219 167.632812 167.632812 167.632812 92.433594 0 167.636719-75.199219 167.636719-167.632812v-145.792969c29.855469 15.917969 63.074219 24.226562 97.464844 24.226562 8.285156 0 15-6.714843 15-15v-80.335937c0-8.28125-6.714844-15-15-15zm-15 79.714844c-32.023437-2.664063-62.433594-13.851563-88.707031-32.75-4.566406-3.289063-10.589844-3.742188-15.601563-1.171876-5.007812 2.5625-8.15625 7.71875-8.15625 13.347657v172.761719c0 75.890624-61.746093 137.632812-137.636719 137.632812-75.890624 0-137.632812-61.742188-137.632812-137.632812 0-70.824219 53.773438-129.328126 122.632812-136.824219v50.8125c-41.015624 7.132812-72.296874 42.984375-72.296874 86.011719 0 48.136718 39.160156 87.300781 87.296874 87.300781 48.140626 0 87.300782-39.164063 87.300782-87.300781v-314.367188h51.210937c6.871094 58.320312 53.269531 104.71875 111.589844 111.589844zm0 0"
                    fill="#b5ef65"
                    data-original="#000000"
                  />
                </g>
              </svg>
            </a>
          </div>
        </div>
      </Container>

      <div className="py-2 text-center text-sm text-gray-500 border-green-500 border-t">
        Website made with{" "}
        <a
          href="https://reactjs.org"
          className="topLabel underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          React
        </a>
        ,{" "}
        <a
          href="https://nextjs.org"
          className="topLabel underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          NextJs
        </a>
        ,{" "}
        <a
          href="https://datocms.com"
          className="topLabel underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          DatoCms
        </a>
        . Hosted on{" "}
        <a
          href="https://vercel.com"
          className="topLabel underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vercel
        </a>
        . Thanks{" "}
        <a
          href="https://www.softwaremonkey.com.ec"
          className="topLabel underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Software Monkey Ecuador
        </a>
      </div>
    </footer>
  );
}
