import InvitationLinkGenerator from "../components/dashboard/InvitationLinkGenerator";


const PageGenerate = () => {


  return (
    <div className="min-h-screen flex justify-center items-start bg-amber-600">
      <div className="w-[560px] min-h-screen bg-white shadow-lg overflow-y-auto">
       <InvitationLinkGenerator/>
      </div>
    </div>
  );
};

export default PageGenerate;
