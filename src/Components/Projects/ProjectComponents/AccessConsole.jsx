import Icon from "../../Icon";

function AccessConsole({ graphLink, level }) {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col">
        <div className="flex flex-row mr-3">
          <span className="text-xs mr-2 self-center">GraphQL API</span>
          <div className="text-black/20 group">
            <Icon name="Information" />
            <span className="graphql-tooltip font-normal group-hover:scale-100">
              "The GraphQL API is avaible at this endpoint."
            </span>
          </div>
        </div>
        <div className="flex flex-row">
          <p className="text-xs mr-1">{graphLink}</p>
          <button className="text-xs my-auto group text-black/40">
            <Icon name="Clipboard" />
            <span className="copy-tooltip group-hover:scale-100">Copy.</span>
          </button>
        </div>
      </div>
      <div className="flex flex-col mx-auto my-auto">
        <div className="flex flex-row mb-1 group">
          <span className="text-xs mr-2 self-center">
            {level == "Owner" ? "Admin" : level} secret
          </span>
          <div className="text-black/20">
            <Icon name="Information" />
          </div>
          <span className="secret-tooltip font-normal group-hover:scale-100">
            "Admin secret is the secret key to access your GraphQL API in admin
            mode."
          </span>
        </div>
        <div className="flex flex-row">
          <span className="text-xs mr-1">••••••••••••••••••••</span>
          <button className="text-xs my-auto group text-black/40">
            <Icon name="Clipboard" />
            <span className="copy-tooltip group-hover:scale-100">Copy.</span>
          </button>
        </div>
      </div>
      <button className="bg-hasureblue text-white text-sm font-bold my-auto px-8 py-3 rounded-md hover:shadow-md">
        Launch Console
      </button>
    </div>
  );
}

export default AccessConsole;
