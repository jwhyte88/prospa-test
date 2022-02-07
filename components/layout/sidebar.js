import Image from 'next/image'

export default function Sidebar(props) {

  return (
    <div className={`sidebar ${props.page}`}>
      
      <div className="sidebar__logo">
        <Image src="/prospa.svg" alt="Prospa Logo." width={109} height={24} />
      </div>

      <div className="sidebar__progress">
        <div className="active" /> <div /> <div /> <div /> <div />
      </div>

      <div className="sidebar__content">
        {props.title && 
          <div className="sidebar__content__title">
            {props.title}
          </div>
        }

        {props.detail && 
          <div className="sidebar__content__detail">
            {props.detail}
          </div>
        }

        {props.img && 
          <Image src={props.img} alt={props.imgAltText ? props.imgAltText : "Missing image alternative text."} width={294} height={304} />
        }
      </div>

      {props.copyright && 
        <div className="sidebar__copyright">{props.copyright}</div>
      }
    </div>
  )
}
