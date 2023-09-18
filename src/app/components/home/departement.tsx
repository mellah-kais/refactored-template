"use client"
import Image from "next/image"
import { useState } from "react";
type Departement = {title:string,italicPara:string,paragraph:string,image:string}
const departement :string[] = ["Cardiology","Neurology","Hepatology","Pediatrics","Eye Care"]
const DepartementDetail : {title:string,italicPara:string,paragraph:string,image:string}[] = [
  { 
    title:"Cardiology",
    italicPara:"Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka",
    paragraph:"Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero",
    image:"/img/departments-1.jpg"
  },
  { 
    title:"Neurology",
    italicPara:"Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka",
    paragraph:"Ea ipsum voluptatem consequatur quis est. Illum error ullam omnis quia et reiciendis sunt sunt est. Non aliquid repellendus itaque accusamus eius et velit ipsa voluptates. Optio nesciunt eaque beatae accusamus lerode pakto madirna desera vafle de nideran pal",
    image:"/img/departments-2.jpg"
  },
  { 
    title:"Hepatology",
    italicPara:"Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka",
    paragraph:"Iure officiis odit rerum. Harum sequi eum illum corrupti culpa veritatis quisquam. Neque necessitatibus illo rerum eum ut. Commodi ipsam minima molestiae sed laboriosam a iste odio. Earum odit nesciunt fugiat sit ullam. Soluta et harum voluptatem optio quae",
    image:"/img/departments-3.jpg"
  },
  { 
    title:"Pediatrics",
    italicPara:"Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka",
    paragraph:"Eaque consequuntur consequuntur libero expedita in voluptas. Nostrum ipsam necessitatibus aliquam fugiat debitis quis velit. Eum ex maxime error in consequatur corporis atque. Eligendi asperiores sed qui veritatis aperiam quia a laborum inventore",
    image:"/img/departments-4.jpg"
  },
  { 
    title:"Eye Care",
    italicPara:"Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka",
    paragraph:"Exercitationem nostrum omnis. Ut reiciendis repudiandae minus. Omnis recusandae ut non quam ut quod eius qui. Ipsum quia odit vero atque qui quibusdam amet. Occaecati sed est sint aut vitae molestiae voluptate vel",
    image:"/img/departments-5.jpg"
  },
]
const Departement = () => {
    const [view,setView] = useState(0)
    return (
        <section id="departments" className="departments">
        <div className="container">
          <div className="section-title">
            <h2>Departments</h2>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
          </div>
          <div className="row gy-4">
            <div className="col-lg-3">
              <ul className="nav nav-tabs flex-column">
          {DepartementDetail.map((dep,index)=> (
                  <li className="nav-item" key="dep" onClick={()=>setView(index)}>
                  <a className={`nav-link ${view === index ?"active" : "" } show`} href={"#tab-"+index+1} >{dep.title}</a>
                </li>
          ))}
              </ul>
            </div>
            <div className="col-lg-9">
              <div className="tab-content">
                <div className="tab-pane active show" id="tab-1">
                  <div className="row gy-4">
                    <div className="col-lg-8 details order-2 order-lg-1">
                      <h3>{DepartementDetail[view].title}</h3>
                      <p className="fst-italic">{DepartementDetail[view].italicPara}</p>
                      <p>{DepartementDetail[view].paragraph}</p>
                    </div>
                    <div className="col-lg-4 text-center order-1 order-lg-2">
                      <Image  width="306" height="267"src={DepartementDetail[view].image} alt="" className="Image -fluid"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Departement