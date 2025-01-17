import { PiStarFourFill} from "react-icons/pi";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { FaCircleMinus } from "react-icons/fa6";
import { useState} from "react";

function App() {
  const [visibleP, setVisibleP] = useState(0);

  const toggleVisibility = (index) => {
    setVisibleP(visibleP === index ? null : index)
  }

  return (
    <>
      <div className="h-screen w-full relative">
        <div className="h-2/5 w-full bg-[#301534]"></div>
        <div className="h-3/5 w-full bg-[#F9EEFF]"></div>
        <div className="h-auto w-5/6 sm:w-3/4 lg:w-1/2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-10 rounded-md">
          <h1 className="text-4xl font-bold mb-7 flex items-center gap-5"><span><PiStarFourFill  className="text-[#A828E3]"/></span> FAQs</h1>
          <div>
            <div className="relative">
              <h6 className="mb-4 font-bold">What is Frontend Mentor, and how will it help me?</h6>
              {visibleP === 0 && (
                <p className="mb-8">Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.</p>
                )}
                <button onClick={() => toggleVisibility(0)} className="absolute top-1 right-0 text-[#A828E3]">{visibleP === 0 ? <FaCircleMinus/> : <BsFillPlusCircleFill/>}</button>
            </div>
            <div className="relative">
              <h6 className="mb-4 font-bold">Is Frontend Mentor free?</h6>
              {visibleP === 1 && (
                <p className="mb-8">The majority of our challenges are free, yes. We do have some that are premium and require a Pro subscription to access. It will say on each challenge whether they are free or premium, so it's easy to tell the difference.</p>
                )}
                <button onClick={() => toggleVisibility(1)} className="absolute top-1 right-0 text-[#A828E3]">{visibleP === 1 ? <FaCircleMinus/> : <BsFillPlusCircleFill/>}</button>
            </div>
            <div className="relative">
              <h6 className="mb-4 font-bold">Can I use Frontend Mentor projects in my portfolio?</h6>
              {visibleP === 2 && (
                <p className="mb-8">Definitely! Please do feel free to use whatever you build in your portfolio. Helping developers add professional-looking projects to their portfolio was one of the reasons we created this platform!</p>
                )}
                <button onClick={() => toggleVisibility(2)} className="absolute top-1 right-0 text-[#A828E3]">{visibleP === 2 ? <FaCircleMinus/> : <BsFillPlusCircleFill/>}</button>
            </div>
            <div className="relative">
              <h6 className="mb-4 font-bold">How can I get help if I'm stuck on a challenge?</h6>
              {visibleP === 3 && (
                <p>The best and quickest way to get help on a challenge is in our Discord server. There are thousands of other developers in there, so it's a great place to ask questions.</p>
                )}
                <button onClick={() => toggleVisibility(3)} className="absolute top-1 right-0 text-[#A828E3]">{visibleP === 3 ? <FaCircleMinus/> : <BsFillPlusCircleFill/>}</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App