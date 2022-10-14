import Image from "next/image"
import { Container } from "./styled"

const Avatar = () => {
  return (
    <Container>
      <div>
        <div>
          <Image
            src="https://avatars.githubusercontent.com/u/13678214?v=4"
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
