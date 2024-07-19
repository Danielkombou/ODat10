import React, { useState } from "react";

function Schedule() {
  const [selected, setSelected] = useState(0);
  const myAgenda = [
    {
      name:"Opening Ceremony & Breakout Sessions - Venue: IRIC Amphitheatre",
      title: "Day 1",
      activities: [
        "Registration & Welcome Coffee",
        "Opening Ceremony",
        "Keynote Speeches from educational authorities in Cameroon, local administrators, Open Dreams Co-founder",
        "Insights and Discussions on International Education",
        "Training sessions for counselors and high school teachers",
        "Networking Lunch",
        "Breakout Sessions",
        "Dance Performances & Entertainment Acts",
        "Counselors: Informative Panels",
        "Group Reporting & Recommendations Sharing",
        "Closing Remarks & Transition",
      ],
    },
    {
      name:" Workshops, Contests, & Guest Speakers - Venue: IRIC focused on students",
      title: "Day 2",
      activities: [
        "Morning Coffee & Networking",
        "Keynote Address on International Education",
        "Concurrent Workshops (Various Topics)",
        "High School Students: Opportunities & Access",
        "University Students: Graduate-Level Summit",
        "Networking Lunch",
        "Guest Speaker Sessions",
        "Essay Writing Contest",
        "Public Speaking Competition",
        "Networking Reception",
      ],
    },
    {
      name:"Festivities & Gala - Venue: Djeuga Palace",  
      title: "Day 3",
      activities: [
        "Arrival of Members of the Open Dreams Family, Djeuga Palace Hotel ",
        "Arrival of Guests",
        "Arrival of VIPs ",
        "Cameroon Anthem, OD Anthem",
        "Keynote Speeches from Diplomatic Bodies, Ministers, Vice Chancellors, and Key Representatives",
        "Panel Discussion with Visiting University Representatives, OD Team, and OD Scholars",
        "Reflection on Open Dreams' 10-Year Journey",
        "Cultural Parade of OD Scholars according to their country of study",
        "Recognition and awards",
        "Networking Lunch and Community Engagement Fair Kickoff",
        "Community Engagement Fair - Interactive Booths, Exhibits, and Activities",
        "Gala Ticket Sales & VIP Arrivals",
        "Gala Program",
        "Awards Ceremony: Recognizing Scholars, Mentors, Volunteers",
        "Keynote Speeches & Fundraising Activities",
        "Gourmet Dinner & Networking",
        "Live Musical Performances & Entertainment",
        "Event Concludes with a Celebratory Toast",
      ],
    },
    {
        name:"ThanksGiving service",
        title:"Day 4",
        activities:[
            "As part of the celebration we will have a Thanksgiving Service to praise and honor God for the 10 years of triumph, impact, and community growth."
        ]
    }
  ];

  const items = Array.from({ length: 4 }, (_, i) => `Day ${i + 1}`);
  return (
    <div className="flex flex-col items-center">
      <div className="w-full md:w-auto">
        <h2 className="text-gray-900 mb-4 text-center md:text-left text-2xl md:text-3xl">Schedule</h2>
        <div className="bg-gray-100 p-2 md:p-3 rounded-full w-full flex-shrink-0 h-15 gap-2 md:gap-10 flex items-center justify-center">
          {items.map((item, index) => (
            <button
              key={index}
              onClick={() => setSelected(index)}
              className={`px-4 md:px-12 py-1 md:py-2 rounded-full cursor-pointer outline-0 ${
                selected === index
                  ? 'bg-blue-500 text-white'
                  : 'text-black'
              }`}
            >
              {item}
            </button>
          )
          )}
        </div>
         <div>
          <h1>
            {myAgenda[selected].title}
          </h1>
          <ul>{myAgenda[selected].activities.map((item)=>(
            <li key={item}>{item}</li>
          ))}</ul>
         </div>
      </div>
    </div>
  );
}

export default Schedule;
