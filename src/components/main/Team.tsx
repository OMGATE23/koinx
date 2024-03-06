import React from "react";
const TEAM: { name: string; img: string }[] = [
  {
    name: "John Smith",
    img: "/assets/team-1.png",
  },
  {
    name: "Elina Williams",
    img: "/assets/team-2.png",
  },
  {
    name: "John Smith",
    img: "/assets/team-3.png",
  },
];
const Team = () => {
  return (
    <div className="bg-white p-4 md:p-8 rounded-lg flex flex-col gap-8">
      <h3 className="text-2xl font-[500]">Team</h3>
      <p className="font-[300] leading-7 text-[#3E424A]">
        Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu
        nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium
        quam. Facilisis purus convallis quam augue.
      </p>
      <div className="flex flex-col gap-6">
        {TEAM.map((member) => (
          <div
            key={member.img}
            className="flex flex-col md:flex-row items-center md:items-start justify-center gap-8 rounded-lg bg-[#E8F4FD] px-2 md:px-8 py-6"
          >
            <div className="flex flex-col items-center md:items-start gap-2">
              <img
                alt={member.name}
                className="w-[80%] md:w-full rounded-md"
                width={120}
                src={member.img}
              />
              <div className="flex flex-col items-center gap-1">
                <p className="text-[#0F1629] text-sm font-[500]">
                  {member.name}
                </p>
                <p className="text-[#788F9B] text-xs">Designation Here</p>
              </div>
            </div>
            <p className=" leading-6 md:leading-7 md:w-[80%] text-sm text-[#0F1629]">
              Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit
              fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis
              in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet
              nec neque sed pellentesque viverra. Consectetur proin amet ut id
              facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu
              egestas dolor est ipsum. Malesuada etiam mi gravida praesent
              interdu
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
