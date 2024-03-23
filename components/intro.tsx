import { AppButton } from "./button";

const Intro = () => {
  return (
    <div className="bg-brand03 flex self-stretch md:min-h-[558px] p-[115px_32px_0px] justify-center">
      <div className="absolute bg-red-50 w-full md:h-[380px] flex self-end" />
      <div className="flex flex-col gap-[40px] z-10 items-center">
        <div className="flex flex-col gap-4 items-center">
          <h3 className="font-black md:text-[64px] text-[48px] md:leading-[76.8px] text-center">
            DOCUHELP <span className="text-brand01">WRITES</span> <br />{" "}
            BUSINESS DOCUMENTS.
          </h3>
          <p className="font-normal md:text-xl text-lg text-center text-gray01">
            We are a software company that help businesses build fast business
            <br /> documents that can help the business reach it goals.
          </p>
        </div>
        <div className="flex gap-5">
          <AppButton name="Get Started" className="py-4 md:w-[160px]" />
          <AppButton
            name="Sign In"
            variant="outline"
            className="bg-brand02 md:w-[160px] py-4"
          />
        </div>
      </div>
    </div>
  );
};

export default Intro;
