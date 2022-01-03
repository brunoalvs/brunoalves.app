import { useEffect } from "react"

import HeadingTitle from "../../Atoms/Typography/HeadingTitle"
import Subtitle from "../../Atoms/Typography/HeadingSubtitle"
import Text from "../../Atoms/Typography/Text"

const HomeTemplate = (props: any) => {
  useEffect(() => {
    console.log("Home", props)
  }, [])

  return (
    <>
      <HeadingTitle>
        {props.title} <strong>Bruno Alves</strong>.
      </HeadingTitle>
      <Subtitle>{props.subtitle}</Subtitle>
      <Text innerHTML={props.content} />
    </>
  )
}

export default HomeTemplate
