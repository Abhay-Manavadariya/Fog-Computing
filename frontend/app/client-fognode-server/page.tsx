import { Footer } from "@/components/footer";
import { Main } from "./_components/main";

const ClientFogNodeServerLayout = () => {
  return (
    <div className="min-h-full flex flex-col dark:bg-[#1F1F1F]">
      <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-1 pb-10">
        <Main />
      </div>
      <Footer />
    </div>
  );
};

export default ClientFogNodeServerLayout;