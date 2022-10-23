import Notice from "../components/Notice"
import TextWithImage from "../components/TextWithImage"

//Importing images
import img1 from "../images/section-1.jpg"
import img2 from "../images/section-2.webp"
import img3 from '../images/section-3.jpg'
import img4 from '../images/section-4.jpg'

export default function Home() {
  return (
    <div>
      <TextWithImage
        title="Win a thousand Stars"
        body="We’re giving away 1,000 Stars to 1,000 Starbucks® Rewards members in our Million Stars Giveaway and much more all week!*"
        cta="Play to win"
        cta_link="#"
        img_src={img1}
        img_position_left={true}
        theme_light={true}
      />

      <TextWithImage
        subTitle="A new way to earn sips and trips"
        body="Now you can link your Starbucks® Rewards + Delta SkyMiles® accounts to get:"       
        body_list = {[ "150 Stars + 500 miles when you link before 12/31", "Double Stars on Delta travel days", "1 mile per $1 spent at Starbucks (excludes taxes and gratuities)**"]}
        cta="Link accounts"
        cta_link="#"
        img_src={img2}
        img_position_left={false}
        theme_light={true}
        txt_alignment_left={true}
      />

      <TextWithImage
        title="Perfectly pumpkin"
        body="Savor the season with a Pumpkin Spice Latte or Pumpkin Cream Cold Brew."
        cta="Order now"
        cta_link="#"
        img_src={img3}
        img_position_left={true}
        theme_light={false}
      />

      <TextWithImage
        title="Layers of baked apple yum"
        body="Try the Apple Crisp Oatmilk Macchiato, now nondairy and with Starbucks® Blonde Espresso."
        cta="Learn more"
        cta_link="#"
        img_src={img4}
        img_position_left={false}
        theme_light={false}
      />

      <Notice/>
    </div>
  )
}