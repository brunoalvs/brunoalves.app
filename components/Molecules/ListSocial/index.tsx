import * as S from "./styles"

const ListSocial = () => {
  return (
    <S.List>
      <S.Item>
        <a href="mailto:hello@brunoalves.app">
          <svg
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20 0C8.954 0 0 8.954 0 20s8.954 20 20 20 20-8.954 20-20S31.046 0 20 0Zm13 19.998a13 13 0 1 0-6.448 11.23l-1.638-2.806a9.75 9.75 0 1 1 4.836-8.424v1.625a1.625 1.625 0 0 1-3.25 0v-6.5h-2.2a6.5 6.5 0 1 0 .107 9.652A4.875 4.875 0 0 0 33 21.623v-1.625Zm-13-3.25a3.25 3.25 0 1 1 0 6.5 3.25 3.25 0 0 1 0-6.5Z"
            />
          </svg>
          <span>hello@brunoalves.app</span>
        </a>
      </S.Item>
      <S.Item>
        <a
          href="https://www.linkedin.com/in/brunoalvs/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20 0C8.954 0 0 8.954 0 20s8.954 20 20 20 20-8.954 20-20S31.046 0 20 0Zm-4.896 28.29h-4.05V15.256h4.05V28.29Zm-2.05-14.634c-1.279 0-2.106-.906-2.106-2.027 0-1.144.852-2.023 2.158-2.023s2.107.88 2.132 2.023c0 1.121-.825 2.027-2.184 2.027ZM29.896 28.29h-4.05v-7.223c0-1.682-.588-2.823-2.052-2.823-1.119 0-1.784.773-2.077 1.516-.109.265-.136.64-.136 1.013v7.515H17.53v-8.875a87.02 87.02 0 0 0-.106-4.159h3.519l.185 1.81h.081c.534-.85 1.84-2.104 4.025-2.104 2.665 0 4.663 1.786 4.663 5.623v7.707Z" />
          </svg>
          <span>LinkedIn</span>
        </a>
      </S.Item>
      <S.Item>
        <a
          href="https://github.com/brunoalvs"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20 0C8.95 0 0 8.95 0 20a19.988 19.988 0 0 0 13.676 18.976c1 .174 1.374-.426 1.374-.952 0-.474-.026-2.048-.026-3.724C10 35.226 8.7 33.076 8.3 31.95c-.226-.576-1.2-2.35-2.05-2.826-.7-.374-1.7-1.3-.026-1.324 1.576-.026 2.7 1.45 3.076 2.05 1.8 3.024 4.676 2.174 5.824 1.65.176-1.3.7-2.174 1.276-2.674-4.45-.5-9.1-2.226-9.1-9.876 0-2.176.774-3.974 2.05-5.376-.2-.5-.9-2.55.2-5.3 0 0 1.674-.524 5.5 2.052a18.56 18.56 0 0 1 5-.676c1.7 0 3.4.224 5 .674 3.824-2.6 5.5-2.048 5.5-2.048 1.1 2.75.4 4.8.2 5.3 1.274 1.4 2.05 3.174 2.05 5.374 0 7.676-4.674 9.376-9.124 9.876.724.624 1.35 1.824 1.35 3.7 0 2.674-.026 4.824-.026 5.5 0 .524.376 1.148 1.376.948A20.032 20.032 0 0 0 40 20C40 8.95 31.05 0 20 0Z" />
          </svg>
          <span>Github</span>
        </a>
      </S.Item>
    </S.List>
  )
}

export default ListSocial
