import Image from "next/image"
import { Container } from "./styled"

const Avatar = () => {
  return (
    <Container>
      <div>
        <div>
          <Image
            src="https://via.placeholder.com/450"
            alt="Avatar"
            width={100}
            height={100}
            layout="fill"
          />
        </div>
      </div>
    </Container>
  )
}

export default Avatar
