import { Briefcase, FileText, IndianRupee, Laptop, MapPin } from "lucide-react";
import { Jobdetails } from "../content";


interface Props {
    data: Jobdetails
}

const Jobdetailscard : React.FC<Props> = ({
    data
}) => {
    return(
        <div className="rounded-sm bg-white">
        <div className="flex flex-col gap-3 p-5">
          <p className="h5 ">{data.jobtitle}</p>
          <div className="flex flex-wrap gap-5">
            <div className="flex gap-2 border-r pr-6">
              <Briefcase size={20} className="pt-1" />
              <p>2-4 Yrs</p>
            </div>
            <div className="flex gap-1 border-r pr-6">
              <IndianRupee size={20} className="pt-1" />
              <p>{data.salary}</p>
            </div>
            <div className="flex gap-1 border-r pr-6">
              <Laptop size={22} className="pt-1" />
              <p>{data.jobtype}</p>
            </div>
            <div className="flex gap-1 ">
              <MapPin size={20} className="pt-1" />
              <p>{data.location}</p>
            </div>
          </div>
          <div className="flex  gap-1">
            <FileText size={20} className="pt-1" />
            <p>
              {data.description}
            </p>
          </div>
        </div>
      </div>
    )
}

export default Jobdetailscard