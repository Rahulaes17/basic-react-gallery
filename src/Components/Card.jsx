const Card = (props) => {
  return (
    <div>
      <div key={props.elem.id || idx}></div>
        <a href={props.elem.url}>
          <div className="h-60 w-60 overflow-hidden rounded-xl">
            <img className="h-full w-full object-cover" src={props.elem.download_url} alt="" />
          </div>
          <h2 className="font-semibold text-lg">{props.elem.author}</h2>
        </a>
    </div>
  )
}

export default Card
