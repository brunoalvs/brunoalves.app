import { useRouter } from "next/router"
import React from "react"
import * as S from "./styles"

const Logo: React.FC = () => {
  const { push, route } = useRouter()

  const handleClick = () => {
    if (route !== "/") {
      push("/")
    }
  }

  return (
    <S.Container
      onClick={() => handleClick()}
      aria-hidden
      width="61"
      height="60"
      viewBox="0 0 61 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={route !== "/" ? { cursor: "pointer" } : { cursor: "default" }}
    >
      <path
        d="M47.754 55.025c1.957-1.362 3.044-3.36 3.587-6.084h-.054l1.359-8.308c.271-1.68.978-2.86 2.174-3.405 1.25-.59 2.717-.772 4.51-.59l.924-5.357c-1.902-.273-3.26-.817-4.076-1.726-.924-.817-1.25-2.043-.924-3.631v-.227l1.413-8.082c.326-2.587 0-4.721-1.304-6.356-1.413-1.725-4.239-3.54-8.696-5.357l-1.087 5.902c2.066.817 3.37 1.544 3.913 2.452.544.817.816 1.907.544 3.268l-1.413 8.309c-.544 3.586 1.25 5.947 5.054 7.082v.318c-1.956 0-3.641.454-4.891 1.362-1.304.863-2.065 2.18-2.391 3.859v.272l-1.63 8.4c-.218 1.452-.762 2.496-1.631 3.177-.87.772-2.392 1.226-4.674 1.453l-1.196 6.447c5.055-.727 8.478-1.816 10.49-3.178ZM11.504 33.642c2.229 1.225 3.153 3.087 2.61 5.538v.046l-2.447 11.94c-.543 2.77-.163 4.858 1.087 6.22 1.087 1.362 3.153 2.133 5.979 2.451 2.717.363 6.521.091 10.87-.545l1.25-6.81c-2.718.091-4.566-.045-5.436-.817-.87-.771-1.195-1.952-.87-3.632l2.012-10.306v-.453c.76-4.087-2.12-6.81-9.402-8.627l.108-.453c7.5.181 11.359-1.862 12.283-6.175l1.848-9.988c.38-1.589 1.087-2.497 2.174-2.95 1.087-.41 2.88-.183 5.326.59l1.195-6.357c-3.75-1.589-7.01-2.588-9.565-3.042-2.717-.499-4.891-.317-6.522.59-1.521.909-2.608 2.68-3.152 5.222l-2.391 11.531v.318c-.435 2.27-1.848 3.677-4.565 4.268-2.718.454-6.522.454-11.685-.454L.254 31.008c5.272.5 8.913 1.362 11.25 2.634Z"
        fill="#8368EE"
      />
    </S.Container>
  )
}

export default Logo
