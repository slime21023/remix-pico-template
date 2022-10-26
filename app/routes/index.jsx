import Nav from "~/components/nav"
import Card from "~/components/card"

const images = [
  { imageUrl: "/images/img1.jpeg", header:"image 1", footer: "" },
  { imageUrl: "/images/img2.jpeg", header:"image 2", footer: "" },
  { imageUrl: "/images/img3.jpeg", header:"image 3", footer: "" },
  { imageUrl: "/images/img4.jpeg", header:"image 4", footer: "" },
  { imageUrl: "/images/img5.jpeg", header:"image 5", footer: "" },
  { imageUrl: "/images/img6.jpeg", header:"image 6", footer: "" },
]

function createCard(item, index) {
  return (
    <div className="col" key={index}>
      <Card imageUrl={item.imageUrl} header={item.header} footer={item.footer}/>
    </div>
  )
}

export default function Index() {
  return (
    <div className="container">
      <Nav />
      <div className="grid-3_xs-1">
        { images.map(createCard) }
      </div>
    </div>
  );
}
