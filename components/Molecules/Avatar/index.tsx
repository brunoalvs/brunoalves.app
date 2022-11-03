import Image from "next/image"
import * as S from "./styles"

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> { }

const Avatar: React.FC<AvatarProps> = ({ ...props }) => {
  return (
    <S.Container {...props}>
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
    </S.Container>
  )
}

export default Avatar
