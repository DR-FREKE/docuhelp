const OptionValues = () => (
  <div className="md:w-[316px] md:h-[66px] rounded-full border p-[26px_53px] border-white bg-[#5D4EF8] flex justify-center items-center">
    <div className="flex md:gap-[50px] items-center">
      <div className="flex items-center">
        <div className="md:w-4 md:h-4 bg-white rounded-full" />
        <hr className="md:w-[26px] border-[3px] border-white -ml-1" />
      </div>
      <span className="font-bold text-xl">Write Letters</span>
    </div>
  </div>
);

const HelpSection = () => {
  return (
    <section className="flex bg-brand01 w-full text-white md:min-h-[850px]">
      <div className="flex-1 md:pl-56 flex flex-col gap-16 relative">
        <div className="md:mt-[99px] md:w-[648px] flex flex-col gap-5">
          <p className="md:text-2xl text-[#DBD8FD]">
            Help your team get better
          </p>
          <h3 className="md:text-[64px] md:leading-[89.6px] font-black">
            What document would you like to write?
          </h3>
          <p className="font-medium md:text-2xl text-[#DBD8FD]">
            Just enter your text in the prompt and start in seconds...
          </p>
        </div>
        <div className="bg-gradient-to-b from-transparent from-70% via-transparent to-[#1A0AD7] to-30% w-[395px] h-[461px] top-[350px] blur-[3rem] sm:w-[68.75rem] md:w-[444px] absolute z-10" />
        <div className="md:w-[395px] h-full flex flex-col gap-5">
          <OptionValues />
          <OptionValues />
        </div>
      </div>
      <div className="bg-brand03 text-black w-[626px]">
        Write Quick Accurate Business Letter
      </div>
    </section>
  );
};

export default HelpSection;
