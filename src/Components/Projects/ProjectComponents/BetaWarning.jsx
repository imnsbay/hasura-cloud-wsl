import { useState } from "react";
import Icon from "../../Icon";

function BetaWarning() {
  const [showBetaWarning, setShowBetaWarning] = useState(true);

  const closeBetaWarning = () => {
    console.log("closed beta warning");
    setShowBetaWarning(false);
  };

  if (showBetaWarning) {
    return (
      <div className="flex bg-white w-full h-[70px] border-hidden rounded-md">
        <div className="flex flex-row h-max w-1/2 ml-8 my-auto">
          <span className="text-hasureblue my-auto mr-3">
            <Icon name="Cloud" />
          </span>
          <div className="flex flex-col w-max h-max my-auto">
            <span className="text-xs">Coming soon</span>
            <span className="text-sm font-bold">
              Hasura Cloud on Google Cloud Platform
            </span>
          </div>
        </div>
        <div className="flex flex-row h-max w-1/2 mr-8 my-auto">
          <button
            onClick={closeBetaWarning}
            className="text-hasureblue ml-auto mr-4"
          >
            Dismiss
          </button>
          <button className="text-hasureblue text-sm font-bold px-8 py-2 border-solid border-hasureblue border-2 rounded-md">
            Request Beta Access
          </button>
        </div>
      </div>
    );
  }

  return null;
}

export default BetaWarning;
