import React from "react";

const Tokenomics = () => {
  return (
    <div className="bg-white p-8 rounded-lg flex flex-col gap-8">
      <h3 className="text-2xl font-[500]">Tokenomics</h3>
      <h4 className="text-lg font-[500]">Initial Distribution</h4>
      <div className="flex items-center gap-8">
        <div className="w-[100%] md:w-[180px] pie-chart flex justify-center items-center rounded-full aspect-square">
          <div className="w-[75%] md:w-[120px] bg-white rounded-full aspect-square" />
        </div>
        <ul className="flex flex-col gap-4 text-[#202020] font-[300]">
          <li className="flex gap-2 items-center">
            <div className="w-3 rounded-full aspect-square bg-[#0082FF]" />
            <p>Crowdsale investors: 80%</p>
          </li>
          <li className="flex gap-2 items-center">
            <div className="w-3 rounded-full aspect-square bg-[#FAA002]" />
            <p>Foundation: 20%</p>
          </li>
        </ul>
      </div>
      <p className="leading-7 text-[#3E424A] text-justify">
        Lorem ipsum dolor sit amet consectetur. Cras aliquet tristique ornare
        vestibulum nunc dignissim vel consequat. Leo etiam nascetur bibendum
        amet enim sit eget leo amet. At metus orci augue fusce eleifend lectus
        eu fusce adipiscing. Volutpat ultrices nibh sodales massa habitasse urna
        felis augue. Gravida aliquam fermentum augue eu. Imperdiet bibendum amet
        aliquam donec. Eget justo dui metus odio rutrum. Vel ipsum eget in at
        curabitur sem posuere facilisis vitae. Sed lorem sit mauris id eget arcu
        ut. Vulputate ipsum aliquet odio nisi eu ac risus.
      </p>
    </div>
  );
};

export default Tokenomics;
