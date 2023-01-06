import Image from "next/image"
import * as S from "./styles"

const Avatar = () => {
  return (
    <S.Container>
      <div>
        <div>
          <Image
            src="https://avatars.githubusercontent.com/u/13678214?v=4"
            alt="Avatar"
            fill
          />
        </div>
      </div>
    </S.Container>
  )
}

export default Avatar
