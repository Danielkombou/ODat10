import React, { useState } from "react";


function Schedule() {
  const [selected, setSelected] = useState(0);
 

  const myAgenda = [
    {
      name: "Opening Ceremony & Breakout Sessions - Venue: IRIC Amphitheatre",
      title: "Day 1",
      activities: [
        { time: "8:00 AM - 8:30 AM", description: "Registration & Welcome Coffee" },
        { time: "8:30 AM - 12:00 PM", description: "Opening Ceremony, Keynote Speeches from educational authorities in Cameroon, local administrators, Open Dreams Co-founder, Insights and Discussions on International Education, Training sessions for counselors and high school teachers" },
        { time: "12:00 PM - 1:00 PM", description: "Networking Lunch" },
        { time: "1:00 PM - 3:30 PM", description: "Breakout Sessions, Dance Performances & Entertainment Acts, Counselors: Informative Panels" },
        { time: "3:30 PM - 4:30 PM", description: "Group Reporting & Recommendations Sharing" },
        { time: "4:30 PM - 5:00 PM", description: "Closing Remarks & Transition" },
      ],
    },
    {
      name: "Workshops, Contests, & Guest Speakers - Venue: IRIC focused on students",
      title: "Day 2",
      activities: [
        { time: "9:00 AM - 9:30 AM", description: "Morning Coffee & Networking" },
        { time: "9:30 AM - 10:30 AM", description: "Keynote Address on International Education" },
        { time: "10:30 AM - 12:00 PM", description: "Concurrent Workshops (Various Topics), High School Students: Opportunities & Access, University Students: Graduate-Level Summit" },
        { time: "12:00 PM - 1:30 PM", description: "Networking Lunch" },
        { time: "1:30 PM - 3:00 PM", description: "Guest Speaker Sessions" },
        { time: "3:00 PM - 4:30 PM", description: "Essay Writing Contest" },
        { time: "4:30 PM - 6:00 PM", description: "Public Speaking Competition" },
        { time: "6:00 PM - 6:30 PM", description: "Networking Reception" },
      ],
    },
    {
      name: "Festivities & Gala - Venue: Djeuga Palace",
      title: "Day 3",
      activities: [
        { time: "12:00 PM - 1:00 PM", description: "Arrival of Members of the Open Dreams Family, Djeuga Palace Hotel" },
        { time: "1:00 PM - 1:40 PM", description: "Arrival of Guests" },
        { time: "1:40 PM - 2:00 PM", description: "Arrival of VIPs" },
        { time: "2:00 PM - 3:00 PM", description: "Cameroon Anthem, OD Anthem, Keynote Speeches from Diplomatic Bodies, Ministers, Vice Chancellors, and Key Representatives, Panel Discussion with Visiting University Representatives, OD Team, and OD Scholars, Reflection on Open Dreams' 10-Year Journey, Cultural Parade of OD Scholars according to their country of study, Recognition and awards, Networking Lunch and Community Engagement Fair Kickoff" },
        { time: "4:00 PM - 5:00 PM", description: "Gala Ticket Sales & VIP Arrivals" },
        { time: "5:00 PM - 7:00 PM", description: "Gala Program, Awards Ceremony: Recognizing Scholars, Mentors, Volunteers, Keynote Speeches & Fundraising Activities" },
        { time: "7:00 PM - 8:30 PM", description: "Gourmet Dinner & Networking" },
        { time: "8:30 PM - 10:00 PM", description: "Live Musical Performances & Entertainment" },
        { time: "10:00 PM", description: "Event Concludes with a Celebratory Toast" },
      ],
    },

    {
        name:"ThanksGiving service",
        title:"Day 4",
        activities:[
            {time:"8:00 AM - 10 AM", description:"As part of the celebration we will have a ,Thanksgiving Service to praise and honor God for the 10 years of triumph, Impact and community growth."},
        ]
    }
  ]; 

  const items = Array.from({ length: myAgenda.length }, (_, i) => `Day ${i + 1}`);

  return (
    <div className="flex flex-col items-center">
      <div className="w-full md:w-auto">
        <h2 className="text-gray-900 mb-4 text-center md:text-left text-2xl md:text-3xl">Schedule</h2>
        <div className="bg-gray-100 p-2 md:p-3 rounded-full w-full flex-shrink-0 h-15 gap-2 md:gap-10 flex items-center justify-center">
  {items.map((item, index) => (
    <button
      key={index}
      onClick={() => setSelected(index)}
      className={`px-4 md:px-12 py-1 md:py-2 rounded-full cursor-pointer outline-0 flex items-center justify-center min-w-[100px] h-[40px] ${
        selected === index ? 'bg-blue-500 text-white' : 'text-black border border-transparent'
      }`}
      style={{ boxSizing: 'border-box', transition: 'background-color 0.3s', fontWeight: 'normal' }}
    >
      {item}
    </button>
  ))}
</div>
<div className="max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto overflow-auto">
  <h1 className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-800">{myAgenda[selected].title}</h1>
  <ul className="list-none">
    {myAgenda[selected].activities.map((activity, index) => (
      <li key={index} className="whitespace-nowrap">
        <div className="font-bold">{activity.time}: </div>
       
        {activity.description.includes(',') ? (
  activity.description.split(',').map((item, index) => (
    <div key={index}>
      <span className="text-blue-500 pr-2 inline-block min-w-[20px]">-</span>{item.trim()}
    </div>
  ))
) : (
  <div><span className="text-blue-500 pr-2 inline-block min-w-[20px]">-</span>{activity.description}</div>
)}
       
         </li>
    ))}
  </ul>
</div>
      </div>
    </div>
  );
}

export default Schedule;