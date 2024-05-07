import React, { useState } from "react"

const DepartmentSelect = () => {
  const [checkedValues, setCheckedValues] = useState([])

  function handleChange(event: { target: { value: any; checked: any } }) {
    const { value, checked } = event.target

    if (checked) {
      setCheckedValues((prev) => [...prev, value])
    } else {
      setCheckedValues((prev) => prev.filter((electedoption) => electedoption !== value))
    }
  }
  //console.log('Selected values:', checkedValues);
  return (
    <div>
      <div className="inputs flex flex-col gap-2">
        <div className="flex items-center">
          <input
            type="checkbox"
            style={{ width: "16px", height: "16px" }}
            value="It & Information security"
            onChange={handleChange}
          />
          <p className="pl-3">It & Information security</p>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            style={{ width: "16px", height: "16px" }}
            value="Engineering"
            onChange={handleChange}
          />
          <p className="pl-3">Engineering</p>
        </div>
        <div className="flex items-center">
          <input type="checkbox" style={{ width: "16px", height: "16px" }} value="BPO & KPO" onChange={handleChange} />
          <p className="pl-3">BPO & KPO</p>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            style={{ width: "16px", height: "16px" }}
            value="Finance & Accounting"
            onChange={handleChange}
          />
          <p className="pl-3">Finance & Accounting</p>
        </div>
        <div className="flex items-center">
          <input type="checkbox" style={{ width: "16px", height: "16px" }} value="Sales" onChange={handleChange} />
          <p className="pl-3">Sales</p>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            style={{ width: "16px", height: "16px" }}
            value="Production & Manufacturing"
            onChange={handleChange}
          />
          <p className="pl-3">Production & Manufacturing</p>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            style={{ width: "16px", height: "16px" }}
            value="Human Resources"
            onChange={handleChange}
          />
          <p className="pl-3">Human Resources</p>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            style={{ width: "16px", height: "16px" }}
            value="Data Science & Data Analytics"
            onChange={handleChange}
          />
          <p className="pl-3">Data Science & Data Analytics</p>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            style={{ width: "16px", height: "16px" }}
            value="Healthcare & Lifescience"
            onChange={handleChange}
          />
          <p className="pl-3">Healthcare & Lifescience</p>
        </div>
        <div className="flex items-center">
          <input type="checkbox" style={{ width: "16px", height: "16px" }} value="Consulting" onChange={handleChange} />
          <p className="pl-3">Consulting</p>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            style={{ width: "16px", height: "16px" }}
            value="Teaching & Training"
            onChange={handleChange}
          />
          <p className="pl-3">Teaching & Training</p>
        </div>
        <div className="flex items-center">
          <input type="checkbox" style={{ width: "16px", height: "16px" }} value="Legal" onChange={handleChange} />
          <p className="pl-3">Legal</p>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            style={{ width: "16px", height: "16px" }}
            value="Product Management"
            onChange={handleChange}
          />
          <p className="pl-3">Product Management</p>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            style={{ width: "16px", height: "16px" }}
            value="Quality Assurance"
            onChange={handleChange}
          />
          <p className="pl-3">Quality Assurance</p>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            style={{ width: "16px", height: "16px" }}
            value="Strategic & Top Management "
            onChange={handleChange}
          />
          <p className="pl-3">Strategic & Top Management</p>
        </div>
      </div>
    </div>
  )
}

export default DepartmentSelect
