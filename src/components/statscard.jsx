import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function StatsCard({icon,title,value, bgColor, iconColor}){

  return(
    <div className="col-12 col-sm-6 col-lg-3">
      <div className="card p-3 shadow-sm rounded">
        <div  className="rounded-circle d-flex align-items-center justify-content-center"
          style={{ backgroundColor: bgColor, width: "45px", height: "45px" }}>
            <FontAwesomeIcon icon={icon} style={{ color: iconColor }} />
            </div>
            <h3 className="fw-bold mt-2">{value}</h3>
            <p className="text-muted mb-0">{title}</p>
      </div>
    </div>
  )
}


export default StatsCard;
