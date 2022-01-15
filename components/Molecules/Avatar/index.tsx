import Image from "next/image"
import { Container } from "./styled"

const Avatar = () => {
  return (
    <Container>
      <div>
        <div>
          <Image
            src="/images/avatar.png"
            alt="Avatar"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </Container>
  )
}

export default Avatar
